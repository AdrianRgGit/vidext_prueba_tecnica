# Reproductor de videos - Prueba Técnica

## Índice:

- [Resumen](#resumen)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Requisitos](#requisitos)
  - [Requisitos funcionales](#requisitos-funcionales)
  - [Requisitos técnicos](#requisitos-técnicos)
  - [Características adicionales](#características-adicionales)
- [Cómo usarla](#cómo-usarla)
- [Documentación de la API](#documentación-de-la-api)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Mejoras futuras](#mejoras-futuras)
- [Comandos útiles](#comandos-útiles)
  - [Aplicación](#aplicación) 
  - [Prisma](#prisma)

## Resumen

Este proyecto es un reproductor de videos desarrollado como parte de una prueba técnica. La aplicación incluye un reproductor de videos con contador de visualizaciones y de "me gusta", un API para almacenar y recuperar datos de videos, y una lista de videos para que los usuarios puedan seleccionar y reproducir.

La aplicación está construida con Next.js, utiliza Tailwind CSS para estilos y Shadcn para la consistencia en el diseño. tRPC se emplea para la comunicación de API con seguridad de tipos entre el cliente y el servidor.

![Vista proyecto escritorio](/public/images/readme/vid_desktop.gif)

![Vista proyecto móvil](/public/images/readme/vid_mobile.gif)

## Teconlogías utilizadas

- Next.js 15 - Framework de React para producción.
- Tailwind CSS - Framework de CSS utility-first para estilos.
- Shadcn - Provee componentes UI con CSS utility-first.
- tRPC - Para llamadas de API seguras en tipos entre cliente y servidor.
- TypeScript - Tipado estático y mejora en experiencia de desarrollo.

## Requisitos

En el enunciado de la prueba técnica, se requería una serie de puntos los cuales se han completado:

### Requisitos funcionales

- Página para ver videos, que incluye:
  - Conteo y visualización de las visualizaciones de un video. ✅
  - Conteo y visualización de los "me gusta". ✅
- Endpoint de API para almacenar y recuperar datos de video. ✅
- Componentes estilizados con Tailwind CSS y Shadcn. ✅
- Lista de videos para que los usuarios puedan explorar y seleccionar. ✅

### Requisitos técnicos

- Configuración de la Aplicación con Next.js - Construida desde cero utilizando enrutamiento nativo y acciones en el servidor. ✅
- API con tRPC - Exposición de endpoints para recuperar y almacenar datos. ✅
- Manejo de Errores - Muestra de estados de carga y errores para las llamadas a la API. ✅

### Características adicionales

- Controles avanzados en el reproductor de video:
  - Ajuste de velocidad de reproducción. ✅
  - Control de línea de tiempo. ✅
  - Alternar pantalla completa. ✅

## Cómo usarla

1. Clona el repositorio

```bash
git clone https://github.com/AdrianRgGit/vidext_prueba_tecnica.git
cd vidext_prueba_tecnica
```

2. Instalar dependencias

```bash
npm i
```

3. Crear los seeds

```bash
npm run seed
```

4. Lanzar el servidor

```bash
npm run dev
```

5. Acceder a la ruta

```bash
http://localhost:3000
```

## Documentación de la API

**GET /api/trpc/getVideos?batch=1&input=%7B%7D** - Recupera todos los videos

**POST /api/trpc/likeVideo?batch=1** - Da like a un video

**POST /api/trpc/viewVideo?batch=1** - Da una visualización al video

## Estructura del proyecto

![Estructura del proyecto](/public/images/readme/estructura_proyecto.png)

## Mejoras futuras

- Mejor uso de Shadcn. Aunque lo he utilizado en la aplicación, sé que esta biblioteca tiene mucho potencial y podría hacer la mayoría de componentes con ella y así dar más seguridad y optimización a mi proyecto. Debido a todo lo ocurrido, no tuve mucho tiempo de indagar a fondo en esta biblioteca, lo cual he utilizado lo más básico (aunque funcional) y otros componentes los he hecho yo mismo.

- Manejo de Errores Mejorado. Proveer mensajes de error más amigables y un sistema de logging detallado para facilitar la depuración.

- Accesibilidad. Asegurar que el reproductor y otros componentes sean accesibles mediante mejoras en la navegación por teclado.

## Comandos útiles

### Aplicación
Lanzar servidor

```bash
npm run dev
```

### Prisma
Generar la base de datos y la pirmera migración

```bash
npx prisma migrate dev --name init
```

Generar una migración

```bash
npx prisma generate
```

Generar datos para rellenar la base de datos

```bash
npm run seed
```

Prisma Studio

```bash
npx prisma studio
```
