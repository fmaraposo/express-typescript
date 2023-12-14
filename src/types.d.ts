import { Weather, Visibility } from './enums';

//export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

// NonSensitiveInfoDiaryEntry, es un array igual que DiaryEntry pero sin el comment
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
//export type NonSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;