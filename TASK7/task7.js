//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
users = []
users.push(user1 = new User(9, 'Sasha', 'Bondarenko', 'bond@ukr.net', '0734758839'))
users.push(user2 = new User(2, 'Petya', 'Ivanchenko', 'Ivan@gmail.com', '0734395878'))
users.push(user3 = new User(3, 'Kolya', 'Kovalenko', 'Koval@gmail.com', '0739492709'))
users.push(user4 = new User(8, 'Ihor', 'Stepanchuk', 'step@gmail.com', '0673397856'))
users.push(user5 = new User(7, 'Lena', 'Tkachenko', 'lena@ukr.net', '0964906655'))
users.push(user6 = new User(6, 'Artem', 'Naumenko', 'artnaum@gmail.com', '0507778844'))
users.push(user7 = new User(5, 'Sergiy', 'Docenko', 'doc@ukr.net', '0672888822'))
users.push(user8 = new User(4, 'Stepan', 'Boiko', 'stepanBoiko@gmail.com', '0959994411'))
users.push(user9 = new User(10, 'Sveta', 'Koval', 'SvetaK@ukr.net', '0754758321'))
users.push(user10 = new User(1, 'Oksana', 'Velichko', 'bond@ukr.net', '0755558830'))
console.log(users)


//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersEvenId = users.filter(user => user.id % 2 === 0)

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort(
    (id1, id2) =>
        id1.id - id2.id)

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
clients = []

clients.push(client1 = new Client(9, 'Sasha', 'Bondarenko', 'bond@ukr.net', '0734758839',['pen', 'ruller', 'album']))
clients.push(client2 = new Client(2, 'Petya', 'Ivanchenko', 'Ivan@gmail.com', '0734395878',['pen','scissors', 'ruller', 'album']))
clients.push(client3 = new Client(3, 'Kolya', 'Kovalenko', 'Koval@gmail.com', '0739492709',['scissors', 'album']))
clients.push(client4 = new Client(8, 'Ihor', 'Stepanchuk', 'step@gmail.com', '0673397856',['pen', 'ruller', 'scissors', 'notebook']))
clients.push(client5 = new Client(7, 'Lena', 'Tkachenko', 'lena@ukr.net', '0964906655',['pen','scissors', 'notebook', 'album']))
clients.push(client6 = new Client(6, 'Artem', 'Naumenko', 'artnaum@gmail.com', '0507778844',['notebook', 'album']))
clients.push(client7 = new Client(5, 'Sergiy', 'Docenko', 'doc@ukr.net', '0672888822',['ruller', 'album']))
clients.push(client8 = new Client(4, 'Stepan', 'Boiko', 'stepanBoiko@gmail.com', '0959994411',['pen', 'pencil', 'ruller', 'scissors', 'notebook']))
clients.push(client9 = new Client(10, 'Sveta', 'Koval', 'SvetaK@ukr.net', '0754758321',['pen', 'pencil', 'ruller']))
clients.push(client10 = new Client(1, 'Oksana', 'Velichko', 'bond@ukr.net', '0755558830',['pencil', 'ruller', 'scissors']))
console.log(clients)

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

let sortOrders = clients.sort(
     (order1, order2) =>
         order1.order.length - order2.order.length)
console.log(sortOrders)


//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
function Car(model, producer, year, maxspeed, engvol) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxspeed;
    this.engineVolume = engvol;
}

Car.prototype.drive = function (){
    console.log(` їдемо зі швидкістю ${this.maxSpeed} на годину`)
}


//info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    console.log(this)
}


//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (increase) {
    return newSpeed = this.maxSpeed + increase
}


//changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newVal) {
     return newValue = newVal
}


//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (name, exp) {
    return this.carDriver = {name: name, experience: exp}
}



//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

class CarClass {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
}

car = new CarClass('Camry', 'TOYOTA', 2024, 240, '2.4')

CarClass.prototype.drive = function () {
    console.log(` їдемо зі швидкістю ${this.maxSpeed} на годину`)
}


//info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
CarClass.prototype.info = function () {
    console.log(this)
}


//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
CarClass.prototype.increaseMaxSpeed = function (increase) {
    return newSpeed = this.maxSpeed + increase
}
console.log(car.increaseMaxSpeed(70))

//changeYear (newValue) - змінює рік випуску на значення newValue
CarClass.prototype.changeYear = function (newVal) {
    return newValue = newVal
}


//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
CarClass.prototype.addDriver = function (name, exp) {
    return this.carDriver = {name: name, experience: exp}
}
console.log(car.addDriver('vasya', 23))




//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
cinderellas = []
cinderellas.push(cinderella1 = new Cinderella('Sveta', 47, 39))
cinderellas.push(cinderella2 = new Cinderella('Valya', 21, 37))
cinderellas.push(cinderella3 = new Cinderella('Ilona', 39, 38))
cinderellas.push(cinderella4 = new Cinderella('Angela', 43, 36))
cinderellas.push(cinderella5 = new Cinderella('Vera', 31, 39))
cinderellas.push(cinderella6 = new Cinderella('Nadya', 53, 45))
cinderellas.push(cinderella7 = new Cinderella('Polina', 23, 40))
cinderellas.push(cinderella8 = new Cinderella('Karolina', 25, 37))
cinderellas.push(cinderella9 = new Cinderella('Susanna', 33, 38))
cinderellas.push(cinderella10 = new Cinderella('Katya', 28, 41))
console.log(cinderellas)

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince  {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
prince = new Prince('Mikola', 25, 45)

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let princess = 'unknown'
for (item of cinderellas) {
    if (item.footSize === prince.shoeSize) {
        princess = item.name
    }
}
console.log(princess)

//знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let futureWife = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize)
console.log(futureWife)



//Через Array.prototype. створити власний foreach, filter, map
Array.prototype.youngPrincess = function (callback) {
    let arr = []
    this.forEach(cind => {
        if (callback(cind)) {
            arr.push(cind)
        }
    })
    return arr
}
console.log(cinderellas.youngPrincess((princess) => princess.age < 30))


Array.prototype.bigFootCind = function (callback) {
    let arr = []
    this.filter(cind => {
        if (callback(cind)) {
            arr.push(cind)
        }
    })
    return arr
}
console.log(cinderellas.bigFootCind((cind) => cind.footSize > 40))


Array.prototype.cindElder = function (callback) {
    let arr = []
    this.map(cind => {
        if (callback(cind)) {
            arr.push(cind)
        }
    })
    return arr
}
console.log(cinderellas.bigFootCind((cind) => cind.age > 29))
