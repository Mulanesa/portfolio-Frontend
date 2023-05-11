export class Skill {
      id: number;
      nombre: string;
      porcentaje: number;
      imgURL: string;
  
      constructor(nombre:string, porcentaje: number, imgURL: string){
          this.nombre = nombre;
          this.porcentaje = porcentaje;
          this.imgURL = imgURL;
      }
}