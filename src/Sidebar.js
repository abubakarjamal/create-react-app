import React from "react";
import "./Sidebar.css"

export default function Sidebar({setHasDetails}){
  return (
    <div className="sidebar">
    
    <a className ="closebtn" 
    onClick={() => 
    setHasDetails({type:"SI_DE",
    payload:false})}>&times;</a>
    
    <a href="#">Collection</a>
    
     <a href="#">Men</a>
     
      <a href="#">Women</a> 
      
      <a href="#">About</a>
      
      <a href="#">Contact</a>
      
    </div>
    )
}
