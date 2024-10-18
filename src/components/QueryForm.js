import React, { useState } from 'react';

const QueryForm = ({ session }) => {
    const [query, setQuery] = useState('');
    const [repoUrl, setRepoUrl] = useState('');

    const handleSubmitQuery = (e) => {
        e.preventDefault();

        // Check if the session is available or repository URL is set
        if (!repoUrl) {
            console.error('Repository URL is missing.');
            return;
        }

        // Call API for querying (you can add your API call logic here)
        console.log('Querying Repository:', { query, repoUrl });
    };

    return (
        <form onSubmit={handleSubmitQuery}>
            <h3>Query Repository</h3>
            <div>
                <label>Query:</label>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your query"
                    required
                />
            </div>
            <div>
                <label>Repository URL:</label>
                <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="Enter the repository URL"
                    required
                />
            </div>
            <button type="submit">Run Query</button>
        </form>
    );
};

export default QueryForm;
