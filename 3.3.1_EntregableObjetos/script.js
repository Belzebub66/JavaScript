function libro(titulo, autor, anio, estado){
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = [];

    this.describirLibro = function(){
        console.log("Libro " + this.titulo + " de autor " + this.autor + " en el año " + this.anio + " se encuentra " + this.estado);

    }
    this.agregarCapitulos = function(capitulo){
        this.capitulos.push(capitulo);
        console.log("se agrego el capitulo " + capitulo + " al libro" + titulo);
    }
    this.quitarUltimoCapitulo = function(){
        this.capitulos.pop();
        console.log("se quito el ultimo capitulo");
    }
    this.quitarCapituloNombre = function(capitulo){
        this.capitulos.splice(this.capitulos.indexOf(capitulo), 1);
    }
}

function ListaLibros(libro){
    this.lista= [];
    this.agregarLibro = function(libro){
        this.lista.push(libro);
        console.log("se agregó el libro " + libro);
    }
    this.busquedaNombre = function(titulo){
        const busqueda = this.lista.filter((libro) => libro.titulo.toLowerCase() == titulo.toLowerCase());
        console.table(busqueda.length > 0 ? busqueda: "no se encontro el libro");
    }
    this.filtradoAutor = function(autor){
        const busqueda = this.lista.filter((libro) => libro.autor.toLowerCase() == autor.toLowerCase());
        console.table(busqueda.length > 0 ? busqueda: "no se encontro libros del autor" + autor);
    }
    this.mostrarLista = function(){
        console.table(this.lista);
    }
    this.quitarNombre = function(titulo){
        const index = this.lista.findIndex((libro) => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (index != -1){
            this.lista.splice(index, 1);
            console.log("se eliminó el libro")

        }else{
            console.log("no se pudo encontrar el libro");
        }
    }
}

const libro1 = new libro("Sin remordimientos", "Tom Clancy", 1993, "disponible");
const libro2 = new libro("El arte de la guerra", "Sun Tzu", -500, "disponible");
const libro3 = new libro("Tormenta Roja", "Tom Clancy", 1986, "prestado");
const libro4 = new libro("La patrulla del amanecer", "Don Winslow", 2008, "disponible");
const libro5 = new libro("Guerra eterna", "Joe Haldeman", 1974, "prestado");
const libro6 = new libro("Starship Troopers", "Robert A. Heinlein", 1959, "disponible");
const libro7 = new libro("Black Hawk derribado", "Mark Bowden", 1999, "prestado");
const libro8 = new libro("Matterhorn", "Karl Marlantes", 2010, "disponible");
const lista = new ListaLibros();

libro1.describirLibro();
libro2.describirLibro();
libro3.describirLibro();
libro4.describirLibro();
libro5.describirLibro();
libro6.describirLibro();
libro7.describirLibro();
libro8.describirLibro();

libro1.agregarCapitulos("Capitulo 1");
libro1.agregarCapitulos("Capitulo 2");
libro1.agregarCapitulos("Capitulo 3");
libro1.agregarCapitulos("Capitulo 4");
libro1.agregarCapitulos("Capitulo 5");
libro1.quitarUltimoCapitulo();
libro1.quitarCapituloNombre("capitulo 3");
console.table(libro1);

lista.agregarLibro(libro1);
lista.agregarLibro(libro2);
lista.agregarLibro(libro3);
lista.agregarLibro(libro4);
lista.agregarLibro(libro5);

lista.busquedaNombre("Tormenta Roja");


lista.filtradoAutor("Tom Clancy");

lista.mostrarLista();


lista.quitarNombre("Matterhorn");


console.log(lista);