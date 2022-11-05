export default function reducer(state,action){
  switch(action.type){
    case "INC_ME" :
      return {
        ...state,
        count: state.count + action.payload,
        sum: (state.count + 1) * 125
      }
      case "D_T":
        return{
          ...state,
          gut: state.count
        }
      case "FU_LL":
        return {
          ...state,
          fullpi:action.payload
        }
      case "DEC_RE" :
        if(state.count > 0){
        return{
          ...state,
          count: state.count - action.payload,
          sum : (state.count - 1) * 125
        }
        }
        else
        (
          state)
          
          case"RE_SE":
          return {
            count : 0,
            sum: 0
          }
          case "AN_DTO":
            return{
              ...state,
              real: state.count + action.payload 
            }
            
            case "SI_D":
              return {
                ...state,
                hasDe: !state.hasDe
              }
              case "WE_TR":
                return {
                  ...state,
                  hasD: !state.hasD, 
                  isPresenting:false
                }
            case "SI_DE":
              return {
                ...state,
                hasDetails: !state.hasDetails 
              }
              case "NE_TT":
                return {
                  ...state,
                  pictur:state.pictur,
                  numbe: state.numbe
                }
              
    default:
    return state;
    
  }
}
