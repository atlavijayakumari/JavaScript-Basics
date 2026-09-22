//grades function example
function calculateGrade(score) {
    if(score >= 90){
        console.log("A");
    }else if(score >= 75){
        console.log("B");
    }else if(score >= 60){
        console.log("C");
    }else{
        console.log("Fail");
    }
}
calculateGrade(85); // Output: B
calculateGrade(95); // Output: A
calculateGrade(70); // Output: C
calculateGrade(45); // Output: Fail