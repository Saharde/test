const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["חיחייייייייייי",
             "אני בוט ואני מגניב!",
             "תפסיק, בבקשה אני מתחנן",
             "*-קולות של מקלדת מכנית-*",
             "סהר הוא גיימר מגניב",
             "לך לעזעזל",
             "אני הכי מגניב בשרת!",
             "אהלן סאקר",
             "אבא שלי ממש משוגע לפעמים",
             "לאבא שלי יש בעיות מנטליות",
             "מיקמק זה גמניב יו יו",
             "אבא שלי חרא אליי לפעמים",
             "תעזרו, לי...",
             "*אני בוט חתיך! לילילי לי לי לילי!*",
             "שום שן הוא מגניב אחושרמוטה"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity("אבא שלי הוא Saharde!!!!", { type: 'PLAYING' });

});

 

bot.on('message', message => {
  
  if(message.author.bot) return;
  else if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  else if(message.content.includes("אנימה")) {
  message.channel.send("אנימה = איך נרוויח יין מהנטאי");
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
  else if(message.content.includes("מי זה אבשך?")) {
  message.channel.send("Saharde");
  }
  else if(message.content == "חח") {
  message.channel.send("על מה אתה צוחק?!?");
  }
  else if(message.content.includes("קראש")) {
  message.channel.send("יאאא יש למישהו קראש! חיחי");
  }
  else if(message.content.includes("מימ")) {
  message.channel.send("Memes is good.");
  }
  else if(message.content.includes("חמוד")) {
  message.channel.send("למי אתה קורא חמוד?");
  }
  else if(message.content.includes("היי")) {
  message.channel.send("ביי -_-");
  }
  else if(message.content.includes("אתה מטומטם?")) {
  message.channel.send("אכן כן.");
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
  else if(message.content.includes("נעלבתי ממך")) {
  message.channel.send("מדוע?");
  }
  else if(message.content.includes("ממצב")) {
  message.channel.send("סמיילי מאוהב.");
  }
  else if(message.content.includes("fnaf")) {
  message.channel.send("זה די טוב כי סקוט משקיע");
  }
  else if(message.content.includes("סבמבה")) {
  message.channel.send("כל הזכויות על המילה סבמבה שמורות לסהר");
  }
  else if(message.content == ":heart:") {
  message.channel.send("גם אני אוהב אותך אבא! :heart:");
  }
   else if(message.content == "אריאל") {
  message.channel.send("אריאל פרו רצח בפורטנייט");
  }
    else if(message.content == "יש פה סקאמר") {
  message.channel.send("בונאה הסקאמר בן זונה הוא מוצץ זין מזדיין בתחת של אנטישמי בן זה מזדיין שרואה פורנו והנטאי הזין הבן זונה הזה.");
  }
});

bot.login(process.env.BOT_TOKEN);
