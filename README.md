# 📝 API Blog - Documentación

## 🌟 Descripción
Esta es una API REST que permite gestionar un sistema de blog donde los usuarios pueden publicar posts, comentar y ver perfiles de otros usuarios.

## 🚀 Funcionalidades
- ✍️ **Gestión de Posts**: Subir, editar, eliminar y ver tus posts y los de otros usuarios
- 🔍 **Búsqueda de Usuarios**: Buscar otros usuarios por sus nombres
- 💬 **Comentarios**: Comentar y eliminar tus comentarios en posts de otros usuarios

## 🛠 Tecnologías Implementadas
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-336791?style=for-the-badge&logo=postgresql)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express)

## 📥 Instalación

### Prerrequisitos
- Node.js instalado
- PostgreSQL instalado y ejecutándose
- Yarn o npm

### Pasos de instalación
```bash
# Clonar el repositorio
git clone https://github.com/RitoTorri/Api-Rest-Blog

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
| photo | TEXT | URL de la foto del post |
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

## 🐛 Reportar Bugs y Contribuir

¡Tu feedback es valioso! Si encuentras algún bug o tienes sugerencias para mejorar la API:

1. Clona el repositorio
2. Prueba las funcionalidades
3. Reporta cualquier issue que encuentres
4. ¡Contribuye con mejoras!
