import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const Dashboard = ({ employees }) => {
  // Dados por departamento
  const departmentData = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if (!acc[dept]) {
      acc[dept] = { name: dept, absences: 0, total: 0 };
    }
    acc[dept].absences += emp.absences;
    acc[dept].total += 1;
    return acc;
  }, {});

  const departmentChartData = Object.values(departmentData).map(dept => ({
    ...dept,
    average: (dept.absences / dept.total).toFixed(1)
  }));

  // Dados de status
  const statusCount = employees.reduce((acc, emp) => {
    acc[emp.status] = (acc[emp.status] || 0) + 1;
    return acc;
  }, {});

  const statusData = [
    { name: 'Bom', value: statusCount.good || 0, color: '#27ae60' },
    { name: 'Risco', value: statusCount.risk || 0, color: '#f39c12' },
    { name: 'Crítico', value: statusCount.critical || 0, color: '#e74c3c' }
  ];

  return (
    <div className="dashboard">
      <h2>📈 Dashboard de Análise</h2>
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Absenteísmo por Departamento</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="absences" fill="#667eea" name="Faltas" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Status dos Funcionários</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

