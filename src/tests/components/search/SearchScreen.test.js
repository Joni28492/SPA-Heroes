import { SearchScreen } from "../../../components/search/SearchScreen"
import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";



describe('Pruebas en <SearchScreen />', () => {
    test('debe de mostrarse correctamente con valores por defecto ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    });


    test('debe de mostrar a batman y el input con el valor del query string', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de mostrar un error si no se encuentra el hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman4212145']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a hero with batman4212145');
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar el push del history ', () => {
        const history = {
            push: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search"
                    component={() => <SearchScreen history={history}/>}
                />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change',{
            target: {
                name:'searchText',
                value: 'batman'
            }
        });//cambio a la caja de texto

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });//submit del formulario

        expect(history.push).toHaveBeenCalledWith(`?q=batman`)
    })
    
    
    
        
})
