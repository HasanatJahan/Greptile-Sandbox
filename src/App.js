import React, { useState } from 'react';
import SessionList from './components/SessionList';
import SessionDetail from './components/SessionDetail';
import { createNewSession, getAllSessions } from './utils/sessionUtils';

function App() {
  const [sessions, setSessions] = useState(getAllSessions());
  const [activeSessionId, setActiveSessionId] = useState(sessions.length > 0 ? sessions[0].id : null);

  const handleCreateNewSession = () => {
    const newSession = createNewSession(); // Automatically create a session
    setSessions([...sessions, newSession]); // Add new session to state
    setActiveSessionId(newSession.id); // Set the new session as active
  };

  return (
    <div className="app">
      {/* Session List Component */}
      <SessionList
        sessions={sessions}
        activeSessionId={activeSessionId}
        setActiveSession={setActiveSessionId}
        onCreateNewSession={handleCreateNewSession} // Pass session creation handler
      />

      {/* Only show session details if there is an active session */}
      {activeSessionId && (
        <SessionDetail session={sessions.find(s => s.id === activeSessionId)} />
      )}
    </div>
  );
}

export default App;
