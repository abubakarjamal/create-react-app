import React from 'react'
import Com from "./Com"
import Sidebar from "./Sidebar"
import Mod from "./Minmo"
import reducer from "./Reducer"
import './App.css'
import './Com'

const initialState = {
  count:0,
  hasDetails: false,
  hasDe:false,
  hasD:false,
  sum:0,
  gut:0,
  fullpi: "pif",
  pictur:"../assets/images/image-product-1.jpg",
  numbe: 1 / 4,
  
}

function App() {
  
const [ state, dispatch ] = React.useReducer(reducer, initialState)

const { hasDetails, count, hasDe, } = state
const { hasD, sum,gut,fullpi, pictur, numbe} = state 
    
    React.useEffect(() => {
     const sadi = window.localStorage.getItem("count")
     
      if(sadi){
        dispatch({type:"D_T",payload:count}) 
      }
    },[])  
    React.useEffect(() =>{
      window.localStorage.setItem("count", count)
    },[count])
    
  return (
    <div className="">
    
  { hasDetails && 
  (
    <Sidebar
    setHasDetails = {dispatch}/> 
    ) 
    
  }
    
    <div className="container-fluid mt-3">
    
    <div className="nav nav-tabs">
    
    <button className="btn "
    onClick={() => 
      dispatch({type:"SI_DE",})
    }>
    
    <img
    
    src="../assets/icons/icon-menu.svg"
    
    />
    
    </button>
    
    <img
    
    src="../assets/icons/logo.svg " 
    
    className="nav-item m-2" 
    
    height={25}
    
    />
    
    <h4 className="nav-item m-2
    d-none d-md-block
    d-sm-none bg-light">
    Men
    </h4>
    
      <h4 
      className="nav-item
      m-2 d-none
      d-md-block d-sm-none
      bg-light">
      women
      </h4>
      
        <h4
        className="nav-item 
        m-2 d-none d-md-block
        d-sm-none bg-light">
        Collection
        </h4>
        
     <h4
     className="nav-item m-2 d-none d-md-block d-sm-none bg-light">
     About
     </h4>
     
      <h4 
      className="nav-item m-2 d-none d-md-block d-sm-none bg-light">
      Contact
      </h4>
      
     <button className="btn text-right" 
     
     onClick={() =>
     
     dispatch({type:"SI_D"})}>
     
     <img
     
     src="../assets/icons/icon-cart.svg" 
     
     className="nav-item  m-2 "
     
     height={25}
     
     />
     <span className="bgu">
     
     { count }
     
     </span>
     
     </button>
     
     <button className="btn"
     
     onClick={() => 
     
     dispatch({type:"INC_ME",payload: + 1})}>
     
     <img
     
     src="../assets/images/image-avatar.png" 
     
     className="nav-item navbar-right m-2 "
     
     height={25}
     
     />
     
     </button>
     
    </div>
    
    </div>
    
    { 
    hasDe &&
    
   ( 
   <Mod fred={ dispatch }
   proud={count}
   sum={sum}/>
   )
      
    }
    
<Com count={count} pictur={pictur} numbe ={numbe} fullpi={fullpi}  dispatch={dispatch} hasD={hasD}/>
    
    </div>
  )
}

export default App
