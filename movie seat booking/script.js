const container=document.querySelector('.container');
const seats=document.querySelectorAll('.seat:not(.occupied');
const num=document.getElementById('num');
const price=document.getElementById('price');
const movieSelect=document.getElementById('movie');

populateUI();

let ticketPrice =+movieSelect.value;

//保存selected movie的index,计算num和price
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.seat.selected');
    const seatsIndex=[...selectedSeats].map(seat=>[...seat].indexOf(seat));//返回一个新数组index
    
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    const selectedSeatsCount=selectedSeats.length;

    num.innerText=selectedSeatsCount;
    price.innerText=selectedSeatsCount*ticketPrice;

setMovieData(movieSelect.selectedIndex,movieSelect.value);//?
}

//从localStorage和populate UI获取数据?why
function populateUI(){
    selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));//JSON.parse() 方法将数据转换为 JavaScript 对象。

    if(selectedSeats!=null&&selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        });

    }
}
//why?
const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');

if(selectedMovieIndex!=null){
    movieSelect.selectedIndex=selectedMovieIndex;
}

//选择movie事件
movieSelect.addEventListener('change',e=>{
    ticketPrice=+e.target.value;
    updateSelectedCount();
});

//seat click event
seat-container.addEventListener('click',e=>{
    if(
        e.target.classList.contains('seat')&&
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }

});

//初始化num和price
updateSelectedCount();




