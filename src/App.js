import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="main-container">
      <div className="header">
        <Header />
        <Navbar />
      </div>
    </main>
  );
}

export default App;
