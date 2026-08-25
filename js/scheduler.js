// ============================================================
// SCHEDULER MODULE
// ============================================================

function initScheduler() {
    const generateBtn = document.getElementById('generateScheduleBtn');
    const numSubjects = document.getElementById('numSubjects');
    const hoursPerDay = document.getElementById('hoursPerDay');
    const stressLevel = document.getElementById('stressLevel');
    const stressDisplay = document.getElementById('stressDisplay');
    const scheduleList = document.getElementById('scheduleList');

    // Update stress display
    stressLevel.addEventListener('input', () => {
        stressDisplay.textContent = stressLevel.value;
    });

    function generateSchedule() {
        const n = parseInt(numSubjects.value) || 4;
        const hours = parseFloat(hoursPerDay.value) || 4;
        const stress = parseInt(stressLevel.value) || 3;

        // Danh sách môn học mẫu
        const subjects = [
            'Toán', 'Văn', 'Anh', 'Lý', 'Hóa', 'Sinh',
            'Sử', 'Địa', 'Tin học', 'Công nghệ', 'Giáo dục công dân'
        ];
        const selected = subjects.slice(0, Math.min(n, subjects.length));

        // Điều chỉnh thời gian dựa trên stress
        const adjust = 1 - (stress - 3) * 0.05;
        const studyHours = Math.max(1, Math.round(hours * adjust * 10) / 10);

        // Tạo lịch
        let html = `<ul>`;
        const startHour = 8;
        let currentHour = startHour;

        // Phân bố thời gian
        const totalSlots = selected.length;
        const slotDuration = Math.round((studyHours / totalSlots) * 10) / 10;

        selected.forEach((subject, index) => {
            const endHour = currentHour + slotDuration;
            const timeStr = `${String(Math.floor(currentHour)).padStart(2, '0')}:${String((currentHour % 1) * 60).padStart(2, '0')} - ${String(Math.floor(endHour)).padStart(2, '0')}:${String((endHour % 1) * 60).padStart(2, '0')}`;

            // Thêm màu sắc dựa trên mức độ ưu tiên
            const priority = index < 2 ? 'Ưu tiên' : 'Bình thường';
            html += `<li><span class="subject">📘 ${subject}</span> <span class="time">${timeStr}</span> <span style="font-size:13px;color:#64748b;">${priority}</span></li>`;
            currentHour = endHour + 0.25; // nghỉ 15 phút
        });

        // Gợi ý thêm
        html += `</ul>`;
        html += `<div style="margin-top:16px;padding:14px;background:#f8fafc;border-radius:10px;font-size:14px;color:#475569;">
            <strong>💡 Gợi ý:</strong> 
            ${stress >= 4 ? 'Bạn đang căng thẳng cao, hãy nghỉ ngơi nhiều hơn giữa các buổi học.' :
              stress <= 2 ? 'Bạn đang có tinh thần tốt! Hãy tận dụng để học các môn khó.' :
              'Hãy duy trì nhịp độ học tập ổn định và đừng quên nghỉ ngơi.'}
            <br />
            ⏰ Tổng thời gian học: ${studyHours} giờ | Nghỉ giữa buổi: 15 phút
        </div>`;

        scheduleList.innerHTML = html;
    }

    generateBtn.addEventListener('click', generateSchedule);

    // Generate initial schedule
    setTimeout(generateSchedule, 100);
}

// Auto init
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initScheduler();
} else {
    document.addEventListener('DOMContentLoaded', initScheduler);
}
