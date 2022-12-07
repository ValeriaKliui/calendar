let daysNumber = document.querySelector('.days-number');
let buttonNext = document.querySelector('.button-next');
let buttonPrevious = document.querySelector('.button-previous');
let monthName = document.querySelector('.month-name');
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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
    console.log(date.getMonth(), date.getFullYear())
    monthName.innerHTML = (months[date.getMonth()]);
}
function howMuchDays(month, year) {
    let firstMonth = new Date(year, month, 1);
    let secondMonth = new Date(year, month + 1, 1);
    return Math.round((secondMonth - firstMonth) / 1000 / 3600 / 24);
}
let data = new Date(2022, 11);
let counter = makeCounter(data.getMonth());
buttonPrevious.onclick = ()=>{
createCalendar(daysNumber, counter.decrease(), 2022, true);
}
function makeCounter(num) {
    let count = num;
    function counter() {
      return ++count;
    }
    counter.decrease = () => --count;
    return counter;
  }

  buttonNext.onclick = ()=>{
      createCalendar(daysNumber, counter(), 2022, true);
}