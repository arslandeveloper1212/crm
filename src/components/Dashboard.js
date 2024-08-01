import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import '../App.css';

// Data for the pie chart
const data = [
    { name: 'Insurer 1', value: 10, fill: '#007bff' },
    { name: 'Insurer 2', value: 20, fill: '#28a745' },
    { name: 'Insurer 3', value: 30, fill: '#dc3545' },
    { name: 'Insurer 4', value: 25, fill: '#ffc107' },
    { name: 'Insurer 5', value: 15, fill: '#17a2b8' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
    return (
        <div className="container my-4">
            <div className="row g-3">
                {/* Two Cards */}
                <div className="col-md-6 col-lg-6 col-12 d-flex flex-column">
                    <div className='flex-row d-flex'>
                        <div className="card mb-3" style={{ width: "300px" }}>
                            <div className="card-body">
                                <h5 className="card-title">Total Clients</h5>
                                <p className="card-text">40</p>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ width: "300px" }} >
                            <div className="card-body">
                                <h5 className="card-title">Open Tickets</h5>
                                <p className="card-text">34</p>
                            </div>
                        </div>
                    </div>


                    <div className='flex-row d-flex'>
                        <div className="card mb-3" style={{ width: "300px" }} >
                            <div className="card-body">
                                <h5 className="card-title">Total Clients</h5>
                                <p className="card-text">40</p>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ width: "300px" }} >
                            <div className="card-body">
                                <h5 className="card-title">Open Tickets</h5>
                                <p className="card-text">34</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="col-md-6 col-lg-6 col-12 mb-3 d-flex ">
                    <div className="pie-chart-container">
                        <PieChart width={500} height={300}>
                            <Pie 
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                content={({ payload }) => {
                                    if (payload && payload.length > 0) {
                                        const { value, name } = payload[0].payload;
                                        return (
                                            <div className="custom-tooltip">
                                                <p className="label">{`${name}: ${value}`}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </PieChart>

                    </div>
                    <div className='row'>
                        <div className="d-flex flex-column gap-2">
                            <span className="badge bg-primary">Insurer 1</span>
                            <span className="badge bg-success">Insurer 2</span>
                            <span className="badge bg-danger">Insurer 3</span>
                            <span className="badge bg-warning">Insurer 4</span>
                            <span className="badge bg-info">Insurer 5</span>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    );
};

export default Dashboard;
