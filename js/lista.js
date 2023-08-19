
let listaContactos = [];

function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

function borrarContacto(id) {
  const indice = listaContactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach(contacto => {
    console.log(
      `ID: ${contacto.id}, Nombre: ${contacto.nombres} ${contacto.apellidos}, Teléfono: ${contacto.telefono}, Ubicación: ${contacto.ubicacion.ciudad}, Dirección: ${contacto.ubicacion.direccion}`
    );
  });
}

const ulElement = document.getElementById("lista-contactos");{
  
}

function agregarContactoDOM(contacto) {
  const liElement = document.createElement("li");
  liElement.textContent = `${contacto.nombres} ${contacto.apellidos}`;
  ulElement.appendChild(liElement);
}

listaContactos.forEach(contacto => {
  agregarContactoDOM(contacto);
});

agregarContacto({
  id: 1,
  nombres: "Juan",
  apellidos: "Pérez",
  telefono: "123456789",
  ubicacion: {
    ciudad: "Ciudad A",
    direccion: "Calle 123"
  }
});

agregarContacto({
  id: 2,
  nombres: "María",
  apellidos: "López",
  telefono: "987654321",
  ubicacion: {
    ciudad: "Ciudad B",
    direccion: "Avenida 456"
  }
});

agregarContacto({
  id: 3,
  nombres: "Carlos",
  apellidos: "Gómez",
  telefono: "555555555",
  ubicacion: {
    ciudad: "Ciudad C",
    direccion: "Plaza 789"
  }
});

imprimirContactos();

borrarContacto(2);
ulElement.innerHTML = "";

listaContactos.forEach(contacto => {
  agregarContactoDOM(contacto);
});
