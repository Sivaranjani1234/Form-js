
function add(a,b)
{
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    let ans= num1+num2
    document.getElementById('result').value=Number(ans);
}

function sub()
{
    var num1=document.getElementById('num1').value
    var num2=document.getElementById('num2').value
    let ans= num1-num2
    document.getElementById('result').value=(ans);
}
function mul()
{
    var num1=document.getElementById('num1').value
    var num2=document.getElementById('num2').value
    let ans= num1*num2
    document.getElementById('result').value=(ans);
}
function div()
{
    var num1=document.getElementById('num1').value
    var num2=document.getElementById('num2').value
    let ans= num1/num2
    document.getElementById('result').value=(ans);
}
function mdiv()
{
    var num1=document.getElementById('num1').value
    var num2=document.getElementById('num2').value
    let ans= num1%num2
    document.getElementById('result').value=(ans);
}
function reset()
{
    document.getElementById('num1').innerHTML=""
    document.getElementById('num2').innerHTML=""
    document.getElementById('result').innerHTML=""
}