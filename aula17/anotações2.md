# Anotações sobre Objetos e Classes em JavaScript

## O que são objetos?

Objetos em JavaScript são estruturas que permitem agrupar dados e funcionalidades relacionadas em uma única variável.  
Eles são compostos por **propriedades** (dados) e **métodos** (funções que operam sobre esses dados).



## Exemplo de objeto

```javascript
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p) {
        console.log('Engordou');
        this.peso += p;
    }   
};
```

### Explicação das partes:

- **Propriedades:**  
  - `nome`: guarda o nome do amigo.
  - `sexo`: guarda o sexo.
  - `peso`: guarda o peso.

- **Método:**  
  - `engordar(p)`: função que aumenta o peso do amigo.  
    - Usa `this.peso` para acessar a propriedade `peso` do próprio objeto.
    - O parâmetro `p` indica quanto o amigo vai engordar.



## Como acessar propriedades e métodos

- Para acessar uma propriedade:  
  ```javascript
  amigo.nome // retorna 'José'
  amigo.peso // retorna 85.4
  ```

- Para chamar um método:  
  ```javascript
  amigo.engordar(2) // aumenta o peso em 2
  ```



## O que é `this`?

- Dentro de um método, `this` se refere ao próprio objeto.
- Permite acessar e modificar as propriedades do objeto de dentro dos métodos.



## Exemplo de uso completo

```javascript
console.log(`${amigo.nome} pesa ${amigo.peso}kg`); // Mostra o peso inicial
amigo.engordar(2); // Chama o método para engordar
console.log(`${amigo.nome} agora pesa ${amigo.peso}kg`); // Mostra o peso atualizado
```



## Vantagens de usar objetos

- Organização: agrupa dados e funções relacionadas.
- Reutilização: facilita criar vários objetos semelhantes.
- Clareza: deixa o código mais fácil de entender e manter.



## Resumo

Objetos são fundamentais em JavaScript para estruturar dados e comportamentos.  
Eles permitem criar modelos do mundo real no código, facilitando a programação e a manutenção.

---

# Anotações sobre Classes em JavaScript

## O que são classes?

Classes são um modelo para criar objetos com a mesma estrutura e comportamento.  
Elas facilitam a criação de múltiplos objetos semelhantes, usando um padrão definido.



## Exemplo de classe

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Exemplo de uso:
const pessoa1 = new Pessoa('Maria', 25);
pessoa1.apresentar();
```

### Explicação das partes:

- **class Pessoa**: Define uma classe chamada `Pessoa`.
- **constructor(nome, idade)**: Método especial que é chamado quando um novo objeto é criado.  
  - Recebe os parâmetros `nome` e `idade` e os atribui às propriedades do objeto.
- **apresentar()**: Método da classe que mostra uma mensagem usando as propriedades do objeto.



## Como criar e usar objetos de uma classe

- Para criar um novo objeto:
  ```javascript
  const pessoa1 = new Pessoa('Maria', 25);
  ```
- Para usar um método da classe:
  ```javascript
  pessoa1.apresentar(); // Exibe: Olá, meu nome é Maria e tenho 25 anos.
  ```



## Vantagens de usar classes

- Permite criar vários objetos com a mesma estrutura e métodos.
- Facilita a organização e reutilização do código.
- Torna o código mais legível e fácil de manter.



## Resumo

Classes são uma forma moderna e organizada de criar objetos em JavaScript.  
Elas ajudam a estruturar o código, facilitando a criação de múltiplos objetos com comportamentos semelhantes.