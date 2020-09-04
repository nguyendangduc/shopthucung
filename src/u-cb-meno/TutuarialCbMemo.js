import React, { useState, useCallback } from 'react';



const TutuarialCbMemo = (props) => {

  const[sdt,setSdt] = useState('');
  const[forcusUpdate, setForcusUpdate] = useState('');
  
  const RerenChange = useCallback ( () => {
    console.log("RerenChange");
    return <>
      <h2>RerenChange</h2>
      <button>reUpdate</button>
    </>
  }, [])

  const reUpdate = (ud) => {
    console.log("ud", ud);
  };

  const onChangeSdt = (event) => {
    setSdt(event.target.value);
    if(event.target.value === "0987")
      setForcusUpdate(event.target.value)
  }

  return <>
    <input name="sdt" value={sdt} onChange={onChangeSdt} />
    <RerenChange forcusUpdate={forcusUpdate} reUpdate={reUpdate}/>
  </>
}

export default TutuarialCbMemo;
