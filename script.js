function buttonclick(val)
{
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function clearDisplayByOne(val){
    document.getElementById("screen").value-=val
}
function equalClick(){
    var second_num=document.getElementById("screen").value
    document.getElementById("screen").value=""
    if (math=="Division"){
        document.getElementById("screen").value+=f_num/second_num
    }
}
function buttonDiv(){
    var first_num=document.getElementById("screen")
    var myGlobalVar= "math"
    var myGlobalVar= "f_num"
    math="Division"
    f_num= first_num
    document.getElementById("screen").value=""
}