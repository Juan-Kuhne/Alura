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

async function postFavorito(id) {
   await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
   await favoritosAPI.delete(`/${id}`)
}

export {
   getFavoritos,
   postFavorito,
   deleteFavorito
}