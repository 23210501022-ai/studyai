// ============================================================
// AI ASSISTANT MODULE - NÂNG CẤP NLU
// ============================================================

// Cấu trúc knowledge base mới với từ khóa và câu trả lời
const knowledgeBaseAdvanced = [
    {
        id: 'machine_learning',
        keywords: ['machine learning', 'ml', 'học máy', 'ai', 'trí tuệ nhân tạo', 'mô hình'],
        response: '🤖 Machine Learning là một nhánh của AI cho phép máy tính học từ dữ liệu.\n\n📌 Các loại chính:\n• Supervised Learning (Học có giám sát)\n• Unsupervised Learning (Học không giám sát)\n• Reinforcement Learning (Học tăng cường)\n\n📚 Ứng dụng: Nhận diện ảnh, xử lý ngôn ngữ tự nhiên, xe tự lái, dự đoán xu hướng.'
    },
    {
        id: 'python',
        keywords: ['python', 'code python', 'học python', 'lập trình python', 'python cơ bản'],
        response: '🐍 Python là ngôn ngữ lập trình thông dịch, dễ học, được dùng rộng rãi trong Data Science, Web, AI.\n\n✨ Đặc điểm nổi bật:\n• Cú pháp rõ ràng, dễ đọc\n• Thư viện phong phú (NumPy, Pandas, TensorFlow)\n• Cộng đồng lớn, nhiều tài liệu\n\n💡 Mẹo: Hãy bắt đầu với các khóa học cơ bản trên Codecademy hoặc Coursera.'
    },
    {
        id: 'javascript',
        keywords: ['javascript', 'js', 'es6', 'lập trình web', 'frontend', 'react'],
        response: '⚡ JavaScript là ngôn ngữ lập trình cho web, cho phép tạo tương tác động.\n\n📌 Các khái niệm ES6 quan trọng:\n• Arrow functions: () => {}\n• Template literals: `${variable}`\n• Destructuring: const {name} = person\n• Spread operator: [...array]\n• Classes: class Person {}\n\n💡 Mẹo: Luyện tập trên LeetCode hoặc FreeCodeCamp.'
    },
    {
        id: 'html',
        keywords: ['html', 'thẻ html', 'cấu trúc web', 'div', 'form'],
        response: '📄 HTML là ngôn ngữ đánh dấu siêu văn bản, dùng để tạo cấu trúc trang web.\n\n🏗️ Cấu trúc cơ bản:\n• <!DOCTYPE html>\n• <html> → <head> → <body>\n• Các thẻ: div, p, h1-h6, a, img, ul/ol, table, form\n\n💡 Mẹo: Sử dụng các thẻ ngữ nghĩa như <header>, <nav>, <main>, <article>, <footer> để SEO tốt hơn.'
    },
    {
        id: 'css',
        keywords: ['css', 'style', 'flexbox', 'grid', 'responsive', 'layout'],
        response: '🎨 CSS dùng để trang trí và định dạng trang web.\n\n📌 Các khái niệm quan trọng:\n• Flexbox: display: flex, justify-content, align-items\n• Grid: display: grid, grid-template-columns, gap\n• Media Queries: @media (max-width: 768px)\n• Animations: @keyframes, animation\n\n💡 Mẹo: Học CSS qua trò chơi Flexbox Froggy và Grid Garden.'
    },
    {
        id: 'git',
        keywords: ['git', 'github', 'version control', 'commit', 'branch', 'pull request'],
        response: '📦 Git là hệ thống quản lý phiên bản phân tán.\n\n📌 Các lệnh cơ bản:\n• git init → Khởi tạo repo\n• git add . → Thêm file vào staging\n• git commit -m "message" → Lưu snapshot\n• git push → Đẩy lên remote\n• git pull → Lấy code mới nhất\n• git branch → Quản lý nhánh\n\n💡 Mẹo: Luôn viết commit message rõ ràng và có ý nghĩa.'
    },
    {
        id: 'sql',
        keywords: ['sql', 'database', 'query', 'mysql', 'postgresql', 'mongodb'],
        response: '🗄️ SQL là ngôn ngữ truy vấn dữ liệu quan hệ.\n\n📌 Các lệnh cơ bản:\n• SELECT * FROM table WHERE condition\n• INSERT INTO table (col1, col2) VALUES (val1, val2)\n• UPDATE table SET col1 = val1 WHERE condition\n• DELETE FROM table WHERE condition\n• JOIN table ON condition\n• GROUP BY, ORDER BY\n\n💡 Mẹo: Học SQL qua các nền tảng như Mode Analytics hoặc SQLZoo.'
    },
    {
        id: 'react',
        keywords: ['react', 'redux', 'hook', 'usestate', 'useeffect', 'component'],
        response: '⚛️ React là thư viện JavaScript để xây dựng giao diện người dùng.\n\n📌 Các khái niệm chính:\n• Components (Function và Class)\n• Props (Truyền dữ liệu từ cha sang con)\n• State (Quản lý trạng thái nội bộ)\n• Hooks: useState, useEffect, useContext\n• JSX (JavaScript XML)\n\n💡 Mẹo: Bắt đầu với Create React App và làm các project nhỏ để thực hành.'
    },
    {
        id: 'stress',
        keywords: ['stress', 'căng thẳng', 'lo âu', 'thi cử', 'áp lực', 'mệt mỏi', 'relax'],
        response: '🧘 Để giảm stress khi ôn thi:\n\n📌 Phương pháp hiệu quả:\n1. ⏰ Pomodoro: 25 phút học + 5 phút nghỉ\n2. 🏃 Tập thể dục nhẹ 15-20 phút\n3. 😴 Ngủ đủ 7-8 tiếng mỗi đêm\n4. 🌿 Hít thở sâu: 4-7-8 (hít 4s, giữ 7s, thở 8s)\n5. 📱 Giảm thời gian sử dụng điện thoại\n6. 🗣️ Nói chuyện với bạn bè, người thân\n\n💡 Mẹo: Viết ra những điều lo lắng để giải tỏa tâm lý.'
    },
    {
        id: 'schedule',
        keywords: ['lịch học', 'thời gian biểu', 'lập kế hoạch', 'học tập', 'ôn thi', 'plan'],
        response: '📅 Lịch học lý tưởng:\n\n📌 Nguyên tắc vàng:\n• ⏰ 45 phút học + 10 phút nghỉ\n• 📚 Mỗi ngày tối đa 4-6 giờ học hiệu quả\n• 🌅 Học môn khó vào buổi sáng (tập trung cao)\n• 🌙 Ôn tập nhẹ nhàng vào buổi tối\n• 📆 Lên kế hoạch học theo tuần\n\n💡 Mẹo: Sử dụng phương pháp Feynman để học sâu: Giải thích lại kiến thức bằng ngôn ngữ của bạn.'
    },
    {
        id: 'memory',
        keywords: ['ghi nhớ', 'nhớ lâu', 'học thuộc', 'flashcard', 'mindmap', 'spaced repetition'],
        response: '🧠 Kỹ thuật ghi nhớ hiệu quả:\n\n📌 Phương pháp:\n• Spaced Repetition (Lặp lại ngắt quãng)\n• Mind Map (Sơ đồ tư duy)\n• Mnemonic (Ghi nhớ bằng hình ảnh, từ khóa)\n• Flashcard (Thẻ nhớ)\n• Active Recall (Gợi nhớ chủ động)\n\n💡 Mẹo: Áp dụng phương pháp Pomodoro và Spaced Repetition kết hợp sẽ cực kỳ hiệu quả.'
    },
    {
        id: 'time_management',
        keywords: ['quản lý thời gian', 'time management', 'làm việc hiệu quả', 'eisenhower'],
        response: '⏰ Quản lý thời gian cho sinh viên:\n\n📌 Nguyên tắc Eisenhower:\n• 🔴 Quan trọng + Khẩn cấp → Làm ngay\n• 🟠 Quan trọng + Không khẩn cấp → Lên kế hoạch\n• 🟡 Không quan trọng + Khẩn cấp → Ủy thác\n• 🟢 Không quan trọng + Không khẩn cấp → Bỏ qua\n\n💡 Mẹo: Sử dụng ứng dụng như Notion, Todoist hoặc Google Calendar để tổ chức công việc.'
    },
    {
        id: 'internship',
        keywords: ['thực tập', 'intern', 'tuyển dụng', 'cv', 'portfolio', 'phỏng vấn'],
        response: '💼 Kinh nghiệm tìm thực tập:\n\n📌 Các bước:\n1. Xác định lĩnh vực và kỹ năng mục tiêu\n2. Xây dựng CV và Portfolio\n3. Tìm kiếm trên LinkedIn, VietnamWorks, TopDev\n4. Chuẩn bị phỏng vấn (Technical + Behavioral)\n5. Học hỏi và networking trong quá trình thực tập\n\n💡 Mẹo: Bắt đầu sớm và tích lũy project cá nhân để có lợi thế cạnh tranh.'
    },
    {
        id: 'anxiety',
        keywords: ['lo âu', 'anxiety', 'hoảng loạn', 'panic', 'bồn chồn'],
        response: '😰 Lo âu là phản ứng tự nhiên của cơ thể.\n\n📌 Cách quản lý lo âu:\n• Nhận diện nguyên nhân gây lo âu\n• Thực hành mindfulness (chánh niệm)\n• Tập thể dục thường xuyên\n• Hạn chế caffeine và đường\n• Ngủ đủ giấc\n• Tìm kiếm sự hỗ trợ từ chuyên gia\n\n💡 Mẹo: Kỹ thuật 5-4-3-2-1: Nhìn 5 thứ, chạm 4 thứ, nghe 3 âm thanh, ngửi 2 mùi, nếm 1 vị.'
    },
    {
        id: 'sleep',
        keywords: ['giấc ngủ', 'mất ngủ', 'ngủ', 'sleep', 'insomnia', 'nghỉ ngơi'],
        response: '😴 Cải thiện giấc ngủ:\n\n📌 Mẹo hay:\n• Tắt điện thoại 30 phút trước khi ngủ\n• Tạo không gian ngủ tối, yên tĩnh\n• Đi ngủ và thức dậy cùng giờ mỗi ngày\n• Tránh caffeine sau 4 giờ chiều\n• Tập thể dục nhẹ trước khi ngủ\n\n💡 Mẹo: Đọc sách giấy thay vì dùng điện thoại trước khi ngủ.'
    },
    {
        id: 'focus',
        keywords: ['tập trung', 'mất tập trung', 'concentrate', 'điện thoại', 'phân tâm'],
        response: '🎯 Cách cải thiện sự tập trung:\n\n📌 Kỹ thuật:\n• Tắt thông báo điện thoại và máy tính\n• Sử dụng ứng dụng như Forest hoặc Focus Keeper\n• Làm việc trong môi trường yên tĩnh\n• Chia nhỏ công việc thành các nhiệm vụ dễ hoàn thành\n• Thiền 5-10 phút trước khi học\n\n💡 Mẹo: Kỹ thuật Pomodoro (25/5) giúp cải thiện tập trung đáng kể.'
    }
];

// Hàm tìm kiếm thông minh
function getAIResponseAdvanced(query) {
    const lower = query.toLowerCase();
    
    // Tìm kiếm với độ ưu tiên
    let bestMatch = null;
    let maxScore = 0;
    
    for (const item of knowledgeBaseAdvanced) {
        let score = 0;
        for (const keyword of item.keywords) {
            if (lower.includes(keyword)) {
                // Từ khóa dài hơn (cụ thể hơn) được ưu tiên
                score += keyword.length;
            }
        }
        if (score > maxScore) {
            maxScore = score;
            bestMatch = item;
        }
    }
    
    if (bestMatch && maxScore >= 3) {
        return bestMatch.response;
    }
    
    // Nếu không tìm thấy, trả về gợi ý
    const suggestions = knowledgeBaseAdvanced.slice(0, 6).map(item => 
        `• ${item.keywords[0].charAt(0).toUpperCase() + item.keywords[0].slice(1)}`
    ).join('\n');
    
    return `🤔 Mình chưa có thông tin cụ thể về câu hỏi này. Bạn có thể thử hỏi về:\n\n${suggestions}\n\nHoặc mô tả chi tiết hơn để mình có thể giúp bạn tốt hơn! 🤗`;
}

// Giữ lại hàm cũ để tương thích
function getAIResponse(query) {
    return getAIResponseAdvanced(query);
}

function initAIAssistant() {
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const messages = document.getElementById('chatMessages');
    const quickBtns = document.querySelectorAll('.quick-btn');

    function addMessage(text, isUser = false) {
        const div = document.createElement('div');
        div.className = `message ${isUser ? 'user' : 'bot'}`;
        div.innerHTML = `
            <div class="avatar">${isUser ? '👤' : '🤖'}</div>
            <div class="bubble">${text.replace(/\n/g, '<br>')}</div>
        `;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function handleSend() {
        const text = input.value.trim();
        if (!text) return;
        
        // Thêm loading
        addMessage('🤔 Đang suy nghĩ...', false);
        const loadingMsg = messages.lastChild;
        
        addMessage(text, true);
        input.value = '';

        // Thêm loading message với ID để dễ tìm
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message bot';
        loadingDiv.id = 'loadingMessage';
        loadingDiv.innerHTML = `
            <div class="avatar">🤖</div>
            <div class="bubble">🤔 Đang suy nghĩ...</div>
        `;
        messages.appendChild(loadingDiv);
        messages.scrollTop = messages.scrollHeight;

        setTimeout(() => {
            // Xóa loading bằng ID
        const loading = document.getElementById('loadingMessage');
        if (loading) loading.remove();
            
            const response = getAIResponseAdvanced(text);
            addMessage(response);
        }, 500 + Math.random() * 500);
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            input.value = btn.dataset.question;
            handleSend();
        });
    });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAIAssistant();
} else {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
}
