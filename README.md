# Proyecto "Amigo Secreto"

Este proyecto es una aplicación simple de "Amigo Secreto" construida con HTML, CSS y JavaScript. Permite agregar amigos a una lista, sortearlos aleatoriamente y mostrar el amigo seleccionado.

## Características

- **Agregar amigos**: Los usuarios pueden agregar nombres a la lista de amigos mediante un campo de texto y un botón.
- **Sortear amigo aleatorio**: Una vez que se han agregado amigos a la lista, el sistema puede seleccionar aleatoriamente uno de ellos.
- **Interactividad**: La lista de amigos se actualiza en tiempo real sin necesidad de recargar la página.

## Estructura del Proyecto

El proyecto se organiza en tres archivos principales:

1. **`index.html`**: Contiene la estructura HTML de la página, incluyendo los campos de entrada, botones y las listas de amigos y resultados.
2. **`style.css`**: Define el estilo visual de la página, proporcionando diseño para los botones, listas y otros elementos.
3. **`app.js`**: Contiene el código JavaScript que maneja la lógica de agregar amigos y seleccionar uno aleatorio.

## Funcionalidades

### 1. **Agregar amigos**
Los usuarios pueden ingresar el nombre de un amigo y añadirlo a una lista. El nombre se agrega al arreglo `amigos` y se muestra en la lista de la interfaz web.

### 2. **Seleccionar amigo aleatorio**
Cuando el usuario hace clic en el botón para "Sortear amigo", se selecciona un amigo aleatorio de la lista utilizando la función `seleccionarAmigoAleatorio()`. La selección se realiza mediante el uso de `Math.random()` y `Math.floor()` para generar un índice aleatorio. El amigo sorteado se muestra en la lista de resultados.

## Flujo de trabajo

1. El usuario agrega nombres de amigos en el campo de texto.
2. Cuando se hace clic en el botón **"Añadir"**, el nombre se guarda en el arreglo `amigos` y se actualiza la lista en la página.
3. Luego, el usuario puede hacer clic en **"Seleccionar amigo"** para elegir aleatoriamente un amigo de la lista.
4. El amigo seleccionado se muestra debajo del botón con el texto: "Nombre del amigo ha sido seleccionado."

## Instalación

Este proyecto se puede ejecutar directamente en un navegador sin necesidad de instalaciones adicionales.

### Pasos para ejecutar:

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.

## Dependencias

Este proyecto no requiere dependencias externas. Solo necesitas un navegador web para ejecutar el código.

## Tecnologías

- **HTML**: Estructura básica de la página.
- **CSS**: Estilos y diseño visual.
- **JavaScript**: Lógica para manejar la interactividad (agregar amigos y seleccionar aleatoriamente).

## Contribuciones

Si deseas mejorar este proyecto, siéntete libre de hacer un fork y enviar tus cambios a través de un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo de acuerdo con tus necesidades.
