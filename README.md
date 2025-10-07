# Property List

## 1️⃣ Información general

**Nombre del proyecto:** Property List  

**Descripción:**  
El objetivo principal de esta prueba es recrear el diseño Figma proporcionado y añadir nuevas funcionalidades, adaptándolo también a diferentes dispositivos (mobile y desktop).

**Tecnologías principales usadas:**

- React + Vite
- Tailwind CSS

**Estado del proyecto:**  
En desarrollo

---

## 2️⃣ Instalación y ejecución

**Para instalar el proyecto en local:**

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Entrar en la carpeta del proyecto
cd property-list

# Instalar dependencias
npm install


3️⃣ Funcionalidades principales

Sidebar responsive: diseño adaptado para desktop y mobile.
Enlaces interactivos: mejoran la experiencia de usuario.
Tabla responsive: microinteracciones al pasar el cursor o hacer click en las filas.
Modal dinámico: muestra detalles de propiedades al interactuar con la tabla.

4️⃣ Estructura del proyecto / arquitectura

El proyecto sigue una organización modular para separar lógica, presentación y datos:
src/
├─ assets/               # Imágenes e iconos
├─ components/
│  ├─ data/              # Datos estáticos (properties.json)
│  ├─ features/          # Componentes principales con lógica y UI (Tabla, Sidebar, Header, Footer)
│  ├─ layout/            # Contenedores generales (MainContainer)
│  ├─ ui/                # Componentes UI reutilizables (AddPropertyButton)
├─ App.jsx               # Componente raíz
├─ main.jsx              # Entrada principal
├─ index.css / App.css    # Estilos globales



**Patrones y convenciones aplicadas:**
Separación de lógica y presentación mediante componentes y features/.

## 5️⃣ Desafíos encontrados y cómo los resolviste

Este proyecto ha sido un gran desafío que he disfrutado enormemente.  
Los principales retos que he afrontado fueron:

- Trabajar directamente con **Tailwind CSS**, viniendo de un perfil de diseño de producto digital.  
- Crear un **diseño completamente responsive** y funcional para mobile y desktop.  
- Diseñar soluciones óptimas para la versión mobile de la aplicación, especialmente en la organización de la tabla y el sidebar.

Todos estos desafíos, junto con los pequeños problemas del día a día, los he podido resolver gracias a la **asistencia de la IA**, que ha acelerado mi curva de aprendizaje y me ha servido como herramienta para llevar a cabo el proyecto de manera eficiente y con buenas prácticas.

> ⚠️ Nota sobre el repositorio:  
> Como curiosidad, en el repositorio pueden aparecer dos perfiles distintos, ya que trabajé desde dos ordenadores diferentes. ¡Soy yo! Simplemente que tuve que seguir desde el ordenador personal del trabajo, y al hacer commit la noche anterior pude descargarme el proyecto sin problemas.


6️⃣ Mejoras que harías con más tiempo disponible

- Si tuviera más tiempo, me gustaría:
- Refinar la tabla responsive, completando la solución que había diseñado para que funcione de manera óptima en todas las pantallas.
- Mejorar detalles de microinteracciones y optimización del layout mobile.
- Este proyecto me ha permitido enfrentarme a retos propios de un perfil junior en front-end, y aunque me preocupaba en algunos momentos mi capacidad para implementarlo, lo he llevado con ilusión y ganas. Ha sido una experiencia muy enriquecedora para aprender y crecer profesionalmente.


Espero que os guste el proyecto y que se note el esfuerzo y la ilusión que he puesto en él. Esta prueba ha supuesto toda una motivación que hacía tiempo que no tenía y me gustaría recalcar lo dispuesto que estoy a seguir creciendo y aprendiendo junto a vuestro equipo. Muchas gracias!
