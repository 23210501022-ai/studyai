// Tab navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabs = {
        assistant: document.getElementById('assistant'),
        scheduler: document.getElementById('scheduler'),
        mental: document.getElementById('mental'),
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.dataset.tab;

            // Update nav active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Update tab content
            Object.keys(tabs).forEach(key => {
                tabs[key].classList.toggle('active', key === tab);
            });
        });
    });

    // Khởi tạo các module
    if (typeof initAIAssistant === 'function') initAIAssistant();
    if (typeof initScheduler === 'function') initScheduler();
    if (typeof initMentalHealth === 'function') initMentalHealth();
});
