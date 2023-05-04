


export const LOGIN_SUCCESS='LOGIN_SUCCESS'

const reducer =(state,action)=>{
switch (action.key) {
  case LOGIN_SUCCESS:
    return{
      ...state,
      user:action.payload
    }
    
    

  default:
    break;
}

}

export default reducer