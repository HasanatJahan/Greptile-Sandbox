import React, { useState } from 'react';
import { fetchStatusAPI } from '../services/api';

const StatusForm = ({ onResponse, sessionId }) => {
    const [apiKey, setApiKey] = useState('');
    const [githubToken, setGithubToken] = useState('');
    const [repoId, setRepoId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetchStatusAPI(apiKey, githubToken, repoId);
        onResponse(response, 'status', { apiKey, githubToken, repoId }, sessionId); // Save the request and response
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Check Repository Status</h3>
            <label>Greptile API Key:</label>
            <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Greptile API Key"
                required
            />
            <label>GitHub Token:</label>
            <input
                type="text"
                value={githubToken}
                onChange={(e) => setGithubToken(e.target.value)}
                placeholder="Enter your GitHub Token"
                required
            />
            <label>Repository ID:</label>
            <input
                type="text"
                value={repoId}
                onChange={(e) => setRepoId(e.target.value)}
                placeholder="Enter the Repository ID"
                required
            />
            <button type="submit">Check Status</button>
        </form>
    );
};

export default StatusForm;
