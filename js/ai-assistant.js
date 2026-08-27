// ============================================================
// AI ASSISTANT MODULE - NÂNG CẤP NLU
// ============================================================

// Cấu trúc knowledge base mới với từ khóa và câu trả lời
const knowledgeBaseAdvanced = [
    {
        id: 'toan_cao_cap',
        keywords: ['toán cao cấp', 'giải tích', 'đại số tuyến tính', 'vi tích phân', 'toán', 'math', 'calculus', 'linear algebra', 'phương trình vi phân', 'tích phân', 'đạo hàm', 'giới hạn', 'ma trận', 'không gian vector'],
        response: '📐 TOÁN CAO CẤP - KIẾN THỨC CƠ BẢN\n\n🔢 GIẢI TÍCH:\n• Đạo hàm: f\'(x) = lim(h→0) [f(x+h) - f(x)]/h\n• Tích phân: ∫f(x)dx = F(x) + C\n• Giới hạn: lim(x→a) f(x) = L\n\n📊 ĐẠI SỐ TUYẾN TÍNH:\n• Ma trận: A = [aᵢⱼ]\n• Định thức: det(A)\n• Không gian vector: Tập hợp các vector\n• Eigenvalue: Ax = λx\n\n📌 Ứng dụng: Kỹ thuật, Vật lý, Kinh tế, Machine Learning\n\n💡 Mẹo: Học từ cơ bản (đạo hàm, tích phân) trước, sau đó lên giải tích đa biến và đại số tuyến tính.'
    },
    {
        id: 'toan_roi_rac',
        keywords: ['toán rời rạc', 'discrete math', 'tổ hợp', 'logic', 'quan hệ', 'đồ thị', 'graph', 'combinatorics', 'tập hợp', 'mệnh đề'],
        response: '🧩 TOÁN RỜI RẠC - KIẾN THỨC NỀN TẢNG\n\n📌 CÁC CHỦ ĐỀ CHÍNH:\n• Logic mệnh đề: p ∧ q, p ∨ q, ¬p, p → q\n• Tập hợp: A ∪ B, A ∩ B, A \\ B\n• Quan hệ: Quan hệ tương đương, thứ tự\n• Đồ thị: Đồ thị vô hướng, có hướng, cây\n• Tổ hợp: Chỉnh hợp, tổ hợp, hoán vị\n\n💡 Ứng dụng: Lập trình, Mạng máy tính, Mật mã học\n\n📚 Sách tham khảo: "Discrete Mathematics and Its Applications" - Rosen'
    },
    {
        id: 'xac_suat_thong_ke',
        keywords: ['xác suất', 'thống kê', 'probability', 'statistics', 'phân phối', 'trung bình', 'phương sai', 'bayes', 'kiểm định', 'hồi quy'],
        response: '📊 XÁC SUẤT & THỐNG KÊ\n\n📌 XÁC SUẤT:\n• P(A∪B) = P(A) + P(B) - P(A∩B)\n• P(A|B) = P(A∩B) / P(B)\n• Định lý Bayes: P(A|B) = P(B|A)P(A) / P(B)\n\n📈 THỐNG KÊ:\n• Trung bình: x̄ = (Σxᵢ)/n\n• Phương sai: σ² = Σ(xᵢ - x̄)²/n\n• Phân phối: Chuẩn, Poisson, Nhị thức\n\n💡 Ứng dụng: Khoa học dữ liệu, Kinh tế, Y học\n\n📚 Mẹo: Bắt đầu với thống kê mô tả, rồi đến suy luận thống kê.'
    },

    // ============================================================
    // VẬT LÝ
    // ============================================================
    {
        id: 'vat_ly_dai_cuong',
        keywords: ['vật lý', 'physics', 'cơ học', 'nhiệt', 'điện', 'từ', 'quang', 'vật lý đại cương', 'newton', 'công thức vật lý'],
        response: '⚡ VẬT LÝ ĐẠI CƯƠNG\n\n📌 CƠ HỌC:\n• Định luật 2 Newton: F = ma\n• Công: W = F.s.cosα\n• Động năng: Eₖ = ½mv²\n• Thế năng: Eₚ = mgh\n• Định luật bảo toàn cơ năng\n\n📌 NHIỆT HỌC:\n• Phương trình trạng thái: PV = nRT\n• Nhiệt lượng: Q = mcΔt\n• Nguyên lý 1 NĐLH: ΔU = A + Q\n\n📌 ĐIỆN TỪ:\n• Định luật Coulomb: F = k|q₁q₂|/r²\n• Điện trường: E = F/q\n• Định luật Ohm: U = IR\n\n💡 Mẹo: Học theo chủ đề và làm nhiều bài tập vận dụng.'
    },
    {
        id: 'vat_ly_luong_tu',
        keywords: ['vật lý lượng tử', 'quantum physics', 'cơ học lượng tử', 'schrodinger', 'planck', 'heisenberg', 'nguyên tử'],
        response: '🔬 VẬT LÝ LƯỢNG TỬ\n\n📌 CÁC KHÁI NIỆM:\n• Lưỡng tính sóng-hạt: λ = h/p\n• Nguyên lý bất định Heisenberg: Δx.Δp ≥ ħ/2\n• Phương trình Schrödinger: iħ∂ψ/∂t = Ĥψ\n• Hàm sóng: |ψ|² = xác suất tìm thấy hạt\n\n📌 ỨNG DỤNG:\n• Máy tính lượng tử\n• Laser\n• Cảm biến lượng tử\n\n📚 Sách: "Principles of Quantum Mechanics" - Shankar'
    },

    // ============================================================
    // HÓA HỌC
    // ============================================================
    {
        id: 'hoa_hoc_dai_cuong',
        keywords: ['hóa học', 'chemistry', 'nguyên tử', 'phân tử', 'phản ứng', 'bảng tuần hoàn', 'liên kết hóa học', 'nhiệt động hóa học', 'dung dịch'],
        response: '🧪 HÓA HỌC ĐẠI CƯƠNG\n\n📌 CẤU TẠO NGUYÊN TỬ:\n• Proton (+), Neutron (0), Electron (-)\n• Lớp vỏ electron: K(2), L(8), M(18)\n• Cấu hình electron: 1s²2s²2p⁶...\n\n📌 BẢNG TUẦN HOÀN:\n• Chu kỳ: 7 chu kỳ\n• Nhóm: 18 nhóm\n• Tính chất: Kim loại, phi kim, khí hiếm\n\n📌 PHẢN ỨNG HÓA HỌC:\n• Cân bằng: aA + bB → cC + dD\n• Tốc độ phản ứng: v = k[A]^m[B]^n\n\n💡 Mẹo: Học thuộc bảng tuần hoàn và các nhóm chức năng.'
    },
    {
        id: 'hoa_huu_co',
        keywords: ['hóa hữu cơ', 'organic chemistry', 'hydrocarbon', 'hợp chất hữu cơ', 'phản ứng hữu cơ', 'công thức cấu tạo', 'đồng phân'],
        response: '🧬 HÓA HỮU CƠ\n\n📌 HYDROCARBON:\n• Ankan: CₙH₂ₙ₊₂ (no)\n• Anken: CₙH₂ₙ (có liên kết đôi)\n• Ankin: CₙH₂ₙ₋₂ (có liên kết ba)\n• Aren: Benzen C₆H₆\n\n📌 NHÓM CHỨC:\n• Alcohol: R-OH\n• Aldehyde: R-CHO\n• Acid: R-COOH\n• Ester: R-COO-R\'\n\n📌 PHẢN ỨNG:\n• Thế, cộng, tách\n• Oxi hóa, khử\n• Trùng hợp, este hóa\n\n💡 Ứng dụng: Dược phẩm, Polymer, Hương liệu'
    },

    // ============================================================
    // SINH HỌC
    // ============================================================
    {
        id: 'sinh_hoc_dai_cuong',
        keywords: ['sinh học', 'biology', 'tế bào', 'di truyền', 'tiến hóa', 'sinh thái', 'tế bào học', 'gen', 'dna', 'enzyme'],
        response: '🧬 SINH HỌC ĐẠI CƯƠNG\n\n📌 TẾ BÀO:\n• Màng tế bào: Vận chuyển thụ động, chủ động\n• Nhân: Chứa DNA\n• Ty thể: Hô hấp tế bào\n• Lục lạp: Quang hợp (thực vật)\n\n📌 DI TRUYỀN:\n• DNA: A-T, G-C (bổ sung)\n• Quy luật Mendel: Trội, lặn\n• Đột biến gene: Thay đổi trình tự DNA\n\n📌 TIẾN HÓA:\n• Chọn lọc tự nhiên - Darwin\n• Đột biến + Giao phối + Di nhập gen\n\n📚 Sách: "Biology" - Campbell'
    },
    {
        id: 'sinh_ly_hoc',
        keywords: ['sinh lý học', 'physiology', 'cơ thể', 'hệ tuần hoàn', 'hệ hô hấp', 'hệ thần kinh', 'nội tiết', 'bài tiết'],
        response: '🧠 SINH LÝ HỌC NGƯỜI\n\n📌 HỆ TUẦN HOÀN:\n• Tim: 4 buồng (nhĩ phải, thất phải, nhĩ trái, thất trái)\n• Mạch: Động mạch, tĩnh mạch, mao mạch\n• Máu: Hồng cầu, bạch cầu, tiểu cầu\n\n📌 HỆ THẦN KINH:\n• Nơron: Tế bào thần kinh\n• Synapse: Kết nối giữa các nơron\n• Phản xạ: Cung phản xạ\n\n📌 NỘI TIẾT:\n• Hormone: Insulin, Thyroxin, Adrenalin\n• Tuyến: Tụy, Giáp, Thượng thận\n\n💡 Mẹo: Học theo hệ cơ quan và chức năng.'
    },

    // ============================================================
    // NGÔN NGỮ - VĂN HỌC
    // ============================================================
    {
        id: 'ngu_van',
        keywords: ['ngữ văn', 'văn học', 'tiếng việt', 'văn bản', 'tác phẩm', 'văn học việt nam', 'văn học nước ngoài', 'thơ', 'truyện', 'kịch'],
        response: '📖 NGỮ VĂN - VĂN HỌC\n\n📌 THỂ LOẠI:\n• Thơ: Lục bát, Tự do, Đường luật\n• Truyện: Ngắn, Dài, Tiểu thuyết\n• Kịch: Bi kịch, Hài kịch\n• Tùy bút, tản văn\n\n📌 TÁC GIẢ VIỆT NAM:\n• Nguyễn Du: Truyện Kiều\n• Nam Cao: Chí Phèo, Lão Hạc\n• Tô Hoài: Dế Mèn phiêu lưu ký\n• Hồ Xuân Hương: Thơ Nôm\n\n📌 TÁC GIẢ THẾ GIỚI:\n• Sêkhov, Tô-xtôi\n• Hemingway, Shakespeare\n• Murakami, Garcia Marquez\n\n💡 Mẹo: Đọc nhiều và phân tích tác phẩm theo các phương diện: nội dung, nghệ thuật, bối cảnh.'
    },
    {
        id: 'tieng_anh',
        keywords: ['tiếng anh', 'english', 'ielts', 'toeic', 'grammar', 'vocabulary', 'phát âm', 'ngữ pháp', 'từ vựng'],
        response: '🇬🇧 TIẾNG ANH - KIẾN THỨC CƠ BẢN\n\n📌 NGỮ PHÁP:\n• Thì: Hiện tại, Quá khứ, Tương lai\n• Câu điều kiện: If + S + V, S + will + V\n• Câu bị động: S + be + V3/ed\n• Mệnh đề quan hệ: who, which, that\n\n📌 TỪ VỰNG THEO CHỦ ĐỀ:\n• Gia đình: father, mother, sibling\n• Trường học: teacher, student, exam\n• Công việc: job, career, interview\n\n📌 KỸ NĂNG:\n• Nghe: Podcast, YouTube\n• Nói: Giao tiếp hàng ngày\n• Đọc: Báo, sách, truyện\n• Viết: Email, Essay\n\n💡 Mẹo: Học mỗi ngày 15-20 từ mới và luyện nghe thường xuyên.'
    },

    // ============================================================
    // LẬP TRÌNH - CÔNG NGHỆ
    // ============================================================
    {
        id: 'html_css',
        keywords: ['html', 'css', 'web', 'thiết kế web', 'frontend', 'giao diện', 'flexbox', 'grid', 'responsive'],
        response: '🌐 HTML & CSS - THIẾT KẾ WEB\n\n📌 HTML CƠ BẢN:\n• Cấu trúc: html, head, body\n• Thẻ: div, p, h1-h6, a, img\n• Form: input, button, select\n• Semantic: header, nav, main, section, footer\n\n📌 CSS CƠ BẢN:\n• Selector: #id, .class, tag\n• Box Model: margin, border, padding, content\n• Display: block, inline, flex, grid\n• Position: static, relative, absolute, fixed\n\n📌 NÂNG CAO:\n• Flexbox: display: flex, justify-content, align-items\n• Grid: display: grid, grid-template-columns, gap\n• Animation: @keyframes, transition\n• Media Queries: @media (max-width: 768px)\n\n💡 Mẹo: Luyện tập với Flexbox Froggy và CSS Grid Garden.'
    },
    {
        id: 'javascript',
        keywords: ['javascript', 'js', 'es6', 'lập trình web', 'dom', 'event', 'ajax', 'fetch', 'promise', 'async'],
        response: '⚡ JAVASCRIPT - LẬP TRÌNH WEB\n\n📌 CƠ BẢN:\n• Biến: var, let, const\n• Kiểu: string, number, boolean, array, object\n• Vòng lặp: for, while, forEach\n• Hàm: function, arrow function\n• DOM: document.getElementById, querySelector\n\n📌 ES6+:\n• Template literals: `${variable}`\n• Destructuring: const {name, age} = person\n• Spread: [...array]\n• Class: class Person { constructor() {} }\n• Modules: import/export\n\n📌 BẤT ĐỒNG BỘ:\n• Callback\n• Promise: .then() .catch()\n• Async/Await\n• Fetch API: fetch(url).then(res => res.json())\n\n💡 Mẹo: Luyện tập trên FreeCodeCamp và JavaScript30.'
    },
    {
        id: 'python',
        keywords: ['python', 'code python', 'học python', 'lập trình python', 'python cơ bản', 'python nâng cao', 'numpy', 'pandas', 'flask'],
        response: '🐍 PYTHON - NGÔN NGỮ LẬP TRÌNH\n\n📌 CÚ PHÁP CƠ BẢN:\n• In: print("Hello World")\n• Biến: name = "Python"\n• List: [1, 2, 3]\n• Dict: {"key": "value"}\n• If/Else: if condition: ...\n• Loop: for i in range(10): ...\n\n📌 HÀM VÀ CLASS:\n• def function_name(param):\n• class ClassName: def __init__(self):\n• Inheritance: class Child(Parent):\n\n📌 THƯ VIỆN PHỔ BIẾN:\n• NumPy: Mảng đa chiều\n• Pandas: Xử lý dữ liệu\n• Matplotlib: Vẽ biểu đồ\n• Flask: Web framework\n• TensorFlow/PyTorch: Machine Learning\n\n💡 Mẹo: Bắt đầu với Google Colab hoặc Jupyter Notebook để thực hành.'
    },
    {
        id: 'java',
        keywords: ['java', 'lập trình java', 'spring', 'hibernate', 'oop', 'jvm', 'jdk', 'netbeans', 'eclipse', 'intellij'],
        response: '☕ JAVA - LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG\n\n📌 CƠ BẢN:\n• public static void main(String[] args)\n• Kiểu: int, double, boolean, String\n• OOP: Encapsulation, Inheritance, Polymorphism, Abstraction\n• Class: public class MyClass {}\n\n📌 NÂNG CAO:\n• Collections: List, Set, Map\n• Exception: try, catch, finally\n• Thread: new Thread(() -> {}).start()\n• Stream API: .filter() .map() .collect()\n\n📌 FRAMEWORK:\n• Spring Boot: Microservices\n• Hibernate: ORM\n• Maven/Gradle: Build tool\n\n💡 Mẹo: Luyện tập với LeetCode và sách "Effective Java".'
    },
    {
        id: 'c_plus_plus',
        keywords: ['c++', 'cpp', 'lập trình c++', 'c plus plus', 'pointer', 'reference', 'template', 'stl', 'class', 'object'],
        response: '🖥️ C++ - LẬP TRÌNH HIỆU NĂNG CAO\n\n📌 CƠ BẢN:\n• #include <iostream>\n• using namespace std;\n• cout << "Hello" << endl;\n• cin >> variable;\n• If/Else, Switch, Loop\n\n📌 OOP TRONG C++:\n• Class: class MyClass { public: ... };\n• Constructor/Destructor\n• Inheritance: class Child : public Parent\n• Polymorphism: virtual function\n\n📌 NÂNG CAO:\n• Pointer: int* ptr = &var\n• Reference: int& ref = var\n• Template: template <class T>\n• STL: vector, map, set, algorithm\n• Smart Pointer: unique_ptr, shared_ptr\n\n💡 Mẹo: Sách "C++ Primer" và luyện tập trên Codeforces.'
    },
    {
        id: 'git',
        keywords: ['git', 'github', 'version control', 'commit', 'branch', 'pull request', 'merge', 'clone', 'push', 'pull'],
        response: '📦 GIT - QUẢN LÝ PHIÊN BẢN\n\n📌 LỆNH CƠ BẢN:\n• git init → Khởi tạo repo\n• git status → Kiểm tra trạng thái\n• git add . → Thêm file vào staging\n• git commit -m "message" → Lưu snapshot\n• git push → Đẩy lên remote\n• git pull → Lấy code mới nhất\n• git clone → Sao chép repo\n\n📌 QUẢN LÝ NHÁNH:\n• git branch → Danh sách nhánh\n• git checkout -b new-branch → Tạo nhánh mới\n• git merge branch → Gộp nhánh\n• git rebase → Tái cấu trúc lịch sử\n\n📌 QUY TRÌNH LÀM VIỆC:\n• Feature branch → Pull Request → Review → Merge\n\n💡 Mẹo: Luôn viết commit message rõ ràng: "Fix bug", "Add feature".'
    },
    {
        id: 'sql_database',
        keywords: ['sql', 'database', 'mysql', 'postgresql', 'mongodb', 'query', 'table', 'join', 'index', 'transaction', 'normalization'],
        response: '🗄️ SQL & DATABASE\n\n📌 CƠ BẢN:\n• CREATE TABLE table_name (col1 datatype, col2 datatype)\n• SELECT * FROM table WHERE condition\n• INSERT INTO table (col1, col2) VALUES (val1, val2)\n• UPDATE table SET col1 = val1 WHERE condition\n• DELETE FROM table WHERE condition\n\n📌 NÂNG CAO:\n• JOIN: INNER, LEFT, RIGHT, FULL\n• GROUP BY + HAVING\n• ORDER BY\n• Subquery: SELECT ... WHERE id IN (SELECT ...)\n• Index: CREATE INDEX idx_name ON table(col)\n• Transaction: BEGIN, COMMIT, ROLLBACK\n\n📌 NOSQL (MONGODB):\n• Document: { "name": "John", "age": 30 }\n• Collection: db.collection.find({})\n• Aggregation: $match, $group, $project\n\n💡 Mẹo: Học SQL qua Mode Analytics hoặc SQLZoo.'
    },

    // ============================================================
    // KHOA HỌC DỮ LIỆU
    // ============================================================
    {
        id: 'machine_learning',
        keywords: ['machine learning', 'ml', 'học máy', 'deep learning', 'neural network', 'mạng neural', 'model', 'training', 'dataset', 'supervised', 'unsupervised'],
        response: '🤖 MACHINE LEARNING - HỌC MÁY\n\n📌 PHÂN LOẠI:\n• Supervised Learning (Học có giám sát)\n  - Classification: Phân loại\n  - Regression: Dự đoán giá trị\n• Unsupervised Learning (Không giám sát)\n  - Clustering: Phân cụm\n  - Dimensionality Reduction: Giảm chiều\n• Reinforcement Learning (Học tăng cường)\n\n📌 THUẬT TOÁN PHỔ BIẾN:\n• Linear Regression, Logistic Regression\n• Decision Tree, Random Forest\n• SVM, KNN, Naive Bayes\n• Neural Networks, Deep Learning\n\n📌 THƯ VIỆN:\n• Scikit-learn, TensorFlow, PyTorch\n• Keras, XGBoost, LightGBM\n\n💡 Mẹo: Bắt đầu với Scikit-learn, sau đó lên TensorFlow/PyTorch.'
    },
    {
        id: 'data_science',
        keywords: ['data science', 'khoa học dữ liệu', 'data analysis', 'visualization', 'eda', 'statistics', 'machine learning', 'python', 'r'],
        response: '📊 DATA SCIENCE - KHOA HỌC DỮ LIỆU\n\n📌 QUY TRÌNH:\n1. Thu thập dữ liệu\n2. Làm sạch dữ liệu (Data Cleaning)\n3. Phân tích khám phá (EDA)\n4. Feature Engineering\n5. Xây dựng mô hình\n6. Đánh giá và Triển khai\n\n📌 CÔNG CỤ:\n• Python: Pandas, NumPy, Matplotlib, Seaborn\n• R: tidyverse, ggplot2\n• Jupyter Notebook, Google Colab\n• SQL, Tableau, Power BI\n\n📌 KỸ NĂNG CẦN CÓ:\n• Thống kê, Xác suất\n• Lập trình (Python/R)\n• Machine Learning\n• Trực quan hóa dữ liệu\n\n💡 Mẹo: Làm các project trên Kaggle để thực hành.'
    },

    // ============================================================
    // KINH TẾ - QUẢN TRỊ
    // ============================================================
    {
        id: 'kinh_te_vi_mo',
        keywords: ['kinh tế vi mô', 'microeconomics', 'cung cầu', 'thị trường', 'giá cả', 'hành vi người tiêu dùng', 'doanh nghiệp', 'cạnh tranh'],
        response: '📈 KINH TẾ VI MÔ\n\n📌 CUNG - CẦU:\n• Luật cầu: P↑ → Q↓\n• Luật cung: P↑ → Q↑\n• Trạng thái cân bằng: Qd = Qs\n\n📌 HÀNH VI NGƯỜI TIÊU DÙNG:\n• Hữu dụng: TU, MU\n• Ngân sách: Px.X + Py.Y = I\n• Sự lựa chọn tối ưu: MUx/Px = MUy/Py\n\n📌 DOANH NGHIỆP VÀ SẢN XUẤT:\n• Chi phí: FC, VC, TC, AC, MC\n• Lợi nhuận: TR - TC\n• Cạnh tranh: Hoàn hảo, Độc quyền, Độc quyền tập đoàn\n\n💡 Sách: "Nguyên lý kinh tế vi mô" - Mankiw'
    },
    {
        id: 'kinh_te_vi_mo',
        keywords: ['kinh tế vĩ mô', 'macroeconomics', 'gdp', 'lạm phát', 'thất nghiệp', 'tăng trưởng', 'chính sách tài khóa', 'chính sách tiền tệ'],
        response: '🏦 KINH TẾ VĨ MÔ\n\n📌 CÁC CHỈ TIÊU:\n• GDP: Tổng sản phẩm quốc nội\n• CPI: Chỉ số giá tiêu dùng\n• Lạm phát: Tỷ lệ tăng giá\n• Tỷ lệ thất nghiệp\n• Cán cân thương mại: Xuất khẩu - Nhập khẩu\n\n📌 CHÍNH SÁCH:\n• Tài khóa: Thuế, Chi tiêu công\n• Tiền tệ: Lãi suất, Cung tiền\n• Tỷ giá hối đoái\n\n📌 MÔ HÌNH:\n• AD-AS: Tổng cầu - Tổng cung\n• IS-LM: Thị trường hàng hóa - Thị trường tiền tệ\n\n💡 Sách: "Macroeconomics" - Mankiw'
    },

    // ============================================================
    // TÂM LÝ - SỨC KHỎE
    // ============================================================
    {
        id: 'tam_ly_hoc',
        keywords: ['tâm lý học', 'psychology', 'tâm lý', 'hành vi', 'cảm xúc', 'tư duy', 'nhận thức', 'phát triển', 'tâm thần', 'stress'],
        response: '🧠 TÂM LÝ HỌC\n\n📌 CÁC TRƯỜNG PHÁI:\n• Tâm lý học hành vi: Pavlov, Skinner\n• Tâm lý học nhận thức: Piaget, Vygotsky\n• Tâm lý học nhân văn: Maslow, Rogers\n• Tâm lý học phân tâm: Freud\n\n📌 CHỦ ĐỀ CHÍNH:\n• Học tập và trí nhớ\n• Cảm xúc và động lực\n• Nhận thức và tư duy\n• Phát triển tâm lý qua các giai đoạn\n• Rối loạn tâm lý và trị liệu\n\n📌 ỨNG DỤNG:\n• Tâm lý học lâm sàng\n• Tâm lý học giáo dục\n• Tâm lý học tổ chức\n\n💡 Mẹo: Đọc "Psychology" - David Myers để có cái nhìn tổng quan.'
    },
    {
        id: 'anxiety_stress',
        keywords: ['lo âu', 'stress', 'căng thẳng', 'anxiety', 'panic', 'hoảng loạn', 'bồn chồn', 'sức khỏe tâm thần', 'mental health'],
        response: '🧘 QUẢN LÝ LO ÂU & STRESS\n\n📌 NHẬN BIẾT:\n• Triệu chứng thể chất: Tim đập nhanh, đổ mồ hôi, mệt mỏi\n• Triệu chứng tinh thần: Bồn chồn, lo lắng, khó tập trung\n\n📌 KỸ THUẬT GIẢM STRESS:\n1. Hít thở sâu: 4-7-8 (hít 4s, giữ 7s, thở 8s)\n2. Thiền chánh niệm (Mindfulness)\n3. Tập thể dục 15-20 phút/ngày\n4. Ngủ đủ 7-8 tiếng\n5. Hạn chế caffeine và đường\n\n📌 KỸ THUẬT 5-4-3-2-1:\n• 5 thứ bạn nhìn thấy\n• 4 thứ bạn chạm vào\n• 3 thứ bạn nghe thấy\n• 2 thứ bạn ngửi thấy\n• 1 thứ bạn nếm được\n\n💡 Nếu stress kéo dài, hãy tìm đến chuyên gia tâm lý để được hỗ trợ.'
    },

    // ============================================================
    // PHƯƠNG PHÁP HỌC TẬP
    // ============================================================
    {
        id: 'study_methods',
        keywords: ['phương pháp học', 'study', 'học tập', 'ghi nhớ', 'cách học', 'học hiệu quả', 'tập trung', 'ôn thi', 'schedule', 'lịch học'],
        response: '📚 PHƯƠNG PHÁP HỌC TẬP HIỆU QUẢ\n\n📌 KỸ THUẬT HỌC:\n• Pomodoro: 25 phút học + 5 phút nghỉ\n• Spaced Repetition: Lặp lại ngắt quãng\n• Active Recall: Gợi nhớ chủ động\n• Feynman: Giải thích bằng ngôn ngữ đơn giản\n• Mind Map: Sơ đồ tư duy\n• Flashcard: Thẻ ghi nhớ\n\n📌 LẬP KẾ HOẠCH:\n• Mỗi ngày 4-6 giờ học hiệu quả\n• Học môn khó vào buổi sáng\n• Ôn tập nhẹ nhàng vào buổi tối\n• Nghỉ giải lao 10-15 phút sau mỗi 45 phút\n\n📌 MÔI TRƯỜNG HỌC:\n• Không gian yên tĩnh\n• Ánh sáng tự nhiên\n• Tắt thông báo điện thoại\n\n💡 Mẹo: Sử dụng ứng dụng Forest hoặc Focus Keeper để tăng tập trung.'
    },
    {
        id: 'time_management',
        keywords: ['quản lý thời gian', 'time management', 'eisenhower', 'ưu tiên', 'kế hoạch', 'todo', 'task', 'productivity', 'hiệu quả'],
        response: '⏰ QUẢN LÝ THỜI GIAN CHO SINH VIÊN\n\n📌 MA TRẬN EISENHOWER:\n• 🔴 Khẩn cấp + Quan trọng → Làm ngay\n• 🟠 Quan trọng + Không khẩn cấp → Lên kế hoạch\n• 🟡 Khẩn cấp + Không quan trọng → Ủy thác\n• 🟢 Không khẩn cấp + Không quan trọng → Bỏ qua\n\n📌 NGUYÊN TẮC 80/20 (Pareto):\n• 80% kết quả từ 20% công việc\n• Tập trung vào những việc quan trọng nhất\n\n📌 CÔNG CỤ:\n• Notion, Todoist, Google Calendar\n• Trello, Asana\n• Pomodoro Timer\n\n💡 Mẹo: Mỗi tối, lập danh sách 3 việc quan trọng nhất cần làm vào ngày hôm sau.'
    }
],
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
