//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sqRectangle(a, b) {
    return a * b
}

//створити функцію яка обчислює та повертає площу кола з радіусом r
function sqCircle(r) {
    return 3.14*r**2
}

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sqCylinder(h, r) {
    return 2*3.14*r*h + 2*3.14*r**2
}

//створити функцію яка приймає масив та виводить кожен його елемент
function elOfArr(array) {
    for (const obj of array) {
        console.log(obj)
    }
}

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = 'Загалом звязана і повністю послідовна сукупність знаків.' +
    ' Відтворені на письмі або друком авторська праця, висловлювання, документи тощо.'
function createPar(par) {
    document.write(`<p style="width: 20vw">${par}</p>`)
}
createPar(text)

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let line = 'Доброго вечора!'
function createList(lis) {
    document.write(
        `<ul><li>${lis}</li> <li>${lis}</li> <li>${lis}</li></ul>`
    )
}
createList(line)

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let line2 = 'Динамо Чемпіон!'
function createListLoop(lis, numLis) {
    document.write(`<ul>`)
    for (let i = 0; i < numLis; i++) {
        document.write(`<li>${lis}</li>`)
    }
    document.write(`</ul>`)
}
createListLoop(line2, 9)

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let coursesAndDurationArray = [
    'JavaScript Complex', 5, 'Java Complex', 6, 'Python Complex', 6, 5>4, 5<4, 7]
function simpleList(arr) {
    for (const i of arr) {
        document.write(`<li>${i}</li>`)
    }
}
simpleList(coursesAndDurationArray)

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
]
function documentOut(array) {
    for (const user of users) {
        document.write(`<div>
                            <p>${user.id} ${user.name}  ${user.age}</p>   
                        </div>`)
    }
}
documentOut(users)

//створити функцію яка повертає найменьше число з масиву
function minNumber(arrOfNum) {
    let minNum = arrOfNum[0]
    for (const num of arrOfNum) {
        if (num < minNum) {
            minNum = num
        }
    }
    return minNum
}
console.log(minNumber(numbers = [3,5, -178,3,7,1, -444]))

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//Приклад sum([1,2,10]) //->13
function sumOfNum(arrayOfNum) {
    let sum = 0
    for (const num of arrayOfNum) {
        sum += num
    }
    return sum
}
console.log(sumOfNum(numbers = [3,5, 178,3,7,-19]))

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let memoryNum = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = memoryNum
    return arr
}
console.log(swap([11,22,33,44],1,2))

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const carVal of currencyValues) {
        if (carVal.currency === exchangeCurrency) {
            return sumUAH/carVal.value
       }

    }
}
console.log(exchange(8400,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))