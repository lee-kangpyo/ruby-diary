import React from 'react';
import '../css/Header.css'

export default function Header() {

function GoAccount({userId, fn = f => f}){
    return (
      <div>
        <div className="headerTitle">나의 영화 일기</div>
        <div className="headerUser">{userId} 님</div>
      </div>
    )
  }

  return (
    <div className="header">
      <GoAccount userId="김희은" fn={()=> alert('go Account')}/>
    </div>
  );
};
