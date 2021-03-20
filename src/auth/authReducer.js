import { types } from "../types/types";

// const state = {
//     name: 'Joni',
//     logged: true,
// }//solo si esta autenticado

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false,
            }//no interesa el payload
    
        default:
            return state;
    }
}


