# 📝 API Blog - Documentación

## 🌟 Descripción
Esta es una API REST que permite gestionar un sistema de blog donde los usuarios pueden publicar posts, comentar y ver perfiles de otros usuarios.

## 🚀 Funcionalidades
- ✍️ **Gestión de Posts**: Subir, editar, eliminar y ver tus posts y los de otros usuarios
- 🔍 **Búsqueda de Usuarios**: Buscar otros usuarios por sus nombres
- 💬 **Comentarios**: Comentar y eliminar tus comentarios en posts de otros usuarios

## 🛠 Tecnologías Implementadas
- **JavaScript** - Lenguaje de programación
- **PostgreSQL** - Base de datos relacional
- **JWT** - Autenticación por tokens

## 📥 Instalación

### Prerrequisitos
- Node.js instalado
- PostgreSQL instalado y ejecutándose
- Yarn o npm

### Pasos de instalación
```bash
# Clonar el repositorio
git clone https://github.com/RitoTorri/Api-Rest-Blog

# Navegar al directorio
cd Api-Rest-Blog

# Instalar dependencias
yarn install

# Ejecutar la aplicación
yarn dev
```

Al ejecutar la aplicación, se mostrará una URL que te llevará a la documentación completa de la API con todos los endpoints disponibles para probar.

## ⚙️ Configuración

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
HOST_DB=localhost
PORT_DB=5432
NAME_DB=Database
USER_DB=user
PASSWORD_DB=password
ACCESS_KEY=hey_secret
```

## 🗃️ Estructura de la Base de Datos

### 👥 Tabla: users
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | SERIAL | Identificador único |
| email | VARCHAR | Correo electrónico |
| password | VARCHAR | Contraseña encriptada |
| name | VARCHAR | Nombre del usuario |
| lastname | VARCHAR | Apellido del usuario |
| photo | TEXT | URL de la foto de perfil |
| biography | TEXT | Biografía del usuario |
| active | BOOLEAN | Estado del usuario |
| date_created | TIMESTAMP | Fecha de creación |

### 📄 Tabla: posts
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | SERIAL | Identificador único |
| author_post | VARCHAR | Email del autor (FK a users) |
| title | VARCHAR | Título del post |
| content | TEXT | Contenido del post |
| active | BOOLEAN | Estado del post |
| date_created | TIMESTAMP | Fecha de creación |

### 💬 Tabla: comments
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | SERIAL | Identificador único |
| author_comment | VARCHAR | Email del autor (FK a users) |
| post_id | INTEGER | ID del post comentado (FK a posts) |
| content | TEXT | Contenido del comentario |
| active | BOOLEAN | Estado del comentario |
| date_created | TIMESTAMP | Fecha de creación |

## 🔌 Endpoints de la API

### 🔐 Autenticación

#### `POST /blog/api/login`
**Iniciar sesión de usuario**

**Body:**
```json
{
  "email": "mi@email.com",
  "password": "miPassword"
}
```

**Respuestas:**
- `200`: Token de autenticación generado
- `400`: Faltan credenciales o contraseña incorrecta
- `404`: Usuario no encontrado
- `422`: Error en formato de datos

### 👤 Registro

#### `POST /blog/api/register`
**Registrar nuevo usuario**

**Body:**
```json
{
  "email": "mi@email.com",
  "password": "miPassword",
  "name": "Mi nombre",
  "lastname": "Mi apellido"
}
```

**Respuestas:**
- `201`: Usuario creado exitosamente
- `400`: Faltan parámetros requeridos
- `409`: El email ya existe
- `422`: Error en formato de datos

### 📝 Posts

#### `GET /blog/api/posts/me`
**Obtener posts del usuario autenticado**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Respuestas:**
- `200`: Lista de posts del usuario
- `400`: Token faltante
- `401`: Formato de token incorrecto
- `404`: Usuario no encontrado

#### `POST /blog/api/posts`
**Crear un nuevo post**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Body:**
```json
{
  "title": "Este es un título de ejemplo",
  "content": "Este es un contenido de ejemplo"
}
```

**Respuestas:**
- `201`: Post creado exitosamente
- `400`: Faltan datos requeridos
- `404`: Usuario no existe
- `422`: Error en formato de datos

#### `PATCH /blog/api/posts/{id_post}`
**Actualizar un post existente**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Body:**
```json
{
  "title": "Mi nuevo título",
  "content": "Mi nuevo contenido"
}
```

**Respuestas:**
- `200`: Post actualizado exitosamente
- `404`: Post no encontrado
- `409`: No eres el autor del post

#### `DELETE /blog/api/posts/{id_post}`
**Eliminar un post**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Respuestas:**
- `200`: Post eliminado exitosamente
- `404`: Post no encontrado

### 💬 Comentarios

#### `GET /blog/api/posts/comments/{post_id}`
**Obtener comentarios de un post**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Respuestas:**
- `200`: Lista de comentarios del post
- `404`: Post no encontrado

#### `POST /blog/api/users/comment/{post_id}`
**Crear un comentario en un post**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Body:**
```json
{
  "author_comment": "jesus@gmail.com",
  "content": "Te quedo mal. :D"
}
```

**Respuestas:**
- `201`: Comentario creado exitosamente
- `404`: Post o usuario no encontrado

#### `DELETE /blog/api/users/comment/{id_comment}`
**Eliminar un comentario**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Respuestas:**
- `200`: Comentario eliminado exitosamente
- `404`: Comentario no encontrado

### 👥 Usuarios

#### `GET /blog/api/users/search/{name}`
**Buscar usuarios por nombre**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Respuestas:**
- `200`: Lista de usuarios encontrados
- `400`: Nombre de búsqueda faltante

#### `PATCH /blog/api/users/edit/profile`
**Actualizar perfil de usuario**

**Headers:**
```
Authorization: Bearer eyJJIUz...
```

**Body:**
```json
{
  "email": "jesus@gmail.com",
  "name": "Jesus",
  "lastname": "Cortez",
  "biography": "Mi biografía",
  "photo": "https://ejemplo.com/foto.jpg"
}
```

**Respuestas:**
- `200`: Perfil actualizado (incluye nuevo token)
- `409`: El email ya está en uso

## 🐛 Reportar Bugs y Contribuir

¡Tu feedback es valioso! Si encuentras algún bug o tienes sugerencias para mejorar la API:

1. Clona el repositorio
2. Prueba las funcionalidades
3. Reporta cualquier issue que encuentres
4. ¡Contribuye con mejoras!

