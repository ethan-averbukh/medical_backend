const express = require('express');
const Note = require('./../models/Note');
const router = express.Router();



//get Note route
router.get('/', async(req,res)=>{
    const notes = await Note.find({});
    res.json({
        status:200,
        data: notes
    })
})




//post Note Route
router.post('/', async(req,res)=>{
    const data = req.body;
    const note = await Note.create(data);
    res.json({
        status:200,
        data:note
    })
})

//delete Note Route

router.delete('/:id', async(req,res)=> {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json({
        status:200,
        data: note
    })
})

//put Note Route
router.put('/:id', async(req,res)=>{
    const note = await Note.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.json({
        status:200,
        msg: `Note: ${note._id} was updated in the database.`
    })
})

//patch Note Route
router.patch('/:id', async(req,res)=>{
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json({
        status:200,
        msg: `Note: ${note._id} updated in the database.`
    })
})


module.exports = router;