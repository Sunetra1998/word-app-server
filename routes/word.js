import express from "express";
import { getWords, createWord, deleteWord, editWord} from "../controller/word";
import word from "../models/word";

const router = express.Router();

router.get('/', getWords);
router.post('/', createWord);
router.delete('/:id', deleteWord);
router.put('/:id', editWord);

export default router;