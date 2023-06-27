import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  overflow-x: hidden;
`

const FavoritosContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;
   margin-top: 3rem;
   padding: 1rem 0;
   flex-wrap: wrap;
`

const Favorito = styled.div`
   border-radius: 8px;
   padding: 0 8px;
   transition: all .5s ease;

   &:hover {
      box-shadow: 0 0 0 1px #fff;
      transform: scale(1.05);
   }

   img {
      max-width: 209px;
   }

   p { color: #FFF }
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id)
    alert(`Livro de id:${id} deletado!`)
    await fetchFavoritos()
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <FavoritosContainer>
        {favoritos.map(favorito => (
          <Favorito onClick={() => deletarFavorito(favorito.id)}>
            <p>{favorito.nome}</p>
            <img src={favorito.src} alt={favorito.nome} />
        </Favorito>
        ))}
      </FavoritosContainer>
    </AppContainer>
  );
}

export default Favoritos;
