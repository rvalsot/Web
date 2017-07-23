# Birds Project

This folder contains a project (technology demonstrator) for a chicken coop I have at my backyard; its uses would be:

* Keep track of expenses and some basic accountancy
* Keep track of bird's population, nesting, eggs, and chicks cycles.

Guidance for this project was inspired by [12factor applications](http://12factor.net/).

__Tools__

* Docker
* HTML5 & CSS
* Golang
* PostgreSQL

__License__

This folder and sub folders uses are available for anyone to fork and use freely.

__Notes__

* Variable names are written mostly in Spanish, look for a translator if in doubt.

## Background and Processes

I got a chicken coop built at backyard as a Sunday's hobby with some friends, and we need to keep track of what happens there.

* Users
  * Who are involved in the business
  * Login access for them
* Birds
  * New birds bought
  * Who bought them
  * Deceases
* New nests placed
* Nests activities:
  * Are they occupied?
  * Number of eggs laid
  * Number of chicks born
  * Resume of all nests eggs and chicks
* Expenses and Income
  * Accounts catalog
  * Expenses: food, utilities, etc. and who we owe
  * Inventory of tools
  * Income for chicks selling
    * Number of chicks sold
    * Pricer per chick pair
    * Who bought them



nido
id	INT
ocupado	BOOL
huevos	INT
crias	INT
fecha	DATETIME -> momento del ultimo registro


conteo_nido
id 	INT
id_nido	INT
huevos	INT
crias	INT
fecha	DATETIME -> autogenerada al momento del registro
nota	STRING

cuentas
id	INT
nombre	STRING
saldo	FLOAT

transaccion
id		INT
id_cuenta	INT
movimiento	FLOAT
nota		STRING
fecha		DATETIME
id_usuario	INT

usuarios
id	INT
nombre	STRING

clientes
id INT
nombre    STRING
apellido  STRING

aves
id	INT
species	STRING
id_owner	INT

inventario
id  INT
cosa  STRING
numero  STRING
