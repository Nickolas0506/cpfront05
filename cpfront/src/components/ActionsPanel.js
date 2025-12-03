import React, { useState } from 'react';
import './ActionsPanel.css';

const ActionsPanel = ({ addAction }) => {
  const [actions, setActions] = useState([
    { id: 1, title: 'Programa de Bem-estar', description: 'Implementar atividades de saúde e bem-estar', impact: 2.5, implemented: false },
    { id: 2, title: 'Flexibilidade de Horário', description: 'Permitir horários flexíveis para reduzir faltas', impact: 3.0, implemented: false },
    { id: 3, title: 'Comunicação Melhorada', description: 'Melhorar comunicação entre gestores e equipe', impact: 1.5, implemented: false },
    { id: 4, title: 'Programa de Reconhecimento', description: 'Reconhecer funcionários com boa presença', impact: 2.0, implemented: false },
    { id: 5, title: 'Atendimento Médico', description: 'Facilitar acesso a atendimento médico', impact: 2.5, implemented: false },
    { id: 6, title: 'Treinamento Gerencial', description: 'Capacitar gestores para identificar problemas', impact: 1.8, implemented: false },
  ]);

  const handleImplement = (action) => {
    const updated = actions.map(a => 
      a.id === action.id ? { ...a, implemented: true } : a
    );
    setActions(updated);
    addAction(action);
  };

  return (
    <div className="actions-panel">
      <h2>💡 Plano de Ação</h2>
      <p className="panel-description">
        Implemente ações para reduzir o absenteísmo de 20% para 10%
      </p>
      
      <div className="actions-list">
        {actions.map(action => (
          <div 
            key={action.id} 
            className={`action-card ${action.implemented ? 'implemented' : ''}`}
          >
            <div className="action-header">
              <h3>{action.title}</h3>
              {action.implemented && (
                <span className="checkmark">✓</span>
              )}
            </div>
            <p className="action-description">{action.description}</p>
            <div className="action-footer">
              <span className="impact-badge">
                Redução: -{action.impact}%
              </span>
              {!action.implemented && (
                <button 
                  onClick={() => handleImplement(action)}
                  className="btn-implement"
                >
                  Implementar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="actions-summary">
        <h3>Resumo</h3>
        <p>
          Ações implementadas: {actions.filter(a => a.implemented).length} / {actions.length}
        </p>
        <p>
          Redução total possível: -{actions.reduce((sum, a) => 
            sum + (a.implemented ? a.impact : 0), 0
          ).toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export default ActionsPanel;

