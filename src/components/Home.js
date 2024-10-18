import React, { useState } from 'react';
import SessionList from './SessionList';
import SessionDetail from './SessionDetail';

function App() {
    const [sessions, setSessions] = useState([{ id: 1, name: 'Session 1' }]);
    const [activeSession, setActiveSession] = useState(1);

    const addNewSession = () => {
        const newSession = {
            id: sessions.length + 1,
            name: `Session ${sessions.length + 1}`,
        };
        setSessions([...sessions, newSession]);
        setActiveSession(newSession.id);
    };

    return (
        <div className="app">
            <SessionList
                sessions={sessions}
                activeSession={activeSession}
                setActiveSession={setActiveSession}
                addNewSession={addNewSession}
            />
            <SessionDetail sessionId={activeSession} />
        </div>
    );
}

export default App;
