var activities = [];

exports.index = function(req, res) {
    res.render('index.jade', { activities: activities });
};

exports.activity = function(req, res) {
    activities.push(req.query.activity);
    res.send('OK');
};
