
import React from 'react';
import { useEffect } from 'react';
import {getLatestTweets} from '../../api/tweets'

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

const TweetsPage = ()=>{

    const [tweets, setTweets] = React.useState([]); //USAMOS EL USESTATE PARA ESTABLECER COMO ESTADO INICIAL DEL COMPONENTE UN ARRAY VACÍO HASTA QUE CARGUE LOS TWEETS DESDE EL SERVIDOR. NUESTRA INTENCIÓN ES QUE SE MONTE EL COMPONENTE CON EL ESTADO VACÍO (POR ESO PONEMOS UN ARRAY VACIO), LUEGO HACEMOS UN PRIMER RENDER Y  PARTIR DE AHI CARGUE LOS TWEES CAMBIANDO SU ESTADO

    const tweetItems = tweets.map(tweet => <li key={tweet.id}>{tweet.content}</li>) // Generamos un li con cada tweet a partir del método map. Por cada tweet va a generar un li. Cuando en React renderiamos un listado de elementos iguales entre ellos (en este caso un array), nos "obliga" que por cada uno de ellos le pasemos un atributo "key id". Cuando es una lsta estática no es vital pero cuando es dinámica, React necesita ese id para asociar cada elemento de JSX con cada elemento del DOM. Siempre que hagamos listas en array le asignamos a cada elemento una key

    React.useEffect(async ()=>{ //Usamos el useEffect para que se ejecute después de la primera renderizacion. Lo que va a hacer es consumir la promesa de la peticion get del cliente y llamar al setTweets del useState para cambiar el estado inicial del componente y forzar así una nueva renderización
        const tweets = await getLatestTweets()
        
        setTweets(tweets);
        

    },[]) //Le hemos puesto un array al final del useEffect para que en principi solo se ejecute una vez despues de la primera renderizacion. Este segundo argumento sirve para establecer la lógica que va a provocar que este método se vuelva a ejecutar y en este caso al ser un array vacío le decimos que solo lo haga una vez

    return(
        <div className="tweetsPage">
            <ul>
                {tweetItems}
            </ul>
        </div>
    )
}

export default TweetsPage; //Exporto el componente para que sea accesible para otros componentes que estén ubicados en otros ficheros