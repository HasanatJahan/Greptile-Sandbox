import React, { useState } from 'react';
import { fetchIndexAPI } from '../services/api.js';

const IndexForm = ({ onResponse, sessionId }) => {
    const [apiKey, setApiKey] = useState('');
    const [githubToken, setGithubToken] = useState('');
    const [repoUrl, setRepoUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetchIndexAPI(apiKey, githubToken, repoUrl);
        onResponse(response, 'index', { apiKey, githubToken, repoUrl }, sessionId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Index Repository</h3>
            <label>Greptile API Key:</label>
            <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} required />
            <label>GitHub Token:</label>
            <input type="text" value={githubToken} onChange={(e) => setGithubToken(e.target.value)} required />
            <label>Repository URL:</label>
            <input type="text" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default IndexForm;
