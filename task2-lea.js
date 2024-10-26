function gradingStudents(grades) {
    const roundedGrades = []; 

    for (let grade of grades) {
        if (grade < 38) {
            roundedGrades.push(grade); 
        } else {
            const remainder = grade % 5; 

            if (remainder >= 3) {
                roundedGrades.push(grade + (5 - remainder)); 
            } else {
                roundedGrades.push(grade); 
            }
        }
    }

    return roundedGrades; 
}


console.log(gradingStudents([4, 73, 67, 38, 33])); //4, 75, 67, 40, 33

