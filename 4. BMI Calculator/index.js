function main(input) {
    let [height, weight] = input.split(" ")
    height = Number(height)
    weight = Number(weight)
    let bmi = (weight / Math.pow(height, 2)).toFixed(2)
    let msg
    if (bmi < 18.5) {
        msg = "Underweight"
    }
    else if (bmi >= 18.5 && bmi < 25.0) {
        msg = 'Normal weight'
    }
    else if (bmi >= 25.0 && bmi < 30) {
        msg = 'Overweight'
    }
    else {
        msg = "Obese"
    }

    console.log(`BMI: ${bmi}\n${msg}`)
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim()); 
});