// ============================================================
// DATA.JS - DỮ LIỆU TỪ 3 FILE CSV
// ============================================================

// ============================================================
// 1. DỮ LIỆU TỪ FILE: ai_assistant_usage_student_life.csv
// ============================================================
const aiAssistantData = {
    // Thống kê theo khối lớp
    byLevel: {
        'Undergraduate': 0,
        'Graduate': 0,
        'High School': 0
    },
    // Thống kê theo môn học
    byDiscipline: {},
    // Thống kê theo kết quả
    byOutcome: {
        'Assignment Completed': 0,
        'Idea Drafted': 0,
        'Confused': 0,
        'Gave Up': 0
    },
    // Thống kê sử dụng lại
    usedAgain: { true: 0, false: 0 },
    // Thống kê theo TaskType
    byTaskType: {
        'Studying': 0,
        'Coding': 0,
        'Writing': 0,
        'Brainstorming': 0,
        'Homework Help': 0,
        'Research': 0
    },
    totalSessions: 0,
    avgSessionLength: 0,
    avgPrompts: 0,
    avgSatisfaction: 0
};

// Dữ liệu mẫu từ CSV (đã được xử lý)
const sampleSessions = [
    // Undergraduate - Computer Science
    { level: 'Undergraduate', discipline: 'Computer Science', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Studying', sessionLength: 31.2, prompts: 11, satisfaction: 1.0 },
    { level: 'Undergraduate', discipline: 'Computer Science', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Coding', sessionLength: 3.7, prompts: 1, satisfaction: 3.5 },
    { level: 'Undergraduate', discipline: 'Computer Science', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Coding', sessionLength: 19.04, prompts: 7, satisfaction: 3.3 },
    { level: 'Undergraduate', discipline: 'Computer Science', outcome: 'Idea Drafted', usedAgain: false, taskType: 'Studying', sessionLength: 19.04, prompts: 7, satisfaction: 3.3 },
    { level: 'Undergraduate', discipline: 'Computer Science', outcome: 'Gave Up', usedAgain: false, taskType: 'Coding', sessionLength: 17.65, prompts: 4, satisfaction: 3.6 },
    { level: 'Undergraduate', discipline: 'Computer Science', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Homework Help', sessionLength: 16.15, prompts: 6, satisfaction: 2.2 },
    { level: 'Graduate', discipline: 'Computer Science', outcome: 'Idea Drafted', usedAgain: true, taskType: 'Coding', sessionLength: 7.54, prompts: 1, satisfaction: 5.0 },
    { level: 'Graduate', discipline: 'Computer Science', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Homework Help', sessionLength: 16.56, prompts: 6, satisfaction: 3.0 },
    { level: 'Graduate', discipline: 'Computer Science', outcome: 'Confused', usedAgain: false, taskType: 'Homework Help', sessionLength: 24.43, prompts: 5, satisfaction: 5.0 },
    // Undergraduate - Psychology
    { level: 'Undergraduate', discipline: 'Psychology', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Studying', sessionLength: 13.09, prompts: 6, satisfaction: 2.0 },
    { level: 'Undergraduate', discipline: 'Psychology', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Writing', sessionLength: 28.12, prompts: 9, satisfaction: 2.9 },
    { level: 'Undergraduate', discipline: 'Psychology', outcome: 'Idea Drafted', usedAgain: false, taskType: 'Coding', sessionLength: 11.51, prompts: 5, satisfaction: 3.9 },
    { level: 'Undergraduate', discipline: 'Psychology', outcome: 'Confused', usedAgain: false, taskType: 'Studying', sessionLength: 27.28, prompts: 6, satisfaction: 3.4 },
    { level: 'Graduate', discipline: 'Psychology', outcome: 'Idea Drafted', usedAgain: true, taskType: 'Homework Help', sessionLength: 8.1, prompts: 3, satisfaction: 4.3 },
    // High School - Biology
    { level: 'High School', discipline: 'Biology', outcome: 'Assignment Completed', usedAgain: false, taskType: 'Writing', sessionLength: 14.6, prompts: 3, satisfaction: 1.9 },
    { level: 'High School', discipline: 'Biology', outcome: 'Confused', usedAgain: false, taskType: 'Studying', sessionLength: 18.36, prompts: 4, satisfaction: 1.2 },
    { level: 'High School', discipline: 'Biology', outcome: 'Gave Up', usedAgain: false, taskType: 'Studying', sessionLength: 23.79, prompts: 6, satisfaction: 2.4 },
    // Undergraduate - Business
    { level: 'Undergraduate', discipline: 'Business', outcome: 'Assignment Completed', usedAgain: true, taskType: 'Coding', sessionLength: 19.22, prompts: 5, satisfaction: 3.3 },
    { level: 'Undergraduate', discipline: 'Business', outcome: 'Idea Drafted', usedAgain: true, taskType: 'Writing', sessionLength: 24.13, prompts: 5, satisfaction: 3.7 },
    { level: 'Graduate', discipline: 'Business', outcome: 'Idea Drafted', usedAgain: true, taskType: 'Coding', sessionLength: 7.54, prompts: 1, satisfaction: 5.0 },
    // Undergraduate - Math
    { level: 'Undergraduate', discipline: 'Math', outcome: 'Assignment Completed', usedAgain: false, taskType: 'Studying', sessionLength: 5.57, prompts: 1, satisfaction: 1.4 },
    { level: 'Undergraduate', discipline: 'Math', outcome: 'Assignment Completed', usedAgain: false, taskType: 'Writing', sessionLength: 18.26, prompts: 4, satisfaction: 4.9 },
    { level: 'Undergraduate', discipline: 'Math', outcome: 'Gave Up', usedAgain: false, taskType: 'Coding', sessionLength: 17.65, prompts: 4, satisfaction: 3.6 },
    // High School - Math
    { level: 'High School', discipline: 'Math', outcome: 'Assignment Completed', usedAgain: false, taskType: 'Writing', sessionLength: 24.52, prompts: 6, satisfaction: 1.9 },
    { level: 'High School', discipline: 'Math', outcome: 'Confused', usedAgain: true, taskType: 'Writing', sessionLength: 27.55, prompts: 7, satisfaction: 3.5 },
];

// Hàm phân tích dữ liệu
function analyzeAIAssistantData() {
    const data = {
        byLevel: { 'Undergraduate': 0, 'Graduate': 0, 'High School': 0 },
        byDiscipline: {},
        byOutcome: { 'Assignment Completed': 0, 'Idea Drafted': 0, 'Confused': 0, 'Gave Up': 0 },
        usedAgain: { true: 0, false: 0 },
        byTaskType: { 'Studying': 0, 'Coding': 0, 'Writing': 0, 'Brainstorming': 0, 'Homework Help': 0, 'Research': 0 },
        totalSessions: 0,
        totalLength: 0,
        totalPrompts: 0,
        totalSatisfaction: 0
    };
    
    sampleSessions.forEach(s => {
        data.totalSessions++;
        data.totalLength += s.sessionLength;
        data.totalPrompts += s.prompts;
        data.totalSatisfaction += s.satisfaction;
        
        data.byLevel[s.level] = (data.byLevel[s.level] || 0) + 1;
        data.byDiscipline[s.discipline] = (data.byDiscipline[s.discipline] || 0) + 1;
        data.byOutcome[s.outcome] = (data.byOutcome[s.outcome] || 0) + 1;
        data.usedAgain[s.usedAgain] = (data.usedAgain[s.usedAgain] || 0) + 1;
        data.byTaskType[s.taskType] = (data.byTaskType[s.taskType] || 0) + 1;
    });
    
    data.avgSessionLength = data.totalSessions > 0 ? data.totalLength / data.totalSessions : 0;
    data.avgPrompts = data.totalSessions > 0 ? data.totalPrompts / data.totalSessions : 0;
    data.avgSatisfaction = data.totalSessions > 0 ? data.totalSatisfaction / data.totalSessions : 0;
    
    return data;
}

// ============================================================
// 2. DỮ LIỆU TỪ FILE: Stress_Dataset.csv
// ============================================================
const stressData = {
    byGender: { 0: 0, 1: 0 },
    byAge: {},
    stressLevels: { 'Eustress': 0, 'Distress': 0, 'No Stress': 0 },
    avgAnxiety: 0,
    avgSleepQuality: 0,
    avgDepression: 0,
    total: 0
};

// Dữ liệu mẫu từ Stress_Dataset.csv
const sampleStress = [
    { gender: 0, age: 20, stressType: 'Eustress', anxiety: 4, sleepQuality: 2, depression: 1 },
    { gender: 0, age: 20, stressType: 'Eustress', anxiety: 3, sleepQuality: 1, depression: 2 },
    { gender: 1, age: 19, stressType: 'No Stress', anxiety: 1, sleepQuality: 4, depression: 3 },
    { gender: 1, age: 20, stressType: 'Eustress', anxiety: 3, sleepQuality: 4, depression: 2 },
    { gender: 0, age: 21, stressType: 'Distress', anxiety: 4, sleepQuality: 4, depression: 3 },
    { gender: 0, age: 19, stressType: 'Eustress', anxiety: 3, sleepQuality: 2, depression: 1 },
    { gender: 1, age: 19, stressType: 'Distress', anxiety: 5, sleepQuality: 5, depression: 5 },
    { gender: 0, age: 18, stressType: 'Eustress', anxiety: 2, sleepQuality: 1, depression: 1 },
    { gender: 1, age: 20, stressType: 'Eustress', anxiety: 2, sleepQuality: 3, depression: 3 },
    { gender: 0, age: 19, stressType: 'No Stress', anxiety: 1, sleepQuality: 4, depression: 1 },
];

function analyzeStressData() {
    const data = {
        byGender: { 0: 0, 1: 0 },
        byAge: {},
        stressLevels: { 'Eustress': 0, 'Distress': 0, 'No Stress': 0 },
        totalAnxiety: 0,
        totalSleepQuality: 0,
        totalDepression: 0,
        total: 0
    };
    
    sampleStress.forEach(s => {
        data.total++;
        data.byGender[s.gender] = (data.byGender[s.gender] || 0) + 1;
        data.byAge[s.age] = (data.byAge[s.age] || 0) + 1;
        data.stressLevels[s.stressType] = (data.stressLevels[s.stressType] || 0) + 1;
        data.totalAnxiety += s.anxiety;
        data.totalSleepQuality += s.sleepQuality;
        data.totalDepression += s.depression;
    });
    
    data.avgAnxiety = data.total > 0 ? data.totalAnxiety / data.total : 0;
    data.avgSleepQuality = data.total > 0 ? data.totalSleepQuality / data.total : 0;
    data.avgDepression = data.total > 0 ? data.totalDepression / data.total : 0;
    
    return data;
}

// ============================================================
// 3. DỮ LIỆU TỪ FILE: StressLevelDataset.csv
// ============================================================
const stressLevelData = {
    byStressLevel: { 0: 0, 1: 0, 2: 0 },
    avgAnxiety: 0,
    avgDepression: 0,
    avgSleepQuality: 0,
    total: 0
};

// Dữ liệu mẫu từ StressLevelDataset.csv
const sampleStressLevel = [
    { stressLevel: 1, anxiety: 14, depression: 11, sleepQuality: 2 },
    { stressLevel: 2, anxiety: 15, depression: 15, sleepQuality: 1 },
    { stressLevel: 0, anxiety: 4, depression: 6, sleepQuality: 4 },
    { stressLevel: 2, anxiety: 17, depression: 22, sleepQuality: 1 },
    { stressLevel: 1, anxiety: 13, depression: 12, sleepQuality: 2 },
    { stressLevel: 0, anxiety: 6, depression: 1, sleepQuality: 4 },
    { stressLevel: 2, anxiety: 21, depression: 25, sleepQuality: 1 },
    { stressLevel: 1, anxiety: 11, depression: 14, sleepQuality: 2 },
    { stressLevel: 0, anxiety: 5, depression: 3, sleepQuality: 5 },
    { stressLevel: 2, anxiety: 18, depression: 21, sleepQuality: 1 },
];

function analyzeStressLevelData() {
    const data = {
        byStressLevel: { 0: 0, 1: 0, 2: 0 },
        totalAnxiety: 0,
        totalDepression: 0,
        totalSleepQuality: 0,
        total: 0
    };
    
    sampleStressLevel.forEach(s => {
        data.total++;
        data.byStressLevel[s.stressLevel] = (data.byStressLevel[s.stressLevel] || 0) + 1;
        data.totalAnxiety += s.anxiety;
        data.totalDepression += s.depression;
        data.totalSleepQuality += s.sleepQuality;
    });
    
    data.avgAnxiety = data.total > 0 ? data.totalAnxiety / data.total : 0;
    data.avgDepression = data.total > 0 ? data.totalDepression / data.total : 0;
    data.avgSleepQuality = data.total > 0 ? data.totalSleepQuality / data.total : 0;
    
    return data;
}

// ============================================================
// 4. HÀM LẤY GỢI Ý DỰA TRÊN DỮ LIỆU
// ============================================================
function getAIAdviceFromData(level, discipline) {
    const aiData = analyzeAIAssistantData();
    const stressData = analyzeStressData();
    const stressLevelData = analyzeStressLevelData();
    
    const advices = [];
    
    // Gợi ý từ dữ liệu AI Assistant
    if (aiData.byDiscipline[discipline] > 3) {
        advices.push(`📊 Môn ${discipline} được ${aiData.byDiscipline[discipline]} sinh viên sử dụng trợ lý AI. Đây là môn học phổ biến!`);
    }
    
    const completionRate = aiData.byOutcome['Assignment Completed'] / aiData.totalSessions * 100;
    if (completionRate > 50) {
        advices.push(`✅ Tỉ lệ hoàn thành bài tập: ${completionRate.toFixed(0)}%. Tiếp tục duy trì phương pháp học này!`);
    } else {
        advices.push(`📈 Tỉ lệ hoàn thành bài tập: ${completionRate.toFixed(0)}%. Hãy thử chia nhỏ công việc và lập kế hoạch cụ thể.`);
    }
    
    // Gợi ý từ dữ liệu Stress
    if (stressData.avgAnxiety > 3) {
        advices.push(`🧘 Mức độ lo âu trung bình: ${stressData.avgAnxiety.toFixed(1)}/5. Hãy thực hành hít thở sâu và nghỉ ngơi hợp lý.`);
    }
    
    if (stressData.avgSleepQuality < 3) {
        advices.push(`😴 Chất lượng giấc ngủ trung bình: ${stressData.avgSleepQuality.toFixed(1)}/5. Cần cải thiện giấc ngủ để học tập hiệu quả.`);
    }
    
    // Gợi ý từ dữ liệu Stress Level
    const highStress = stressLevelData.byStressLevel[2];
    const total = stressLevelData.total;
    if (highStress / total > 0.3) {
        advices.push(`⚠️ ${(highStress/total*100).toFixed(0)}% sinh viên có mức độ căng thẳng cao. Hãy chú ý sức khỏe tinh thần!`);
    }
    
    return advices;
}

// ============================================================
// 5. EXPORT CHO CÁC MODULE KHÁC
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        analyzeAIAssistantData,
        analyzeStressData,
        analyzeStressLevelData,
        getAIAdviceFromData,
        sampleSessions,
        sampleStress,
        sampleStressLevel
    };
}
