// ============================================================
// DASHBOARD.JS - HIỂN THỊ DỮ LIỆU TỪ 3 FILE CSV
// ============================================================

function initDashboard() {
    // Phân tích dữ liệu
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
    // 2. VẼ BIỂU ĐỒ KẾT QUẢ HỌC TẬP
    // ============================================
    const outcomeData = aiData.byOutcome;
    const outcomeColors = {
        'Assignment Completed': 'green',
        'Idea Drafted': 'purple',
        'Confused': 'yellow',
        'Gave Up': 'red'
    };
    const maxOutcome = Math.max(...Object.values(outcomeData), 1);
    
    renderChart('outcomeChart', outcomeData, outcomeColors, maxOutcome);
    
    // ============================================
    // 3. VẼ BIỂU ĐỒ THEO KHỐI LỚP
    // ============================================
    const levelData = aiData.byLevel;
    const levelColors = {
        'Undergraduate': 'blue',
        'Graduate': 'purple',
        'High School': 'orange'
    };
    const maxLevel = Math.max(...Object.values(levelData), 1);
    
    renderChart('levelChart', levelData, levelColors, maxLevel);
    
    // ============================================
    // 4. VẼ BIỂU ĐỒ THEO MÔN HỌC
    // ============================================
    // Lấy top 5 môn học phổ biến nhất
    const sortedDisciplines = Object.entries(aiData.byDiscipline)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    const disciplineData = Object.fromEntries(sortedDisciplines);
    const disciplineColors = {
        'Computer Science': 'blue',
        'Psychology': 'pink',
        'Biology': 'green',
        'Business': 'orange',
        'Math': 'red',
        'History': 'purple',
        'Engineering': 'teal'
    };
    const maxDiscipline = Math.max(...Object.values(disciplineData), 1);
    
    renderChart('disciplineChart', disciplineData, disciplineColors, maxDiscipline);
    
    // ============================================
    // 5. VẼ BIỂU ĐỒ MỨC ĐỘ STRESS
    // ============================================
    const stressLevelMap = {
        'Eustress': 'green',
        'No Stress': 'blue',
        'Distress': 'red'
    };
    const maxStress = Math.max(...Object.values(stressData.stressLevels), 1);
    
    renderChart('stressLevelChart', stressData.stressLevels, stressLevelMap, maxStress);
    
    // ============================================
    // 6. VẼ BIỂU ĐỒ CHẤT LƯỢNG GIẤC NGỦ
    // ============================================
    // Sử dụng dữ liệu từ StressLevelDataset
    const sleepData = {
        'Tốt (>4)': stressLevelData.byStressLevel[0] || 0,
        'Trung bình (2-3)': stressLevelData.byStressLevel[1] || 0,
        'Kém (<2)': stressLevelData.byStressLevel[2] || 0
    };
    const sleepColors = {
        'Tốt (>4)': 'green',
        'Trung bình (2-3)': 'yellow',
        'Kém (<2)': 'red'
    };
    const maxSleep = Math.max(...Object.values(sleepData), 1);
    
    renderChart('sleepChart', sleepData, sleepColors, maxSleep);
    
    // ============================================
    // 7. GỢI Ý TỪ DỮ LIỆU
    // ============================================
    renderInsights(aiData, stressData, stressLevelData);
}

// ============================================
// HÀM VẼ BIỂU ĐỒ
// ============================================
function renderChart(containerId, data, colorMap, maxValue) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    const sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a]);
    
    sortedKeys.forEach(key => {
        const value = data[key];
        const percent = maxValue > 0 ? (value / maxValue) * 100 : 0;
        const color = colorMap[key] || 'blue';
        
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.innerHTML = `
            <span class="label">${key}</span>
            <div class="bar-track">
                <div class="bar-fill ${color}" style="width: ${Math.max(5, percent)}%;">
                    ${value > 0 ? value : ''}
                </div>
            </div>
            <span class="bar-value">${value}</span>
        `;
        container.appendChild(bar);
    });
}

// ============================================
// HÀM HIỂN THỊ GỢI Ý
// ============================================
function renderInsights(aiData, stressData, stressLevelData) {
    const container = document.getElementById('dataInsights');
    if (!container) return;
    
    const insights = [];
    
    // Gợi ý từ AI Assistant Data
    const total = aiData.totalSessions;
    if (total > 0) {
        const completed = aiData.byOutcome['Assignment Completed'] || 0;
        const completionRate = (completed / total * 100);
        
        if (completionRate > 50) {
            insights.push(`✅ Tỉ lệ hoàn thành bài tập đạt ${completionRate.toFixed(0)}% - Rất tốt!`);
        } else {
            insights.push(`📈 Tỉ lệ hoàn thành bài tập là ${completionRate.toFixed(0)}%. Hãy cải thiện bằng cách lập kế hoạch chi tiết hơn.`);
        }
        
        const usedAgain = aiData.usedAgain.true || 0;
        const reuseRate = (usedAgain / total * 100);
        insights.push(`🔄 ${reuseRate.toFixed(0)}% người dùng quay lại sử dụng trợ lý AI - Đây là tín hiệu tích cực!`);
    }
    
    // Gợi ý từ Stress Data
    if (stressData.avgAnxiety > 3) {
        insights.push(`🧘 Mức độ lo âu trung bình: ${stressData.avgAnxiety.toFixed(1)}/5. Hãy thực hành thiền 5-10 phút mỗi ngày.`);
    } else {
        insights.push(`😊 Mức độ lo âu thấp (${stressData.avgAnxiety.toFixed(1)}/5). Duy trì lối sống lành mạnh này!`);
    }
    
    if (stressData.avgSleepQuality < 3) {
        insights.push(`😴 Chất lượng giấc ngủ chỉ đạt ${stressData.avgSleepQuality.toFixed(1)}/5. Hãy tắt điện thoại 30 phút trước khi ngủ.`);
    }
    
    // Gợi ý từ Stress Level Data
    const highStressCount = stressLevelData.byStressLevel[2] || 0;
    const totalStress = stressLevelData.total || 1;
    if (highStressCount / totalStress > 0.3) {
        insights.push(`⚠️ ${(highStressCount/totalStress*100).toFixed(0)}% sinh viên có mức độ căng thẳng cao. Đừng ngần ngại tìm kiếm sự hỗ trợ!`);
    }
    
    // Gợi ý chung
    if (aiData.avgSatisfaction < 3) {
        insights.push(`⭐ Điểm hài lòng trung bình: ${aiData.avgSatisfaction.toFixed(1)}/5. Hãy góp ý để chúng tôi cải thiện dịch vụ!`);
    } else {
        insights.push(`⭐ Người dùng đánh giá cao trợ lý AI với ${aiData.avgSatisfaction.toFixed(1)}/5 điểm!`);
    }
    
    // Hiển thị
    if (insights.length === 0) {
        container.innerHTML = `<p class="placeholder">Chưa có đủ dữ liệu để đưa ra gợi ý.</p>`;
        return;
    }
    
    container.innerHTML = insights.map(text => `
        <div class="insight-item">${text}</div>
    `).join('');
}

// ============================================
// KHỞI TẠO DASHBOARD
// ============================================
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        if (typeof analyzeAIAssistantData !== 'undefined') {
            initDashboard();
        }
    }, 100);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (typeof analyzeAIAssistantData !== 'undefined') {
                initDashboard();
            }
        }, 100);
    });
}
