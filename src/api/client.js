//Ahora vamos a obtener los tweets a través de la api sparrest a través de la ojbrería axios (podriamos hacerlo tambien a trves de fetch). 

//1 . Importamos axios para poder hacer peticiones http a través de esta librería

import axios from 'axios'


//Nos creamos este fichero para configurar aqu´un cliente para las peticiones que hagamos desde nuestra app

const baseURL = 'http://localhost:8000' //Definimos la URL en la que vamos a hacer las peticiones para el cliente axios que vamos a crear a continuación

const client = axios.create({baseURL}) //Creo el cliente axios con el método axios.create y le paso un objeto de configuración en el que indico la URL base a la que van a llegar todas las peticiones


//Axios además me permite definir una serie de interceptors tanto antes de hacer la petición como cuando estoy recibiendo la respuesta. En este caso, lo que le estoy pidiendo a axios es que la respuesta que yo reciba de la petición venga ya modelada y sea directamente response.data para que luego yo no tenga que poner response.data en el cliente que la consume

client.interceptors.response.use(response => response.data);

export default client;