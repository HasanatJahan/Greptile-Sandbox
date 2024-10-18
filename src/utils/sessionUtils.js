// Save API call to a specific session in localStorage
export const saveApiCallToSession = (sessionId, apiCall) => {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || {};
    if (!sessions[sessionId]) {
        sessions[sessionId] = { apiCalls: [] };
    }
    sessions[sessionId].apiCalls.push(apiCall);
    localStorage.setItem('sessions', JSON.stringify(sessions));
};

// Get all API calls for a specific session
export const getApiCallsForSession = (sessionId) => {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || {};
    return sessions[sessionId]?.apiCalls || [];
};

// Create a new session with automatic numbering (Session 1, Session 2, etc.)
export const createNewSession = () => {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || {};
    const sessionCount = Object.keys(sessions).length + 1; // Automatically increment session count
    const sessionName = `Session ${sessionCount}`;
    const sessionId = `session-${Date.now()}`;

    const newSession = { id: sessionId, name: sessionName, apiCalls: [] };
    sessions[sessionId] = newSession;

    localStorage.setItem('sessions', JSON.stringify(sessions));
    return newSession;
};

// Get all existing sessions
export const getAllSessions = () => {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || {};
    return Object.values(sessions);
};
