const promptNumber = (name) => {
    const num = Number(prompt(`Enter number ${name}:`));

    if(isNaN(num)){
        alert("Wrong number, try again.");

        return promptNumber(name)
    }

    return num;
}

const secondTask = () => {
    const x = promptNumber("x");
    const y = promptNumber("y");

    console.log(`x + y = ${x + y}`)
    console.log(`x - y = ${x - y}`)
    console.log(`x * y = ${x * y}`)
    console.log(`x / y = ${x / y}`)
}

const thirdTask = () => {
    let sum = 0;
    let a = Math.floor(promptNumber("a"));
    let b = Math.floor(promptNumber("b"));

    if (a > b) {
        const temp = a;
        a = b
        b = temp
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    console.log(`Sum of all numbers from ${a} to ${b} inclusively: ${sum}`)
}

document.addEventListener("DOMContentLoaded", () => {
    secondTask()
    thirdTask()
});
