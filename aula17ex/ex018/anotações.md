# Anotações e Explicações do Projeto

## Sobre o Projeto
Este projeto é um exercício de JavaScript para manipulação de arrays, validação de números e interação com elementos do DOM.  



## Pegando elementos do HTML
- O input, o select e a div de resultado são selecionados e armazenados em variáveis globais.
- O array `valores` guarda todos os números adicionados, permitindo validação e estatísticas.



## Função isNumero(n)
- **O que faz:** Verifica se o número passado está entre 1 e 100.
- **Como funciona:**  
  Usa `Number(n)` para garantir que o valor é tratado como número e compara se está no intervalo desejado.
- **Retorno:**  
  - `true` se estiver entre 1 e 100  
  - `false` caso contrário



## Função inLista(n, l)
- **O que faz:** Verifica se o número já existe no array de valores.
- **Como funciona:**  
  Usa `l.indexOf(Number(n))` para procurar o número no array.  
  Se encontrar, retorna o índice (>=0); se não, retorna -1.
  Se o resultado for diferente de -1, significa que o número já está na lista.
- **Retorno:**  
  - `true` se o número já está na lista  
  - `false` se não está



## Por que declarar variáveis fora das funções?
- Variáveis como `lista`, `res` e `valores` são usadas por várias funções.
- Declarando fora, elas ficam acessíveis globalmente e podem ser compartilhadas entre funções, facilitando a manipulação dos dados e elementos do DOM.



## Sobre parâmetros de função
- Os parâmetros `n` e `l` em `inLista(n, l)` são declarados na definição da função.
- Eles recebem valores quando a função é chamada, não precisam ser declarados novamente dentro da função.



## Sobre o uso de `.value` e arrays
- `.value` pega o valor digitado pelo usuário em um input.
- O array `valores` guarda todos os números adicionados, evitando repetições e facilitando a validação.



## Função Adcionar()
- **O que faz:** Adiciona um número à lista se ele for válido e ainda não estiver presente.
- **Como funciona:**  
  - O valor do input é capturado dentro da função, garantindo que sempre seja o valor mais recente digitado.
  - Verifica se o número está entre 1 e 100 e se não está no array `valores`.
  - Se passar nas verificações, adiciona o número ao array e cria um novo `<option>` no select mostrando que o valor foi adicionado.
  - Se não passar, exibe um alerta informando que o valor é inválido ou já existe.
  - Após adicionar, limpa o input e foca novamente para facilitar a próxima entrada.



## Função Finalizar()
- **O que faz:** Exibe estatísticas dos números adicionados.
- **Como funciona:**  
  - Verifica se há valores no array. Se não houver, exibe um alerta pedindo para adicionar valores.
  - Se houver, calcula:
    - Total de números cadastrados (`tot`)
    - Maior valor (`maior`)
    - Menor valor (`menor`)
    - Soma de todos os valores (`soma`)
    - Média dos valores (`soma / tot`)
  - Percorre o array usando um laço `for (let posição in valores)` para somar os valores e atualizar maior/menor.
  - Mostra todas essas informações na div de resultados, formatadas em parágrafos.



## Lógica do cálculo de estatísticas
- Inicializa `maior` e `menor` com o primeiro valor do array.
- Usa um laço para percorrer todos os valores:
  - Soma cada valor à variável `soma`.
  - Atualiza `maior` se encontrar um valor maior.
  - Atualiza `menor` se encontrar um valor menor.
- Exibe os resultados na tela, incluindo a média com duas casas decimais.


## Observações Finais
- O valor do input deve ser capturado dentro da função Adcionar para garantir que sempre seja o valor digitado no momento.
- O código está organizado para facilitar a leitura e manutenção.
- As funções estão separadas por responsabilidade, tornando o projeto mais modular.
- As explicações detalhadas estão neste arquivo para consulta rápida e aprendizado