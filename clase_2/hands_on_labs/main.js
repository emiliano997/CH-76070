class TicketManager {
  #precioBaseGanancia = 0.15;

  eventos;

  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }

  agregarEvento({
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString(),
  }) {
    // if (!nombre || !lugar || !precio) {
    //   throw new Error("Faltan datos");
    // }

    const evento = {
      // Lógica para obtener el id del último evento
      id: this.eventos.length // Si existen eventos dentro del array
        ? this.eventos[this.eventos.length - 1].id + 1 // Si existe, obtene el id del último evento y sumale 1
        : 1, // Sino existe ningún evento en el array, asigna el valor de 1
      nombre,
      lugar,
      precio: precio * this.#precioBaseGanancia,
      capacidad,
      fecha,
      participantes: [],
    };

    this.eventos.push({ ...evento });

    console.log("Evento agregado", evento);
  }

  agregarUsuario({ idEvento, idUsuario }) {
    const evento = this.eventos.find((evento) => evento.id === idEvento);

    if (!evento) {
      console.log("Evento no encontrado");
      return; // Cortamos la ejecución de la función
    }

    // evento.participantes es un array de numeros o de string
    if (evento.participantes.includes(idUsuario)) {
      console.log("Usuario ya registrado");
      return;
    }

    evento.participantes.push(idUsuario);

    // Obtenemos el indice del evento
    const eventoIndex = this.eventos.findIndex(
      (evento) => evento.id === idEvento
    );
    this.eventos[eventoIndex] = evento;

    console.log("Usuario agregado", evento);
  }

  ponerEventoEnGira({ idEvento, nuevoLugar, nuevaFecha }) {
    // Chequear que el evento exista
    const evento = this.eventos.find((evento) => evento.id === idEvento);

    if (!evento) {
      console.log("Evento no encontrado");
      return;
    }

    // Cambiar el lugar y la fecha del evento
    // Actualizar el id por un id nuevo

    // Agregar al array como si fuera un nuevo evento
    this.eventos.push(evento);

    console.log("Evento en gira", evento);
  }
}

let nuevoTicket = new TicketManager();
console.log(
  nuevoTicket.agregarEvento({
    nombre: "La Traviata",
    lugar: "Varela",
    precio: 300,
    capacidad: 100,
  })
);

console.log(nuevoTicket.getEventos());

console.log(
  nuevoTicket.agregarEvento({
    nombre: "Apertura",
    lugar: "Iglesia",
    precio: 300,
  })
);

console.log(nuevoTicket.agregarUsuario({ idEvento: 1, idUsuario: 1 }));
console.log(nuevoTicket.agregarUsuario({ idEvento: 1, idUsuario: 1 })); // Tira error
console.log(nuevoTicket.agregarUsuario({ idEvento: 1, idUsuario: 4 }));
console.log(nuevoTicket.agregarUsuario({ idEvento: 1, idUsuario: 67 }));

console.log(
  nuevoTicket.ponerEventoEnGira({
    idEvento: 1,
    nuevoLugar: "Quilmes",
    nuevaFecha: new Date().toLocaleString(),
  })
);

console.log(nuevoTicket.getEventos());
