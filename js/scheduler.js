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
                const schedule = savedSchedules.find(s => s.id === id);
                if (schedule) {
                    exportSchedulePDF(schedule); // ✅ Truyền object
                } else {
                    showToast('❌ Không tìm thấy lịch học', 'error');
                }
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
    // XUẤT PDF - SỬA: NHẬN OBJECT TRỰC TIẾP
    // ============================================
    async function exportSchedulePDF(schedule) {
        // ✅ Không cần tìm kiếm nữa, dùng schedule trực tiếp
        if (!schedule || !schedule.data) {
            showToast('❌ Không có dữ liệu lịch học', 'error');
            return;
        }
        
        // Kiểm tra thư viện
        if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
            showToast('❌ Thư viện PDF chưa được tải. Vui lòng kiểm tra kết nối mạng.', 'error');
            return;
        }
        
        showLoading('Đang tạo PDF...');
        
        try {
            // Tạo nội dung HTML cho PDF
            const content = document.createElement('div');
            content.style.cssText = 'padding: 40px; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff;';
            content.innerHTML = `
                <h1 style="color: #3b82f6; text-align: center;">📚 STUDYAI - LỊCH HỌC</h1>
                <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
                <p><strong>📅 Ngày tạo:</strong> ${schedule.date || new Date().toLocaleString('vi-VN')}</p>
                <p><strong>⏰ Tổng thời gian:</strong> ${(schedule.totalHours || 0).toFixed(1)} giờ</p>
                <p><strong>📚 Số môn học:</strong> ${schedule.subjects ? schedule.subjects.length : 0}</p>
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
                            <td style="padding: 8px 10px; border: 1px solid #e2e8f0;">${item.priority || 'Bình thường'}</td>
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
            showToast('❌ Lỗi xuất PDF: ' + error.message, 'error');
        }
    }

    // ============================================
    // TẠO LỊCH HỌC - ĐÃ SỬA (XÓA CODE TRÙNG)
    // ============================================
    function generateSchedule() {
        const numSubjectsValue = parseInt(numSubjects.value) || 4;
        const hoursPerDayValue = parseFloat(hoursPerDay.value) || 4;
        const stress = parseInt(stressLevel.value) || 3;

        // ĐỊNH NGHĨA BIẾN
        const subjectList = ['Toán', 'Lý', 'Hóa', 'Văn', 'Anh', 'Sinh', 'Sử', 'Địa', 'GDCD', 'Tin học'];
        const chosenSubjects = subjectList.slice(0, numSubjectsValue);
        const subjectsPerDay = chosenSubjects;
        const totalHours = hoursPerDayValue;

        // TẠO SCHEDULE DATA
        const scheduleData = [];
        const startHour = 7;
        const breakMinutes = 10;
        
        let html = '<ul style="list-style:none;padding:0;">';
        let currentHour = startHour;
        
        for (let i = 0; i < subjectsPerDay.length; i++) {
            const duration = totalHours / subjectsPerDay.length;
            const startTime = currentHour;
            const endTime = currentHour + duration;
            
            const startStr = `${Math.floor(startTime)}:${String(Math.round((startTime % 1) * 60)).padStart(2, '0')}`;
            const endStr = `${Math.floor(endTime)}:${String(Math.round((endTime % 1) * 60)).padStart(2, '0')}`;
            
            const subject = subjectsPerDay[i];
            const priority = stress > 3 ? 'Ưu tiên' : 'Bình thường';
            
            scheduleData.push({
                subject: subject,
                time: `${startStr} - ${endStr}`,
                duration: duration.toFixed(1),
                priority: priority
            });
            
            html += `
                <li style="padding:10px 14px;border-bottom:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px;">
                    <span class="time" style="font-weight:600;color:#3b82f6;">${startStr} - ${endStr}</span>
                    <span class="subject">📖 ${subject}</span>
                    <span style="font-size:12px;color:#94a3b8;">${i > 0 ? 'Nghỉ ' + breakMinutes + ' phút' : ''}</span>
                </li>
            `;
            
            currentHour = endTime + breakMinutes / 60;
        }
        html += '</ul>';
        
        // Hiển thị stress
        const stressEmojis = '😊'.repeat(Math.min(stress, 5)) + '😰'.repeat(Math.max(0, 5 - stress));
        html += `<p style="font-size:14px;color:#64748b;margin-top:12px;">🧘 Mức độ stress: ${stressEmojis}</p>`;
        
        // ✅ CHỈ THÊM NÚT CHỨC NĂNG 1 LẦN
        html += `
            <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap;">
                <button id="saveScheduleBtn" class="btn-primary" style="background:#10b981;padding:10px 20px;border:none;border-radius:10px;color:#fff;font-weight:600;cursor:pointer;font-size:14px;">
                    💾 Lưu lịch học này
                </button>
                <button id="exportPDFBtn" class="btn-primary" style="background:#ef4444;padding:10px 20px;border:none;border-radius:10px;color:#fff;font-weight:600;cursor:pointer;font-size:14px;">
                    📄 Xuất PDF
                </button>
            </div>
        `;
        
        scheduleList.innerHTML = html;
        
        // Sự kiện lưu
        document.getElementById('saveScheduleBtn')?.addEventListener('click', function() {
            const newSchedule = {
                id: Date.now(),
                date: new Date().toLocaleString('vi-VN'),
                data: scheduleData,
                subjects: scheduleData.map(item => item.subject),
                totalHours: totalHours
            };
            savedSchedules.unshift(newSchedule);
            localStorage.setItem('studyai-schedules', JSON.stringify(savedSchedules));
            renderSavedSchedules();
            showToast('✅ Đã lưu lịch học thành công!', 'success');
        });
        
        // ✅ Sự kiện xuất PDF - SỬA: Truyền object trực tiếp
        document.getElementById('exportPDFBtn')?.addEventListener('click', function() {
            const tempSchedule = {
                id: Date.now(),
                date: new Date().toLocaleString('vi-VN'),
                data: scheduleData,
                subjects: scheduleData.map(item => item.subject),
                totalHours: totalHours
            };
            // ✅ Truyền object trực tiếp, không cần tìm kiếm
            exportSchedulePDF(tempSchedule);
        });
        
        showToast('✅ Đã tạo lịch học mới!', 'success');
    }

    // ============================================
    // TÌM KIẾM LỊCH ĐÃ LƯU
    // ============================================
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
    // ✅ KHÔNG GỌI TỰ ĐỘNG generateSchedule() nữa
    // Chỉ hiển thị placeholder
    if (scheduleList) {
        scheduleList.innerHTML = `<p class="placeholder">Nhấn "Tạo lịch học" để xem gợi ý</p>`;
    }
    renderSavedSchedules();
}

// ============================================
// KHỞI TẠO KHI TRANG TẢI XONG
// ============================================
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initScheduler();
} else {
    document.addEventListener('DOMContentLoaded', initScheduler);
}
