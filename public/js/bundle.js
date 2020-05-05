(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var fetch = require("node-fetch")
 
let url = 'https://script.googleusercontent.com/macros/echo?user_content_key=c1pk2Yi4sBukLvIlq9t0Aru79VP_RQkBClIoorYKpFRFmbSZpgRuRTkf-h7vzMcPAEkR6ZT0pT9lLh0RGJPy-tlcPZhUniB4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC09Nb0QZ6ca_LU0vmo6mSiQ7SyFG3CgdL9-1Vgcha-TAYaAGhh-9xNG-9rMNEZHQRElvdDletx0&lib=MlJcTt87ug5f_XmzO-tnIbN3yFe7Nfhi6';

module.exports= function(Mdate,Mmonth,c,callback){ 
    fetch(url)
.then(res => res.json())
.then((dataJSON) => {
   
   var obj=JSON.stringify(dataJSON);
   var today = new Date();
    var max=new Date();
    var min=new Date();
    max.setDate(today.getDate()+7)
    min.setHours(today.getHours()+4)
    var arr=[]
    var courseChoice=c+1
     dataJSON.forEach(element => {
      if(courseChoice=== element.course_id)
      {
          element.slots.forEach(slot=>{
             const x=slot.slot
             console.log(new Date(x/1).getDate()+' '+new Date(x/1).getMonth()+' '+ new Date(x/1).getHours()+':'+new Date(x/1).getMinutes())
            if(x>=min && x<=max){ 
                 arr.push(slot.slot)
            }
        })
      }

  });
  var dateChoice=Mdate
  var monthChoice=Mmonth
  var avalSlots=[];
   arr.forEach(element=>{
      var d=new Date(element/1)
      if(d.getDate()== dateChoice && d.getMonth() ==monthChoice)
      { 
        var sub='AM'
        var hours=  d.getHours()
         if(hours>12) 
        { 
            hours=hours%12
            sub='PM'
        }
        var minutes=d.getMinutes().toString().padStart(2,'0')
        var str=hours+':'+minutes+' '+sub
         avalSlots.push(str)
        
      }
  })
    callback(avalSlots)
})
.catch(err => { throw err });
}
 




},{"fs":4,"node-fetch":3}],2:[function(require,module,exports){
  
var display=require('./index')
 
window.test=function()
{
    var date=new Date().getDate();
    var month=new Date().getMonth();
    var names=['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var arr=[date+' '+names[month], date+1+' '+names[month], date+2+' '+names[month], date+3+' '+names[month], date+4+' '+names[month], date+5+' '+names[month], date+6+' '+names[month], date+7+' '+names[month]]
    console.log(arr)
    return arr
}
function callback(data)
{ 
    console.log('HEY:'+data)

    document.getElementById("heading").innerHTML='Available Slots:'
    try{
        for(var i=0;i<=20;i++)
    {
        var myDiv = document.getElementById("listing"+i); 
        myDiv.innerHTML=""
    }
}catch(e){}
    if(data.length==0)
    { 
        document.getElementById("heading").innerHTML="No Slots Available!";
        return;
        
    }
     for(var i=0;i<data.length;i++)
    {
        var myDiv = document.getElementById("listing"+i); 
            var checkbox = document.createElement('input'); 
         
            checkbox.type = "checkbox"; 
            checkbox.name = "name"; 
            checkbox.value = "value"; 
            checkbox.id = "id"; 
              
            var label = document.createElement('label'); 
              
            label.htmlFor = "id"; 
              
            label.appendChild(document.createTextNode(data[i])); 
            
            myDiv.appendChild(checkbox); 
            console.log(i+' '+data[i])
            myDiv.appendChild(label); 
    }

        var last=document.getElementById("listing"+(data.length+1)); 
         var button = document.createElement("button");
         button.innerHTML = "Book My Slot!";
        button.style.width = '500px' /* Green */
        button.style.height="50px"
        button.style.backgroundColor="#27eccb"
        button.style.fontSize="30px"
        button.style.borderRadius='35px'
        last.appendChild(button);

}
window.celebrate=function(day, course)
{

     k=day.toString().split(" ")
     var d=k[0]
     var i=0
     var names=['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
     for( i=0;i<names.length;i++)
     {   
         if(names[i]==k[1])   
         break;
     }
    // console.log(i)
     var courses=['Scratch Programming','Game Developement', 'App Development', 'Web Developement', 'Python Programming', 'Artificial Intelligence']
     var j=0
     for(j=0;j<courses.length; j++)
     { 
         if(courses[j]==course)
         break;
     }
     console.log(i+' '+j)
     display(d,i,j,callback)
         
}





},{"./index":1}],3:[function(require,module,exports){
(function (global){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){

},{}]},{},[2]);
