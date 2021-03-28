import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";

describe('Pruebas en  <Navbar />', () => {
    
    const historyMock = {
        push:jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Joni'
        }
    }

    const wrapper= mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>   
    );

    afterEach(()=>{//limpia despues de cada prueba
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Joni');
    });

    test('debe de llamara el logout y el usar el history ', () => {
        wrapper.find('button').prop('onClick')();//pasamos un clg en el codigo real
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
    
    
})
