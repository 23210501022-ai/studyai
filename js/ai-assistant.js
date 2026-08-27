// ============================================================
// AI ASSISTANT MODULE - KNOWLEDGE BASE MỞ RỘNG
// ============================================================

// Cấu trúc knowledge base với NHIỀU MÔN HỌC hơn
const knowledgeBaseAdvanced = [
    // ============================================================
    // TOÁN HỌC
    // ============================================================
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
];

// ============================================================
// HÀM TÌM KIẾM THÔNG MINH - CẢI TIẾN
// ============================================================
function getAIResponseAdvanced(query) {
    const lower = query.toLowerCase().trim();
    
    // Nếu câu hỏi quá ngắn
    if (lower.length < 2) {
        return '🤔 Bạn có thể hỏi cụ thể hơn một chút được không? Mình sẵn sàng giúp bạn! 📖';
    }
    
    // Tìm kiếm với độ ưu tiên
    let bestMatch = null;
    let maxScore = 0;
    let matchedKeywords = [];
    
    for (const item of knowledgeBaseAdvanced) {
        let score = 0;
        const matched = [];
        
        for (const keyword of item.keywords) {
            if (lower.includes(keyword)) {
                // Từ khóa dài hơn (cụ thể hơn) được ưu tiên
                const keywordScore = keyword.length;
                score += keywordScore;
                matched.push(keyword);
            }
        }
        
        // Bonus: nếu keyword xuất hiện ở đầu câu
        for (const keyword of item.keywords) {
            if (lower.startsWith(keyword)) {
                score += 10;
            }
        }
        
        if (score > maxScore) {
            maxScore = score;
            bestMatch = item;
            matchedKeywords = matched;
        }
    }
    
    // Nếu tìm thấy với độ khớp tốt (>= 3 điểm)
    if (bestMatch && maxScore >= 2) {
        return bestMatch.response;
    }
    
    // Nếu không tìm thấy, trả về gợi ý các chủ đề chính
    const mainTopics = [
        'Toán học (cao cấp, rời rạc, xác suất)',
        'Vật lý (đại cương, lượng tử)',
        'Hóa học (đại cương, hữu cơ)',
        'Sinh học (đại cương, sinh lý)',
        'Ngữ văn, Tiếng Anh',
        'Lập trình (Python, Java, C++, JS)',
        'Machine Learning, Data Science',
        'Kinh tế (vi mô, vĩ mô)',
        'Tâm lý học, Sức khỏe tinh thần',
        'Phương pháp học tập, Quản lý thời gian'
    ];
    
    return `🤔 Mình chưa có thông tin cụ thể về "${query}".\n\n📌 Bạn có thể thử hỏi về các chủ đề sau:\n${mainTopics.map(t => `• ${t}`).join('\n')}\n\n💡 Hoặc mô tả chi tiết hơn để mình có thể giúp bạn tốt hơn nhé! 🤗`;
}
