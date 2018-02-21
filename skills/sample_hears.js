/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller) {

    var memes = [
        "https://i.imgur.com/LaENqOV.jpg",
        "https://i.imgur.com/WA5duA1.jpg",
        "https://i.imgur.com/tL47qtp.jpg",
        "https://i.imgur.com/yf12saq.jpg",
        "https://i.imgur.com/WymFmVy.jpg",
        "https://i.imgur.com/Qk0VO6D.jpg",
        "https://i.imgur.com/xH2fSFg.jpg",
        "https://i.imgur.com/YqLgINf.jpg",
        "https://i.imgur.com/gS9YL5U.jpg",
        "https://i.imgur.com/NfCknz0.jpg",
        "https://i.imgur.com/s9GmfSS.jpg",
        "https://i.imgur.com/27VCyQw.jpg",
        "https://i.imgur.com/ccczyGt.jpg",
        "https://i.imgur.com/KOsW0jh.jpg",
        "https://i.imgur.com/c6JZKRW.jpg",
        "https://i.imgur.com/uFde4v5.jpg",
        "https://i.imgur.com/eERhI5h.jpg",
        "https://i.imgur.com/OZhhZdS.jpg",
        "https://i.imgur.com/2tNR7P7.jpg"
      ];
      
    controller.on(['direct_message','direct_mention'], function(bot, message) {
        bot.reply(message, 'hello is it mii you looking fooo?');

        setTimeout(myFunction, 3000);

        function myFunction() {
            bot.say(
                {
                    text: 'loool',
                    channel: 'C9BN5J7UJ' // a valid facebook user id or phone number
                }
            );
        }
    });

    controller.hears(['^hello$'], ['direct_message','direct_mention'], function(bot, message) {
        bot.reply(message, "Hi there, you're on workspace: " + message.team);
    });

    controller.hears(['^sup$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "not much bro");
    });

    controller.hears(['^gimme$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, {
            text: "im so smart",
            username: "awzmbot",
            icon_emoji: ":dash:",
        });
    });

    controller.hears(['^if anything goes wrong, who is to blame$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "BACK END!");
    });

    controller.hears(['^good boy$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "VOFF!");
    });

    controller.hears(['^random$'], 'direct_message,direct_mention', function(bot, message) {
        var randomNumber = Math.floor(Math.random() * 18);
        var randomMemeUrl = memes[randomNumber];

        bot.reply(message, {
            "attachments": [
                {
                    text: "im so smart",
                    image_url: randomMemeUrl,
                }
            ]
        });
    });

    controller.hears(['^go ephemeral$'], 'direct_message,direct_mention', function(bot, message) {
        // start a conversation to handle this response.
        bot.startConversation(message,function(err,convo) {

            convo.addQuestion('How are you?',function(response,convo) {
        
                convo.say('Cool, you said: ' + response.text);
                convo.next();
        
            },{},'default');
        
            })
    });

    controller.hears(['question'], 'message_received', function(bot,message) {

        // start a conversation to handle this response.
        bot.startConversation(message,function(err,convo) {
      
          convo.addQuestion('How are you?',function(response,convo) {
      
            convo.say('Cool, you said: ' + response.text);
            convo.next();
      
          },{},'default');
      
        })
      
      });


};
