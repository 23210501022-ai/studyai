// ============================================================
// CONFIG.JS - CẤU HÌNH GEMINI API
// ============================================================

const CONFIG = {
    // ============================================
    // GEMINI API - Google AI Studio (Miễn phí)
    // ============================================
    GEMINI: {
        // 👇 THAY API_KEY CỦA BẠN VÀO ĐÂY
        apiKey: 'AIzaSyDz2PZpHQ2mU3iMmLjX5KxV3F9ZdM3FgwM', // <- Thay key của bạn
        model: 'gemini-2.0-flash-exp', // hoặc 'gemini-1.5-flash', 'gemini-1.5-pro'
        url: 'https://generativelanguage.googleapis.com/v1beta/models'
    }
};

// ============================================
// HÀM LẤY CẤU HÌNH GEMINI
// ============================================
function getGeminiConfig() {
    return CONFIG.GEMINI;
}

// ============================================
// HÀM KIỂM TRA API KEY ĐÃ CẤU HÌNH CHƯA
// ============================================
function isGeminiConfigured() {
    const config = getGeminiConfig();
    return config.apiKey && config.apiKey !== 'AIzaSyDz2PZpHQ2mU3iMmLjX5KxV3F9ZdM3FgwM';
}

// ============================================
// EXPORT (cho module nếu dùng)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getGeminiConfig, isGeminiConfigured };
}
