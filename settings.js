//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "NO YT-Channel " //ur yt chanel name
global.socialm = "GitHub: Official-Rup" //ur github or insta name
global.location = "Balurghat, Dakshin Dinajpur, WB,INDIA  " //ur location

//new
global.botname = '░▒▓█𝗖𝗛𝗘𝗘𝗘𝗠𝗦𝗦𝗦𝗦█▓▒░' //ur bot name
global.ownernumber = '918617845264' //ur owner number
global.ownername = '*꧁﴿☬✞ 𝔇𝔢𝔟𝔞𝔰𝔥𝔦𝔰 𝔇𝔢𝔶 ✞☬﴾꧂*' //ur owner name
global.websitex = "https://www.facebook.com/profile.php?id=100091355030433&mibextid=JRoKGi"
global.wagc = "https://chat.whatsapp.com/L4DgyDP4jcx6gInNvrap9i"
global.themeemoji = '📌'
global.wm = "▂▃▅▇█▓▒░░▒▓█𝗖𝗛𝗘𝗘𝗘𝗠𝗦𝗦𝗦𝗦█▓▒░░▒▓█▇▅▃▂ "
global.botscript = '*Lund Le Lo Bhai Script ke badle😂*' //script link
global.packname = "Sticker By"
global.author = "রুপ>3❤️\n\n+918617845264"
global.creator = "918617845264 @s.whatsapp.net"
global.xprefix = ''
global.premium = ["918617845264"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!Fuck Off',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
