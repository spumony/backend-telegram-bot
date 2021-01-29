const weatherForcast = (bot) => {
  bot.onText(/\/weather/, function weather(msg) {
    fetch(
      'http://dataservice.accuweather.com/forecasts/v1/daily/1day/2-242405_1_AL?apikey=XTt3pGfoWONrsLLIlULkycOY0oDWRcYB'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    
    
    const result = 'test';
    bot.sendMessage(msg.chat.id, result);
  });
};

//  C = (5/9) * (F - 32)

module.exports = weatherForcast;
