let contador = 0;

document.querySelector(".btn").addEventListener("click", (e) => {
  contador++;

  class persona {
    constructor(nombre, marca, modelo, ano, cilindrada, numero) {
      this.nombre = nombre;
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cilindrada = cilindrada;
      this.numero = numero;
    }
  }

  let usuarios = [];

  while (true) {
    alert(
      "¡Hola!, bienvenido, iniciemos una base de datos de tus autos favoritos"
    );
    let nombreA = prompt("¿Cual es tu nombre?");
    let marcaA = prompt("¿Que marca es tu auto favorito?");
    let modeloA = prompt("¿Que modelo es/Version?");
    let anoA = prompt("¿Que año es el auto?");
    let cilindradaA = prompt("¿Que cilindrada/Motor?");
    let numeroA = contador;

    usuarios.push(
      new persona(nombreA, marcaA, modeloA, anoA, cilindradaA, numeroA)
    );
    console.log(usuarios);
    break;
  }

  for (let usuario of usuarios) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<p>Registro numero: ${usuario.numero}</p>
                             <p>Nombre: ${usuario.nombre}</p> 
                             <p>Marca: ${usuario.marca}</p>
                             <p>Modelo: ${usuario.modelo}</p>
                             <p>cilindrada: ${usuario.cilindrada}</p>
                             <p>Año: ${usuario.ano}</p>`;
    document.body.querySelector(".container").appendChild(contenedor);
    console.log(contenedor);
    // alert(contenedor.innerHTML)
  }
});
