Reto: Control de Mantenimiento de Equipos

-Descripción-
Este proyecto es una aplicación web interactiva desarrollada para gestionar el control de mantenimiento de equipos en un entorno operativo. Permite a los usuarios registrar nuevos equipos, visualizar la lista de dispositivos guardados, actualizar sus datos (fecha de última tevisión y descripción de tareas realizadas) y eliminar registros del sistema de manera dinámica.

La aplicación hace uso avanzado de objetos en JavaScript, manejo dinámico del DOM y formato de fechas mediante el objeto `Date`.

---

-Requisitos Previos-
Para visualizar y utilizar este proyecto no necesitas instalar dependencias locales. Solo requieres:

* Un navegador web moderno (Google, Mozilla, Microsoft, etc.).
* Conexión a Internet para acceder mediante el enlace público de GitHub Pages.
* (Opcional) Si deseas inspeccionar o modificar el código fuente localmente, necesitarás un editor de código como Visual Studio Code y la extensión Live Server.

---

-Intrucciones para Ejecutar y Probar el Proyecto-
Opción 1: Acceso Directo (Recomendado)

1. Haz clic en el enlace de despliegue generado por GitHub Pages:
   https://herrerasolisp-hub.github.io/gestion_mantenimiento_equipos/

2. La aplicación cargará automáticamente en tu navegador con tres equipos registrados por defecto como ejemplo inicial.

Opción 2: Clonar o Descargar desde el repositorio de GitHub

1. Ingresa al repositorio de GitHub del proyecto.
2. Haz clic en el botón verde '<Code>' y selecciona *Download ZIP*.
3. Descomprime la carpeta en tu equipo.
4. Abre el archivo 'index.html' en tu navegador de preferencia o ejecuta el proyecto con la extensión *Live Server* en Visual Studio Code.

---

-Uso de la aplicación-

1. Registrar un nuevo equipo:
   * Completa los campos: "Nombre del equipo", "Fecha de última revisión" y "Descripción del mantenimiento".
   * Haz clic en el botón "Registrar equipo".
   * El sistema validará los datos, actualizará la lista visual y agregará el equipo al menú desplegable.

2. Actualizar la información de un equipo:
   * Selecciona un equipo del menú desplegable ("Seleccionar equipo").
   * Realiza las modificaciones necesarias en el formulario.
   * Haz clic en el botón "Actualizar equipo".

3. Eliminar equipo:
   * Selecciona el equipo a borrar del menú desplegable.
   * Haz clic en el botón "Eliminar equipo".
   * El equipo será removido del registro y del menú desplegable.

---

-Estructura del proyecto-

```text
gestion_mantenimiento_equipos/
├── index.html     # Maquetación HTML5 semántica del formulario, alertas y lista.
├── styles.css     # Estilos CSS3 responsivos para tarjetas, botones y layout.
├── script.js      # Lógica en JavaScript: gestión de objetos, fechas y eventos DOM.
└── README.md      # Documentación y guía de uso del proyecto.

