import React, { useState } from 'react';
import SessionTabs from './SessionTabs';
import { saveApiCallToSession, getApiCallsForSession } from '../utils/sessionUtils';

const SessionDetail = ({ session }) => {
    const [apiResponse, setApiResponse] = useState(null);
    const [previousCalls, setPreviousCalls] = useState(getApiCallsForSession(session.id));

    const handleApiResponse = (response, apiType, request) => {
        setApiResponse(response);
        saveApiCallToSession(session.id, { apiType, request, response }); // Save API call
        setPreviousCalls(getApiCallsForSession(session.id)); // Refresh the previous calls
    };

    return (
        <div className="session-detail">
            <h2>{session.name}</h2>

            {/* Session Tabs for Index, Status, and Query */}
            <SessionTabs session={session} onResponse={handleApiResponse} />

            {/* Display the latest API response */}
            <div className="response-container">
                <h3>API Response</h3>
                {apiResponse ? <pre>{JSON.stringify(apiResponse, null, 2)}</pre> : <p>No response yet.</p>}

            </div>

            {/* List of previous API calls */}
            <div className="previous-calls">
                <h3>Previous API Calls</h3>
                {previousCalls.length > 0 ? (
                    previousCalls.map((call, index) => (
                        <div key={index} className="api-call">
                            <p><strong>Type:</strong> {call.apiType}</p>
                            <p><strong>Request:</strong> {JSON.stringify(call.request)}</p>
                            <p><strong>Response:</strong> {JSON.stringify(call.response)}</p>
                        </div>
                    ))
                ) : (
                    <p>No previous calls.</p>
                )}
            </div>
        </div>
    );
};

export default SessionDetail;
