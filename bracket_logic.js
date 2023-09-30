//testing of the theory
const date = new Date();

function bracketOption1() 
{
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += date.getMilliseconds();
    }
    console.log(result);
}

function bracketOption2() {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += date.getMilliseconds();
    }
    console.log(result);
}

console.time("BracketOption1");
bracketOption1();
console.timeEnd("BracketOption1");

console.time("BracketOption2");
bracketOption2();
console.timeEnd("BracketOption2");