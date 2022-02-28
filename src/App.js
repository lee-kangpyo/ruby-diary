import logo from './logo.svg';
import './App.css';
import Calendar from './component/calendar';
import Header from './component/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
      <Calendar />
      </div>
    </div>
  );
}

export default App;
