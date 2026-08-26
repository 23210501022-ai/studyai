// ============================================================
// SCHEDULER.JS - QUẢN LÝ LỊCH HỌC (CRUD)
// ============================================================

let currentSchedule = [];
let editingEventId = null;
let eventFilter = '';

// ============================================
// THÊM SỰ KIỆN MỚI
// ============================================
function addEvent(eventData) {
    const newEvent = {
        id: Date.now(),
        ...eventData,
        createdAt: new Date().toISOString()
    };
    
    currentSchedule.push(newEvent);
    saveScheduleToLocal();
    renderSchedule();
    showToast('✅ Đã thêm sự kiện mới!', 'success');
}

// ============================================
// SỬA SỰ KIỆN
// ============================================
function updateEvent(id, updatedData) {
    const index = currentSchedule.findIndex(e => e.id === id);
    if (index === -1) {
        showToast('❌ Không tìm thấy sự kiện', 'error');
        return;
    }
    
    currentSchedule[index] = {
        ...currentSchedule[index],
        ...updatedData,
        updatedAt: new Date().toISOString()
    };
    
    saveScheduleToLocal();
    renderSchedule();
    showToast('✅ Đã cập nhật sự kiện!', 'success');
}

// ============================================
// XÓA SỰ KIỆN
// ============================================
function deleteEvent(id) {
    if (!confirm('Bạn có chắc muốn xóa sự kiện này?')) return;
    
    currentSchedule = currentSchedule.filter(e => e.id !== id);
    saveScheduleToLocal();
    renderSchedule();
    showToast('🗑️ Đã xóa sự kiện', 'info');
}

// ============================================
// LƯU VÀO LOCAL STORAGE
// ============================================
function saveScheduleToLocal() {
    try {
        localStorage.setItem('studySchedule', JSON.stringify(currentSchedule));
    } catch (e) {
        console.error('Lỗi lưu lịch:', e);
    }
}

// ============================================
// TẢI TỪ LOCAL STORAGE
// ============================================
function loadScheduleFromLocal() {
    try {
        const data = localStorage.getItem('studySchedule');
        if (data) {
            currentSchedule = JSON.parse(data);
        } else {
            // Dữ liệu mẫu nếu chưa có
            currentSchedule = getDefaultSchedule();
        }
        renderSchedule();
    } catch (e) {
        console.error('Lỗi tải lịch:', e);
        currentSchedule = getDefaultSchedule();
    }
}

// ============================================
// HIỂN THỊ LỊCH
// ============================================
function renderSchedule() {
    const container = document.getElementById('scheduleList');
    if (!container) return;
    
    // Lọc theo từ khóa
    const filtered = currentSchedule.filter(event => 
        event.title.toLowerCase().includes(eventFilter.toLowerCase()) ||
        event.subject.toLowerCase().includes(eventFilter.toLowerCase())
    );
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>📭 Chưa có sự kiện nào</p>
                <button onclick="showAddEventForm()" class="btn-primary">
                    ➕ Thêm sự kiện mới
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(event => `
        <div class="schedule-item" data-id="${event.id}">
            <div class="schedule-item-header">
                <h4>${event.title}</h4>
                <div class="schedule-item-actions">
                    <button onclick="editEvent(${event.id})" class="btn-edit">✏️</button>
                    <button onclick="deleteEvent(${event.id})" class="btn-delete">🗑️</button>
                </div>
            </div>
            <div class="schedule-item-body">
                <span class="subject-tag">${event.subject}</span>
                <span class="time-tag">🕐 ${event.time}</span>
                <span class="room-tag">📍 ${event.room || 'Chưa có'}</span>
            </div>
            ${event.note ? `<p class="schedule-note">📝 ${event.note}</p>` : ''}
        </div>
    `).join('');
    
    updateStats();
}

// ============================================
// THỐNG KÊ LỊCH
// ============================================
function updateStats() {
    const total = currentSchedule.length;
    const totalHours = currentSchedule.reduce((sum, e) => {
        const hours = parseFloat(e.hours) || 0;
        return sum + hours;
    }, 0);
    
    const subjects = {};
    currentSchedule.forEach(e => {
        subjects[e.subject] = (subjects[e.subject] || 0) + 1;
    });
    
    const favorite = Object.keys(subjects).sort((a, b) => subjects[b] - subjects[a])[0] || 'Chưa có';
    
    // Cập nhật UI
    const statsEl = document.getElementById('scheduleStats');
    if (statsEl) {
        statsEl.innerHTML = `
            <div class="stat-item">📚 Tổng: ${total} môn</div>
            <div class="stat-item">⏰ ${totalHours} giờ/tuần</div>
            <div class="stat-item">⭐ Yêu thích: ${favorite}</div>
        `;
    }
}

// ============================================
// HIỂN THỊ FORM THÊM/SỬA
// ============================================
function showAddEventForm() {
    // Hiển thị modal hoặc form nhập liệu
    const formHtml = `
        <div id="eventFormModal" class="modal-overlay">
            <div class="modal-content">
                <h3>${editingEventId ? '✏️ Sửa sự kiện' : '➕ Thêm sự kiện mới'}</h3>
                <form id="eventForm" onsubmit="handleEventFormSubmit(event)">
                    <input type="text" id="eventTitle" placeholder="Tên sự kiện" required>
                    <input type="text" id="eventSubject" placeholder="Môn học" required>
                    <input type="time" id="eventTime" required>
                    <input type="number" id="eventHours" placeholder="Số giờ" step="0.5" required>
                    <input type="text" id="eventRoom" placeholder="Phòng học (tùy chọn)">
                    <textarea id="eventNote" placeholder="Ghi chú (tùy chọn)"></textarea>
                    <div class="form-actions">
                        <button type="submit" class="btn-primary">
                            ${editingEventId ? 'Cập nhật' : 'Thêm'}
                        </button>
                        <button type="button" onclick="closeEventForm()" class="btn-secondary">
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Thêm modal vào body
    const existing = document.getElementById('eventFormModal');
    if (existing) existing.remove();
    
    document.body.insertAdjacentHTML('beforeend', formHtml);
    
    // Nếu đang sửa, điền dữ liệu
    if (editingEventId) {
        const event = currentSchedule.find(e => e.id === editingEventId);
        if (event) {
            document.getElementById('eventTitle').value = event.title;
            document.getElementById('eventSubject').value = event.subject;
            document.getElementById('eventTime').value = event.time;
            document.getElementById('eventHours').value = event.hours || '';
            document.getElementById('eventRoom').value = event.room || '';
            document.getElementById('eventNote').value = event.note || '';
        }
    }
}

function closeEventForm() {
    const modal = document.getElementById('eventFormModal');
    if (modal) modal.remove();
    editingEventId = null;
}

function handleEventFormSubmit(e) {
    e.preventDefault();
    
    const data = {
        title: document.getElementById('eventTitle').value.trim(),
        subject: document.getElementById('eventSubject').value.trim(),
        time: document.getElementById('eventTime').value,
        hours: parseFloat(document.getElementById('eventHours').value) || 0,
        room: document.getElementById('eventRoom').value.trim(),
        note: document.getElementById('eventNote').value.trim()
    };
    
    if (!data.title || !data.subject || !data.time) {
        showToast('⚠️ Vui lòng điền đầy đủ thông tin!', 'warning');
        return;
    }
    
    if (editingEventId) {
        updateEvent(editingEventId, data);
    } else {
        addEvent(data);
    }
    
    closeEventForm();
}

function editEvent(id) {
    editingEventId = id;
    showAddEventForm();
}

// ============================================
// DỮ LIỆU MẪU
// ============================================
function getDefaultSchedule() {
    return [
        { id: 1, title: 'Lập trình Web', subject: 'CNTT', time: '08:00', hours: 3, room: 'P101', note: 'Nhớ mang laptop' },
        { id: 2, title: 'Cơ sở dữ liệu', subject: 'CNTT', time: '13:00', hours: 2, room: 'P205', note: 'Ôn tập SQL' },
        { id: 3, title: 'Toán rời rạc', subject: 'Toán', time: '10:00', hours: 2, room: 'P303', note: 'Chuẩn bị bài tập' },
    ];
}

// ============================================
// KHỞI TẠO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadScheduleFromLocal();
    
    // Tìm kiếm
    const searchInput = document.getElementById('scheduleSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            eventFilter = this.value;
            renderSchedule();
        });
    }
    
    // Nút thêm sự kiện
    const addBtn = document.getElementById('addEventBtn');
    if (addBtn) {
        addBtn.addEventListener('click', showAddEventForm);
    }
});

// ============================================
// XUẤT PDF (CÓ SẴN)
// ============================================
async function exportSchedulePDF() {
    showLoading('Đang tạo PDF...');
    
    try {
        const element = document.getElementById('scheduleList');
        if (!element) throw new Error('Không tìm thấy lịch');
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Tiêu đề
        pdf.setFontSize(18);
        pdf.text('📚 Lịch học - StudyAI', 20, 20);
        pdf.setFontSize(12);
        pdf.text(`Ngày: ${new Date().toLocaleDateString('vi-VN')}`, 20, 30);
        
        // Nội dung
        let yPos = 40;
        currentSchedule.forEach((event, index) => {
            pdf.setFontSize(11);
            pdf.text(`${index + 1}. ${event.title}`, 20, yPos);
            pdf.setFontSize(10);
            pdf.text(`   Môn: ${event.subject} | ${event.time} | ${event.room || 'Chưa có phòng'}`, 20, yPos + 6);
            if (event.note) {
                pdf.text(`   📝 ${event.note}`, 20, yPos + 12);
                yPos += 18;
            } else {
                yPos += 12;
            }
            yPos += 4;
        });
        
        // Chân trang
        pdf.setFontSize(10);
        pdf.text('© StudyAI - Trợ lý học tập thông minh', 20, 280);
        
        pdf.save('lich_hoc_studyai.pdf');
        showToast('✅ Đã xuất PDF thành công!', 'success');
    } catch (error) {
        console.error('Lỗi xuất PDF:', error);
        showToast('❌ Lỗi xuất PDF: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
}
