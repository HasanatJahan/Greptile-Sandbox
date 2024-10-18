import React from 'react';

const SessionList = ({ sessions, activeSessionId, setActiveSession, onCreateNewSession }) => {
    return (
        <div className="session-list">
            <h2>Sessions</h2>
            <ul>
                {sessions.map(session => (
                    <li
                        key={session.id}
                        className={session.id === activeSessionId ? 'active' : ''}
                        onClick={() => setActiveSession(session.id)}
                    >
                        {session.name}
                    </li>
                ))}
            </ul>

            {/* Only show one "Create New Session" button here */}
            <button onClick={onCreateNewSession}>Create New Session</button>
        </div>
    );
};

export default SessionList;
