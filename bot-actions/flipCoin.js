const sendMessage = (bot) => {
  bot.onText(/\/flip/, function onFlip(msg) {
    x = Math.floor(Math.random() * 2) == 0;
    let result = 'I dont know';
    if (x) {
      result = 'Подбрасываю монетку... Результат: Да😄👍';
    } else {
      result = 'Подбрасываю монетку... Результат: Нет😕👎';
    }
    bot.sendMessage(msg.chat.id, result);
  });
};

module.exports = sendMessage;
