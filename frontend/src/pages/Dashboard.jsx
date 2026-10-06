function Dashboard() {
  return (
    <>
      <div className="page-heading">
        <div>
          <h2>Business Overview</h2>
          <p>Monitor your organization from one place.</p>
        </div>

        <button className="primary-button">+ New Sale</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div>
            <span>Total Sales</span>
            <h3>₦0.00</h3>
            <small>This month</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div>
            <span>Inventory Items</span>
            <h3>0</h3>
            <small>Across all branches</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚚</div>
          <div>
            <span>Deliveries</span>
            <h3>0</h3>
            <small>Pending deliveries</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔧</div>
          <div>
            <span>Installations</span>
            <h3>0</h3>
            <small>Active installations</small>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Recent Sales</h3>
            <button>View all</button>
          </div>

          <div className="empty-state">
            <div>📋</div>
            <h4>No sales yet</h4>
            <p>Sales transactions will appear here.</p>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Recent Activities</h3>
            <button>View all</button>
          </div>

          <div className="empty-state">
            <div>🕒</div>
            <h4>No activities yet</h4>
            <p>System activities will appear here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;