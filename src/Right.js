import React from "react";
import reducer from "./Reducer"



export default function Right({count,dispatch}){
  
  return(
    <div>
    
      <h3 className="ref">Sneaker Company</h3>
      
  <hr/>
  <h1 className="fas">
  Fall Limited Edition Sneaker
  </h1>
  <p>
  These low-quality Sneaker are your perfect casual wear companion. featuring a durable rubber outer sole, they'll withstand everything the weather has to offer.
  </p>
  <div className="d-flex justify-content-around">
  <h2 className="mony">$ 125.00
  </h2>
  <h5 className="taf">50%</h5>
  <h3 className="mon">$ 225.00</h3>
  </div>
   <p className="gred justify-content-around" >
   
   <button className="btn"
   onClick={() =>
   
   dispatch({type:"INC_ME",payload:1})}>
   
  <img src="../assets/icons/icon-plus.svg"
  
  className="m-5" />
  
  </button>
  <span className="m-4">{count}</span>
  
  <button
  className="btn" 
  onClick={() =>
  dispatch({type:"DEC_RE",
  payload: + 1})}>
  <img
  src="../assets/icons/icon-minus.svg"
  className="m-5"
  />
  </button>
  </p>
  
  <button
  className="btn btu"
  onClick={() =>
  dispatch({type:"AN_DTO", payload:alert(count)})}
  disabled={count === 0}>
  <img
  src="../assets/icons/icon-cart.svg"
  className="m-1"
  />
  add to Cart
  </button>
    </div>
    )
}
