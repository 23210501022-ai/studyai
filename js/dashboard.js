// ============================================================
// DASHBOARD.JS - NÂNG CẤP VỚI THỐNG KÊ CÁ NHÂN
// ============================================================

function initDashboard() {
    // Phân tích dữ liệu tổng quan
    const aiData = analyzeAIAssistantData();
    const stressData = analyzeStressData();
    const stressLevelData = analyzeStressLevelData();
    
    // ============================================
    // 1. CẬP NHẬT THỐNG KÊ TỔNG QUAN
    // ============================================
    document.getElementById('totalSessions').textContent = aiData.totalSessions;
    document.getElementById('avgSessionLength').textContent = aiData.avgSessionLength.toFixed(1);
    document.getElementById('avgSatisfaction').textContent = aiData.avgSatisfaction.toFixed(1);
    document.getElementById('avgStress').textContent = stressData.avgAnxiety.toFixed(1);
    
    // ============================================
    // 2. THỐNG KÊ CÁ NHÂN (TỪ LỊCH ĐÃ LƯU)
    // ============================================
    renderPersonalStats();
    
    // ============================================
    // 3. VẼ CÁC BIỂU ĐỒ (giữ nguyên)
    // ============================================
    // ... (các biểu đồ như cũ)
    
    // ============================================
    // 4. GỢI Ý TỪ DỮ LIỆU (giữ nguyên)
    // ============================================
    // ... (phần insights như cũ)
}

// ============================================
// THỐNG KÊ CÁ NHÂN
// ============================================
function renderPersonalStats() {
    const container = document.getElementById('personalStats');
    if (!container) return;
    
    // Lấy dữ liệu từ lịch đã lưu
    const savedSchedules = JSON.parse(localStorage.getItem('studyai-schedules')) || [];
    
    if (savedSchedules.length === 0) {
        container.innerHTML = `
            <div class="personal-stats-empty">
                <p>📭 Bạn chưa có dữ liệu học tập nào được lưu.</p>
                <p style="font-size:13px;color:#94a3b8;">Hãy tạo và lưu lịch học để xem thống kê cá nhân!</p>
            </div>
        `;
        return;
    }
    
    // Tính toán thống kê
    const totalSchedules = savedSchedules.length;
    const totalHours = savedSchedules.reduce((sum, s) => sum + s.totalHours, 0);
    const avgHours = totalHours / totalSchedules;
    const totalSubjects = savedSchedules.reduce((sum, s) => sum + s.subjects.length, 0);
    const avgSubjects = totalSubjects / totalSchedules;
    
    // Đếm tần suất môn học
    const subjectCount = {};
    savedSchedules.forEach(s => {
        s.subjects.forEach(sub => {
            subjectCount[sub] = (subjectCount[sub] || 0) + 1;
        });
    });
    const topSubjects = Object.entries(subjectCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
    
    container.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">
            <div style="padding:14px;background:#f8fafc;border-radius:10px;text-align:center;">
                <div style="font-size:22px;font-weight:700;color:#3b82f6;">${totalSchedules}</div>
                <div style="font-size:13px;color:#64748b;">Số lịch đã tạo</div>
            </div>
            <div style="padding:14px;background:#f8fafc;border-radius:10px;text-align:center;">
                <div style="font-size:22px;font-weight:700;color:#10b981;">${avgHours.toFixed(1)}h</div>
                <div style="font-size:13px;color:#64748b;">TB giờ/lịch</div>
            </div>
            <div style="padding:14px;background:#f8fafc;border-radius:10px;text-align:center;">
                <div style="font-size:22px;font-weight:700;color:#8b5cf6;">${avgSubjects.toFixed(0)}</div>
                <div style="font-size:13px;color:#64748b;">TB môn/lịch</div>
            </div>
        </div>
        <div style="padding:14px;background:#f8fafc;border-radius:10px;">
            <div style="font-size:14px;font-weight:600;margin-bottom:8px;">📚 Môn học được học nhiều nhất:</div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
                ${topSubjects.map(([subject, count]) => `
                    <span style="padding:4px 12px;background:#eff6ff;border-radius:20px;font-size:13px;color:#3b82f6;">
                        ${subject} (${count} lần)
                    </span>
                `).join('')}
            </div>
        </div>
    `;
}

// Thêm vào dashboard HTML: phần thống kê cá nhân
// Trong index.html, thêm sau stats-overview:
/*
<div class="chart-container" id="personalStatsContainer">
    <h3>📊 Thống kê học tập cá nhân</h3>
    <div id="personalStats"></div>
</div>
*/
