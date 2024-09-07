const mark = {
    fullName: 'Mark Ganea',
    weight: 78,
    height: 1.69,

    calcBMI() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;

   }
};

const vasile = {
    fullName: 'Vasile Cibotaru',
    weight: 92,
    height: 1.95,

    calcBMI() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;

   }
};

mark.calcBMI();
vasile.calcBMI();


if (mark.bmi > vasile.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${vasile.fullName}'s (${vasile.bmi.toFixed(1)})!`);
} else if (vasile.bmi > mark.bmi) {
    console.log(`${vasile.fullName}'s BMI (${vasile.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`Mark and Vasile have the same BMI (${mark.bmi.toFixed(1)})!`);
}