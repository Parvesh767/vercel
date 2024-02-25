import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


export default function Selling() {
  const location = useLocation();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleAdd = (e) =>{
      navigate("/");
  }

  console.log(count);
  // console.log(location.state.data.price)
  return (
    <>

      <Button variant="primary" onClick={() => { setCount(parseInt(count) + 1) }}>+</Button>{' '}
      <div className="count" style={{ display: "grid" }}><code>{count}</code></div>
      <Button variant="primary" onClick={() => { setCount(parseInt(count) - 1) }}>-</Button>{' '}

      <br />

      <br />
      <div className="add">
        <input type="text" disabled style={{ backgroundColor: "white" }} value={"Rs" + " "} />
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <span class="input-group-text">{count * location.state.data.price}</span>
          {/* <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/> */}
        </div>


        {/* <div className="total" style={{ display: "grid" }}><code>{count * location.state.data.price}</code></div> */}
      </div>

      <div> <Button secondary onClick={handleAdd}>Secondary</Button>
      </div>
    </>
  )
}
