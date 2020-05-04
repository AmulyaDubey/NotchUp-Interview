const fs=require('fs')
var display=require('./index.js')
 
function test()
{
    var date=new Date().getDate();
    var month=new Date().getMonth();
    var names=['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var arr=[date+' '+names[month], date+1+' '+names[month], date+2+' '+names[month], date+3+' '+names[month], date+4+' '+names[month], date+5+' '+names[month], date+6+' '+names[month], date+7+' '+names[month]]
    console.log(arr)
    return arr
}

function celebrate(day, course)
{
     k=day.toString().split(" ")
     var s=display()
     //main(5,4,2)
     return ' YO'
}





