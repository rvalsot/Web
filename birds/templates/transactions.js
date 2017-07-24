// Add registries ______________________________________________________________

counter = 2

function addRegistry() {
  // create another form
  var newForm = document.createElement("form")
  form_id = "registry_" + counter.toString()
  newForm.setAttribute('id',form_id)
  newForm.setAttribute('method', 'post')
  newForm.setAttribute('class', 'registro')

  // add fecha
  var fecha = document.createElement("input")
  fecha.setAttribute('id', 'fecha')
  fecha.setAttribute('type', 'date')
  fecha.setAttribute('placeholder', 'dd/mm/aaaa')
  newForm.appendChild(fecha)

  // add persona
  var persona = document.createElement("select")
  persona.setAttribute('id', 'persona')
  newForm.appendChild(persona)

  // add cuenta cargada
  var cuenta_cargada = document.createElement("select")
  cuenta_cargada.setAttribute('id', 'cuenta_abonada')
  newForm.appendChild(cuenta_cargada)

  // add cargo
  var cargo = document.createElement("input")
  cargo.setAttribute('id', 'cargo')
  cargo.setAttribute('type', 'text')
  cargo.setAttribute('placeholder', 'Cargo')
  newForm.appendChild(cargo)

  // add cuenta abonada
  var cuenta_abonada = document.createElement("select")
  cuenta_abonada.setAttribute('id', 'cuenta_abonada')
  newForm.appendChild(cuenta_abonada)

  // add abono
  var abono = document.createElement("input")
  abono.setAttribute('id', 'abono')
  abono.setAttribute('type', 'text')
  abono.setAttribute('placeholder', 'Abono')
  newForm.appendChild(abono)

  // add notas
  var notas = document.createElement("input")
  notas.setAttribute('id', 'notas')
  notas.setAttribute('type', 'text')
  notas.setAttribute('placeholder', 'Notas')
  newForm.appendChild(notas)

  var enviar = document.createElement("input")
  enviar.setAttribute('type', 'button')
  enviar.setAttribute('value', 'Enviar')
  enviar.setAttribute('onClick', 'putRegistry()')
  newForm.appendChild(enviar)

  // append the newly completed form
  document.getElementById('registros').appendChild(newForm)

  // move another registry button down
  var newAnotherRegistry = document.getElementById('another_registry')
  document.getElementById('registros').appendChild(newAnotherRegistry)

  counter++
  console.log(counter)
}

// PUT registry _______________________________________________________________

function putAll() {
  console.log("PUT All registries")
}

function putRegistry() {
  console.log("PUT registry")
}
