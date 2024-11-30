# Comandos de la terminal

- `mkdir`: Crea un directorio/carpeta
- `cd`: Cambia de directorio/carpeta
- `cd + TAB`: Muestra los directorios/carpeta que se encuentran en la ruta actual

```bash
New-Item -Path . -Name "archivo.js" -ItemType "File"
```

- `Path .`: Indica que el archivo se crea en el directorio actual.
- `Name "archivo.js"`: Especifica el nombre del archivo (puedes cambiar "archivo" por el nombre que desees).
- `ItemType "File"`: Define que estás creando un archivo.

# Crear proyecto con node

1. Nos paramos en la carpeta donde queremos crear nuestro proyecto
2. Vamos a elegir nuestro manejador de paquetes de preferencia

- `npm`
  - `npm init -y`: Para inicializar el proyecto
- `pnpm`
  - `pnpm init`: Para inicializar el proyecto
- `yarn`
  - `yarn init -y`: Para inicializar el proyecto
