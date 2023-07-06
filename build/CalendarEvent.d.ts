import { DayPeriod } from './DayPeriod';
export declare class CalendarEvent {
    private _id;
    private _name;
    private _description;
    private _date;
    private _flexible;
    private _dayPeriod;
    private _durationMinutes;
    constructor();
    get id(): string;
    set id(id: string);
    get name(): string;
    set name(name: string);
    get description(): string;
    set description(description: string);
    get flexible(): boolean;
    set flexible(flexible: boolean);
    get date(): Date;
    set date(date: Date);
    get dayPeriod(): DayPeriod | null;
    set dayPeriod(dayPeriod: DayPeriod);
    get durationMinutes(): number;
    set durationMinutes(durationMinutes: number);
    get durationBlocks(): number;
    equals(other: CalendarEvent): boolean;
}
