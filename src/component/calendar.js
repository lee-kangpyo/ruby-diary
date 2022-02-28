import {useState} from 'react';
import '../css/Calendar.css'
import moment from 'moment';

const Calendar = () => {
  const [getMoment, setMoment]=useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const Day = ({index, styles={}, day})=>{
    return (
      <td key={index} style={{...styles}} >
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
                  <Day key={index} index={index} styles={{backgroundColor:'red'}} day={days.format('D')} />
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                  <Day key={index} index={index} styles={{backgroundColor:'gray'}} day={days.format('D')} />
                );
              }else{
                return(
                  <Day key={index} index={index} day={days.format('D')} />
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
         <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
         <span>{today.format('YYYY 년 MM 월')}</span>
         <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
       </div>
       <table>
         <tbody>
           {calendarArr()}
         </tbody>
       </table>
   </div>
 );
}
export default Calendar;
