import { AddUser, DeleteUser, GetUsers } from "./array"

describe('Prueba de arrays', () => {

    it('Debe devolver aunque sea un valor dentro del array', () => {
        // Comprueba que se devuelva 1 0 mas valores
        expect( GetUsers().length ).toBeGreaterThanOrEqual(1);
    });

    it('Debe de contener al user admin', () => {
        expect( GetUsers() ).toContain('admin');
    });

    it('Debe de contener al user admin y secretarie', () => {
        expect( GetUsers() ).toContain('admin');
        expect( GetUsers() ).toContain('secretarie');
    });

    it('Debe de contener el user que se agregó', () => {
        const user:string = 'user1';
        expect( AddUser(user) ).toContain(user);
    });

    it('Debe de eliminar el user que se pasa', () => {
        const user:string = 'admin';
        expect( DeleteUser(user) ).not.toContain(user);
    });
})