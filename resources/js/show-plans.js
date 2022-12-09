getPlans();

function getPlans(){
    let plansElem = document.querySelector('.plans');
    let noPlans = document.querySelector('.no-plans');
    for (let i = 1; i<=31; i++){
        if (localStorage.getItem(`event${i}`)){
            noPlans.hidden=true;
            let planDiv = document.querySelector('.plan');
            let plan = document.createElement('div');
            plan.className = 'plan__container';
            let planDate = document.createElement('p');
            planDate.className = 'plan-date';
            let planText = document.createElement('p');
            planText.className = 'plan-text';
            planDate.textContent = `${i}.12.2022`;
            planText.textContent =  localStorage.getItem(`event${i}`);
            plan.append(planDate, planText);
            planDiv.append(plan);
            console.log(localStorage.getItem(`event${i}`), i);
        }
         if (localStorage.length === 0){
            plansElem.style.display = 'none';
            noPlans.hidden = false;
        }
    }
    let onePlan = document.querySelector('.plan');
    if (localStorage.length===2){
        onePlan.style.gridTemplateColumns = '1fr';
    }
}
