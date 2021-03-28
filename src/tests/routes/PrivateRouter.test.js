import { mount, shallow } from "enzyme"
import { PrivateRouter } from "../../routers/PrivateRouter"
import React from 'react';
import { MemoryRouter } from "react-router";

describe('Pruebas en <PrivateRouter />', () => {

    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();



    test('debe de mostrar el componente si esta autenticado y guardar localStorage ', () => {

        const wrapper = mount(
            <MemoryRouter>
                {/* PriveteRoute tiene que estar dentro de un router */}
                <PrivateRouter 
                    isAuthenticated={true}
                    component={() => <span>Listo</span>}
                    {...props}
                />{/* //el componente se llama como funcion */}

            </MemoryRouter>
        );
        console.log(wrapper.html());//"" string vacio
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');
    })

    test('Debe de bloquear el componente si no esta autenticado', () => {
        const wrapper =mount(
            <MemoryRouter>

                <PrivateRouter 
                    isAuthenticated={false}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');
    })
    
    
})
