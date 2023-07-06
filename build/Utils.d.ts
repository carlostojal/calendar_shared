import { DayPeriod } from './DayPeriod';
export declare class Utils {
    static getDayPeriod(date: Date): DayPeriod;
    static getDateFromDayPeriod(dayPeriod: DayPeriod, date: Date): Date;
    static getDateFromBlockIndex(blockIndex: number, date: Date): Date;
    static getDayPeriodFromBlockIndex(blockIndex: number, date: Date): DayPeriod;
    static getBlockIndex(date: Date): number;
    static getDateStr(date: Date): string;
}
