const date = new Date();

const renderCalendar = () =>{
    //date.setDate(1);
    const currentYear=date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();
    const currentDatNo = date.getDate();

    const lastDay = new Date(currentYear, currentMonth+1, 0).getDate();
    console.log(lastDay)

    const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();
    console.log(prevLastDay);

    


};

renderCalendar();