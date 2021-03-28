import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from '../../../types/types';



describe('Pruebas en el componente <LoginScreen />', () => {

    const history = {
        replace: jest.fn(),
    };
    const contextValue = {
        dispatch: jest.fn(),
        user: {logged: false}
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>
    )

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
     
    test('debe de realizar el dispatch y la navegacion ', () => {
       wrapper.find('button').prop('onClick')();
        
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.login,
            payload: {
                name:"Joni",
            }
        });
        expect(history.replace).toHaveBeenCalledWith('/');
       
    })


    test('pruebas del localStorage ', () => {
        const handelClick = wrapper.find('button').prop('onClick');
        handelClick();
        expect(history.replace).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath', '/dc');
        handelClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    })
    
    
});
