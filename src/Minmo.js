import React from "react"
import "./Modal.css"

export default function Modal({ fred, proud, sum }){
  
  return (
    
<div className="sidebarq">

<div className="modalcon">

    <div className="small modal-header">
     
      <h2>Cart</h2>
      
       <h3 className="close" 
       
       onClick={() =>
       
        fred({type:"SI_D"})
       }>
       &times;
       </h3>
       
    </div>
    
    <hr className="hr"/>
    
    
    {
      proud > 0 ? <div>
      <div className="d-flex modal-body">    
       <img
     
     className ="m-3"
     
     src="../assets/images/image-product-1.jpg" height={70}
     />
     <h1 className ="small m-1">
     Fall Limited Edition Sneakers
     <br />
     
     <span>
     $. 125.00 
     </span>
     
     × 
     <span>
     
     {proud} 
     <br />
     = $.
     
     <span 
     
     className="hre">
     
     {sum}
     
     </span>
     
     </span>
     
     </h1>
     
     <button className="btn" 
     
     onClick={() => 
     
     fred({type:"RE_SE"})}>
     
     <img
     
     className ="m-3"
     
     src="../assets/icons/icon-delete.svg" 
     
     height={25}
     />
     
     </button>
     </div>
     <div className="modal-footer">
     <div className="text-center icon-container">
             <label>Accepted Cash</label>
             <br />
             <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-amex" ></i>
              <i className="fa fa-cc-mastercard" ></i>
              <i className="fa fa-cc-discover" ></i>
            </div>
      <button className="btn btu text-center"> Checkout </button>
    </div>
    </div>:<div><h3 className="text-center">Cart Is Empty</h3> <div className="modal-footer"></div></div>
    }
    

    
  
  </div>

</div>
    
    )
}
