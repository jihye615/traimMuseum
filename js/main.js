// 메인슬라이드
new Swiper('.main-slider .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView: 1, //한 번에 보여지는 슬라이드 개수
    navigation : {
        prevEl : ".main-slider .button-prev",
        nextEl : ".main-slider .button-next"
    }
});

//------------------공지사항 swiper slider---------------------
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay : true,
    navigation : {
        prevEl : ".notice-line .button-prev",
        nextEl : ".notice-line .button-next"
    }
  
});




// -------------------미니 달력------------------------------------
let today = new Date();
let Month = today.getMonth() +1 +'월';  //월은 0부터 시작하기때문에 1을 더해줌

document.querySelector(".yearMonth").innerHTML=Month;

let firstDate = new Date(today.getFullYear(), today.getMonth(),1);
let lastDate = new Date(today.getFullYear(), today.getMonth()+1,0);
let day = firstDate.getDay();  //매달 시작이 다르기때문에 td에 날짜가 없어야함
let calendar = document.querySelector(".calendar-table");
let week = Math.ceil(lastDate.getDate()/7) + 1;
// let row = calendar.insertRow();



function Calendar(){
    let leftDays = 7; // setDays 와 반비례 
    let setDays = 1;// leftDays 와 반비례 
    for(i = 1; i < week; i++){
        let row = calendar.insertRow();
        while(day != 0){
            row.insertCell().innerHTML = "";
            day -= 1;
            leftDays -= 1;
        } // 1주
        let nextMonthDate = 1;
        while(leftDays != 0){
            if(setDays > lastDate.getDate()){
                row.insertCell().innerHTML = nextMonthDate;
                leftDays -= 1;
                nextMonthDate += 1;
            }else{
                row.insertCell().innerHTML = setDays;
                setDays +=1;
                leftDays -= 1;
            }
        }
        leftDays = 7;
    }
    
}
Calendar();



