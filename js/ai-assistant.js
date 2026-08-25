// ============================================================
// AI ASSISTANT MODULE
// ============================================================

const knowledgeBase = {
    'machine learning': 'Machine Learning là một nhánh của AI cho phép máy tính học từ dữ liệu mà không cần lập trình rõ ràng. Các loại chính: Supervised, Unsupervised, Reinforcement Learning.',
    'python': 'Python là ngôn ngữ lập trình thông dịch, dễ học, được dùng rộng rãi trong Data Science, Web, AI. Cú pháp rõ ràng, cộng đồng lớn.',
    'stress': 'Để giảm stress khi ôn thi: 1) Chia nhỏ thời gian học (Pomodoro), 2) Tập thể dục nhẹ, 3) Ngủ đủ 7-8 tiếng, 4) Thực hành hít thở sâu, 5) Tránh học dồn.',
    'lịch học': 'Lịch học lý tưởng: 45 phút học + 10 phút nghỉ. Mỗi ngày tối đa 4-6 giờ học hiệu quả. Nên học các môn khó vào buổi sáng khi tập trung tốt nhất.',
    'html': 'HTML là ngôn ngữ đánh dấu siêu văn bản, dùng để tạo cấu trúc trang web. Các thẻ cơ bản: <html>, <head>, <body>, <div>, <p>, <h1>...<h6>.',
    'css': 'CSS dùng để trang trí và định dạng trang web. Có 3 cách dùng: inline, internal, external. Hỗ trợ Flexbox, Grid để bố cục.',
    'javascript': 'JavaScript là ngôn ngữ lập trình cho web, cho phép tạo tương tác động. ES6 cung cấp arrow function, class, template literals, destructuring.',
    'git': 'Git là hệ thống quản lý phiên bản phân tán. Các lệnh cơ bản: git init, git add, git commit, git push, git pull, git branch.',
    'sql': 'SQL là ngôn ngữ truy vấn dữ liệu quan hệ. Các lệnh cơ bản: SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, ORDER BY.',
};

function getAIResponse(query) {
    const lower = query.toLowerCase();
    for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lower.includes(key)) {
            return value;
        }
    }
    // Nếu không khớp, trả về gợi ý
    return "Mình chưa có thông tin cụ thể về câu hỏi này. Bạn có thể thử hỏi về: Machine Learning, Python, Stress, Lịch học, HTML, CSS, JavaScript, Git, SQL. Hoặc mô tả chi tiết hơn nhé! 🤗";
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
            <div class="bubble">${text}</div>
        `;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function handleSend() {
        const text = input.value.trim();
        if (!text) return;
        addMessage(text, true);
        input.value = '';

        // Simulate AI thinking
        setTimeout(() => {
            const response = getAIResponse(text);
            addMessage(response);
        }, 300 + Math.random() * 400);
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

    // Export for global
    window.addMessage = addMessage;
}

// Auto init if DOM ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAIAssistant();
} else {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
}
