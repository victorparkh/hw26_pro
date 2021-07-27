// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (5$, 20 калорий)
// большой (10$, 40 калорий)


// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)


// Можно добавить добавки:

// посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).


// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.

// Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций и расчета нужных величин.

const HAMBURGER_SIZE = [{
        name: `small`,
        price: 5,
        callories: 20
    },

    {
        name: `big`,
        price: 10,
        callories: 40
    }
];
const HAMBURGER_FILL = [{
        name: `cheese`,
        price: 1,
        callories: 20
    },

    {
        name: `salad`,
        price: 2,
        callories: 5
    },
    {
        name: `potato`,
        price: 1.5,
        callories: 10
    }
];
const HAMBURGER_ADD = [{
        name: `flavor`,
        price: 1.5,
        callories: 0
    },

    {
        name: `mayo`,
        price: 2,
        callories: 5
    }
];


class Hamburger {
    constructor(name) {
        this.name = name;

        this.setSize();
        this.setFill();
        this.setAdd();

        this.getPrice();
    }

    setSize() {
        let size;
        do {
            size = prompt(`Big or small?`, `big`);
        } while (size !== `big` && size !== `small`);

        size = size
            .split(`,`)
            .filter(function(item) {
                for (let i = 0; i < HAMBURGER_SIZE.length; i++) {
                    if (HAMBURGER_SIZE[i].name === item)
                        return item;
                }
            })
            .map(function(item) {
                for (let i = 0; i < HAMBURGER_SIZE.length; i++) {
                    if (HAMBURGER_SIZE[i].name === item)
                        return HAMBURGER_SIZE[i].price;
                }
            });

        this.size = size;
        console.log(this.size)
    }

    setFill() {
        let filling;

        do {
            filling = prompt(`Enter by comma names of avaliable filling: ${this.getFillingName()}`, this.getFillingName()).replaceAll(' ', '');
        } while (!filling);

        filling = filling
            .split(`,`)
            .filter(function(item) {
                for (let i = 0; i < HAMBURGER_FILL.length; i++) {
                    if (HAMBURGER_FILL[i].name === item)
                        return item;
                }
            })
            .map(function(item) {
                for (let i = 0; i < HAMBURGER_FILL.length; i++) {
                    if (HAMBURGER_FILL[i].name === item)
                        return HAMBURGER_FILL[i].price;
                }
            });

        this.filling = filling;
        this.getSumm(this.filling);
        console.log(this.filling);
    }

    setAdd() {
        let adding;

        do {
            adding = prompt(`Enter by comma names of avaliable adding: ${this.getAddingName()}`, this.getAddingName()).replaceAll(' ', '');
        } while (!adding);

        adding = adding
            .split(`,`)
            .filter(function(item) {
                for (let i = 0; i < HAMBURGER_ADD.length; i++) {
                    if (HAMBURGER_ADD[i].name === item)
                        return item;
                }
            })
            .map(function(item) {
                for (let i = 0; i < HAMBURGER_ADD.length; i++) {
                    if (HAMBURGER_ADD[i].name === item)
                        return HAMBURGER_ADD[i].price;
                }
            });

        this.adding = adding;
        console.log(this.adding);

    }

    getFillingName() {
        return HAMBURGER_FILL
            .reduce(function(arr, item) {
                arr.push(item.name);
                return arr;
            }, [])
            .join(`, `);
    }
    getAddingName() {
        return HAMBURGER_ADD
            .reduce(function(arr, item) {
                arr.push(item.name);
                return arr;
            }, [])
            .join(`, `);
    }
    getSizeName() {
        return HAMBURGER_SIZE
            .reduce(function(arr, item) {
                arr.push(item.name);
                return arr;
            }, [])
            .join(`, `);
    }

    getSumm(item) {
        let Summ = 0;
        item.forEach(element => {
            Summ += element;
        });
        return Summ;
    }

    getPrice() {

        // let price = HAMBURGER_SIZE[this.size] + HAMBURGER_FILL[this.filling] + HAMBURGER_ADD[this.adding];
        let price = this.getSumm(this.size) + this.getSumm(this.filling) + this.getSumm(this.adding);


        console.log(`Price for ${this.name}: ${price}$`);
    }
}

let Burger = new Hamburger(`Burger`);
console.log(Burger);