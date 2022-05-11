import {useState} from 'react';
import '../css/Calendar.css'
import moment from 'moment';
import movies from '../testData/movieData.json';
import DiaryDetail from '../component/DiaryDetail.js';

const Calendar = ({buttonValueSetting}) => {
  const [getMoment, setMoment]=useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const Day = ({index, styles={}, day})=>{
    var movie = movies.filter( movie => movie.date == day.format("YYYYMMDD"));
    var movieImge = movie.map(
      (data, idx) => (<img src={movie[0].image}/>)
    );
    return (
      <td style={{...styles}} >
        <button className={"poster"+movie.length} name={"diaryDetail"} onClick={buttonValueSetting}>
        {movieImge}
        </button>
        <span>{day.format('D')}</span>
      </td>
    )
  }

  const DayHeader = ({day}) => {
    return (
      <td>
        <span>{day}</span>
      </td>
    )
  }

  const calendarArr=()=>{
    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++) {
      //map 사용하려면 key값 필요.(함수)
      result = result.concat(//순수함수 - 배열의 마지막 부분에 추가함
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                  <Day key={index} index={index} styles={{color:'red'}} day={days} />
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                  <Day key={index} index={index} styles={{color:'#dadce0'}} day={days} />
                );
              }else{
                return(
                  <Day key={index} index={index} day={days} />
                );
              }
            })
          }
        </tr>
      );
    }
    return result;
  }

 return (
   <div className="calendar">
       <div className="control">
         <span>{today.format('YYYY. MM')}</span>
         <span style={{float : "right"}}>
          <button className="monthMoveB" onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >&lt;</button>
          <button className="monthMoveB" onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >&gt;</button>
         </span>
       </div>
       <table>
         <tbody>
           <tr className="calendarHead">
              <td>SUN</td>
              <td>MON</td>
              <td>TUE</td>
              <td>WED</td>
              <td>THU</td>
              <td>FRI</td>
              <td>SAT</td>
           </tr>
           {calendarArr()}
         </tbody>
       </table>
   </div>
 );
}
export default Calendar;
