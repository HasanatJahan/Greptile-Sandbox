import React, { useState } from 'react';
import IndexForm from './IndexForm';
import QueryForm from './QueryForm';
import StatusForm from './StatusForm';

const SessionTabs = ({ session, onResponse }) => {
    const [activeTab, setActiveTab] = useState('index');

    return (
        <div className="session-tabs">
            <div className="tab-buttons">
                <button onClick={() => setActiveTab('index')} className={activeTab === 'index' ? 'active' : ''}>Index</button>
                <button onClick={() => setActiveTab('query')} className={activeTab === 'query' ? 'active' : ''}>Query</button>
                <button onClick={() => setActiveTab('status')} className={activeTab === 'status' ? 'active' : ''}>Status</button>
            </div>

            <div className="form-container">
                {activeTab === 'index' && <IndexForm onResponse={onResponse} />}
                {activeTab === 'query' && <QueryForm onResponse={onResponse} />}
                {activeTab === 'status' && <StatusForm onResponse={onResponse} />}
            </div>
        </div>
    );
};

export default SessionTabs;
