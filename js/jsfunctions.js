/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//variablen für paarassoziationtest
var weiterIsActive = true;
var weiterDelayedIsActive = true;
var cnt = 0;
var cntRepeat = 0;
var showLoopAktiv;
var wordSelected = false;
// 1.pass
var correctWords1 = 0;
var wrongWords1 = 0;
// 2.pass
var correctWords2 = 0;
var wrongWords2 = 0;
//3.pass
var correctWords3 = 0;
var wrongWords3 = 0;

var showLoopAktivDelay;
// delayed pass
var correctWordsDelay = 0;
var wrongWordsDelay = 0;
var cntDelayed = 0;



// color values
var selectionColor = "#8c8c8c";
var normalColor = "#57bb58";



//variablen für trailmakingtest

var forwardCnt = 1;
var mistakesV1 = 0;
var mistakesV2 = 0;
var interactionTimer;
var aktiv;
var numberCnt = 1;
var letterCnt = 1;
var aktivV2;
var interactionTimerV2;
var numberArray = new Array("6", "15", "18", "24", "33", "38", "42", "56", "61", "79", "87", "95");
var arrayPointer = 0;
var mistakesV3 = 0;
var aktivV3;
var interactionTimerV3;
var aktivV4;
var interactionTimerV4;
var mistakesV4 = 0;
var numberArrayV4 = new Array("4", "10", "27", "49", "62", "83");
var letterArrayV4 = new Array("E", "H", "L", "P", "T", "U");
var numberPointer = 0;
var letterPointer = 0;
var correctNumFieldsTMT1 = 0;
var wrongNumFieldsTMT1 = 0;
var clickedNumsArrayTMT1 = new Array();
var correctNumFieldsTMT2 = 0;
var wrongNumFieldsTMT2 = 0;
var clickedNumsArrayTMT2 = new Array();
var correctNumFieldsTMT3 = 0;
var wrongNumFieldsTMT3 = 0;
var correctNumFieldsTMT4 = 0;
var wrongNumFieldsTMT4 = 0;
var timerTMT1 = 0;
var aktivTimerTMT1;
var isFirstClickTMT1 = true;
var timerTMT2 = 0;
var aktivTimerTMT2;
var isFirstClickTMT2 = true;
var timerTMT3 = 0;
var aktivTimerTMT3;
var isFirstClickTMT3 = true;
var timerTMT4 = 0;
var isFirstClickTMT4 = true;
var aktivTimerTMT4;
var timerInterval1 = 0;
var aktivTimerInterval1;
var clickIntervals1 = new Array();
var timerInterval2 = 0;
var aktivTimerInterval2;
var clickIntervals2 = new Array();
var timerInterval3 = 0;
var aktivTimerInterval3;
var clickIntervals3 = new Array();
var timerInterval4 = 0;
var aktivTimerInterval4;
var clickIntervals4 = new Array();
var wrongSelectionColor = "#ff0000";
var nextToLastSelectionColor = "#f0ff00";


//variablen für mosaiktest in the mosaiktestFunctions.js file


//variablen für zahlensortierentest
var clickCount = 1;
var sequenceReapeat = 1;
var taskCount = 1;
var numbersArray;
var clickedNumbArray = new Array();
var highestArrayLength = 0;




//variablen für depressionsscreening
var mentalQuest = 1;
var questAnswerMap = {};
var depressionQuestions = new Array();
var isReadyToSwitch = false;

//variablen für ADLs
var ADLQuest = 1;
var ADLQuestAnswerMap = {};
var adlQuestions = new Array();


// andere variablen
var repeats;

//globale variablen






//global functions 



function goToRegistration() {

    try
    {
        window.open('http://neurocare-aal.de', '_system');
    }

    catch (error) {
        console.log("Error when forwarding to registration page! " + error);
    }

}


// forward to login page
function goToLoginPage() {

    try
    {
        window.location = "Login.html";
    }

    catch (error) {
        console.log("Error when forwarding to login page! " + error);
    }
}


// forward to login page
function goToLoginPageAgain() {

    try
    {
        setTimeout(function () {
            $.mobile.changePage('#login', {transition: "slide"});
        }, 100);
    }

    catch (error) {
        console.log("Error when forwarding to login page! " + error);
    }
}





// validate the login credentials
function validateLogin(username, password) {
    try
    {
        if (username === null || username === "")
        {
            $("#fillinHint").css("visibility", "visible");
            setTimeout(function () {
                $("#fillinHint").css("visibility", "hidden");
            }, 1000);

            return false;
        }

        if (password === null || password === "")
        {
            $("#fillinHint").css("visibility", "visible");
            setTimeout(function () {
                $("#fillinHint").css("visibility", "hidden");
            }, 1000);

            return false;
        }


        // log in if credentials are entered
        login(username, password);

        // reset values 
        $("#username").val("");
        $("#password").val("");



    }

    catch (error) {
        console.log("Error when validating login! " + error);
    }
}





// validate the user credentials
function validateUserCredentials(username, userId) {
    try
    {
        if ((username === null || username === "") && (userId === null || userId === ""))
        {
            $("#fillinUserHint").css("visibility", "visible");
            setTimeout(function () {
                $("#fillinUserHint").css("visibility", "hidden");
            }, 1000);

            return false;
        }

        if (userId === null || userId === "")
        {
            $("#fillinUserHint").css("visibility", "visible");
            setTimeout(function () {
                $("#fillinUserHint").css("visibility", "hidden");
            }, 1000);

            return false;
        }


        // log in if credentials are entered
        searchUser(username, userId);

        // reset values 
        $("#byUsername").val("");
        $("#byUserId").val("");



    }

    catch (error) {
        console.log("Error when validating user credentials! " + error);
    }
}







// starts the screening session
function startScreeningSession(patientElementId) {
    try
    {
        // get user id from the p tag
    var patientUserId = $("#" + patientElementId).text();
        
        // save user name in local storage
        jQuery.jStorage.set("UserName",patientUserId);
        
        

        window.location = "PaarassoziationstestTeil1.html";
    }

    catch (error) {
        console.log("Error when starting screening! " + error);
    }
}


function goToPreviousPage(){
   
   history.back();
	return false;
//    $.mobile.changePage('#patientsManagementPage', {transition: "pop",allowSamePageTransition: true});
}



function goToPortal(){
    try{
    window.open("http://neurocare-aal.de", "_system");
    }
     catch (error) {
        console.log("Error when redirecting to portal! " + error);
    }
    
}



// shows given page after a given time interval
function showFollowingPageDelayed(page, delay)
{
    try
    {
        setTimeout(function () {
            $.mobile.changePage('#' + page, {transition: "slide"});
        }, delay);



    }

    catch (error) {
        console.log("Error when switching to page: " + page + error);
    }


}

// turns rgb color value to hex value 
function rgb2hex(rgb) {
    if (rgb !== "") {

        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}





//! global functions 



//functions for wortpaare assoziation


//  used to highlight selected word in the 1. pass
function highlightSelectedWord1(td) {

    try {
        if (!wordSelected)
            wordSelected = true;

        // hide selection hint
        $(".selectionHintDiv").css("visibility", "hidden");

        td.style.backgroundColor = selectionColor;
        // color other tds back
        var allElements = document.querySelectorAll("[data-group='iteration1']");
        for (var i = 0; i < allElements.length; i++) {
            var tempElem = allElements[i];


            var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


            if ((tempElem !== td && tempElemBgr === selectionColor)) {

                tempElem.style.backgroundColor = normalColor;

            }
        }

    }
    catch (error) {
        console.log("Fehler beim Klicken des elementes " + td + error);
    }

}




// used to highlight selected word in the 2. pass
function highlightSelectedWord2(td) {

    try {
        if (!wordSelected)
            wordSelected = true;

        // hide selection hint
        $(".selectionHintDiv").css("visibility", "hidden");

        td.style.backgroundColor = selectionColor;
        // color other tds back
        var allElements = document.querySelectorAll("[data-group='iteration2']");
        for (var i = 0; i < allElements.length; i++) {
            var tempElem = allElements[i];

            var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


            if ((tempElem !== td && tempElemBgr === selectionColor)) {


                tempElem.style.backgroundColor = normalColor;

            }
        }

    }
    catch (error) {
        console.log("Fehler beim Klicken des elementes " + td + error);
    }

}

// used to highlight selected word in the 3. pass
function highlightSelectedWord3(td) {

    try {
        if (!wordSelected)
            wordSelected = true;

        // hide selection hint
        $(".selectionHintDiv").css("visibility", "hidden");

        td.style.backgroundColor = selectionColor;
        // color other tds back
        var allElements = document.querySelectorAll("[data-group='iteration3']");
        for (var i = 0; i < allElements.length; i++) {
            var tempElem = allElements[i];

            var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


            if ((tempElem !== td && tempElemBgr === selectionColor)) {


                tempElem.style.backgroundColor = normalColor;

            }
        }

    }
    catch (error) {
        console.log("Fehler beim Klicken des elementes " + td + error);
    }

}



// used to highlight selected word in delayed pass
function highlightSelectedWordDelayed(td) {

    try {
        if (!wordSelected)
            wordSelected = true;

        // hide selection hint
        $(".selectionHintDiv").css("visibility", "hidden");


        td.style.backgroundColor = selectionColor;
        // color other tds back
        var allElements = document.querySelectorAll("[data-group='iterationDelayed']");
        for (var i = 0; i < allElements.length; i++) {
            var tempElem = allElements[i];

            var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


            if ((tempElem !== td && tempElemBgr === selectionColor)) {


                tempElem.style.backgroundColor = normalColor;

            }
        }

    }
    catch (error) {
        console.log("Fehler beim Klicken des elementes " + td + error);
    }

}


// used to proceed to next word presentation in 1.pass
function choosed() {


    try {

        // only when weiter btn is activated 
        if (weiterIsActive) {

            // (avoid double clicking)
            weiterIsActive = false;

            // if a word was selected
            if (wordSelected) {


                var el;
                // find out which td was selected
                var allElements = document.querySelectorAll("[data-group='iteration1']");
                for (var i = 0; i < allElements.length; i++) {
                    var tempElem = allElements[i];

                    var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


                    if ((tempElemBgr === selectionColor)) {


                        el = tempElem;
                        break;

                    }
                }



                // handle selection
                switch (cnt) {
                    case 0:
                        showLoopAktiv = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word1');

                            if (isCorrectWord(leftw, el)) {
                                correctWords1++;
                            }
                            else {
                                wrongWords1++;
                            }
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair2', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterIsActive = true;
                        }, 200);
                        cnt++;
                        break;
                    case 1:
                        showLoopAktiv = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word2');
                            if (isCorrectWord(leftw, el)) {
                                correctWords1++;
                            }
                            else {
                                wrongWords1++;
                            }
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair3', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterIsActive = true;
                        }, 200);
                        cnt++;
                        break;
                    case 2:
                        showLoopAktiv = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word3');
                            if (isCorrectWord(leftw, el)) {
                                correctWords1++;
                            }
                            else {
                                wrongWords1++;
                            }
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair4', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterIsActive = true;
                        }, 200);
                        cnt++;
                        break;
                    case 3:
                        showLoopAktiv = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word4');
                            if (isCorrectWord(leftw, el)) {
                                correctWords1++;
                            }
                            else {
                                wrongWords1++;
                            }
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair5', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterIsActive = true;
                        }, 200);
                        cnt++;
                        break;
                    case 4:
                        showLoopAktiv = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word5');
                            if (isCorrectWord(leftw, el)) {
                                correctWords1++;
                            }
                            else {
                                wrongWords1++;
                            }
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair6', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterIsActive = true;
                        }, 200);
                        cnt++;
                        break;
                    case 5:
                        cnt = cnt - 5;

                        var leftw = document.getElementById('word6');
                        if (isCorrectWord(leftw, el)) {
                            correctWords1++;
                        }
                        else {
                            wrongWords1++;
                        }

                        showLoopAktiv = setTimeout(function () {
                            // store results
                            jQuery.jStorage.set("RightClickedWords1", correctWords1);
                            jQuery.jStorage.set("WrongClickedWords1", wrongWords1);
                            el.style.backgroundColor = normalColor;
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpairsTransit1', {transition: "slide"});

                            wordSelected = false;
                            // enable weiter btn
                            weiterIsActive = true;

                        }, 200);



                        break;

                }
            }
            else if (!wordSelected) {

                $(".selectionHintDiv").css("visibility", "visible");
                setTimeout(function () {
                    $(".selectionHintDiv").css("visibility", "hidden");
                }, 1000);


                setTimeout(function () {
                    weiterIsActive = true;
                }, 500);

            }
        }


    }

    catch (error) {
        console.log("Fehler beim Klicken des elementes " + e1 + error);
    }

}



// used to proceed to next word presentation in 2.pass
function choosedOrdered1() {

    try {

        if (wordSelected) {
            wordSelected = false;

//        el.style.backgroundColor = "green";
            var el;
// find out which td was selected
            var allElements = document.querySelectorAll("[data-group='iteration2']");
            for (var i = 0; i < allElements.length; i++) {
                var tempElem = allElements[i];

                var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


                if ((tempElemBgr === selectionColor)) {


                    el = tempElem;
                    break;

                }
            }

            switch (cnt) {
                case 0:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word1Ordered1');
                        if (isCorrectWord(leftw, el)) {
                            correctWords2++;
                        }
                        else {
                            wrongWords2++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair2Ordered1', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 1:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word2Ordered1');
                        if (isCorrectWord(leftw, el)) {
                            correctWords2++;
                        }
                        else {
                            wrongWords2++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair3Ordered1', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 2:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word3Ordered1');
                        if (isCorrectWord(leftw, el)) {
                            correctWords2++;
                        }
                        else {
                            wrongWords2++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair4Ordered1', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 3:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word4Ordered1');
                        if (isCorrectWord(leftw, el)) {
                            correctWords2++;
                        }
                        else {
                            wrongWords2++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair5Ordered1', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 4:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word5Ordered1');
                        if (isCorrectWord(leftw, el)) {
                            correctWords2++;
                        }
                        else {
                            wrongWords2++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair6Ordered1', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 5:
                    cnt = cnt - 5;

                    var leftw = document.getElementById('word6Ordered1');
                    if (isCorrectWord(leftw, el)) {
                        correctWords2++;
                    }
                    else {
                        wrongWords2++;
                    }

                    showLoopAktiv = setTimeout(function () {
                        // store results
                        jQuery.jStorage.set("RightClickedWords2", correctWords2);
                        jQuery.jStorage.set("WrongClickedWords2", wrongWords2);
                        el.style.backgroundColor = normalColor;
                        $('#weiterOrdered1').css('display', 'none');
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpairsTransit2', {transition: "slide"});

                    }, 200);


                    break;

            }
        }
        else
        {
            $(".selectionHintDiv").css("visibility", "visible");
            setTimeout(function () {
                $(".selectionHintDiv").css("visibility", "hidden");
            }, 1000);


            setTimeout(function () {
                weiterIsActive = true;
            }, 500);

        }
    }
    catch (error) {
        console.log("Fehler beim Klicken des elementes " + e1 + error);
    }

}


// used to proceed to next word presentation in 3.pass
function choosedOrdered2() {

    try {

        if (wordSelected) {
            wordSelected = false;

//        el.style.backgroundColor = "green";
            var el;
// find out which td was selected
            var allElements = document.querySelectorAll("[data-group='iteration3']");
            for (var i = 0; i < allElements.length; i++) {
                var tempElem = allElements[i];

                var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


                if ((tempElemBgr === selectionColor)) {


                    el = tempElem;
                    break;

                }
            }

            switch (cnt) {
                case 0:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word1Ordered2');
                        if (isCorrectWord(leftw, el)) {
                            correctWords3++;
                        }
                        else {
                            wrongWords3++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair2Ordered2', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 1:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word2Ordered2');
                        if (isCorrectWord(leftw, el)) {
                            correctWords3++;
                        }
                        else {
                            wrongWords3++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair3Ordered2', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 2:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word3Ordered2');
                        if (isCorrectWord(leftw, el)) {
                            correctWords3++;
                        }
                        else {
                            wrongWords3++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair4Ordered2', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 3:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word4Ordered2');
                        if (isCorrectWord(leftw, el)) {
                            correctWords3++;
                        }
                        else {
                            wrongWords3++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair5Ordered2', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 4:
                    showLoopAktiv = setTimeout(function () {
                        el.style.backgroundColor = normalColor;
                        var leftw = document.getElementById('word5Ordered2');
                        if (isCorrectWord(leftw, el)) {
                            correctWords3++;
                        }
                        else {
                            wrongWords3++;
                        }
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpair6Ordered2', {transition: "slide"});
                    }, 200);
                    cnt++;
                    break;
                case 5:
                    cnt = cnt - 5;

                    var leftw = document.getElementById('word6Ordered2');
                    if (isCorrectWord(leftw, el)) {
                        correctWords3++;
                    }
                    else {
                        wrongWords3++;
                    }

                    showLoopAktiv = setTimeout(function () {
                        // store results
                        jQuery.jStorage.set("RightClickedWords3", correctWords3);
                        jQuery.jStorage.set("WrongClickedWords3", wrongWords3);
                        el.style.backgroundColor = normalColor;
                        $('#weiterOrdered2').css('display', 'none');
                        $(".selectionHintDiv").css("visibility", "hidden");
                        $.mobile.changePage('#wordpairsTransit3', {transition: "slide"});

                    }, 200);


                    break;

            }
        }
        else
        {
            $(".selectionHintDiv").css("visibility", "visible");
            setTimeout(function () {
                $(".selectionHintDiv").css("visibility", "hidden");
            }, 1000);


            setTimeout(function () {
                weiterIsActive = true;
            }, 500);

        }
    }
    catch (error) {
        console.log("Fehler beim Klicken des elementes " + e1 + error);
    }

}



// handles wordpairs shown on delay
function choosedDelayed() {

//    el.style.backgroundColor = "green";

    try {

        // only when weiter btn is activated 
        if (weiterDelayedIsActive) {

            // (avoid double clicking)
            weiterDelayedIsActive = false;


            // if a word was selected
            if (wordSelected) {


                var el;
                // find out which td was selected
                var allElements = document.querySelectorAll("[data-group='iterationDelayed']");
                for (var i = 0; i < allElements.length; i++) {
                    var tempElem = allElements[i];

                    var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


                    if ((tempElemBgr === selectionColor)) {


                        el = tempElem;
                        break;

                    }
                }

                // handle selection
                switch (cntDelayed) {

                    case 0:
                        showLoopAktivDelay = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word1');
                            if (isCorrectWord(leftw, el)) {
                                correctWordsDelay++;
                            }
                            else {
                                wrongWordsDelay++;
                            }
                            clearTimeout(showLoopAktivDelay);
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair2', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterDelayedIsActive = true;
                        }, 200);
                        cntDelayed++;
                        break;

                    case 1:
                        showLoopAktivDelay = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word2');
                            if (isCorrectWord(leftw, el)) {
                                correctWordsDelay++;
                            }
                            else {
                                wrongWordsDelay++;
                            }
                            clearTimeout(showLoopAktivDelay);
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair3', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterDelayedIsActive = true;
                        }, 200);
                        cntDelayed++;
                        break;
                    case 2:
                        showLoopAktivDelay = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word3');
                            if (isCorrectWord(leftw, el)) {
                                correctWordsDelay++;
                            }
                            else {
                                wrongWordsDelay++;
                            }
                            clearTimeout(showLoopAktivDelay);
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair4', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterDelayedIsActive = true;
                        }, 200);
                        cntDelayed++;
                        break;
                    case 3:
                        showLoopAktivDelay = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word4');
                            if (isCorrectWord(leftw, el)) {
                                correctWordsDelay++;
                            }
                            else {
                                wrongWordsDelay++;
                            }
                            clearTimeout(showLoopAktivDelay);
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair5', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterDelayedIsActive = true;
                        }, 200);
                        cntDelayed++;
                        break;
                    case 4:
                        showLoopAktivDelay = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            var leftw = document.getElementById('word5');
                            if (isCorrectWord(leftw, el)) {
                                correctWordsDelay++;
                            }
                            else {
                                wrongWordsDelay++;
                            }
                            clearTimeout(showLoopAktivDelay);
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#wordpair6', {transition: "slide"});
                            wordSelected = false;
                            // enable weiter btn
                            weiterDelayedIsActive = true;
                        }, 200);
                        cntDelayed++;
                        break;
                    case 5:
                        // reset counter
                        cntDelayed = cntDelayed - 5;


                        var leftw = document.getElementById('word6');
                        if (isCorrectWord(leftw, el)) {
                            correctWordsDelay++;
                        }
                        else {
                            wrongWordsDelay++;
                        }

                        showLoopAktivDelay = setTimeout(function () {
                            el.style.backgroundColor = normalColor;
                            // store results
                            jQuery.jStorage.set("RightClickedWordsDelay", correctWordsDelay);
                            jQuery.jStorage.set("WrongClickedWordsDelay", wrongWordsDelay);
                            // clear timer
                            clearTimeout(showLoopAktivDelay);
                            $(".selectionHintDiv").css("visibility", "hidden");
                            $.mobile.changePage('#taskEndPage', {transition: "slide"});
                            // go to depressionsscreening questions
//                            goToDepressionsscreening();
                            // enable weiter btn
                            weiterDelayedIsActive = true;
                        }, 1000);



                        break;

                }
            }
            else if (!wordSelected) {

                $(".selectionHintDiv").css("visibility", "visible");
                setTimeout(function () {
                    $(".selectionHintDiv").css("visibility", "hidden");
                }, 1000);


                setTimeout(function () {
                    weiterDelayedIsActive = true;
                }, 500);


            }

        }
    }
    catch (error) {
        console.log("Fehler matchen der Wörter" + error);
    }

}



//! functions for wortpaare assoziation




////////////////////////////////////////////////////////////////////////////////////////////


// functions for trailmakingtest


// to process selection in TMT1
function selectNumber(k) {

    try {
        // starting timer fot TMT1
        if (timerTMT1 === 0) {
            aktivTimerTMT1 = setInterval(function () {
                timerTMT1++;
            }, 1000);
        }


        // starting timer for clicks intervals
//        if (timerInterval1 === 0) {
//            aktivTimerInterval1 = setInterval(function () {
//                timerInterval1++;
//            }, 1000);
//        }


        // stopping timer and starting it for next click interval
//        if (timerInterval1 !== 0 || timerInterval1 === 0) {
        clearInterval(aktivTimerInterval1);
        // store interval
        if (!isFirstClickTMT1)
            clickIntervals1.push(timerInterval1);
        // toggle bool after first time clicking
        if (isFirstClickTMT1)
            isFirstClickTMT1 = false;
        // reset
        timerInterval1 = 0;
        // count for new time
        aktivTimerInterval1 = setInterval(function () {
            timerInterval1++;
        }, 1000);
//        }

// get element id
        var kreisId = k.id;

        var clickedNum = $('#'+kreisId).children().html();
        clickedNumsArrayTMT1.push(clickedNum);

        // check if mistakes are less than 3
        if (mistakesV1 < 3) {

            // count for 40 sec
//            countV1();

            if (kreisId === "v11" && forwardCnt === 1) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v12" && forwardCnt === 2) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v13" && forwardCnt === 3) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;

                return;
            }
            else if (kreisId === "v14" && forwardCnt === 4) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v15" && forwardCnt === 5) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v16" && forwardCnt === 6) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v17" && forwardCnt === 7) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v18" && forwardCnt === 8) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v19" && forwardCnt === 9) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v110" && forwardCnt === 10) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v111" && forwardCnt === 11) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v112" && forwardCnt === 12) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v113" && forwardCnt === 13) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v114" && forwardCnt === 14) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v115" && forwardCnt === 15) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v116" && forwardCnt === 16) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v117" && forwardCnt === 17) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v118" && forwardCnt === 18) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v119" && forwardCnt === 19) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                forwardCnt++;
                correctNumFieldsTMT1++;
                return;
            }
            else if (kreisId === "v120" && forwardCnt === 20) {
                cleanRightHitsAndMistakes(kreisId);
                mistakesV1 = 0;
                k.style.background = selectionColor;
                correctNumFieldsTMT1++;
                // stopping timer
                clearInterval(aktivTimerTMT1);
                clearInterval(aktivTimerInterval1);
                // store results
                jQuery.jStorage.set("RightNumFieldsTMT1", correctNumFieldsTMT1);
                jQuery.jStorage.set("WrongNumFieldsTMT1", wrongNumFieldsTMT1);
                jQuery.jStorage.set("TimeToSolveTMT1", timerTMT1);
                jQuery.jStorage.set("ClickIntervalsTMT1", clickIntervals1);
                jQuery.jStorage.set("ClickedNumbersArrayTMT1", clickedNumsArrayTMT1);
                jQuery.jStorage.set("TaskSolvedTMT1", "true");
                setTimeout(function () {
                    clearAllIntervals();
                    $.mobile.changePage('#intro2v2a', {transition: "slide"});
                }, 1000);
                return;
            }

            // when making a mistake 
            else {
                // don't allow the same mistake twice
                if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {

                    cleanOtherMistakes(kreisId);
                    k.style.background = wrongSelectionColor;
                    mistakesV1++;
                    wrongNumFieldsTMT1++;
                    // if 3 mistakes are made
                    if (mistakesV1 === 3) {
                        // stopping timer
                        clearInterval(aktivTimerTMT1);
                        clearInterval(aktivTimerInterval1);
                        // store results
                        jQuery.jStorage.set("RightNumFieldsTMT1", correctNumFieldsTMT1);
                        jQuery.jStorage.set("WrongNumFieldsTMT1", wrongNumFieldsTMT1);
                        jQuery.jStorage.set("TimeToSolveTMT1", timerTMT1);
                        jQuery.jStorage.set("ClickIntervalsTMT1", clickIntervals1);
                        jQuery.jStorage.set("ClickedNumbersArrayTMT1", clickedNumsArrayTMT1);
                        jQuery.jStorage.set("TaskSolvedTMT1", "false");
                        $.mobile.changePage('#intro2v2a', {transition: "slide"});
                        clearInterval(aktiv);
                    }

                }
                else
                    return;
            }



        }

    }
    catch (error) {
        console.log("Fehler beim Tippen des Kreises mit der ID: " + k.id + error);
    }


}




// cleans right hits and wrong selected elements
function cleanRightHitsAndMistakes(id) {
    var pageID = $.mobile.activePage.attr('id');
    var allElements = document.getElementsByClassName('kreis');

    try {

// last clicked will be colored to gray and next to last to white (only for test 2 and 4)
        if (pageID === "version2a" || pageID === "version4a") {
            for (var i = 0; i < allElements.length; i++) {
                var tempElem = allElements[i];
                var tempElemId = tempElem.id;
                var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);

                if (tempElemId !== id) {
                    if (tempElemBgr === nextToLastSelectionColor)
                        tempElem.style.backgroundColor = normalColor;
                    else if (tempElemBgr === selectionColor)
                        tempElem.style.backgroundColor = nextToLastSelectionColor;

                    else if (tempElemBgr === wrongSelectionColor)
                        tempElem.style.backgroundColor = normalColor;
                }
            }


        }
// only last will be colored to gray
        else {


            for (var i = 0; i < allElements.length; i++) {
                var tempElem = allElements[i];
                var tempElemId = tempElem.id;
                var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);


                if ((tempElemId !== id && tempElemBgr === selectionColor) || (tempElemId !== id && tempElemBgr === wrongSelectionColor)) {


                    tempElem.style.backgroundColor = normalColor;

                }
            }
        }
    }
    catch (error) {
        console.log("Fehler beim Entfernen aller richtig und falsch getippten Kreise!" + error);
    }
}


// cleans only wrong selected elements
function cleanOtherMistakes(id) {
    try {
        var allElements = document.getElementsByClassName('kreis');

        for (var i = 0; i < allElements.length; i++) {
            var tempElem = allElements[i];
            var tempElemId = tempElem.id;
            var tempElemBgr = rgb2hex(tempElem.style.backgroundColor);
            if (tempElemId !== id && tempElemBgr === wrongSelectionColor) {
//            if (tempElemBgr === "red") {

                tempElem.style.backgroundColor = normalColor;
//            }
            }
        }
    }
    catch (error) {
        console.log("Fehler entfernen von alten Fehlern!" + error);
    }
}



// used in selecting elements in the 2.task of tmt
function selectNumberOrLetter(k) {

    try {

// starting timer fot TMT2
        if (timerTMT2 === 0) {
            aktivTimerTMT2 = setInterval(function () {
                timerTMT2++;
            }, 1000);
        }

        // starting timer for clicks intervals
//        if (timerInterval2 === 0) {
//            aktivTimerInterval2 = setInterval(function () {
//                timerInterval2++;
//            }, 1000);
//        }


        // stopping timer and starting it for next click interval
//        if (timerInterval2 !== 0 || timerInterval2 === 0) {
        clearInterval(aktivTimerInterval2);
        if (!isFirstClickTMT2)
            clickIntervals2.push(timerInterval2);
        // toggle bool after first time clicking
        if (isFirstClickTMT2)
            isFirstClickTMT2 = false;

        timerInterval2 = 0;
        aktivTimerInterval2 = setInterval(function () {
            timerInterval2++;
        }, 1000);
//        }

        var kreisId = k.id;
        
        var clickedNum = $('#'+kreisId).children().html();
        clickedNumsArrayTMT2.push(clickedNum);
        
        // if made mistakes are less than 3
        if (mistakesV2 < 3) {

            // count for 40 sec
//            countV2();

            switch (kreisId) {
                case "v21":
                    if (numberCnt === 1 && letterCnt === 1) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }

                    break;
                case "a":
                    if (numberCnt === 2 && letterCnt === 1) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v22":
                    if (numberCnt === 2 && letterCnt === 2) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "b":
                    if (numberCnt === 3 && letterCnt === 2) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v23":
                    if (numberCnt === 3 && letterCnt === 3) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "c":
                    if (numberCnt === 4 && letterCnt === 3) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v24":
                    if (numberCnt === 4 && letterCnt === 4) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "d":
                    if (numberCnt === 5 && letterCnt === 4) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v25":
                    if (numberCnt === 5 && letterCnt === 5) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "e":
                    if (numberCnt === 6 && letterCnt === 5) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v26":
                    if (numberCnt === 6 && letterCnt === 6) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "f":
                    if (numberCnt === 7 && letterCnt === 6) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v27":
                    if (numberCnt === 7 && letterCnt === 7) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "g":
                    if (numberCnt === 8 && letterCnt === 7) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v28":
                    if (numberCnt === 8 && letterCnt === 8) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "h":
                    if (numberCnt === 9 && letterCnt === 8) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v29":
                    if (numberCnt === 9 && letterCnt === 9) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            mistakesV2++;
                            wrongNumFieldsTMT2++;
                            cleanOtherMistakes(kreisId);

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "i":
                    if (numberCnt === 10 && letterCnt === 9) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v210":
                    if (numberCnt === 10 && letterCnt === 10) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        numberCnt++;
                        correctNumFieldsTMT2++;
                        cleanRightHitsAndMistakes(kreisId);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;

                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                case "j":
                    if (numberCnt === 11 && letterCnt === 10) {
                        k.style.background = selectionColor;
                        mistakesV2 = 0;
                        letterCnt++;
                        correctNumFieldsTMT2++;
                        // stopping timer
                        clearInterval(aktivTimerTMT2);
                        clearInterval(aktivTimerInterval2);
                        // store results
                        jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                        jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                        jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                        jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                        jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                        jQuery.jStorage.set("TaskSolvedTMT2", "true");
                        setTimeout(function () {
                            clearAllIntervals();
                            cleanRightHitsAndMistakes(kreisId);
                            $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                        }, 1000);
                    }

                    // when making mistake
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV2++;
                            wrongNumFieldsTMT2++;
                            // if mistakes are 3
                            if (mistakesV2 === 3) {
                                // stopping timer
                                clearInterval(aktivTimerTMT2);
                                clearInterval(aktivTimerInterval2);
                                clearAllIntervals();
                                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                                jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                                jQuery.jStorage.set("TaskSolvedTMT2", "false");
                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                            }
                        }
                        else
                            return;
                    }
                    break;
                default:
                {
                    // don't allow make the same mistake twice
                    if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                        k.style.background = wrongSelectionColor;
                        cleanOtherMistakes(kreisId);
                        mistakesV2++;
                        wrongNumFieldsTMT2++;

                        // if mistakes are 3
                        if (mistakesV2 === 3) {
                            // stopping timer
                            clearInterval(aktivTimerTMT2);
                            clearInterval(aktivTimerInterval2);
                            clearAllIntervals();
                            jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                            jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                            jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                            jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                            jQuery.jStorage.set("ClickedNumbersArrayTMT2", clickedNumsArrayTMT2);
                            jQuery.jStorage.set("TaskSolvedTMT2", "false");
                            $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});

                        }
                    }
                    else
                        return;
                }
            }

        }

    }
    catch (error) {
        console.log("Fehler beim Tippen des Kreises mit der ID: " + k.id + error);
    }
}




// used to select elements in 3task of tmt
function selectOnlyNumber(k) {
    try {
        // starting timer fot TMT1
        if (timerTMT3 === 0) {
            aktivTimerTMT3 = setInterval(function () {
                timerTMT3++;
            }, 1000);
        }
        // starting timer for clicks intervals
//        if (timerInterval3 === 0) {
//            aktivTimerInterval3 = setInterval(function () {
//                timerInterval3++;
//            }, 1000);
//        }


        // stopping timer and starting it for next click interval
//        if (timerInterval3 !== 0 || timerInterval3 === 0) {
        clearInterval(aktivTimerInterval3);
        if (!isFirstClickTMT3)
            clickIntervals3.push(timerInterval3);
        // toggle bool after first time clicking
        if (isFirstClickTMT3)
            isFirstClickTMT3 = false;

        timerInterval3 = 0;
        aktivTimerInterval3 = setInterval(function () {
            timerInterval3++;
        }, 1000);
//        }


        var kreisId = k.id;

        var arrayElement = numberArray[arrayPointer];
        // if mistakes made are less than 3
        if (mistakesV3 < 3) {

            // count for 40 sec
//            countV3();

            switch (kreisId) {
                case "v36":
                    if (arrayElement === "6" && arrayPointer === 0) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v315":
                    if (arrayElement === "15" && arrayPointer === 1) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v318":
                    if (arrayElement === "18" && arrayPointer === 2) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v324":
                    if (arrayElement === "24" && arrayPointer === 3) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v333":
                    if (arrayElement === "33" && arrayPointer === 4) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v338":
                    if (arrayElement === "38" && arrayPointer === 5) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v342":
                    if (arrayElement === "42" && arrayPointer === 6) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v356":
                    if (arrayElement === "56" && arrayPointer === 7) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v361":
                    if (arrayElement === "61" && arrayPointer === 8) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v379":
                    if (arrayElement === "79" && arrayPointer === 9) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v387":
                    if (arrayElement === "87" && arrayPointer === 10) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        arrayPointer++;
                        correctNumFieldsTMT3++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v395":
                    if (arrayElement === "95" && arrayPointer === 11) {
                        k.style.background = selectionColor;
                        mistakesV3 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        correctNumFieldsTMT3++;
                        // stopping timer
                        clearInterval(aktivTimerTMT3);
                        clearInterval(aktivTimerInterval3);
                        // store results
                        jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                        jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                        jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                        jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                        setTimeout(function () {
                            clearAllIntervals();
                            $.mobile.changePage('#intro2v4a', {transition: "slide"});
                        }, 1000);
                    }
                    // when making mistake
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV3++;
                            wrongNumFieldsTMT3++;

                            // if mistakes are 3
                            if (mistakesV3 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT3);
                                clearInterval(aktivTimerInterval3);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                                $.mobile.changePage('#intro2v4a', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                default:
                {
                    // don't allow make the same mistake twice
                    if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                        k.style.background = wrongSelectionColor;
                        cleanOtherMistakes(kreisId);
                        mistakesV3++;
                        wrongNumFieldsTMT3++;

                        // if mistakes are 3
                        if (mistakesV3 === 3) {
                            clearAllIntervals();
                            // stopping timer
                            clearInterval(aktivTimerTMT3);
                            clearInterval(aktivTimerInterval3);
                            // store results
                            jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                            jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                            jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                            jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                            $.mobile.changePage('#intro2v4a', {transition: "slide"});
                        }
                    }
                    else
                        return;
                }
            }

        }

    }
    catch (error) {
        console.log("Fehler beim Tippen des Kreises mit der ID: " + k.id + error);
    }
}




// used for selecting elements in the 4.task of tmt
function selectNumberOrLetterV4(k) {
    try {
        // starting timer fot TMT1
        if (timerTMT4 === 0) {
            aktivTimerTMT4 = setInterval(function () {
                timerTMT4++;
            }, 1000);
        }
        // starting timer for clicks intervals
//        if (timerInterval4 === 0) {
//            aktivTimerInterval4 = setInterval(function () {
//                timerInterval4++;
//            }, 1000);
//        }


        // stopping timer and starting it for next click interval
//        if (timerInterval4 !== 0 || timerInterval4 === 0) {
        clearInterval(aktivTimerInterval4);
        if (!isFirstClickTMT4)
            clickIntervals4.push(timerInterval4);

        // toggle bool after first time clicking
        if (isFirstClickTMT4)
            isFirstClickTMT4 = false;

        timerInterval4 = 0;
        aktivTimerInterval4 = setInterval(function () {
            timerInterval4++;
        }, 1000);
//        }


        var kreisId = k.id;

        var arrayElementNr = numberArrayV4[numberPointer];
        var arrayElementLt = letterArrayV4[letterPointer];
// if mistakes less than 3
        if (mistakesV4 < 3) {

            // count for 40 sec
//            countV4();

            switch (kreisId) {
                case "v44":
                    if (arrayElementNr === "4" && numberPointer === 0 && letterPointer === 0) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        numberPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v4e":
                    if (arrayElementLt === "E" && letterPointer === 0 && numberPointer === 1) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        letterPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v410":
                    if (arrayElementNr === "10" && letterPointer === 1 && numberPointer === 1) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        numberPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v4h":
                    if (arrayElementLt === "H" && letterPointer === 1 && numberPointer === 2) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        letterPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v427":
                    if (arrayElementNr === "27" && letterPointer === 2 && numberPointer === 2) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        numberPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v4l":
                    if (arrayElementLt === "L" && letterPointer === 2 && numberPointer === 3) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        letterPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v449":
                    if (arrayElementNr === "49" && letterPointer === 3 && numberPointer === 3) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        numberPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v4p":
                    if (arrayElementLt === "P" && letterPointer === 3 && numberPointer === 4) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        letterPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v462":
                    if (arrayElementNr === "62" && letterPointer === 4 && numberPointer === 4) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        numberPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v4t":
                    if (arrayElementLt === "T" && letterPointer === 4 && numberPointer === 5) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        letterPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v483":
                    if (arrayElementNr === "83" && letterPointer === 5 && numberPointer === 5) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        numberPointer++;
                        correctNumFieldsTMT4++;
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;
                    }
                    break;
                case "v4u":
                    if (arrayElementLt === "U" && letterPointer === 5 && numberPointer === 6) {
                        k.style.background = selectionColor;
                        mistakesV4 = 0;
                        cleanRightHitsAndMistakes(kreisId);
                        correctNumFieldsTMT4++;
                        // stopping timer
                        clearInterval(aktivTimerTMT4);
                        clearInterval(aktivTimerInterval4);
                        // store results
                        jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                        jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                        jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                        jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);
                        setTimeout(function () {
                            clearAllIntervals();
//                        cleanRightHitsAndMistakes(kreisId);
//                        //deactivate fullscreen
//                        cancelFullscreen();
//                        window.location = "Mosaiktest.html";
                            $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                        }, 1000);
                    }
                    else
                    {
                        // don't allow make the same mistake twice
                        if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                            k.style.background = wrongSelectionColor;
                            cleanOtherMistakes(kreisId);
                            mistakesV4++;
                            wrongNumFieldsTMT4++;

                            // if mistakes are 3
                            if (mistakesV4 === 3) {
                                clearAllIntervals();
                                // stopping timer
                                clearInterval(aktivTimerTMT4);
                                clearInterval(aktivTimerInterval4);
                                // store results
                                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                            }
                        }
                        else
                            return;

                    }
                    break;

                default:
                {
                    // don't allow make the same mistake twice
                    if (rgb2hex(k.style.background) !== wrongSelectionColor && rgb2hex(k.style.background) !== selectionColor) {
                        k.style.background = wrongSelectionColor;
                        cleanOtherMistakes(kreisId);
                        mistakesV4++;
                        wrongNumFieldsTMT4++;

                        // if mistakes are 3
                        if (mistakesV4 === 3) {
                            clearAllIntervals();
                            // stopping timer
                            clearInterval(aktivTimerTMT4);
                            clearInterval(aktivTimerInterval4);
                            // store results
                            jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                            jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                            jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                            jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);

                            $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
                        }
                    }
                    else
                        return;
                }

            }
        }

    }
    catch (error) {
        console.log("Fehler beim Tippen des Kreises mit der ID: " + k.id + error);
    }
}


//! function for trailmakingtest



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// functions for zahlen sortieren



// used to match selected number
function matchNumbers(numbElement) {

    try {

        numbersArray = numbersArray.sort(function (a, b) {
            return a - b;
        });
        var allowedClicks = numbersArray.length;
        highestArrayLength = allowedClicks;
        var clickedNumber = numbElement.innerHTML;
        var hoverItem;
        //hover clicked item
        $(numbElement).css("border", "4px solid white");
        $(numbElement).css("background-color", selectionColor);
        hoverItem = setInterval(function () {
            $(numbElement).css("border", "");
            $(numbElement).css("background-color", normalColor);
            clearInterval(hoverItem);
        }, 500);

        //find out how many digits are leftover from the whole string
        var numbersarraylengthString = $('#NumbersLength').html().split(" ");
        var restNumbers = parseInt(numbersarraylengthString[1]);
        //decrement numbersarraylength
        restNumbers--;
        // show left numbers on screen
        $('#NumbersLength').html("Noch " + restNumbers + " Ziffer(n)");

        switch (taskCount) {

            case 1:
                if (clickCount < allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    clickCount++;
                }
                else if (clickCount === allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat < 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT1", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT1", clickedNumbArray);
                        jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown2', {transition: "slide"}, {reloadPage: true});
                    }

                    else if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat === 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT1Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT1Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown2', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat < 2) {
                        sequenceReapeat++;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT1", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT1", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
//                        $.mobile.changePage('#test1Rep', {transition: "slide"}, {reloadPage: true});
                        $.mobile.changePage('#countdown1Rep', {transition: "slide"}, {reloadPage: true});

                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat === 2) {
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT1Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT1Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", 0);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
//                    window.location = "Depressionsscreening.html";
//                    
                    //fill remaining arrays with place holder
                    jQuery.jStorage.set("ToAchieveArrayT2", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT2", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT2Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT2Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT3", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT3", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT3Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT3Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT4", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT4", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT4Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT4Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7Rep", ["Keine"]);
                    
                    
                        //jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    clickCount = 1;
                }

                break;

            case 2:
                if (clickCount < allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    clickCount++;
                }
                else if (clickCount === allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat < 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT2", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT2", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown3', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat === 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT2Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT2Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown3', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat < 2) {
                        sequenceReapeat++;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT2", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT2", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
//                        $.mobile.changePage('#test2Rep', {transition: "slide"}, {reloadPage: true});
                        $.mobile.changePage('#countdown2Rep', {transition: "slide"}, {reloadPage: true});

                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat <= 2) {
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT2Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT2Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", 2);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
//                    window.location = "Depressionsscreening.html";
//                    
//                    fill in remaining arrays
                    jQuery.jStorage.set("ToAchieveArrayT3", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT3", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT3Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT3Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT4", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT4", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT4Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT4Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7Rep", ["Keine"]);
//                    
//jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    clickCount = 1;
                }
                break;

            case 3:
                if (clickCount < allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    clickCount++;
                }
                else if (clickCount === allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat < 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT3", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT3", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown4', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat === 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT3Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT3Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown4', {transition: "slide"}, {reloadPage: true});
                    }

                    else if (clickedNumbArray !== numbersArray && sequenceReapeat < 2) {
                        sequenceReapeat++;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT3", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT3", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
//                        $.mobile.changePage('#test3Rep', {transition: "slide"}, {reloadPage: true});
                        $.mobile.changePage('#countdown3Rep', {transition: "slide"}, {reloadPage: true});

                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat <= 2) {
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT3Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT3Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", 3);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
//                    window.location = "Depressionsscreening.html";
//  fill in remaining arrays
                    jQuery.jStorage.set("ToAchieveArrayT4", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT4", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT4Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT4Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7Rep", ["Keine"]);
                    
//jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    clickCount = 1;
                }



                break;

            case 4:
                if (clickCount < allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    clickCount++;
                }
                else if (clickCount === allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat < 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT4", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT4", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown5', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat === 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT4Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT4Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown5', {transition: "slide"}, {reloadPage: true});
                    }

                    else if (clickedNumbArray !== numbersArray && sequenceReapeat < 2) {
                        sequenceReapeat++;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT4", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT4", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
//                        $.mobile.changePage('#test4Rep', {transition: "slide"}, {reloadPage: true});
                        $.mobile.changePage('#countdown4Rep', {transition: "slide"}, {reloadPage: true});

                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat <= 2) {
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT4Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT4Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", 4);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
// 
//                    window.location = "Depressionsscreening.html";
//    fill in rem. arrays
                    jQuery.jStorage.set("ToAchieveArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT5Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7Rep", ["Keine"]);
                   
//jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    clickCount = 1;
                }



                break;

            case 5:
                if (clickCount < allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    clickCount++;
                }
                else if (clickCount === allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat < 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT5", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT5", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown6', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat === 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT5Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT5Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown6', {transition: "slide"}, {reloadPage: true});
                    }

                    else if (clickedNumbArray !== numbersArray && sequenceReapeat < 2) {
                        sequenceReapeat++;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT5", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT5", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
//                        $.mobile.changePage('#test5Rep', {transition: "slide"}, {reloadPage: true});
                        $.mobile.changePage('#countdown5Rep', {transition: "slide"}, {reloadPage: true});

                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat <= 2) {
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT5Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT5Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", 5);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
//                    window.location = "Depressionsscreening.html";
//                    fill in rem. arrays
                    jQuery.jStorage.set("ToAchieveArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT6Rep", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7Rep", ["Keine"]);
//jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    clickCount = 1;
                }



                break;

            case 6:
                if (clickCount < allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    clickCount++;
                }
                else if (clickCount === allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat < 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT6", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT6", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown7', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat === 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT6Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT6Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#countdown7', {transition: "slide"}, {reloadPage: true});
                    }

                    else if (clickedNumbArray !== numbersArray && sequenceReapeat < 2) {
                        sequenceReapeat++;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT6", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT6", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
//                        $.mobile.changePage('#test6Rep', {transition: "slide"}, {reloadPage: true});
                        $.mobile.changePage('#countdown6Rep', {transition: "slide"}, {reloadPage: true});

                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat <= 2) {
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT6Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT6Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", 6);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
//                    window.location = "Depressionsscreening.html";
//                    fill in rem. arrays
                    jQuery.jStorage.set("ToAchieveArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7", ["Keine"]);
                    jQuery.jStorage.set("ToAchieveArrayT7Rep", ["Keine"]);
                    jQuery.jStorage.set("ClickedArrayT7Rep", ["Keine"]);
//jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    clickCount = 1;
                }



                break;

            case 7:
                if (clickCount < allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    clickCount++;
                }
                else if (clickCount === allowedClicks) {
                    clickedNumbArray.push(clickedNumber);
                    if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat < 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT7", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT7", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
//                    window.location = "Depressionsscreening.html";
//jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }
                    else if (clickedNumbArray.toString() === numbersArray.toString() && sequenceReapeat === 2) {
                        taskCount++;
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT7Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT7Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    else if (clickedNumbArray !== numbersArray && sequenceReapeat < 2) {
                        sequenceReapeat++;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT7", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT7", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", highestArrayLength);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
//                        $.mobile.changePage('#test7Rep', {transition: "slide"}, {reloadPage: true});
                        $.mobile.changePage('#countdown7Rep', {transition: "slide"}, {reloadPage: true});

                    }
                    else if (clickedNumbArray !== numbersArray && sequenceReapeat <= 2) {
                        sequenceReapeat = 1;
                        // store both arrays (to-achieve and clicked array)
                        if (!numbersArray.length)
                            numbersArray.push('Keine');
                        if (!clickedNumbArray.length)
                            clickedNumbArray.push('Keine');
                        jQuery.jStorage.set("ToAchieveArrayT7Rep", numbersArray);
                        jQuery.jStorage.set("ClickedArrayT7Rep", clickedNumbArray);
                         jQuery.jStorage.set("HighestArrayLength", 7);
                        //clear arrays for next use
                        Array.prototype.clear = function ()
                        {
                            this.length = 0;
                        };
                        numbersArray.clear();
                        clickedNumbArray.clear();
                        //deactivate fullscreen
//                    cancelFullscreen();
//                    window.location = "Depressionsscreening.html";
//jump to the end page 
                        $.mobile.changePage('#ZahlensortierenTransit', {transition: "slide"}, {reloadPage: true});
                    }

                    clickCount = 1;
                }



                break;
        }
    }
    catch (error) {
        console.log("Fehler beim Setzen der Zahl: " + numbElement.innerHTML + error);
    }
}





//! functions for zahlen sortieren
























// go to trailmaking test task
function goToTrailmakingtest() {
    //deactivate fullscreen
    cancelFullscreen();
    window.location = "Trailmakingtest.html";
}

// go to mosaik test task
function goToMosaiktest() {
    //deactivate fullscreen
    cancelFullscreen();
    window.location = "Mosaiktest.html";
}


// go to zahlen sortieren test
function goToZahlensortierentest() {
    //deactivate fullscreen
    cancelFullscreen();
    window.location = "Zahlensortieren.html";
}

// go to Paarassoziations test
function goToPaarassoziationstestTeil2() {
    //deactivate fullscreen
    cancelFullscreen();
    window.location = "PaarassoziationstestTeil2.html";
}

// go to offene fragen test
function goToDepressionsscreening() {
    //deactivate fullscreen
    cancelFullscreen();
    window.location = "Depressionsscreening.html";
}

// go to ADLs test
function goToADLs() {
    if (!isReadyToSwitch) {

        $(".answerSelectionHintDiv").css("visibility", "visible");
        setTimeout(function () {
            $(".answerSelectionHintDiv").css("visibility", "hidden");
        }, 1000);
    }

    else {
        isReadyToSwitch = false;
        // store map
        jQuery.jStorage.set("DepressionQuestionAnswerMap", questAnswerMap);
        jQuery.jStorage.set("DepressionQuestions", depressionQuestions);

        //deactivate fullscreen
        cancelFullscreen();
        window.location = "ADLs.html";
    }
}



// check if the hitten word was correspendant to the first word
function isCorrectWord(leftwDiv, rightwTd) {


    var isCorrect = false;
    var leftW = leftwDiv.innerHTML;
    var rightW = rightwTd.innerHTML;
    var matchingWord = $(leftwDiv).data('match');
    rightW = jQuery.trim(rightW);

    try {
        // look for matched word
        if (rightW === matchingWord)
            isCorrect = true;
        else
            isCorrect = false;
    }
    catch (error) {
        console.log("Fehler beim matchen der beiden Wörter: " + rightW + " und " + matchingWord + error);
    }

    return isCorrect;
}







function countV1() {

    try {
        if (aktiv !== 0) {
            clearInterval(aktiv);
        }
        interactionTimer = 0;
        aktiv = setInterval(function () {
            interactionTimer++;
//        document.getElementById("timestamp").innerHTML = interactionTimer;
            if (interactionTimer === 40) {
                // store results
                jQuery.jStorage.set("RightNumFieldsTMT1", correctNumFieldsTMT1);
                jQuery.jStorage.set("WrongNumFieldsTMT1", wrongNumFieldsTMT1);
                jQuery.jStorage.set("TimeToSolveTMT1", timerTMT1);
                jQuery.jStorage.set("ClickIntervalsTMT1", clickIntervals1);
                // clear timers
                clearAllIntervals();
                $.mobile.changePage('#intro2v2a', {transition: "slide"});
            }
        }, 1000);

    }
    catch (error) {
        console.log("Fehler beim Zählen!" + error);
    }
}










function clearAllIntervals() {
    clearInterval(aktiv);
    clearInterval(aktivV2);
    clearInterval(aktivV3);
    clearInterval(aktivV4);
}

function countV2() {
    try {
        if (aktivV2 !== 0) {
            clearInterval(aktivV2);
        }
        interactionTimerV2 = 0;
        aktivV2 = setInterval(function () {
            interactionTimerV2++;
//        document.getElementById("timestampV2").innerHTML = interactionTimerV2;
            if (interactionTimerV2 === 40) {
                // store results
                jQuery.jStorage.set("RightNumFieldsTMT2", correctNumFieldsTMT2);
                jQuery.jStorage.set("WrongNumFieldsTMT2", wrongNumFieldsTMT2);
                jQuery.jStorage.set("TimeToSolveTMT2", timerTMT2);
                jQuery.jStorage.set("ClickIntervalsTMT2", clickIntervals2);
                // clear timers
                clearInterval(aktivV2);
                $.mobile.changePage('#intro2v3a', {transition: "slide"});
            }
        }, 1000);
    }
    catch (error) {
        console.log("Fehler beim Zählen!" + error);
    }
}






function countV3() {
    try {
        if (aktivV3 !== 0) {
            clearInterval(aktivV3);
        }
        interactionTimerV3 = 0;
        aktivV3 = setInterval(function () {
            interactionTimerV3++;
//        document.getElementById("timestampV3").innerHTML = interactionTimerV3;
            if (interactionTimerV3 === 40) {
                // store results
                jQuery.jStorage.set("RightNumFieldsTMT3", correctNumFieldsTMT3);
                jQuery.jStorage.set("WrongNumFieldsTMT3", wrongNumFieldsTMT3);
                jQuery.jStorage.set("TimeToSolveTMT3", timerTMT3);
                jQuery.jStorage.set("ClickIntervalsTMT3", clickIntervals3);
                //clear timers
                clearInterval(aktivV3);
                $.mobile.changePage('#intro2v4a', {transition: "slide"});
            }
        }, 1000);
    }
    catch (error) {
        console.log("Fehler beim Zählen!" + error);
    }
}






function countV4() {
    try {
        if (aktivV4 !== 0) {
            clearInterval(aktivV4);
        }
        interactionTimerV4 = 0;
        aktivV4 = setInterval(function () {
            interactionTimerV4++;
//        document.getElementById("timestampV4").innerHTML = interactionTimerV4;
            if (interactionTimerV4 === 40) {
                // store results
                jQuery.jStorage.set("RightNumFieldsTMT4", correctNumFieldsTMT4);
                jQuery.jStorage.set("WrongNumFieldsTMT4", wrongNumFieldsTMT4);
                jQuery.jStorage.set("TimeToSolveTMT4", timerTMT4);
                jQuery.jStorage.set("ClickIntervalsTMT4", clickIntervals4);
                //clear timers
                clearInterval(aktivV4);
//            window.location = "Mosaiktest.html";
                $.mobile.changePage('#TrailmakingtestTransit1', {transition: "slide"});
            }
        }, 1000);
    }
    catch (error) {
        console.log("Fehler beim Zählen!" + error);
    }
}


function getAnswer1(answerRadio) {

    $(".answerSelectionHintDiv").css("visibility", "hidden");

    var question = $("#quest1").html();
    var radioId = $(answerRadio).attr('id');
    var answerId = $('label[for="' + radioId + '"]').attr('id');
    var hoverItem;
    $("#" + answerId).css("color", normalColor);
    hoverItem = setInterval(function () {
        $("#" + answerId).css("color", "black");
        clearInterval(hoverItem);
    }, 1000);


    var answer = $("#" + answerId).text();
    questAnswerMap[question] = answer;
    depressionQuestions.push(question);



    // make button "weiter" ready to switch
    isReadyToSwitch = true;

//    $.mobile.changePage('#fragenTeil2', {transition: "slide"});
}

function goToFragenTeil2() {
    if (!isReadyToSwitch) {

        $(".answerSelectionHintDiv").css("visibility", "visible");
        setTimeout(function () {
            $(".answerSelectionHintDiv").css("visibility", "hidden");
        }, 1000);
    }

    else {
        $.mobile.changePage('#fragenTeil2', {transition: "slide"});
        isReadyToSwitch = false;
    }
}

function getAnswer2(answerRadio) {

    $(".answerSelectionHintDiv").css("visibility", "hidden");

    var question = $("#quest2").html();
    var radioId = $(answerRadio).attr('id');
    var answerId = $('label[for="' + radioId + '"]').attr('id');

    var hoverItem;
    $("#" + answerId).css("color", normalColor);
    hoverItem = setInterval(function () {
        $("#" + answerId).css("color", "black");
        clearInterval(hoverItem);
    }, 1000);
    var answer = $("#" + answerId).text();
    questAnswerMap[question] = answer;
    depressionQuestions.push(question);


// make button "weiter" ready to switch
    isReadyToSwitch = true;
//    $.mobile.changePage('#fragenTeil3', {transition: "slide"});
}

function goToFragenTeil3() {
    if (!isReadyToSwitch) {

        $(".answerSelectionHintDiv").css("visibility", "visible");
        setTimeout(function () {
            $(".answerSelectionHintDiv").css("visibility", "hidden");
        }, 1000);

    }

    else {
        $.mobile.changePage('#fragenTeil3', {transition: "slide"});
        isReadyToSwitch = false;
    }
}

function getAnswer3(answerRadio) {

    $(".answerSelectionHintDiv").css("visibility", "hidden");

    var question = $("#quest3").html();
    var radioId = $(answerRadio).attr('id');
    var answerId = $('label[for="' + radioId + '"]').attr('id');

    var hoverItem;
    $("#" + answerId).css("color", normalColor);
    hoverItem = setInterval(function () {
        $("#" + answerId).css("color", "black");
        clearInterval(hoverItem);
    }, 1000);
    var answer = $("#" + answerId).text();
    questAnswerMap[question] = answer;
    depressionQuestions.push(question);


// make button "weiter" ready to switch
    isReadyToSwitch = true;

//    $.mobile.changePage('#fragenTeil4', {transition: "slide"});
}

function goToFragenTeil4() {
    if (!isReadyToSwitch) {

        $(".answerSelectionHintDiv").css("visibility", "visible");
        setTimeout(function () {
            $(".answerSelectionHintDiv").css("visibility", "hidden");
        }, 1000);

    }

    else {
        $.mobile.changePage('#fragenTeil4', {transition: "slide"});
        isReadyToSwitch = false;
    }
}

function getAnswer4(answerRadio) {

    $(".answerSelectionHintDiv").css("visibility", "hidden");

    var question = $("#quest4").html();
    var radioId = $(answerRadio).attr('id');
    var answerId = $('label[for="' + radioId + '"]').attr('id');

    var hoverItem;
    $("#" + answerId).css("color", normalColor);
    hoverItem = setInterval(function () {
        $("#" + answerId).css("color", "black");
        clearInterval(hoverItem);
    }, 1000);
    var answer = $("#" + answerId).text();
    questAnswerMap[question] = answer;
    depressionQuestions.push(question);


// make button "weiter" ready to switch
    isReadyToSwitch = true;
//    $.mobile.changePage('#fragenTeil5', {transition: "slide"});
}

function goToFragenTeil5() {
    if (!isReadyToSwitch) {

        $(".answerSelectionHintDiv").css("visibility", "visible");
        setTimeout(function () {
            $(".answerSelectionHintDiv").css("visibility", "hidden");
        }, 1000);

    }

    else {
        $.mobile.changePage('#fragenTeil5', {transition: "slide"});
        isReadyToSwitch = false;
    }
}

function getAnswer5(answerRadio) {

    $(".answerSelectionHintDiv").css("visibility", "hidden");

    var question = $("#quest5").html();
    var radioId = $(answerRadio).attr('id');
    var answerId = $('label[for="' + radioId + '"]').attr('id');

    var hoverItem;
    $("#" + answerId).css("color", normalColor);
    hoverItem = setInterval(function () {
        $("#" + answerId).css("color", "black");
        clearInterval(hoverItem);
    }, 1000);
    var answer = $("#" + answerId).text();
    questAnswerMap[question] = answer;
    depressionQuestions.push(question);


    // make button "weiter" ready to switch
    isReadyToSwitch = true;

//    $.mobile.changePage('#fragenTeil6', {transition: "slide"});
}

function goToFragenTeil6() {
    if (!isReadyToSwitch) {

        $(".answerSelectionHintDiv").css("visibility", "visible");
        setTimeout(function () {
            $(".answerSelectionHintDiv").css("visibility", "hidden");
        }, 1000);

    }

    else {
        $.mobile.changePage('#fragenTeil6', {transition: "slide"});
        isReadyToSwitch = false;
    }
}

function getAnswer6(answerRadio) {

    $(".answerSelectionHintDiv").css("visibility", "hidden");
    var question = $("#quest6").html();
    var radioId = $(answerRadio).attr('id');
    var answerId = $('label[for="' + radioId + '"]').attr('id');

    var hoverItem;
    $("#" + answerId).css("color", normalColor);
    hoverItem = setInterval(function () {
        $("#" + answerId).css("color", "black");
        clearInterval(hoverItem);
    }, 1000);
    var answer = $("#" + answerId).text();
    questAnswerMap[question] = answer;
    depressionQuestions.push(question);


    // make button "weiter" ready to switch
    isReadyToSwitch = true;







//    var question = $("#quest6").html();
//    var answer;
//    var divChild = answerRadio.getElementsByTagName('div');
//    for (var i = 0; i < divChild.length; i++) {
//        var pChild = divChild[i].getElementsByTagName('p');
//        for (var j = 0; j < pChild.length; j++) {
//            answer = pChild[0].innerHTML;
//        }
//    }
//
//
//    questAnswerMap[question] = answer;
//    // store map
//    jQuery.jStorage.set("DepressionQuestionAnswerMap", questAnswerMap);

    // make "weiter" ready to switch task
//    if (answer.length !== 0)
//        isReadyToSwitch = true;

    //deactivate fullscreen
//    cancelFullscreen();
//    window.location = "ADLs.html";
}



function goToNextADL() {
    try {
        switch (ADLQuest) {
            case 1:
                if (!isReadyToSwitch) {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }

                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage2', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 2:
                if (!isReadyToSwitch) {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }

                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage4', {transition: "slide"});
                    // go to frage4
                    ADLQuest+=2;
                }
                break;
            case 3:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage4', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 4:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage6', {transition: "slide"});
                    // go to frage6
                    ADLQuest+=2;
                }
                break;
            case 5:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage6', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 6:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage7', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 7:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage8', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 8:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage9', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 9:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage10', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 10:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage11', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 11:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage12', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 12:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage15', {transition: "slide"});
                    // go to frage15
                    ADLQuest+=3;
                }
                break;
            case 13:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage14', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 14:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage15', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 15:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage17', {transition: "slide"});
                    // go to frage17
                    ADLQuest+=2;
                }
                break;
            case 16:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    $.mobile.changePage('#frage17', {transition: "slide"});
                    ADLQuest++;
                }
                break;
            case 17:
                if (!isReadyToSwitch)
                {
                    $(".answerSelectionHintDiv").css("visibility", "visible");
                    setTimeout(function () {
                        $(".answerSelectionHintDiv").css("visibility", "hidden");
                    }, 1000);
                }
                else {
                    isReadyToSwitch = false;
                    // reset count variable
                    ADLQuest = 0;
                    // store map
                    jQuery.jStorage.set("ADLQuestAnswerMap", ADLQuestAnswerMap);
                    jQuery.jStorage.set("ADLQuestions", adlQuestions);

                    // show the end of screening
                    $.mobile.changePage('#adlsEndPage', {transition: "slide"});
                }
                break;
        }
    }
    catch (error) {
        console.log("Fehler beim Übergang zur nächsten Frage! " + ADLQuest + error);
    }
}

function getChoice(answerRadio) {

    try {

        $(".answerSelectionHintDiv").css("visibility", "hidden");

        var radioId = $(answerRadio).attr('id');
        var answerId = $('label[for="' + radioId + '"]').attr('id');

        var hoverItem;
        $("#" + answerId).css("color", normalColor);
        hoverItem = setInterval(function () {
            $("#" + answerId).css("color", "black");
            clearInterval(hoverItem);
        }, 1000);

        // set "weiter" ready to switch
        isReadyToSwitch = true;
        switch (ADLQuest) {
            case 1:
                var question = $("#quest1").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#frage2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 2:
                var question = $("#quest2").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#frage3', {transition: "slide"});
//            ADLQuest++;
                break;
            case 3:
                var question = $("#quest3").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#frage4', {transition: "slide"});
//            ADLQuest++;
                break;
            case 4:
                var question = $("#quest4").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#frage5', {transition: "slide"});
//            ADLQuest++;
                break;
            case 5:
                var question = $("#quest5").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#frage6', {transition: "slide"});
//            ADLQuest++;
                break;
            case 6:
                var question = $("#quest6").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 7:
                var question = $("#quest7").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 8:
                var question = $("#quest8").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 9:
                var question = $("#quest9").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 10:
                var question = $("#quest10").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 11:
                var question = $("#quest11").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 12:
                var question = $("#quest12").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 13:
                var question = $("#quest13").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 14:
                var question = $("#quest14").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 15:
                var question = $("#quest15").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 16:
                var question = $("#quest16").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;
            case 17:
                var question = $("#quest17").html();
//            var radioId = $(answerRadio).attr('id');
//            var answerId = $('label[for="' + radioId + '"]').attr('id');
                var answer = $("#" + answerId).text();
                ADLQuestAnswerMap[question] = answer;
                adlQuestions.push(question);

//            $.mobile.changePage('#intro2ADLs2', {transition: "slide"});
//            ADLQuest++;
                break;

        }
    }
    catch (error) {
        console.log("Fehler beim Setzen der Antwort zur ADL: " + ADLQuest + error);
    }

}


// not actually in use 
function goToNextQuestion(answerRadio) {
    switch (mentalQuest) {
        case 1:
            var question = $("#adlQuest1").html();
            var answer;
            var pChild = answerRadio.getElementsByTagName('p');
            for (var i = 0; i < pChild.length; i++) {
                answer = pChild[0].innerHTML;
            }
            ADLQuestAnswerMap[question] = answer;

            $.mobile.changePage('#mentalefrage2', {transition: "slide"});
            mentalQuest++;
            break;

        case 2:
            var question = $("#adlQuest2").html();
            var answer;
            var pChild = answerRadio.getElementsByTagName('p');
            for (var i = 0; i < pChild.length; i++) {
                answer = pChild[0].innerHTML;
            }
            ADLQuestAnswerMap[question] = answer;

            $.mobile.changePage('#mentalefrage3', {transition: "slide"});
            mentalQuest++;

            break;

        case 3:
            var question = $("#adlQuest3").html();
            var answer;
            var pChild = answerRadio.getElementsByTagName('p');
            for (var i = 0; i < pChild.length; i++) {
                answer = pChild[0].innerHTML;
            }
            ADLQuestAnswerMap[question] = answer;
            //store results
            jQuery.jStorage.set("ADLQuestAnswerMap", ADLQuestAnswerMap);
            //call wordpairs delayed
            $.mobile.changePage('#transitionPage', {transition: "slide"});
            //reset question counter
            mentalQuest = 1;
            break;

    }

}



function numsLoop(nums, aktivloop, aktivhint, numElem, i) {
    try {
        $('#NumbersLength').html("");

        aktivloop = setTimeout(function () {

            if (i < nums.length) {
                numElem.innerHTML = nums[i];
                i++;
                var loop1 = setTimeout(function () {
                    numElem.innerHTML = "";
                }, 1500);

                var loop2 = setTimeout(function () {
                    numsLoop(nums, aktivloop, aktivhint, numElem, i);
                    return;
                }, 500);


            }
            else if (i === nums.length) {
                // clear timeout instances
                clearTimeout(loop1);
                clearTimeout(loop2);
                clearTimeout(aktivloop);

                setTimeout(function () {
                    $.mobile.changePage('#numsview');
                    $('#NumbersLength').html("Noch " + nums.length + " Ziffer");

                }, 1000);
                clearTimeout(aktivhint);
                return;
            }
        }, 2000);
    }
    catch (error) {
        console.log("Fehler beim Anzeigen der Zahlen " + nums + error);
    }

}

function showNumbers1(nums) {

    numbersArray = nums;
    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl1");
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}



function showNumbers1Rep(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl1Rep");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers2(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl2");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers2Rep(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl2Rep");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers3(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl3");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers3Rep(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl3Rep");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers4(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl4");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers4Rep(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl4Rep");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers5(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl5");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers5Rep(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl5Rep");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers6(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl6");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers6Rep(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl6Rep");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}

function showNumbers7(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl7");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}


function showNumbers7Rep(nums) {
    numbersArray = nums;

    var aktivloop;
    var aktivhint;
    var numElem = document.getElementById("zahl7Rep");
//    numElem.innerHTML = nums[0];
    var i = 0;

    numsLoop(nums, aktivloop, aktivhint, numElem, i);

}




function getArray() {

    return numbersArray;
}




// to get all patients of a professinal user
function getMyPatients() {



    try {
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/getAllPatients.php",
            data: {
                AdminId: jQuery.jStorage.get("AdminUserId")

            }


           // request successfull
        }).success(function (data) {
  // null was received
            if (data === null) {

                $.mobile.changePage('#requestFailedPage', {transition: "slide"});

                console.log("null data received!");
            }

 // patients' list is empty
            if (data === "nopatients") {

                $.mobile.changePage('#noPatientFoundPage', {transition: "slide"});

                console.log("no patients");

            }
// a petients list was received
            else if (data.patientsObject !== null) {

                // create a button for each found patient user
                viewPatients(data.patientsObject);
//                // show my patients page
//                $.mobile.changePage('#myPatientsPage', {transition: "slide"});

                console.log("patients list received");
                console.log(data.patientsObject);
            }

// post data was empty
            else if (data === "postempty") {

                $.mobile.changePage('#requestFailedPage', {transition: "slide"});

                console.log("Post empty");
            }


// request failed
        }).fail(function (data) {

            if (data === null) {

                console.log("data is null!");

            }

            else if (data !== null) {


                console.log(data);
                console.log("failed request");

            }

            $.mobile.changePage('#requestFailedPage', {transition: "slide"});


            
        });
    }
    catch (error) {
        console.log("error when retrieving patients list: " + error);
    }
}






// shows patients entries as buttons on the view patients page
function viewPatients(patientsArray) {

    try
    {
        
      // empty patients list
      $("#myPatientsDiv").empty();
      
      
        
        for (var i = 0; i < patientsArray.length; i++) {
                      
            

          var button =  $("<a>").attr("data-inline", true)
                    .attr("data-role", "button")
                    .attr("id", patientsArray[i])
                    .removeClass("buttonLong")
                    .addClass("buttonLong ui-btn ui-btn-inline ui-btn-corner-all ui-shadow ui-btn-up-c")
                    .text(patientsArray[i]);
            
            $("#myPatientsDiv").append(button);

                   

            // add on click event
            $("#"+patientsArray[i]).live("click", function () {
                
                var userId = $(this).attr("id");
                searchUserProfile(userId);
               
            });

        }
        
        
        
        // show my patients page
        setTimeout(function () {
           
             $.mobile.changePage('#myPatientsPage', {transition: "slide"});
        
     }, 200);
    }

    catch (error) {
        console.log("Error when creating buttons for patients: " + error);
    }

}



// to log out the main user
function logoutUser(){
    
    try
    {
        // delete the mainuser id from local storage
        jQuery.jStorage.set("AdminUserId","");
        // forward to login page
        window.location = "index.html";
        
    }
    
    catch (error) {
        console.log("Error when logging out the main user: " + error);
    }
}




// fills in patient info
function fillInPatientInfo(patientObject){
    
    try
    {
        
         // fill in info page
                $("#profileUserId").html(patientObject['userId']);
                $("#profileUserName").html(patientObject['userName']);
                $("#profileUserFullName").html(patientObject['userFullName']);
                $("#profileUserBirthday").html(patientObject['birthDay']);
                $("#profileUserAddress").html(patientObject['address']);
                $("#profileCreationDate").html(patientObject['creationDate']);

                $.mobile.changePage('#patientProfilePage', {transition: "slide"});
    }
    
    catch (error) {
        console.log("Error when filling patient info: " + error);
    }
}



// to show screening results 
function showResults(patientElementId){
    
    try
    {
        
        // get user id from the p tag
    var patientUserId = $("#" + patientElementId).text();
        
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/getResults.php",
            data: {
                
                userID: patientUserId


            }

// request successfull
        }).success(function (data) {
            
            
            // remove old entries from tables
            flushTablesEntries();
            
            if (data===null || data.length===0){
                
                $.mobile.changePage('#resultsNotFoundPage', {transition: "slide"});
                
                console.log(data);
            }
            
            else if (data!==null){
                
                // set user identification
                $("#concernedUserId").html(patientUserId);
                // set transformation points sum
                $("#transfPointsSum").html(data['transfPointsSum']+ " (von 30)");
                
                // get whole evaluation result
                var cognitiveImpaired = data['isCognitiveImpaired'];
                if (cognitiveImpaired === 'true')
                    $("#cognitiveImpaired").html("Ja");
                else if (cognitiveImpaired === 'false')
                    $("#cognitiveImpaired").html("Nein");
                else 
                    $("#cognitiveImpaired").html("undefined");
                
                // get all results

             $("#rightWords1").html(data['rightClickedWords1']);
             $("#rightWords2").html(data['rightClickedWords2']);
             $("#rightWords3").html(data['rightClickedWords3']);
             $("#rightWordsDelayed").html(data['rightClickedWordsDelay']);
             $("#wrongWords1").html(data['wrongClickedWords1']);
             $("#wrongWords2").html(data['wrongClickedWords2']);
             $("#wrongWords3").html(data['wrongClickedWords3']);
             $("#wrongWordsDelayed").html(data['wrongClickedWordsDelay']);
             
             $("#rightNumFieldsTMT1").html(data['rightNumFieldsTMT1']);
             $("#wrongNumFieldsTMT1").html(data['wrongNumFieldsTMT1']);
             $("#timeToSolveTMT1").html(data['timeToSolveTMT1']);
             $("#clickIntervalsTMT1").html(data['clickIntervalsTMT1']);
             $("#clickedNumbersArrayTMT1").html(data['clickedNumbersArrayTMT1']); 
             $("#taskSolvedTMT1").html(data['taskSolvedTMT1']);
                 
             $("#rightNumFieldsTMT2").html(data['rightNumFieldsTMT2']);
             $("#wrongNumFieldsTMT2").html(data['wrongNumFieldsTMT2']);
             $("#timeToSolveTMT2").html(data['timeToSolveTMT2']);
             $("#clickIntervalsTMT2").html(data['clickIntervalsTMT2']);
             $("#clickedNumbersArrayTMT2").html(data['clickedNumbersArrayTMT2']);
             $("#taskSolvedTMT2").html(data['taskSolvedTMT2']);
             
//             $("#rightNumFieldsTMT3").html(data['rightNumFieldsTMT3']);
//             $("#wrongNumFieldsTMT3").html(data['wrongNumFieldsTMT3']);
//             $("#timeToSolveTMT3").html(data['timeToSolveTMT3']);
//             $("#clickIntervalsTMT3").html(data['clickIntervalsTMT3']);
//             
//             $("#rightNumFieldsTMT4").html(data['rightNumFieldsTMT4']);
//             $("#wrongNumFieldsTMT4").html(data['wrongNumFieldsTMT4']);
//             $("#timeToSolveTMT4").html(data['timeToSolveTMT4']);
//             $("#clickIntervalsTMT4").html(data['clickIntervalsTMT4']);
             
             $("#rightPuzzlesP1").html(data['rightClickedTilesP1']);
             $("#wrongPuzzlesP1").html(data['wrongClickedTilesP1']);
             $("#puzzleSolvedP1").html(data['puzzleSolvedP1']);
             $("#timeToSolveP1").html(data['timeToSolveP1']);
             
//             $("#rightPuzzlesP2").html(data['rightClickedTilesP2']);
//             $("#wrongPuzzlesP2").html(data['wrongClickedTilesP2']);
//             $("#puzzleSolvedP2").html(data['puzzleSolvedP2']);
//             $("#timeToSolveP2").html(data['timeToSolveP2']);
             
             $("#rightPuzzlesP3").html(data['rightClickedTilesP3']);
             $("#wrongPuzzlesP3").html(data['wrongClickedTilesP3']);
             $("#puzzleSolvedP3").html(data['puzzleSolvedP3']);
             $("#timeToSolveP3").html(data['timeToSolveP3']);
             
             $("#rightPuzzlesP4").html(data['rightClickedTilesP4']);
             $("#wrongPuzzlesP4").html(data['wrongClickedTilesP4']);
             $("#puzzleSolvedP4").html(data['puzzleSolvedP4']);
             $("#timeToSolveP4").html(data['timeToSolveP4']);
             
//             $("#rightPuzzlesP5").html(data['rightClickedTilesP5']);
//             $("#wrongPuzzlesP5").html(data['wrongClickedTilesP5']);
//             $("#puzzleSolvedP5").html(data['puzzleSolvedP5']);
//             $("#timeToSolveP5").html(data['timeToSolveP5']);
//             
//             $("#rightPuzzlesP6").html(data['rightClickedTilesP6']);
//             $("#wrongPuzzlesP6").html(data['wrongClickedTilesP6']);
//             $("#puzzleSolvedP6").html(data['puzzleSolvedP6']);
//             $("#timeToSolveP6").html(data['timeToSolveP6']);
             
             $("#targetArray1").html(data['toAchieveArrayT1']);
             $("#clickedArray1").html(data['clickedArrayT1']);
             $("#targetArrayRep1").html(data['toAchieveArrayT1Rep']);
             $("#clickedArrayRep1").html(data['clickedArrayT1Rep']);
             
             $("#targetArray2").html(data['toAchieveArrayT2']);
             $("#clickedArray2").html(data['clickedArrayT2']);
             $("#targetArrayRep2").html(data['toAchieveArrayT2Rep']);
             $("#clickedArrayRep2").html(data['clickedArrayT2Rep']);
             
             $("#targetArray3").html(data['toAchieveArrayT3']);
             $("#clickedArray3").html(data['clickedArrayT3']);
             $("#targetArrayRep3").html(data['toAchieveArrayT3Rep']);
             $("#clickedArrayRep3").html(data['clickedArrayT3Rep']);
             
             $("#targetArray4").html(data['toAchieveArrayT4']);
             $("#clickedArray4").html(data['clickedArrayT4']);
             $("#targetArrayRep4").html(data['toAchieveArrayT4Rep']);
             $("#clickedArrayRep4").html(data['clickedArrayT4Rep']);
             
             $("#targetArray5").html(data['toAchieveArrayT5']);
             $("#clickedArray5").html(data['clickedArrayT5']);
             $("#targetArrayRep5").html(data['toAchieveArrayT5Rep']);
             $("#clickedArrayRep5").html(data['clickedArrayT5Rep']);
             
             $("#targetArray6").html(data['toAchieveArrayT6']);
             $("#clickedArray6").html(data['clickedArrayT6']);
             $("#targetArrayRep6").html(data['toAchieveArrayT6Rep']);
             $("#clickedArrayRep6").html(data['clickedArrayT6Rep']);
             
             $("#depressionQuestions").html(data['depressionQuestions']);
             $("#depressionAnswers").html(data['depressionQuestionAnswerMap']);
             
             $("#adlQuestions").html(data['ADLQuestions']);
             $("#adlAnswers").html(data['ADLQuestAnswerMap']);
             
             // fill in question/answer tables
             fillInDepressionItemsTables(data['depressionQuestions'],data['depressionQuestionAnswerMap']);
             fillInAdlsItemsTable(data['ADLQuestions'],data['ADLQuestAnswerMap']);
             
             $.mobile.changePage('#resultsPage', {transition: "slide"});

                console.log(data);
                
        }
           
        }).fail(function (data){
            
            $.mobile.changePage('#resultsRequestFailedPage', {transition: "slide"});
                
                console.log(data);
                console.log("failed results request!");
            
        });
        
    }
    catch (error) {
        console.log("Error when getting results of user: "+ patientUserId + error);
    }
    
}


function flushTablesEntries(){
    
    try{
    
    // flush entries from depression items table
    $('#nie0').html("");
    $('#vereinzelt0').html("");
    $('#haelfte0').html("");
    $('#jedentag0').html("");
    $('#nie1').html("");
    $('#vereinzelt1').html("");
    $('#haelfte1').html("");
    $('#jedentag1').html("");
    $('#nie2').html("");
    $('#vereinzelt2').html("");
    $('#haelfte2').html("");
    $('#jedentag2').html("");
       
    $('#ja3').html("");
    $('#nein3').html("");
    $('#taeglich3').html("");
    $('#mehrmals3').html("");
    $('#einmal3').html("");
    $('#weniger3').html("");
    $('#keine3').html("");
    $('#etwas3').html("");
    $('#grosse3').html("");
    $('#sehrgrosse3').html("");
    
    $('#ja4').html("");
    $('#nein4').html("");
    $('#taeglich4').html("");
    $('#mehrmals4').html("");
    $('#einmal4').html("");
    $('#weniger4').html("");
    $('#keine4').html("");
    $('#etwas4').html("");
    $('#grosse4').html("");
    $('#sehrgrosse4').html("");
    
    $('#ja5').html("");
    $('#nein5').html("");
    $('#taeglich5').html("");
    $('#mehrmals5').html("");
    $('#einmal5').html("");
    $('#weniger5').html("");
    $('#keine5').html("");
    $('#etwas5').html("");
    $('#grosse5').html("");
    $('#sehrgrosse5').html("");
    
    // flush entries from adls table
    for (var i=0; i<12;i++){
        $('#adlsnie'+i).html("");
        $('#selten'+i).html("");
        $('#haeufig'+i).html("");
        $('#sehrhaeufig'+i).html("");
        
    }
    }
    
    catch (error) {
        console.log("Error when flushing items tables! "+ error);
    }
}


// fill adls items table
function fillInAdlsItemsTable(adlsQuestions, adlsAnswers){
    
    try{
    
      if (adlsQuestions!== null && !adlsQuestions.length<=0 && adlsAnswers !== null && !adlsAnswers.length<=0){
          
        var adlsQuestArray = adlsQuestions.split(',');
        var adlsAnswArray = adlsAnswers.split(',');
        
       
        
        // loop into adls items
        for (var i=0; i < adlsQuestArray.length; i++){
            
                        
            if (adlsAnswArray[i].indexOf('Nie') !== -1){
                
                $('#adlsnie'+i).html("X");
            }
            
            else if (adlsAnswArray[i].indexOf('Selten') !== -1){
                
                $('#selten'+i).html("X");
            }
            
            else if (adlsAnswArray[i].indexOf('Häufig') !== -1){
                
                $('#haeufig'+i).html("X");
            }
            
             else if (adlsAnswArray[i].indexOf('Sehr häufig') !== -1){
                
                $('#sehrhaeufig'+i).html("X");
            }
            
        }
    
      }
  }
  
  catch (error) {
        console.log("Error when filling tables of questions for adls screening! "+ error);
    }
  
}




// fill depression questions tables 
function fillInDepressionItemsTables(depressionQuestions, depressionAnswers){
    
    try
    {
         if (depressionQuestions !== null && !depressionQuestions.length<=0 && depressionAnswers !== null && !depressionAnswers.length<=0)  {    
        // convert to arrays
        var depressionQuestArray = depressionQuestions.split(',');
        var depressionAnswArray = depressionAnswers.split(',');
       
        
        
        
        // loop into depression items
        for (var i=0; i < depressionQuestArray.length; i++){
            
            if (depressionAnswArray[i].indexOf('Nie') !== -1){
                
                $('#nie'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('An vereinzelten Tagen') !== -1){
                
                $('#vereinzelt'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('An mehr als der Hälfte der letzten 14 Tagen') !== -1){
                
                $('#haelfte'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Fast jeden Tag oder täglich') !== -1){
                
                $('#jedentag'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Ja') !== -1){
                
                $('#ja'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Nein') !== -1){
                
                $('#nein'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Täglich') !== -1){
                
                $('#taeglich'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Mehrmals die Woche') !== -1){
                
                $('#mehrmals'+i).html("X");
            }
            
             else if (depressionAnswArray[i].indexOf('Ca. 1x die Woche') !== -1){
                
                $('#einmal'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Weniger als 1x die Woche') !== -1){
                
                $('#weniger'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Ich mache mir KEINE Sorgen') !== -1){
                
                $('#keine'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Ich mache mir ETWAS Sorgen') !== -1){
                
                $('#etwas'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Ich mache mir GROßE Sorgen') !== -1){
                
                $('#grosse'+i).html("X");
            }
            
            else if (depressionAnswArray[i].indexOf('Ich mache mir SEHR GROße Sorgen') !== -1){
                
                $('#sehrgrosse'+i).html("X");
            }
        }
        
        
    }
        
    }
    
     catch (error) {
        console.log("Error when filling tables of questions for depression screening! "+ error);
    }
    
}



// to delete a patient from the patients list
function deletePatient(patientElementId) {

   // get user id from the p tag
    var patientUserId = $("#" + patientElementId).text();
    

    try {
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/deletePatient.php",
            data: {
                AdminId: jQuery.jStorage.get("AdminUserId"),
                patientUserId: patientUserId


            }

// request successfull
        }).success(function (data) {

// nodata received
            if (data === null) {

                $.mobile.changePage('#failedDeletePage', {transition: "slide"});

                console.log("null received!");
            }

// patient already exists
            if (data === "notexist") {

                $.mobile.changePage('#patientNotExistingPage', {transition: "slide"});

                console.log("patient doesn't exist");

            }
            
            // patient was successfully created
            else if (data === "removed") {

  // show my patients page (reload patients list)
               getMyPatients();

                console.log("patient removed");
            }

// patietn couldn't be created
            else if (data === "notremoved") {

                $.mobile.changePage('#failedDeletePage', {transition: "slide"});

                console.log("patient removing failed");
            }

 // one or all posted data was empty
            else if (data === "postempty") {

                $.mobile.changePage('#failedDeletePage', {transition: "slide"});

                console.log("post empty");
            }


// request failes
        }).fail(function (data) {

            

            $.mobile.changePage('#failedDeletePage', {transition: "slide"});


            console.log("failed request");
        });
    }
    catch (error) {
        console.log("error when deleting patient patient: " + patientUserId + error);
    }
}





// to search a user and show his profile
function searchUserProfile(id) {

    try {
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/findPatient.php",
            data: {
                
                userID: id

            }


 // request successfull
        }).success(function (data) {


 // patient found, then fill in info page
            if (data.userObject !== null) {

                // set patient info
                fillInPatientInfo(data.userObject);
                
                console.log(data);
                console.log("patient user found");
            }
            
            // no patient found
            else {
                $.mobile.changePage('#patientNotExistingPage', {transition: "slide"});

                console.log("patient not existing");
            }
 // failed request
        }).fail(function (data) {
            $.mobile.changePage('#requestFailedPage', {transition: "slide"});

            console.log(data);
            console.log("failed request!");
        });
    }
    catch (error) {
        console.log("error when looking for following patient: " + id + error);
    }
}











// to send testbatterie results to backend
function sendTestbatterieResults() {

   
    try {
         
        
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/sendResults.php",
            data: {
                
                userID: jQuery.jStorage.get("UserName"),
                RightClickedWords1: jQuery.jStorage.get("RightClickedWords1"), WrongClickedWords1: jQuery.jStorage.get("WrongClickedWords1"),
                RightClickedWords2: jQuery.jStorage.get("RightClickedWords2"), WrongClickedWords2: jQuery.jStorage.get("WrongClickedWords2"),
                RightClickedWords3: jQuery.jStorage.get("RightClickedWords3"), WrongClickedWords3: jQuery.jStorage.get("WrongClickedWords3"),
                RightClickedWordsDelay: jQuery.jStorage.get("RightClickedWordsDelay"), WrongClickedWordsDelay: jQuery.jStorage.get("WrongClickedWordsDelay"),
                RightNumFieldsTMT1: jQuery.jStorage.get("RightNumFieldsTMT1"), WrongNumFieldsTMT1: jQuery.jStorage.get("WrongNumFieldsTMT1"), TimeToSolveTMT1: jQuery.jStorage.get("TimeToSolveTMT1"), ClickIntervalsTMT1: jQuery.jStorage.get("ClickIntervalsTMT1"),ClickedNumbersArrayTMT1: jQuery.jStorage.get("ClickedNumbersArrayTMT1"),TaskSolvedTMT1: jQuery.jStorage.get("TaskSolvedTMT1"),
                RightNumFieldsTMT2: jQuery.jStorage.get("RightNumFieldsTMT2"), WrongNumFieldsTMT2: jQuery.jStorage.get("WrongNumFieldsTMT2"), TimeToSolveTMT2: jQuery.jStorage.get("TimeToSolveTMT2"), ClickIntervalsTMT2: jQuery.jStorage.get("ClickIntervalsTMT2"),ClickedNumbersArrayTMT2: jQuery.jStorage.get("ClickedNumbersArrayTMT2"),TaskSolvedTMT2: jQuery.jStorage.get("TaskSolvedTMT2"),
                RightNumFieldsTMT3: jQuery.jStorage.get("RightNumFieldsTMT3"), WrongNumFieldsTMT3: jQuery.jStorage.get("WrongNumFieldsTMT3"), TimeToSolveTMT3: jQuery.jStorage.get("TimeToSolveTMT3"), ClickIntervalsTMT3: jQuery.jStorage.get("ClickIntervalsTMT3"),
                RightNumFieldsTMT4: jQuery.jStorage.get("RightNumFieldsTMT4"), WrongNumFieldsTMT4: jQuery.jStorage.get("WrongNumFieldsTMT4"), TimeToSolveTMT4: jQuery.jStorage.get("TimeToSolveTMT4"), ClickIntervalsTMT4: jQuery.jStorage.get("ClickIntervalsTMT4"),
                WrongClickedTilesP1: jQuery.jStorage.get("WrongClickedTilesP1"), RightClickedTilesP1: jQuery.jStorage.get("RightClickedTilesP1"), PuzzleSolvedP1: jQuery.jStorage.get("PuzzleSolvedP1"), TimeToSolveP1: jQuery.jStorage.get("TimeToSolveP1"),
                WrongClickedTilesP2: jQuery.jStorage.get("WrongClickedTilesP2"), RightClickedTilesP2: jQuery.jStorage.get("RightClickedTilesP2"), PuzzleSolvedP2: jQuery.jStorage.get("PuzzleSolvedP2"), TimeToSolveP2: jQuery.jStorage.get("TimeToSolveP2"),
                WrongClickedTilesP3: jQuery.jStorage.get("WrongClickedTilesP3"), RightClickedTilesP3: jQuery.jStorage.get("RightClickedTilesP3"), PuzzleSolvedP3: jQuery.jStorage.get("PuzzleSolvedP3"), TimeToSolveP3: jQuery.jStorage.get("TimeToSolveP3"),
                WrongClickedTilesP4: jQuery.jStorage.get("WrongClickedTilesP4"), RightClickedTilesP4: jQuery.jStorage.get("RightClickedTilesP4"), PuzzleSolvedP4: jQuery.jStorage.get("PuzzleSolvedP4"), TimeToSolveP4: jQuery.jStorage.get("TimeToSolveP4"),
                WrongClickedTilesP5: jQuery.jStorage.get("WrongClickedTilesP5"), RightClickedTilesP5: jQuery.jStorage.get("RightClickedTilesP5"), PuzzleSolvedP5: jQuery.jStorage.get("PuzzleSolvedP5"), TimeToSolveP5: jQuery.jStorage.get("TimeToSolveP5"),
                WrongClickedTilesP6: jQuery.jStorage.get("WrongClickedTilesP6"), RightClickedTilesP6: jQuery.jStorage.get("RightClickedTilesP6"), PuzzleSolvedP6: jQuery.jStorage.get("PuzzleSolvedP6"), TimeToSolveP6: jQuery.jStorage.get("TimeToSolveP6"),
                WrongClickedTilesP7: jQuery.jStorage.get("WrongClickedTilesP7"), RightClickedTilesP7: jQuery.jStorage.get("RightClickedTilesP7"), PuzzleSolvedP7: jQuery.jStorage.get("PuzzleSolvedP7"), TimeToSolveP7: jQuery.jStorage.get("TimeToSolveP7"),
                ToAchieveArrayT1: jQuery.jStorage.get("ToAchieveArrayT1"), ClickedArrayT1: jQuery.jStorage.get("ClickedArrayT1"), ToAchieveArrayT1Rep: jQuery.jStorage.get("ToAchieveArrayT1Rep"), ClickedArrayT1Rep: jQuery.jStorage.get("ClickedArrayT1Rep"),
                ToAchieveArrayT2: jQuery.jStorage.get("ToAchieveArrayT2"), ClickedArrayT2: jQuery.jStorage.get("ClickedArrayT2"), ToAchieveArrayT2Rep: jQuery.jStorage.get("ToAchieveArrayT2Rep"), ClickedArrayT2Rep: jQuery.jStorage.get("ClickedArrayT2Rep"),
                ToAchieveArrayT3: jQuery.jStorage.get("ToAchieveArrayT3"), ClickedArrayT3: jQuery.jStorage.get("ClickedArrayT3"), ToAchieveArrayT3Rep: jQuery.jStorage.get("ToAchieveArrayT3Rep"), ClickedArrayT3Rep: jQuery.jStorage.get("ClickedArrayT3Rep"),
                ToAchieveArrayT4: jQuery.jStorage.get("ToAchieveArrayT4"), ClickedArrayT4: jQuery.jStorage.get("ClickedArrayT4"), ToAchieveArrayT4Rep: jQuery.jStorage.get("ToAchieveArrayT4Rep"), ClickedArrayT4Rep: jQuery.jStorage.get("ClickedArrayT4Rep"),
                ToAchieveArrayT5: jQuery.jStorage.get("ToAchieveArrayT5"), ClickedArrayT5: jQuery.jStorage.get("ClickedArrayT5"), ToAchieveArrayT5Rep: jQuery.jStorage.get("ToAchieveArrayT5Rep"), ClickedArrayT5Rep: jQuery.jStorage.get("ClickedArrayT5Rep"),
                ToAchieveArrayT6: jQuery.jStorage.get("ToAchieveArrayT6"), ClickedArrayT6: jQuery.jStorage.get("ClickedArrayT6"), ToAchieveArrayT6Rep: jQuery.jStorage.get("ToAchieveArrayT6Rep"), ClickedArrayT6Rep: jQuery.jStorage.get("ClickedArrayT6Rep"),
                ToAchieveArrayT7: jQuery.jStorage.get("ToAchieveArrayT7"), ClickedArrayT7: jQuery.jStorage.get("ClickedArrayT7"), ToAchieveArrayT7Rep: jQuery.jStorage.get("ToAchieveArrayT7Rep"), ClickedArrayT7Rep: jQuery.jStorage.get("ClickedArrayT7Rep"),
                HighestArrayLength: jQuery.jStorage.get("HighestArrayLength"),
                DepressionQuestionAnswerMap: jQuery.jStorage.get("DepressionQuestionAnswerMap"),
                DepressionQuestions: jQuery.jStorage.get("DepressionQuestions"),
                ADLQuestAnswerMap: jQuery.jStorage.get("ADLQuestAnswerMap"),
                ADLQuestions: jQuery.jStorage.get("ADLQuestions")


            }

// request successfull
        }).success(function (data) {
            
            
           

// nodata received
            if (data === null) {

                $.mobile.changePage('#sendFailed', {transition: "slide"});

        
                console.log("null received!");
            }

// patient doesn't exist
            if (data === "notexist") {

                $.mobile.changePage('#sendFailed', {transition: "slide"});

                console.log("patient not exists");

            }
            
            // results were successfully received and stored
            else if (data === "received") {

  $.mobile.changePage('#sendConfirmation', {transition: "slide"});
  
                console.log("results transmitted");
            }

// patient id from testbatterie and patient id on backend aren't the same 
            else if (data === "notidentical") {

                $.mobile.changePage('#sendFailed', {transition: "slide"});

                console.log("id isn't the same");
            }
            
            else if (data === "nullresponse"){
                $.mobile.changePage('#sendFailed', {transition: "slide"});

        
            }
            
            else if (data === "noupdate"){
                 $.mobile.changePage('#sendFailed', {transition: "slide"});

            }

 // results couldn't be transmitted
            else if (data === "notreceived") {

                $.mobile.changePage('#sendFailed', {transition: "slide"});

                console.log("results couldn't be transmitted!");
            }


// request failes
        }).fail(function (data) {

            

            $.mobile.changePage('#sendFailed', {transition: "slide"});


            console.log("failed request");
        });
    }
    catch (error) {
        console.log("error when transmitting results of patient: " + jQuery.jStorage.get("UserName") + error);
    }
}





// to add new patient to the list of professinal user
function addPatientToList(patientElementId) {

   // get user id from the p tag
    var patientUserId = $("#" + patientElementId).text();
    

    try {
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/drawUpNewPatient.php",
            data: {
                AdminId: jQuery.jStorage.get("AdminUserId"),
                patientUserId: patientUserId


            }

// request successfull
        }).success(function (data) {

// nodata received
            if (data === null) {

                $.mobile.changePage('#failedDrawUpPage', {transition: "slide"});

                console.log("null received!");
            }

// patient already exists
            if (data === "exists") {

                $.mobile.changePage('#patientAlreadyExistsPage', {transition: "slide"});

                console.log("patient already exists");

            }
            
            // patient was successfully created
            else if (data === "created") {

  // show my patients page (reload patients list)
               getMyPatients();

                console.log("patient created");
            }

// patietn couldn't be created
            else if (data === "notcreated") {

                $.mobile.changePage('#failedDrawUpPage', {transition: "slide"});

                console.log("patient creation failed");
            }

 // one or all posted data was empty
            else if (data === "postempty") {

                $.mobile.changePage('#failedDrawUpPage', {transition: "slide"});

                console.log("post empty");
            }


// request failes
        }).fail(function (data) {

            

            $.mobile.changePage('#failedDrawUpPage', {transition: "slide"});


            console.log("failed request");
        });
    }
    catch (error) {
        console.log("error when drawing up new patient: " + patientUserId + error);
    }
}




// show patients profile
function showPatientProfile(patientObject){
    
    try
    {
        // set patient info
                $("#returnedUserId").html(patientObject['userId']);
                $("#returnedUserName").html(patientObject['userName']);
                $("#returnedUserFullName").html(patientObject['userFullName']);
                $("#returnedUserBirthday").html(patientObject['birthDay']);
                $("#returnedUserAddress").html(patientObject['address']);
                $("#returnedCreationDate").html(patientObject['creationDate']);
 // go to patient info page
                $.mobile.changePage('#patientInfoPage', {transition: "slide"});
    }
    
    catch (error) {
        console.log("error when showing patient profile: " + error);
    }
}



// to search a user
function searchUser(name, id) {

    try {
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/searchPatient.php",
            data: {
                userName: name,
                userID: id

            }


// request successfull
        }).success(function (data) {


// when patient was found
            if (data.userObject !== null) {

                // set patient info
                showPatientProfile(data.userObject);
                console.log(data);
                console.log("patient found");
            }
            else {
                $.mobile.changePage('#userNotFoundPage', {transition: "slide"});

                console.log("failed to find patient!");
            }

// request failed
        }).fail(function (data) {
            $.mobile.changePage('#userNotFoundPage', {transition: "slide"});

            console.log(data);
            console.log("request failed");
        });
    }
    catch (error) {
        console.log("error when searching following patient: " + id + name + error);
    }
}











// to log in admin user
function login(id, password) {

    try {
        
        // hash plain password
        var hashedPassword = hashPassword(password);
        
        
        
        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/loginProfessionalUser.php",
            data: {
                userID: id,
                userPassword: hashedPassword

            }

               // request successfull
        }).success(function (data) {


              // if user is authenticated
            if (data.success === true) {

                $.mobile.changePage('#patientsManagementPage', {transition: "slide"});
                // store user test id
                jQuery.jStorage.set("AdminUserId", id);
                console.log(data);
                console.log("admin user successfully authenticated");
            }
            
             // failed to authenticate
            else {
                $.mobile.changePage('#loginFailedPage', {transition: "slide"});

                console.log("failed to authenticate admin user!");
            }


  // request failed
        }).fail(function (data) {
            $.mobile.changePage('#loginFailedPage', {transition: "slide"});

            console.log(data);
            console.log("failed to authenticate admin user!");
        });
    }
    catch (error) {
        console.log("error when authenticating admin user: " + id + password + error);
    }
}


//store results to backend
function sendResults() {

    try {

        $.ajax({
            type: "POST",
            url: "https://www.neurocare-aal.de/screening/functions/index.php",
            data: {
                user_id: jQuery.jStorage.get("UserName"),
                RightClickedWords1: jQuery.jStorage.get("RightClickedWords1"), WrongClickedWords1: jQuery.jStorage.get("WrongClickedWords1"),
                RightClickedWords2: jQuery.jStorage.get("RightClickedWords2"), WrongClickedWords2: jQuery.jStorage.get("WrongClickedWords2"),
                RightClickedWords3: jQuery.jStorage.get("RightClickedWords3"), WrongClickedWords3: jQuery.jStorage.get("WrongClickedWords3"),
                RightClickedWordsDelay: jQuery.jStorage.get("RightClickedWordsDelay"), WrongClickedWordsDelay: jQuery.jStorage.get("WrongClickedWordsDelay"),
                RightNumFieldsTMT1: jQuery.jStorage.get("RightNumFieldsTMT1"), WrongNumFieldsTMT1: jQuery.jStorage.get("WrongNumFieldsTMT1"), TimeToSolveTMT1: jQuery.jStorage.get("TimeToSolveTMT1"), ClickIntervalsTMT1: jQuery.jStorage.get("ClickIntervalsTMT1"),
                RightNumFieldsTMT2: jQuery.jStorage.get("RightNumFieldsTMT2"), WrongNumFieldsTMT2: jQuery.jStorage.get("WrongNumFieldsTMT2"), TimeToSolveTMT2: jQuery.jStorage.get("TimeToSolveTMT2"), ClickIntervalsTMT2: jQuery.jStorage.get("ClickIntervalsTMT2"),
                RightNumFieldsTMT3: jQuery.jStorage.get("RightNumFieldsTMT3"), WrongNumFieldsTMT3: jQuery.jStorage.get("WrongNumFieldsTMT3"), TimeToSolveTMT3: jQuery.jStorage.get("TimeToSolveTMT3"), ClickIntervalsTMT3: jQuery.jStorage.get("ClickIntervalsTMT3"),
                RightNumFieldsTMT4: jQuery.jStorage.get("RightNumFieldsTMT4"), WrongNumFieldsTMT4: jQuery.jStorage.get("WrongNumFieldsTMT4"), TimeToSolveTMT4: jQuery.jStorage.get("TimeToSolveTMT4"), ClickIntervalsTMT4: jQuery.jStorage.get("ClickIntervalsTMT4"),
                WrongClickedTilesP1: jQuery.jStorage.get("WrongClickedTilesP1"), RightClickedTilesP1: jQuery.jStorage.get("RightClickedTilesP1"), PuzzleSolvedP1: jQuery.jStorage.get("PuzzleSolvedP1"), TimeToSolveP1: jQuery.jStorage.get("TimeToSolveP1"),
                WrongClickedTilesP2: jQuery.jStorage.get("WrongClickedTilesP2"), RightClickedTilesP2: jQuery.jStorage.get("RightClickedTilesP2"), PuzzleSolvedP2: jQuery.jStorage.get("PuzzleSolvedP2"), TimeToSolveP2: jQuery.jStorage.get("TimeToSolveP2"),
                WrongClickedTilesP3: jQuery.jStorage.get("WrongClickedTilesP3"), RightClickedTilesP3: jQuery.jStorage.get("RightClickedTilesP3"), PuzzleSolvedP3: jQuery.jStorage.get("PuzzleSolvedP3"), TimeToSolveP3: jQuery.jStorage.get("TimeToSolveP3"),
                WrongClickedTilesP4: jQuery.jStorage.get("WrongClickedTilesP4"), RightClickedTilesP4: jQuery.jStorage.get("RightClickedTilesP4"), PuzzleSolvedP4: jQuery.jStorage.get("PuzzleSolvedP4"), TimeToSolveP4: jQuery.jStorage.get("TimeToSolveP4"),
                WrongClickedTilesP5: jQuery.jStorage.get("WrongClickedTilesP5"), RightClickedTilesP5: jQuery.jStorage.get("RightClickedTilesP5"), PuzzleSolvedP5: jQuery.jStorage.get("PuzzleSolvedP5"), TimeToSolveP5: jQuery.jStorage.get("TimeToSolveP5"),
                WrongClickedTilesP6: jQuery.jStorage.get("WrongClickedTilesP6"), RightClickedTilesP6: jQuery.jStorage.get("RightClickedTilesP6"), PuzzleSolvedP6: jQuery.jStorage.get("PuzzleSolvedP6"), TimeToSolveP6: jQuery.jStorage.get("TimeToSolveP6"),
                WrongClickedTilesP7: jQuery.jStorage.get("WrongClickedTilesP7"), RightClickedTilesP7: jQuery.jStorage.get("RightClickedTilesP7"), PuzzleSolvedP7: jQuery.jStorage.get("PuzzleSolvedP7"), TimeToSolveP7: jQuery.jStorage.get("TimeToSolveP7"),
                ToAchieveArrayT1: jQuery.jStorage.get("ToAchieveArrayT1"), ClickedArrayT1: jQuery.jStorage.get("ClickedArrayT1"), ToAchieveArrayT1Rep: jQuery.jStorage.get("ToAchieveArrayT1Rep"), ClickedArrayT1Rep: jQuery.jStorage.get("ClickedArrayT1Rep"),
                ToAchieveArrayT2: jQuery.jStorage.get("ToAchieveArrayT2"), ClickedArrayT2: jQuery.jStorage.get("ClickedArrayT2"), ToAchieveArrayT2Rep: jQuery.jStorage.get("ToAchieveArrayT2Rep"), ClickedArrayT2Rep: jQuery.jStorage.get("ClickedArrayT2Rep"),
                ToAchieveArrayT3: jQuery.jStorage.get("ToAchieveArrayT3"), ClickedArrayT3: jQuery.jStorage.get("ClickedArrayT3"), ToAchieveArrayT3Rep: jQuery.jStorage.get("ToAchieveArrayT3Rep"), ClickedArrayT3Rep: jQuery.jStorage.get("ClickedArrayT3Rep"),
                ToAchieveArrayT4: jQuery.jStorage.get("ToAchieveArrayT4"), ClickedArrayT4: jQuery.jStorage.get("ClickedArrayT4"), ToAchieveArrayT4Rep: jQuery.jStorage.get("ToAchieveArrayT4Rep"), ClickedArrayT4Rep: jQuery.jStorage.get("ClickedArrayT4Rep"),
                ToAchieveArrayT5: jQuery.jStorage.get("ToAchieveArrayT5"), ClickedArrayT5: jQuery.jStorage.get("ClickedArrayT5"), ToAchieveArrayT5Rep: jQuery.jStorage.get("ToAchieveArrayT5Rep"), ClickedArrayT5Rep: jQuery.jStorage.get("ClickedArrayT5Rep"),
                ToAchieveArrayT6: jQuery.jStorage.get("ToAchieveArrayT6"), ClickedArrayT6: jQuery.jStorage.get("ClickedArrayT6"), ToAchieveArrayT6Rep: jQuery.jStorage.get("ToAchieveArrayT6Rep"), ClickedArrayT6Rep: jQuery.jStorage.get("ClickedArrayT6Rep"),
                ToAchieveArrayT7: jQuery.jStorage.get("ToAchieveArrayT7"), ClickedArrayT7: jQuery.jStorage.get("ClickedArrayT7"), ToAchieveArrayT7Rep: jQuery.jStorage.get("ToAchieveArrayT7Rep"), ClickedArrayT7Rep: jQuery.jStorage.get("ClickedArrayT7Rep"),
                DepressionQuestionAnswerMap: jQuery.jStorage.get("DepressionQuestionAnswerMap"),
                ADLQuestAnswerMap: jQuery.jStorage.get("ADLQuestAnswerMap")

            }
        }).
                success(function (data) {

                    console.log(data);

                    if (data.success === true) {
                        $.mobile.changePage('#sendConfirmation', {transition: "slide"});
                    }

                    else if (data.success === false) {
                        $.mobile.changePage('#sendFailed', {transition: "slide"});
                    }

                    console.log("success");


                }).fail(function (data) {
            $.mobile.changePage('#sendFailed', {transition: "slide"});
            console.log("failed to load php script due to internet connection.");
            console.log(data);
        });

    }
    catch (error) {
        console.log("Fehler beim Hochladen der Ergebnisse! " + error);
    }

}


// retrieve results of a specefic user
function getResults() {

    var testId = $('#testId').val();
    var passwort = $('#passwort').val();

    try {
        if (testId !== "" && passwort !== "") {

            $.ajax({
                type: "POST",
                url: "https://www.neurocare-aal.de/screening/functions/results.php",
                data: {
                    testId: testId,
                    passwort: passwort
                }
            }).success(function (data) {
                $('#resultsText').html(data);
                $.mobile.changePage('#displayResults', {transition: "slideup"});

            }).fail(function (data) {
                $.mobile.changePage('#requestFailed', {transition: "slideup"});
                console.log("request failed!" + testId + "  " + passwort + data);

            })

                    .done(function (data) {
                        console.log("request successfull! " + testId + "  " + passwort);
                    });
        }
    }

    catch (error) {
        console.log("Fehler beim Abfragen der Ergebnisse! " + error);
    }

}




// shows page as fullscreen
function switchToFullscreen() {
    try {

        $(document).find("div[data-role=page").each(function () {
            if (this.requestFullScreen) {
                this.requestFullScreen();
            } else if (this.mozRequestFullScreen) {
                this.mozRequestFullScreen();
            } else if (this.webkitRequestFullScreen) {
                this.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        });
    }
    catch (error) {
        console.log("Fullscreen API nicht unterstützt!: " + error);
    }
}

// cancels fullscreen mode by changing html-document
function cancelFullscreen() {
    try {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    catch (error) {
        console.log("Fullscreen API nicht unterstützt!: " + error);
    }
}



// this will restart the application with an actual timestamp
function onResume() {
    try {
        jQuery.jStorage.flush();
        document.location.href = 'index.html?' + event.timeStamp;
    }
    catch (error) {
        console.log("Es konnte nicht zur Startseite gewechselt werden! " + error);
    }
}

