import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import "flatpickr/dist/flatpickr.min.css";
//
const refs = {
    startBtn: document.querySelector('[data-start]'),
    timerData: {
        days: document.querySelector('[data-days]'),
        hours: document.querySelector('[data-hours]'),
        minutes: document.querySelector('[data-minutes]'),
        seconds: document.querySelector('[data-seconds]'),
    },
    options: {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
            onClose(selectedDates) {
                const currentDate = new Date();
                selectedDate = selectedDates[0];
                if (selectedDate < currentDate) {
                    startBtn.setAttribute('disabled', true)
                    Notify.failure('Please choose a date in the future');
                } else {
                    Notify.success('Thank you. Press "START"');
                    startBtn.removeAttribute('disabled');
                }
        },
    },
    prettyTime(val) {
        return String(val).padStart(2, 0);
    },
    timer: {
        selectedDate: null,
        isActive: false,
        intervalId: null,
        getTimeData(time) {
            if (time > 0) {
                this.days = refs.prettyTime(Math.floor((time/1000/60/60/24)));
                this.hours = refs.prettyTime(Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
                this.mins = refs.prettyTime(Math.floor((time % (1000 * 60 * 60) / (1000 * 60))));
                this.sec = refs.prettyTime(Math.floor((time % (1000 * 60) / (1000))));
            } else {
                clearInterval(this.intervalId);
            }
        },
        sec: null,
        mins: null,
        hours: null,
        days: null,
        on() {
            if (this.isActive) {
                return
            }            
            this.intervalId = setInterval(() => {
                const deltaTime = new Date(selectedDate).getTime() - Date.now();
                refs.timer.getTimeData(deltaTime);
                refs.timerData.seconds.textContent = this.sec;
                refs.timerData.minutes.textContent = this.mins;
                refs.timerData.hours.textContent = this.hours;
                refs.timerData.days.textContent = this.days;
            }, 1000)
        }
    },
}
const { startBtn, options, timer, timerData } = refs;
const fp = flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', () => {
    timer.on();
});

