import React from "react";
import Right from "./Right"
import Fullpic from "./Fullpic"
import "./Com.css"

export default function Com({count,dispatch,fullpi, numbe, pictur ,hasD, }){
  
  
  return(
    <div className="m">
    { hasD && (
   <Fullpic dispatch={dispatch} pictur={pictur} numbe={numbe} /> )
  }
    
    <div className="col-md-6 col-sm-6">
  
    <img
    src="../assets/images/image-product-1-thumbnail.jpg"
    className="pick"
    onClick={() => dispatch({type:"WE_TR"})}
    />
    <div className="d-flex">
    
    <img className="pifu"
    src="../assets/images/image-product-1-thumbnail.jpg" 
    onClick={() => dispatch({type:"WE_TR"})}/>
    
     <img  className="pif"
     src="../assets/images/image-product-2-thumbnail.jpg"
     onClick={() => dispatch({type:"WE_TR"})}/>
  <img  className="pif"
  src="../assets/images/image-product-3-thumbnail.jpg" onClick={() => dispatch({type:"WE_TR"})} />
   <img  className="pif"
   src="../assets/images/image-product-4-thumbnail.jpg" onClick={() => dispatch({type:"WE_TR"})} />
   </div>
   
    </div>
    
  <div className=" container
  col-md-6 col-sm-6">
  
  <Right count={count}
  dispatch={dispatch}/>
  
  </div>
  
 
  
    </div>
    
    )
}
