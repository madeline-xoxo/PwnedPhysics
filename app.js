/*
    Authored by Robot in 2022
    Get owned, Haubna
    Maybe don't put DRM in your mods next time, you speccy-eyed twat <3
    (icl though you're making bank off of your physx port and i can respect that, not sure nvidia will tho LOL)
*/

var express = require("express");
var app = express();
const allowedCodes = [
    'haubnaIsATwat',
    'obfuscateYourCodeLOL'
]

app.get('/verify', (req, res) => {
    try {
        if (allowedCodes.includes(req.query.code)) {
            console.log("verified")
            return res.status(200).send(`${req.query.code}verified`) // no space bcs String.contains("abcd " + "verified") returns false in java
        }
        return res.status(200).send(`invalid code! valid codes are: [ ${allowedCodes.toString().replace(",", ", ")} ]`) // i don't know why but it always expects 200?? shitty code
    } catch(e) {
        console.log(`failed to verify???? (${e})`) // this should never, EVER happen
        return res.status(200).send(e)
    }
})

app.listen(4567, () => {
    console.log(`listening on port 4567`)
})