// ============================================================
// MENTAL HEALTH MODULE
// ============================================================

function initMentalHealth() {
    const analyzeBtn = document.getElementById('analyzeMentalBtn');
    const anxiety = document.getElementById('anxiety');
    const sleepQuality = document.getElementById('sleepQuality');
    const studyPressure = document.getElementById('studyPressure');
    const anxietyDisplay = document.getElementById('anxietyDisplay');
    const sleepDisplay = document.getElementById('sleepDisplay');
    const pressureDisplay = document.getElementById('pressureDisplay');
    const adviceContainer = document.getElementById('mentalAdvice');

    // Update displays
    anxiety.addEventListener('input', () => {
        anxietyDisplay.textContent = anxiety.value;
    });
    sleepQuality.addEventListener('input', () => {
        sleepDisplay.textContent = sleepQuality.value;
    });
    studyPressure.addEventListener('input', () => {
        pressureDisplay.textContent = studyPressure.value;
    });

    function getAdvice(a, s, p) {
        const score = (a + (6 - s) + p) / 3; // 1-5, higher = worse
        let status, advice, color;

        if (score <= 2) {
            status = 'Tuyệt vời 🌟';
            advice = 'Bạn đang có sức khỏe tinh thần rất tốt! Hãy duy trì lối sống lành mạnh này. Đừng quên chia sẻ và giúp đỡ bạn bè nhé!';
            color = '#10b981';
        } else if (score <= 3) {
            status = 'Tốt 😊';
            advice = 'Tinh thần của bạn ổn định. Hãy tiếp tục duy trì thói quen tốt: ngủ đủ giấc, tập thể dục nhẹ, và kết nối với bạn bè.';
            color = '#3b82f6';
        } else if (score <= 4) {
            status = 'Cần quan tâm 🤔';
            advice = 'Bạn có dấu hiệu căng thẳng nhẹ. Hãy thử: hít thở sâu 5 phút mỗi sáng, đi bộ 10 phút giữa giờ, viết nhật ký cảm xúc.';
            color = '#f59e0b';
        } else {
            status = 'Cần hỗ trợ 💙';
            advice = 'Bạn đang có dấu hiệu căng thẳng đáng kể. Hãy dành thời gian nghỉ ngơi, nói chuyện với người thân hoặc chuyên gia tâm lý. Đừng ngại tìm kiếm sự giúp đỡ!';
            color = '#ef4444';
        }

        return { status, advice, color, score };
    }

    function analyze() {
        const a = parseInt(anxiety.value);
        const s = parseInt(sleepQuality.value);
        const p = parseInt(studyPressure.value);

        const result = getAdvice(a, s, p);

        const details = `
            <div class="advice-card" style="border-left-color: ${result.color};">
                <div class="title">📊 Trạng thái: ${result.status}</div>
                <div style="font-size:13px;color:#94a3b8;margin:4px 0;">Điểm tổng hợp: ${result.score.toFixed(1)}/5</div>
                <div class="desc">${result.advice}</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:12px;">
                <div style="padding:12px;background:#f8fafc;border-radius:10px;text-align:center;">
                    <div style="font-size:13px;color:#64748b;">Lo âu</div>
                    <div style="font-size:20px;font-weight:700;color:#3b82f6;">${a}/5</div>
                </div>
                <div style="padding:12px;background:#f8fafc;border-radius:10px;text-align:center;">
                    <div style="font-size:13px;color:#64748b;">Giấc ngủ</div>
                    <div style="font-size:20px;font-weight:700;color:#8b5cf6;">${s}/5</div>
                </div>
                <div style="padding:12px;background:#f8fafc;border-radius:10px;text-align:center;">
                    <div style="font-size:13px;color:#64748b;">Áp lực</div>
                    <div style="font-size:20px;font-weight:700;color:#f59e0b;">${p}/5</div>
                </div>
            </div>
            <div style="margin-top:16px;padding:14px;background:#f1f5f9;border-radius:10px;font-size:14px;color:#475569;">
                <strong>🧘 Hành động đề xuất:</strong><br />
                ${result.score > 3.5 ? '🟢 Nghỉ ngơi và thư giãn nhiều hơn' : '🟢 Duy trì thói quen tốt hiện tại'}
                <br />
                ${s < 3 ? '🟡 Cải thiện giấc ngủ: tắt điện thoại 30 phút trước khi ngủ' : '🟡 Tiếp tục duy trì giấc ngủ tốt'}
                <br />
                ${a > 3 ? '🟡 Thực hành thiền hoặc hít thở sâu 5-10 phút/ngày' : '🟡 Tiếp tục duy trì mức độ lo âu thấp'}
            </div>
        `;

        adviceContainer.innerHTML = details;
    }

    analyzeBtn.addEventListener('click', analyze);

    // Auto analyze on load
    setTimeout(analyze, 200);
}

// Auto init
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initMentalHealth();
} else {
    document.addEventListener('DOMContentLoaded', initMentalHealth);
}
