import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style/Dashboard.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    vegetables: 0,
    agriculture: 0,
    revenue: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [salesData, setSalesData] = useState({
    labels: [],
    datasets: []
  });
  const [categoryData, setCategoryData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    fetchStats();
    fetchRecentActivity();
    fetchSalesData();
    fetchCategoryData();
  }, []);

  const fetchStats = async () => {
    try {
      const [products, vegetables, agriculture] = await Promise.all([
        Axios.get('http://localhost:1137/api/product_fetch'),
        Axios.get('http://localhost:1137/api/vegetable_fetch'),
        Axios.get('http://localhost:1137/api/agriculture_fetch')
      ]);

      setStats({
        products: products.data.length,
        vegetables: vegetables.data.length,
        agriculture: agriculture.data.length,
        revenue: calculateTotalRevenue([...products.data, ...vegetables.data, ...agriculture.data])
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const calculateTotalRevenue = (items) => {
    return items.reduce((total, item) => total + (parseFloat(item.post_price) || 0), 0);
  };

  const fetchRecentActivity = async () => {
    try {
      // You'll need to create this endpoint in your backend
      const response = await Axios.get('http://localhost:1137/api/recent_activity');
      setRecentActivity(response.data);
    } catch (error) {
      console.error('Error fetching recent activity:', error);
    }
  };

  const fetchSalesData = async () => {
    try {
      // You'll need to create this endpoint in your backend
      const response = await Axios.get('http://localhost:1137/api/sales_data');
      setSalesData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: response.data.map(item => item.value),
          borderColor: '#3182ce',
          backgroundColor: 'rgba(49, 130, 206, 0.1)',
          tension: 0.4
        }]
      });
    } catch (error) {
      // For demo, using dummy data
      setSalesData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: '#3182ce',
          backgroundColor: 'rgba(49, 130, 206, 0.1)',
          tension: 0.4
        }]
      });
    }
  };

  const fetchCategoryData = async () => {
    try {
      setCategoryData({
        labels: ['Products', 'Vegetables', 'Agriculture'],
        datasets: [{
          label: 'Items by Category',
          data: [stats.products, stats.vegetables, stats.agriculture],
          backgroundColor: [
            'rgba(49, 130, 206, 0.6)',
            'rgba(72, 187, 120, 0.6)',
            'rgba(221, 107, 32, 0.6)'
          ],
          borderWidth: 1
        }]
      });
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'upload':
        return '⬆️';
      case 'edit':
        return '✏️';
      case 'delete':
        return '🗑️';
      default:
        return '📝';
    }
  };

  return (
    <div className="dashboard-container">
      <div className="stats-grid">
        <div className="stat-card products-stat">
          <div className="stat-header">
            <h3 className="stat-title">Total Products</h3>
            <div className="stat-icon">📦</div>
          </div>
          <p className="stat-value">{stats.products}</p>
          <div className="stat-change positive-change">
            <span>↑</span>
            <span>12% from last month</span>
          </div>
        </div>

        <div className="stat-card vegetables-stat">
          <div className="stat-header">
            <h3 className="stat-title">Total Vegetables</h3>
            <div className="stat-icon">🥕</div>
          </div>
          <p className="stat-value">{stats.vegetables}</p>
          <div className="stat-change positive-change">
            <span>↑</span>
            <span>8% from last month</span>
          </div>
        </div>

        <div className="stat-card agriculture-stat">
          <div className="stat-header">
            <h3 className="stat-title">Agriculture Items</h3>
            <div className="stat-icon">🌾</div>
          </div>
          <p className="stat-value">{stats.agriculture}</p>
          <div className="stat-change positive-change">
            <span>↑</span>
            <span>15% from last month</span>
          </div>
        </div>

        <div className="stat-card revenue-stat">
          <div className="stat-header">
            <h3 className="stat-title">Total Revenue</h3>
            <div className="stat-icon">₹</div>
          </div>
          <p className="stat-value">{formatCurrency(stats.revenue)}</p>
          <div className="stat-change positive-change">
            <span>↑</span>
            <span>20% from last month</span>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Sales Overview</h3>
          </div>
          <Line 
            data={salesData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: false
                }
              }
            }}
          />
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Items by Category</h3>
          </div>
          <Bar 
            data={categoryData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: false
                }
              }
            }}
          />
        </div>
      </div>

      <div className="recent-activity">
        <div className="activity-header">
          <h3 className="activity-title">Recent Activity</h3>
        </div>
        <div className="activity-list">
          {recentActivity.length > 0 ? (
            recentActivity.map((activity, index) => (
              <div key={index} className={`activity-item ${activity.type}-activity`}>
                <div className="activity-icon">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="activity-content">
                  <p className="activity-text">{activity.description}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))
          ) : (
            // Demo activities when no real data is available
            <>
              <div className="activity-item upload-activity">
                <div className="activity-icon">⬆️</div>
                <div className="activity-content">
                  <p className="activity-text">New product "Organic Tomatoes" uploaded</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item edit-activity">
                <div className="activity-icon">✏️</div>
                <div className="activity-content">
                  <p className="activity-text">Updated agriculture item "Wheat Seeds"</p>
                  <span className="activity-time">5 hours ago</span>
                </div>
              </div>
              <div className="activity-item delete-activity">
                <div className="activity-icon">🗑️</div>
                <div className="activity-content">
                  <p className="activity-text">Deleted vegetable item "Carrots"</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
