import React, { useState,useEffect } from "react";
import Modal from "./Modal/Modal";
import ReportContainer from "./ReportContainer";
import SampleList from "./SampleList";
import { AiOutlinePlus } from 'react-icons/ai';
import ResultBox from "./ResultBox";
const Report = () => {
  const [openSampleModal,setOpenSampleModal]=useState(false)
const [sampleValue,setSampleValue]=useState('')
const[dDate,setDate]=useState('')

  const handleSample=(e)=>{
    // setSampleValue(e.target.value)
    
   

  }
  useEffect(()=>{
    const date=new Date();
  
    setDate(date.toISOString().split('T')[0])

  },[])
 
document.addEventListener('keydown',(event)=>{
  console.log(event.key)
 
 
  if(event.key==="F2"){

    setOpenSampleModal(true)
return;

  }

 
})
  


// automove cursor

const onkeyUpHandle=(e,id)=>{
 

  if(e.key==="Enter"){
  
  document.getElementById(id).focus();
 
  }


}


  return (
    <div className="report-wraper">
        {/* report date */}
      <ReportContainer>
        <label htmlFor="" className="r-label"> Date</label>
        <input type="date" value={dDate} />
      </ReportContainer>

      <ReportContainer>
        <label htmlFor="" className="r-label"> Center/Department</label>
      <select name="" id="">
        <option value="">LAB</option>
      </select>
    
      </ReportContainer>
      {/* center no */}
      <ReportContainer>
        <label htmlFor="" className="r-label"> Center No</label>
        <input type="number"  className="input1" onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"labNo")} />
        <div className="lab-regno">
        <label htmlFor="" className="mr10">Lab RegNo</label>
        <input type="number"  id="labNo"  className="input1" onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"recordNo")} />

        </div>
        <div className="lab-regno">
        <label htmlFor="" className="mr10">Record No</label>

        <input type="number" id="recordNo" className="input1" onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"patient")} />

        </div>
      </ReportContainer>

      {/* patent name */}
      <ReportContainer>
        <label htmlFor="" className="r-label"> Patient Name</label>
        <select name="" id="">
            <option value=""> Mr.</option>
            <option value="">Baby</option>
          
        </select>
        <input type="text" id="patient" onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"gender")} className="input1" />
        <div className="gender">
                <label htmlFor="" className="mr10">Gender</label>
                <input type="text"  className="input1" id="gender"  onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"age")}  />
            </div>
      </ReportContainer>
      {/* age */}
      <ReportContainer>
        <label htmlFor="" className="r-label"> Age</label>
      
        <input type="number"  id="age" className="input1" onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"doctor")} />
      </ReportContainer>

      {/* age end */}

      {/* doctor code  */}
      <ReportContainer>
        <label htmlFor="" className="r-label"> Doctor Code/Name</label>
      
        <input type="text" className="input1" id="doctor" value={"MS"}  onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"mobile")}  />
      <div className="line"></div>
        <input type="text" className="input1" value={"Mobeen"}  onChange={handleSample} />
      </ReportContainer>
    

      {/* end doctor code */}
      {/* mobile no */}
      <ReportContainer>
        <label htmlFor="" className="r-label">Mobile No.</label>
      
        <input type="text" className="input1" id="mobile"  onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"Sample")}  />
      <div className="line"></div>

      </ReportContainer>

      {/* mobile no close */}
        {/* sample open */}
        <ReportContainer>
        <label htmlFor="" className="r-label">Sample</label>
      
        <input type="text" className="input1" value={sampleValue} id="Sample" placeholder="Sample"  onChange={handleSample} onKeyUp={(e)=>onkeyUpHandle(e,"TCode")} />
      <span className="icon shadow-sm" onClick={()=>setOpenSampleModal(!openSampleModal)}>  <AiOutlinePlus   /></span>

      </ReportContainer>
      {/* sample close */}

{/* result tets */}
<ReportContainer>
        <label htmlFor="" className="r-label">Result</label>
        <div className="result shadow-sm">
          <ResultBox />

        </div>
      
    
      </ReportContainer>


{/* end react test */}

      {/* sapme modal */}
      <Modal 
       open={openSampleModal} 
       setOpen={setOpenSampleModal}>

        <SampleList setOpenSampleModal={setOpenSampleModal} setSampleValue={setSampleValue} />

      </Modal>
      {/* end sample modal */}






    </div>
  );
};

export default Report;
