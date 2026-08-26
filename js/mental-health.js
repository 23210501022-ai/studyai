// ============================================================
// MENTAL-HEALTH.JS - HỖ TRỢ SỨC KHỎE TINH THẦN
// ============================================================

let mentalHealthLogs = [];

// ============================================
// TẢI DỮ LIỆU TỪ LOCAL STORAGE
// ============================================
function loadMentalHealthData() {
    try {
        const data = localStorage.getItem('mentalHealthLogs');
        if (data) {
            mentalHealthLogs = JSON.parse(data);
        } else {
            // Dữ liệu mẫu
            mentalHealthLogs = getDefaultMentalHealthData();
            saveMentalHealthData();
        }
        renderMentalHealthStats();
    } catch (e) {
        console.error('Lỗi tải dữ liệu sức khỏe:', e);
        mentalHealthLogs = getDefaultMentalHealthData();
    }
}

// ============================================
// LƯU DỮ LIỆU
// ============================================
function saveMentalHealthData() {
    try {
        localStorage.setItem('mentalHealthLogs', JSON.stringify(mentalHealthLogs));
    } catch (e) {
        console.error('Lỗi lưu dữ liệu sức khỏe:', e);
    }
}

// ============================================
// THÊM BẢN GHI MỚI
// ============================================
function addMentalHealthLog(data) {
    const newLog = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        ...data
    };
    
    mentalHealthLogs.push(newLog);
    saveMentalHealthData();
    renderMentalHealthStats();
    showToast('✅ Đã ghi nhận trạng thái cảm xúc!', 'success');
}

// ============================================
// HIỂN THỊ THỐNG KÊ
// ============================================
function renderMentalHealthStats() {
    const container = document.getElementById('mentalHealthStats');
    if (!container) return;
    
    if (mentalHealthLogs.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>🧘 Chưa có dữ liệu sức khỏe</p>
                <button onclick="showAddMentalHealthForm()" class="btn-primary">
                    📝 Ghi nhận cảm xúc
                </button>
            </div>
        `;
        return;
    }
    
    // Tính toán thống kê
    const total = mentalHealthLogs.length;
    const latest = mentalHealthLogs[mentalHealthLogs.length - 1];
    const avgStress = Math.round(mentalHealthLogs.reduce((sum, l) => sum + (l.stressLevel || 0), 0) / total);
    const avgMood = Math.round(mentalHealthLogs.reduce((sum, l) => sum + (l.mood || 0), 0) / total);
    
    container.innerHTML = `
        <div class="health-stats-grid">
            <div class="health-stat">
                <span class="stat-label">📊 Số lần ghi nhận</span>
                <span class="stat-value">${total}</span>
            </div>
            <div class="health-stat">
                <span class="stat-label">😊 Tâm trạng TB</span>
                <span class="stat-value">${avgMood}/5</span>
            </div>
            <div class="health-stat">
                <span class="stat-label">⚠️ Căng thẳng TB</span>
                <span class="stat-value">${avgStress}/5</span>
            </div>
            <div class="health-stat">
                <span class="stat-label">📅 Gần nhất</span>
                <span class="stat-value">${latest.date || 'Hôm nay'}</span>
            </div>
        </div>
        <div class="health-tips">
            <h4>💡 Mẹo giảm căng thẳng</h4>
            <ul>
                <li>🧘 Hít thở sâu 5 phút mỗi ngày</li>
                <li>🚶 Đi bộ ngắn sau giờ học</li>
                <li>🎵 Nghe nhạc nhẹ khi học</li>
                <li>📝 Viết nhật ký để giải tỏa cảm xúc</li>
            </ul>
        </div>
        <button onclick="showAddMentalHealthForm()" class="btn-primary" style="margin-top:12px;">
            📝 Ghi nhận hôm nay
        </button>
    `;
}

// ============================================
// HIỂN THỊ FORM GHI NHẬN
// ============================================
function showAddMentalHealthForm() {
    const formHtml = `
        <div id="mentalHealthFormModal" class="modal-overlay">
            <div class="modal-content">
                <h3>🧠 Ghi nhận trạng thái cảm xúc</h3>
                <form id="mentalHealthForm" onsubmit="handleMentalHealthSubmit(event)">
                    <label>Tâm trạng hôm nay</label>
                    <div class="rating-group">
                        ${[1,2,3,4,5].map(n => `
                            <label>
                                <input type="radio" name="mood" value="${n}" ${n === 3 ? 'checked' : ''}>
                                ${n === 1 ? '😢' : n === 2 ? '😕' : n === 3 ? '😐' : n === 4 ? '😊' : '😄'}
                            </label>
                        `).join('')}
                    </div>
                    
                    <label>Mức độ căng thẳng</label>
                    <div class="rating-group">
                        ${[1,2,3,4,5].map(n => `
                            <label>
                                <input type="radio" name="stress" value="${n}" ${n === 2 ? 'checked' : ''}>
                                ${n === 1 ? '🟢' : n === 2 ? '🟡' : n === 3 ? '🟠' : n === 4 ? '🔴' : '🚨'}
                            </label>
                        `).join('')}
                    </div>
                    
                    <label>Ghi chú (tùy chọn)</label>
                    <textarea id="healthNote" placeholder="Bạn cảm thấy thế nào hôm nay?..." rows="3"></textarea>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn-primary">💾 Lưu</button>
                        <button type="button" onclick="closeMentalHealthForm()" class="btn-secondary">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    const existing = document.getElementById('mentalHealthFormModal');
    if (existing) existing.remove();
    
    document.body.insertAdjacentHTML('beforeend', formHtml);
}

function closeMentalHealthForm() {
    const modal = document.getElementById('mentalHealthFormModal');
    if (modal) modal.remove();
}

function handleMentalHealthSubmit(e) {
    e.preventDefault();
    
    const mood = parseInt(document.querySelector('input[name="mood"]:checked')?.value) || 3;
    const stress = parseInt(document.querySelector('input[name="stress"]:checked')?.value) || 2;
    const note = document.getElementById('healthNote')?.value?.trim() || '';
    
    addMentalHealthLog({
        mood: mood,
        stressLevel: stress,
        note: note
    });
    
    closeMentalHealthForm();
}

// ============================================
// DỮ LIỆU MẪU
// ============================================
function getDefaultMentalHealthData() {
    const today = new Date().toISOString().split('T')[0];
    return [
        { id: 1, date: today, mood: 4, stressLevel: 2, note: 'Hôm nay học tốt, tinh thần thoải mái' },
        { id: 2, date: new Date(Date.now() - 86400000).toISOString().split('T')[0], mood: 3, stressLevel: 3, note: 'Hơi mệt vì nhiều bài tập' },
        { id: 3, date: new Date(Date.now() - 2*86400000).toISOString().split('T')[0], mood: 5, stressLevel: 1, note: 'Cuối tuần vui vẻ, được nghỉ ngơi' },
    ];
}

// ============================================
// KHỞI TẠO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadMentalHealthData();
});
