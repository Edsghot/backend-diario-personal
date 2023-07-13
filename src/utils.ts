import { Weather, newDiaryEntry } from "./types";

const parseComment = (commentFromRequest: any):string=>{
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')
    }

    return commentFromRequest
}
const parseDate = (dateFromRequest: any): string =>{
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest;
}

const parseWeather = (weatherFromRequest: any): Weather =>{
    if(!isString(weatherFromRequest) || )
}

const isWeather = (string: string): boolean=>{
    return ['sunny' , 'rainy' , 'cloudy' , 'windy' , 'stormy'].includes(string);
}

const isString = (string:string): boolean =>{
    return typeof string === 'string'
    
}

const isDate = (date:string): boolean =>{
    return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): newDiaryEntry =>{
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date)
    }
    return newEntry;
} 