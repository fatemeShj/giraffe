const { Telegraf } = require("telegraf");
// const path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
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

module.exports = (req, res) => {
  res.status(200).send("Bot is running");
};
