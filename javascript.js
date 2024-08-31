//check-in mark states
let mainDivs,
mainDivH4s;

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