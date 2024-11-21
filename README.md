
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






GET(/)

![WhatsApp Image 2024-11-20 at 22 42 33](https://github.com/user-attachments/assets/fa9249cb-7129-47c1-9f10-3d5a0f2482e9)

GET(/INTEGRANTES)
![3af38558-958b-4e2a-91d4-a339bc03078e](https://github.com/user-attachments/assets/95c85b3d-08da-4bcb-8be9-5a7c4c646c1a)

GET(/INTEGRANTES/:DNI)
![cc8780dd-24e9-4822-91d5-eba32cf14fee](https://github.com/user-attachments/assets/5f2d4912-e59f-4e71-8ee7-26697312151a)

POST(/INTEGRANTES/AGREGAR)

![5aa98048-1727-49a6-ba60-0c8d4372b933](https://github.com/user-attachments/assets/fc031f0d-b2a6-4606-a2ee-c6f4e3f983ec)

PUT (/INTEGRANTES/:EMAIL)
![e6e9e65f-380d-4b76-aaec-eaebbc91b02c](https://github.com/user-attachments/assets/da2e47b6-9960-4be1-a05c-52f41829aac9)

DELETE (/INTEGRANTES/:DNI)
![dfddcc57-0b84-46e4-96fc-b112f9496443](https://github.com/user-attachments/assets/0094ff1f-826e-4959-a7f0-52df199bcc98)

### 3. **Detalles de las Rutas**


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
