// ============================================================
// SCHEDULER MODULE - NÂNG CẤP (PDF, TÌM KIẾM)
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
        showToast('✅ Đã lưu lịch học thành công!', 'success');
        return newSchedule;
    }
    
    function deleteSchedule(id) {
        savedSchedules = savedSchedules.filter(s => s.id !== id);
        localStorage.setItem('studyai-schedules', JSON.stringify(savedSchedules));
        renderSavedSchedules();
        showToast('🗑️ Đã xóa lịch học', 'info');
    }
    
    function renderSavedSchedules(filter = '') {
        const container = document.getElementById('savedSchedulesList');
        if (!container) return;
        
        const filtered = savedSchedules.filter(s => 
            s.subjects.join(' ').toLowerCase().includes(filter.toLowerCase()) ||
            s.date.includes(filter)
        );
        
        if (filtered.length === 0) {
            container.innerHTML = `<p class="placeholder">${savedSchedules.length === 0 ? 'Chưa có lịch học nào được lưu.' : 'Không tìm thấy lịch học phù hợp.'}</p>`;
            return;
        }
        
        container.innerHTML = filtered.map(s => `
            <div class="saved-schedule-item">
                <div class="schedule-info">
                    <div class="schedule-date">📅 ${s.date}</div>
                    <div class="schedule-subjects">📚 ${s.subjects.join(', ')}</div>
                    <div class="schedule-hours">⏰ ${s.totalHours.toFixed(1)} giờ</div>
                </div>
                <div class="schedule-actions">
                    <button class="btn-view-schedule" data-id="${s.id}">👁️ Xem</button>
                    <button class="btn-export-pdf" data-id="${s.id}">📄 PDF</button>
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
        
        document.querySelectorAll('.btn-export-pdf').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                exportSchedulePDF(id);
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
        showToast('👁️ Đã hiển thị lịch đã lưu', 'info');
    }
    
    // ============================================
    // XUẤT PDF
    // ============================================
    async function exportSchedulePDF(id) {
        const schedule = savedSchedules.find(s => s.id === id);
        if (!schedule) {
            showToast('❌ Không tìm thấy lịch học', 'error');
            return;
        }
        
        showLoading('Đang tạo PDF...');
        
        try {
            // Tạo nội dung HTML cho PDF
            const content = document.createElement('div');
            content.style.cssText = 'padding: 40px; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;';
            content.innerHTML = `
                <h1 style="color: #3b82f6; text-align: center;">📚 STUDYAI - LỊCH HỌC</h1>
                <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
                <p><strong>📅 Ngày tạo:</strong> ${schedule.date}</p>
                <p><strong>⏰ Tổng thời gian:</strong> ${schedule.totalHours.toFixed(1)} giờ</p>
                <p><strong>📚 Số môn học:</strong> ${schedule.subjects.length}</p>
                <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
                <h2>Chi tiết lịch học:</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
                    <tr style="background: #f1f5f9;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #e2e8f0;">STT</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #e2e8f0;">Môn học</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #e2e8f0;">Thời gian</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #e2e8f0;">Ưu tiên</th>
                    </tr>
                    ${schedule.data.map((item, index) => `
                        <tr>
                            <td style="padding: 8px 10px; border: 1px solid #e2e8f0;">${index + 1}</td>
                            <td style="padding: 8px 10px; border: 1px solid #e2e8f0;">${item.subject}</td>
                            <td style="padding: 8px 10px; border: 1px solid #e2e8f0;">${item.time}</td>
                            <td style="padding: 8px 10px; border: 1px solid #e2e8f0;">${item.priority}</td>
                        </tr>
                    `).join('')}
                </table>
                <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
                <p style="text-align: center; color: #94a3b8; font-size: 12px;">© StudyAI - Trợ lý số cho sinh viên</p>
            `;
            
            document.body.appendChild(content);
            
            // Sử dụng html2canvas để chụp ảnh và tạo PDF
            const canvas = await html2canvas(content, {
                scale: 2,
                backgroundColor: '#ffffff',
                useCORS: true,
                logging: false
            });
            
            document.body.removeChild(content);
            
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`lich-hoc-${new Date().toISOString().slice(0,10)}.pdf`);
            
            hideLoading();
            showToast('✅ Đã xuất PDF thành công!', 'success');
        } catch (error) {
            console.error('Lỗi xuất PDF:', error);
            hideLoading();
            showToast('❌ Lỗi xuất PDF. Vui lòng thử lại.', 'error');
        }
    }

    // ============================================
    // TẠO LỊCH HỌC
    // ============================================
    // ... (giữ nguyên phần generateSchedule từ trước)
    
    // Thêm vào generateSchedule:
    // Khi tạo lịch, thêm nút xuất PDF cho lịch hiện tại
    function generateSchedule() {
        // ... (code tạo lịch như cũ)
        
        // Thêm nút xuất PDF cho lịch hiện tại
        html += `
            <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap;">
                <button id="saveScheduleBtn" class="btn-primary" style="background:#10b981;">
                    💾 Lưu lịch học này
                </button>
                <button id="exportPDFBtn" class="btn-primary" style="background:#ef4444;">
                    📄 Xuất PDF
                </button>
                <button id="exportScheduleBtn" class="btn-primary" style="background:#8b5cf6;">
                    📤 Xuất văn bản
                </button>
            </div>
        `;
        
        scheduleList.innerHTML = html;
        
        document.getElementById('exportPDFBtn')?.addEventListener('click', () => {
            // Tạo lịch tạm để xuất PDF
            const tempSchedule = {
                id: Date.now(),
                date: new Date().toLocaleString('vi-VN'),
                data: scheduleData,
                subjects: scheduleData.map(item => item.subject),
                totalHours: studyHours
            };
            exportSchedulePDF(tempSchedule.id);
        });
        
        // ... (các sự kiện khác)
    }

    // ============================================
    // TÌM KIẾM LỊCH ĐÃ LƯU
    // ============================================
    // Thêm input tìm kiếm vào phần lịch đã lưu
    const savedSection = document.getElementById('savedSchedulesSection');
    if (savedSection) {
        const searchHTML = `
            <div style="margin: 12px 0;">
                <input type="text" id="searchScheduleInput" placeholder="🔍 Tìm kiếm lịch đã lưu..." 
                    style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:10px;font-size:14px;">
            </div>
        `;
        const searchContainer = document.createElement('div');
        searchContainer.innerHTML = searchHTML;
        savedSection.insertBefore(searchContainer, savedSection.querySelector('#savedSchedulesList'));
        
        document.getElementById('searchScheduleInput')?.addEventListener('input', (e) => {
            renderSavedSchedules(e.target.value);
        });
    }

    // ============================================
    // KHỞI TẠO
    // ============================================
    generateBtn.addEventListener('click', generateSchedule);
    setTimeout(generateSchedule, 100);
    renderSavedSchedules();
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initScheduler();
} else {
    document.addEventListener('DOMContentLoaded', initScheduler);
}
