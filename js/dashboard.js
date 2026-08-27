// ============================================================
// DASHBOARD.JS - HOÀN CHỈNH
// ============================================================

// ============================================================
// DỮ LIỆU MẪU (FALLBACK) - TRONG TRƯỜNG HỢP DATA.JS CHƯA LOAD
// ============================================================
const FALLBACK_DATA = {
    totalSessions: 128,
    avgSessionLength: 45.2,
    avgSatisfaction: 4.1,
    avgStress: 3.2,
    outcomes: {
        labels: ['Toán', 'Lý', 'Hóa', 'Văn', 'Anh', 'Sinh', 'Sử', 'Địa'],
        values: [8.5, 7.8, 6.9, 8.0, 7.5, 7.2, 6.5, 7.0]
    },
    levels: {
        labels: ['Khối 10', 'Khối 11', 'Khối 12', 'Đại học'],
        values: [35, 42, 28, 55]
    },
    disciplines: {
        labels: ['Toán', 'Khoa học', 'Ngôn ngữ', 'Xã hội', 'Tin học', 'Kinh tế'],
        values: [45, 38, 30, 25, 20, 18]
    },
    stressLevels: {
        labels: ['Rất thấp', 'Thấp', 'Trung bình', 'Cao', 'Rất cao'],
        values: [8, 22, 35, 25, 10]
    },
    sleepQuality: {
        labels: ['Kém (1-2)', 'Trung bình (3)', 'Tốt (4)', 'Rất tốt (5)'],
        values: [12, 30, 35, 23]
    },
    insights: [
        '🧠 Sinh viên học vào buổi sáng có kết quả cao hơn 15%.',
        '📈 Điểm trung bình tăng 0.5 khi ngủ đủ 7-8 tiếng.',
        '⏰ Thời gian học hiệu quả nhất là 60-90 phút mỗi phiên.',
        '🧘 Học sinh có mức độ stress thấp đạt điểm cao hơn 20%.'
    ]
};

// ============================================================
// HÀM KHỞI TẠO DASHBOARD
// ============================================================
function initDashboard() {
    console.log('📊 Dashboard initializing...');
    
    try {
        // Kiểm tra dữ liệu từ data.js
        let aiData, stressData, stressLevelData;
        let useFallback = false;
        
        if (typeof analyzeAIAssistantData === 'function') {
            try {
                aiData = analyzeAIAssistantData();
                stressData = analyzeStressData();
                stressLevelData = analyzeStressLevelData();
                console.log('✅ Đã load dữ liệu từ data.js');
            } catch (e) {
                console.warn('⚠️ Lỗi load data.js, dùng fallback:', e);
                useFallback = true;
            }
        } else {
            console.warn('⚠️ data.js chưa load, dùng fallback');
            useFallback = true;
        }
        
        // Nếu dùng fallback, tạo dữ liệu giả
        if (useFallback) {
            aiData = {
                totalSessions: FALLBACK_DATA.totalSessions,
                avgSessionLength: FALLBACK_DATA.avgSessionLength,
                avgSatisfaction: FALLBACK_DATA.avgSatisfaction
            };
            stressData = {
                avgAnxiety: FALLBACK_DATA.avgStress
            };
            stressLevelData = {
                avgSleepQuality: 3.2
            };
        }
        
        // ============================================
        // 1. CẬP NHẬT THỐNG KÊ TỔNG QUAN
        // ============================================
        document.getElementById('totalSessions').textContent = aiData.totalSessions || 0;
        document.getElementById('avgSessionLength').textContent = (aiData.avgSessionLength || 0).toFixed(1);
        document.getElementById('avgSatisfaction').textContent = (aiData.avgSatisfaction || 0).toFixed(1);
        document.getElementById('avgStress').textContent = (stressData.avgAnxiety || 0).toFixed(1);
        
        // ============================================
        // 2. THỐNG KÊ CÁ NHÂN (TỪ LỊCH ĐÃ LƯU)
        // ============================================
        renderPersonalStats();
        
        // ============================================
        // 3. VẼ CÁC BIỂU ĐỒ
        // ============================================
        renderAllCharts();
        
        // ============================================
        // 4. GỢI Ý TỪ DỮ LIỆU
        // ============================================
        renderInsights();
        
        console.log('✅ Dashboard initialized successfully!');
    } catch (error) {
        console.error('❌ Lỗi initDashboard:', error);
        // Hiển thị thông báo lỗi
        const container = document.getElementById('dashboard');
        if (container) {
            container.innerHTML += `
                <div style="padding:20px;background:#fef2f2;border-radius:12px;border:1px solid #fca5a5;margin-top:20px;">
                    <p style="color:#dc2626;font-weight:600;">⚠️ Có lỗi xảy ra khi tải Dashboard.</p>
                    <p style="color:#64748b;font-size:14px;">Vui lòng kiểm tra console (F12) để biết chi tiết.</p>
                </div>
            `;
        }
    }
}

// ============================================================
// HIỂN THỊ THỐNG KÊ CÁ NHÂN
// ============================================================
function renderPersonalStats() {
    const container = document.getElementById('personalStats');
    if (!container) {
        console.warn('⚠️ Không tìm thấy #personalStats');
        return;
    }
    
    // Lấy dữ liệu từ lịch đã lưu
    let savedSchedules = [];
    try {
        savedSchedules = JSON.parse(localStorage.getItem('studyai-schedules')) || [];
    } catch (e) {
        console.warn('⚠️ Lỗi đọc localStorage:', e);
    }
    
    if (savedSchedules.length === 0) {
        container.innerHTML = `
            <div class="personal-stats-empty" style="padding:24px;text-align:center;background:#f8fafc;border-radius:12px;">
                <p style="font-size:16px;color:#1e293b;">📭 Bạn chưa có dữ liệu học tập nào được lưu.</p>
                <p style="font-size:13px;color:#94a3b8;margin-top:4px;">Hãy tạo và lưu lịch học để xem thống kê cá nhân!</p>
                <button onclick="document.querySelector('[data-tab=\\'scheduler\\']').click()" 
                    style="margin-top:12px;padding:8px 20px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:600;">
                    📅 Đến Lập lịch học
                </button>
            </div>
        `;
        return;
    }
    
    // Tính toán thống kê
    const totalSchedules = savedSchedules.length;
    let totalHours = 0;
    let totalSubjects = 0;
    const subjectCount = {};
    
    savedSchedules.forEach(s => {
        if (s.totalHours) totalHours += s.totalHours;
        if (s.subjects && Array.isArray(s.subjects)) {
            totalSubjects += s.subjects.length;
            s.subjects.forEach(sub => {
                if (sub) subjectCount[sub] = (subjectCount[sub] || 0) + 1;
            });
        }
    });
    
    const avgHours = totalSchedules > 0 ? totalHours / totalSchedules : 0;
    const avgSubjects = totalSchedules > 0 ? totalSubjects / totalSchedules : 0;
    
    // Top môn học
    const topSubjects = Object.entries(subjectCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
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
        ${topSubjects.length > 0 ? `
            <div style="padding:14px;background:#f8fafc;border-radius:10px;">
                <div style="font-size:14px;font-weight:600;margin-bottom:8px;">📚 Môn học được học nhiều nhất:</div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    ${topSubjects.map(([subject, count]) => `
                        <span style="padding:4px 12px;background:#eff6ff;border-radius:20px;font-size:13px;color:#3b82f6;">
                            ${subject} (${count} lần)
                        </span>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    // Dark theme support
    if (document.body.classList.contains('dark-theme')) {
        document.querySelectorAll('#personalStats > div > div').forEach(el => {
            if (el.style.background === '#f8fafc' || el.style.background === '') {
                el.style.background = '#1e293b';
            }
        });
        document.querySelectorAll('#personalStats .personal-stats-empty').forEach(el => {
            el.style.background = '#1e293b';
        });
    }
}

// ============================================================
// VẼ BIỂU ĐỒ
// ============================================================
function renderAllCharts() {
    // Dùng dữ liệu từ FALLBACK_DATA hoặc từ data.js
    let data = FALLBACK_DATA;
    
    // Thử lấy dữ liệu từ data.js
    if (typeof analyzeAIAssistantData === 'function') {
        try {
            const aiData = analyzeAIAssistantData();
            const stressData = analyzeStressData();
            const stressLevelData = analyzeStressLevelData();
            
            // Chuyển đổi dữ liệu từ data.js sang định dạng chart
            data = {
                outcomes: {
                    labels: Object.keys(aiData.byDiscipline || {}),
                    values: Object.values(aiData.byDiscipline || {})
                },
                levels: {
                    labels: Object.keys(aiData.byLevel || {}),
                    values: Object.values(aiData.byLevel || {})
                },
                disciplines: {
                    labels: Object.keys(aiData.byDiscipline || {}),
                    values: Object.values(aiData.byDiscipline || {})
                },
                stressLevels: {
                    labels: ['Eustress', 'Distress', 'No Stress'],
                    values: [
                        stressData.stressLevels?.Eustress || 0,
                        stressData.stressLevels?.Distress || 0,
                        stressData.stressLevels?.['No Stress'] || 0
                    ]
                },
                sleepQuality: {
                    labels: ['Kém', 'TB', 'Tốt', 'Rất tốt'],
                    values: [10, 30, 40, 20]
                },
                insights: FALLBACK_DATA.insights
            };
            
            // Nếu không có dữ liệu, dùng fallback
            if (data.outcomes.values.every(v => v === 0)) {
                data = FALLBACK_DATA;
            }
        } catch (e) {
            data = FALLBACK_DATA;
        }
    }
    
    // Render từng biểu đồ
    renderChart('outcomeChart', data.outcomes, '#3b82f6', 'Điểm trung bình');
    renderChart('levelChart', data.levels, '#8b5cf6', 'Số lượng');
    renderChart('disciplineChart', data.disciplines, '#10b981', 'Số lượng');
    renderChart('stressLevelChart', data.stressLevels, '#ef4444', 'Số lượng');
    renderChart('sleepChart', data.sleepQuality, '#f59e0b', 'Số lượng');
}

function renderChart(elementId, data, color, unit = '') {
    const container = document.getElementById(elementId);
    if (!container) {
        console.warn(`⚠️ Không tìm thấy #${elementId}`);
        return;
    }
    
    if (!data || !data.labels || !data.values || data.labels.length === 0) {
        container.innerHTML = `<p style="color:#94a3b8;font-size:13px;padding:12px;">Không có dữ liệu để hiển thị</p>`;
        return;
    }
    
    const max = Math.max(...data.values, 1);
    let html = '';
    
    data.labels.forEach((label, index) => {
        const value = data.values[index] || 0;
        const percent = (value / max) * 100;
        const displayValue = unit ? `${value}${unit}` : value;
        
        html += `
            <div class="chart-bar">
                <span class="label" style="min-width:80px;font-size:13px;color:#475569;">${label}</span>
                <div class="bar-track" style="flex:1;height:24px;background:#f1f5f9;border-radius:12px;overflow:hidden;position:relative;">
                    <div class="bar-fill" style="width:${Math.max(percent, 3)}%;height:100%;background:${color};border-radius:12px;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;font-size:12px;color:#fff;font-weight:600;min-width:30px;transition:width 0.8s ease;">
                        ${displayValue}
                    </div>
                </div>
                <span class="bar-value" style="min-width:35px;font-size:13px;font-weight:600;color:#1e293b;">${displayValue}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Dark theme support
    if (document.body.classList.contains('dark-theme')) {
        container.querySelectorAll('.bar-track').forEach(el => {
            el.style.background = '#334155';
        });
        container.querySelectorAll('.label').forEach(el => {
            el.style.color = '#94a3b8';
        });
        container.querySelectorAll('.bar-value').forEach(el => {
            el.style.color = '#e2e8f0';
        });
    }
}

// ============================================================
// HIỂN THỊ GỢI Ý
// ============================================================
function renderInsights() {
    const container = document.getElementById('dataInsights');
    if (!container) return;
    
    // Lấy insights từ dữ liệu
    let insights = FALLBACK_DATA.insights;
    
    // Thử lấy từ data.js
    if (typeof getAIAdviceFromData === 'function') {
        try {
            const advice = getAIAdviceFromData('Undergraduate', 'Computer Science');
            if (advice && advice.length > 0) {
                insights = advice;
            }
        } catch (e) {
            // Dùng fallback
        }
    }
    
    container.innerHTML = insights.map(text => 
        `<div class="insight-item" style="padding:10px 16px;background:#f8fafc;border-radius:10px;border-left:4px solid #3b82f6;font-size:14px;color:#1e293b;margin-bottom:8px;">
            ${text}
        </div>`
    ).join('');
    
    // Dark theme support
    if (document.body.classList.contains('dark-theme')) {
        container.querySelectorAll('.insight-item').forEach(el => {
            el.style.background = '#2d3748';
            el.style.color = '#e2e8f0';
        });
    }
}

// ============================================================
// THEO DÕI THAY ĐỔI THEME ĐỂ CẬP NHẬT BIỂU ĐỒ
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo Dashboard khi DOM ready
    setTimeout(initDashboard, 300);
    
    // Lắng nghe thay đổi theme
    const observer = new MutationObserver(() => {
        // Cập nhật lại biểu đồ khi theme thay đổi
        renderAllCharts();
        renderPersonalStats();
        renderInsights();
    });
    
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    // Lắng nghe khi tab Dashboard được chọn
    const dashboardLink = document.querySelector('[data-tab="dashboard"]');
    if (dashboardLink) {
        dashboardLink.addEventListener('click', function() {
            setTimeout(() => {
                renderAllCharts();
                renderPersonalStats();
                renderInsights();
            }, 200);
        });
    }
});

// ============================================================
// EXPORT (nếu dùng module)
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initDashboard,
        renderPersonalStats,
        renderAllCharts,
        renderChart,
        renderInsights
    };
}
