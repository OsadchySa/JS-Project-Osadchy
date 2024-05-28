//Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
//Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим оl
let form = document.createElement('form')
document.body.append(form)
form.classList.add('main')
let inputName = document.createElement('input')
form.append(inputName)
inputName.classList.add('inpClass')
let inputSurname = document.createElement('input')
form.append(inputSurname)
inputSurname.classList.add('inpClass')
let inputAge = document.createElement('input')
form.append(inputAge)
inputAge.classList.add('inpClass')
let but = document.createElement('button')
form.append(but)
but.classList.add('butClass')
but.innerText = 'set'
form.onsubmit = function (ev){
    ev.preventDefault()
    let olNSA = document.createElement('ol')
    document.body.append(olNSA)
    let liName = document.createElement('li')
    olNSA.append(liName)
    let liSurname = document.createElement('li')
    olNSA.append(liSurname)
    let liAge = document.createElement('li')
    olNSA.append(liAge)
    liName.innerText = inputName.value
    liSurname.innerText = inputSurname.value
    liAge.innerText = inputAge.value
}

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
//який при кожному перезавантажені сторінки буде додавати до неї +1
localStorage.setItem('number', 38)
let divReloadNumber = document.createElement('div')
divReloadNumber.classList.add('divReloadNumber')
document.body.append(divReloadNumber)
let divNum = document.createElement('div')
divNum.innerText = localStorage.getItem('number')
divReloadNumber.append(divNum)
let buttonReload = document.createElement('button')
divReloadNumber.append(buttonReload)
buttonReload.innerText = 'reload'

buttonReload.onclick = function (e){
    let newNumber = JSON.parse(localStorage.getItem('number'))+1
    localStorage.setItem('number', JSON.stringify(newNumber))
    divNum.innerText = localStorage.getItem('number')
}


/*зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів*/
let bigArr = [{date: '05/27/2024 08:00:11'}, {date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},
    {date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},
{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:12'},{date: '05/27/2024 08:00:10'},
{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},{date: '05/27/2024 08:00:10'},
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:13'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:14'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:15'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:16'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:17'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:18'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:19'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:20'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}
,
{date: '05/27/2024 08:00:10'}]

let nextBut = document.createElement('button')
let prevBut = document.createElement('button')
document.body.append(nextBut, prevBut)
nextBut.innerText = 'next'
prevBut.innerText = 'previous'

let sliceArr = []
sliceArr.push(bigArr.slice(0, 10))
sliceArr.push(bigArr.slice(10, 20))
sliceArr.push(bigArr.slice(20, 30))
sliceArr.push(bigArr.slice(30, 40))
sliceArr.push(bigArr.slice(40, 50))
sliceArr.push(bigArr.slice(50, 60))
sliceArr.push(bigArr.slice(60, 70))
sliceArr.push(bigArr.slice(70, 80))
sliceArr.push(bigArr.slice(80, 90))
sliceArr.push(bigArr.slice(90, 100))

localStorage.setItem('iter', 0)
let firstDiv = document.createElement('div')
firstDiv.innerText = JSON.stringify(sliceArr[0])
document.body.append(firstDiv)
nextBut.onclick = function (){
    let timeArr10 = document.createElement('div')
    let i = JSON.parse(localStorage.getItem('iter')) + 1
    timeArr10.innerText = JSON.stringify(sliceArr[i])
    document.body.append(timeArr10)
    localStorage.setItem('iter', i)
}
prevBut.onclick = function (){
    timeArr10 = document.createElement('div')
    let i = JSON.parse(localStorage.getItem('iter')) - 1
    timeArr10.innerText = JSON.stringify(sliceArr[i])
    document.body.append(timeArr10)
    localStorage.setItem('iter', i)
}




//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//зробіть так, щоб при натисканні на кнопку зникав елемент з id="text"
let h1Text = document.createElement('h1')
document.body.append(h1Text)
h1Text.id = 'text'
h1Text.innerText = 'HELLO'
let dissapBut = document.createElement('button')
document.body.append(dissapBut)
dissapBut.classList.add('dissapButton')
dissapBut.innerText = 'push'
dissapBut.onclick = function (){
    h1Text.remove()
}

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//та повідомити про це користувача
let inpAge = document.createElement('input')
document.body.append(inpAge)
inpAge.classList.add('marg')
let checkBut = document.createElement('button')
checkBut.innerText = 'check'
document.body.append(checkBut)
checkBut.onclick = function (){
    if (inpAge.value < 18){
        let mes = document.createElement('p')
        mes.innerText = 'less than 18!!!'
        document.body.append(mes)
    }
    if (inpAge.value >= 18){
        let mes = document.createElement('p')
        mes.innerText = 'more than 18!!!'
        document.body.append(mes)
    }
}


//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let divOfInputs = document.createElement('div')
divOfInputs.classList.add('divOfInp')
document.body.append(divOfInputs)
let inpBut = document.createElement('button')
inpBut.innerText = 'OK'
document.body.append(inpBut)

let inpQuanLines = document.createElement('input')
let inpQuanCell = document.createElement('input')
let inpCellFill = document.createElement('input')
divOfInputs.append(inpQuanLines,inpQuanCell,inpCellFill)

inpBut.onclick = function (){
    let mainDiv = document.createElement('div')
    mainDiv.classList.add('mainDiv')
    document.body.append(mainDiv)
    for (i = 0; i < inpQuanLines.value; i++){
        let midDiv = document.createElement('div')
        mainDiv.append(midDiv)
    }
}
