import wordData from "../models/word";

export const getWords = async(req, res)=>{
    try {
        const allWords = await wordData.find();
        res.status(200).json(allWords);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

 export const createWord = async (req, res)=>{
    const word = req.body;
    const newWord = new wordData(word);
    try {
        await newWord.save();
        res.status(201).json(newWord);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
};

export const deleteWord = async(req,res)=>{
    const id = req.params.id;
    try {
        await wordData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}

export const editWord = async(req,res)=>{
    const id = req.params.id;
    try {
        const updated =await wordData.updateOne(
            {$set:req.body}
        );
        res.send('Successfully Edited!')
    } catch (error) {
        console.log(error);
    }
}
