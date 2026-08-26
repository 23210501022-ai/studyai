// ============================================================
// CONFIG.JS - CẤU HÌNH API KEYS
// ============================================================

const CONFIG = {
    // SỬ DỤNG MỘT TRONG CÁC API DƯỚI ĐÂY:
    
    // LỰA CHỌN 1: OpenAI (mất phí, nhưng đơn giản nhất)
    OPENAI: {
        apiKey: 'sk-...', // Thay bằng key của bạn
        model: 'gpt-3.5-turbo',
        url: 'https://api.openai.com/v1/chat/completions'
    },
    
    // LỰA CHỌN 2: Gemini (miễn phí, recommend cho sinh viên)
    GEMINI: {
        apiKey: 'AIzaSy...', // Thay bằng key của bạn
        model: 'gemini-2.0-flash-exp', // hoặc 'gemini-1.5-flash'
        url: 'https://generativelanguage.googleapis.com/v1beta/models'
    },
    
    // LỰA CHỌN 3: HuggingFace (miễn phí, nhiều mô hình)
    HUGGINGFACE: {
        apiKey: 'hf_...', // Thay bằng key của bạn
        model: 'mistralai/Mistral-7B-Instruct-v0.1',
        url: 'https://api-inference.huggingface.co/models'
    },
    
    // Chọn API đang sử dụng
    CURRENT_API: 'GEMINI' // Thay đổi tại đây
};

// ============================================
// HÀM LẤY API KEY
// ============================================
function getApiConfig() {
    const apiName = CONFIG.CURRENT_API;
    return CONFIG[apiName];
}

// ============================================
// EXPORT
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getApiConfig };
}
