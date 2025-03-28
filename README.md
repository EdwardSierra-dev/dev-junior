# dev-junior

## Week 1: React Basics and Core Concepts

### - What is React? Why use React?

React es una biblioteca-libreria :books: de JavaScript, es open source y fue creado para diseñar interfaces de usuario.

- ### Ventajas
  - Facil de aprender y usar
  - Usamos componentes reutilizables.
  - Creación de aplicaciones y web dinámicas.
  - Buen performance. React solo actualiza las partes de la aplicación que se deben actualiar.
 
## Conceptos Básicos

- ### Crear proyecto con vite

1. Crea una nueva carpeta o folder donde vamos a guardar el proyecto.
2. Abre la terminal el folder que creaste.
3. Ejecuta este comando```npm create vite@latest NOMBRE-PROYECTO -- --template react```.
  -  Una vez ejecutado el comando anterior se debe crear la carpeta y los archivos del proyecto automáticamente.
```
  cd NOMBRE_CARPETA
  npm install
  npm run dev
```


- ### Componente

  Es una parte de la GUI, es un elemento independiente y reusable. Cada componente tiene un estado y una funcionalidad especifica que son totalmente independiente de otros componentes. Podemos reutilizar nuestros componente las veces que necesitamos.

- ### Componentes Funcionales

Es una función de JavaScript, la función retorna un elemento de React.

```jsx
function Saludo(props) {
  return <h1>!Hola, {props.nombre}!</h1>;
}
```
- El componente debe retornar un elemento de React.
- El nombre del componente debe empezar en mayúscula.
- Puede recibir valores si es necesario (```props```).
  - Los props solo pueden ser usados padre -> hijo.
 
- ### Componentes de Clase

Es una clase de ES6 que retorna un elemento de JSX.

```jsx
class Saludo extends React.Component {
  render () {
    return <h1>!Hola, {this.props.nombre}!</h1>;
  }
}
```
- Debe extender ```React.Component```.
- Debe tener el metodo ```render()```.
  - ```render()``` define que es lo que se va a mostrar si usamos nuestro componente.
- Puede recibir valores si es necesario (```props```).
  - Cuando usamos una clase, debemos usar ```this``` que se refiere a ese componente de manera individual.

 - ### Estado

```state``` Son el conjunto de propiedades de un componente y sus valores actuales.

- ### Hooks

Nos permiten agregar ciertos <ins>estados</ins> a nuestros componentes funcionales.
Los hooks son funciones especiales que premiten trabajar con estados de los componentes.

  - useState

```jsx 
const [state, setState] = useState(initialState)
```

- ### Event Listener

Es una función en JS que se ejecuta cuando ocurre un evento especifico. Es una función que se le asigna a un elemento de nuestra aplicación.

```jsx
onClick={() => props.manejarClick(props.children)} >
```

- ### Event Handler


- ### Instalación de paquetes
```jsx
import { AiOutlineCloseCircle } from 'react-icons/ai';  
<AiOutlineCloseCircle className='tarea-icono' />
```
Para llamar los íconos se debe hacer de la misma manera en que utilizamos los componentes, ```<AiOutlineCloseCircle />``` ya que los íconos son componentes de React.


## Week 2: CSS Basics and Core Concepts

