
export class Jugador{

    private puntosVida: number;

    constructor() {
        this.puntosVida = 100;
    }

    recibeDanio(danio:number): number {
        if(danio >= this.puntosVida){
            this.puntosVida = 0;
        }else{
            this.puntosVida = this.puntosVida - danio;
        }

        return this.puntosVida;
    }
}