# InnovaLab - API Backend

Servicio de backend para la plataforma de InnovaLab (Equipo 2), desarrollado en Node.js utilizando TypeScript, bajo una arquitectura modular y configurado nativamente con ES Modules (ESM).

El entorno de ejecución está completamente contenerizado, lo que significa que **no se necesita tener instalado los programas localmente** para ejecutar la aplicación.

---

## Requisitos previos (Mínimos)

Para clonar y ejecutar el proyecto de la forma más limpia posible, se necesita:

1. **Docker**.
2. **Docker Compose**.
3. **Git**.

---

## Inicialización con Docker

### Clonar el repositorio

```sh
# Clonar repositorio
git clone <repo>

# Ir al repositorio
cd backend
```

### Configurar variables de entorno

El contenedor requiere ciertas variables en memoria para iniciar. Se debe crear un archivo local a partir de la plantilla:

```sh
cp .env.example .env
```

Se abre el archivo `.env` creado y se definen los valores necesarios, por ejemplo `PORT=3000`.

### Levantar el ecosistema

Ejecutar en la raíz del proyecto:

```sh
# Ejecutar aplicación en segundo plano
docker compose up -d --build
```

## Comandos útiles de Docker Compose

| **Acción**     | **Comando**              | **Descripción**                                                     |
| -------------- | ------------------------ | ------------------------------------------------------------------- |
| **Ver logs**   | `docker compose logs -f` | Muestra la salida de consola y peticiones de Express en tiempo real |
| **Ver estado** | `docker compose ps`      | Verifica que el contenedor esté corriendo y el puerto bien mapeado  |
| **Reiniciar**  | `docker compose restart` | Reinicia de forma segura los servicios de la aplicación             |
| **Apagar**     | `docker compose down`    | Apaga y remueve el contenedor, liberando la memoria del equipo      |

---

## Entorno de desarrollo local (opcional)

Para desarrollar el proyecto y correr los tests o el linter directamente de forma nativa en el equipo (sin usar Docker), se requiere Node.js v24.15.0 o superior y seguir estos pasos:

### Instalación de dependencias locales

```sh
npm install
```

#### Scripts disponibles en `package json`

- `npm run dev`: Levanta el servidor de desarrollo local usando `tsx` con _hot-reload_ continuo al guardar archivos.
- `npm run format`: Aplica un formateo estricto sobre todo el código usando **Prettier**.
- `npm run lint`: Valida el tipado con `tsc` y analiz la cantidad de código con **ESLint**.
- `npm test`: Ejecuta la suite de pruebas unitarias de forma interactiva con **Vitest**.
- `npm run coverage`: Genera un reporte matemático completo de la cobertura de código en la consola.

---

## Stack tecnológico principal

- **Runtime**: Node.js v24.15.0 (Alpine Linux para el contenedor de producción).
- **Framework**: Express v5 (Con manejo de rutas nativo).
- **Seguridad y logs**: `helmet` para protección de cabeceras HTTP, `cors` para el control de acceso de orígenes, y `morgan` como logger de peticiones.
- **Linter y formateador**: ESLint v10 (`typescript-eslint` estricto + `eslint-plugin-perfectionist`) acoplado con Prettier v3.
- **Testing**: Vitest v4 con soporte nativo de ES Modules y reportes de cobertura (`@vtest/coverage-v8`).
