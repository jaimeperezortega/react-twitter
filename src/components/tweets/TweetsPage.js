


const tweets =  [
    {
      "content": "Nos hace mucha ilusión anunciar la fecha del ESTRENO de Eso que tu me das, documental con la última entrevista a Pau Donés. 30 D         E SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
      "userId": 1,
      "updatedAt": "2021-03-15T18:23:57.579Z",
      "id": 1
    },
    {
      "content": "Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas (Una desconocida, en la calle).",
      "userId": 1,
      "updatedAt": "2021-03-15T18:24:56.773Z",
      "id": 2
    }
];

//Creamos el componente con una función que va a devolver los elementos de nuestro componente

const TweetsPage = ()=>{

    const tweetItems = tweets.map(tweet => <li key={tweet.id}>{tweet.content}</li>) // Generamos un li con cada tweet a partir del método map. Por cada tweet va a generar un li. Cuando en React renderiamos un listado de elementos iguales entre ellos (en este caso un array), nos "obliga" que por cada uno de ellos le pasemos un atributo "key id". Cuando es una lsta estática no es vital pero cuando es dinámica, React necesita ese id para asociar cada elemento de JSX con cada elemento del DOM. Siempre que hagamos listas en array le asignamos a cada elemento una key
    return(
        <div className="tweetsPage">
            <ul>
                {tweetItems}
            </ul>
        </div>
    )
}

export default TweetsPage; //Exporto el componente para que sea accesible para otros componentes que estén ubicados en otros ficheros