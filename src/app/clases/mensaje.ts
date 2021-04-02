export class Mensaje {
    //texto:string = "";
    public nombre?:string;
    public apellido?:string;
    public correo?:string;
    public contrasena?:string;
    public contrasenaConfirm?:string;
    

    constructor(nombre?:string,
        apellido?:string,
        correo?:string,
        contrasena?:string,
        contrasenaConfirm?:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasena = contrasena;
        this.contrasenaConfirm = contrasenaConfirm;
        
    }
    
    public set Nombre(v : string) {
        this.nombre = v;
    }
    public set Apellido(v : string) {
        this.apellido = v;
    }
    public set Correo(v : string) {
        this.correo = v;
    }
    public set Contrasena(v : string) {
        this.contrasena = v;
    }
    public set ContrasenaConfirm(v : string) {
        this.contrasenaConfirm = v;
    }
    
    
   
}
