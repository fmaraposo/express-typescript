// Por defecto typescript no es capaz de importar esto tal cual, tengo que añadir una condición en tsconfig para que pueda importar archivos json
import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';
import diaryData from './diaries.json';

// Crio una constante que se llama diaries.
// Le digo que es un array de DiaryEntry
// Le digo que es un array de DiaryEntry porque diaryData es un array de DiaryEntry
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries;

// Le digo que el id es un number y que devuelve un NonSensitiveDiaryEntry o undefined
export const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if(entry) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined
}

// Le digo que devuelve un array de NonSensitiveDiaryEntry
export const getEntriesWithoutSensitiveInfo = () : NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
}

export const addDiary = (newDiaryEntry : NewDiaryEntry) : DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1, // Me da la id más alta y le sumo 1
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
};

