import React from 'react';
import { PieChart, Pie, Tooltip as PieTooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import '../App.css';

// Data for the pie chart
const pieData = [
    { name: 'Insurer 1', value: 10, fill: '#007bff' },
    { name: 'Insurer 2', value: 20, fill: '#28a745' },
    { name: 'Insurer 3', value: 30, fill: '#dc3545' },
    { name: 'Insurer 4', value: 25, fill: '#ffc107' },
    { name: 'Insurer 5', value: 15, fill: '#17a2b8' },
];

// Data for the bar chart
const barData = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
    return (
        <div className="container-fluid my-4">
            <div className="row g-3" style={{position:"relative", top:"-13px"}}>
                {/* Cards Section */}
                <div className="col-md-6 col-lg-6 col-12" style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
                    <div className="row row-cols-1 g-3">
                        <div className="d-flex flex-row gap-3">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Clients</h5>
                                        <p className="card-text">40</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Open Tickets</h5>
                                        <p className="card-text">34</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row gap-3">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Revenue</h5>
                                        <p className="card-text">$5000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pending Orders</h5>
                                        <p className="card-text">15</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pie Chart and Legend Section */}
                <div className="col-md-6 col-lg-6 col-12 d-flex flex-column">
                    <div className="pie-chart-container d-flex justify-content-center mb-3">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <PieTooltip
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
                        </ResponsiveContainer>
                    </div>

                    {/* Legend Section */}
                    <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
                        <span className="badge bg-primary">Insurer 1</span>
                        <span className="badge bg-success">Insurer 2</span>
                        <span className="badge bg-danger">Insurer 3</span>
                        <span className="badge bg-warning">Insurer 4</span>
                        <span className="badge bg-info">Insurer 5</span>
                    </div>
                </div>
            </div>

               {/* Dropdowns Section */}
               <div className="row mt-4">
               <div className="col-md-4 col-sm-12 mb-3">
                   <div className="form-group">
                       <label htmlFor="select-gender" className="form-label">Gender</label>
                       <select id="select-gender" name="select-gender" className="form-select">
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                       </select>
                   </div>
               </div>

               <div className="col-md-4 col-sm-12 mb-3">
                   <div className="form-group">
                       <label htmlFor="select-age" className="form-label">Age Group</label>
                       <select id="select-age" name="select-age" className="form-select">
                           <option value="18-24">18-24</option>
                           <option value="25-34">25-34</option>
                           <option value="35-44">35-44</option>
                           <option value="45-54">45-54</option>
                           <option value="55+">55+</option>
                       </select>
                   </div>
               </div>

               <div className="col-md-4 col-sm-12 mb-3">
                   <div className="form-group">
                       <label htmlFor="select-location" className="form-label">Location</label>
                       <select id="select-location" name="select-location" className="form-select">
                           <option value="north-america">North America</option>
                           <option value="europe">Europe</option>
                           <option value="asia">Asia</option>
                           <option value="south-america">South America</option>
                           <option value="africa">Africa</option>
                       </select>
                   </div>
               </div>
           </div>

            {/* Bar Chart Section */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="bar-chart-container d-flex justify-content-center">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={barData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <PieTooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

         
        </div>
    );
};

export default Dashboard;
