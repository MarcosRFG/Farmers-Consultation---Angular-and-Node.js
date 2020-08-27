var app = require('./configs/custom-express')();
var getFarmerSearch = require('./controllers/getFarmerSearchController');

app.get('/get-farmer-search', getFarmerSearch);

app.listen(3000, function(){
    console.log('Start server in PORT 3000...');
});

module.exports = app;