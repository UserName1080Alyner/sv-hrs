const mineflayer = require('mineflayer');
const pass = "123452"; //Authme plugini şifresi (Plugin yoksa silmeyin)

const bot = mineflayer.createBot({
    host: "lokycraft.tk", //Sunucunuzun ipsi //Değiştirme!!!
    username: "24HRS", //Botun ismi Kafanıza Göre
   version: '1.8.8'
});


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
  }
  setInterval(intervalFunc,7000);
  console.log('Sunucuya Giriş Yapıldı!');
  bot.chat('/login '+ pass);
});

bindEvents(bot);
function bindEvents(bot) {
  
  bot.on('error', function(err) {
    console.log("Bir Hata Oluştu!");
  });
  
  bot.on('end', function() {
    console.log("Bot sunucudan atıldı!");
    setTimeout(relog, 5000);
  });
  
  function relog() {
    console.log("Sunucuya tekrardan bağlanılıyor");
    bot = mineflayer.createBot(ayar);
    
    bot.on('chat', function(username, message) {
      if (username === bot.username) return;
      console.log("Bot tekrardan sunucuya giriş yaptı!");
      bot.chat('/login '+ pass);
});
    
    
    bindEvents(bot);
  }
}

  