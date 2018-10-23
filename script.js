//11. firstLast6
function firstLast6(x){
    if (x[0] == 6 || x[x.length-1] == 6){
        return true;
    }else{
        return false;
    }
}

//12. has_23
function has23(arr){
    if (arr[0] == 2 || arr[1] == 3 || arr[1] == 2 || arr[1] == 3){
        return true;
    }else{
        return false;
    }
}

//13. fix_23
function fix23(arr){
     if (arr[0] == 2 && arr[1] == 3){
         arr[1] = 0;
         return arr;
     }
     if (arr[1] == 2 && arr[2] == 3){
         arr[2] = 0;
         return arr;
     }else{
         return arr;
     }
}

//14. countYZ
function countYZ(str){
    var string = str.toLowerCase();
    var count = 0;
    for (var i=0; i<string.length; i++){
        if (string[i] == " " && string[i-1] == "z" || string[i] == " " && string[i-1] == "y") {
            count = count + 1;
        }
    }
    if (string[string.length-1] == "y" || string[string.length-1] == "z"){
        count = count + 1;
    }
    return count;
}

//15. endOther
function endOther(stringOne, stringTwo){
    var strOne = stringOne.toLowerCase();
    var strTwo = stringTwo.toLowerCase();
    var strOneLength = stringOne.length;
    var strTwoLength = stringTwo.length;
    if (strOneLength == strTwoLength){
        if (strOne == strTwo){
            return true;
        }else{
            return false;
        }
    }
    if (strOneLength > strTwoLength) {
        var newStrOne = strOne.substring([strOneLength - strTwoLength]);
        if (newStrOne == strTwo) {
            return true;
        }
    }
    if (strTwoLength > strOneLength){
        var newStrTwo = strTwo.substring([strTwoLength - strOneLength]);
        if (newStrTwo == strOne) {
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

//16. starOut
function starOut(string){
    var str = string;
    var newString = "";
    for (var i=0; i<str.length; i++) {
        if (str[i+1] != "*" && str[i-1] != "*" && str[i] != "*"){
         newString = newString + str[i];
        }
    }
    return newString;
}

//17.getSandwich
function getSandwich(string){
    var firstBread = string.indexOf("bread");
    var lastBread = string.lastIndexOf("bread");
    if (firstBread == -1 && lastBread == -1){
        return "";
    }
    return string.slice(firstBread + 5, lastBread);
}

//18.canBalance
function canBalance(arr){
    var sumOne = 0;
    var sumTwo = 0;
    for (var i = 0; i < arr.length; i++){
        sumOne += arr[i];
        for (var j = i+1; j<arr.length; j++){
            sumTwo += arr[j];
        }
        if (sumOne == sumTwo){
            return true;
        }else{
            sumTwo = 0;
        }
    }
    return false;
}

//19. countClumps
function countClumps(arr) {
    var clumps = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1] && arr [i] != arr[i-1]){
            clumps += 1
        }
    }
    return clumps;
}

//20. evenlySpaced
function evenlySpaced(a, b, c){
    if(a==b && a==c){
        return true;
    }
    if(a == b || a==c || b==c){
        return false;
    }
    var spaceOne = Math.abs(a-b);
    var spaceTwo = Math.abs(b-c);
    var spaceThree = Math.abs(c-a);
    if (spaceOne == spaceTwo){
        return true;
    }
    if (spaceTwo == spaceThree){
        return true;
    }
    if (spaceOne == spaceThree){
        return true
    }
        return false;
}

function tester() {
    document.getElementById("output").innerHTML += firstLast6([1, 2, 6]);
    document.getElementById("output").innerHTML += has23([2, 5]);
    document.getElementById("output").innerHTML += fix23([1, 2, 3]);
    document.getElementById("output").innerHTML += countYZ("fez day");
    document.getElementById("output").innerHTML += endOther("Hiabc", "abcd");
    document.getElementById("output").innerHTML += starOut("ab*cd");
    document.getElementById("output").innerHTML += getSandwich("abcbreaz");
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output").innerHTML += countClumps([1, 2, 2, 3, 4, 4]);
    document.getElementById("output").innerHTML += evenlySpaced(2, 4, 6);
}
