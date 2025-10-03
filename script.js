
    
    
 let testVal = 0;

document.addEventListener("DOMContentLoaded", () => {
    const demo = document.getElementById("demo");
    const button = document.querySelector("button");
    const num1 = document.getElementById("num1");   
    const num2 = document.getElementById("num2");
    const cashmoney = document.getElementById("cashmoney");

    button.addEventListener("click", () => {
        demo.textContent = testVal;
        testVal++;

        const val1 = num1.value;
        const val2 = num2.value;

        //let tempHold = 0;
        let tempHold = val1 + val2;
        /*parseInt(val1) + parseInt(val2);*/
        /*cashmoney.textContent = "Output: " + tempHold;*/
        cashmoney.innerHTML = "Output: " + tempHold;



    });
});

