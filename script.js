let Box = document.getElementById("box");
let ChangePosition2 = document.getElementById("btn2");
let ChangePosition1 = document.getElementById("btn1");
let i = 0;

ChangePosition2.addEventListener('mouseover', () => {
    if (i < 10) {
        i++;
        let vertical = Math.floor(Math.random() * 71) + 15;
        let horizon = Math.floor(Math.random() * (83 - 27 + 1)) + 27;
        Box.style.left = horizon + "%";
        Box.style.top = vertical + "%";
        console.log(i)
    }
})


ChangePosition1.addEventListener('mouseover', () => {
    if (i % 2 == 1 && i >= 10) {
        i++;
        middle = ChangePosition2.innerHTML;
        ChangePosition2.innerHTML = ChangePosition1.innerHTML;
        ChangePosition1.innerHTML = middle;
        console.log(i)
    }
})
ChangePosition2.addEventListener('mouseover', ()=>{
    if (i%2 == 0 && i >= 10){
        i++;
        middle = ChangePosition2.innerHTML;
        ChangePosition2.innerHTML = ChangePosition1.innerHTML;
        ChangePosition1.innerHTML = middle;
    }
})

