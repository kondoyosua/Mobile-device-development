function fahrenheitToCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}

function calculateBMI(weight, height) {
    let bmi = weight / (height ** 2);
    
    if (bmi < 18.5) {
        return [bmi, "Underweight"];
    } else if (bmi < 25) {
        return [bmi, "Normal"];
    } else if (bmi < 30) {
        return [bmi, "Overweight"];
    } else {
        return [bmi, "Obese"];
    }
}

let fahrenheit = 99.20;
let celcius = fahrenheitToCelcius(fahrenheit);

let weight = 80;
let height = 1.75;
let [bmi, category] = calculateBMI(weight, height);

export {fahrenheit, celcius};
export {weight, height};
export {bmi, category};
export default calculateBMI;