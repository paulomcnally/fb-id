var Facebook = require('../lib/fb-id');
var facebook = new Facebook();

facebook.getId('https://www.facebook.com/mcnallydev', function(id) {
  console.log('Page: %d', id);
});

facebook.getId('https://www.facebook.com/groups/iosdev.ni', function(id) {
  console.log('Group: %d', id);
});

facebook.getId('https://www.facebook.com/zr', function(id) {
  console.log('User: %d', id);
})
