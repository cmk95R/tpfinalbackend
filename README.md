
# API con Express - Trabajo Práctico

Este proyecto consiste en la creación de una API utilizando el framework **Express** de JavaScript, que contiene rutas para manejar las operaciones más comunes de HTTP (GET, POST, PUT, DELETE). La API está diseñada para gestionar los integrantes de un equipo, permitiendo consultar, agregar, actualizar y eliminar miembros a través de diferentes rutas.

Este trabajo práctico fue realizado por el equipo compuesto por los siguientes integrantes: Jean Pierre Michel Kong - Cristian Fabricio Velazquez 

## Instalación

Para ejecutar este proyecto  sigue estos pasos:

### 1. Clonar el repositorio
Primero, clona este repositorio 
git clone https://github.com/PanConCebolla/TP-1-Backend/tree/master

### 2. Instalar dependencias

cd [TP-1-Backend]
npm install

### 3. Ejecutar el proyecto

npm run dev

![WhatsApp Image 2024-11-20 at 22 42 33](https://github.com/user-attachments/assets/5c21cbc1-2e4e-4ae9-8bb3-90537d8466a0)


### 3. **Detalles de las Rutas**

En esta sección, debes completar lo que ya has hecho con los detalles de las rutas, indicando cómo se usan:

```markdown
## Rutas de la API

La API contiene las siguientes rutas:

### **GET:**

- **`/`**: Ruta principal que devuelve un mensaje de saludo indicando que la API está funcionando correctamente.

- **`/integrantes`**: Devuelve todos los integrantes del equipo (almacenados en `integrantes.json`).
- **`/integrantes/:dni`**: Devuelve los datos del integrante según el DNI proporcionado.

### **POST:**

- **`/integrantes/agregar`**: Permite agregar un nuevo integrante al archivo `integrantes.json`. Se envía un cuerpo JSON con los datos del nuevo integrante.

### **PUT:**

- **`/integrantes/:mail`**: Permite actualizar el apellido de un integrante buscando por su correo electrónico.

### **DELETE:**

- **`/integrantes/:dni`**: Permite eliminar un integrante según su DNI.
