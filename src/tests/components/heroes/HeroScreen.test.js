import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { HeroScreen } from "../../../components/heroes/HeroScreen"



describe('Pruebas en <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    
    test('debe mostrar el compepnente redirect si no hay argumentos en el URL ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history}/>
            </MemoryRouter>
        )
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });


    test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route path="/hero/:heroeId" component={HeroScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    });
    
    test('debe de regrsar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route 
                    path="/hero/:heroeId" 
                    component={() => <HeroScreen history = { history } />}/>
            </MemoryRouter>
        );


        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).toHaveBeenCalledTimes(0);
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('Debe de regraser a la pantalla anterior GOBACK', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route 
                    path="/hero/:heroeId" 
                    component={() => <HeroScreen history = { history } />}/>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.goBack).toHaveBeenCalled();
    });

    test('Debe de llamar el redirect si el heroe no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider543543213']}>
               <Route 
                    path="/hero/:heroeId" 
                    component={() => <HeroScreen history = { history } />}/>
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');
        
    })
    
    
    
})
