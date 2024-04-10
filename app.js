const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();


const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const allMonths = ['january','february', 'march', 'april', 'may', 'jun', 'july', 'august', 'septaber', 'october', 'november', 'december'];

date.innerHTML = (today.getDate() < 10 ? '0' : '') + today.getDate();;
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
console.log(today)