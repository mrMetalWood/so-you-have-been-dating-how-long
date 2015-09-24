var ghpages = require('gh-pages'),
  path = require('path');

ghpages.publish(path.join(__dirname, 'build'), function(error) {
  console.log(error); // eslint-disable-line
});
