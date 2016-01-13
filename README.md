# fb-id
Get page/group/profile ID from facebook url

    var Facebook = require('fb-id');
    var facebook = new Facebook();

    facebook.getId('https://www.facebook.com/mcnallydev?_rdr=p', function(id) {
      console.log(id);
    });
