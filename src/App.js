import React, { Fragment, useState } from "react";
import Input from "./Components/Input";


const App = () => {
    let [obj, setObj] = useState({ c: "", f: "" });
  let handleChange = (e) => {
    let ce = 0, fe = 0;
      if (e.target.name === 'c') {
        fe = (e.target.value * (9 / 5)) + 32
        ce = e.target.value;
      } else {
        ce = (e.target.value - 32) * (5 / 9);
        fe = e.target.value;
        }
        setObj({c:ce,f:fe});
  }
  
    return (
      <Fragment>
        <form
          className="form container border rounded my-2 shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: "350px" }}
        >
          <h3 className="text-center">Temperature Convertor</h3>
          <div className="form-group m-4">
            <label htmlFor="c">Centigrade</label>
            <Input
              className="form-control rounded-pill shadow p-3 mb-5 my-1 text-center bg-white rounded "
              name="c"
              id="c"
              val={obj.c}
              handleChange={handleChange}
              placeholder="Temperature in Centigrade"
            />
          </div>
          <div className="form-group m-4">
            <label htmlFor="f">Fahrenheit</label>
            <Input
              className="form-control rounded-pill shadow p-3 mb-5 my-1 text-center bg-white rounded "
              name="f"
              id="f"
              val={obj.f}
              handleChange={handleChange}
              placeholder="Temperature in Fahrenheit"
            />
          </div>
        </form>
      </Fragment>
    );
};

export default App;
