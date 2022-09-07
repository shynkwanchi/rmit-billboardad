const express = require('express');
const router = express.Router();

const User = require('../models/User');

//router.get('/', (req,res) => res.send('USER ROUTE'))

//@route POST auth/register
//@desc Register user
//@access Public
router.post('/register', async(req,res) => {
    const {username, password} = req.body;

    //Simple validation
    if(!username || !password)
        return res
            .status(400)
            .json({success:false, message: "Missing username and/or password"})
    try {
        const user = await User.findOne({username})
        if(user)
        return res
            .status(400)
            .json({success:false, message: 'User name already taken'})
        
        //If OKAY
        const newUser = new User({username, password});
        await newUser.save();

        //Return Token
    } catch (error){}
})

module.exports = router;