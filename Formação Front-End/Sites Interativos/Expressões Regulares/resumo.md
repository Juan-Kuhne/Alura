# Expressões regulares (Regex)
---
* Regex é uma linguagem para encontrar padrões de texto
* Sendo uma linguagem independente, existem interpretadores para a maioria das plataformas de desenvolvimento
* Classe de caracteres
  * `\d` => qualquer digito (atalho para '[0-9]')
  * `\s` => atalho para `[ \t\r\n\f]`
  * `\w` => atalho para `[a-zA-Z0-9_]`
  * `.` => Significa qualquer char
  * `[-.*]` => seta uma classe de caracteres
    * Dentro dos colchetas apenas `^`, `\` e `-` são metachars
    * `[^abc]`  => procura por qualquer coisa MENOS o que foi definido depois do acento circunflexo
  * `\t` => *tab*
  * `\r` => *carriage return*
  * `\n` => *new line*
  * `\f` => *form feed*
* *Quantifiers*
  * Definem quantas vezes um caractere deve aparecer
  * `?` => zero ou uma vez
  * `*` => zero ou mais vezes
  * `+` => uma ou mais vezes
  * `{n}` => exatamente n vezes
  * `{n,}` => no mínimo n vezes
  * `{n,m}` => no mínimo n vezes, no máximo m vezes
* *Âncoras*
  * Marcam uma posição específica no target
  * `\babc\b` (*Word Boudary*) => Busca por sequências especificas no meio da string (separadas por espaços mas sem incluir os espaços no retorno)
  * \Babc\B (*Non Word Boundary*) => busca por sequências especificas dentro de palavras
  * `^abc` => procura sequências especificas no inicio da string
  * `abc$` => procura sequências especificas no final da string
