let d=new Date(2012, 1, 20, 3, 12);
alert(d);

function getWeekDay(date) {
    let days=['SUN', 'MON', 'THU', 'WED', 'TUE', 'FRI', 'THI'];
    return days[date.getDay()];
}
let date = new Date(2014, 0, 3); 
alert( getWeekDay(date) ); 

function getLocalDay(date){
    let day=date.getDay();
    if(day==0){
        day=7;
    }
    return day;
}

function getDateAgo(date, days){
    date.setDate(date.getDay()-days);
    return date.getDate();
}
let date1 = new Date(2015, 0, 2);
alert( getDateAgo(date1, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date1, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date1, 365) ); 

function getLastDayOfMonth(year, month){
    let num=new Date(years, month+1, 0);
    return num.getDate();
}

function getSecondsToday(){
    let now=new Date();
    let today=new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let diff=now-today;
    return Math.round(diff/1000);
}

function getSecondsToTomorrow(){
    let now=new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff=tomorrow-now;
    return Math.round(diff/1000);
}

function formatDate(date){
    let diff = new Date()-date;
    if(diff<1000){
        return 'right now';
    }
    let sec=Math.floor(diff/1000);
    if(sec<60){
        return sec + 'sec ago';
    }
    let min=Math.floor(diff/1000);
    if(min<60){
        return min + 'min ago';
    }
}
let d1 = date;
  d1 = [
    '0' + d1.getDate(),
    '0' + (d1.getMonth() + 1),
    '' + d1.getFullYear(),
    '0' + d1.getHours(),
    '0' + d1.getMinutes()
  ].map(component => component.slice(-2));