const registerNumbers = (firstOperand, currentDisplayNumber, previousDisplayNumber) => {
    
    const numberZeroButton = document.querySelector(".button-0");
    numberZeroButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("0") + Number.EPSILON) * 1000) / 1000; 
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "0") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberOneButton = document.querySelector(".button-1");
    numberOneButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("1") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "1") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberTwoButton = document.querySelector(".button-2");
    numberTwoButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("2") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "2") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberThreeButton = document.querySelector(".button-3");
    numberThreeButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("3") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "3") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberFourButton = document.querySelector(".button-4");
    numberFourButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("4") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "4") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberFiveButton = document.querySelector(".button-5");
    numberFiveButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("5") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "5") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberSixButton = document.querySelector(".button-6");
    numberSixButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("6") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "6") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberSevenButton = document.querySelector(".button-7");
    numberSevenButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("7") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "7") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberEightButton = document.querySelector(".button-8");
    numberEightButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("8") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "8") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const numberNineButton = document.querySelector(".button-9");
    numberNineButton.addEventListener("click", () => {
        if (currentDisplayNumber.textContent === "0" || currentDisplayNumber.textContent === "Error") {
            firstOperand = Math.round((Number("9") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        }else {
            firstOperand = Math.round((Number(currentDisplayNumber.textContent + "9") + Number.EPSILON) * 1000) / 1000;
            currentDisplayNumber.textContent = firstOperand;
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });
};

const registerEventListeners = (firstOperand, secondOperand, currentDisplayNumber, previousDisplayNumber, percentage, negative, errorMessage, error, clear, add, subtract, multiply, divide) => {

    const clearButton = document.querySelector(".button-ac");
    clearButton.addEventListener("click", () => {
        firstOperand = Number("0");
        currentDisplayNumber.textContent = firstOperand;

        if (previousDisplayNumber.textContent !== "") {
        errorMessage = "";
        previousDisplayNumber.textContent = errorMessage;
        secondOperand = "";
        };
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const signButton = document.querySelector(".button-sign");
    signButton.addEventListener("click", () => {
        firstOperand = - Number(currentDisplayNumber.textContent);
        currentDisplayNumber.textContent = firstOperand;
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const percentageButton = document.querySelector(".button-percentage");
    percentageButton.addEventListener("click", () => {
        percentage = true;
        firstOperand = (Math.round((Number(currentDisplayNumber.textContent) + Number.EPSILON) * 1000) / 1000);
        previousDisplayNumber.textContent = Number(firstOperand);
        currentDisplayNumber.textContent = Number("0");
        checkMaxValue(currentDisplayNumber, previousDisplayNumber);
        return percentage;
    });

    const commaButton = document.querySelector(".button-comma");
    commaButton.addEventListener("click", () => {
    if (currentDisplayNumber.textContent.includes(".")) {
        errorMessage = "Can't add another comma"
        previousDisplayNumber.textContent = errorMessage;
        clear = "0";
        currentDisplayNumber.textContent = clear;
    };
    if (!currentDisplayNumber.textContent.includes(".")) {
        if (currentDisplayNumber === "0") {
            firstOperand = String("0.");
            currentDisplayNumber.textContent = firstOperand;
        };

        if (currentDisplayNumber.textContent !== "0") {
            firstOperand = String(currentDisplayNumber.textContent) + ".";
            currentDisplayNumber.textContent = firstOperand;
        };
    };
    checkMaxValue(currentDisplayNumber, previousDisplayNumber);
    });

    const sumButton = document.querySelector(".button-sum");
    sumButton.addEventListener("click", () => {
        add = true;
        firstOperand = Number(currentDisplayNumber.textContent);
        previousDisplayNumber.textContent = firstOperand;
        currentDisplayNumber.textContent = Number("0");
        return add;
    });

    const differenceButton = document.querySelector(".button-difference");
    differenceButton.addEventListener("click", () => {
        subtract = true;
        firstOperand = Number(currentDisplayNumber.textContent);
        previousDisplayNumber.textContent = firstOperand;
        currentDisplayNumber.textContent = Number("0");
        return subtract;
    });

    const multiplicationButton = document.querySelector(".button-multiplication");
    multiplicationButton.addEventListener("click", () => {
        multiply = true;
        firstOperand = Number(currentDisplayNumber.textContent);
        previousDisplayNumber.textContent = firstOperand;
        currentDisplayNumber.textContent = Number("0");
        return multiply;
    });

    const divisionButton = document.querySelector(".button-division");
    divisionButton.addEventListener("click", () => {
        divide = true;
        firstOperand = Number(currentDisplayNumber.textContent);
        previousDisplayNumber.textContent = firstOperand;
        currentDisplayNumber.textContent = Number("0");
        return divide;
    });

    const equalButton = document.querySelector(".button-equal");
    equalButton.addEventListener("click", () => {
        if (add === true) {
            firstOperand = Number(previousDisplayNumber.textContent);
            secondOperand = Number(currentDisplayNumber.textContent);
            currentDisplayNumber.textContent = Math.round(((firstOperand + secondOperand) + Number.EPSILON) * 1000) / 1000;
            previousDisplayNumber.textContent = `${firstOperand}+${secondOperand}`;
            checkMaxValue(currentDisplayNumber, previousDisplayNumber);
            add = false;
            return secondOperand;
        };
        if (subtract === true) {
            firstOperand = Number(previousDisplayNumber.textContent);
            secondOperand = Number(currentDisplayNumber.textContent);
            currentDisplayNumber.textContent = Math.round(((firstOperand - secondOperand) + Number.EPSILON) * 1000) / 1000;
            previousDisplayNumber.textContent = `${firstOperand}-${secondOperand}`;
            checkMaxValue(currentDisplayNumber, previousDisplayNumber);
            subtract = false;
            return secondOperand;
        };
        if (multiply === true) {
            firstOperand = Number(previousDisplayNumber.textContent);
            secondOperand = Number(currentDisplayNumber.textContent);
            currentDisplayNumber.textContent = Math.round(((firstOperand * secondOperand) + Number.EPSILON) * 1000) / 1000;
            previousDisplayNumber.textContent = `${firstOperand}x${secondOperand}`;
            checkMaxValue(currentDisplayNumber, previousDisplayNumber);
            multiply = false;
            return secondOperand;
        };
        if (divide === true) {
            firstOperand = Number(previousDisplayNumber.textContent);
            secondOperand = Number(currentDisplayNumber.textContent);
            currentDisplayNumber.textContent = Math.round(((firstOperand / secondOperand) + Number.EPSILON) * 1000) / 1000;
            previousDisplayNumber.textContent = `${firstOperand}/${secondOperand}`;
            if (currentDisplayNumber.textContent === "Infinity") {
                error = "Error";
                currentDisplayNumber.textContent = error;
                return error;
            };
            if (currentDisplayNumber.textContent !== "Infinity") {
                checkMaxValue(currentDisplayNumber, previousDisplayNumber);
                divide = false;
                return secondOperand;
            };
        };
        if (percentage === true) {
            firstOperand = Number(previousDisplayNumber.textContent);
            secondOperand = Number(currentDisplayNumber.textContent);
            currentDisplayNumber.textContent = (Math.round(((firstOperand * secondOperand) + Number.EPSILON) * 1000) / 1000) / 100;
            previousDisplayNumber.textContent = `${firstOperand}% x${secondOperand}`;
            checkMaxValue(currentDisplayNumber, previousDisplayNumber);
            percentage = false;
            return secondOperand;
        };
    });
};

const checkMaxValue = (currentDisplayNumber, previousDisplayNumber) => {
    if (currentDisplayNumber.textContent > 9999999) {
        currentDisplayNumber.textContent = Number("0");
        previousDisplayNumber.textContent = "Max value exceeded";
    };
};

const calculator = () => {        
    let currentDisplayNumber = document.querySelector(".current-display");
    let previousDisplayNumber = document.querySelector(".previous-display");
    let firstOperand;
    let secondOperand;
    let errorMessage;
    let error;
    let clear;
    let negative;
    let add = false;
    let subtract = false;
    let multiply = false;
    let divide = false;
    let percentage = false;
    registerNumbers(firstOperand, currentDisplayNumber, previousDisplayNumber);
    registerEventListeners(firstOperand, secondOperand, currentDisplayNumber, previousDisplayNumber, percentage, negative, errorMessage, error, clear, add, subtract, multiply, divide);
};

calculator()