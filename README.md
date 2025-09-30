# 🚀 API Blog - Sistema de Gestión de Contenidos

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

</div>

## 🌟 Descripción

Una **API REST moderna y escalable** que potencia un sistema de blog completo donde los usuarios pueden crear, compartir e interactuar con contenido de manera segura y eficiente.

---

## ✨ Características Principales

<div align="center">

| 🎯 Funcionalidad | 📋 Descripción |
|------------------|----------------|
| **✍️ Gestión de Posts** | Crear, editar, eliminar y visualizar publicaciones propias y de otros usuarios |
| **🔍 Búsqueda Inteligente** | Encontrar usuarios rápidamente mediante búsquedas por nombre |
| **💬 Sistema de Comentarios** | Interactuar con publicaciones mediante comentarios gestionables |
| **👤 Perfiles Personalizables** | Biografía, foto de perfil y información personalizable |

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

## 🚀 Comenzando

### **Prerrequisitos**

- 📦 **Node.js** (versión 18 o superior)
- 🐘 **PostgreSQL** (versión 16 o superior)
- 🧶 **Yarn** o **npm**

### **Instalación Rápida**

```bash
# 1. Clonar el repositorio
git clone https://github.com/RitoTorri/Api-Rest-Blog

# 2. Navegar al directorio
cd Api-Rest-Blog

# 3. Instalar dependencias
yarn install

# 4. Configurar variables de entorno
cp .env.example .env

# 5. Ejecutar la aplicación
yarn dev
```

🎉 **¡Listo!** La aplicación estará corriendo y podrás acceder a la documentación interactiva.

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

## 🗃️ Esquema de Base de Datos

### **👥 Tabla: Users**
| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| `id` | SERIAL | PRIMARY KEY | Identificador único |
| `email` | VARCHAR(255) | UNIQUE, NOT NULL | Correo electrónico |
| `password` | VARCHAR(255) | NOT NULL | Contraseña encriptada |
| `name` | VARCHAR(100) | NOT NULL | Nombre del usuario |
| `lastname` | VARCHAR(100) | NOT NULL | Apellido del usuario |
| `photo` | TEXT | NULL | URL de la foto de perfil |
| `biography` | TEXT | NULL | Biografía del usuario |
| `active` | BOOLEAN | DEFAULT true | Estado de la cuenta |
| `date_created` | TIMESTAMP | DEFAULT NOW() | Fecha de creación |

### **📄 Tabla: Posts**
| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| `id` | SERIAL | PRIMARY KEY | Identificador único |
| `author_post` | VARCHAR(255) | FOREIGN KEY | Email del autor |
| `title` | VARCHAR(255) | NOT NULL | Título del post |
| `content` | TEXT | NOT NULL | Contenido del post |
| `photo` | TEXT | NULL | URL de la imagen |
| `active` | BOOLEAN | DEFAULT true | Estado del post |
| `date_created` | TIMESTAMP | DEFAULT NOW() | Fecha de creación |

### **💬 Tabla: Comments**
| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| `id` | SERIAL | PRIMARY KEY | Identificador único |
| `author_comment` | VARCHAR(255) | FOREIGN KEY | Email del autor |
| `post_id` | INTEGER | FOREIGN KEY | ID del post |
| `content` | TEXT | NOT NULL | Contenido del comentario |
| `active` | BOOLEAN | DEFAULT true | Estado del comentario |
| `date_created` | TIMESTAMP | DEFAULT NOW() | Fecha de creación |

---

## 📚 Documentación de la API

<div align="center">

### **🔗 Acceso a la Documentación Interactiva**

![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

**Una vez ejecutes la aplicación, visita:**
```
http://localhost:3000/api-docs
```

### **✨ Características de la Documentación**

| 🎯 | Característica |
|----|----------------|
| ✅ | **Siempre actualizada** con el código |
| 🧪 | **Pruebas en tiempo real** desde el navegador |
| 📖 | **Documentación completa** de todos los endpoints |
| 🔐 | **Autenticación integrada** para pruebas seguras |

</div>

---

## 🐛 Reportar Issues y Contribuir

<div align="center">

¡Tu contribución es **bienvenida y valorada**! 🎁

</div>

### **Proceso de Contribución**

1. **🔍 Prueba la API** - Asegúrate de replicar el issue o probar la nueva funcionalidad
2. **📝 Reporta claramente** - Incluye pasos específicos para reproducir
3. **💡 Propone soluciones** - Sugiere fixes o mejoras
4. **🚀 Envía PRs** - Contribuye directamente con código

### **Áreas de Mejora**
- 🔒 **Seguridad**: Mejoras en autenticación y autorización
- 🚀 **Rendimiento**: Optimización de consultas y respuesta
- 📊 **Nuevas Features**: Funcionalidades adicionales
- 🐛 **Bug Fixes**: Corrección de issues existentes

---

<div align="center">

## 📞 Soporte

**¿Preguntas o problemas?**  
Abre un *issue* en el repositorio o contacta al mantenedor.

---

**¿Te gusta este proyecto?**  
¡Dale una ⭐ en GitHub!

</div>

---

<div align="center">

### **Desarrollado con ❤️ y las mejores tecnologías**

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white)

</div>
