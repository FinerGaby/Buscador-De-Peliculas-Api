import { FETCH_CUSTOMER } from '../actions/types';


const initialState = {
    data: []
}

export default function(state = initialState, action) {
    // reducer simple donde actualiza los datos que vienen desde el action "payload"
    switch(action.type) {
        case FETCH_CUSTOMER:
             return {
                  ...state,
                  data: action.payload
             }
        default:
             return state;
   }
  }