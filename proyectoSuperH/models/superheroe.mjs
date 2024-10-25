export default class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, edad, planetaOrigen, debilidad, poderes = [], aliados = [], enemigos = [])
    {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal =  nombreReal;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poderes = poderes;
        this.aliados = aliados;
        this.enemigos = enemigos;
    }

    //Método Permite agregar un nuevo poder al array poderes del superhéroe
    agregarPoder(poder){
        this.poderes.push(poder);
    }

    //Metodo Agrega un nuevo aliado al array aliados
    agregarAliado(aliado){
        this.aliados.push(aliado);
    }

    //Metodo Agrega un nuevo enemigo al array enemigos
    agregarEnemigo(enemigo){
        this.enemigos.push(enemigo);
    }
}