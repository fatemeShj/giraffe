const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

const web_link = "https://giraffe-rho.vercel.app/";
bot.start((ctx) =>
  ctx.reply("Welcome :)))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();
