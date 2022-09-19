'use strict';

{
  const year=2020;
  const month=8;

  // 前月の日付を取得し無効化

  const getCalendarHead=()=>{
    const dates=[];
    const d=new Date(year,month,0).getDate();
    const n=new Date(year,month,1).getDay();

    for(let i=0; i<n; i++){
      dates.unshift({
        date: d-i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  // 当月の日付を取得

  const getCalendarBody=()=>{
    const dates=[];
    const lastDate=new Date(year,month+1,0).getDate();

    for(let i=1; i<=lastDate; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }
    return dates;
  }

  // 来月の日付を取得し無効化

  const getCalendarTail=()=>{
    const dates=[];
    const lastDay=new Date(year,month+1,0).getDay();
    
    for(let i=1; i<7-lastDay; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  const createCalendar=()=>{
    const dates=[
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];

    const weeks=[];
    const weeksCount=dates.length/7;

    for(let i=0; i<weeksCount; i++){
      weeks.push(dates.splice(0,7));
    }
  }
}