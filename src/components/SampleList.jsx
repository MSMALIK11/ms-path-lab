import React from "react";
import { useState } from "react";


 
const sampleList = [
  "BLOOD",
  "URINE",
  "BLOOD URINE",
  "STOOL",
  "PUSH",
  "SUPTUM",
  "SEMEN",
  "PLEURAL FLUID",

  "ULTRA.SOUND",
  "X-RAY",
  "E.C.G",
  "C.S.F",
  "ASCITIC FLUID",
  "MANTOUX",
];
const SampleList = ({setOpenSampleModal,setSampleValue}) => {
  const [list, setList] = useState(sampleList);
  const [value, setValue] = useState("");




  const handleInput = (e) => {


    setValue(e.target.value);
    if(e.target.value===''){
        setList(sampleList)
        return
    }

    const fillSample = sampleList.filter(
      (item) => item === e.target.value.toLocaleUpperCase()
    );
    console.log(fillSample);

    setList(fillSample);
  };
  const handleFInd = () => {
    const fillSample = sampleList.filter(
      (item) => item === value.toLocaleUpperCase()
    );

    setList(fillSample);
  };
const handleSelectandClose=(item)=>{
    setSampleValue(item)
    setOpenSampleModal(false)

}

  return (
    <>
      <div>
        <input
          type="text"
          className="input1 mr10"
        
          onChange={handleInput}
        />
        <button className="btn shadow-sm" onClick={handleFInd}>
          Find By Sample Name
        </button>
      </div>

      <ul className="sample-list">
        {list?.map((item,index) => {
          return <li key={index} onClick={()=>handleSelectandClose(item)}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default SampleList;
