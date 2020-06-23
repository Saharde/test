const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["אני מוח גדול גדול",
             "אני בוגו ואני מגניב!",
             "תפסיק, בבקשה אני מתחנן",
             "*-קולות של מקלדת מכנית-*",
             "שועלי הוא גיימר מגניב",
             "לך לעזעזל",
             "סער, הוא קטין, יו יו!",
             "אני הכי מגניב בשרת!",
             "סהר? יותר כמו סערה",
             "לשועלי יש פרוטקציות!!!",
             "אבא שלי ממש משוגע לפעמים",
             "לאבא שלי יש בעיות מנטליות",
             "סהר הוא החבר הכי גרוע בעולם",
             "אבא שלי חרא אליי לפעמים",
             "תעזרו, לי...",
             "*אני בוגו חתיך! לילילי לי לי לילי!*",
             "תעשו לי סאב ולייק! https://www.youtube.com/channel/UC8FRD2GxzWXg_ziVb0eg7NQ/videos",
             "שום שן הוא מגניב אבל למה לסהר אין שיניים?"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity("אבא שלי הוא שועלי!!!!", { type: 'PLAYING' });

});

 

bot.on('message', message => {
  
  if(message.author.bot) return;
  else if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  else if(message.content.includes("שועלי")) {
  message.channel.send("אבא שלי, אתה לא תדבר עליו ככה!");
  }
  else if(message.content == "בוגו") {
  message.channel.send("מה אתה רוצה?");
  }
  else if(message.content == "שלום") {
  message.channel.send("היי");
  }
  else if(message.content.includes("בוקר טוב")) {
  message.channel.send("ערב טוב");
  }
  else if(message.content.includes("ביי")) {
  message.channel.send("אין ביי זה היום!");
  }
  else if(message.content == "בי") {
  message.channel.send("ביי*");
  }
  else if(message.content.includes("מיינקראפט")) {
  message.channel.send("זה משחק טוב");
  }
  else if(message.content.includes("יוטיוב")) {
  message.channel.send("אל תשכחו לעשות לי סאב ולייק ותלחצו על הפעמון https://www.youtube.com/channel/UC8FRD2GxzWXg_ziVb0eg7NQ/videos");
  }
  else if(message.content.includes("סהר")) {
  message.channel.send("סהר במדבר סערה חיחי");
  }
  else if(message.content == "חח") {
  message.channel.send("על מה אתה צוחק?!?");
  }
  else if(message.content.includes("קראש")) {
  message.channel.send("יאאא יש למישהו קראש! חיחי");
  }
  else if(message.content.includes("מימ")) {
  message.channel.send("המימים של שועלי כאלה גרועים, אני יהרוג אותו");
  }
  else if(message.content.includes("חמוד")) {
  message.channel.send("למי אתה קורא חמוד?");
  }
  else if(message.content.includes("פוקסי")) {
  message.channel.send("פוקסי בטח בוכה במיטה שלו, לא איכפת לי!");
  }
  else if(message.content.includes("להרוג")) {
  message.channel.send("אל תהרוג אותו! זה אשמתי!!");
  }
  else if(message.content.includes("XD")) {
  message.channel.send("תפסיקו לצחוק עליי בבקשה...");
  }
  else if(message.content.includes("פורטנייט")) {
  message.channel.send("פורטנייט נהרס בגלל הילדים בני 9 עם הידיים המנוזלות שלהם");
  }
  else if(message.content.includes("מיקמק")) {
  message.channel.send("הולך למות ב 1.12.2020");
  }
  else if(message.content.includes("אנימה")) {
  message.channel.send("זה גרוע... אני הולך לקבל באן עכשיו?");
  }
  else if(message.content.includes("פנאפ")) {
  message.channel.send("נשמע יותר טוב באנגלית...");
  }
  else if(message.content.includes("fnaf")) {
  message.channel.send("זה די טוב כי סקוט משקיע");
  }
  else if(message.content.includes("חוח")) {
  message.channel.send("פוקסי המציא את זה על תגנוב!");
  }
  else if(message.content == ":heart:") {
  message.channel.send("גם אני אוהב אותך אבא! :heart:");
  }
});

bot.login(process.env.BOT_TOKEN);
