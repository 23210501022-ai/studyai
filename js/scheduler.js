// ============================================================
// SCHEDULER MODULE - LẬP LỊCH + LƯU TRỮ
// ============================================================

function initScheduler() {
    const generateBtn = document.getElementById('generateScheduleBtn');
    const numSubjects = document.getElementById('numSubjects');
    const hoursPerDay = document.getElementById('hoursPerDay');
    const stressLevel = document.getElementById('stressLevel');
    const stressDisplay = document.getElementById('stressDisplay');
    const scheduleList = document.getElementById('scheduleList');

    // ============================================
    // LƯU TRỮ LỊCH HỌC VỚI LOCALSTORAGE
    // ============================================
    let savedSchedules = JSON.parse(localStorage.getItem('studyai-schedules')) || [];
    
    function saveSchedule(scheduleData) {
        const id = Date.now();
        const newSchedule = {
            id: id,
            date: new Date().toLocaleString('vi-VN'),
            data: scheduleData,
            subjects: scheduleData.map(item => item.subject),
            totalHours: scheduleData.reduce((sum, item) => sum + parseFloat(item.duration), 0)
        };
        savedSchedules.unshift(newSchedule);
        localStorage.setItem('studyai-schedules', JSON.stringify(savedSchedules));
        renderSavedSchedules();
        return newSchedule;
    }
    
    function deleteSchedule(id) {
        savedSchedules = savedSchedules.filter(s => s.id !== id);
        localStorage.setItem('studyai-schedules', JSON.stringify(savedSchedules));
        renderSavedSchedules();
    }
    
    function renderSavedSchedules() {
        const container = document.getElementById('savedSchedulesList');
        if (!container) return;
        
        if (savedSchedules.length === 0) {
            container.innerHTML = `<p class="placeholder">Chưa có lịch học nào được lưu.</p>`;
            return;
        }
        
        container.innerHTML = savedSchedules.map(s => `
            <div class="saved-schedule-item">
                <div class="schedule-info">
                    <div class="schedule-date">📅 ${s.date}</div>
                    <div class="schedule-subjects">📚 ${s.subjects.join(', ')}</div>
                    <div class="schedule-hours">⏰ ${s.totalHours.toFixed(1)} giờ</div>
                </div>
                <div class="schedule-actions">
                    <button class="btn-view-schedule" data-id="${s.id}">👁️ Xem</button>
                    <button class="btn-delete-schedule" data-id="${s.id}">🗑️ Xóa</button>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.btn-view-schedule').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                viewSchedule(id);
            });
        });
        
        document.querySelectorAll('.btn-delete-schedule').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                if (confirm('Bạn có chắc muốn xóa lịch học này?')) {
                    deleteSchedule(id);
                }
            });
        });
    }
    
    function viewSchedule(id) {
        const schedule = savedSchedules.find(s => s.id === id);
        if (!schedule) return;
        
        const html = `
            <div style="background:#f8fafc;padding:16px;border-radius:12px;margin-bottom:12px;border:2px solid #3b82f6;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:4px;">
                    <strong>📅 Lịch đã lưu: ${schedule.date}</strong>
                    <span style="font-size:13px;color:#64748b;">⏰ ${schedule.totalHours.toFixed(1)} giờ</span>
                </div>
                <ul style="list-style:none;padding:0;">
                    ${schedule.data.map(item => `
                        <li style="padding:6px 0;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;">
                            <span>📘 ${item.subject}</span>
                            <span style="color:#3b82f6;font-weight:600;">${item.time}</span>
                        </li>
                    `).join('')}
                </ul>
                <div style="margin-top:8px;font-size:13px;color:#64748b;">
                    💡 ${schedule.data.length} môn học
                </div>
            </div>
        `;
        
        scheduleList.innerHTML = html + scheduleList.innerHTML;
    }

    // ============================================
    // TẠO LỊCH HỌC
    // ============================================
    stressLevel.addEventListener('input', () => {
        stressDisplay.textContent = stressLevel.value;
    });

    function generateSchedule() {
        const n = parseInt(numSubjects.value) || 4;
        const hours = parseFloat(hoursPerDay.value) || 4;
        const stress = parseInt(stressLevel.value) || 3;

        const subjects = [
            'Toán', 'Văn', 'Anh', 'Lý', 'Hóa', 'Sinh',
            'Sử', 'Địa', 'Tin học', 'Công nghệ', 'Giáo dục công dân'
        ];
        const selected = subjects.slice(0, Math.min(n, subjects.length));

        const adjust = 1 - (stress - 3) * 0.05;
        const studyHours = Math.max(1, Math.round(hours * adjust * 10) / 10);

        let scheduleData = [];
        let html = `<ul>`;
        const startHour = 8;
        let currentHour = startHour;
        const totalSlots = selected.length;
        const slotDuration = Math.round((studyHours / totalSlots) * 10) / 10;

        selected.forEach((subject, index) => {
            const endHour = currentHour + slotDuration;
            const timeStr = `${String(Math.floor(currentHour)).padStart(2, '0')}:${String((currentHour % 1) * 60).padStart(2, '0')} - ${String(Math.floor(endHour)).padStart(2, '0')}:${String((endHour % 1) * 60).padStart(2, '0')}`;
            const priority = index < 2 ? 'Ưu tiên' : 'Bình thường';
            
            scheduleData.push({ 
                subject, 
                time: timeStr, 
                priority,
                duration: slotDuration.toFixed(1)
            });
            
            html += `<li><span class="subject">📘 ${subject}</span> <span class="time">${timeStr}</span> <span style="font-size:13px;color:#64748b;">${priority}</span></li>`;
            currentHour = endHour + 0.25;
        });

        html += `</ul>`;
        html += `<div style="margin-top:16px;padding:14px;background:#f8fafc;border-radius:10px;font-size:14px;color:#475569;">
            <strong>💡 Gợi ý:</strong> 
            ${stress >= 4 ? 'Bạn đang căng thẳng cao, hãy nghỉ ngơi nhiều hơn giữa các buổi học.' :
              stress <= 2 ? 'Bạn đang có tinh thần tốt! Hãy tận dụng để học các môn khó.' :
              'Hãy duy trì nhịp độ học tập ổn định và đừng quên nghỉ ngơi.'}
            <br />
            ⏰ Tổng thời gian học: ${studyHours} giờ | Nghỉ giữa buổi: 15 phút
        </div>`;

        html += `
            <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap;">
                <button id="saveScheduleBtn" class="btn-primary" style="background:#10b981;">
                    💾 Lưu lịch học này
                </button>
                <button id="exportScheduleBtn" class="btn-primary" style="background:#8b5cf6;">
                    📤 Xuất ra văn bản
                </button>
            </div>
        `;

        scheduleList.innerHTML = html;

        document.getElementById('saveScheduleBtn')?.addEventListener('click', () => {
            const saved = saveSchedule(scheduleData);
            alert(`✅ Đã lưu lịch học thành công!\n📅 Thời gian: ${saved.date}\n📚 Các môn: ${saved.subjects.join(', ')}`);
        });

        document.getElementById('exportScheduleBtn')?.addEventListener('click', () => {
            let text = '📚 LỊCH HỌC TỪ STUDYAI\n';
            text += `📅 Ngày tạo: ${new Date().toLocaleString('vi-VN')}\n`;
            text += `⏰ Tổng thời gian: ${studyHours} giờ\n`;
            text += `${'='.repeat(40)}\n\n`;
            scheduleData.forEach((item, index) => {
                text += `${index + 1}. ${item.subject} - ${item.time} (${item.priority})\n`;
            });
            text += `\n💡 Gợi ý: ${stress >= 4 ? 'Nghỉ ngơi nhiều hơn' : stress <= 2 ? 'Học môn khó' : 'Duy trì nhịp độ ổn định'}`;
            
            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `lich-hoc-${new Date().toISOString().slice(0,10)}.txt`;
            link.click();
            URL.revokeObjectURL(link.href);
        });
    }

    generateBtn.addEventListener('click', generateSchedule);
    setTimeout(generateSchedule, 100);
    renderSavedSchedules();
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initScheduler();
} else {
    document.addEventListener('DOMContentLoaded', initScheduler);
}
