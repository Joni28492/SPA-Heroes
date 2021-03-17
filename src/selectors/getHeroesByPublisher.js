import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    //controlamos los que no son validos
    if( !validPublishers.includes(publisher) ){
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }

    return heroes.filter(hero => hero.publisher === publisher);

}

