import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import Procurement from "./pages/Procurement";
import Logistics from "./pages/Logistics";
import Installation from "./pages/Installation";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Branches from "./pages/Branches";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Sidebar */}
        <aside className="sidebar">

          <div className="logo">
            <div className="logo-icon">P</div>

            <div>
              <h2>Pericana</h2>
              <span>Business System</span>
            </div>
          </div>

          <nav className="navigation">

            <p className="nav-title">MAIN MENU</p>

            <NavLink to="/" className="nav-link">
              <span>📊</span>
              Dashboard
            </NavLink>

            <NavLink to="/sales" className="nav-link">
              <span>💰</span>
              Sales
            </NavLink>

            <NavLink to="/inventory" className="nav-link">
              <span>📦</span>
              Inventory
            </NavLink>

            <NavLink to="/procurement" className="nav-link">
              <span>🛒</span>
              Procurement
            </NavLink>

            <NavLink to="/logistics" className="nav-link">
              <span>🚚</span>
              Logistics
            </NavLink>

            <NavLink to="/installation" className="nav-link">
              <span>🔧</span>
              Installation
            </NavLink>

            <NavLink to="/customers" className="nav-link">
              <span>👥</span>
              Customers
            </NavLink>

            <NavLink to="/employees" className="nav-link">
              <span>👨‍💼</span>
              Employees
            </NavLink>

            <NavLink to="/branches" className="nav-link">
              <span>🏢</span>
              Branches
            </NavLink>

            <NavLink to="/reports" className="nav-link">
              <span>📈</span>
              Reports
            </NavLink>

            <p className="nav-title">SYSTEM</p>

            <NavLink to="/settings" className="nav-link">
              <span>⚙️</span>
              Settings
            </NavLink>

          </nav>

          <div className="sidebar-footer">

            <div className="user-mini">
              <div className="avatar">C</div>

              <div>
                <strong>CEO</strong>
                <small>Administrator</small>
              </div>
            </div>

          </div>

        </aside>

        {/* Main Content */}
        <main className="main-content">

          <header className="topbar">

            <div>
              <h1>Pericana Business System</h1>
              <p>Business Management Platform</p>
            </div>

            <div className="topbar-right">

              <button className="notification">
                🔔
              </button>

              <div className="profile">

                <div className="avatar">
                  C
                </div>

                <div>
                  <strong>CEO</strong>
                  <small>Administrator</small>
                </div>

              </div>

            </div>

          </header>

          <section className="dashboard">

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/sales"
                element={<Sales />}
              />

              <Route
                path="/inventory"
                element={<Inventory />}
              />

              <Route
                path="/procurement"
                element={<Procurement />}
              />

              <Route
                path="/logistics"
                element={<Logistics />}
              />

              <Route
                path="/installation"
                element={<Installation />}
              />

              <Route
                path="/customers"
                element={<Customers />}
              />

              <Route
                path="/employees"
                element={<Employees />}
              />

              <Route
                path="/branches"
                element={<Branches />}
              />

              <Route
                path="/reports"
                element={<Reports />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />

            </Routes>

          </section>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;