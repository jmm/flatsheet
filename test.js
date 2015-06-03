var
  fs = require('fs'),
  glob = require('glob');

try {
  fs.mkdir('./tmp', function () {
    glob('./tests/**/*.js', function (err, matches) {
      matches.forEach(function (test) {
        require(test);
      });
    });
  })
}
catch (e) {}
