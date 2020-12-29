import { Jugador } from "./clase"

describe('Pruebas de clase', () =>{
    it('Debe retornar 80 de hp, si recibe 20 de daño', () =>{
        const jugador = new Jugador();
        const resp = jugador.takeDamage(20);

        expect(resp).toBe(80);
    })
})