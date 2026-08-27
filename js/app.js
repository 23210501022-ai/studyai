// ============================================================
// APP.JS - Điều hướng và khởi tạo
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // 1. TAB NAVIGATION
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link');
    const tabs = {
        assistant: document.getElementById('assistant'),
        scheduler: document.getElementById('scheduler'),
        mental: document.getElementById('mental'),
        dashboard: document.getElementById('dashboard'),
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.dataset.tab;

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            Object.keys(tabs).forEach(key => {
                tabs[key].classList.toggle('active', key === tab);
            });
        });
    });

    // ============================================
    // 2. THEME TOGGLE (SÁNG/TỐI)
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    
    const savedTheme = localStorage.getItem('studyai-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('studyai-theme', isDark ? 'dark' : 'light');
    });

    // ============================================
    // 3. KHỞI TẠO CÁC MODULE
    // ============================================
    if (typeof initAIAssistant === 'function') initAIAssistant();
    if (typeof initScheduler === 'function') initScheduler();
    if (typeof initMentalHealth === 'function') initMentalHealth();
    if (typeof initDashboard === 'function') initDashboard();
    
    // Dashboard sẽ được khởi tạo từ data.js và dashboard.js
});
