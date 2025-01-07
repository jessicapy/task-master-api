# task-master-api

Sistema de gestión de tareas profesionales con características especifícas:

- CRUD completo para tareas
- Filtros y búsqueda
- Validación de datos
- Manejo de errores

## Stack Tecnológico

- node con javascript
- express
- dotenv
- cors

## Persistencia de datos

En esta aplicación vamos a manejar los datos en memoria, es decir, en un arreglo.

## Modelos

- Tarea
    - Fecha limite
    - Estado
    - Título
    - Descripción
    - Fecha de creación

## Estructura del Proyecto

project-root/
├── src/
│   ├── models/
│   │   └── Task.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── config/
│   │   └── config.js
│   ├── data/
│   │   └── taskStore.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md