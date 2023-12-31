import { Visibility,Weather } from "./enum"
export interface DiaryEntry{
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string,
}
//solo esos
//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'| 'date' | 'comment' | 'weather' | 'visibility'>
//todos menos esto
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Omit<DiaryEntry, 'id'>