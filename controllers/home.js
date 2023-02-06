// get Route
// @public
// @No auth
exports.get = (req, res) => {
    res.send('Landing Page')
}

// post Route
// @public
// @No auth
exports.post = (req, res) => {
    console.log(req.body);
    res.send('successfully post request')
}