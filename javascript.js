//check-in mark states
let mainDivs,
mainDivH4s;

let checkInSqaures, checkInCol;

checkInSqaures = document.querySelector(".check-in-col1").children;
// console.log(checkInSqaures);
checkInCol = document.querySelectorAll(".check-in-col");
console.log(checkInCol);
let monthArr = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May',
    'Apr', 'Mar', 'Feb', 'Jan'];

for(let i = 4; i <= checkInSqaures.length; i++) {
    if (i % 4 === 0) {
        checkInSqaures[i].textContent = monthArr.shift();
        checkInSqaures[i].classList.add('month-cell');
    }
}

Array.from(checkInCol).slice(1).forEach(element => {
    console.log('in checkIncol');
    console.log(element);
    Array.from(element.children).slice(1).map(ele => {
        let randomInt = getRandomInt(4);
        console.log(randomInt)
        applyRandomClr(ele, randomInt);
    })
});

function applyRandomClr(ele, randomInt) {
    // console.log(randomInt);
    switch (randomInt) {
        case 0:
            ele.classList.add("green-1");
            break;
        case 1:
            ele.classList.add("green-2");
            break;
        case 2:
            ele.classList.add("green-3");
            break;
        case 3:
            ele.classList.add("green-4");
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  








mainDivs = document.querySelector(".main").children;
// console.log(mainDivs);

mainDivs = Array.from(mainDivs);
// console.log(mainDivs[0]);

let acc = [];

mainDivH4s = mainDivs.reduce(getMainH4, []).slice(0,6);
console.log(mainDivH4s);
function getMainH4(a, c) {
    // console.log(c);
    let h4 = c.firstChild;
    // console.log(h4)
    a.push(h4);
    // console.log(a);
    return a
    console.log(h4)
}