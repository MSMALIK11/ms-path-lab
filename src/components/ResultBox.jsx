import React from "react";
import { useState } from "react";

const ResultBox = () => {
  const [value, setValue] = useState([]);
  const [val, setVal] = useState("");

  const data = ["urine", "blood"];
  console.log("value", value);

  const allTestData = [
    {
      id: 1,
      testName: "blood",
      testCode: "bl",
      testRate: 100,
    },
    {
      id: 2,
      testName: "urine",
      testCode: "ur",
      testRate: 200,
    },
  ];

  

  const [test, setTest] = useState([]);

  const handeChange = (e) => {
    const code = e.target.value;
    if (code === "") {
      return;
    }
    setVal(e.target.value);

    const fillArr = allTestData.filter((item) => item.testCode === code);

    setValue(fillArr[0]);
  };

  const onkeyUpHandle = (e, ids) => {
    if (e.key === "Enter") {
      if (val !== "" && val===value.testCode) {
        setTest([...test, value]);
        setVal("");

        document.getElementById("TCode").value="";
        document.getElementById(ids).focus();
      }
    }
  };

  console.log('value',val)

  return (
    <div className="result-box-table">
      
      <table>
        <thead>
          <tr>
            <th style={{ width: "50px" }}>Test Code</th>
            <th>Test Name</th>

            <th>Rate</th>
          </tr>
        </thead>

        <tbody>
          {/* <tr> */}
          {test?.map((item) => {
            return (
              <tr>
                <td>
                  <input
                    type="text"
                    value={item.testCode}
                    className="input1 inputVal"
                    id="bCode"
                    onChange={handeChange}
                    onKeyUp={(e) => onkeyUpHandle(e, "blood")}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.testName}
                   
                    className="input1 inputVal"
                    id="bValue"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.testRate}
                    className="input1 inputVal"
                  />
                </td>
              </tr>
            );
          })}
          {/* </tr> */}

          <tr>
            <td>
              <input
                type="text"
                name="testCode"
                placeholder="Test Code"
                className="input1 inputCode"
                // value={val}
                id="TCode"
                onChange={handeChange}
                onKeyUp={(e) => onkeyUpHandle(e, "ur")}
              />
            </td>
            <td>
              <input
                type="text"
                name="testName"
                className="input1"
                id="bValue"
              />
            </td>
            <td>
              <input type="text" name="testCode" className="input1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultBox;
