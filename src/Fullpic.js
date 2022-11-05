import React from "react";
import "./Fullpic.css"

const MyCollection =[
  {
    i:0,
    veed:"your demo cursor",
    label:"1/4",
    imgUrl:"../assets/images/image-product-1.jpg"
  },
  {
    veed:"your demo cursor",
    label:"2/4" ,
    imgUrl:"../assets/images/image-product-2.jpg"
  },
  {
    veed:"your demo cursor",
    label: "3/4",
    imgUrl:"../assets/images/image-product-3.jpg"
  },
  {
    veed:"your demo cursor",
    label: "4/4",
    imgUrl:"../assets/images/image-product-4.jpg"
  }
  ]
export default function Fullpic({dispatch, pictur, numbe}){
  const CollectionSize = MyCollection.length
  const [index, setActiveStep ] = React.useState(0)
  const [ved, setVed] = React.useState("your demo cursor")
  const [ present, setPresent ] = React.useState(true)

const timerRef = React.useRef(null)
  
  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      
    },2000)
    
    return stopPresentation;
  },[])
  if (index === CollectionSize - 1) {
        clearInterval(timerRef.current);
      }
  function stopPresentation() {
    clearInterval(timerRef.current)
    
  }
  const goToNextPic = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    
  }
  const goToPrevPic = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    stopPresentation()
  }
  
  return(
<div className="modall">
  <span className="close cursor"
  onClick={() => dispatch({type:"WE_TR",payload:false})}>×</span>
  <div className="modal-content">

    <div className="mySlide">
    
      <div className="numbertext">{MyCollection[index].label}</div>
      
      <img className="your "
      src={MyCollection[index].imgUrl} />
    </div>


    
    
    
    
    <button className="btn prev" onClick={goToPrevPic} disabled={index === 0}>❮</button>
    <button className="btn next" onClick={goToNextPic} disabled={index === CollectionSize - 1}>❯</button>

    <div className="caption-container">
      <p ></p>
    </div>

<div className="d-flex" >
{MyCollection.map((b,i) => <div className="column" ><img src={b.imgUrl} onClick={() => setActiveStep(i)}
className={i == index ? "your dem cursor" : "your demo cursor"}/> </div>)}
  
     
   
    </div>
  </div>
</div>
    )
}
