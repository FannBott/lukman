const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["66827294199@s.whatsapp.net"]
global.namabotnya = 'SATRIA BOT'
global.namaownernya = 'SATRIA - MD'
global.packname = '\n\n\n\n\n\n\n\n\n\n© Cyber||+62🇲🇨\nI`m From Indonesia\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nWa : +66 82 729 4199\nYT : Cyber S-C-D-B\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'CyberExe'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.email = 'satria8xc@gmail.com'
global.group = 'https://chat.whatsapp.com/E6nD4mOfAxEKoPddCmQIa1'
global.youtube = 'https://bit.ly/39Ivus6'
global.website = 'https://bit.ly/3yk3gOo'
global.github = 'github.com/FannBott'
global.noown = 'https://wa.me/66827294199'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','�?']
global.api = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Sabar Jancok```',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User CΨβΣR ΣXΣCUTΣD Silahkan Register Terlebih Dahulu Click Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);
