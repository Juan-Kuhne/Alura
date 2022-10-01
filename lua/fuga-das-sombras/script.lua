-- title:   Fuga das Sombras
-- author:  Jeferson Silva
-- desc:    RPG de acao 2d
-- site:    website link
-- license: MIT License (change this to your license of choice)
-- version: 0.1
-- script:  lua

Constantes = {
  LARGURA_DA_TELA = 240,
  ALTURA_DA_TELA = 138,
  
  VELOCIDADE_ANIMACAO_JOGADOR = 0.1,
  
  SPRITE_CHAVE = 364,
  SPRITE_PORTA = 366,
  SPRITE_INIMIGO = 292,
  
  SPRITE_TITULO = 352,
  SPRITE_TITULO_LARGURA = 11,
  SPRITE_TITULO_ALTURA = 4,
  SPRITE_ALURA = 416,
  SPRITE_ALURA_LARGURA = 7,
  SPRITE_ALURA_ALTURA = 3,
  
  ID_SFX_CHAVE = 0,
  ID_SFX_PORTA = 1,
  ID_SFX_INICIO = 2,
  
  JOGADOR = "JOGADOR",
  INIMIGO = "INIMIGO",
  
  Direcao = {
    CIMA = 1,
    BAIXO = 2,
    ESQUERDA = 3,
    DIREITA = 4
  }
 }
 objetos = {}
 
 function temColisaoComMapa(ponto)
   local blocoX = ponto.x/8
   local blocoY = ponto.y/8
   local blocoId = mget(blocoX, blocoY)
    return  blocoId >= 128
 end
 
 function tentaMoverPara(personagem, delta)
 
   local novaPosicao = {
     x = personagem.x + delta.deltaX,
     y = personagem.y + delta.deltaY
   }
 
   if verificaColisaoComObjetos(personagem, novaPosicao) then
     return
   end
 
   local superiorEsquerdo = {
      x = personagem.x - 8 + delta.deltaX,
     y = personagem.y - 8 + delta.deltaY
   }
   local superiorDireito = {
     x = personagem.x + 7 + delta.deltaX,
     y = personagem.y - 8 + delta.deltaY 
   }
   local inferiorDireito = {
     x=personagem.x + 7 + delta.deltaX,
     y=personagem.y + 7 + delta.deltaY
   }
   local inferiorEsquerdo = {
     x=personagem.x - 8 + delta.deltaX,
     y=personagem.y + 7 + delta.deltaY
   }
   
   if not(temColisaoComMapa(superiorEsquerdo) or
      temColisaoComMapa(superiorDireito)  or
      temColisaoComMapa(inferiorEsquerdo) or
      temColisaoComMapa(inferiorDireito))  then
 
     personagem.quadroDeAnimacao = jogador.quadroDeAnimacao + Constantes.VELOCIDADE_ANIMACAO_JOGADOR
     if personagem.quadroDeAnimacao >= 3 then
      personagem.quadroDeAnimacao = 1
     end
     personagem.y = personagem.y + delta.deltaY
     personagem.x = personagem.x + delta.deltaX
   end
 end
 
 function atualizaInimigo(inimigo)
   local delta = {
     deltaX = 0,
     deltaY = 0
   }
 
   if jogador.y > inimigo.y then
     delta.deltaY = 0.5
     inimigo.direcao = Constantes.Direcao.BAIXO
   elseif jogador.y < inimigo.y then
     delta.deltaY = -0.5
     inimigo.direcao = Constantes.Direcao.CIMA
   end
   tentaMoverPara(inimigo, delta)
   
   delta = {
     deltaX = 0,
     deltaY = 0
   }
   if jogador.x > inimigo.x then
     delta.deltaX = 0.5
     inimigo.direcao = Constantes.Direcao.DIREITA
   elseif jogador.x < inimigo.x then
     delta.deltaX = -0.5
     inimigo.direcao = Constantes.Direcao.ESQUERDA
   end
   tentaMoverPara(inimigo, delta)
   
   local animacaoInimigo = {
     {288,290},
     {292,294},
     {296,298},
     {300,302}
   }
   
   local quadros = animacaoInimigo[inimigo.direcao]
   local quadro = math.floor(inimigo.quadroDeAnimacao)
   inimigo.sprite = quadros[quadro]
 end
 
 function atualizaJogo()
  local animacaoJogador = {
   {256, 258},
   {260, 262},
   {264, 266},
   {268, 270}
  }
  local Direcao = {
    {deltaX= 0,deltaY=-1},
    {deltaX= 0,deltaY= 1},
    {deltaX=-1,deltaY= 0},
    {deltaX= 1,deltaY= 0}
  }
  
  for tecla = 0,3 do
    if btn(tecla) then
      local quadros = animacaoJogador[tecla+1]
      local quadro = math.floor(jogador.quadroDeAnimacao)
      jogador.sprite = quadros[quadro]
      tentaMoverPara(jogador, Direcao[tecla+1])
    end
  end
  
  verificaColisaoComObjetos(jogador, { x=jogador.x,y=jogador.y })
  
  for indice, objeto in pairs(objetos) do
    if objeto.tipo == Constantes.INIMIGO then
      atualizaInimigo(objeto)
    end
  end
 end
 
 function desenhaMapa()
   map(
     0,   -- posicao x no mapa
     0,   -- posicao y no mapa
     Constantes.LARGURA_DA_TELA, -- quanto desenhar x
     Constantes.ALTURA_DA_TELA, -- quanto desenhar y
     0,   -- em qual ponto colocar o x
     0   -- em qual ponto colocar o y
   )
 end
 
 function desenhaJogador()
   spr(jogador.sprite,
           jogador.x-8,
           jogador.y-8,
           jogador.corDeFundo,
           1, -- escala
           0, -- espelhar
           0, -- rotacionar
           2, -- quantos blocos para a direita (8b)
           2  -- quantos blocos para baixo (8b)
   )
 end
 
 function desenhaObjetos()
   for indice,objeto in pairs(objetos) do
    spr(objeto.sprite,
        objeto.x - 8,
        objeto.y - 8,
        objeto.corDeFundo,
        1,
        0,
        0,
        2,
        2)
   end
 end
 
 function desenhaJogo()
   cls()
  desenhaMapa()
   desenhaJogador()
   desenhaObjetos()
   print(jogador.chaves,0,0,12)
 end
 
 function fazColisaoDoJogadorComAChave(indice)
   jogador.chaves = jogador.chaves + 1
   table.remove(objetos, indice)
   
   sfx(Constantes.ID_SFX_CHAVE,
       "B-5", -- note
       60,    -- duration: 60==1 segundo
       0,     -- channel
       8,     -- volume
       1      -- speed
    )
   
   return false
 end
 
 function temColisao(objetoA, objetoB)
   local esquerdaDeB = objetoB.x - 8
   local direitaDeB = objetoB.x + 7
   local baixoDeB = objetoB.y + 7
   local cimaDeB = objetoB.y - 8
   
   local direitaDeA = objetoA.x + 7
   local esquerdaDeA = objetoA.x - 8
   local baixoDeA = objetoA.y + 7
   local cimaDeA = objetoA.y - 8
 
   if esquerdaDeB > direitaDeA or
      direitaDeB < esquerdaDeA or
      baixoDeA < cimaDeB or
      cimaDeA > baixoDeB then
     return false
   end
   return true
 end
 
 function fazColisaoDoJogadorComAPorta(indice)
   if jogador.chaves > 0 then
     jogador.chaves = jogador.chaves - 1
     table.remove(objetos, indice)
     
     sfx(Constantes.ID_SFX_PORTA,
         "B-3", -- note
         60,    -- duration
         0,     -- channel
         10,     -- volume
         2      -- speed
     )
     
     return false
   end
   return true
 end
 
 function fazColisaoDoJogadorComOInimigo(indice)
   inicializa()
   return true
 end
 
 function verificaColisaoComObjetos(personagem, novaPosicao)
 
  for indice, objeto in pairs(objetos) do
    local funcaoDeColisao = objeto.colisoes[personagem.tipo]
     if temColisao(novaPosicao, objeto) then
       return funcaoDeColisao(indice)
     end
  end
  return false
 end
 
 function desenhaTelaDeTitulo()
   cls()
  spr(
    Constantes.SPRITE_TITULO,
    80,
    10,
    15,
    1,
    0,
    0,
    Constantes.SPRITE_TITULO_LARGURA,
    Constantes.SPRITE_TITULO_ALTURA
  )
  spr(
    Constantes.SPRITE_ALURA,
    94,
    92,
    15,
    1,
    0,
    0,
    Constantes.SPRITE_ALURA_LARGURA,
    Constantes.SPRITE_ALURA_ALTURA
  )
  print("www.alura.com.br", 78,122,12)
 end
 
 function atualizaTelaDeTitulo()
   if btn(4) then
     sfx(Constantes.ID_SFX_INICIO,
       "B-8", -- note
       60,    -- duration: 60==1 segundo
       0,     -- channel
       8,     -- volume
       0      -- speed
     )
     tela = Tela.JOGO
   end
 end
 
 function TIC()
   tela.atualiza()
   tela.desenha()
 end
 
 function fazColisaoDoInimigoComAPorta(indice)
   return true
 end
 
 function criaPorta(coluna, linha)
   local porta = {
     sprite = Constantes.SPRITE_PORTA,
     x = coluna * 8 + 8,
     y = linha * 8 + 8,
     corDeFundo = 2,
     colisoes = {
       INIMIGO = fazColisaoDoInimigoComAPorta,
       JOGADOR = fazColisaoDoJogadorComAPorta
     }
   }
   return porta
 end
 
 function deixaPassar(indice)
   return false
 end
 
 function criaChave(coluna, linha)
   local chave = {
     sprite = Constantes.SPRITE_CHAVE,
     x = coluna* 8 + 8,
     y = linha* 8 + 8,
     corDeFundo = 2,
     colisoes = {
       INIMIGO = deixaPassar,
       JOGADOR = fazColisaoDoJogadorComAChave
     }
   }
   return chave
 end
 
 function criaInimigo(coluna, linha)
   local inimigo = {
     tipo = Constantes.INIMIGO,
     sprite = Constantes.SPRITE_INIMIGO,
     x = coluna * 8 + 8,
     y = linha * 8 + 8,
     corDeFundo = 4,
     quadroDeAnimacao = 1,
     colisoes = {
       INIMIGO = deixaPassar,
       JOGADOR = fazColisaoDoJogadorComOInimigo
     }
   }
   return inimigo
 end
 
 
 Tela = {
   INICIO = {
     atualiza = atualizaTelaDeTitulo,
     desenha = desenhaTelaDeTitulo 
   },
   JOGO = {
     atualiza = atualizaJogo,
     desenha = desenhaJogo
   }
 }
 
 function inicializa()
   objetos = {}
 
   local chave = criaChave(3,3)
   table.insert(objetos, chave)
   
   local porta = criaPorta(16,8)
   table.insert(objetos, porta)
   
   local inimigo = criaInimigo(25,12)
   table.insert(objetos, inimigo)
   
   jogador = {    --variavel precisa ser global
     tipo = Constantes.JOGADOR,
        sprite = 260,
        x = 100,
        y = 68,
        corDeFundo = 2,
        quadroDeAnimacao = 1,
        chaves = 0
     }
     tela = Tela.INICIO
 end
 
 inicializa()