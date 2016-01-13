var Facebook = require('../lib/fb-id');
var facebook = new Facebook();

facebook.getId('https://www.facebook.com/mcnallydev?_rdr=p', function(id) {
  console.log('Page: %d', id);
});

facebook.getId('https://www.facebook.com/groups/iosdev.ni/?fref=ts', function(id) {
  console.log('Group: %d', id);
});
