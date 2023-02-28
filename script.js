var calcState = {}
function buttonclick(val)
{
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function clearDisplayByOne(){
    var current_value = document.getElementById("screen").value
    var new_value = current_value.slice(0, -1); // remove the last character
  document.getElementById("screen").value = new_value;
}
function equalClick(){
    var second_num= parseFloat(document.getElementById("screen").value)
    document.getElementById("screen").value=""
    if (calcState.math=="Division"){
        result= calcState.f_num / second_num
        document.getElementById("screen").value=result
    }else if(calcState.math=="Addition"){
        result= calcState.f_num + second_num
        document.getElementById("screen").value=result
    }else if(calcState.math=="Subtraction"){
        result= calcState.f_num - second_num
        document.getElementById("screen").value=result
    }else if(calcState.math=="Multiplication"){
        result= calcState.f_num * second_num
        document.getElementById("screen").value=result
    }else{
        document.getElementById("screen").value="Error"
    }


}
function buttonDiv(){
    var first_num=parseFloat(document.getElementById("screen").value)
    calcState.math="Division"
    calcState.f_num = first_num
    document.getElementById("screen").value=""
}
function buttonAdd(){
    var first_num=parseFloat(document.getElementById("screen").value)
    calcState.math="Addition"
    calcState.f_num = first_num
    document.getElementById("screen").value=""
}
function buttonSub(){
    var first_num=parseFloat(document.getElementById("screen").value)
    calcState.math="Subtraction"
    calcState.f_num = first_num
    document.getElementById("screen").value=""
}
function buttonMult(){
    var first_num=parseFloat(document.getElementById("screen").value)
    calcState.math="Multiplication"
    calcState.f_num = first_num
    document.getElementById("screen").value=""
}