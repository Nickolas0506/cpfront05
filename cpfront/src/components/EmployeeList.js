import React, { useState } from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees, setEmployees, calculateAbsenteeism }) => {
  const [editingId, setEditingId] = useState(null);
  const [editAbsences, setEditAbsences] = useState(0);

  const getStatusBadge = (status) => {
    const badges = {
      good: { text: 'Bom', class: 'badge-good' },
      risk: { text: 'Risco', class: 'badge-risk' },
      critical: { text: 'Crítico', class: 'badge-critical' }
    };
    return badges[status] || badges.good;
  };

  const calculateStatus = (absences) => {
    if (absences <= 2) return 'good';
    if (absences <= 5) return 'risk';
    return 'critical';
  };

  const handleEdit = (employee) => {
    setEditingId(employee.id);
    setEditAbsences(employee.absences);
  };

  const handleSave = (id) => {
    const updated = employees.map(emp => {
      if (emp.id === id) {
        const newAbsences = parseInt(editAbsences) || 0;
        return {
          ...emp,
          absences: newAbsences,
          status: calculateStatus(newAbsences)
        };
      }
      return emp;
    });
    setEmployees(updated);
    calculateAbsenteeism(updated);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditAbsences(0);
  };

  return (
    <div className="employee-list">
      <h2>👥 Lista de Funcionários</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Departamento</th>
              <th>Faltas</th>
              <th>Taxa Individual</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => {
              const individualRate = ((employee.absences / employee.totalDays) * 100).toFixed(2);
              const badge = getStatusBadge(employee.status);
              
              return (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>
                    {editingId === employee.id ? (
                      <input
                        type="number"
                        min="0"
                        value={editAbsences}
                        onChange={(e) => setEditAbsences(e.target.value)}
                        className="edit-input"
                      />
                    ) : (
                      employee.absences
                    )}
                  </td>
                  <td>{individualRate}%</td>
                  <td>
                    <span className={`badge ${badge.class}`}>
                      {badge.text}
                    </span>
                  </td>
                  <td>
                    {editingId === employee.id ? (
                      <div className="action-buttons">
                        <button 
                          onClick={() => handleSave(employee.id)}
                          className="btn-save"
                        >
                          ✓
                        </button>
                        <button 
                          onClick={handleCancel}
                          className="btn-cancel"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleEdit(employee)}
                        className="btn-edit"
                      >
                        Editar
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;

