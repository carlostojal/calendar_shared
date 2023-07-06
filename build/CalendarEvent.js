"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEvent = void 0;
const uuid_1 = require("uuid");
class CalendarEvent {
    constructor() {
        this._name = "New Event";
        this._description = "";
        // the starting date
        this._date = new Date();
        // can optimization move the event?
        this._flexible = true;
        this._dayPeriod = null;
        this._durationMinutes = 30;
        // generate a new id
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get flexible() {
        return this._flexible;
    }
    set flexible(flexible) {
        this._flexible = flexible;
    }
    get date() {
        return this._date;
    }
    set date(date) {
        // TODO: update the day period to match the date
        this._date = date;
    }
    get dayPeriod() {
        return this._dayPeriod;
    }
    set dayPeriod(dayPeriod) {
        // TODO: update the date to match the day period
        this._dayPeriod = dayPeriod;
    }
    get durationMinutes() {
        return this._durationMinutes;
    }
    set durationMinutes(durationMinutes) {
        this._durationMinutes = durationMinutes;
    }
    get durationBlocks() {
        return Math.ceil(this._durationMinutes / 30);
    }
    equals(other) {
        return this.id === other.id;
    }
}
exports.CalendarEvent = CalendarEvent;
