import React, { useState } from 'react';

function IndexForm() {
    const [apiKey, setApiKey] = useState('');
    const [githubToken, setGithubToken] = useState('');
    const [repoUrl, setRepoUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Indexing Repository:', { apiKey, githubToken, repoUrl });
        // Implement your API call logic here.
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Greptile API Key:</label>
                <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your Greptile API Key"
                />
            </div>
            <div>
                <label>GitHub Token:</label>
                <input
                    type="text"
                    value={githubToken}
                    onChange={(e) => setGithubToken(e.target.value)}
                    placeholder="Enter your GitHub Token"
                />
            </div>
            <div>
                <label>Repository URL:</label>
                <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="Enter the repository URL"
                />
            </div>
            <button type="submit">Start Indexing</button>
        </form>
    );
}

export default IndexForm;
