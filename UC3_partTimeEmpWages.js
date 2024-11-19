/*import { calDailyWages } from "./UC2_dailyEmpWages.js";

const partTimeHour = 4 ;
console.log("the part time wages is", calDailyWages(partTimeHour)); 

//import { calDailyWages } from "./UC2_dailyEmpWages.js";

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 8; // Correct assumption based on the file

const calculateWage = (hours) => WAGE_PER_HOUR * hours;

if (attendance === "Present") {
    const isPartTime = Math.random() > 0.5; // Randomly determine if part-time or full-time
    const workHours = isPartTime ? PART_TIME_HOURS : FULL_DAY_HOURS;
    const dailyWage = calculateWage(workHours);
    console.log(`Employee worked ${workHours} hours. Daily Wage: $${dailyWage}`);
}
*/
export function calculatePartTimeWages(wagePerHour, hoursWorked) {
    if (hoursWorked === 8) { // Part-time condition
        return hoursWorked * wagePerHour;
    }
    return 0;
}

