// services/superheroesService.mjs

import superheroesRepository from '../repositories/superHeroRepository.mjs';

//Sprint2TP3
import superHeroRepository from '../repositories/superHeroRepository.mjs';
//const repository = new superHeroRepository();

/*export function obtenerSuperheroePorId(id) {
    const superheroes = repository.obtenerTodos();
    return superheroes.find(hero => hero.id == id);
}

export function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
    );
}

export function obtenerSuperheroesMayoresDe30() {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero =>
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >=2
    );
}
*/
//Sprint2TP3

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
  return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await superHeroRepository.obtenerMayoresDe30();
}

export async function obtenerSuperheroesMenoresDe30() {
  return await superHeroRepository.obtenerMenoresDe30();
}