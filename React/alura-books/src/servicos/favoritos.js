import axios from "axios"

const favoritosAPI = axios.create({baseURL: 'http://localhost:8000/favoritos'})

async function getFavoritos() {
   try {
      const response = await favoritosAPI.get('/')
      console.log(response);

      return response.data
   } catch(err) {
      console.log(err);
   }
}

export {
   getFavoritos
}