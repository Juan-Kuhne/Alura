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
 ID_SFX_CHAVE = 0,
 ID_SFX_PORTA = 1
}
objetos = {}

function temColisaoComMapa(ponto)
  local blocoX = ponto.x/8
  local blocoY = ponto.y/8
  local blocoId = mget(blocoX, blocoY)
	 return  blocoId >= 128
end

function tentaMoverPara(delta)

  local novaPosicao = {
    x = jogador.x + delta.deltaX,
    y = jogador.y + delta.deltaY
  }

  if verificaColisaoComObjetos(novaPosicao) then
    return
  end

  local superiorEsquerdo = {
  	 x = jogador.x - 8+delta.deltaX,
    y = jogador.y - 8+delta.deltaY
  }
  local superiorDireito = {
    x = jogador.x + 7+delta.deltaX,
    y = jogador.y - 8+delta.deltaY 
  }
  local inferiorDireito = {
    x=jogador.x + 7+delta.deltaX,
    y=jogador.y + 7+delta.deltaY
  }
  local inferiorEsquerdo = {
    x=jogador.x - 8+delta.deltaX,
    y=jogador.y + 7+delta.deltaY
  }
  
  if not(temColisaoComMapa(superiorEsquerdo) or
     temColisaoComMapa(superiorDireito)  or
     temColisaoComMapa(inferiorEsquerdo) or
     temColisaoComMapa(inferiorDireito))  then

    jogador.quadroDeAnimacao = jogador.quadroDeAnimacao + Constantes.VELOCIDADE_ANIMACAO_JOGADOR
    if jogador.quadroDeAnimacao >= 3 then
     jogador.quadroDeAnimacao = 1
    end
    jogador.y = jogador.y + delta.deltaY
    jogador.x = jogador.x + delta.deltaX
  end
end

function atualiza()
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
     quadros = animacaoJogador[tecla+1]
     quadro = math.floor(jogador.quadroDeAnimacao)
     jogador.sprite = quadros[quadro]
     tentaMoverPara(Direcao[tecla+1])
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

function desenha()
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

function verificaColisaoComObjetos(novaPosicao)
 for indice, objeto in pairs(objetos) do
	  if temColisao(novaPosicao, objeto) then
	    return objeto.funcaoDeColisao(indice)
	  end
 end
 return false
end

function TIC()
 atualiza()
 desenha()
end

function criaPorta(coluna, linha)
  local porta = {
    sprite = Constantes.SPRITE_PORTA,
    x = coluna * 8 + 8,
    y = linha * 8 + 8,
    corDeFundo = 2,
    funcaoDeColisao = fazColisaoDoJogadorComAPorta
  }
  return porta
end

function criaChave(coluna, linha)
  local chave = {
    sprite = Constantes.SPRITE_CHAVE,
    x = coluna* 8 + 8,
    y = linha* 8 + 8,
    corDeFundo = 2,
    funcaoDeColisao = fazColisaoDoJogadorComAChave
  }
  return chave
end

function criaInimigo(coluna, linha)
  local inimigo = {
    sprite = Constantes.SPRITE_INIMIGO,
    x = coluna * 8 + 8,
    y = linha * 8 + 8,
    corDeFundo = 4,
    funcaoDeColisao = fazColisaoDoJogadorComOInimigo
  }
  return inimigo
end

function inicializa()
  objetos = {}

  local chave = criaChave(3,3)
  table.insert(objetos, chave)
  
  local porta = criaPorta(16,8)
  table.insert(objetos, porta)
  
  local inimigo = criaInimigo(10,3)
  table.insert(objetos, inimigo)
  
  jogador = {      --variavel precisa ser global
			 sprite = 260,
			 x = 100,
			 y = 68,
			 corDeFundo = 2,
			 quadroDeAnimacao = 1,
			 chaves = 0
		}
end

inicializa()