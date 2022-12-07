let daysNumber = document.querySelector('.days-number');
let buttonNext = document.querySelector('.button-next');
let buttonPrevious = document.querySelector('.button-previous');

createCalendar(daysNumber, 11, 2022, false);

function createCalendar(container, month, year, insert) {
    let daysAmount = howMuchDays(month, year);
    let date = new Date(year, month);
    for (let i = 1; i <= daysAmount; i++) {
        let dayNum = document.createElement('div');
        dayNum.innerHTML = `${i}`;
        if (!insert){
        container.append(dayNum);}
        else dayNum.replaceWith(dayNum);
        container.firstElementChild.style.gridColumn = date.getDay();
    }
    console.log(date.getFullYear(), date.getMonth())
}
function howMuchDays(month, year) {
    let firstMonth = new Date(year, month, 1);
    let secondMonth = new Date(year, month + 1, 1);
    return Math.round((secondMonth - firstMonth) / 1000 / 3600 / 24);
}
let data = new Date(2022, 11);
let monthDecreaseCounter = decreaseNum(data.getMonth());

buttonPrevious.onclick = ()=>{
createCalendar(daysNumber, monthDecreaseCounter(), 2022, true)
}
function decreaseNum(number) {
    number--;
    return function () {
        return number--;
    }
}
let monthIncreaseCounter = increaseNum(data.getMonth());
buttonNext.onclick = ()=>{
createCalendar(daysNumber, monthIncreaseCounter(), 2022, true)
}
function increaseNum(number) {
    number++;
    return function () {
        return number++;
    }
}

