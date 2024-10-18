export const fetchIndexAPI = async (apiKey, githubToken, repoUrl) => {
    try {
        const response = await fetch('https://api.greptile.com/v2/repositories', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'X-Github-Token': githubToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ remote: "github", repository: repoUrl })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching index API:', error);
        return { error: 'Error submitting repository for indexing' };
    }
};

export const fetchStatusAPI = async (apiKey, githubToken, repositoryId) => {
    try {
        const response = await fetch(`https://api.greptile.com/v2/repositories/${encodeURIComponent(repositoryId)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'X-Github-Token': githubToken
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching status API:', error);
        return { error: 'Error checking repository status' };
    }
};


export const fetchQueryAPI = async (apiKey, githubToken, query, repoUrl) => {
    try {
        const response = await fetch('https://api.greptile.com/v2/query', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'X-Github-Token': githubToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [{ id: "1", content: query, role: "user" }],
                repositories: [{ remote: "github", repository: repoUrl, branch: "main" }]
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching query API:', error);
        return { error: 'Error querying the repository' };
    }
};

