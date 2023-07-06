"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const DayPeriod_1 = require("./DayPeriod");
class Utils {
    static getDayPeriod(date) {
        const hours = date.getHours();
        if (hours >= 8 && hours < 13) {
            return DayPeriod_1.DayPeriod.MORNING;
        }
        else if (hours >= 14 && hours < 20) {
            return DayPeriod_1.DayPeriod.AFTERNOON;
        }
        else {
            return DayPeriod_1.DayPeriod.OFF_WORK;
        }
    }
    static getDateFromDayPeriod(dayPeriod, date) {
        let newDate = new Date(date);
        switch (dayPeriod) {
            case DayPeriod_1.DayPeriod.MORNING:
                newDate.setHours(8);
                newDate.setMinutes(0);
                break;
            case DayPeriod_1.DayPeriod.AFTERNOON:
                newDate.setHours(14);
                newDate.setMinutes(0);
                break;
            case DayPeriod_1.DayPeriod.OFF_WORK:
                newDate.setHours(20);
                newDate.setMinutes(0);
                break;
        }
        return newDate;
    }
    static getDateFromBlockIndex(blockIndex, date) {
        let newDate = new Date(date);
        newDate.setHours(Math.floor(blockIndex / 2));
        newDate.setMinutes((blockIndex % 2) * 30);
        return newDate;
    }
    static getDayPeriodFromBlockIndex(blockIndex, date) {
        return this.getDayPeriod(this.getDateFromBlockIndex(blockIndex, date));
    }
    static getBlockIndex(date) {
        return date.getHours() * 2 + Math.floor(date.getMinutes() / 30);
    }
    static getDateStr(date) {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }
}
exports.Utils = Utils;
