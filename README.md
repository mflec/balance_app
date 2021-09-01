# FULL STACK - JavaScript 🚀

Desarrollo de una aplicación para administración de presupuesto personal. La misma
permite crear y editar ingresos y egresos de dinero.
Requerimientos Técnicos
Desarrollo de una API en Node.js junto a Express

Los datos mostrados son persistidos en una base de datos relacional.


ABM de operaciones (ingresos y egresos)
La aplicación contiene:
● Formulario de registro de operación. El mismo contiene:
○ Concepto
○ Monto
○ Fecha
○ Tipo (ingreso o egreso)
● Listado de operaciones registradas según su tipo (ingreso o egreso).
● Desde el listado, se debe poder modificar o eliminar una operación registrada
previamente. No debe ser posible modificar el tipo de operación (ingreso o
egreso) una vez creada.

Autenticación de usuarios:
Dormulario de registro y login para permitir identificar al usuario que utiliza la
aplicación, y vincular las operaciones registradas al usuario autenticado en el sistema,
tanto para el listado y creación de nuevos registros. Los datos indispensables para permitir
el ingreso deben ser un email y contraseña, pudiendo agregar los que se deseen.
