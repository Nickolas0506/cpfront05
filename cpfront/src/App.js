import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import AbsenteeismStats from './components/AbsenteeismStats';
import EmployeeList from './components/EmployeeList';
import ActionsPanel from './components/ActionsPanel';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentAbsenteeism, setCurrentAbsenteeism] = useState(20);
  const [targetAbsenteeism, setTargetAbsenteeism] = useState(10);

  useEffect(() => {
    // Simular dados iniciais
    const initialEmployees = [
      { id: 1, name: 'João Silva', department: 'TI', absences: 5, totalDays: 20, status: 'risk' },
      { id: 2, name: 'Maria Santos', department: 'RH', absences: 2, totalDays: 20, status: 'good' },
      { id: 3, name: 'Pedro Oliveira', department: 'Vendas', absences: 8, totalDays: 20, status: 'critical' },
      { id: 4, name: 'Ana Costa', department: 'Financeiro', absences: 1, totalDays: 20, status: 'good' },
      { id: 5, name: 'Carlos Souza', department: 'TI', absences: 6, totalDays: 20, status: 'risk' },
      { id: 6, name: 'Julia Lima', department: 'RH', absences: 3, totalDays: 20, status: 'good' },
      { id: 7, name: 'Roberto Alves', department: 'Vendas', absences: 7, totalDays: 20, status: 'critical' },
      { id: 8, name: 'Fernanda Rocha', department: 'Financeiro', absences: 2, totalDays: 20, status: 'good' },
    ];
    setEmployees(initialEmployees);
    calculateAbsenteeism(initialEmployees);
  }, []);

  const calculateAbsenteeism = (empList) => {
    const totalEmployees = empList.length;
    const totalWorkingDays = 20; // dias úteis no mês
    const totalAbsences = empList.reduce((sum, emp) => sum + emp.absences, 0);
    const totalExpectedDays = totalEmployees * totalWorkingDays;
    const absenteeismRate = ((totalAbsences / totalExpectedDays) * 100).toFixed(2);
    setCurrentAbsenteeism(parseFloat(absenteeismRate));
  };

  const addAction = (action) => {
    // Simular impacto das ações
    const impact = action.impact || 0;
    const newRate = Math.max(targetAbsenteeism, currentAbsenteeism - impact);
    setCurrentAbsenteeism(newRate);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AbsenteeismStats 
          current={currentAbsenteeism} 
          target={targetAbsenteeism}
        />
        <Dashboard employees={employees} />
        <div className="content-grid">
          <EmployeeList 
            employees={employees} 
            setEmployees={setEmployees}
            calculateAbsenteeism={calculateAbsenteeism}
          />
          <ActionsPanel addAction={addAction} />
        </div>
      </div>
    </div>
  );
}

export default App;

