interface IMedioDeTransporte{
    motor:string;
    color:string;

    frenar:()=>void;
}

class Automovil implements IMedioDeTransporte{
    motor: string;
    color: string;
    constructor(motor:string, color:string){
        this.motor = motor,
        this.color=color
    }

     frenar():void {
        console.log("Frenando...");
    }
}

class Bus implements IMedioDeTransporte{
    motor: string;
    color: string;
    constructor(motor:string, color:string){
        this.motor = motor,
        this.color=color
    }

     frenar():void {
        console.log("Frenando...");
    }
}