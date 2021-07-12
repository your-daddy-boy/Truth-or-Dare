// =============== Bot ===============
const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const express = require("express");
const app = express();
app.get("/", (req, res) => {res.send(200);})
app.listen(3000);
const prefix = "S.";

// ======== Ready Log ========
client.on ("ready", () => {
    
    console.log('The Bot Is Ready!');
    client.user.setPresence({
      status: 'idle', // Can Be ONLINE, DND, IDLE, INVISBLE
      activity: {
          name: 'truth or dare | S.help',
          type: 'LISTENING', // Can Be WHATCHING, LISTENING
      }
  })
  }); 
// ======== Code ========

client.on('message', message => {
const help = new Discord.MessageEmbed()
	.setColor('#72dfa3')
	.setTitle(`Truth Or Dare `)
	.addFields(
		{ name: '__help__', value: 'Untuk melihat list commandnya'},
    { name: '__truth__', value: 'untuk memberikan pertanyaan'},
    { name: '__dare__', value: 'untuk memberikan tantangan'},
    { name: '__Created By__', value: 'Your Favorite Boy'},
	)
	.setTimestamp()
  .setFooter(`${message.author.username} Yours`, 'https://i.imgur.com/XldJLeI.jpg');
  if (message.content === `s.help`) {
    message.channel.send(help);
  }
});

// ========= Truth =========
client.on('message', message => {
const t = [
"Apa hal paling kekanak-kanakan yang pernah kamu lakukan di atas usia 13 tahun?", 
"Hal apa yang paling memalukan yang pernah kamu lakukan?", 
"Apa momen paling canggung yang pernah kamu alami saat berkencan?", 
"Siapa yang lagi kamu taksir sekarang? Pernah naksir guru, dosen, atau teman kantor?",
"Berapa banyak mantan kamu?",
"Apa hal paling kejam yang pernah kamu lakukan pada seseorang?",
"Apakah kamu pernah pipis di celana saat dewasa atau remaja?",
"Apa hal paling menjijikkan yang pernah kamu dengar yang dilakukan seseorang?",
"Siapakah satu orang yang kamu harap masih ada dalam hidup kamu?",
"Apakah menurut kamu, kamu lebih jelek atau lebih cakep dibanding teman-teman kamu?", 
"Pernah salah sebut nama orang saat di jalan? Ceritain, dong!", 
"Apakah kamu pernah diam-diam mencuri sesuatu dari orang tua atau orang lain?", 
"Kapan terakhir kali kamu berbohong sama orang tua?",
"Apa kebohongan yang kamu lakukan sama orang tua yang terparah?",
"Mengapa kamu putus dengan mantanmu?",
"Kemana kamu diajak jalan pertama kali?",
"Apakah first datemu memegang tanganmu saat pertama kali jalan?",
"apakah first date mu bawa mobil atau bawa motor?",
"siapa mantan yang paling kamu sayang?",
"siapa teman yang paling kamu sayang diantara kita?",
"siapa yang kamu harapkan hadir disini sekarang?",
"hal memalukan bersama gebetan yang pernah terjadi?",
"siapa yang paling jelek diantara kita?",
"Apa mimpi teraneh yang pernah kamu alami?",
"Hal apa yang membuat kamu tertarik pada laki-laki/perempuan?",
"Acara TV apa yang paling kamu benci? Beri tahu alasannya!",
"Apa fantasi terbesar atau terhanehmu?",
"Siapa selebriti yang pertama kali bikin kamu naksir?",
"Apa penyesalan terburukmu?",
"Apa hal yang paling membuatmu merasa insecure?",
"Apakah kamu akan balik lagi ke mantanmu?",
"Suka stalking siapa aja ?"
]
const truth = t[Math.floor(Math.random() * t.length)];
if (message.content === `${prefix}truth`) {
  message.channel.send(truth);
}
});

// ========= Dare =========
client.on('message', message => {
  const d = [
"Coba nyanyikan sebuah lagu",
"Kirimkan foto kamu yang paling imut",
"Unggah (posting) foto seseorang sebagai WhatsApp Story kamu.",
"Bilang i love you (nama gebetan) kamu di ig story sekarang",
"Rekam kamu nyanyi dan upload ke feed ig tanpa di edit",
"Lihatin chat paling memalukan yang masih kamu simpan",
"Kunyah es batu satu buah",
"Letakkan es batu di celana kamu"

  ]
  const dare = d[Math.floor(Math.random() * d.length)];
  if (message.content === `${prefix}dare`) {
    message.channel.send(dare);
  }
});
// ======== End ========


client.login(procces.env.token);
