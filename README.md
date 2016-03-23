Node.js ile aktivite akış örneği
========

##Kurulum için:
+ depoyu kopyalayın.
+ `npm install` komutunu çalıştırın.
+ `node app.js` komutunu çalıştırın.

##Çalıştırmak için:
+ aktiviteleri görmek için tarayıcınızdan `http://localhost:3000` adresine girin.
+ yeni aktivite eklemek için tarayıcınızdan `http://localhost:3000/activity?activity=deneme` adresine girin.

##Örneğin can alıcı noktası:

```js
var activities = [];

exports.index = function(req, res) {
    res.render('index.jade', { activities: activities });
};

exports.activity = function(req, res) {
    activities.push(req.query.activity);
    res.send('OK');
};
```
