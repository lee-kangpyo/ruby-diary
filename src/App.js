import logo from './logo.svg';
import './App.css';
import Calendar from './component/calendar';
import Header from './component/Header';
import DiaryDetail from './component/DiaryDetail';

function App() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Calendar />
        <DiaryDetail />
      </div>
    </div>
  );
}

export default App;
