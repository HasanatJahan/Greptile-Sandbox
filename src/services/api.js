function extractRepoInfo(githubURL) {
    const STANDARD_GITHUB_URL = "github.com";

    try {
        const url = new URL(githubURL);
        // check that it's a github url 
        if (url.hostname === STANDARD_GITHUB_URL) {
            // remove the empty elems
            const pathParts = url.pathname.split("/").filter(Boolean);
            if (pathParts.length >= 2) {
                const user = pathParts[0];
                const repoName = pathParts[1];
                const finalUserRepoName = user + "/" + repoName;
                return finalUserRepoName;
            }
        } else {
            throw new Error("Not a Github URL");
        }
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}


export const fetchIndexAPI = async (apiKey, githubToken, repoUrl) => {
    const respository_identifier = extractRepoInfo(repoUrl);
    console.log(respository_identifier)
    const payload = {
        remote: "github",
        repository: respository_identifier
    };

    try {
        const response = await fetch(`https://api.greptile.com/v2/repositories`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'X-Github-Token': githubToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error indexing repository: ${data.message || response.statusText}`);
        }

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

