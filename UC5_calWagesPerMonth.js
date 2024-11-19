/*import { checkAttendance } from "./UC1_checktAttendence.js";

export function calculateMonthlyWages(wagePerHour) {
    const MAX_WORK_DAYS = 20;
    let totalWage = 0;

    for (let day = 1; day <= MAX_WORK_DAYS; day++) {
        const attendance = checkAttendance();
        const dailyWage = wagePerHour * attendance.hours;
        totalWage += dailyWage;

        console.log(
            `Day ${day}: Employee is ${
                attendance.status.replace("present-", "")
            }, worked ${attendance.hours} hours. Daily Wage: $${dailyWage}`
        );
    }

    console.log(`Total Wage for the Month: $${totalWage}`);
    return totalWage;
}

// Example usage
calculateMonthlyWages(20);
*/

import { checkAttendance } from './UC1_checkAttendance.js';
import { calculateDailyWages } from './UC2_dailyEmpWages.js';

export function calculateWagesPerMonth(wagePerHour) {
    const MAX_WORK_DAYS = 20;
    let totalWages = 0;

    for (let day = 1; day <= MAX_WORK_DAYS; day++) {
        const attendance = checkAttendance();
        const dailyWage = calculateDailyWages(wagePerHour, attendance.hours);
        totalWages += dailyWage;
        console.log(`Day ${day}: Worked ${attendance.hours} hours, Earned $${dailyWage}`);
    }

    return totalWages;
}
