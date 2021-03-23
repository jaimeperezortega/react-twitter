
import React from 'react';
import { useEffect } from 'react';
import {getLatestTweets} from '../../api/tweets';

//Para aplicar estilos , una de las formas que propone React es a través de su librería classnames. Importamos entonces la librería para poder usarla posteriormente:

import classnames from 'classnames';

//Para importar una hoja de estilos que queramos luego pasarle a uno de los hijos. Aqui lo podemos hacer porque webpack nos permite meter una hoja de estilos css en un archivo javascript. Normalmente no sería posible
import './TweetsPage.css';

//Cargamos también el archivo de estilos css pero que funciona con CSS modules

import scopedStyles from  './TweetsPage.module.css';
import Layout from '../layout/Layout';

console.log(scopedStyles);

// const TWEETS =  [
//     {
//       "content": "Nos hace mucha ilusión anunciar la fecha del ESTRENO de Eso que tu me das, documental con la última entrevista a Pau Donés. 30 D         E SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
//       "userId": 1,
//       "updatedAt": "2021-03-15T18:23:57.579Z",
//       "id": 1
//     },
//     {
//       "content": "Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas (Una desconocida, en la calle).",
//       "userId": 1,
//       "updatedAt": "2021-03-15T18:24:56.773Z",
//       "id": 2
//     }
// ];



//Creamos el componente con una función que va a devolver los elementos de nuestro componente

const TweetsPage = ({className})=>{

    const [tweets, setTweets] = React.useState([]); //USAMOS EL USESTATE PARA ESTABLECER COMO ESTADO INICIAL DEL COMPONENTE UN ARRAY VACÍO HASTA QUE CARGUE LOS TWEETS DESDE EL SERVIDOR. NUESTRA INTENCIÓN ES QUE SE MONTE EL COMPONENTE CON EL ESTADO VACÍO (POR ESO PONEMOS UN ARRAY VACIO), LUEGO HACEMOS UN PRIMER RENDER Y  PARTIR DE AHI CARGUE LOS TWEES CAMBIANDO SU ESTADO

    const handleClick = ()=> alert("Has hecho click en el li");
    

    const tweetItems = tweets.map(tweet => ( // pasamos el evento onClick por props y dentro de las llaves hay que poner la función que se debe ejecutar cuando se produzca el evento en cuestión. En este caso hacer click en el <li se dispara mi función handleClick que lo que ejecuta es la aparición de una ventana con el texto 
        <li onClick= {handleClick} key={tweet.id}> 
        {tweet.content}
        </li>
        )); // Generamos un li con cada tweet a partir del método map. Por cada tweet va a generar un li. Cuando en React renderiamos un listado de elementos iguales entre ellos (en este caso un array), nos "obliga" que por cada uno de ellos le pasemos un atributo "key id". Cuando es una lsta estática no es vital pero cuando es dinámica, React necesita ese id para asociar cada elemento de JSX con cada elemento del DOM. Siempre que hagamos listas en array le asignamos a cada elemento una key

    React.useEffect(async ()=>{ //Usamos el useEffect para que se ejecute después de la primera renderizacion. Lo que va a hacer es consumir la promesa de la peticion get del cliente y llamar al setTweets del useState para cambiar el estado inicial del componente y forzar así una nueva renderización
        const tweets = await getLatestTweets()
        
        setTweets(tweets);
        

    },[]) //Le hemos puesto un array al final del useEffect para que en principi solo se ejecute una vez despues de la primera renderizacion. Este segundo argumento sirve para establecer la lógica que va a provocar que este método se vuelva a ejecutar y en este caso al ser un array vacío le decimos que solo lo haga una vez

    //1ª forma de aplicar estilos en React --> Para poder agrupar las clases css que quier definir en el hijo (en este caso "tweetsPage") con las clases que me vengan desde el padre, hemos utilizado la librería classname y en el div las hemos concatenado para asociarles las 2. Las que defino en el momento + las que le vienen desde el padre. En este caso podemos importar estilos css como cualquier otro import ya que create React app lo permite

    //2ª forma --> de aplicar estilos en React: aplicamos un objeto style y ponemos los valores con camelCase (ejemplo en el ul). Dentro de esas llaves podemos incluso aplicar condicionales

    //3ª forma --> CSS Modules. Son clases con un scope local al componente. Me van a asegurar que solo se aplican en ese componente y no las voy a poder reescribir desde fuera. Lo voy a crear llama´ndolo TweetsPage.module.css. Para utilizar estas clases css hay que añadirlas al componente con el nombre con el que las hemos importado: scopedStyles.tweetspage

    // 4ª forma styled components. La libreria mas utilizada para ello. styled-components-com. Nos permite generar componentes REACT basados en estilos. En este caso, aunque sea JS nos permite escirbirlo en CSS puro. Es muy muy util para generar componentes pequeñitos (un botón, un input...). Vamos a crear un componente button que va a ser reutilizable en otras partes de la aplicación. 

    const ulStyles= {color: tweets.length > 2 ? "white" : "green", }

    return(

        <Layout title="What´s going on...">

        <div className= {classnames('tweetsPage', className)} > 
            <ul style={ulStyles}>
                {tweetItems}
            </ul>

        
        </div>
        </Layout>
       
    )
}

export default TweetsPage; //Exporto el componente para que sea accesible para otros componentes que estén ubicados en otros ficheros