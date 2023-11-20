import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
function App() {
  return (
      <div className="app_container">
          <header className="">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/css/bootstrap.min.css"/>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/js/bootstrap.min.js"></script>
          </header>
          <div className="App">
              <Dashboard/>
          </div>
      </div>

  );
}

export default App;
