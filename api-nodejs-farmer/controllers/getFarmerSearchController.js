var mockData = require("../mocks/mockDataFarmerSearch");

var getFarmerSearch = function (req, res) {
    var valueSearch = req.query.search;

    if (!valueSearch) {
        res.status(400).json([]);
    } else {
        var listFarmerResponse = [];

        mockData.mockDataFarmerSearch.forEach((farmer) => {
            if (farmer.name.includes(valueSearch)) {
                listFarmerResponse.push(farmer);
            } else if (farmer.document.documentNumber.includes(valueSearch)) {
                listFarmerResponse.push(farmer);
            }
        });

        res.status(200).json(listFarmerResponse);

    }
};

module.exports = getFarmerSearch;
