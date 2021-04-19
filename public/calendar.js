const date = new Date();

const renderCalendar = () =>{
    date.setDate(1);

    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

    const nextDays = ()=>{
        if(lastDayIndex==6){
            return 7;
        }
        else{
            return 7-lastDayIndex-1;
        }
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      document.querySelector(".date h1").innerHTML= months[date.getMonth()];
      document.querySelector(".date p").innerHTML = date.toDateString();

      var days="";
      for(let i =firstDayIndex; i>0; i--){
        days += `<div class="prev-date">${prevLastDay-i+1}</div>`;
      }

      for(let i= 1;i<lastDay+1;i++){
        days += `<div>${i}</div>`;

      }
      console.log(lastDayIndex);

      for(let i=1; i<=nextDays(); i++){
        days += `<div class="next-date">${i}</div>`;

      }

      document.querySelector(".days").innerHTML = days;

      var listPrevDays = document.querySelectorAll(".prev-date");
      for(i=0; i<listPrevDays.length;i++){
        listPrevDays[i].addEventListener("click", () => {
            date.setMonth(date.getMonth() -1);
            renderCalendar();
        });
      }

      var listNextDays = document.querySelectorAll(".next-date");
      for(i=0; i<listNextDays.length;i++){
        listNextDays[i].addEventListener("click", () => {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
        });
      }

};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});
  
document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});


renderCalendar();