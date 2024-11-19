// using switch case
/*const getWorkHours = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 0; // Absent
        case 1: return PART_TIME_HOURS; // Part-Time
        case 2: return FULL_DAY_HOURS; // Full-Time
    }
};

const workHours = getWorkHours();
const dailyWage = calculateWage(workHours);
console.log(`Employee worked ${workHours} hours. Daily Wage: $${dailyWage}`);
*/
export function solvingWages() {
    const hoursWorked = [0, 4, 8]; // Absent, Part-Time, Full-Time
    const condition = new Date().getSeconds() % 3; // Cycles between 0, 1, 2

    let workHours;
    if (condition === 0) workHours = hoursWorked[0];
    else if (condition === 1) workHours = hoursWorked[1];
    else workHours = hoursWorked[2];

    console.log(`Solved work hours based on condition: ${workHours}`);
}
