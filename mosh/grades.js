
const marks = [76, 50, 100, 100, 100, 100, 100, 74]

// calulate the average
// grade scale
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90+: A

const grades = (marks) => {
    count = 0

    for(key in marks){
      count += marks[key] 
    }

    const finalGradeNum = count / marks.length

    if(finalGradeNum <= 59)
    return "F"
    if(finalGradeNum <= 69)
    return "D"
    if(finalGradeNum <= 79)
    return "C"
    if(finalGradeNum <= 89)
    return "B"
    else return "A"
}

console.log(`[grades] ${grades(marks)}`)