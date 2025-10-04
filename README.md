# 🚀 BlogSphere-API

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

</div>

## 🌟 Descripción

Una API REST moderna y robusta diseñada para potenciar plataformas de blogging colaborativas. Ofrece un sistema completo de gestión de contenido donde los usuarios pueden expresar sus ideas, interactuar con la comunidad y construir su presencia digital.

---

## ✨ Características Principales

<div align="center">

| Funcionalidad | Descripción |
|------------------|----------------|
| **Gestión de Posts** | Crear, editar, eliminar y visualizar publicaciones propias y de otros usuarios |
| **Búsqueda Inteligente** | Encontrar usuarios rápidamente mediante búsquedas por nombre |
| **Sistema de Comentarios** | Interactuar con publicaciones mediante comentarios gestionables |
| **Perfiles Personalizables** | Biografía, foto de perfil y información personalizable |

</div>

---

## 🛠 Stack Tecnológico

<div align="center">

### **Tecnologías Principales**

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)

### **Herramientas y Utilidades**

![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=jsonwebtokens)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white)

</div>

---

## 🚀 Instalación

### **Instalación Rápida**

```bash
# 1. Clonar el repositorio
git clone https://github.com/RitoTorri/Api-Rest-Blog

# 2. Navegar al directorio
cd BlogSohere-API

# 3. Instalar dependencias
yarn install

# 5. Ejecutar la aplicación
yarn dev
```
---

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto con:

```env
# Servidor
PORT=3000

# Base de Datos
HOST_DB=localhost
PORT_DB=5432
NAME_DB=blog_database
USER_DB=tu_usuario
PASSWORD_DB=tu_contraseña

# Seguridad
ACCESS_KEY=tu_clave_secreta_jwt
```

---

## 🗃️ Código de la base de datos 

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    photo TEXT,
    biography TEXT,
    active BOOLEAN DEFAULT TRUE,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    author_post VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    photo TEXT,
    active BOOLEAN DEFAULT TRUE,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- FOREIGN KEY con CASCADE para actualizaciones
    CONSTRAINT fk_posts_author 
        FOREIGN KEY (author_post) 
        REFERENCES users(email) 
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    author_comment VARCHAR(255) NOT NULL,
    post_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- FOREIGN KEY para el autor con CASCADE
    CONSTRAINT fk_comments_author 
        FOREIGN KEY (author_comment) 
        REFERENCES users(email) 
        ON UPDATE CASCADE 
        ON DELETE CASCADE,
    
    -- FOREIGN KEY para el post
    CONSTRAINT fk_comments_post 
        FOREIGN KEY (post_id) 
        REFERENCES posts(id) 
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_author ON posts(author_post);
CREATE INDEX idx_posts_date ON posts(date_created);
CREATE INDEX idx_comments_post ON comments(post_id);
CREATE INDEX idx_comments_author ON comments(author_comment);
```
---

## 📚 Documentación de la API

<div align="center">

### **Acceso a la Documentación Interactiva**

![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

**Una vez ejecutes la aplicación, visita:**
```
http://localhost:3000/api-docs
```
</div>

---

## 🐛 Reportar Issues y Contribuir

<div align="center">

¡Tu contribución es **bienvenida y valorada**! 🎁

</div>

---

**¿Te gusta este proyecto?**  
¡Dale una ⭐ en GitHub!
