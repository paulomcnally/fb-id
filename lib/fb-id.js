var request = require('request');
var fs = require('fs');
var crypto = require('crypto');

var Facebook = function() {

};

Facebook.prototype.getId = function(pageUrl, cb) {
  request({
    url: pageUrl,
    timeout: 60000,
    jar: request.jar(),
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.65 Safari/537.31'
    }
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var fileName = crypto.createHash('md5').update(pageUrl).digest('hex') + '.log';
      fs.writeFile(fileName, body, function(err) {
        if (err) {
          console.log(err);
        }
        else{
          var regularExpresionMatch = /fb:\/\/(group|page|profile)\/(\d{1,})/gi;
          var regularExpresionReplace = /fb:\/\/(group|page|profile)\//gi;
          var matchArray = body.match(regularExpresionMatch);
          
          if (matchArray && matchArray.length > 0) {
            cb(matchArray[0].replace(regularExpresionReplace, ''));
          }
          else {
            cb(0);
          }
          process.env.DEBUG && console.log(matchArray);

          // remove file
          fs.unlinkSync(fileName)
        }
      });
    }
    else {
      cb(0);
    }
  });
};

module.exports = Facebook;
