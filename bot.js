console.log("Bot is ready.");
console.log();

let Twit = require('twit');
let config = require('./config');

console.log(config);
console.log();

let T = new Twit(config);

let stream = T.stream('user');
stream.on('follow',followed);

function followed(eventMessage) {
  console.log("Someone has followed us!");
  let name = eventMessage.source.name;
  let screenName = eventMessage.source.screen_name;
  T.post('direct_messages/new', {screen_name: screenName,
  text: 'Aloha ' + name + '! Thanks for your interest in Jr. DevLeague! For more info, check out http://www.jrdevleague.com/.'},
  function(err, data, response){
    if(err){
      console.log(err);
    }else{
      console.log('The message has been sent!');
    }
  });
}
