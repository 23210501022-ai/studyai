// ============================================================
// DASHBOARD.JS - PHÂN TÍCH DỮ LIỆU
// ============================================================

// ============================================
// UPLOAD CSV & PHÂN TÍCH
// ============================================
function handleCSVUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const csvData = e.target.result;
            const parsedData = parseCSV(csvData);
            
            // Lưu vào sessionStorage
            sessionStorage.setItem('uploadedCSVData', JSON.stringify(parsedData));
            
            renderCSVAnalysis(parsedData);
            showToast('✅ Đã tải và phân tích CSV thành công!', 'success');
        } catch (error) {
            console.error('Lỗi parse CSV:', error);
            showToast('❌ Lỗi đọc file CSV: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
}

// ============================================
// PARSE CSV
// ============================================
function parseCSV(text) {
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length < 2) throw new Error('File CSV rỗng hoặc không hợp lệ');
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/["']/g, ''));
    const rows = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim().replace(/["']/g, ''));
        const obj = {};
        headers.forEach((h, i) => {
            obj[h] = values[i] || '';
            // Chuyển đổi số
            if (!isNaN(values[i]) && values[i] !== '') {
                obj[h] = parseFloat(values[i]);
            }
        });
        return obj;
    });
    
    return { headers, rows };
}

// ============================================
// HIỂN THỊ PHÂN TÍCH CSV
// ============================================
function renderCSVAnalysis(data) {
    const container = document.getElementById('csvAnalysis');
    if (!container) return;
    
    if (!data || data.rows.length === 0) {
        container.innerHTML = '<p>📭 Chưa có dữ liệu để phân tích</p>';
        return;
    }
    
    const { headers, rows } = data;
    
    // Tìm các cột số để thống kê
    const numericCols = headers.filter(h => 
        rows.some(row => typeof row[h] === 'number')
    );
    
    let html = `
        <div class="csv-stats">
            <h4>📊 Phân tích dữ liệu</h4>
            <div class="csv-info">
                <span>📄 Tổng số dòng: ${rows.length}</span>
                <span>📋 Số cột: ${headers.length}</span>
            </div>
            <div class="csv-numeric-stats">
    `;
    
    numericCols.forEach(col => {
        const values = rows.map(r => r[col]).filter(v => typeof v === 'number');
        if (values.length === 0) return;
        
        const sum = values.reduce((a, b) => a + b, 0);
        const avg = sum / values.length;
        const max = Math.max(...values);
        const min = Math.min(...values);
        
        html += `
            <div class="csv-col-stat">
                <h5>📊 ${col}</h5>
                <span>Trung bình: ${avg.toFixed(2)}</span>
                <span>Max: ${max} | Min: ${min}</span>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="csv-preview">
                <h5>👀 Xem trước dữ liệu (5 dòng đầu)</h5>
                <table class="csv-table">
                    <thead>
                        <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
                    </thead>
                    <tbody>
                        ${rows.slice(0, 5).map(row => `
                            <tr>${headers.map(h => `<td>${row[h] || ''}</td>`).join('')}</tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ============================================
// HIỂN THỊ THỐNG KÊ CÁ NHÂN (TỪ LỊCH HỌC)
// ============================================
function renderPersonalStats() {
    const container = document.getElementById('personalStats');
    if (!container) return;
    
    // Lấy dữ liệu từ localStorage
    let schedule = [];
    try {
        const data = localStorage.getItem('studySchedule');
        if (data) {
            schedule = JSON.parse(data);
        }
    } catch (e) {
        console.error('Lỗi tải lịch cho stats:', e);
    }
    
    if (schedule.length === 0) {
        container.innerHTML = `
            <div class="personal-stats-empty">
                <p>📭 Chưa có dữ liệu học tập</p>
                <p style="font-size:13px;color:#94a3b8;">Hãy thêm lịch học để thấy thống kê cá nhân</p>
            </div>
        `;
        return;
    }
    
    // Tính toán
    const totalEvents = schedule.length;
    const totalHours = schedule.reduce((sum, e) => sum + (parseFloat(e.hours) || 0), 0);
    const avgHoursPerEvent = totalHours / totalEvents;
    
    // Môn học nhiều nhất
    const subjectCount = {};
    schedule.forEach(e => {
        subjectCount[e.subject] = (subjectCount[e.subject] || 0) + 1;
    });
    const favoriteSubject = Object.keys(subjectCount).sort((a, b) => subjectCount[b] - subjectCount[a])[0] || 'Chưa có';
    
    container.innerHTML = `
        <div class="personal-stats-grid">
            <div class="pstat">
                <span class="pstat-label">📚 Tổng số môn học</span>
                <span class="pstat-value">${totalEvents}</span>
            </div>
            <div class="pstat">
                <span class="pstat-label">⏰ Tổng giờ học</span>
                <span class="pstat-value">${totalHours}h</span>
            </div>
            <div class="pstat">
                <span class="pstat-label">📊 Giờ TB/môn</span>
                <span class="pstat-value">${avgHoursPerEvent.toFixed(1)}h</span>
            </div>
            <div class="pstat">
                <span class="pstat-label">⭐ Môn yêu thích</span>
                <span class="pstat-value">${favoriteSubject}</span>
            </div>
        </div>
    `;
}

// ============================================
// KHỞI TẠO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderPersonalStats();
    
    // Xử lý upload CSV
    const csvUpload = document.getElementById('csvUpload');
    if (csvUpload) {
        csvUpload.addEventListener('change', handleCSVUpload);
    }
    
    // Cập nhật stats khi có thay đổi lịch
    document.addEventListener('scheduleUpdated', renderPersonalStats);
});
