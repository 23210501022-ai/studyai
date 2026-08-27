// ============================================================
// AI ASSISTANT MODULE - KNOWLEDGE BASE MỞ RỘNG
// ============================================================

// Cấu trúc knowledge base với nhiều môn học và chủ đề
const knowledgeBaseAdvanced = [
    // ============================================
    // TOÁN HỌC
    // ============================================
    {
        id: 'toan_cao_cap',
        keywords: ['toán cao cấp', 'giải tích', 'đại số', 'toán', 'math', 'calculus', 'algebra', 'tích phân', 'đạo hàm', 'vi phân', 'ma trận', 'xác suất', 'thống kê'],
        response: '📐 TOÁN HỌC CAO CẤP\n\n📌 Các chủ đề chính:\n• Giải tích: Đạo hàm, Tích phân, Vi phân, Chuỗi\n• Đại số tuyến tính: Ma trận, Định thức, Vector, Không gian vector\n• Xác suất - Thống kê: Phân phối, Kiểm định, Hồi quy\n• Phương trình vi phân: ODE, PDE\n• Toán rời rạc: Logic, Tổ hợp, Đồ thị\n\n💡 Mẹo học:\n• Ôn tập công thức thường xuyên\n• Làm nhiều bài tập để hiểu sâu\n• Vẽ đồ thị và hình ảnh hóa để dễ hình dung'
    },
    {
        id: 'toan_roi_rac',
        keywords: ['toán rời rạc', 'discrete math', 'logic', 'tổ hợp', 'đồ thị', 'mệnh đề', 'quan hệ', 'hàm'],
        response: '🧮 TOÁN RỜI RẠC\n\n📌 Các chủ đề chính:\n• Logic mệnh đề và vị từ\n• Tổ hợp: Chỉnh hợp, Tổ hợp, Hoán vị\n• Quan hệ và Hàm\n• Lý thuyết đồ thị\n• Cây và các thuật toán\n• Mã hóa và mật mã học\n\n💡 Mẹo học:\n• Học qua ví dụ thực tế\n• Thực hành với các bài toán đếm\n• Vẽ sơ đồ để hiểu quan hệ'
    },
    {
        id: 'xac_suat_thong_ke',
        keywords: ['xác suất', 'thống kê', 'probability', 'statistics', 'phân phối', 'kiểm định', 'hồi quy', 'tương quan'],
        response: '📊 XÁC SUẤT - THỐNG KÊ\n\n📌 Các chủ đề chính:\n• Xác suất cơ bản: Biến cố, Công thức Bayes\n• Phân phối xác suất: Nhị thức, Poisson, Chuẩn\n• Thống kê mô tả: Trung bình, Phương sai, Histogram\n• Thống kê suy luận: Kiểm định, Khoảng tin cậy\n• Phân tích hồi quy và tương quan\n\n💡 Mẹo học:\n• Sử dụng Excel hoặc Python để trực quan\n• Hiểu ý nghĩa thực tế của các tham số\n• Luyện tập với dữ liệu thực tế'
    },
    
    // ============================================
    // VẬT LÝ
    // ============================================
    {
        id: 'vat_ly',
        keywords: ['vật lý', 'physics', 'cơ học', 'nhiệt', 'điện', 'từ', 'quang', 'sóng', 'cơ học lượng tử'],
        response: '⚛️ VẬT LÝ HỌC\n\n📌 Các nhánh chính:\n• Cơ học: Động lực học, Tĩnh học, Cơ học chất lỏng\n• Nhiệt động lực học: Nhiệt, Công, Entropy\n• Điện từ học: Điện trường, Từ trường, Sóng điện từ\n• Quang học: Khúc xạ, Phản xạ, Giao thoa\n• Vật lý hiện đại: Lượng tử, Thuyết tương đối\n\n💡 Mẹo học:\n• Hiểu rõ các định luật cơ bản\n• Vẽ sơ đồ lực và quá trình\n• Liên hệ với ứng dụng thực tế'
    },
    {
        id: 'vat_ly_luong_tu',
        keywords: ['lượng tử', 'quantum', 'hạt', 'sóng hạt', 'schrodinger', 'planck', 'einstein', 'photon'],
        response: '🔬 VẬT LÝ LƯỢNG TỬ\n\n📌 Các khái niệm quan trọng:\n• Lưỡng tính sóng-hạt\n• Nguyên lý bất định Heisenberg\n• Phương trình Schrödinger\n• Hiệu ứng quang điện\n• Rối lượng tử (Quantum Entanglement)\n\n💡 Mẹo học:\n• Đọc sách phổ biến khoa học trước\n• Xem video minh họa để dễ hình dung\n• Không cần hiểu toán ngay từ đầu'
    },
    
    // ============================================
    // HÓA HỌC
    // ============================================
    {
        id: 'hoa_hoc',
        keywords: ['hóa học', 'chemistry', 'hóa đại cương', 'hóa vô cơ', 'hóa hữu cơ', 'phản ứng', 'nguyên tử', 'bảng tuần hoàn'],
        response: '🧪 HÓA HỌC\n\n📌 Các nhánh chính:\n• Hóa đại cương: Cấu tạo nguyên tử, Bảng tuần hoàn\n• Hóa vô cơ: Kim loại, Phi kim, Hợp chất\n• Hóa hữu cơ: Hydrocarbon, Dẫn xuất, Polymer\n• Hóa phân tích: Định tính, Định lượng\n• Hóa lý: Động học, Nhiệt hóa\n\n💡 Mẹo học:\n• Học qua sơ đồ tư duy\n• Thực hành phản ứng và cân bằng\n• Liên hệ với đời sống hàng ngày'
    },
    
    // ============================================
    // SINH HỌC
    // ============================================
    {
        id: 'sinh_hoc',
        keywords: ['sinh học', 'biology', 'tế bào', 'gen', 'di truyền', 'sinh thái', 'tiến hóa', 'cơ thể'],
        response: '🧬 SINH HỌC\n\n📌 Các nhánh chính:\n• Tế bào học: Cấu trúc, Chức năng, Phân bào\n• Di truyền học: DNA, RNA, Gen, Đột biến\n• Sinh thái học: Hệ sinh thái, Chuỗi thức ăn\n• Tiến hóa: Chọn lọc tự nhiên, Đa dạng sinh học\n• Giải phẫu: Cấu trúc cơ thể người và động vật\n\n💡 Mẹo học:\n• Vẽ sơ đồ quá trình sinh học\n• Học qua video và hình ảnh\n• Liên hệ với sức khỏe và môi trường'
    },
    
    // ============================================
    // NGÔN NGỮ - VĂN HỌC
    // ============================================
    {
        id: 'van_hoc',
        keywords: ['văn học', 'ngữ văn', 'thơ', 'truyện', 'kịch', 'tác phẩm', 'văn bản', 'phong cách'],
        response: '📖 VĂN HỌC\n\n📌 Các thể loại chính:\n• Thơ ca: Lục bát, Tự do, Đường luật\n• Truyện: Truyện ngắn, Tiểu thuyết, Truyền kỳ\n• Kịch: Bi kịch, Hài kịch\n• Tùy bút - Tản văn\n\n📌 Phân tích tác phẩm:\n• Nội dung: Chủ đề, ý nghĩa\n• Nghệ thuật: Ngôn từ, Hình ảnh, Biện pháp\n• Bối cảnh: Lịch sử, Xã hội\n\n💡 Mẹo học:\n• Đọc nhiều tác phẩm\n• Viết cảm nhận của mình\n• Liên hệ với cuộc sống'
    },
    {
        id: 'tieng_viet',
        keywords: ['tiếng việt', 'ngữ pháp', 'từ vựng', 'chính tả', 'phong cách học', 'ngôn ngữ'],
        response: '🇻🇳 TIẾNG VIỆT\n\n📌 Các phần chính:\n• Ngữ pháp: Từ loại, Câu, Thành phần câu\n• Từ vựng: Từ đơn, Từ ghép, Từ Hán Việt\n• Chính tả: Quy tắc, Lỗi thường gặp\n• Phong cách học: Văn bản, Biện pháp tu từ\n• Ngữ nghĩa: Nghĩa của từ, Trường nghĩa\n\n💡 Mẹo học:\n• Đọc sách báo thường xuyên\n• Luyện viết và sửa lỗi\n• Học qua các bài tập thực hành'
    },
    
    // ============================================
    // NGOẠI NGỮ
    // ============================================
    {
        id: 'tieng_anh',
        keywords: ['tiếng anh', 'english', 'ielts', 'toeic', 'toefl', 'grammar', 'vocabulary', 'giao tiếp'],
        response: '🇬🇧 TIẾNG ANH\n\n📌 Kỹ năng cần rèn:\n• Nghe: Podcast, Phim, BBC, VOA\n• Nói: Giao tiếp, Phát âm, Thuyết trình\n• Đọc: Sách, Báo, Tài liệu học thuật\n• Viết: Email, Essay, Báo cáo\n\n📌 Ngữ pháp quan trọng:\n• Các thì: Present, Past, Future\n• Câu điều kiện, Câu bị động\n• Động từ khiếm khuyết\n• Mệnh đề quan hệ\n\n💡 Mẹo học:\n• Học từ vựng theo chủ đề\n• Luyện tập 15-30 phút mỗi ngày\n• Sử dụng ứng dụng như Duolingo, Quizlet'
    },
    {
        id: 'tieng_anh_ielts',
        keywords: ['ielts', 'toeic', 'toefl', 'tiếng anh học thuật', 'exam', 'test', 'chứng chỉ'],
        response: '📝 LUYỆN THI IELTS/TOEIC\n\n📌 Cấu trúc bài thi IELTS:\n• Listening: 4 phần, 40 câu\n• Reading: 3 bài đọc, 40 câu\n• Writing: 2 bài luận\n• Speaking: 3 phần, 11-14 phút\n\n📌 Mẹo luyện thi:\n• Làm quen với dạng đề\n• Quản lý thời gian hợp lý\n• Mở rộng vốn từ học thuật\n• Luyện nói trước gương\n\n💡 Mẹo học:\n• Thi thử thường xuyên\n• Học từ vựng theo chủ đề phổ biến\n• Tham gia các nhóm luyện thi online'
    },
    
    // ============================================
    // LẬP TRÌNH - CÔNG NGHỆ
    // ============================================
    {
        id: 'python',
        keywords: ['python', 'code python', 'học python', 'lập trình python', 'python cơ bản', 'numpy', 'pandas'],
        response: '🐍 PYTHON - LẬP TRÌNH\n\n📌 Các kiến thức cơ bản:\n• Cú pháp: Biến, Kiểu dữ liệu, Toán tử\n• Cấu trúc: If-else, Loop, Function\n• OOP: Class, Inheritance, Polymorphism\n• Thư viện: NumPy, Pandas, Matplotlib\n• Web: Flask, Django\n\n📌 Ứng dụng:\n• Data Science & Machine Learning\n• Web Development\n• Automation & Scripting\n• Scientific Computing\n\n💡 Mẹo học:\n• Bắt đầu với Python cơ bản trên Codecademy\n• Làm project nhỏ (calculator, to-do list)\n• Tham gia cộng đồng Python'
    },
    {
        id: 'javascript',
        keywords: ['javascript', 'js', 'es6', 'lập trình web', 'frontend', 'react', 'nodejs'],
        response: '⚡ JAVASCRIPT - LẬP TRÌNH WEB\n\n📌 Các khái niệm ES6:\n• Arrow functions: () => {}\n• Template literals: `${variable}`\n• Destructuring: const {name} = person\n• Spread operator: [...array]\n• Classes: class Person {}\n• Modules: import/export\n\n📌 Frameworks phổ biến:\n• React.js, Vue.js, Angular\n• Node.js (Backend)\n• Express.js (API)\n\n💡 Mẹo học:\n• Luyện tập trên LeetCode, FreeCodeCamp\n• Xây dựng dự án thực tế\n• Theo dõi cập nhật mới'
    },
    {
        id: 'html',
        keywords: ['html', 'thẻ html', 'cấu trúc web', 'div', 'form', 'input', 'button'],
        response: '📄 HTML - CẤU TRÚC WEB\n\n📌 Cấu trúc cơ bản:\n• <!DOCTYPE html>\n• <html> → <head> → <body>\n• Các thẻ: div, p, h1-h6, a, img\n• Danh sách: ul/ol, li\n• Bảng: table, tr, td\n• Form: input, button, select\n\n📌 Thẻ ngữ nghĩa:\n• <header>, <nav>, <main>\n• <article>, <section>, <aside>\n• <footer>\n\n💡 Mẹo học:\n• Dùng Validator để kiểm tra\n• Xem mã nguồn các trang web\n• Thực hành xây dựng layout'
    },
    {
        id: 'css',
        keywords: ['css', 'style', 'flexbox', 'grid', 'responsive', 'layout', 'animation'],
        response: '🎨 CSS - TRANG TRÍ WEB\n\n📌 Các khái niệm quan trọng:\n• Flexbox: display: flex, justify-content, align-items\n• Grid: display: grid, grid-template-columns, gap\n• Media Queries: @media (max-width: 768px)\n• Animations: @keyframes, animation, transition\n• Pseudo-classes: :hover, :focus, :nth-child\n\n📌 Thiết kế:\n• Responsive Design\n• CSS Variables\n• BEM Methodology\n\n💡 Mẹo học:\n• Flexbox Froggy và Grid Garden\n• Thực hành clone giao diện\n• Sử dụng công cụ DevTools'
    },
    {
        id: 'sql',
        keywords: ['sql', 'database', 'query', 'mysql', 'postgresql', 'mongodb', 'nosql'],
        response: '🗄️ SQL - CƠ SỞ DỮ LIỆU\n\n📌 Các lệnh cơ bản:\n• SELECT * FROM table WHERE condition\n• INSERT INTO table (col1, col2) VALUES (val1, val2)\n• UPDATE table SET col1 = val1 WHERE condition\n• DELETE FROM table WHERE condition\n• JOIN table ON condition\n• GROUP BY, ORDER BY, HAVING\n\n📌 Các loại JOIN:\n• INNER JOIN, LEFT JOIN, RIGHT JOIN\n• FULL OUTER JOIN, SELF JOIN\n\n📌 NoSQL:\n• MongoDB, Firebase, DynamoDB\n\n💡 Mẹo học:\n• SQLZoo, Mode Analytics\n• Thực hành với dữ liệu thực tế\n• Tối ưu query hiệu suất cao'
    },
    {
        id: 'react',
        keywords: ['react', 'redux', 'hook', 'usestate', 'useeffect', 'component', 'nextjs'],
        response: '⚛️ REACT - UI LIBRARY\n\n📌 Các khái niệm chính:\n• Components: Function và Class\n• Props: Truyền dữ liệu từ cha sang con\n• State: Quản lý trạng thái nội bộ\n• Hooks: useState, useEffect, useContext\n• JSX: JavaScript XML\n\n📌 State Management:\n• Redux, Zustand, Context API\n• React Router (điều hướng)\n• Next.js (Server-side rendering)\n\n💡 Mẹo học:\n• Bắt đầu với Create React App\n• Làm project nhỏ: Todo App, Blog\n• Tham khảo tài liệu chính thức'
    },
    {
        id: 'git',
        keywords: ['git', 'github', 'version control', 'commit', 'branch', 'pull request', 'merge'],
        response: '📦 GIT - QUẢN LÝ PHIÊN BẢN\n\n📌 Các lệnh cơ bản:\n• git init → Khởi tạo repo\n• git add . → Thêm file vào staging\n• git commit -m "message" → Lưu snapshot\n• git push → Đẩy lên remote\n• git pull → Lấy code mới nhất\n• git branch → Quản lý nhánh\n• git merge → Hợp nhất nhánh\n\n📌 Quy trình làm việc:\n• Feature Branch Workflow\n• Git Flow, GitHub Flow\n\n💡 Mẹo học:\n• Luôn viết commit message rõ ràng\n• Sử dụng .gitignore\n• Làm quen với GitHub/GitLab'
    },
    {
        id: 'machine_learning',
        keywords: ['machine learning', 'ml', 'học máy', 'ai', 'trí tuệ nhân tạo', 'mô hình', 'deep learning'],
        response: '🤖 MACHINE LEARNING - HỌC MÁY\n\n📌 Các loại học:\n• Supervised Learning (Học có giám sát)\n• Unsupervised Learning (Học không giám sát)\n• Reinforcement Learning (Học tăng cường)\n\n📌 Các thuật toán phổ biến:\n• Linear/Logistic Regression\n• Decision Tree, Random Forest\n• SVM, KNN, K-Means\n• Neural Networks, Deep Learning\n\n📌 Ứng dụng:\n• Nhận diện ảnh, Xử lý ngôn ngữ tự nhiên\n• Dự đoán xu hướng, Xe tự lái\n• Chatbot, Phân tích cảm xúc\n\n💡 Mẹo học:\n• Bắt đầu với Python + scikit-learn\n• Làm các bài tập trên Kaggle\n• Học lý thuyết + thực hành song song'
    },
    
    // ============================================
    // KINH TẾ - QUẢN TRỊ
    // ============================================
    {
        id: 'kinh_te',
        keywords: ['kinh tế', 'economics', 'vi mô', 'vĩ mô', 'tài chính', 'đầu tư', 'thị trường', 'lạm phát'],
        response: '📈 KINH TẾ HỌC\n\n📌 Kinh tế vi mô:\n• Cung - Cầu, Giá cả\n• Lợi ích biên, Chi phí biên\n• Cạnh tranh, Độc quyền\n\n📌 Kinh tế vĩ mô:\n• GDP, Lạm phát, Thất nghiệp\n• Chính sách tài khóa, Tiền tệ\n• Tăng trưởng kinh tế\n\n📌 Tài chính - Đầu tư:\n• Chứng khoán, Trái phiếu\n• Phân tích tài chính\n• Quản trị rủi ro\n\n💡 Mẹo học:\n• Đọc báo tài chính (Bloomberg, Reuters)\n• Theo dõi chỉ số kinh tế\n• Phân tích case study thực tế'
    },
    {
        id: 'quan_tri',
        keywords: ['quản trị', 'management', 'lãnh đạo', 'kinh doanh', 'business', 'marketing', 'tổ chức'],
        response: '🏢 QUẢN TRỊ KINH DOANH\n\n📌 Các chức năng quản trị:\n• Hoạch định: Lập kế hoạch, Chiến lược\n• Tổ chức: Cơ cấu, Phân công\n• Lãnh đạo: Động lực, Giao tiếp\n• Kiểm soát: Đánh giá, Điều chỉnh\n\n📌 Marketing:\n• 4P: Product, Price, Place, Promotion\n• Digital Marketing, Branding\n• Nghiên cứu thị trường\n\n💡 Mẹo học:\n• Đọc case study thành công/thất bại\n• Thực hành qua mô phỏng\n• Theo dõi xu hướng kinh doanh'
    },
    
    // ============================================
    // KỸ NĂNG MỀM - SỨC KHỎE
    // ============================================
    {
        id: 'stress',
        keywords: ['stress', 'căng thẳng', 'lo âu', 'thi cử', 'áp lực', 'mệt mỏi', 'relax', 'burnout'],
        response: '🧘 GIẢM STRESS KHI ÔN THI\n\n📌 Phương pháp hiệu quả:\n1. ⏰ Pomodoro: 25 phút học + 5 phút nghỉ\n2. 🏃 Tập thể dục nhẹ 15-20 phút\n3. 😴 Ngủ đủ 7-8 tiếng mỗi đêm\n4. 🌿 Hít thở sâu: 4-7-8 (hít 4s, giữ 7s, thở 8s)\n5. 📱 Giảm thời gian sử dụng điện thoại\n6. 🗣️ Nói chuyện với bạn bè, người thân\n\n📌 Dấu hiệu burnout:\n• Mất động lực học tập\n• Khó tập trung\n• Cảm thấy kiệt sức\n\n💡 Mẹo: Viết ra những điều lo lắng để giải tỏa tâm lý.'
    },
    {
        id: 'schedule',
        keywords: ['lịch học', 'thời gian biểu', 'lập kế hoạch', 'học tập', 'ôn thi', 'plan', 'schedule'],
        response: '📅 LỊCH HỌC HIỆU QUẢ\n\n📌 Nguyên tắc vàng:\n• ⏰ 45 phút học + 10 phút nghỉ\n• 📚 Mỗi ngày tối đa 4-6 giờ học hiệu quả\n• 🌅 Học môn khó vào buổi sáng (tập trung cao)\n• 🌙 Ôn tập nhẹ nhàng vào buổi tối\n• 📆 Lên kế hoạch học theo tuần\n\n📌 Các phương pháp:\n• Kỹ thuật Pomodoro\n• Phương pháp Feynman\n• Spaced Repetition (Lặp lại ngắt quãng)\n\n💡 Mẹo: Sử dụng ứng dụng như Notion, Todoist hoặc Google Calendar để tổ chức công việc.'
    },
    {
        id: 'memory',
        keywords: ['ghi nhớ', 'nhớ lâu', 'học thuộc', 'flashcard', 'mindmap', 'spaced repetition', 'mnemonic'],
        response: '🧠 KỸ THUẬT GHI NHỚ\n\n📌 Phương pháp:\n• Spaced Repetition (Lặp lại ngắt quãng)\n• Mind Map (Sơ đồ tư duy)\n• Mnemonic (Ghi nhớ bằng hình ảnh, từ khóa)\n• Flashcard (Thẻ nhớ)\n• Active Recall (Gợi nhớ chủ động)\n• Phương pháp Loci (Palace of Memory)\n\n📌 Thời gian vàng để ôn tập:\n• 1 ngày sau khi học\n• 3 ngày sau\n• 1 tuần sau\n• 2 tuần sau\n• 1 tháng sau\n\n💡 Mẹo: Áp dụng Pomodoro + Spaced Repetition sẽ cực kỳ hiệu quả.'
    },
    {
        id: 'time_management',
        keywords: ['quản lý thời gian', 'time management', 'làm việc hiệu quả', 'eisenhower', 'priority'],
        response: '⏰ QUẢN LÝ THỜI GIAN\n\n📌 Nguyên tắc Eisenhower:\n• 🔴 Quan trọng + Khẩn cấp → Làm ngay\n• 🟠 Quan trọng + Không khẩn cấp → Lên kế hoạch\n• 🟡 Không quan trọng + Khẩn cấp → Ủy thác\n• 🟢 Không quan trọng + Không khẩn cấp → Bỏ qua\n\n📌 Kỹ thuật khác:\n• Pomodoro 25/5\n• Time Blocking\n• 80/20 Rule (Pareto)\n\n💡 Mẹo: Sử dụng ứng dụng như Notion, Todoist hoặc Google Calendar để tổ chức công việc.'
    },
    
    // ============================================
    // KỸ NĂNG HỌC TẬP
    // ============================================
    {
        id: 'study_tips',
        keywords: ['học tập', 'study', 'phương pháp học', 'học hiệu quả', 'cách học', 'self-study'],
        response: '📚 PHƯƠNG PHÁP HỌC TẬP HIỆU QUẢ\n\n📌 Phương pháp:\n• Feynman Technique: Giải thích lại bằng ngôn ngữ của bạn\n• Pomodoro: 25 phút tập trung + 5 phút nghỉ\n• Active Recall: Tự kiểm tra kiến thức\n• Spaced Repetition: Lặp lại ngắt quãng\n\n📌 Xây dựng thói quen:\n• Học cùng lúc mỗi ngày\n• Tạo không gian học tập riêng\n• Tắt thông báo khi học\n• Đặt mục tiêu cụ thể\n\n💡 Mẹo: Sử dụng kỹ thuật "5 phút bắt đầu" để vượt qua sự trì hoãn.'
    },
    {
        id: 'focus',
        keywords: ['tập trung', 'mất tập trung', 'concentrate', 'điện thoại', 'phân tâm', 'attention'],
        response: '🎯 CẢI THIỆN SỰ TẬP TRUNG\n\n📌 Kỹ thuật:\n• Tắt thông báo điện thoại và máy tính\n• Sử dụng ứng dụng như Forest hoặc Focus Keeper\n• Làm việc trong môi trường yên tĩnh\n• Chia nhỏ công việc thành các nhiệm vụ dễ hoàn thành\n• Thiền 5-10 phút trước khi học\n\n📌 Yếu tố ảnh hưởng:\n• Giấc ngủ: Ngủ đủ 7-8 tiếng\n• Dinh dưỡng: Ăn uống lành mạnh\n• Vận động: Tập thể dục thường xuyên\n\n💡 Mẹo: Kỹ thuật Pomodoro (25/5) giúp cải thiện tập trung đáng kể.'
    },
    
    // ============================================
    // TÂM LÝ HỌC
    // ============================================
    {
        id: 'anxiety',
        keywords: ['lo âu', 'anxiety', 'hoảng loạn', 'panic', 'bồn chồn', 'sợ hãi'],
        response: '😰 QUẢN LÝ LO ÂU\n\n📌 Cách quản lý lo âu:\n• Nhận diện nguyên nhân gây lo âu\n• Thực hành mindfulness (chánh niệm)\n• Tập thể dục thường xuyên\n• Hạn chế caffeine và đường\n• Ngủ đủ giấc\n• Tìm kiếm sự hỗ trợ từ chuyên gia\n\n📌 Kỹ thuật thư giãn:\n• Kỹ thuật 5-4-3-2-1\n• Hít thở sâu 4-7-8\n• Thiền 10 phút mỗi ngày\n\n💡 Mẹo: Viết nhật ký cảm xúc để giải tỏa.'
    },
    {
        id: 'sleep',
        keywords: ['giấc ngủ', 'mất ngủ', 'ngủ', 'sleep', 'insomnia', 'nghỉ ngơi', 'dream'],
        response: '😴 CẢI THIỆN GIẤC NGỦ\n\n📌 Mẹo hay:\n• Tắt điện thoại 30 phút trước khi ngủ\n• Tạo không gian ngủ tối, yên tĩnh\n• Đi ngủ và thức dậy cùng giờ mỗi ngày\n• Tránh caffeine sau 4 giờ chiều\n• Tập thể dục nhẹ trước khi ngủ\n• Đọc sách giấy thay vì dùng điện thoại\n\n📌 Lợi ích của ngủ đủ giấc:\n• Tăng cường trí nhớ\n• Cải thiện tâm trạng\n• Tăng khả năng tập trung\n• Hỗ trợ hệ miễn dịch\n\n💡 Mẹo: Ngủ 7-8 tiếng mỗi đêm là lý tưởng cho sinh viên.'
    },
    
    // ============================================
    // HƯỚNG NGHIỆP
    // ============================================
    {
        id: 'internship',
        keywords: ['thực tập', 'intern', 'tuyển dụng', 'cv', 'portfolio', 'phỏng vấn', 'career'],
        response: '💼 KINH NGHIỆM TÌM THỰC TẬP\n\n📌 Các bước:\n1. Xác định lĩnh vực và kỹ năng mục tiêu\n2. Xây dựng CV và Portfolio\n3. Tìm kiếm trên LinkedIn, VietnamWorks, TopDev\n4. Chuẩn bị phỏng vấn (Technical + Behavioral)\n5. Học hỏi và networking trong quá trình thực tập\n\n📌 CV ấn tượng:\n• Sạch sẽ, ngắn gọn, tối đa 2 trang\n• Highlight kỹ năng và thành tích\n• Có link GitHub/Portfolio (nếu có)\n\n💡 Mẹo: Bắt đầu sớm và tích lũy project cá nhân để có lợi thế cạnh tranh.'
    },
    {
        id: 'career',
        keywords: ['nghề nghiệp', 'career', 'định hướng', 'ngành nghề', 'việc làm', 'job', 'tương lai'],
        response: '🚀 ĐỊNH HƯỚNG NGHỀ NGHIỆP\n\n📌 Các bước xác định:\n• Khám phá sở thích và đam mê\n• Đánh giá điểm mạnh/điểm yếu\n• Tìm hiểu về các ngành nghề\n• Thực tập và trải nghiệm thực tế\n• Xây dựng kế hoạch phát triển\n\n📌 Xu hướng nghề nghiệp hiện tại:\n• Data Science & AI\n• Software Development\n• Digital Marketing\n• Quản trị kinh doanh\n• Thiết kế UX/UI\n\n💡 Mẹo: Tham gia hội thảo, workshop để mở rộng mạng lưới quan hệ.'
    }
];

// ============================================
// HÀM TÌM KIẾM THÔNG MINH
// ============================================
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
    const suggestions = knowledgeBaseAdvanced.slice(0, 8).map(item => 
        `• ${item.keywords[0].charAt(0).toUpperCase() + item.keywords[0].slice(1)}`
    ).join('\n');
    
    return `🤔 Mình chưa có thông tin cụ thể về câu hỏi này. Bạn có thể thử hỏi về:\n\n${suggestions}\n\nHoặc mô tả chi tiết hơn để mình có thể giúp bạn tốt hơn! 🤗`;
}

// ============================================
// KHỞI TẠO AI ASSISTANT
// ============================================
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
        
        // Hiển thị câu hỏi của user
        addMessage(text, true);
        input.value = '';
        
        // Thêm loading
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
            // Xóa loading
            const loading = document.getElementById('loadingMessage');
            if (loading) loading.remove();
            
            const response = getAIResponseAdvanced(text);
            addMessage(response, false);
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

// Tự động khởi tạo
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAIAssistant();
} else {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
}
