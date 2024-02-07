const bearerToken = "1234567890";
export async function searchMovie(search_data) {

    try{

        console.log('search_data: ' + search_data);

        const response = await fetch('https://api.se-rmutl.net/api/movie/search?search_text='+search_data, {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
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
        const response = await fetch('https://api.se-rmutl.net/api/movie/all', {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
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
    const response = await fetch(`https://api.se-rmutl.net/api/movie/insert`, {
        //mode: 'no-cors',
        method: 'POST',
        headers: {'Content-Type': 'application/json',Authorization: `Bearer ${bearerToken}`},
        body: JSON.stringify(data)

      })
      console.log('Create Movie response: ' + await response);

   // return  response.json();
    return  response;
}
