import React from 'react';
import './AbsenteeismStats.css';

const AbsenteeismStats = ({ current, target }) => {
  const progress = Math.max(0, Math.min(100, ((20 - current) / (20 - target)) * 100));
  const remaining = (current - target).toFixed(2);

  return (
    <div className="stats-container">
      <div className="stat-card current">
        <div className="stat-icon">📉</div>
        <div className="stat-content">
          <h3>Taxa Atual</h3>
          <div className="stat-value">{current.toFixed(2)}%</div>
        </div>
      </div>

      <div className="stat-card target">
        <div className="stat-icon">🎯</div>
        <div className="stat-content">
          <h3>Meta</h3>
          <div className="stat-value">{target}%</div>
        </div>
      </div>

      <div className="stat-card progress">
        <div className="stat-icon">📊</div>
        <div className="stat-content">
          <h3>Progresso</h3>
          <div className="stat-value">{progress.toFixed(1)}%</div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="stat-card remaining">
        <div className="stat-icon">⚡</div>
        <div className="stat-content">
          <h3>Faltam Reduzir</h3>
          <div className="stat-value">{remaining}%</div>
        </div>
      </div>
    </div>
  );
};

export default AbsenteeismStats;

