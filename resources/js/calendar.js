let daysNumber = document.querySelector('.days-number');
let buttonNext = document.querySelector('.button-next');
let buttonPrevious = document.querySelector('.button-previous');
let monthName = document.querySelector('.month-name');
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

createCalendar(daysNumber, 11, 2022, false);

function createCalendar(container, month, year, exist) {
    let daysAmount = howMuchDays(month, year);
    let date = new Date(year, month);
    for (let i = 1; i <= daysAmount; i++) {
        let dayNumContainer = document.createElement('div');
        dayNumContainer.classList = 'day-number__container';
        let addEventField = document.createElement('input');
        addEventField.classList = 'day-number__field';
        let dayNum = document.createElement('p');
        dayNum.className = 'day-number';
        dayNum.innerHTML = `${i}`;
        if (!exist) {
            container.append(dayNumContainer);
            dayNumContainer.append(addEventField);
            dayNumContainer.append(dayNum);
        }
        else 
        {
            container.append(dayNumContainer);
        };
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
buttonPrevious.onclick = () => {
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
buttonNext.onclick = () => {
    createCalendar(daysNumber, counter(), 2022, true);
}
let selectedCell;
daysNumber.onclick = function (event) {
    let target = event.target;
    createEvent("event", target.closest('.day-number__container').lastChild.textContent, target);
    addPlanText(target.closest('.day-number__container').firstChild);
}
function addPlanText(cell) {
    selectedCell = cell;
    selectedCell.textContent = planText;
}
let planText;
let allPlans = [];
if (localStorage.getItem('allplans')) {
    allPlans.push(localStorage.getItem('allplans'));
}
function createEvent(key, i, value) {
    value.oninput = () => {
        localStorage.setItem(`${key}${i}`, value.value);
        allPlans.push(i, localStorage.getItem(`${key}${i}`));
        localStorage.setItem('allplans', allPlans);
    }
    planText = value.value;
}

let dayNum = document.querySelectorAll('.day-number');
let dayNumField = document.querySelectorAll('.day-number__field');
pickDates();

function pickDates() {
    let plansAndDates = sliceIntoChunks(allPlans.map(x => x.split(','))[0], 2);
   if (plansAndDates) {for (let i = 0; i < plansAndDates.length; i++) {
        dayNumField[plansAndDates[i][0] - 1].value = plansAndDates[i][1];
    }
}
}
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    if (arr){
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
}
    return res;
}
