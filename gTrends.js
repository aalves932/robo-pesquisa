const googleTrends = require('google-trends-api');
const Parser = require('rss-parser');

googleTrends.autoComplete({keyword: 'LInguagem de Programação'})
.then(function(results) {
    test= JSON.parse(results);
    console.log(test.default.topics);
  a=1

})
.catch(function(err) {
  console.error(err);
})