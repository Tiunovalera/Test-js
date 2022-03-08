  const scrollBtn = document.querySelector('.showBtn');
  window.onscroll = () => {
    if (window.scrollY > 700) {
      scrollBtn.classList.remove('showBtn__hide');
    } else if (window.scrollY < 700){
      scrollBtn.classList.add('showBtn__hide');
    }
  }

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };



function getDayInfo(){

const currentDate = new Date();
const currentMonth = currentDate.getMonth();

//weekDay
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let weekDay = currentDate.toLocaleString('ru', { weekday: 'long' });

//weekNumber
const numberOfDay = (currentDate.getDay());
let firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1);
let weekNumber = Math.round((currentDate.getDate(currentDate) + numberOfDay + (firstDayOfMonth.getDate(currentDate)) -2) / 7 +1);


//month
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Aвгуста", "Сентября", "Октября", "Ноября", "Декабря"];
let month = currentDate.getMonth();

//year
let year = currentDate.getFullYear();



console.log(weekDay + " " + weekNumber +" " + "неделя" + " " + (months[month]) + " " + year + " " + "года");
}

getDayInfo();