//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
elements = ['apple', 1000, true, -888, 'pencil', '777', 123321, 'John', 'Terminator', 3.14 ]
console.log(elements[0])
console.log(elements[1])
console.log(elements[2])
console.log(elements[3])
console.log(elements[4])
console.log(elements[5])
console.log(elements[6])
console.log(elements[7])
console.log(elements[8])
console.log(elements[9])


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Little Prince',
    pageCount: 270,
    genre: 'tale'
}
let book2 = {
    title: 'Harry Potter',
    pageCount: 520,
    genre: 'novel'
}
let book3 = {
    title: 'A game of thrones',
    pageCount: 864,
    genre: 'novel'
}


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Little Prince',
    pageCount: 270,
    genre: 'tale',
    authors: [author1 = {authorName: 'Exupery', authorAge: 44}, author2 = {authorName: 'Kotliarevsky', authorAge: 55}]
}
let book5 = {
    title: 'Harry Potter',
    pageCount: 520,
    genre: 'novel',
    authors: [author1 = {authorName: 'Rowling', authorAge:58}, author2 = {authorName: 'Shevchenko', authorAge: 47}]
}
let book6 = {
    title: 'A game of thrones',
    pageCount: 864,
    genre: 'novel',
    authors: [author1 = {authorName: 'George Martin', authorAge:75}, author2 = {authorName: 'Stepan', authorAge: 120}]
}


//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//Вивести в консоль пароль кожного користувача
users = [
    user1 = {name: 'Ivan', username: 'qqq', password: 'qwe'},
    user2 = {name: 'Mikola', username: 'www', password: 'rty'},
    user3 = {name: 'Maksim', username: 'eee', password: 'uio'},
    user4 = {name: 'Olena', username: 'rrr', password: 'pas'},
    user5 = {name: 'Sveta', username: 'ttt', password: 'dfg'},
    user6 = {name: 'Olya', username: 'yyy', password: 'hjk'},
    user7 = {name: 'Stepan', username: 'uuu', password: 'lzx'},
    user8 = {name: 'Petro', username: 'iii', password: 'cvb'},
    user9 = {name: 'Katerina', username: 'ooo', password: 'nmq'},
    user10 = {name: 'Pasha', username: 'ppp', password: 'wer'}
]
console.log(user1.password)
console.log(user2.password)
console.log(user3.password)
console.log(user4.password)
console.log(user5.password)
console.log(user6.password)
console.log(user7.password)
console.log(user8.password)
console.log(user9.password)
console.log(user10.password)


//описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let dayIndicators = [
    day1 = {morningTemp: 8, dayTemp: 19, eveningTemp: 12},
    day2 = {morningTemp: 10, dayTemp: 22, eveningTemp: 15},
    day3 = {morningTemp: 10, dayTemp: 24, eveningTemp: 15},
    day4 = {morningTemp: 15, dayTemp: 28, eveningTemp: 19},
    day5 = {morningTemp: 14, dayTemp: 27, eveningTemp: 18},
    day6 = {morningTemp: 14, dayTemp: 28, eveningTemp: 18},
    day7 = {morningTemp: 15, dayTemp: 29, eveningTemp: 17}
]



//**********************************************************************************************************************
//Логічні розгалуження:
//Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 38;
if (x !== 0) {
    console.log('Right')
}
else {console.log('Wrong')}

//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = 38
if (time <= 15) {
    console.log('First')
}
else if (time >= 16 && time<= 30) {
    console.log('Second')
}
else if (time >= 31 && time <= 45) {
    console.log('Third')
}
else {console.log('Fourth')}


//У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 18
if (day <= 10) {decade = 'first'}
else if (day >= 11 && day <= 20) {decade = 'second'}
else {decade = 'third'}


//Скласти розклад на тиждень за домопоги switch.
//Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//(можна замість плану на день, назву дня англійською).
let dayNumber = 3
switch (dayNumber) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
}


//Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
let num1 = 888
let num2 = 999
if (num1 > num2){
    console.log(num1)
}
else if (num2 > num1) {
    console.log(num2)
}
else {console.log('equal'
)}


//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let xx = 333 ? 'Ok' : 'default'
console.log(xx)


//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[1].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[2].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[3].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[4].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[5].monthDuration > 5) {console.log('Супер')}