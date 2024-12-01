
# TP Final de Backend

Integrantes:
-
- Cristian Velázquez (devs)
- Jean Pierre Michel Kong (devs)

Primeramente mapeamos y estructuramos el proyecto de acuerdo a las consignas:

Comenzando externamente, tenemos el readme que seria este archivo que documentaria todo el proceso, pensamiento y estruturacion que llevamos acabo en el proyecto

**1) dependencias:**
    hemos implementado dependecias necesarias como para desarrollo, que vendrian a ser las siguientes:
    
    1. "bcrypt": "^5.1.1",
    2. "cors": "^2.8.5",
    3. "dotenv": "^16.4.5",
    4. "express": "^4.21.1",
    5. "jsonwebtoken": "^9.0.2",
    6. "method-override": "^3.0.0",
    7. "mongoose": "^8.8.3",
    8. "nodemon": "^3.1.7"

**2) gitignore:**
    Puesto como entorno de desarrollo, evita la descarga de las dependencias subidas al github

**3) .env:**
    Archivo que contiene variables de entorno, en este caso hace la conexión con MongoDB Atlas

**4) src:**
    Contiene toda la lógica del proyecto

---
Dentro de src
=

**1) controllers:**
    Contiene 2 archivos js que cumplen la funcion respectiva a su nombre, teniendo auth toda la funcionalidad de register, login, profile y logout. Por otro lado, movieController vendria a tener funciones referentes a mostrar, crear, actualizar y eliminar peliculas.

**2) db:**
    Conecta con la base de datos MongoDB

**3) middleware:**
    Se encarga de la verificación de los usuarios mediante token en las rutas que requieran de esta misma información, permitiendo o impidiendo la ejecucion de anteriores funcionalidades mencionadas.

**4) models:**
    Se encargan de predefinir los modelos a usar en las rutas, comenzando con la importacion de la base de datos, luego define el esquema para que al final sea exportado. La unica diferencia es que el "user.js", antes de guardarse como usuario, hashea la contraseña para mejorar la seguridad en la base de datos

**5) routes:**
    Carpeta donde se separan en 2 archivos las rutas e importaciones necesarias para su uso.

**6) app.js:**
    javascript que justamente, cumple la función de levantar el servidor con la adición de contener tanto las rutas necesarias como la base de dato atlas.

---
Manual de uso:
=
**Detalles Importantes**

- Siempre se mantendrá la misma base para la ruta: http://localhost:3000/

- Se partirá en 2 ramas donde podra navegar tanto la autenticacion como las peliculas

  1. Auth: http://localhost:3000/auth/
  2. Movies: http://localhost:3000/movies/

- A lo largo del manual se mantendrá este mismo esquema para cada uso, partiende siempre desde el final.

- Se partira de forma descendente con esta estructura (a modo de ejemplo visual):
```
URL: http://localhost:3000/auth/
Tipo: GET
Header > Authorization: TokenDeEjemploParaValidaciones
Body:   {
            "title": "Deadpool",
            "genre": "Accion",
            "year": 2017,
            "rating": 10
        }
```
- (Se deberá crear una nueva lista en el header que permite la autorizacion por token donde se vea necesario)


AuthRoutes.js:
=
- **para validar la funcionalidad de las siguientes rutas, hay que tener en cuenta los siguientes aspectos:**

  1) Todo usuario puede registrarse siempre y cuando proporcione los datos correctamente (email y password)
  2) No se podra acceder a ninguna funcionalidad si no se está logueado, debido al token
  3) Una vez logueado, se le proporcionara al usuario un token con el que navegara



### Register:
```
URL: http://localhost:3000/auth/register
Tipo: POST
Body:
  {
    "email": "test@gmail.com",
    "password": "test"
  }
```


### Login:
```
URL: http://localhost:3000/auth/login
Tipo: POST
Body:
  {
    "email": "test@gmail.com",
    "password": "test"
  }
```
_**Nota adicional**: a la hora de registrarse, se creará un token que permitirá el acceso a ciertas funcionalidades, en este manual se usará el siguiente token a modo de ejemplo: TokenDeEjemploParaValidaciones_



### Profile:
```
Tipo: GET
URL: http://localhost:3000/auth/profile
Header > Authorization: TokenDeEjemploParaValidaciones
```


### Logout:
```
URL: http://localhost:3000/auth/logout
Tipo: POST
Header > Authorization: TokenDeEjemploParaValidaciones
```


movieRoutes.js
=

Mantiene los mismo aspectos abarcados anteriormente, solo que con el único cambio de la URL, pasando de "auth" a "movies"

### Mostrar peliculas:
```
URL: http://localhost:3000/movies/
Tipo: GET
Header > Authorization: TokenDeEjemploParaValidaciones
```

### Mostrar pelicula por id:
```
URL: http://localhost:3000/movies/idDePeliculaAModoDeEjemplo
Tipo: GET
Header > Authorization: TokenDeEjemploParaValidaciones
```
_**Nota adicional**: El id de la pelicula corresponde al URL, donde se reemplazara el texto de ejemplo_



### Agregar Pelicula:
```
URL: http://localhost:3000/movies/agregar
<p>Tipo: POST</p>
Header > Authorization: TokenDeEjemploParaValidaciones
Body:
  {
    "title": "Pelicula Increible",
    "genre": "Comedia",
    "year": 2000,
    "rating": 5
  }
```


### Cambiar Pelicula:
```
URL: http://localhost:3000/movies/idDePeliculaAModoDeEjemplo
Tipo: PUT
Header > Authorization: TokenDeEjemploParaValidaciones
Body:
  {
    "title": "Pelicula Increible",
    "genre": "Comedia",
    "year": 1999,
    "rating": 10
  }
```
_**Nota adicional**: Se toma de referencia la anterior pelicula agregada para cambiarles datos como "year" y "rating", ademas, se identifica el tipo de pelicula a cambiar por su id en la URL_



### Borrar Pelicula:
```
URL: http://localhost:3000/movies/idDePeliculaAModoDeEjemplo
Tipo: DELETE
Header > Authorization: TokenDeEjemploParaValidaciones
```
---
Fin de Manual de uso
=

**Bibliografía utilizada**:

- _CRUD ThunderCliente_: https://www.youtube.com/watch?v=HZx5X3s_Jl4&ab_channel=FaztCode
- _Middleware explicacion_: https://www.youtube.com/watch?v=I1PaaSSAbi4&ab_channel=MartínGesualdo
- _Ruteo controllers_: https://www.youtube.com/watch?v=fG0p5WONxGg&ab_channel=DorianDesings
