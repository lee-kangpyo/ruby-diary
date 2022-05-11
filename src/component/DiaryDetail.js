import '../css/DiaryDetail.css';

function DiaryDetail() {
 return (
   <div className="diaryDetail">
     <div className='detailDay'>
       2022-03-01 15:00 (화)
       <button className="writeD">수정</button>
     </div>
     <div className='detailInfo'>
       <div className='left'>
        <img src="https://th.bing.com/th/id/OIP.Qv7WaLO2h2yL4Gh93x-8YAHaKm?pid=ImgDet&amp;rs=1"/>
       </div>
       <div className='right'>
        <div className='score'>4.5</div>
        <div className='title'>스파이더맨 - 홈 커밍</div>
        <div className='subTitle'>Spiderman - Home Coming</div>
        <div style={{"font-size": "2vh","margin-top": "2vh"}}>2019-12-01</div>
       </div>
       <div style={{"font-size": "2.2vh", "line-height": "4.5vh"}}>
       미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…

       </div>
     </div>
   </div>
 );
}
export default DiaryDetail;
