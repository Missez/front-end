const env = require('../components/env.js');
const Config = require('../components/Config.js')[env];
export async function searchMovie(search_data) {

    try{
        console.log(Config);
        console.log('search_data: ' + search_data);

        const response = await fetch(`${Config.API_URL}/api/movie/search?search_text=`+search_data, {
            headers: {
              Authorization: `Bearer ${Config.bearer_token}`,
            },
          }
        );

        return await response.json(); //***

       // console.log('Search Movie response: ' + await response);

    }catch(error) {
        return [];
    }
    
}

export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users'); 
        //const response = await fetch('/api/movie/all');
        const response = await fetch(`${Config.API_URL}/api/movie/all`, {
            headers: {
              Authorization: `Bearer ${Config.bearer_token}`,
            },
          }
        );

        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createMovie(data) {
    const response = await fetch(`${Config.API_URL}/api/movie/insert`, {
        //mode: 'no-cors',
        method: 'POST',
        headers: {'Content-Type': 'application/json',Authorization: `Bearer ${Config.bearer_token}`},
        body: JSON.stringify(data)

      })
      console.log('Create Movie response: ' + await response);

   // return  response.json();
    return  response;
}
