// ============================================================
// AI-ASSISTANT.JS - TRỢ LÝ AI SỬ DỤNG GEMINI
// ============================================================

let aiLoading = false;
let chatHistory = [];

// ============================================
// HÀM GỌI GEMINI API
// ============================================
async function callGeminiAPI(userMessage, context = '') {
    const config = getGeminiConfig();
    
    // Kiểm tra API key
    if (!config.apiKey || config.apiKey === 'AIzaSyDz2PZpHQ2mU3iMmLjX5KxV3F9ZdM3FgwM') {
        console.warn('⚠️ API Key chưa được cấu hình, sử dụng fallback');
        showToast('⚠️ Vui lòng cấu hình API Key trong file config.js', 'warning', 5000);
        return null;
    }
    
    const url = `${config.url}/${config.model}:generateContent?key=${config.apiKey}`;
    
    // Xây dựng prompt với context
    const systemPrompt = `Bạn là "StudyAI" - trợ lý học tập thông minh dành cho sinh viên. 
Nhiệm vụ của bạn:
1. Trả lời câu hỏi học tập một cách chi tiết, dễ hiểu
2. Đưa ra ví dụ cụ thể và thực tế
3. Nếu là câu hỏi về sức khỏe tinh thần, trả lời với sự đồng cảm
4. Sử dụng tiếng Việt trong giao tiếp
5. Giữ giọng điệu thân thiện, tích cực

${context ? `Context bổ sung: ${context}` : ''}

Câu hỏi của sinh viên: ${userMessage}`;

    try {
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
                                text: systemPrompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1000,
                    topP: 0.95,
                    topK: 40
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ Gemini API Error:', errorData);
            
            // Xử lý lỗi cụ thể
            if (response.status === 403) {
                showToast('❌ API Key không hợp lệ hoặc hết hạn!', 'error', 5000);
            } else if (response.status === 429) {
                showToast('⚠️ Đã vượt quá giới hạn request, vui lòng thử lại sau', 'warning', 5000);
            } else {
                showToast(`❌ Lỗi API: ${response.status}`, 'error', 4000);
            }
            
            return null;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        if (!text) {
            console.warn('⚠️ Gemini trả về phản hồi rỗng');
            return null;
        }
        
        return text;
        
    } catch (error) {
        console.error('❌ Lỗi kết nối Gemini:', error);
        showToast('❌ Lỗi kết nối đến Gemini API', 'error', 4000);
        return null;
    }
}

// ============================================
// HÀM XỬ LÝ CHÍNH
// ============================================
async function getAIResponse(userMessage) {
    if (aiLoading) {
        showToast('⏳ AI đang xử lý, vui lòng chờ...', 'warning');
        return;
    }
    
    aiLoading = true;
    showLoading('🧠 AI đang suy nghĩ...');
    
    try {
        // Lấy context từ lịch sử chat (5 tin nhắn gần nhất)
        const recentHistory = chatHistory.slice(-5);
        const context = recentHistory.length > 0 
            ? `Lịch sử trò chuyện gần đây:\n${recentHistory.join('\n')}`
            : '';
        
        // Gọi Gemini API
        let response = await callGeminiAPI(userMessage, context);
        
        // Nếu API thất bại, sử dụng fallback
        if (!response) {
            console.warn('⚠️ Sử dụng knowledge base fallback');
            response = getAIResponseFallback(userMessage);
        }
        
        // Lưu vào lịch sử
        chatHistory.push(`User: ${userMessage}`);
        chatHistory.push(`AI: ${response.substring(0, 100)}...`);
        
        // Giới hạn lịch sử
        if (chatHistory.length > 50) {
            chatHistory = chatHistory.slice(-50);
        }
        
        return response;
        
    } catch (error) {
        console.error('❌ Lỗi xử lý AI:', error);
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
    
    return `🤔 Tôi chưa có đủ thông tin về câu hỏi này. 

📌 Để tôi trả lời thông minh hơn, bạn cần:
1️⃣ Đăng ký Gemini API key tại: https://ai.google.dev/gemini-api
2️⃣ Dán key vào file js/config.js (dòng apiKey)
3️⃣ Làm mới trang web

💡 Hoặc bạn có thể thử hỏi tôi về:
• 📚 Các môn học (lập trình, toán, tiếng Anh...)
• 🧠 Phương pháp học hiệu quả
• 💪 Sức khỏe tinh thần

Hãy thử lại nhé! 🚀`;
}

// ============================================
// KNOWLEDGE BASE NÂNG CAO (KHI OFFLINE)
// ============================================
const knowledgeBaseAdvanced = [
    {
        keywords: ['lập trình', 'code', 'python', 'javascript', 'java', 'c++', 'html', 'css'],
        response: `💻 **Học lập trình hiệu quả:**

1️⃣ **Thực hành mỗi ngày:** Code ít nhất 30 phút/ngày
2️⃣ **Dự án thực tế:** Làm ứng dụng/công cụ cho nhu cầu cá nhân
3️⃣ **Đọc code người khác:** Học từ GitHub, Stack Overflow
4️⃣ **Ghi chú và giải thích:** Viết blog hoặc note lại cách giải quyết
5️⃣ **Tham gia cộng đồng:** Reddit, Dev.to, nhóm FB lập trình

✨ **Mẹo:** Bắt đầu với Python hoặc JavaScript - dễ học và nhiều cơ hội!

📚 **Tài nguyên học miễn phí:**
• FreeCodeCamp - https://freecodecamp.org
• The Odin Project - https://theodinproject.com
• Codecademy - https://codecademy.com`
    },
    {
        keywords: ['toán', 'giải tích', 'đại số', 'xác suất', 'thống kê'],
        response: `📐 **Học Toán hiệu quả:**

1️⃣ **Nắm vững lý thuyết:** Đọc kỹ định nghĩa, định lý
2️⃣ **Làm nhiều bài tập:** Bắt đầu từ dễ đến khó
3️⃣ **Vẽ sơ đồ tư duy:** Kết nối các khái niệm với nhau
4️⃣ **Học nhóm:** Giải thích cho bạn bè để hiểu sâu hơn
5️⃣ **Sử dụng công cụ:** Wolfram Alpha, Desmos để kiểm tra

📌 **Các chủ đề quan trọng:**
• Giải tích: Đạo hàm, Tích phân, Giới hạn
• Đại số tuyến tính: Ma trận, Vector
• Xác suất thống kê: Phân phối, Ước lượng`
    },
    {
        keywords: ['tiếng anh', 'ielts', 'toeic', 'ngữ pháp', 'từ vựng'],
        response: `🇬🇧 **Học Tiếng Anh hiệu quả:**

1️⃣ **Nghe mỗi ngày:** Podcast, YouTube, BBC News
2️⃣ **Đọc sách/báo:** Bắt đầu với truyện ngắn, dần dần nâng cấp
3️⃣ **Nói chuyện:** Tìm bạn đồng hành, tham gia câu lạc bộ
4️⃣ **Viết nhật ký:** Viết 1-2 câu mỗi ngày bằng tiếng Anh
5️⃣ **Học từ vựng theo chủ đề:** 5-10 từ mới mỗi ngày

🎯 **Mục tiêu cụ thể:**
• IELTS: 30 phút nghe + 30 phút đọc mỗi ngày
• TOEIC: Làm 1 đề mỗi tuần
• Giao tiếp: Thực hành 10 phút nói mỗi ngày

📱 **App hữu ích:** Duolingo, Elsa Speak, Quizlet`
    },
    {
        keywords: ['căng thẳng', 'stress', 'lo âu', 'mệt mỏi', 'sức khỏe', 'tinh thần', 'mất ngủ'],
        response: `🧘 **Giảm căng thẳng cho sinh viên:**

1️⃣ **Hít thở sâu:** 5 phút hít thở 4-7-8 (hít 4s, giữ 7s, thở 8s)
2️⃣ **Vận động nhẹ:** Đi bộ 15 phút sau giờ học
3️⃣ **Nghe nhạc thư giãn:** Âm nhạc không lời, thiền
4️⃣ **Viết nhật ký:** Ghi ra những điều bạn lo lắng
5️⃣ **Ngủ đủ giấc:** 7-8 tiếng mỗi đêm

💡 **Kỹ thuật Pomodoro:** 
25 phút học → 5 phút nghỉ → Lặp lại

🌿 **Thực phẩm tốt cho tinh thần:**
• Cá hồi, quả óc chó (Omega-3)
• Socola đen (tăng serotonin)
• Trà xanh (L-theanine)

🆘 **Nếu cần hỗ trợ:** 
Hotline Tâm lý: 1900 1234
Website: https://www.psy.edu.vn`
    },
    {
        keywords: ['thi', 'kiểm tra', 'ôn tập', 'đề thi'],
        response: `📝 **Ôn thi hiệu quả:**

1️⃣ **Lập kế hoạch:** Phân bổ thời gian cho từng môn
2️⃣ **Hệ thống hóa kiến thức:** Sơ đồ tư duy, bảng biểu
3️⃣ **Làm đề thi thử:** Đúng thời gian, điều kiện như thi thật
4️⃣ **Học nhóm ôn thi:** Chia sẻ kiến thức, giải đáp thắc mắc
5️⃣ **Nghỉ ngơi hợp lý:** 50 phút học - 10 phút nghỉ

📌 **Lịch ôn tập mẫu:**
• Tuần 1-2: Ôn lý thuyết
• Tuần 3-4: Làm bài tập
• Tuần 5: Đề thi thử
• Tuần 6: Tổng ôn và nghỉ ngơi

💪 **Trước thi:**
• Ngủ đủ 8 tiếng
• Ăn sáng đầy đủ
• Đến sớm 30 phút`
    },
    {
        keywords: ['quản lý thời gian', 'procrastination', 'trì hoãn', 'lười'],
        response: `⏰ **Quản lý thời gian và chống trì hoãn:**

1️⃣ **Quy tắc 2 phút:** Nếu việc gì làm dưới 2 phút - làm ngay
2️⃣ **Phương pháp Pomodoro:** 25/5 (học/nghỉ)
3️⃣ **Ưu tiên theo ma trận Eisenhower:**
   • Quan trọng - Khẩn cấp: Làm ngay
   • Quan trọng - Không khẩn cấp: Lên kế hoạch
   • Không quan trọng - Khẩn cấp: Ủy quyền
   • Không quan trọng - Không khẩn cấp: Bỏ qua

4️⃣ **Lập danh sách:** Viết 3 việc quan trọng nhất mỗi ngày
5️⃣ **Thưởng cho bản thân:** Sau khi hoàn thành mục tiêu

🎯 **Ứng dụng hỗ trợ:**
• Notion - Quản lý công việc
• Forest - Tập trung học tập
• Google Calendar - Lên lịch`
    }
];

// ============================================
// HÀM XỬ LÝ CHAT
// ============================================
async function handleAIChat() {
    const input = document.getElementById('aiInput');
    const output = document.getElementById('aiOutput');
    const message = input.value.trim();
    
    if (!message) {
        showToast('⚠️ Vui lòng nhập câu hỏi!', 'warning');
        return;
    }
    
    // Thêm câu hỏi vào chat
    const userMessageHTML = `<div class="chat-message user">
        <div class="message-content">${message}</div>
        <div class="message-time">${new Date().toLocaleTimeString()}</div>
    </div>`;
    
    output.innerHTML += userMessageHTML;
    input.value = '';
    output.scrollTop = output.scrollHeight;
    
    // Thêm loading indicator
    const loadingHTML = `<div class="chat-message ai loading-message">
        <div class="message-content">🧠 Đang suy nghĩ...</div>
    </div>`;
    output.innerHTML += loadingHTML;
    output.scrollTop = output.scrollHeight;
    
    // Gọi AI
    const response = await getAIResponse(message);
    
    // Xóa loading indicator
    const loadingElement = output.querySelector('.loading-message');
    if (loadingElement) loadingElement.remove();
    
    // Hiển thị phản hồi
    const aiMessageHTML = `<div class="chat-message ai">
        <div class="message-content">${response}</div>
        <div class="message-time">${new Date().toLocaleTimeString()}</div>
    </div>`;
    
    output.innerHTML += aiMessageHTML;
    output.scrollTop = output.scrollHeight;
}

// ============================================
// XỬ LÝ PHÍM ENTER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('aiInput');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAIChat();
            }
        });
    }
});
