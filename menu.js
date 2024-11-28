const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
tools: '',
search: '',
ai: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = ` *👋 Hello ${pushname}*

☄ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗦𝗔𝗗𝗜𝗬𝗔_𝗕𝗢𝗧 ☄
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ :ꜱ
│◈ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : 94726840185
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴠᴇʀꜱɪᴏɴ : 2.0.7
╰──────────●●►
╭──────────●●►
 📥 ⚜𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.download}
╰──────────●●►
╭──────────●●►
 👾 ⚜𝐀𝐢 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.ai}
╰──────────●●►
╭──────────●●►
 🔧 ⚜𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.main}
╰──────────●●►
╭──────────●●►
 🎉 ⚜𝐅𝐮𝐧 𝐌𝐞𝐧𝐮⚜
  ㋚───────〠
 ${menu.fun}
╰──────────●●►
╭──────────●●►
 🔄 ⚜𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.convert}
╰──────────●●►
╭──────────●●►
 🔍 ⚜𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.search}
╰──────────●●►
╭──────────●●►
 👥 ⚜𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.group}
╰──────────●●►
╭──────────●●►
 🔒 ⚜𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.owner}
╰──────────●●►
╭──────────●●►
 🛠️ ⚜𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮⚜
  ㋚──────〠
 ${menu.tools}
╰──────────●●►

*🧍ꜱᴀᴅɪʏᴀ_ʙᴏᴛ ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ🧍*
`
return await conn.sendMessage(from,{image: {url:config.ALIVE_IMG},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`Error`)
}
})
