import { userLogOff, userLogOn } from "./boll";

describe('Pruebas de booleans', () => {

    it('Debe devolver true', () => {

        expect( userLogOn() ).toBeTrue();
    });

    it('Debe devolver false', () => {

        expect( userLogOff() ).toBeFalse();
    });
})