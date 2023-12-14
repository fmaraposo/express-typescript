import express from 'express'; // ES Modules
import * as diaryService from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router()

router.get('/', (_req, res) => {
    // Se pone el guión bajo para indicar que no se va a usar el req, de esta forma no se genera un warning causado por TS
    res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryService.findById(Number(req.params.id))
    if (diary) {
        res.send(diary)
    } else {
        res.sendStatus(404)
    }
})

router.post('/', (req, res) => {
    try {
   const newDiaryEntry = toNewDiaryEntry(req.body)
   const addedDiaryEntry = diaryService.addDiary(newDiaryEntry)

   res.json(addedDiaryEntry)
        
    } catch (e: any) {
        res.status(400).send(e.message)
    }
})

export default router