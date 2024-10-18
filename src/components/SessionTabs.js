import React, { useState } from 'react';
import IndexForm from './IndexForm';
import QueryForm from './QueryForm';
import StatusForm from './StatusForm';

const SessionTabs = ({ session, onResponse }) => {
    const [activeTab, setActiveTab] = useState('index'); // Default active tab

    return (
        <div>
            {/* Navbar at the top with styled buttons */}
            <div className="navbar">
                <button
                    className={activeTab === 'index' ? 'active' : ''}
                    onClick={() => setActiveTab('index')}
                >
                    Index
                </button>
                <button
                    className={activeTab === 'query' ? 'active' : ''}
                    onClick={() => setActiveTab('query')}
                >
                    Query
                </button>
                <button
                    className={activeTab === 'status' ? 'active' : ''}
                    onClick={() => setActiveTab('status')}
                >
                    Status
                </button>
            </div>

            {/* Form Container: Display the form corresponding to the selected tab */}
            <div className="form-container">
                {activeTab === 'index' && <IndexForm session={session} onResponse={onResponse} />}
                {activeTab === 'query' && <QueryForm session={session} onResponse={onResponse} />}
                {activeTab === 'status' && <StatusForm session={session} onResponse={onResponse} />}
            </div>
        </div>
    );
};

export default SessionTabs;
