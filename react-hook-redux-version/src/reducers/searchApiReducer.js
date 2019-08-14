import { FETCH_CUSTOMER } from '../actions/types';
import { LOADING_CUSTOMER } from '../actions/types';
import { ERROR_CUSTOMER } from '../actions/types';



const initialState = {
    data: false,
    loading: false,
    err: false
}

export default function(state = initialState, action) {
    // reducer simple donde actualiza los datos que vienen desde el action "payload"
    switch(action.type) {
        case FETCH_CUSTOMER:
             return {
                  ...state,
                  data: action.payload
             }
             case LOADING_CUSTOMER:
               return {
                    ...state,
                    loading: action.payload
               }
               case ERROR_CUSTOMER:
               return {
                    ...state,
                    err: action.payload
               }
        default:
             return state;
   }
  }