class Hero {
    nome;
    idade;
    tipo;

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    tipoAtaque(tipo) {
        switch(tipo) {
            case "mago":
                return "usando magia";

            case "guerreiro":
                return "usando a espada";

            case "monge":
                return "usou artes marciais";

            case "ninja":
                return "usou ninjutsu";

            default:
                return "usando porrada";

            }
    }

    atacar() {
        return `O ${this.tipo} atacou ${this.tipoAtaque(this.tipo)}`
    }
}

const guerreiro = new Hero("Valdecir", 35, 'guerreiro');

console.log(guerreiro.atacar());

const mago = new Hero("Jordana", 22, "mago");

console.log(mago.atacar());

const monge = new Hero("Kuririn", 42, "monge");

console.log(monge.atacar());

const ninja = new Hero("Kakashi", 45, "ninja");

console.log(ninja.atacar());

const joaquim = new Hero("Joaquim Pedrosa", 52, "tiozinho")

console.log(joaquim.atacar());