function myRandom(num) {
    return Math.floor(Math.random() * num + 1)
}

// console.log(myRandom(23));

// for (variavles; condition; work) {
//     body
// }

for (let i = 0; i < 3; i++) {
    let num1 = myRandom(20)
    let num2 = myRandom(10)
    let sym = myRandom(4) /* 1 2 3 4 */
    let com
    
    if (sym == 1) {
        sym = "+"
        com = num1 + num2
    } else if (sym == 2) {
        sym = "-"
        com = num1 - num2
    } else if (sym == 3) {
        sym = "*"
        com = num1 * num2
    }else if (sym == 4) {
        sym = "/"
        com = num1 / num2
    }
    
    let user = +prompt(`Решите пример: ${num1} ${sym} ${num2}`);


    if (user == com) {
        alert('Верно');
    } else {
        alert('Неверно ' + com);
    }
}

// console.log(myRandom(5));

// let x = myRandom(3)

// console.log(x);

// if (x == 2) {
//     x = '+-+-*/'
//     console.log(x);
// }