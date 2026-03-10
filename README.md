# GithubActionsExample-recetas
Ejemplo de uso de Github Actions para la automatización del proceso de revisión de HTML para la asignatura 03102-Administración de Sitios Web

# Pasos para la configuración 
## Paso 1
Se debe añadir una carpeta .github en el repositorio, en esta se crea una carpeta llamada workflows y dentro de esta se añade un archivo .yaml con la configuración del workflow
![Directorio usado para el almacenamiento del archivo .yaml](/imgs/directorio.png)

## Paso 2
En el archivo .yaml se añadirán los pasos del flujo de trabajo, en este caso es el de validar un html. A continuación se muestra la configuración usada:

```yaml
#Nombre del workflow: Validar HTML
name: Validar HTML
#Evento que desencadena el workflow: cada vez que se hace un push al repositorio
on: [push]
#Este es el proceso que se ejecutará cuando se desencadene el evento
jobs:
  validate:
    runs-on: ubuntu-latest
    #Pasos que se ejecutarán en el proceso
    steps:
      #Descargar el repositorio para poder validar el HTML
      - name: Clonar repositorio
        uses: actions/checkout@v3
      #Se analiza los archivos .html con este validador de HTML de la ruta que uno elija
      - name: Validar HTML
        uses: Cyb3r-Jak3/html5validator-action@v8.0.0
        with:
          root: .
```

## Paso 3
Crear el archivo html a revisar y hacer un push a la rama principal

## Paso 4
Una vez se hace push este automáticamente realiza la validación y lo muestra en la pestaña de actions en el repositorio de GitHub

![Pestaña Actions en GitHub](/imgs/GitHub%20Actions.png)
![Detalle de la acción](/imgs/detalle%20action.png)
![Detalle de la validación con los errores encontrados](/imgs/Validacion.png)

# Qué resuelve el workflow
Gracias a este workflow los archivos html del proyecto pueden ser revisados y determinar si tienen algún error que deba ser revisado y que puede llegar a generar errores en producción.
De esta forma se puede reducir los errores de software que lleguen al usuario final, aumentando la calidad del producto desarrollado.
