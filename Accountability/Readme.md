# Contabilidad

Este proyecto tiene como finalidad proveer una plataforma web de contabilidad personal o para pequeños negocios y ser un demostrador de habilidades de programación y procesos de negocios.

## Licencia

## Procesos manuales

* __Transacción__:

## Herramientas

* Back end: Go
* Bases de datos: PostgreSQL
* Front end: HTML5 + CSS

## Características y funcionalidades

Definición contable

* CRUD de cuentas contables.
* Presentación del catálogo de cuentas.

Proceso contable

* CRUD de una transacción.

Reportes

* Creación y presentación de estados financieros
  * Estado de Cambios en el Patrimonio
  * Estado de Flujos de Efectivo
  * Estado de Resultados
  * Estado de Situación Financiera
* Presentación de balances de cuentas: cargos, abonos y saldo.

## Estructuras de datos

* __Cuenta__:
  * __Nombre__: Nombre de la cuenta.
  * __Descripción__: breve nota de para qué sirve la cuenta.
  * __Bloque__: grupo de cuentas al que ésta pertenece: {Activos, Capital, Pasivos, Egresos, Ingresos}
  * __Id__: identificador auto incrementado de la cuenta en la base de datos.
  * __Indice__: en el formato `###`, nos permite desglosar los bloques de cuentas semánticamente, i.e.: Caja: Activos / Activos Circulantes / primero en la lista: `111`.
  * __Movimientos abonos__: lista de movimientos de abonos asociados a la cuenta.
  * __Movimientos cargos__: lista de movimientos de cargos asociados a la cuenta.
  * __Tags__: palabras clave asociadas con la cuenta.

* __Transacción__:
  * __Abono__: monto abonado.
  * Cargo: `float`, monto cargado.
  * Cuenta abonada: `string`, nombre de la cuenta afectada por el abono.
  * Cuenta cargada: `string`, nombre de la cuenta afectada por el cargo.
  * Fecha de movimiento : `date`, día del registro de la transacción, formato `dd/mm/yyyy`.
  * Id: `int self`, identificador con auto incremento para el registro en la tabla de transacciones.
  * Descripción breve: `string`, descripción menor a `55` caracteres de qué implicó la transacción.
  * Tags: `[]sting`, palabras clave, separadas por `;` para vincular
  * Moneda: `string`, para transacciones en diversas monedas, por default, MXN, con disponibilidad: CAD, EUR, GBP MXN, USD, XAU, XAG.
  * Tipo de cambio: `float`,
  * Importe abonado: `float`,
  * Importe cargado: `float`,

## Notas

* CRUD: acrónimo de: {Create, Read, Update, Delete}, en español: {Crear, Leer, Actualizar, Eliminar}.
* Traducciones Español-Inglés basadas en éste [documento](http://pdf.usaid.gov/pdf_docs/Pnacl631.pdf).


## Pendientes

* Actualización de tipos de cambio.
* Manejo de las amortizaciones.
* Manejo del crédito.
* Manejo del interés.
