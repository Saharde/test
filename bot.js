const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["חיחייייייייייי",
             "אני בוט ואני מגניב!",
             "תפסיק לתייג אותי!!!",
             "*באמשך תםסיק לתייג אותי-*",
             "סהר הוא גיימר מגניב",
             "לך לעזעזל",
             "אני הכי מגניב בשרת!",
             "אהלן סאקר",
             "מה אחי?",
             "אתה בטח מתייג אותי כי אתה בדד (בדדדדד אלךךךךךךךךךךך)",
             "מיקמק זה גמניב יו יו",
             "אל תתיג אותי אני אקרא ל MEE6 שיעזור לי",
             "תעזרו, לי...",
             "*אני בוט חתיך! לי לילי לי לי לילי!*",
             "שום שן הוא מגניב אחושרמוטה"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity("My dad is Saharde!!!!", { type: 'PLAYING' });

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
  else if(message.content == "יזין") {
  message.channel.send("שתעק יבן זיני");
  }
  else if(message.content == "אתה יפה") {
  message.channel.send("תודה רבה תמיד חלמתי להיות דוגמן");
  }
  else if(message.content == "שלום") {
  message.channel.send("היי");
  }
  else if(message.content.includes("בוקר טוב")) {
  message.channel.send("ערב טוב");
  }
  else if(message.content.includes("ככה")) {
  message.channel.send("כובע");
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
  message.channel.send("חה חה צחוק מזוייף?!?");
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
  message.channel.send("תפסיק לצחוק עליי בבקשה...");
  }
  else if(message.content.includes("פורטנייט")) {
  message.channel.send("פורטנייט נהרס בגלל הילדים בני 9 עם הידיים המנוזלות שלהם");
  }
  else if(message.content.includes("מיקמק")) {
  message.channel.send("הולך למות ב 1.12.2020");
  }
  else if(message.content.includes("נעלבתי ממך")) {
  message.channel.send("למה?");
  }
   else if(message.content.includes("העלבת אותי")) {
  message.channel.send("מדוע?");
  }
  else if(message.content.includes("ממצב")) {
  message.channel.send("סמיילי מאוהב.");
  }
  else if(message.content.includes("אהלן")) {
  message.channel.send("וסהלן");
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
  message.channel.send("בונאה הסקאמר בן זונה הוא מוצץ זין מזדיין בתחת של אנטישמי בן זונה מזדיין שרואה פורנו והנטאי הזין הבן זונה הזה.");
  }
  else if(message.content == "תשיר לי שיר") {
  message.channel.send("שניצל זה טעים, שניצל זה טעים יו! שניצל זה טעים! ט ט טעים!");
  }
  else if(message.content == "מי רוצה לשחק?") {
  message.channel.send("הייתי שמח לשחק איתך, אך אני בוט (:");
  }
   else if(message.content == "99% מנגני הגיטרה הם כאלה") {
  message.channel.send("https://www.youtube.com/watch?v=lyH7ykZyXQA");
  }
});

bot.login(process.env.BOT_TOKEN);
