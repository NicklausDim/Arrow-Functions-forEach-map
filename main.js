function f1 (msg) {
    return (msg);
}

let f2 = function (msg) {
    return (msg);
}

let f3 = (msg) => {
    return (msg);
}

let f4 = msg => {
    return (msg);
}

let f5 = msg => msg;

let f6 = (msg, secPar) => msg + ' ' + secPar;

console.log(f1('Greetings from f1'));
console.log(f2('Greetings from f2'));
console.log(f3('Greetings from f3'));
console.log(f4('Greetings from f4'));
console.log(f5('Greetings from f5'));
console.log(f6('Greetings from f6', 'Ta daaa!'));

let pow = x => x*x;
console.log(pow(5));

document.querySelector('#test').addEventListener('click', e => alert(e.target.innerHTML));


let group = ['Burhanovic', 'Pio', 'Ana', 'Eleni', 'Bulent'];

group.forEach((val, i) => {
    console.log(i+1 + '. ' + val);
});


for (let i = 0; i < group.length; i++) {
    const val = group[i];
    console.log(i+1 + '. ' + val);
}








let x = group.forEach((val, i) => {
    return val;
});

console.log(x)
