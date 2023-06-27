import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  overflow-x: hidden;
  padding: .5rem 0;
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
  position: relative;
  border-radius: 8px;
  padding: 3px 10px;
  box-shadow: 0 0 0 2px transparent;
  transition: all .5s ease;

  &:hover {
    box-shadow: 0 0 0 2px #fff;
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
          <Favorito>
            <i 
              class="fi fi-sr-star c-yellow favIcon"
              onClick={() => deletarFavorito(favorito.id)}
            ></i>
            <p>{favorito.nome}</p>
            <img src={favorito.src} alt={favorito.nome} />
        </Favorito>
        ))}
      </FavoritosContainer>
    </AppContainer>
  );
}

export default Favoritos;
