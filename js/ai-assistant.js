// ============================================================
// AI ASSISTANT MODULE - KHO TRI THỨC ĐẦY ĐỦ
// ============================================================

const knowledgeBase = {
    // === CÔNG NGHỆ & LẬP TRÌNH ===
    'machine learning': '🤖 Machine Learning là một nhánh của AI cho phép máy tính học từ dữ liệu mà không cần lập trình rõ ràng.\n\n📌 Các loại chính:\n• Supervised Learning (Học có giám sát)\n• Unsupervised Learning (Học không giám sát)\n• Reinforcement Learning (Học tăng cường)\n\n📚 Ứng dụng: Nhận diện ảnh, xử lý ngôn ngữ tự nhiên, xe tự lái, dự đoán xu hướng.',
    
    'python': '🐍 Python là ngôn ngữ lập trình thông dịch, dễ học, được dùng rộng rãi trong Data Science, Web, AI.\n\n✨ Đặc điểm nổi bật:\n• Cú pháp rõ ràng, dễ đọc\n• Thư viện phong phú (NumPy, Pandas, TensorFlow)\n• Cộng đồng lớn, nhiều tài liệu\n\n💡 Mẹo: Hãy bắt đầu với các khóa học cơ bản trên Codecademy hoặc Coursera.',
    
    'javascript': '⚡ JavaScript là ngôn ngữ lập trình cho web, cho phép tạo tương tác động.\n\n📌 Các khái niệm ES6 quan trọng:\n• Arrow functions: () => {}\n• Template literals: `${variable}`\n• Destructuring: const {name} = person\n• Spread operator: [...array]\n• Classes: class Person {}\n\n💡 Mẹo: Luyện tập trên LeetCode hoặc FreeCodeCamp để nâng cao kỹ năng.',
    
    'html': '📄 HTML là ngôn ngữ đánh dấu siêu văn bản, dùng để tạo cấu trúc trang web.\n\n🏗️ Cấu trúc cơ bản:\n• <!DOCTYPE html>\n• <html> → <head> → <body>\n• Các thẻ: div, p, h1-h6, a, img, ul/ol, table, form\n\n💡 Mẹo: Sử dụng các thẻ ngữ nghĩa như <header>, <nav>, <main>, <article>, <footer> để SEO tốt hơn.',
    
    'css': '🎨 CSS dùng để trang trí và định dạng trang web.\n\n📌 Các khái niệm quan trọng:\n• Flexbox: display: flex, justify-content, align-items\n• Grid: display: grid, grid-template-columns, gap\n• Media Queries: @media (max-width: 768px)\n• Animations: @keyframes, animation\n\n💡 Mẹo: Học CSS qua trò chơi Flexbox Froggy và Grid Garden để nhớ lâu hơn.',
    
    'git': '📦 Git là hệ thống quản lý phiên bản phân tán.\n\n📌 Các lệnh cơ bản:\n• git init → Khởi tạo repo\n• git add . → Thêm file vào staging\n• git commit -m "message" → Lưu snapshot\n• git push → Đẩy lên remote\n• git pull → Lấy code mới nhất\n• git branch → Quản lý nhánh\n\n💡 Mẹo: Luôn viết commit message rõ ràng và có ý nghĩa.',
    
    'sql': '🗄️ SQL là ngôn ngữ truy vấn dữ liệu quan hệ.\n\n📌 Các lệnh cơ bản:\n• SELECT * FROM table WHERE condition\n• INSERT INTO table (col1, col2) VALUES (val1, val2)\n• UPDATE table SET col1 = val1 WHERE condition\n• DELETE FROM table WHERE condition\n• JOIN table ON condition\n• GROUP BY, ORDER BY\n\n💡 Mẹo: Học SQL qua các nền tảng như Mode Analytics hoặc SQLZoo.',

    'react': '⚛️ React là thư viện JavaScript để xây dựng giao diện người dùng.\n\n📌 Các khái niệm chính:\n• Components (Function và Class)\n• Props (Truyền dữ liệu từ cha sang con)\n• State (Quản lý trạng thái nội bộ)\n• Hooks: useState, useEffect, useContext\n• JSX (JavaScript XML)\n\n💡 Mẹo: Bắt đầu với Create React App và làm các project nhỏ để thực hành.',

    'nodejs': '🟢 Node.js là môi trường chạy JavaScript phía server.\n\n📌 Điểm nổi bật:\n• Non-blocking I/O (Asynchronous)\n• NPM (Node Package Manager)\n• Express.js framework\n• WebSocket, Real-time apps\n\n💡 Mẹo: Bắt đầu bằng cách xây dựng REST API đơn giản với Express và MongoDB.',

    'docker': '🐳 Docker là nền tảng container hóa ứng dụng.\n\n📌 Khái niệm cơ bản:\n• Image: Template để tạo container\n• Container: Môi trường chạy ứng dụng độc lập\n• Dockerfile: File cấu hình build image\n• Docker Compose: Quản lý nhiều container\n\n💡 Mẹo: Bắt đầu với Docker Desktop và thực hành container hóa ứng dụng web đơn giản.',

    // === KHOA HỌC & TOÁN HỌC ===
    'toán': '🧮 Toán học là nền tảng của khoa học máy tính và AI.\n\n📌 Các lĩnh vực quan trọng:\n• Đại số tuyến tính (Ma trận, Vector)\n• Giải tích (Đạo hàm, Tích phân)\n• Xác suất & Thống kê\n• Tối ưu hóa\n\n💡 Mẹo: Áp dụng toán học vào lập trình bằng cách giải các bài toán thuật toán trên LeetCode.',

    'vật lý': '⚛️ Vật lý giúp hiểu về thế giới tự nhiên.\n\n📌 Các chủ đề chính:\n• Cơ học (Chuyển động, Lực)\n• Nhiệt động lực học\n• Điện từ học\n• Quang học\n• Vật lý lượng tử\n\n💡 Mẹo: Học kèm với các thí nghiệm thực tế để hiểu sâu hơn.',

    'hóa học': '🧪 Hóa học nghiên cứu về chất và phản ứng.\n\n📌 Các lĩnh vực:\n• Hóa hữu cơ (Hợp chất cacbon)\n• Hóa vô cơ (Kim loại, phi kim)\n• Hóa phân tích\n• Hóa sinh\n\n💡 Mẹo: Học qua các video thí nghiệm và mô hình 3D để hình dung rõ hơn.',

    'sinh học': '🧬 Sinh học nghiên cứu về sự sống.\n\n📌 Các chủ đề:\n• Tế bào học\n• Di truyền học (DNA, RNA, Gene)\n• Tiến hóa\n• Sinh thái học\n• Sinh lý học\n\n💡 Mẹo: Kết hợp học với các ứng dụng thực tế như y học và công nghệ sinh học.',

    // === TÂM LÝ & SỨC KHỎE ===
    'stress': '🧘 Để giảm stress khi ôn thi:\n\n📌 Phương pháp hiệu quả:\n1. ⏰ Pomodoro: 25 phút học + 5 phút nghỉ\n2. 🏃 Tập thể dục nhẹ 15-20 phút\n3. 😴 Ngủ đủ 7-8 tiếng mỗi đêm\n4. 🌿 Hít thở sâu: 4-7-8 (hít 4s, giữ 7s, thở 8s)\n5. 📱 Giảm thời gian sử dụng điện thoại\n6. 🗣️ Nói chuyện với bạn bè, người thân\n\n💡 Mẹo: Viết ra những điều lo lắng để giải tỏa tâm lý.',

    'lo âu': '😰 Lo âu là phản ứng tự nhiên của cơ thể.\n\n📌 Cách quản lý lo âu:\n• Nhận diện nguyên nhân gây lo âu\n• Thực hành mindfulness (chánh niệm)\n• Tập thể dục thường xuyên\n• Hạn chế caffeine và đường\n• Ngủ đủ giấc\n• Tìm kiếm sự hỗ trợ từ chuyên gia\n\n💡 Mẹo: Kỹ thuật 5-4-3-2-1: Nhìn 5 thứ, chạm 4 thứ, nghe 3 âm thanh, ngửi 2 mùi, nếm 1 vị.',

    'trầm cảm': '💙 Trầm cảm là một vấn đề sức khỏe tâm thần phổ biến.\n\n📌 Dấu hiệu nhận biết:\n• Cảm giác buồn bã kéo dài\n• Mất hứng thú với hoạt động yêu thích\n• Mệt mỏi, thiếu năng lượng\n• Rối loạn giấc ngủ và ăn uống\n• Cảm giác vô dụng hoặc tội lỗi\n\n💡 Hãy tìm kiếm sự giúp đỡ từ chuyên gia tâm lý hoặc gọi đến đường dây hỗ trợ tinh thần.',

    // === KỸ NĂNG HỌC TẬP ===
    'lịch học': '📅 Lịch học lý tưởng:\n\n📌 Nguyên tắc vàng:\n• ⏰ 45 phút học + 10 phút nghỉ\n• 📚 Mỗi ngày tối đa 4-6 giờ học hiệu quả\n• 🌅 Học môn khó vào buổi sáng (tập trung cao)\n• 🌙 Ôn tập nhẹ nhàng vào buổi tối\n• 📆 Lên kế hoạch học theo tuần\n\n💡 Mẹo: Sử dụng phương pháp Feynman để học sâu: Giải thích lại kiến thức bằng ngôn ngữ của bạn.',

    'ghi nhớ': '🧠 Kỹ thuật ghi nhớ hiệu quả:\n\n📌 Phương pháp:\n• Spaced Repetition (Lặp lại ngắt quãng)\n• Mind Map (Sơ đồ tư duy)\n• Mnemonic (Ghi nhớ bằng hình ảnh, từ khóa)\n• Flashcard (Thẻ nhớ)\n• Active Recall (Gợi nhớ chủ động)\n\n💡 Mẹo: Áp dụng phương pháp Pomodoro và Spaced Repetition kết hợp sẽ cực kỳ hiệu quả.',

    'tập trung': '🎯 Cách cải thiện sự tập trung:\n\n📌 Kỹ thuật:\n• Tắt thông báo điện thoại và máy tính\n• Sử dụng ứng dụng như Forest hoặc Focus Keeper\n• Làm việc trong môi trường yên tĩnh\n• Chia nhỏ công việc thành các nhiệm vụ dễ hoàn thành\n• Thiền 5-10 phút trước khi học\n\n💡 Mẹo: Kỹ thuật Pomodoro (25/5) giúp cải thiện tập trung đáng kể.',

    'quản lý thời gian': '⏰ Quản lý thời gian cho sinh viên:\n\n📌 Nguyên tắc Eisenhower:\n• 🔴 Quan trọng + Khẩn cấp → Làm ngay\n• 🟠 Quan trọng + Không khẩn cấp → Lên kế hoạch\n• 🟡 Không quan trọng + Khẩn cấp → Ủy thác\n• 🟢 Không quan trọng + Không khẩn cấp → Bỏ qua\n\n💡 Mẹo: Sử dụng ứng dụng như Notion, Todoist hoặc Google Calendar để tổ chức công việc.',

    'học online': '💻 Mẹo học online hiệu quả:\n\n📌 Chiến lược:\n• Tạo không gian học tập riêng biệt\n• Đặt lịch học cố định hàng ngày\n• Tham gia diễn đàn, nhóm học tập\n• Xem video với tốc độ 1.25x - 1.5x\n• Ghi chép và tóm tắt sau mỗi buổi học\n\n💡 Mẹo: Nền tảng học tập tốt: Coursera, edX, Udemy, Khan Academy, FreeCodeCamp.',

    'tài chính sinh viên': '💰 Quản lý tài chính cho sinh viên:\n\n📌 Nguyên tắc 50-30-20:\n• 50% cho nhu cầu thiết yếu (ăn, ở, học)\n• 30% cho mong muốn (giải trí, mua sắm)\n• 20% cho tiết kiệm và đầu tư\n\n💡 Mẹo: Sử dụng ứng dụng quản lý chi tiêu như Money Lover hoặc Mint.',

    'kỹ năng mềm': '🤝 Kỹ năng mềm cần thiết:\n\n📌 Các kỹ năng quan trọng:\n• Giao tiếp (Viết, Nói, Lắng nghe)\n• Làm việc nhóm (Collaboration)\n• Giải quyết vấn đề (Problem-solving)\n• Tư duy phản biện (Critical thinking)\n• Lãnh đạo (Leadership)\n\n💡 Mẹo: Tham gia các câu lạc bộ, tổ chức sự kiện để rèn luyện kỹ năng mềm.',

    'internship': '💼 Kinh nghiệm tìm thực tập:\n\n📌 Các bước:\n1. Xác định lĩnh vực và kỹ năng mục tiêu\n2. Xây dựng CV và Portfolio\n3. Tìm kiếm trên LinkedIn, VietnamWorks, TopDev\n4. Chuẩn bị phỏng vấn (Technical + Behavioral)\n5. Học hỏi và networking trong quá trình thực tập\n\n💡 Mẹo: Bắt đầu sớm và tích lũy project cá nhân để có lợi thế cạnh tranh.',

    // === MẶC ĐỊNH ===
    'default': "🤔 Mình chưa có thông tin cụ thể về câu hỏi này. Bạn có thể thử hỏi về:\n\n📚 Học tập: Machine Learning, Python, JavaScript, HTML/CSS, Git, SQL, React, Node.js, Docker\n🔬 Khoa học: Toán, Vật lý, Hóa học, Sinh học\n🧠 Tâm lý: Stress, Lo âu, Trầm cảm\n📝 Kỹ năng: Lịch học, Ghi nhớ, Tập trung, Quản lý thời gian\n💼 Đời sống: Học online, Tài chính, Kỹ năng mềm, Thực tập\n\nHoặc mô tả chi tiết hơn để mình có thể giúp bạn tốt hơn! 🤗"
};

function getAIResponse(query) {
    const lower = query.toLowerCase();
    
    for (const [key, value] of Object.entries(knowledgeBase)) {
        if (key !== 'default' && lower.includes(key)) {
            return value;
        }
    }
    
    return knowledgeBase['default'];
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
        addMessage(text, true);
        input.value = '';

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
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAIAssistant();
} else {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
}
