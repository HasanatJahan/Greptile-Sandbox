const fetchIndexAPI = async (apiKey, githubToken, repoUrl) => {
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
// Helper function to centralize fetch logic
const makeApiRequest = async (url, method, apiKey, githubToken, body = null) => {
    try {
        const options = {
            method: method,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'X-Github-Token': githubToken,
                'Content-Type': 'application/json'
            }
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            // Capture non-2xx responses and throw an error
            const errorData = await response.json();
            throw new Error(`Error ${response.status}: ${errorData.message || 'Unknown error'}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error making API request: ${error.message}`);
        return { error: error.message || 'Something went wrong with the request.' };
    }
};

// Fetch Index API - Submit repository for indexing
export const fetchIndexAPI = (apiKey, githubToken, repoUrl) => {
    if (!apiKey || !githubToken || !repoUrl) {
        return { error: 'Missing required parameters for indexing.' };
    }
    return makeApiRequest(
        'https://api.greptile.com/v2/repositories',
        'POST',
        apiKey,
        githubToken,
        { remote: 'github', repository: repoUrl }
    );
};

// Fetch Status API - Check repository indexing status
export const fetchStatusAPI = (apiKey, githubToken, repositoryId) => {
    if (!apiKey || !githubToken || !repositoryId) {
        return { error: 'Missing required parameters for status check.' };
    }
    return makeApiRequest(
        `https://api.greptile.com/v2/repositories/${encodeURIComponent(repositoryId)}`,
        'GET',
        apiKey,
        githubToken
    );
};

// Fetch Query API - Run a query on the indexed repository
export const fetchQueryAPI = (apiKey, githubToken, query, repoUrl) => {
    if (!apiKey || !githubToken || !query || !repoUrl) {
        return { error: 'Missing required parameters for querying.' };
    }
    return makeApiRequest(
        'https://api.greptile.com/v2/query',
        'POST',
        apiKey,
        githubToken,
        {
            messages: [{ id: '1', content: query, role: 'user' }],
            repositories: [{ remote: 'github', repository: repoUrl, branch: 'main' }]
        }
    );
};


const fetchStatusAPI = async (apiKey, githubToken, repositoryId) => {
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

const fetchQueryAPI = async (apiKey, githubToken, query, repoUrl) => {
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

