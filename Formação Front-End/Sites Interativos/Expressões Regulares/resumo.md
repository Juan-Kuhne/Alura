# Expressões regulares (Regex)
---
* Regex é uma linguagem para encontrar padrões de texto
* Sendo uma linguagem independente, existem interpretadores para a maioria das plataformas de desenvolvimento
* Classe de caracteres
    * `\d` => qualquer digito (atalho para '[0-9]')
    * `\s` => atalho para `[ \t\r\n\f]`
    * `.` => Significa qualquer char
    * `[-.*]` => seta uma classe de caracteres
    * `\t` => *tab*
    * `\r` => *carriage return*
    * `\n` => *new line*
    * `\f` => *form feed*
* *Quantifiers*
    * Definem quantas vezes um caractere deve aparecer
    * `?` => zero ou uma vez
    * `*` => zero ou mais vezes
    * `+` => uma ou mais vezes
    * `{n}` - exatamente n vezes
    * `{n,}` - no mínimo n vezes
    * `{n,m}` - no mínimo n vezes, no máximo m vezes
