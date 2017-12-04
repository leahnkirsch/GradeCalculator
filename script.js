function calculateCurrentGrade(){
    // var homeworkAvg = avergeArrary (convertString(document.getElementById("homework").value));
    // var quizzesAvg = averageArray(convertString(document.getElementById("quizzes").value));
    // var testAvg = averageArray(convertString(document.getElementById("tests").value));
    // var midtermAvg = averageArray(convertString(document.getElementById("midterm").value));
    //
    // tableColor(document.getElementById("homework"),homeworkAvg);
    // tableColor(document.getElementById("quizzes"),quizzesAvg);
    // tableColor(document.getElementById("tests"),testsAvg);

    // homework
    var hw = arrayFromString(document.getElementById("homework").value);
    var hwArray = convertStringtoNumArr(hw);
    var avgHw = averageArrary(hwArray);
    var hwWeight = document.getElementById("homeworkWeight").value;
    var hwWeightAvg = weightAvg(avgHw, hwWeight);
    colorRowByGrade ("qRow", avgHw);


    // quizzes
    var quizzes = arrayFromString(document.getElementById("quizzes").value);
    var quizArray = convertStringtoNumArr(quiz);
    var avgQuizzes = averageArrary(quizArr);
    var quizWeight = document.getElementById("quizWeight").value;
    var quizWeightAvg = weightAvg(avgQuizzes, quizWeight);
    colorRowByGrade ("qRow", avgQuizzes);

    // tests
    var tests = arrayFromString(document.getElementById("tests").value);
    var testsArray = convertStringtoNumArr(tests);
    var avgTests = averageArrary(testsArray);
    var testWeight = document.getElementById("testWeight").value;
    var testWeightAvg = weightAvg(avgTests, testWeight);
    colorRowByGrade ("qRow", avgTests);

    // midterm
    var midterm = arrayFromString(document.getElementById("midterm").value);
    var midtermArray = convertStringtoNumArr(midterm);
    var avgMidterm = averageArrary(midtermArray);
    var midtermWeight = document.getElementById("midtermWeight").value;
    var midtermWeightAvg = weightAvg(avgMidterm, midtermWeight);
    colorRowByGrade ("qRow", avgMidterm);

    if(isNaN(parseInt(document.getElementById("finalWeight").value)) == true){
        document.getElementById("currentGrade").innerHTML
        return;
    }

    var currentGrade = math.round((quizWeightAvg + testWeightAvg + hwWeightAvg + midtermWeightAvg)/(document.getElementById("finalWeight").value)/100 )















}













function convertString (strArr){
    var numArray= [];
    for (var i = 0; i<strArr.length; i++){
        finalArrary[i] = parseInt(newArrary[i]);
    }
    return finalArray;
}

function avgArray


function calculateCurrentGrade(){

}


function  calculateGradeNeeded(){

}