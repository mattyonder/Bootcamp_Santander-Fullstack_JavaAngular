/**
 * Decorator a nivel de atributo
 */
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;

        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });


    
    }
}

class Api {
    @minLength(3)
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("Usuarios");
console.log(api.name);


/////////////////////////////////////////////////


/**
 * Decorator a nivel de classe
 */

function exibirNome(target: any) {
    console.log(target);
}

@exibirNome
class Funcionario {

}


@exibirNome
class Quincas{

}

/*
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "Mateus" })
    };
}


@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version);
console.log(api.__name);
*/

/////////////////////////////////////////////////

/**
 * Generics
 */


// Operador de spread (...) significa que a minha função ela aceita varios itens ( isso é bom para caso eu vá receber varios parametros
function concatArray<T>(...itens: any[]): T[] {
    
    return new Array().concat(...itens);
};

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Mateus", "Goku"], ["Vegeta"]);
console.log(numArray);
console.log(stgArray);

/////////////////////////////////////////////////
/**
 * Classes
 */

class Character {
    private name?: string;
    private readonly streght: number;
    private skill: number;

    constructor(name: string, streght: number, skill: number) {
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Atack widt ${this.streght} points`);
    }
}

const p1 = new Character("Matt",10, 98);
console.log(p1)
p1.attack();

// Conceito de herança do Javascript
class Magician extends Character{
    magicPoints: number;
    constructor(name:string, streght:number, skill:number, magicPoints:number) {
        super(name, streght, skill)
        this.magicPoints = magicPoints;
    }
}


// Interfaces

type robot = {
    readonly id: number|string;
    name: string;
}

const bot: robot = {
    id: 1,
    name: "Megaman",
}


interface robot2 {
    readonly id: number|string,
    name: string,
}

const bot2: robot2 = {
    id: 1,
    name: "Megaman",
}

console.log(bot)
console.log(bot2)
// Normalmente Type é usado pra tipar um objeto
// Normalmente Interface é usado para tipar classes

/////////////////////////////////////////////////

/**
 * Tipos de funções
 */

// Função padrão

function CallToPhone(phone: number): number{
    return phone;
}

// Função multi tipo

function CallToPhone_2(phone: number | string): number | string{
    return phone;
}

// Função Async
// Essa função retorna uma promisse

async function getDataBase(id: number):Promise<string>{
    return "mateus";  
};

/////////////////////////////////////////////////

/**
 * Datas
 */

let aniversaio: Date = new Date("2022-12-01 05:00");

console.log(aniversaio.toString());

// Sempre guardada em padrão de datas americano

/////////////////////////////////////////////////

/**
 * Métodos de arrays
 */

//pop, reduce, filter

// Todos os métodos de array do javascript serve para o typescript

/////////////////////////////////////////////////

/**
 * Tuplas
 */

// Tuplas é um vetor multitype, mas cada espaço é definidio para cada tipo
// Parece um dicionario na vdd

let boleto: [string, number, number] = ["Agua", 199.99, 99999];

/////////////////////////////////////////////////

/**
 * Arrays
 */

let array: string[] = ["Matt", "Yonder"];
let array_2: Array<string> = ["Matt", "Yonder"]

// Definindo arrays de 2 formas

let infos: (string | number)[] = [3, "Matt", 5, "Yonder"];

// Esse array é multi tipo, ele aceita mais de um tipo dentro dele.

/////////////////////////////////////////////////

// Objeto em Typescript

// Objeto - Sem presivibilidade
let produto: object = {
    name: "Mateus",
    cidade: "Lagarto",
    idade: 30,
    
};

// Objeto Tipado - Com presivibilidade
type ProdutoLoja = {
    name: string;
    value: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    name: "Tênis",
    value: 89.99,
    unidades: 5
}


/////////////////////////////////////////////////
/**
 * Variaveis
 */

// Tipos primitivos, boolean, number, string

let ligado: boolean = false;
let nome: string = "Mateus";
let idade: number = 18;
let altura: number = 1.80;


// Eu estou definindo aqui os tipos das variaveis e lockando eles.

/*let ligado_2 = false;
let nome_2 = "Mateus";*/

// Aqui o tipo deles tá sendo definido por inferencia

// Tipos especiais, nulo e undefined

let nulo: null = null;
let indefinido: undefined = undefined;

// Null só pode receber nulo e mais nada
// Undefined só pode receber undefined

// Tipos abrangentes, any e void

let retorno: void;
let retornoView: any = "Qualquer tipo de valor"

// Se eu colocar algo para retorno receber, dá erro, até mesmo um void.
