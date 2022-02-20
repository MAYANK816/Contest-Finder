window.onload=function(){
    fetchData(); 
    document.getElementById("divId").addEventListener("click", fetchData);
  }

const fetchData=async()=>{
    console.log("click");
    const response = await fetch('https://kontests.net/api/v1/all');
    const data=await response.json();
    document.querySelector(".main").innerHTML="";
   for(let value of data){
        let startTime=dateFormat(value.start_time);
        let endTime=dateFormat(value.end_time);
        const htmlCardData=`<div class="contestChild">
            <p>contest name : ${value.name}</p>
            <p>contest duration : ${Math.trunc(value.duration / 3600)+" hours  or "+ (value.duration/60)+" minutes"}</p>
            <p>Start At : ${startTime}</p>
            <p>End At : ${endTime}</p>
            <p>By : ${value.site}</p>
            <button><a href="${value.url}" target="_blank">contest url</a></button>
            </div>`;
    document.querySelector(".main").insertAdjacentHTML("afterbegin",htmlCardData);
    }
   
}
const dateFormat=(api_value)=>{
    let  startDate = new Date(api_value);
    let  year = startDate.getFullYear();
    let  month = startDate.getMonth()+1;
    let  dt = startDate.getDate();
     
     if (dt < 10) {
       dt = '0' + dt;
     }
     if (month < 10) {
       month = '0' + month;
     }
     return year+'-' + month + '-'+dt;
}
