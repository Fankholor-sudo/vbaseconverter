
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

////Base Convertion start here!////
////////////////////////////////////////////

//-----ERROR INPUT CLASS
var calculate = document.querySelector(".button");
const input_number = document.querySelector('.inputnumber'),
first_base = document.querySelector('.firstBase'),
second_base = document.querySelector('.secondBase'),
CharToIntMap = new Map();
let count = 10;
let chars = 'A';
   for(let i = 0; i<=25; ++i){
        CharToIntMap.set(chars,count);
        count = ++count;
        chars = String.fromCharCode(chars.charCodeAt(0)+1); 
    }

class Error_input{
    
    errorInput(ErrorValue , base){    

        for(let j = 0; j < ErrorValue.length; ++j){
            for(const [key , value] of CharToIntMap.entries()){
                let mapValue = Number(value);
                if(key === ErrorValue.charAt(j) && Number(base) <= mapValue){
                    return true;
                }
                else if(!isNaN(ErrorValue.charAt(j))){
                    let charToInt = Number(ErrorValue.charAt(j));
                    if(charToInt >= base){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}


//-----CONVERT TO DECIMAL(base10) CLASS from any base
class Convert_To_Base10 extends Error_input{
    Base_TEN(inputValue , Base){
        var arrayPack = new Array();
        var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let i = 10;
        
        for(let j = 0; j < inputValue.length; ++j){
            if(inputValue.charAt(j)=== '-')continue;
            else if(inputValue.charAt(j)==='0' || inputValue.charAt(j)==='1' || inputValue.charAt(j)==='2' ||
               inputValue.charAt(j)==='3' || inputValue.charAt(j)==='4' || inputValue.charAt(j)==='5' ||
               inputValue.charAt(j)==='6' || inputValue.charAt(j)==='7' || inputValue.charAt(j)==='8' ||
               inputValue.charAt(j)==='9' ){
                   var tempInt = Number(inputValue.charAt(j));
                   arrayPack.push(tempInt);
                }
            else{
                for(let k = 0; k < alphabets.length; ++k){
                    if(inputValue.charAt(j) != alphabets.charAt(k))++i;
                    else if(inputValue.charAt(j) === alphabets.charAt(k))arrayPack.push(i);
                }
                i = 10;  
            }
        }
        let sum = 0;
        let arraySize =  arrayPack.length - 1;
        arrayPack.forEach(values =>{
            sum += values * Math.pow(Base , arraySize);
            --arraySize;
        });

        return sum;
    }

    Base_TEN_Solution(inputValue, Base){
        var arrayPack = new Array();
        var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let i = 10;
        
        for(let j = 0; j < inputValue.length; ++j){
            if(inputValue.charAt(j)=== '-')continue;
            else if(inputValue.charAt(j)==='0' || inputValue.charAt(j)==='1' || inputValue.charAt(j)==='2' ||
               inputValue.charAt(j)==='3' || inputValue.charAt(j)==='4' || inputValue.charAt(j)==='5' ||
               inputValue.charAt(j)==='6' || inputValue.charAt(j)==='7' || inputValue.charAt(j)==='8' ||
               inputValue.charAt(j)==='9' ){
                   var tempInt = Number(inputValue.charAt(j));
                   arrayPack.push(tempInt);
                }
            else{
                for(let k = 0; k < alphabets.length; ++k){
                    if(inputValue.charAt(j) != alphabets.charAt(k))++i;
                    else if(inputValue.charAt(j) === alphabets.charAt(k))arrayPack.push(i);
                }
                i = 10;  
            }
        }

        let sum = 0, sum_sol = 0;
        var solution="", curr=0;
        let arraySize =  arrayPack.length - 1;
        solution += "Convert ("+inputValue+") to base10 using Multiplying Method. \n<br>"+
        "note: [Don't forget to Sum(Add) all answers to get your Value in Base 10]\n\n<br><br>";
        
        arrayPack.forEach(values =>{
            curr = values;
            sum += values * Math.pow(Base , arraySize);
            sum_sol += values * Math.pow(Base , arraySize);
            solution += Number(curr) +' * '+ Base +'^'+'('+arraySize+') = '+ sum_sol+'\n<br>';
            --arraySize;
            sum_sol = 0;
        });

        solution += '<br>\nThe value: ('+inputValue+') in base (10) is:\n<br>'+sum;
        return solution;
    }

}


//-----CONVERT TO DECIMAL(base10) WITH FLOATING POINTS
class Convert_To_Base10_floating extends Convert_To_Base10{

    FLOATING_to_BaseTen(inputValue , Base){
        var arrayPack = new Array();
        var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let i = 10;
        
        for(let j = 0; j < inputValue.length; ++j){
            if(inputValue.charAt(j)=== '.' || inputValue.charAt(j)=== '0' || inputValue.charAt(j)=== '1' || inputValue.charAt(j)==='2' ||
                    inputValue.charAt(j)=== '3' || inputValue.charAt(j)=== '4' || inputValue.charAt(j)=== '5' ||
                    inputValue.charAt(j)=== '6' || inputValue.charAt(j)=== '7' || inputValue.charAt(j)=== '8' ||
                    inputValue.charAt(j)=== '9' ){
                    var tempInt = Number(inputValue.charAt(j));
                    arrayPack.push(tempInt);
                }
            else{
                for(let k = 0; k < alphabets.length; ++k){
                    if(inputValue.charAt(j) != alphabets.charAt(k))++i;
                    else if(inputValue.charAt(j) === alphabets.charAt(k))arrayPack.push(i);
                }
                i = 10;  
            }
        }
        let fromFront_count = 0, fromBack_count = 0;

        for(let k = 0; k < arrayPack.length; ++k){
            if(isNaN(arrayPack[k]))break;
            else ++fromFront_count;
        }

        for(let k = arrayPack.length-1; k >= 0; --k){
            if(isNaN(arrayPack[k]))break;
            else ++fromBack_count;
        }

        let sum = 0;
        let fromFront_length = fromFront_count-1;
        for(let j = 0; j < arrayPack.length; ++j){
            if(isNaN(arrayPack[j]))break;
            sum += Number(arrayPack[j]) * Math.pow(Base , fromFront_length);
            --fromFront_length;
        }
        
        let summation = 0;
        for(let j = arrayPack.length-1; j >= 0; --j){
            if(isNaN(arrayPack[j]))break;
            summation += Number(arrayPack[j]) * Math.pow(Base , -fromBack_count);
            --fromBack_count;
        }
        return Number(sum + summation);
    }

    FLOATING_to_BaseTen_Solution(inputValue , Base){
        var arrayPack = new Array();
        var tmpArrayPack = new Array();
        var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let i = 10, solution = "";
        
        for(let j = 0; j < inputValue.length; ++j){
            if(inputValue.charAt(j)=== '.' || inputValue.charAt(j)=== '0' || inputValue.charAt(j)=== '1' || inputValue.charAt(j)==='2' ||
                    inputValue.charAt(j)=== '3' || inputValue.charAt(j)=== '4' || inputValue.charAt(j)=== '5' ||
                    inputValue.charAt(j)=== '6' || inputValue.charAt(j)=== '7' || inputValue.charAt(j)=== '8' ||
                    inputValue.charAt(j)=== '9' ){
                    var tempInt = Number(inputValue.charAt(j));
                    arrayPack.push(tempInt);
                }
            else{
                for(let k = 0; k < alphabets.length; ++k){
                    if(inputValue.charAt(j) != alphabets.charAt(k))++i;
                    else if(inputValue.charAt(j) === alphabets.charAt(k))arrayPack.push(i);
                }
                i = 10;  
            }
        }
        let fromFront_count = 0;

        let IntinputValue = "";
        for(let k = 0; k < inputValue.length; ++k){
            if(inputValue.charAt(k)==='.')break;
            else{
                ++fromFront_count;
                IntinputValue += inputValue.charAt(k);
            }
        }

        let FltinputValue = "",tmpFltinputValue = "";
        for(let k = inputValue.length-1; k >= 0; --k){
            if(inputValue.charAt(k)==='.')break;
            else{
                tmpFltinputValue += inputValue.charAt(k); 
            }
        }
        for (let j = tmpFltinputValue.length-1; j >= 0; --j) {
            FltinputValue += tmpFltinputValue[j];
        }

        solution += ("note: [Seperate the input(value) in 2-seperate forms(integer and float)]" +
                " and Combine it later after operations.") + "\n<br>";
        solution += "\n<br>" + "The value before floating point is: (" + IntinputValue + ")\n<br>";
        solution += "note: [Sum(Add) all answers to get your Value in base 10]" + "\n\n<br><br>";
        
        let sum = 0, tmpSum = 0;
        let fromFront_length = fromFront_count-1;
        for(let j = 0; j < arrayPack.length; ++j){
            if(isNaN(arrayPack[j]))break;
            sum += Number(arrayPack[j]) * Math.pow(Base , fromFront_length);
            tmpSum += Number(arrayPack[j]) * Math.pow(Base , fromFront_length);
            solution += "(" + arrayPack[j] + ") * (" + Base + ")^(" + fromFront_length + ") = " + tmpSum + "\n<br>";
            --fromFront_length;
            tmpSum = 0;
        }
        solution += "\n<br>The value (" + IntinputValue + ") in base (10) is: \n<br>" + sum + "\n<br>";
        

        solution += "\n<br>" + "The Value after floating point is : (0."+ FltinputValue +")"+
        "\n<br>note: [Sum(Add) all answers to get your value in base 10]"+"\n\n<br><br>";
       
        for (let k = arrayPack.length-1; k >= 0; --k) {
            if(isNaN(arrayPack[k]))break;
            else {
                tmpArrayPack.push(arrayPack[k]);
            }
        }
        let summation = 0, tmpSummation = 0,fromBack_count = 1;
        for(let j = tmpArrayPack.length-1; j >= 0; --j){
            summation += Number(tmpArrayPack[j]) * Math.pow(Base , -fromBack_count);
            tmpSummation += Number(tmpArrayPack[j]) * Math.pow(Base , -fromBack_count);
            solution += "(" + tmpArrayPack[j] + ") * (" + Base + ")^(-" + fromBack_count + ") = " + tmpSummation + "\n<br>";
            ++fromBack_count;
            tmpSummation = 0;
        }
        solution += ("\n<br>The value (0." + FltinputValue + ") in base (10) is: \n<br>" + summation ) + "\n<br>";
        solution += "\n<br>Therefore: \n<br>The value ("+ inputValue + ") in base (10) is:\n<br>" + Number(sum + summation);
        
        return solution;
    }
}


//CONVERT FROM DECIMAL(base10) to any base(LONG DIVISION method)
class Long_Division extends Convert_To_Base10_floating{
    
    From_BaseTen(inputValue , Base){
        var arrayPack = new Array();
        var remainder, concatenate = "";

        if(Base <= 10 && Base > 1 && inputValue > 0){
            for(let i = 0; i <= 50; ++i){
                if(inputValue >= 1){
                    remainder = parseInt(inputValue % Base);
                    arrayPack.push((remainder).toString());
                    inputValue = Number(inputValue / Base);
                }
                else break;
            }
            for(let j = arrayPack.length-1; j >= 0; --j){
                concatenate += arrayPack[j];
            }
        }

        else if(Base > 10 && Base <= 36){
            for(let i = 0; i <= 50; ++i ){
                if(inputValue >= 1){
                    remainder = parseInt(inputValue % Base);
                    arrayPack.push((remainder).toString());
                    inputValue = Number(inputValue / Base);
                }
                else break;
            }

            let answer = "";
            for(let j = arrayPack.length-1; j >= 0; --j){
                for(const [key , value] of CharToIntMap.entries()){
                    if(Number(arrayPack[j]) === Number(value)){
                        answer += key.toString(); break;
                    }
                    else if(Number(arrayPack[j])== 0 || Number(arrayPack[j])== 1 || Number(arrayPack[j])== 2 ||
                            Number(arrayPack[j])== 3 || Number(arrayPack[j])== 4 || Number(arrayPack[j])== 5 ||
                            Number(arrayPack[j])== 6 || Number(arrayPack[j])== 7 || Number(arrayPack[j])== 8 ||
                            Number(arrayPack[j])== 9){
    
                        answer += arrayPack[j]; break;
                    }
                }
            }
            concatenate += answer;
        }
        return concatenate;
    }
    From_BaseTen_Solution(inputValue , Base){
        var arrayPack = new Array();
        var remainder, concatenate = "" , solution = "" ,
        NormDivision , IntDivision , Difference , tmpinputValue = inputValue;

        if(Base <= 10 && Base > 1 && inputValue > 0){
            for(let i = 0; i <= 50; ++i){
                if(inputValue >= 1){
                    NormDivision = Number(inputValue / Base);
                    IntDivision = parseInt(inputValue / Base);
                    Difference = NormDivision - IntDivision;
                    remainder = parseInt(inputValue % Base);
                    solution += "(" + parseInt(inputValue) + ")%(" + Base + ") = " + Difference + " * " + Base + " = " + remainder+"\n<br>";                    
                    arrayPack.push((remainder).toString());
                    inputValue = Number(inputValue / Base);
                }
                else break;
            }
            for(let j = arrayPack.length-1; j >= 0; --j){
                concatenate += arrayPack[j];
            }
        }

        else if(Base > 10 && Base <= 36){
            for(let i = 0; i <= 50; ++i ){
                if(inputValue >= 1){                    
                    NormDivision = Number(inputValue / Base);
                    IntDivision = parseInt(inputValue / Base);
                    Difference = NormDivision - IntDivision;
                    remainder = parseInt(inputValue % Base);
                    solution += "(" + parseInt(inputValue) + ")%(" + Base + ") = " + Difference + " * " + Base + " = " + remainder+"\n<br>";
                    arrayPack.push((remainder).toString());
                    inputValue = Number(inputValue / Base);
                }
                else break;
            }

            let answer = "";
            for(let j = arrayPack.length-1; j >= 0; --j){
                for(const [key , value] of CharToIntMap.entries()){
                    if(Number(arrayPack[j]) === Number(value)){
                        answer += key.toString(); break;
                    }
                    else if(Number(arrayPack[j])== 0 || Number(arrayPack[j])== 1 || Number(arrayPack[j])== 2 ||
                            Number(arrayPack[j])== 3 || Number(arrayPack[j])== 4 || Number(arrayPack[j])== 5 ||
                            Number(arrayPack[j])== 6 || Number(arrayPack[j])== 7 || Number(arrayPack[j])== 8 ||
                            Number(arrayPack[j])== 9){
    
                        answer += arrayPack[j]; break;
                    }
                }
            }
            concatenate += answer;
        }
        return "Using LONG_DIVISION to Convert from base10.\n<br>note: [You taking value/s from (Bottom) to (Top)]\n<br>"+"\n<br>"+ solution +"\n<br>"+"\nTherefore:\n<br>" +
                "The value: ("+ tmpinputValue +") in base: ("+ Base +") is: \n<br>"+ concatenate ;
    }

}

//CONVERT FROM DECIMAL(base10) WITH FLOATING POINTS 
class Long_Division_float extends Long_Division{

    FLOATING_From_BaseTen(inputValue , Base){
        var arrayPack = new Array();
        var second_arrayPack = new Array();

        var remainder, IntInputValue = parseInt(inputValue);
        var answer='' , second_arrayPackValue='' , topAnswer , bottmAnswer='';

        var from_frontInputValue="", from_backOdered="";
        for(let i = inputValue.length-1; i >= 0; --i){
            if(isNaN(inputValue[i]))break;
            else from_frontInputValue += inputValue[i];
        }
        for(let i = from_frontInputValue.length-1; i >= 0; --i){
            from_backOdered += from_frontInputValue[i];
        }
        from_backOdered = '0.'+from_backOdered;

        if (Base > 1 && Base <= 10 && Number(inputValue) > 0) {
            for (let j = 0; j <= 50; ++j) {
                if (IntInputValue >= 1) {
                    remainder = parseInt(IntInputValue % Base);
                    arrayPack.push((remainder).toString());
                    IntInputValue = Number(IntInputValue / Base);
                }
                else break;
            }

            ////Integer reminders that we stored in a an array//
            var arrayPackValue = "";
            for (let j = arrayPack.length - 1; j >= 0; --j) {
                arrayPackValue += (arrayPack[j]).toString();
            }
            arrayPackValue = Number(arrayPackValue);

            ////decimal value with a floating point//
            if (from_backOdered != '0.0' || from_backOdered != '0.') {
                let Intfrom_backOdered = parseInt(from_backOdered);
                var removeCurrentInt;
                for (let k = 0; k < 30; ++k) {
                    if (Intfrom_backOdered === 0) {
                        from_backOdered = Number(from_backOdered) * Base;
                        second_arrayPack.push(parseInt(from_backOdered));
                        Intfrom_backOdered = parseInt(from_backOdered);
                    }
                    else if (Intfrom_backOdered != 0) {
                        removeCurrentInt = from_backOdered - Intfrom_backOdered;
                        from_backOdered = removeCurrentInt * Base;
                        second_arrayPack.push(parseInt(from_backOdered));
                        Intfrom_backOdered = parseInt(from_backOdered);
                    }
                }
                //store the value from the above operation (line:302-322)//
                for (let j = 0; j < second_arrayPack.length; ++j) {
                    second_arrayPackValue += (second_arrayPack[j]).toString();
                }
            }
            else second_arrayPackValue = '0';

            second_arrayPackValue = '.'+ second_arrayPackValue;
            if(Base === 2)topAnswer = arrayPackValue + second_arrayPackValue;
            else topAnswer = Number(arrayPackValue + second_arrayPackValue);          
        }

        else if(Base > 10 && Base <= 36){
            
            for(let j = 0; j <= 50; ++j){
                if(IntInputValue >= 1){
                    remainder = parseInt(IntInputValue % Base);
                    arrayPack.push((remainder).toString());
                    IntInputValue = Number(IntInputValue / Base);
                }
                else break;
            }

            ////decimal value with a floating point//
            let Intfrom_backOdered = parseInt(from_backOdered);
            var removeCurrentInt;
            for(let k = 0; k < 12; ++k){
                if(Intfrom_backOdered === 0){
                    from_backOdered = Number(from_backOdered)*Base;
                    second_arrayPack.push(parseInt(from_backOdered));
                    Intfrom_backOdered = parseInt(from_backOdered); 
                }
                else if(Intfrom_backOdered != 0){
                    removeCurrentInt = from_backOdered - Intfrom_backOdered;
                    from_backOdered = removeCurrentInt * Base;
                    second_arrayPack.push(parseInt(from_backOdered));
                    Intfrom_backOdered = parseInt(from_backOdered);
                }
            }

            ///CONVERT TO LETTER IF KEY>=10 from the decimal array//  
            for(let j = 0; j < second_arrayPack.length; ++j){
                for(const [key , value] of CharToIntMap.entries()){
                    if(Number(second_arrayPack[j]) === Number(value)){
                        bottmAnswer += key.toString(); break;
                    }
                    else if(Number(second_arrayPack[j])== 0 || Number(second_arrayPack[j])== 1 || Number(second_arrayPack[j])== 2 ||
                            Number(second_arrayPack[j])== 3 || Number(second_arrayPack[j])== 4 || Number(second_arrayPack[j])== 5 ||
                            Number(second_arrayPack[j])== 6 || Number(second_arrayPack[j])== 7 || Number(second_arrayPack[j])== 8 ||
                            Number(second_arrayPack[j])== 9){
    
                        bottmAnswer += second_arrayPack[j]; break;
                    }
                }
            }
            bottmAnswer = '.'+bottmAnswer;

            ///CONVERT TO LETTER IF KEY>=10 from the Integer remainders array//
            if(IntInputValue === 0 )answer = 0;
            else{
                for(let j = arrayPack.length-1; j >= 0; --j){
                    for(const [key , value] of CharToIntMap.entries()){
                        if(Number(arrayPack[j]) === Number(value)){
                            answer += key.toString(); break;
                        }
                        else if(Number(arrayPack[j])== 0 || Number(arrayPack[j])== 1 || Number(arrayPack[j])== 2 ||
                                Number(arrayPack[j])== 3 || Number(arrayPack[j])== 4 || Number(arrayPack[j])== 5 ||
                                Number(arrayPack[j])== 6 || Number(arrayPack[j])== 7 || Number(arrayPack[j])== 8 ||
                                Number(arrayPack[j])== 9){
        
                            answer += arrayPack[j]; break;
                        }
                    }
                }
            }
            topAnswer = answer + bottmAnswer;
        }

        return topAnswer;
    }

    FLOATING_From_BaseTen_Solution(inputValue , Base){
        var arrayPack = new Array();
        var second_arrayPack = new Array();

        var remainder, IntInputValue = parseInt(inputValue), StoreIntInputValue = IntInputValue;
        var answer='' , second_arrayPackValue='' , topAnswer , bottmAnswer='',solution = '';
        var NormDivision , IntDivision , Difference;

        var from_frontInputValue="", from_backOdered="";
        for(let i = inputValue.length-1; i >= 0; --i){
            if(isNaN(inputValue[i]))break;
            else from_frontInputValue += inputValue[i];
        }
        for(let i = from_frontInputValue.length-1; i >= 0; --i){
            from_backOdered += from_frontInputValue[i];
        }
        from_backOdered = '0.'+from_backOdered;
        var Store_from_backOdered = from_backOdered;
        solution += "<br>Seperate the input(value) in 2-seperate forms(integer and float) and Combine it later after operations.\n<br>";

        if(Base > 1 && Base <= 10 && Number(inputValue) > 0){

            solution += "note: [You taking values from (Bottom) to (Top)]\n<br>The value before floating point is:("+ IntInputValue +")\n\n<br><br>";
            for(let j = 0; j <= 50; ++j){
                if(IntInputValue >= 1){
                    NormDivision = Number(IntInputValue / Base);
                    IntDivision = parseInt(IntInputValue / Base);
                    Difference = NormDivision - IntDivision;
                    remainder = parseInt(IntInputValue % Base);
                    solution += "(" + parseInt(IntInputValue) + ")%(" + Base + ") = " + Difference + " * " + Base + " = " + remainder+"\n<br>";
                    arrayPack.push((remainder).toString());
                    IntInputValue = Number(IntInputValue / Base);
                }
                else break;
            }

            ////Integer reminders that we stored in a an array//
            var arrayPackValue ="";
            for(let j = arrayPack.length-1; j >= 0; --j){
                arrayPackValue += (arrayPack[j]).toString();
            }
            arrayPackValue = Number(arrayPackValue);
            solution += "\n<br>The value ("+ StoreIntInputValue +") in base ("+Base+") is : \n<br>"+ arrayPackValue +"\n<br>";

            ////decimal value with a floating point//

            solution += ("\n<br>note: [now you have to use the float method for value/s with floating point]\n<br>" +
                        "e.g (0.12 * base (you going to)=2.34 store-> 2 {you store only the integers}<br><br>note: [You taking values from (Top) to (Bottom)]")+
                        "\n<br>The value after floating point is: ("+ from_backOdered +")\n\n<br><br>";
            let Intfrom_backOdered = parseInt(from_backOdered);
            var removeCurrentInt, tmpfrom_backOdered = Number(from_backOdered);
            for(let k = 0; k < 13; ++k){
                if(Intfrom_backOdered === 0){
                    from_backOdered = Number(from_backOdered)*Base;
                    second_arrayPack.push(parseInt(from_backOdered));
                    Intfrom_backOdered = parseInt(from_backOdered);
                    solution += "("+ tmpfrom_backOdered +")"+" * ("+ Base +") = "+ from_backOdered +" = store-> "+ Intfrom_backOdered +"\n<br>"; 
                    tmpfrom_backOdered = from_backOdered;                   
                }
                else if(Intfrom_backOdered != 0){
                    removeCurrentInt = from_backOdered - Intfrom_backOdered;
                    from_backOdered = removeCurrentInt * Base;
                    second_arrayPack.push(parseInt(from_backOdered));
                    Intfrom_backOdered = parseInt(from_backOdered); 
                    solution += "("+ removeCurrentInt +")"+" * ("+ Base +") = "+ from_backOdered +" = store-> "+ Intfrom_backOdered +"\n<br>";
                }
            }
            //store the value from the above operation (line:302-322)//
            for(let j = 0; j < second_arrayPack.length; ++j){
                second_arrayPackValue += (second_arrayPack[j]).toString();
            }
            solution += "\n<br>The value ("+ from_backOdered +") in base ("+Base+") is: \n<br>"+"0."+ second_arrayPackValue +"\n<br>";
            solution += "\n<br>Therefore: \n<br>The value ("+ inputValue +") in base ("+ Base +") is :\n<br>";
         
            second_arrayPackValue = '.'+ second_arrayPackValue;
            topAnswer = arrayPackValue + second_arrayPackValue;
            solution += topAnswer;          
        }
        else if(Base > 10 && Base <= 36 && Number(inputValue) > 0){
            
            solution += "<br>note: [You taking value/s from (Bottom) to (Top)] <br>The value before floating point is: ("+ IntInputValue +"),<br> ";
            solution += "So we going to use long Division Method for this one\n\n<br><br>";

            for(let j = 0; j <= 50; ++j){
                if(IntInputValue >= 1){
                    NormDivision = Number(IntInputValue / Base);
                    IntDivision = parseInt(IntInputValue / Base);
                    Difference = NormDivision - IntDivision;
                    remainder = parseInt(IntInputValue % Base);
                    solution += "(" + parseInt(IntInputValue) + ")%(" + Base + ") = " + Difference + " * " + Base + " = " + remainder+"\n<br>";
                    arrayPack.push((remainder).toString ());
                    IntInputValue = Number(IntInputValue / Base);
                }
                else break;
            }

            ///CONVERT TO LETTER IF KEY>=10 from the Integer remainders array//
            if(IntInputValue === 0 )answer = 0;
            else{
                for(let j = arrayPack.length-1; j >= 0; --j){
                    for(const [key , value] of CharToIntMap.entries()){
                        if(Number(arrayPack[j]) === Number(value)){
                            answer += key.toString(); break;
                        }
                        else if(Number(arrayPack[j])== 0 || Number(arrayPack[j])== 1 || Number(arrayPack[j])== 2 ||
                                Number(arrayPack[j])== 3 || Number(arrayPack[j])== 4 || Number(arrayPack[j])== 5 ||
                                Number(arrayPack[j])== 6 || Number(arrayPack[j])== 7 || Number(arrayPack[j])== 8 ||
                                Number(arrayPack[j])== 9){
        
                            answer += arrayPack[j]; break;
                        }
                    }
                }
            }
            solution += "\n<br>The value ("+ StoreIntInputValue +") in base ("+Base+") is: \n<br>"+ answer +"\n<br>"+"\n<br>";
                        
            ////decimal value with a floating point//
            solution += "note: [You taking value/s from (Top) to (Bottom) opposite the above] The value before floating point is:("+ Store_from_backOdered +"), \n<br>";
            solution += "So we going to use long floating Method for this one.\n\n<br><br>";
            let Intfrom_backOdered = parseInt(from_backOdered);
            var removeCurrentInt, tmpfrom_backOdered = Number(from_backOdered);
            for(let k = 0; k < 12; ++k){
                if(Intfrom_backOdered === 0){
                    from_backOdered = Number(from_backOdered)*Base;
                    second_arrayPack.push(parseInt(from_backOdered));
                    Intfrom_backOdered = parseInt(from_backOdered); 
                    solution += "("+ tmpfrom_backOdered +")"+" * ("+ Base +") = "+ from_backOdered +" = store-> "+ Intfrom_backOdered +"\n<br>"; 
                    tmpfrom_backOdered = from_backOdered;                 
                }
                else if(Intfrom_backOdered != 0){
                    removeCurrentInt = from_backOdered - Intfrom_backOdered;
                    from_backOdered = removeCurrentInt * Base;
                    second_arrayPack.push(parseInt(from_backOdered));
                    Intfrom_backOdered = parseInt(from_backOdered);
                    solution += "("+ removeCurrentInt +")"+" * ("+ Base +") = "+ from_backOdered +" = store-> "+ Intfrom_backOdered +"\n<br>";
                }
            }

            ///CONVERT TO LETTER IF KEY>=10 from the decimal array//  
            for(let j = 0; j < second_arrayPack.length; ++j){
                for(const [key , value] of CharToIntMap.entries()){
                    if(Number(second_arrayPack[j]) === Number(value)){
                        bottmAnswer += key.toString(); break;
                    }
                    else if(Number(second_arrayPack[j])== 0 || Number(second_arrayPack[j])== 1 || Number(second_arrayPack[j])== 2 ||
                            Number(second_arrayPack[j])== 3 || Number(second_arrayPack[j])== 4 || Number(second_arrayPack[j])== 5 ||
                            Number(second_arrayPack[j])== 6 || Number(second_arrayPack[j])== 7 || Number(second_arrayPack[j])== 8 ||
                            Number(second_arrayPack[j])== 9){
    
                        bottmAnswer += second_arrayPack[j]; break;
                    }
                }
            }
            bottmAnswer = '.'+bottmAnswer;
            solution += "\n<br>The value ("+Store_from_backOdered+") in base ("+ Base +") is: \n<br>"+ '0'+bottmAnswer +"\n<br>"+"\n";

            topAnswer = answer + bottmAnswer;

            solution += "\n<br>Therefore: \n<br>The value ("+ inputValue +") in base ("+ Base +") is :\n<br>";
            solution += topAnswer;
        }
        return solution;
    }    
}


const t = new Long_Division_float();
//-------------CALCULATIONS-------------------//
calculate.addEventListener('click', () => {
    var style = "<span style='color: rgba(0,0,255,.3); font-size:15px; font-weight:700;'>";
    var style_error = "<span style='color: rgba(255,0,0,.5); font-size:24px; font-weight:900;'>";
    var style_error_msg = "<span style='color: rgba(255,0,0,.5); font-size:16px; font-weight:700; font-family: serif;'>";

    var sol_display = document.querySelector('.solution-label');
    var count = 0, strinput = (input_number.value).toString();
    var length_of_input = (strinput).length;
    for(let i = 0; i < length_of_input; ++i){
        if(strinput.charAt(i)==='.')break;
        else ++count;
    }


    var column_One = document.querySelector('.col_one');
    var column_Two = document.querySelector('.col_two');

    var Two_column_One = document.querySelector('.nxt_col_one');
    var Two_column_Two = document.querySelector('.nxt_col_two');


    var longDiv , baseTen , baseTens , longDivis ;
    var display_solution_link = document.querySelector('.solution_link');
    var hidden_solutionStep = document.querySelector('.hidden_solution'); 

    if (t.errorInput((input_number.value).toUpperCase(), Number(first_base.value))) {
        sol_display.innerHTML = "SOLUTION";
        column_One.innerHTML =
            style_error + "Error Input/Base<br></span>" + style_error_msg +
            " Base cannot be equal to any digit of the input,<br>A base has all values less than it's value.<br>"+
        "You can refer to The explanation below if you want to know more about bases.</span > ";

		column_Two.innerHTML = "";
		Two_column_One.innerHTML = "";
		Two_column_Two.innerHTML = "";
		display_solution_link.innerHTML = "";
    }
    else if (Number(input_number.value) === 0) {
        sol_display.innerHTML = "SOLUTION";
        column_One.innerHTML = style_error + "Error Input/Base<br></span>" +style_error_msg + "Please check your input value, the value cannot be<br>"+ 
        " less/equal to 0, since our first base is from base-2.<br>You can read about bases below.</span > ";

		column_Two.innerHTML = "";
		Two_column_One.innerHTML = "";
		Two_column_Two.innerHTML = "";
		display_solution_link.innerHTML = "";
    }
    else if (Number(first_base.value) > 36 || Number(second_base.value) > 36 || Number(first_base.value) < 2 || Number(second_base.value) < 2) {
        sol_display.innerHTML = "SOLUTION";
        column_One.innerHTML = style_error + "Error Input/Base<br></span>" + style_error_msg + "Please make sure that your base value/s<br>" +
            "are not greater than base_36 and not less than base_2.</span > ";

		column_Two.innerHTML = "";
		Two_column_One.innerHTML = "";
		Two_column_Two.innerHTML = "";
		display_solution_link.innerHTML = "";
    }
//////////////***********ELSE IF THERE ARE NO ERRORS*********//////////
//////////////*********************************************************//////////
    else if (!t.errorInput((input_number.value).toUpperCase(), Number(first_base.value))) {
        if (count === length_of_input) {
            baseTens = t.Base_TEN((input_number.value).toUpperCase(), Number(first_base.value));
            longDivis = t.From_BaseTen((baseTens).toString(), Number(second_base.value));
            
		sol_display.innerHTML = "SOLUTION";
        	if(Number(second_base.value) === 10){
            	column_One.innerHTML = "A base " +style+ first_base.value + "</span> value " + style + input_number.value + "</span> in base " + style+ " 10 </span> is :<br> ";
            	column_Two.innerHTML = style + baseTens + '</span>';
				Two_column_One.innerHTML = "";
				Two_column_Two.innerHTML = "";
			}
			else if(Number(first_base.value) === 10){
				column_One.innerHTML = "A base " +style+ first_base.value +"</span> value " + style + input_number.value + "</span> in base " + style + second_base.value + "</span> is :<br>";
		        column_Two.innerHTML = style + longDivis + "</span>";
				Two_column_One.innerHTML = "";
				Two_column_Two.innerHTML = "";
			}
			else{
				column_One.innerHTML = "A base " +style+ first_base.value + "</span> value " + style + input_number.value + "</span> in base " + style+ " 10 </span> is :<br> ";
		        column_Two.innerHTML = style + baseTens + '</span>';
							
		        Two_column_One.innerHTML = "A base " +style+ first_base.value +"</span> value " + style + input_number.value + "</span> in base " + style + second_base.value + "</span> is :<br>";
		        Two_column_Two.innerHTML = style + longDivis + "</span>";
			}
            display_solution_link.innerHTML = "<a href='converterSolution.html' method='POST'><span style='color: rgba(0,0,255,.7);'><em>Would you love to see the working?...</em></span></a>";
            
        }
        else {
            baseTen = t.FLOATING_to_BaseTen((input_number.value).toUpperCase(), Number(first_base.value));
            longDiv = t.FLOATING_From_BaseTen(baseTen.toString(), Number(second_base.value));


			sol_display.innerHTML = "SOLUTION";
        	if(Number(second_base.value) === 10){
            	column_One.innerHTML = "A base " +style+ first_base.value + "</span> value " + style + input_number.value + "</span> in base " + style+ " 10 </span> is :<br> ";
	            column_Two.innerHTML = style + baseTen + '</span>';
				Two_column_One.innerHTML = "";
				Two_column_Two.innerHTML = "";
			}
			else if(Number(first_base.value) === 10){
				column_One.innerHTML = "A base " +style+ first_base.value +"</span> value " + style + input_number.value + "</span> in base " + style + second_base.value + "</span> is :<br>";
		        column_Two.innerHTML = style + longDiv + "</span>";
				Two_column_One.innerHTML = "";
				Two_column_Two.innerHTML = "";
			}
			else{
            	column_One.innerHTML = "A base " +style+ first_base.value +"</span> value " + style + input_number.value + "</span> in base " + style + " 10 </span> is :<br> ";
            	column_Two.innerHTML = style + baseTen + '</span>';

	            Two_column_One.innerHTML = "A base " +style+ first_base.value +"</span> value " + style + input_number.value + "</span> in base " + style + second_base.value + "</span> is :<br>";
	            Two_column_Two.innerHTML = style + longDiv + "</span>";

        		}
        		
	         display_solution_link.innerHTML = "<a href='converterSolution.html' method='POST' ><span style='color: rgba(0,0,255,.7);'><em>Would you love to see the working?...</em></span></a>";
		}

////////////////********HERE IS THE WORKING**********//////////////
////////////////*********************************************//////////////
        baseTens = t.Base_TEN((input_number.value).toUpperCase(), Number(first_base.value));
        longDivis = t.From_BaseTen((baseTens).toString(), Number(second_base.value));
        baseTen = t.FLOATING_to_BaseTen((input_number.value).toUpperCase(), Number(first_base.value));
        longDiv = t.FLOATING_From_BaseTen(baseTen.toString(), Number(second_base.value));

		var ToBase_ten = t.Base_TEN_Solution((input_number.value).toUpperCase(), Number(first_base.value));
		var FromBase_ten = t.From_BaseTen_Solution((baseTens).toString(), Number(second_base.value));
		var Float_ToBase_ten = t.FLOATING_to_BaseTen_Solution((input_number.value).toUpperCase(), Number(first_base.value));
		var Float_FromBase_ten = t.FLOATING_From_BaseTen_Solution(baseTen.toString(), Number(second_base.value)); 
		
		if (count === length_of_input) {
			if(Number(second_base.value) === 10){
				localStorage.setItem("STEP_1", ToBase_ten);
				hidden_solutionStep.innerHTML = localStorage.getItem("STEP_1");
			}
			else if(Number(first_base.value) === 10){
				localStorage.setItem("STEP_1", FromBase_ten);
				hidden_solutionStep.innerHTML = localStorage.getItem("STEP_1");
			}
			else{
				localStorage.setItem("STEP_1", ToBase_ten + "<br>" + FromBase_ten);
				hidden_solutionStep.innerHTML = localStorage.getItem("STEP_1");			
			}
		}
		else{
			if(Number(second_base.value) === 10){
				localStorage.setItem("STEP_1", Float_ToBase_ten);
				hidden_solutionStep.innerHTML = localStorage.getItem("STEP_1");
			}
			else if(Number(first_base.value) === 10){
				localStorage.setItem("STEP_1", Float_FromBase_ten);
				hidden_solutionStep.innerHTML = localStorage.getItem("STEP_1");
			}
			else{
				localStorage.setItem("STEP_1", Float_ToBase_ten + "<br>" + Float_FromBase_ten);
				hidden_solutionStep.innerHTML = localStorage.getItem("STEP_1");			
			}		
		}
    }

});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
