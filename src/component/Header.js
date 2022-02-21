import React from 'react';
import { VscHome } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";

export default function Header() {

  function GoHome({fn = f => f}){
    return (<VscHome onClick={fn} style={{width:'25px', height:'25px', padding: '15px 0 0 15px'}}/>)
  }

  function GoAccount({userId, fn = f => f}){
    return (<div style={{float:'right', padding: '15px 15px 0 0'}}>{userId}님<VscAccount onclick={fn} style={{width:'25px', height:'25px'}}/></div>)
  }

  return (
    <div id="header">
      <GoHome fn={()=> alert('go home')}/>
      <GoAccount userId="김희은" fn={()=> alert('go Account')}/>
    </div>
  );
};
