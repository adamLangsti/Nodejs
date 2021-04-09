const authorize = (req, res, next) => {
    // http://localhost:5000/?user=adam
    const { user } = req.query;
    if (user === 'adam') {
        req.user = { name: 'adam', id: 2 };
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authorize;
