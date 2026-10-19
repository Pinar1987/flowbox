import './App.css'

function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="sidebar-logo">FlowDesk</h2>
        <nav className="sidebar-nav" aria-label="Main navigation">
  
  <button type="button" className="nav-item active">
    Dashboard
  </button>

  <button type="button" className="nav-item">
    Projects
  </button>

  <button type="button" className="nav-item">
    Tasks
  </button>

  <button type="button" className="nav-item">
    Settings
  </button>
</nav>
      </aside>

      <main className="main-content">
       <header className="dashboard-header">
  <div>
    <h1>Your work, in focus.</h1>
    <p>A clear overview of your projects and tasks.</p>
  </div>

  <button type="button" className="primary-button">
    + New task
  </button>
</header>
   <section className="stats-grid" aria-label="Task summary">
  <article className="stat-card">
    <p className="stat-label">Total tasks</p>
    <h2 className="stat-value">12</h2>
  </article>

  <article className="stat-card">
    <p className="stat-label">In progress</p>
    <h2 className="stat-value">4</h2>
  </article>

  <article className="stat-card">
    <p className="stat-label">Completed</p>
    <h2 className="stat-value">5</h2>
  </article>
</section>
      </main>
    </div>
  )
}

export default App