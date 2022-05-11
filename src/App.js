import logo from './logo.svg';
import './App.css';
import Calendar from './component/calendar';
import Header from './component/Header';
import DiaryDetail from './component/DiaryDetail.js';
import {useState} from 'react';

function App() {

  const [content, setContent] = useState();

  const buttonValueSetting = e => {
    e.preventDefault();
    if(e.target){
      setContent(e.target.name);
    }
  };

  const selectComponent = {
    diaryDetail: <DiaryDetail />
  };
  debugger;
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Calendar buttonValueSetting={buttonValueSetting}/>
        {selectComponent[content]}
      </div>
    </div>
  );
}

export default App;
