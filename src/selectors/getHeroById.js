import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
    //find() apenas encuentre 1 eso seria todo
    return heroes.find(hero => hero.id === id);
}


