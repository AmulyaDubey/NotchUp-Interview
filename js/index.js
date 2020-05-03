const fetch = require("node-fetch");

let url = 'https://script.googleusercontent.com/macros/echo?user_content_key=c1pk2Yi4sBukLvIlq9t0Aru79VP_RQkBClIoorYKpFRFmbSZpgRuRTkf-h7vzMcPAEkR6ZT0pT9lLh0RGJPy-tlcPZhUniB4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC09Nb0QZ6ca_LU0vmo6mSiQ7SyFG3CgdL9-1Vgcha-TAYaAGhh-9xNG-9rMNEZHQRElvdDletx0&lib=MlJcTt87ug5f_XmzO-tnIbN3yFe7Nfhi6';

const main=function(){
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
    var courseChoice=1
  dataJSON.forEach(element => {
      if(courseChoice=== element.course_id)
      {
        console.log(element.course_id)
        element.slots.forEach(slot=>{
            const x=slot.slot
            if(x>=min && x<=max){ 
                arr.push(slot.slot)
            }
        })
      }

  });
  var dateChoice=6
  var monthChoice=4
  var avalSlots=[];
  arr.forEach(element=>
    {
      var d=new Date(element/1)
      if(d.getDate()=== dateChoice && d.getMonth()===monthChoice)
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
        //console.log(str)
      }
  })
  return avalSlots
})
.catch(err => { throw err });
}

var slots=[]
slots=main()
console.log(slots)