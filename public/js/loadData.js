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
    if(data.length==0)
    { 
        document.getElementById("heading").innerHTML="No Slots Available!";
        return;
        
    }
    document.getElementById("heading").innerHTML='Available Slots:'
    for(var i=0;i<=20;i++)
    {
        var myDiv = document.getElementById("listing"+i); 
        myDiv.innerHTML=''
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
        console.log(data)

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
     var ss='YES'

}

