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
        <h1>Your work, in focus.</h1>
        <p>A clear overview of your projects and tasks.</p>
      </main>
    </div>
  )
}

export default App