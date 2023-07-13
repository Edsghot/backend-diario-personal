export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Weather{
    Sunny = 'sunny',
    rainy = 'rainy',
    cloudy = 'cloudy',
    windy = 'windy',
    stormy ='stormy'
}


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