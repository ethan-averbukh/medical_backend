const express = require('express');
const Journal = require('./../models/Journal');
const router = express.Router();



//get journal Route
router.get('/', async(req,res)=>{
    const journal = await Journal.find({}).populate("Notes")
    res.json({
        status: 200,
        data: journal
    })
})

//post Journal Route
router.post('/', async(req,res)=>{
    const data = req.body;
    const journal = await Journal.create(data)
    res.json({
        status: 200,
        data: journal
    })
})
router.delete('/:id', async(req,res)=> {
    const journal = await Journal.findByIdAndDelete(req.params.id)
    res.json({
        status:200,
        msg: `${journal} was deleted from the list!`
    })
})

router.put('/', async(req,res)=>{
    const journal = await Journal.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.json({
        status: 200,
        msg: `${journal} was modified`
    })
})

module.exports = router;