// const state = {
//     name: 'Joni',
//     logged: true,
// }

import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    

    test('debe de retorntar el estado por defecto ', () => {
        const state = authReducer({logged: false},{} );
        expect(state).toEqual({logged: false});
    })

    test('debe de colocar y autenticar el name del usuario ', () => {

        const action = {
            type:types.login,
            payload: {
                name: 'Joni'
            }
        }

        const state = authReducer({logged: false},action );
        expect(state).toEqual({
            logged: true,
            name: 'Joni'
        });
      
    })

    test('debe de borrar el name del usuario y logged en false', () => {
        const action = {type:types.logout}
        const state = authReducer({logged: true, name: 'Joni'},action );
        expect(state).toEqual({logged: false});
    })
    
    
    
})
