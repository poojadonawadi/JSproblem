/*import { checkAttendence } from "./UC1_checkAttendence.js";

export function calDailyWages(wagePerHour, hoursPerDay) {
    if (checkAttendence() === "present") {
        const wagesPerDay = wagePerHour * hoursPerDay;
        console.log(`Employee is present. Wages for the day: $${wagesPerDay}`);
        return wagesPerDay;
    } else {
        console.log("Employee is absent. Wages for the day: $0");
        return 0;
    }
}

// Example usage
const dailyWage = calDailyWages(20, 8);
console.log(`The daily wage is $${dailyWage}`);

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;

if (attendance === "Present") {
    const dailyWage = WAGE_PER_HOUR * FULL_DAY_HOURS;
    console.log(`Daily Employee Wage: $${dailyWage}`);
}
    */

export function calculateDailyWages(wagePerHour, hoursWorked) {
    return hoursWorked * wagePerHour;
}

