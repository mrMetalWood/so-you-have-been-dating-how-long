var ghpages = require('gh-pages');

ghpages.publish('/build', function(error) {
  console.log(error); // eslint-disable-line
});
