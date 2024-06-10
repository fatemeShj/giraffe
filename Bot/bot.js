const { Telegraf } = require("telegraf");
const token = "token";
const bot = new Telegraf(token);

const web_link = "https://giraffe-rho.vercel.app/";
bot.start((ctx) =>
  ctx.reply("Welcome :)))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();
