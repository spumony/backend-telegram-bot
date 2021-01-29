const searchNark = (bot) => {
  bot.onText(/\/whoisnark/, function getNark(msg) {
    const users = [
      'Сережа Косожихин',
      'Павел Настас',
      'Чумак Александр',
      'Сережа Никвист',
    ];
    setTimeout(() => {
      bot.sendMessage(msg.chat.id, 'Инициирую поиск нарка...');
    }, 1000);
    setTimeout(() => {
      bot.sendMessage(msg.chat.id, 'Проверяю данные...');
    }, 3000);

    const random = Math.floor(Math.random() * users.length);
    const result = users[random];

    setTimeout(() => {
      bot.sendMessage(msg.chat.id, `Кажется, нарк дня - ${result}`);
    }, 5000);
  });
};

module.exports = searchNark;
