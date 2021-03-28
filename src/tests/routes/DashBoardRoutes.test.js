import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext";
import { DashBoardRoutes } from "../../routers/DashBoardRoutes"
import React from 'react';
import { MemoryRouter } from "react-router";



describe('Pruebas en <DashBoardRoutes />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {logged: true, name: 'Joni'}
    }
    test('debe de mostrarse Correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Joni')
    })
    
})
