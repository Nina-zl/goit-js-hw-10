import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let userSelectedDate = null;
let timerInterval = null;

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate.getTime() <= Date.now()) {
            iziToast.error({
                title: "Error",
                message: "Please choose a date in the future",
                position: "topRight",
            });
            startBtn.disabled = true;
            startBtn.classList.add("disabled");
            userSelectedDate = null;
        } else {
            userSelectedDate = selectedDate;
            startBtn.disabled = false;
            startBtn.classList.remove("disabled");
        }
    },
};

flatpickr(input, options);

startBtn.addEventListener("click", () => {
    if (!userSelectedDate) return;

    startBtn.disabled = true;
    input.disabled = true;

    timerInterval = setInterval(() => {
        const deltaTime = userSelectedDate - Date.now();

        if (deltaTime <= 0) {
            clearInterval(timerInterval);
            updateClockface(0);
            input.disabled = false;
            startBtn.disabled = true;
            return;
        }

        updateClockface(deltaTime);
    }, 1000);
});

function updateClockface(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
        days: Math.floor(ms / day),
        hours: Math.floor((ms % day) / hour),
        minutes: Math.floor(((ms % day) % hour) / minute),
        seconds: Math.floor((((ms % day) % hour) % minute) / second),
    };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}





// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const input = document.querySelector("#datetime-picker");
// const startBtn = document.querySelector("[data-start]");
// const daysEl = document.querySelector("[data-days]");
// const hoursEl = document.querySelector("[data-hours]");
// const minutesEl = document.querySelector("[data-minutes]");
// const secondsEl = document.querySelector("[data-seconds]");

// let userSelectedDate = null;
// let timerInterval = null;

// startBtn.disabled = true;

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         const selectedDate = selectedDates[0];

//         if (selectedDate.getTime() <= Date.now()) {
//             iziToast.error({
//                 title: "Error",
//                 message: "Please choose a date in the future",
//                 position: "topRight",
//             });
//             startBtn.disabled = true;
//             startBtn.classList.add("disabled");
//             userSelectedDate = null;
//         } else {
//             userSelectedDate = selectedDate;
//             startBtn.disabled = false;
//             startBtn.classList.remove("disabled");
//         }
//     },
// };

// flatpickr(input, options);

// startBtn.addEventListener("click", () => {
//     if (!userSelectedDate) return;

//     startBtn.disabled = true;
//     input.disabled = true;

//     timerInterval = setInterval(() => {
//         const deltaTime = userSelectedDate - Date.now();

//         if (deltaTime <= 0) {
//             clearInterval(timerInterval);
//             updateClockface(0);
//             input.disabled = false;
//             return;
//         }

//         updateClockface(deltaTime);
//     }, 1000);
// });

// function updateClockface(ms) {
//     const { days, hours, minutes, seconds } = convertMs(ms);
//     daysEl.textContent = addLeadingZero(days);
//     hoursEl.textContent = addLeadingZero(hours);
//     minutesEl.textContent = addLeadingZero(minutes);
//     secondsEl.textContent = addLeadingZero(seconds);
// }

// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     return {
//         days: Math.floor(ms / day),
//         hours: Math.floor((ms % day) / hour),
//         minutes: Math.floor(((ms % day) % hour) / minute),
//         seconds: Math.floor((((ms % day) % hour) % minute) / second),
//     };
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, "0");
// }



// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const input = document.querySelector("#datetime-picker");
// const startBtn = document.querySelector("[data-start]");
// const daysEl = document.querySelector("[data-days]");
// const hoursEl = document.querySelector("[data-hours]");
// const minutesEl = document.querySelector("[data-minutes]");
// const secondsEl = document.querySelector("[data-seconds]");

// let userSelectedDate = null;
// let timerInterval = null;

// startBtn.disabled = true; // Початковий стан кнопки

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         const selectedDate = selectedDates[0];

//         if (selectedDate.getTime() <= Date.now()) {
//             iziToast.error({
//                 title: "Error",
//                 message: "Please choose a date in the future",
//                 position: "topRight"
//             });
//             startBtn.disabled = true;
//             startBtn.classList.add("disabled");
//             userSelectedDate = null;
//         } else {
//             userSelectedDate = selectedDate;
//             startBtn.disabled = false;
//             startBtn.classList.remove("disabled");
//         }
//     },
// };

// flatpickr(input, options);

// startBtn.addEventListener("click", () => {
//     if (!userSelectedDate) return;

//     startBtn.disabled = true;
//     input.disabled = true;

//     clearInterval(timerInterval); // Очистити попередній таймер, якщо він існував

//     timerInterval = setInterval(() => {
//         const deltaTime = userSelectedDate - Date.now();

//         if (deltaTime <= 0) {
//             clearInterval(timerInterval);
//             updateClockface(0);
//             input.disabled = false;
//             startBtn.disabled = false; // Після завершення таймера кнопка активується
//             return;
//         }

//         updateClockface(deltaTime);
//     }, 1000);
// });

// function updateClockface(ms) {
//     const { days, hours, minutes, seconds } = convertMs(ms);
//     daysEl.textContent = addLeadingZero(days);
//     hoursEl.textContent = addLeadingZero(hours);
//     minutesEl.textContent = addLeadingZero(minutes);
//     secondsEl.textContent = addLeadingZero(seconds);
// }

// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     return {
//         days: Math.floor(ms / day),
//         hours: Math.floor((ms % day) / hour),
//         minutes: Math.floor(((ms % day) % hour) / minute),
//         seconds: Math.floor((((ms % day) % hour) % minute) / second),
//     };
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, "0");
// }




// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const input = document.querySelector("#datetime-picker");
// const startBtn = document.querySelector("[data-start]");
// const daysEl = document.querySelector("[data-days]");
// const hoursEl = document.querySelector("[data-hours]");
// const minutesEl = document.querySelector("[data-minutes]");
// const secondsEl = document.querySelector("[data-seconds]");

// let userSelectedDate = null;
// let timerInterval = null;

// startBtn.disabled = true; // Початковий стан кнопки

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         const selectedDate = selectedDates[0];

//         if (selectedDate.getTime() <= Date.now()) {
//             alert("Please choose a date in the future");
//             startBtn.disabled = true;
//             startBtn.classList.add("disabled"); // Додано зміну стилю
//             userSelectedDate = null;
//         } else {
//             userSelectedDate = selectedDate;
//             startBtn.disabled = false;
//             startBtn.classList.remove("disabled"); // Активуємо кнопку
//         }
//     },
// };

// flatpickr(input, options);

// startBtn.addEventListener("click", () => {
//     if (!userSelectedDate) return;

//     startBtn.disabled = true;
//     input.disabled = true;

//     timerInterval = setInterval(() => {
//         const deltaTime = userSelectedDate - Date.now();

//         if (deltaTime <= 0) {
//             clearInterval(timerInterval);
//             updateClockface(0);
//             input.disabled = false;
//             return;
//         }

//         updateClockface(deltaTime);
//     }, 1000);
// });

// function updateClockface(ms) {
//     const { days, hours, minutes, seconds } = convertMs(ms);
//     daysEl.textContent = addLeadingZero(days);
//     hoursEl.textContent = addLeadingZero(hours);
//     minutesEl.textContent = addLeadingZero(minutes);
//     secondsEl.textContent = addLeadingZero(seconds);
// }

// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     return {
//         days: Math.floor(ms / day),
//         hours: Math.floor((ms % day) / hour),
//         minutes: Math.floor(((ms % day) % hour) / minute),
//         seconds: Math.floor((((ms % day) % hour) % minute) / second),
//     };
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, "0");
// }