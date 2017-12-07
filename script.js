function calculateCurrentGrade() {
    // homework
    var hw = arrayFromString(document.getElementById("homework").value);
    var hwArray = convertStringToNumArr(hw);
    var avgHw = averageArray(hwArray);
    var hwWeight = document.getElementById("homeworkWeight").value;
    var hwWeightAvg = weightAvg(avgHw, hwWeight);
    colorRows("HW", avgHw);


    // quizzes
    var quizzes = arrayFromString(document.getElementById("quizzes").value);
    var quizArray = convertStringToNumArr(quizzes);
    var avgQuizzes = averageArray(quizArray);
    var quizWeight = document.getElementById("quizWeight").value;
    var quizWeightAvg = weightAvg(avgQuizzes, quizWeight);
    colorRows("Quiz", avgQuizzes);

    // tests
    var tests = arrayFromString(document.getElementById("tests").value);
    var testsArray = convertStringToNumArr(tests);
    var avgTests = averageArray(testsArray);
    var testWeight = document.getElementById("testWeight").value;
    var testWeightAvg = weightAvg(avgTests, testWeight);
    colorRows("Test", avgTests);

    // midterm
    var midterm = arrayFromString(document.getElementById("midterm").value);
    var midtermArray = convertStringToNumArr(midterm);
    var avgMidterm = averageArray(midtermArray);
    var midtermWeight = document.getElementById("midtermWeight").value;
    var midtermWeightAvg = weightAvg(avgMidterm, midtermWeight);
    colorRows("Midterms", avgMidterm);

    if (isNaN(parseInt(document.getElementById("finalWeight").value)) == true) {
        document.getElementById("currentGrade").innerHTML = "Error! Please enter a valid number for your final weight.";
        return;
    }

    var currentGrade = Math.round(((quizWeightAvg + testWeightAvg + hwWeightAvg + midtermWeightAvg) / (100 - (document.getElementById("finalWeight").value))) * 100);
    document.getElementById("current").innerHTML = "Your current grade is " + currentGrade + "% ";
    console.log(currentGrade);
    return currentGrade;
}

function arrayFromString (str) {
    var result = str.split(",");
    return result;
}

function convertStringToNumArr(strArr){
    var numArr = [];
    for (var i = 0; i <strArr.length; i++){
        if (isNaN(strArr[i]) == true){
            return;
        }
        numArr.push(parseInt(strArr[i]));
    }
    return numArr;
}

function averageArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (isNaN(arr[i]) == true){
            return;
        }
        sum += arr[i];
    }
    return sum / arr.length;
}

function weightAvg(num, weight){
    return num * weight/100;
}


function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade();
    var gradeWanted = parseInt(document.getElementById("gradeWanted").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value)/100;
    var finalGradeNeeded = parseInt(gradeWanted -(((currentGrade)*(1-finalWeight)))) / (finalWeight);
    document.getElementById("want").innerHTML = "You need a " + finalGradeNeeded + " percent."
}


function colorRows (row, grade){
    console.log(row);
    console.log(grade);
    if (grade >= 90){
        document.getElementById(row).style.background = "green";
    }
    if (grade >= 80 && grade < 90){
        document.getElementById(row).style.background = "greenYellow";
    }
    if (grade >= 70 && grade < 80){
        document.getElementById(row).style.background = "yellow";
    }
    if (grade >= 60 && grade < 70){
        document.getElementById(row).style.background = "orange";
    }
    if (grade < 60){
        document.getElementById(row).style.background = "red";
    }
}
