/*
 src/reducers/LoginReducer.js
*/
export default (state = {}, action) => {
    switch (action.type) {
     case "LOGIN_ACTION":
      return {
       result: `login action paylod is ${action.payload}`
      }
     default:
      return state
    }
}