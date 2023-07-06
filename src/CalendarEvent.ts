import { v4 as uuidv4 } from 'uuid';
import { DayPeriod } from './DayPeriod';

export class CalendarEvent {
    
    private _id: string;
    private _name: string = "New Event";
    private _description: string = "";

    // the starting date
    private _date: Date = new Date();
    // can optimization move the event?
    private _flexible: boolean = true;
    private _dayPeriod: DayPeriod | null = null;

    private _durationMinutes: number = 30;

    constructor() {
        // generate a new id
        this._id = uuidv4();
    }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get flexible(): boolean {
        return this._flexible;
    }

    public set flexible(flexible: boolean) {
        this._flexible = flexible;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(date: Date) {
        // TODO: update the day period to match the date
        this._date = date;
    }

    public get dayPeriod(): DayPeriod | null {
        return this._dayPeriod;
    }

    public set dayPeriod(dayPeriod: DayPeriod) {
        // TODO: update the date to match the day period
        this._dayPeriod = dayPeriod;
    }

    public get durationMinutes(): number {
        return this._durationMinutes;
    }

    public set durationMinutes(durationMinutes: number) {
        this._durationMinutes = durationMinutes;
    }

    public get durationBlocks(): number {
        return Math.ceil(this._durationMinutes / 30);
    }

    public equals(other: CalendarEvent): boolean {
        return this.id === other.id;
    }
}