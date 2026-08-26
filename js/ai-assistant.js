// ============================================================
// AI-ASSISTANT.JS - TRỢ LÝ AI THÔNG MINH
// ============================================================

let aiLoading = false;

// ============================================
// HÀM GỌI API GEMINI (MIỄN PHÍ)
// ============================================
async function callGeminiAPI(userMessage) {
    const config = getApiConfig();
    if (!config || !config.apiKey || config.apiKey === 'AIzaSy...') {
        console.warn('⚠️ API Key chưa được cấu hình, sử dụng fallback');
        return null;
    }
    
    const url = `${config.url}/${config.model}:generateContent?key=${config.apiKey}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: `Bạn là trợ lý học tập AI cho sinh viên. Hãy trả lời câu hỏi của sinh viên một cách chi tiết, dễ hiểu, và hữu ích. Nếu câu hỏi liên quan đến học tập, hãy giải thích rõ ràng và đưa ra ví dụ cụ thể. Nếu là câu hỏi về sức khỏe tinh thần, hãy trả lời với sự đồng cảm và đưa ra lời khuyên tích cực.\n\nCâu hỏi: ${userMessage}`
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1000,
            }
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ Gemini API Error:', errorData);
        throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return text;
}

// ============================================
// HÀM GỌI API OPENAI
// ============================================
async function callOpenAIAPI(userMessage) {
    const config = getApiConfig();
    if (!config || !config.apiKey || config.apiKey === 'sk-...') {
        console.warn('⚠️ API Key chưa được cấu hình, sử dụng fallback');
        return null;
    }
    
    const response = await fetch(config.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model,
            messages: [
                {
                    role: 'system',
                    content: 'Bạn là trợ lý học tập AI cho sinh viên. Hãy trả lời câu hỏi một cách chi tiết và hữu ích.'
                },
                {
                    role: 'user',
                    content: userMessage
                }
            ],
            temperature: 0.7,
            max_tokens: 1000,
        })
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
}

// ============================================
// HÀM GỌI API HUGGINGFACE
// ============================================
async function callHuggingFaceAPI(userMessage) {
    const config = getApiConfig();
    if (!config || !config.apiKey || config.apiKey === 'hf_...') {
        console.warn('⚠️ API Key chưa được cấu hình, sử dụng fallback');
        return null;
    }
    
    const response = await fetch(`${config.url}/${config.model}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: `Bạn là trợ lý học tập AI. Hãy trả lời: ${userMessage}`,
            parameters: {
                max_new_tokens: 500,
                temperature: 0.7,
                return_full_text: false
            }
        })
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data[0]?.generated_text || '';
}

// ============================================
// HÀM XỬ LÝ CHÍNH - GỌI API THỰC TẾ
// ============================================
async function getAIResponse(userMessage) {
    if (aiLoading) return '🔄 Đang xử lý, vui lòng chờ...';
    
    aiLoading = true;
    showLoading('AI đang suy nghĩ...');
    
    try {
        const apiName = CONFIG.CURRENT_API;
        let response = null;
        
        // Thử gọi API thực tế
        switch (apiName) {
            case 'GEMINI':
                response = await callGeminiAPI(userMessage);
                break;
            case 'OPENAI':
                response = await callOpenAIAPI(userMessage);
                break;
            case 'HUGGINGFACE':
                response = await callHuggingFaceAPI(userMessage);
                break;
            default:
                response = null;
        }
        
        // Nếu API trả về kết quả hợp lệ
        if (response && response.length > 20) {
            return response;
        }
        
        // FALLBACK: Nếu API không hoạt động, dùng knowledge base nâng cao
        console.warn('⚠️ API không phản hồi, sử dụng knowledge base fallback');
        return getAIResponseFallback(userMessage);
        
    } catch (error) {
        console.error('❌ Lỗi khi gọi AI:', error);
        showToast('⚠️ Lỗi kết nối AI, đang sử dụng kiến thức nội bộ...', 'warning', 4000);
        return getAIResponseFallback(userMessage);
    } finally {
        aiLoading = false;
        hideLoading();
    }
}

// ============================================
// FALLBACK: KNOWLEDGE BASE NÂNG CAO
// ============================================
function getAIResponseFallback(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Tìm kiếm câu trả lời phù hợp
    for (const item of knowledgeBaseAdvanced) {
        for (const keyword of item.keywords) {
            if (msg.includes(keyword.toLowerCase())) {
                return item.response;
            }
        }
    }
    
    return "🤔 Tôi chưa có đủ thông tin về câu hỏi này. " +
           "Hãy thử hỏi tôi về:\n" +
           "📚 Các môn học (lập trình, toán, tiếng Anh, ...)\n" +
           "🧠 Cách học hiệu quả, quản lý thời gian\n" +
           "💪 Sức khỏe tinh thần, giảm căng thẳng\n\n" +
           "Hoặc bạn có thể cấu hình API Key trong file config.js để tôi trả lời thông minh hơn! 🚀";
}

// ============================================
// KNOWLEDGE BASE NÂNG CAO (KHI OFFLINE)
// ============================================
const knowledgeBaseAdvanced = [
    {
        keywords: ['lập trình', 'code', 'python', 'javascript', 'java', 'c++'],
        response: "💻 **Học lập trình hiệu quả:**\n\n" +
                  "1️⃣ **Thực hành mỗi ngày:** Code ít nhất 30 phút/ngày\n" +
                  "2️⃣ **Dự án thực tế:** Làm ứng dụng/công cụ cho nhu cầu cá nhân\n" +
                  "3️⃣ **Đọc code người khác:** Học từ GitHub, Stack Overflow\n" +
                  "4️⃣ **Ghi chú và giải thích:** Viết blog hoặc note lại cách giải quyết\n" +
                  "5️⃣ **Tham gia cộng đồng:** Reddit, Dev.to, nhóm FB lập trình\n\n" +
                  "✨ **Mẹo:** Bắt đầu với Python hoặc JavaScript - dễ học và nhiều cơ hội!"
    },
    // ... (giữ nguyên các mục khác đã có)
];

// ============================================
// HÀM XỬ LÝ SỰ KIỆN CHAT
// ============================================
async function handleAIChat() {
    const input = document.getElementById('aiInput');
    const output = document.getElementById('aiOutput');
    const message = input.value.trim();
    
    if (!message) {
        showToast('Vui lòng nhập câu hỏi!', 'warning');
        return;
    }
    
    // Hiển thị câu hỏi
    output.innerHTML = `<div class="chat-message user">${message}</div>`;
    input.value = '';
    
    // Gọi AI
    const response = await getAIResponse(message);
    
    // Hiển thị phản hồi
    output.innerHTML += `<div class="chat-message ai">${response}</div>`;
    output.scrollTop = output.scrollHeight;
    
    // Lưu lịch sử (tùy chọn)
    saveChatHistory(message, response);
}
