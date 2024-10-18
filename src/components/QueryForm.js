import React, { useState } from 'react';
import { fetchQueryAPI } from '../services/api';

const QueryForm = ({ onResponse, sessionId }) => {
    const [apiKey, setApiKey] = useState('');
    const [githubToken, setGithubToken] = useState('');
    const [repoUrl, setRepoUrl] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetchQueryAPI(apiKey, githubToken, query, repoUrl);
        onResponse(response, 'query', { apiKey, githubToken, query, repoUrl }, sessionId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Query Repository</h3>
            <label>Greptile API Key:</label>
            <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} required />
            <label>GitHub Token:</label>
            <input type="text" value={githubToken} onChange={(e) => setGithubToken(e.target.value)} required />
            <label>Repository URL:</label>
            <input type="text" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} required />
            <label>Query:</label>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default QueryForm;
