/*import { checkAttendance } from "./UC1_checktAttendence.js";

export function calculateConditionalWages(wagePerHour) {
    const MAX_WORK_HOURS = 100;
    const MAX_WORK_DAYS = 20;

    let totalWage = 0;
    let totalWorkHours = 0;
    let totalWorkDays = 0;

    while (totalWorkHours < MAX_WORK_HOURS && totalWorkDays < MAX_WORK_DAYS) {
        const attendance = checkAttendance();
        totalWorkDays++;
        totalWorkHours += attendance.hours;

        const dailyWage = wagePerHour * attendance.hours;
        totalWage += dailyWage;

        console.log(
            `Day ${totalWorkDays}: Employee is ${
                attendance.status.replace("present-", "")
            }, worked ${attendance.hours} hours. Daily Wage: $${dailyWage}`
        );
    }

    console.log(`Total Days Worked: ${totalWorkDays}`);
    console.log(`Total Hours Worked: ${totalWorkHours}`);
    console.log(`Total Wage Till Condition is Reached: $${totalWage}`);
    return totalWage;
}

// Example usage
calculateConditionalWages(20);

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
} */

    import { checkAttendance } from './UC1_checkAttendance.js';
import { calculateDailyWages } from './UC2_dailyEmpWages.js';

export function calculateFinalWages(wagePerHour) {
    const MAX_WORK_DAYS = 20;
    const MAX_WORK_HOURS = 100;

    let totalWages = 0;
    let totalHours = 0;
    let totalDays = 0;

    while (totalDays < MAX_WORK_DAYS && totalHours < MAX_WORK_HOURS) {
        const attendance = checkAttendance();
        totalHours += attendance.hours;
        totalDays++;
        const dailyWage = calculateDailyWages(wagePerHour, attendance.hours);
        totalWages += dailyWage;
        console.log(
            `Day ${totalDays}: Worked ${attendance.hours} hours, Earned $${dailyWage}`
        );
    }

    console.log(`Total Days Worked: ${totalDays}`);
    console.log(`Total Hours Worked: ${totalHours}`);
    return totalWages;
}

