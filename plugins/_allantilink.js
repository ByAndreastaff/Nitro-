import fetch from 'node-fetch'  
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com/i 
  
let handler = m => m
handler.before = async function (m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
 
if (chat.antiTiktok && isAntiLinkTik) {  
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `*𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴* \`TikTok\`.\n*𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 (𝙰)* *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁*`)
} else if (!bot.restrict) {
return m.reply(`*𝙻𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰*`)
}}
    
if (chat.antiYoutube && isAntiLinkYt) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `*𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴* \`YouTube\`.\n*𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 (𝙰)* *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁*`)
} else if (!bot.restrict) {
return m.reply(`*𝙻𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰*`)
}}  
    
if (chat.antiTelegram && isAntiLinkTel) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `*𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴* \`Telegram\`.\n*𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 (𝙰)* *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁*`)
} else if (!bot.restrict) {
return m.reply(`*𝙻𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰*`)
}}    
    
if (chat.antiFacebook && isAntiLinkFb) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `*𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴* \`Facebook\`.\n*𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 (𝙰)* *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁*`)
} else if (!bot.restrict) {
return m.reply(`*𝙻𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰*`)
}}  
    
if (chat.antiInstagram && isAntiLinkIg) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `*𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴* \`Instagram\`.\n*𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 (𝙰)* *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁*`)
} else if (!bot.restrict) {
return m.reply(`*𝙻𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰*`)
}}
    
if (chat.antiTwitter && isAntiLinkTw) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `*𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴* \`Twitter\`.\n*𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 (𝙰)* *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁*`)
} else if (!bot.restrict) {
return m.reply(`*𝙻𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰*`)
}}
return !0
}
export default handler
