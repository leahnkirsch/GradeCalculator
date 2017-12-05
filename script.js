function calculateCurrentGrade() {
    // homework
    var hw = arrayFromString(document.getElementById("homework").value);
    var hwArray = convertStringToNumArr(hw);
    var avgHw = averageArray(hwArray);
    var hwWeight = document.getElementById("homeworkWeight").value;
    var hwWeightAvg = weightAvg(avgHw, hwWeight);
    // colorRowByGrade("qRow", avgHw);


    // quizzes
    var quizzes = arrayFromString(document.getElementById("quizzes").value);
    var quizArray = convertStringToNumArr(quizzes);
    var avgQuizzes = averageArray(quizArray);
    var quizWeight = document.getElementById("quizWeight").value;
    var quizWeightAvg = weightAvg(avgQuizzes, quizWeight);
    // colorRowByGrade("qRow", avgQuizzes);

    // tests
    var tests = arrayFromString(document.getElementById("tests").value);
    var testsArray = convertStringToNumArr(tests);
    var avgTests = averageArray(testsArray);
    var testWeight = document.getElementById("testWeight").value;
    var testWeightAvg = weightAvg(avgTests, testWeight);
    // colorRowByGrade("qRow", avgTests);

    // midterm
    var midterm = arrayFromString(document.getElementById("midterm").value);
    var midtermArray = convertStringToNumArr(midterm);
    var avgMidterm = averageArray(midtermArray);
    var midtermWeight = document.getElementById("midtermWeight").value;
    var midtermWeightAvg = weightAvg(avgMidterm, midtermWeight);
    // colorRowByGrade("qRow", avgMidterm);

    if (isNaN(parseInt(document.getElementById("finalWeight").value)) == true) {
        document.getElementById("currentGrade").innerHTML = "Error! Please enter a valid number for your final weight.";
        return;
    }

    var currentGrade = Math.round(((quizWeightAvg + testWeightAvg + hwWeightAvg + midtermWeightAvg) / (100 - (document.getElementById("finalWeight").value))) * 100);
    document.getElementById("current").innerHTML = "Your current grade is: " + currentGrade;
    console.log(currentGrade);
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
    document.getElementById("want").innerHTML = "You need a " + gradeNeeded + " percent."
}



