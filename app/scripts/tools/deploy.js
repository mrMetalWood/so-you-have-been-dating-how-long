var ghpages = require('gh-pages'),
  path = require('path');

ghpages.publish(path.join('./', 'build'), function(error) {
  console.log(error); // eslint-disable-line
});
