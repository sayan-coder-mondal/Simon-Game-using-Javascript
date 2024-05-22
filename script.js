let arr1 = [];
let arr2 = [];
function comp() {
    // let arr2=[];
    let rand = Math.round(1 + (4 - 1) * Math.random());
    // console.log(rand);
    if (rand == 1) {
        document.getElementById("red").classList.add('red2');
        setTimeout(() => {
            document.getElementById("red").classList.remove('red2');
        }, 1000);
    }
    else if (rand == 2) {
        document.getElementById("blue").classList.add('blue2');
        setTimeout(() => {
            document.getElementById("blue").classList.remove('blue2');
        }, 1000);
    }
    else if (rand == 3) {
        document.getElementById("yellow").classList.add('yellow2');
        setTimeout(() => {
            document.getElementById("yellow").classList.remove('yellow2');
        }, 1000);
    }
    else if (rand == 4) {
        document.getElementById("green").classList.add('green2');
        setTimeout(() => {
            document.getElementById("green").classList.remove('green2');
        }, 1000);
    }
    arr1.push(rand)
    document.getElementById("round").innerText = `Round: ${arr1.length}`;
    document.getElementById("score").innerText = `Score: ${(arr1.length - 1) * 10}`
}
function strt() {
    arr1=[];
    
    document.getElementById('result').innerText='';
    document.getElementById('red').setAttribute('onclick','click_red()');
    document.getElementById('blue').setAttribute('onclick','click_blue()');
    document.getElementById('yellow').setAttribute('onclick','click_yellow()');
    document.getElementById('green').setAttribute('onclick','click_green()');
    
    comp();
    // setTimeout(comp,1000);
}
// setTimeout(comp,2000);


function click_red() {
    arr2.push(1);
    // console.log("function click_red()");
    document.getElementById("red").classList.add('red2');
    setTimeout(() => {
        document.getElementById("red").classList.remove('red2');
    }, 500);
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        // console.log("true");

        arr2 = []
        setTimeout(() => {
            comp()
        }, 1000);
    }
    else if (arr1.length == arr2.length && JSON.stringify(arr1) != JSON.stringify(arr2)) {
        // alert(`Game over. Your score is ${(arr1.length - 1) * 10}`);
        document.getElementById("result").innerText=`Game over. Your score is ${(arr1.length - 1) * 10}`;
        document.getElementById('btn').innerText='Play Again';
        arr2=[];

    }
}
function click_blue() {
    arr2.push(2);
    // console.log("function click_blue()");
    document.getElementById("blue").classList.add('blue2');
    setTimeout(() => {
        document.getElementById("blue").classList.remove('blue2');
    }, 500);
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        // console.log("true")
        arr2 = []
        setTimeout(() => {
            comp()
        }, 1000);
    }
    else if (arr1.length == arr2.length && JSON.stringify(arr1) != JSON.stringify(arr2)) {
        // alert(`Game over. Your score is ${(arr1.length - 1) * 10}`);
        document.getElementById("result").innerText=`Game over. Your score is ${(arr1.length - 1) * 10}`;
        document.getElementById('btn').innerText='Play Again';
        arr2=[];

    }
}
function click_yellow() {
    arr2.push(3);
    // console.log("function click_yellow()");
    document.getElementById("yellow").classList.add('yellow2');
    setTimeout(() => {
        document.getElementById("yellow").classList.remove('yellow2');
    }, 500);
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        // console.log("true")
        arr2 = []
        setTimeout(() => {
            comp()
        }, 1000);
    }
    else if (arr1.length == arr2.length && JSON.stringify(arr1) != JSON.stringify(arr2)) {
        // alert(`Game over. Your score is ${(arr1.length - 1) * 10}`);
        document.getElementById("result").innerText=`Game over. Your score is ${(arr1.length - 1) * 10}`;
        document.getElementById('btn').innerText='Play Again';
        arr2=[];

    }
}
function click_green() {
    arr2.push(4);
    // console.log("function click_green()");
    document.getElementById("green").classList.add('green2');
    setTimeout(() => {
        document.getElementById("green").classList.remove('green2');
    }, 500);
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        // console.log("true")
        arr2 = []
        setTimeout(() => {
            comp()
        }, 1000);
    }
    else if (arr1.length == arr2.length && JSON.stringify(arr1) != JSON.stringify(arr2)) {
        // alert(`Game over. Your score is ${(arr1.length - 1) * 10}`);
        document.getElementById("result").innerText=`Game over. Your score is ${(arr1.length - 1) * 10}`;
        document.getElementById('btn').innerText='Play Again';
        arr2=[];

    }
}

