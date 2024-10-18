import React, { useState } from 'react';

const StatusForm = ({ session }) => {
    const [repositoryId, setRepositoryId] = useState('');

    const handleStatusCheck = (e) => {
        e.preventDefault();
        // Call API to check repository status
        console.log('Checking Status for Repository ID:', repositoryId);
    };

    return (
        <form onSubmit={handleStatusCheck}>
            <h3>Check Repository Status</h3>
            <div>
                <label>Repository ID:</label>
                <input
                    type="text"
                    value={repositoryId}
                    onChange={(e) => setRepositoryId(e.target.value)}
                    placeholder="Enter the repository ID"
                />
            </div>
            <button type="submit">Check Status</button>
        </form>
    );
};

export default StatusForm;
