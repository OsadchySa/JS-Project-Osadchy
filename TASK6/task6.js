//Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)


//Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let hw = 'hello world'.toUpperCase()
let li = 'lorem ipsum'.toUpperCase()
let jic = 'javascript is cool'.toUpperCase()


//Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL
let HW = 'hello world'.toLowerCase()
let LI = 'lorem ipsum'.toLowerCase()
let JIC = 'javascript is cool'.toLowerCase()


//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів
let str = ' dirty string   '
let cleanStr = str.substring(1, 13)


//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні'
let arrStr1 = str1.split(' ')


//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові
let arrOfNums = [10,8,-7,55,987,-1011,0,1050,0]
let arrOfStrings = arrOfNums.map(num => {
    return num.toString()
})
console.log(arrOfStrings)
console.log(arrOfNums)


//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3]
let sortNums = nums.sort((num1, num2) => num1 - num2)
console.log(sortNums)
let revSortNums = nums.sort((num1, num2) => num2 - num1)
console.log(revSortNums)


//є масив
//відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ]
let monDurSort = coursesAndDurationArray.sort(
    (duration1, duration2) =>
duration1.monthDuration - duration2.monthDuration)
console.log(monDurSort)

//відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let longCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5)
console.log(longCourses)

//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let idCourses = coursesAndDurationArray.map((course, index) => {
    course.id = index + 1
    return course
})
console.log(idCourses)

//описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
let cardSuits = ['spade', 'diamond', 'heart', 'clubs']
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker']
let colors = ['red', 'black']

let deckOfCards = cardSuits.reduce((accum, suit)=> {
    values.forEach(value => {
        let color = (suit === 'diamond' || suit === 'heart') ? colors[0] : colors[1]
        accum.push({
            cardSuit: suit,
            value: value,
            color: color
        })
    })
    return accum
}, [])

let deckOfCardsWithoutJoker = deckOfCards.filter(cerd => cerd.value !== 'joker')
console.log(deckOfCardsWithoutJoker)

//знайти піковий туз
let spadeAce = deckOfCardsWithoutJoker.find(card => card.cardSuit === 'spade' && card.value === 'ace')
console.log(spadeAce)

//всі шістки
let allSixes = deckOfCardsWithoutJoker.filter(card => card.value === '6')
console.log(allSixes)

//всі червоні карти
let allRed = deckOfCardsWithoutJoker.filter(card => card.color === 'red')
console.log(allRed)

//всі буби
let allDiamond = deckOfCardsWithoutJoker.filter(card => card.cardSuit === 'diamond')
console.log(allDiamond)

//всі трефи від 9 та більше
let allClubsFrom9 = deckOfCardsWithoutJoker.filter(card => card.cardSuit === 'clubs' && card.value !== '6' &&
    card.value !== '7' && card.value !=='8')
console.log(allClubsFrom9)


//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
