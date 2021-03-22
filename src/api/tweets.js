import client from './client'

const tweetsBaseUrl = '/api'

 export const getLatestTweets = () =>{ //Esta funcion se va a encargar de obtener el lstado de tweets que tenga corriendo em sparrest
    const url = `${tweetsBaseUrl}/tweets`;
    return client.get(url)//client.get devuelve una promsa
}