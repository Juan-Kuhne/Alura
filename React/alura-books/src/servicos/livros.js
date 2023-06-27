import axios from "axios"

const livrosAPI = axios.create({baseURL: 'http://localhost:8000/livros'})

async function getLivros() {
   try {
      const response = await livrosAPI.get('/')
      console.log(response);

      return response.data
   } catch(err) {
      console.log(err);
   }
}

export {
   getLivros
}