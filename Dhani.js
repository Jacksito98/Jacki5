/* ====[ INDONESIA ]====

Nah kali ini gw mau bagi²
Script bot WhatsApp bahasa English
Silakan di pakek asal nama 
Pembuat atau creator jangan di 
Hapus atau di ganti nama luh
Jika di ganti atau di hapus
Saya tidak bakalan update sc ini !!
Pliss jangan jual sc ini 
Kalau mau nyolong kasih sumber om
Gak di kasih ?, Sans gw doain biar luh sial !!

====[ ENGLISH ]====

Well this time I want to share
WhatsApp bot script in English
Please use the original name
Makers or creators don't
Delete or rename luh
If replaced or deleted
I will not update this sc !!
Pls don't sell this SC
If you want to help, give me the source
Isn't it given?, Sans I pray for bad luck!!
*/


const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const skh = require('skh-api')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { color, bgcolor } = require('./database/lib/color')
const { fetchJosn, kyun, fetchText } = require('./database/lib/fetcher')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./database/lib/functions')
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))

//━━━━[ Setting ]━━━━//

owner = setting.OwnerNumber
owner2 = `${owner}@s.whatsapp.net`
botname = setting.BotName
ownername = setting.OwnerName
const fakeimage = fs.readFileSync ('./database/image/dhani.jpg')
const thumb = fs.readFileSync ('./database/image/thumb.jpg')

//━━━━[ Database ]━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))

//━━━━[ Time ]━━━━//

let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })


if(waktu < "23:59:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🌌'
}
if(waktu < "19:00:00"){
var sayingtime = '𝘏𝘢𝘷𝘦 𝘢 𝘨𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🌆'
}
if(waktu < "18:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘢𝘧𝘵𝘦𝘳𝘯𝘰𝘰𝘯🌇'
}
if(waktu < "15:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘋𝘢𝘺🏞'
}
if(waktu < "11:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨🌅'
}
if(waktu < "05:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🏙'
}

//━━━━[ Module Exports ]━━━━//

module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Dhani.chats.all()
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//━━━━[ Mess And Others ]━━━━//

		mess = {
		wait: 'process',
		eror: 'Sorry an error occurred !!',
		success: 'success',
		error: {
		stick: 'sorry it`s not a sticker !!',
		Iv: 'Invalid link !!'
		},
		only: {
		group: 'Group special features !!',
		owner: 'Owner`s special features !!',
		admin: 'Admin special features !!',
		Badmin: 'Please make bot admin first !!'
		}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Dhani.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Dhani.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
		seconds = Number(seconds);
		var d = Math.floor(seconds / (3600 * 24));
		var h = Math.floor((seconds % (3600 * 24)) / 3600);
		var m = Math.floor((seconds % 3600) / 60);
		var s = Math.floor(seconds % 60);
		var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
		var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
		var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
		var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
		return dDisplay + hDisplay + mDisplay + sDisplay;
		};
		
//━━━━[ Button ]━━━━//

		const sendButton = async (from, context, fortext, but, mek) => {
		buttonMessages = {
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 1
		}
		Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
		quoted: ftrol
		})
		}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        Dhani.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
		jadinya = await Dhani.prepareMessage(from, img, image)
		buttonMessagesI = {
		imageMessage: jadinya.message.imageMessage,
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 4
		}
		Dhani.sendMessage(from, buttonMessagesI, buttonsMessage, {
		quoted: ftrol,
		contexInfo: ftrol
		})
        }
        const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
        kma = vid1
        mhan = await Dhani.prepareMessage(from, kma, video)
        const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5
        }
        Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━[ Gathering Fake ]━━━━//

        const fakeitem = (teks) => { Dhani.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./database/image/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${sayingtime} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
		const ftrol = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		orderMessage: {
		itemCount : 123,
		status: 1,
		surface : 1,
		message: `${sayingtime} ${pushname}`, 
		orderTitle: `${sayingtime} ${pushname}`,
		thumbnail: thumb, //Gambarnye
		sellerJid: '0@s.whatsapp.net' 
		}
		}
		}
		const ftok = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"productImage":{
		"mimetype": "image/jpeg",
		"jpegThumbnail": thumb //Gambarnye
		},
		"title": `${sayingtime} ${pushname}`, //Kasih namalu 
		"description": `${botname}`, 
		"currencyCode": "USD",
		"priceAmount1000": "2000",
		"retailerId": `${sayingtime} ${pushname}`,
		"productImageCount": 1
		},
		"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
		}
		const floc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		liveLocationMessage: {
		caption: `${sayingtime} ${pushname}`,
		jpegThumbnail: thumb
		}
		}
		}
		const fdoc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		documentMessage: {
		title: `${sayingtime} ${pushname}`, 
		jpegThumbnail: thumb
		}
		}
		}
		const fvid = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fgi = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'gifPlayback': 'true', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fvoc = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"audioMessage": {
		"mimetype":"audio/ogg; codecs=opus",
		"seconds": "99999",
		"ptt": "true"
		}
		} 
		}
		const fonceimg = {
		key: {
		fromMe: false,
		participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
		message: {
		imageMessage: {
		viewOnce: true
		},
		},
		};
		const foncevid = { 
		key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
		message: { 
		videoMessage: { 
		viewOnce: true
		},
		},
		};
        
//━━━━[ Storage ]━━━━//

        const hideTag = async function(from, text){
        let anu = await Dhani.groupMetadata(from)
        let members = anu.participants
        let ane = []
        for (let i of members){
        ane.push(i.jid)
        }
        Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./database/image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
        }
        const sendStickerFromUrl = async(to, url) => {
		var names = Date.now() / 10000;
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, './stik' + names + '.png', async function () {
		console.log('selesai');
		let filess = './stik' + names + '.png'
		let asw = './stik' + names + '.webp'
		exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
		let media = fs.readFileSync(asw)
		Dhani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
		fs.unlinkSync(filess)
		fs.unlinkSync(asw)
		});
		});
		}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		mime = res.headers['content-type']
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
		type = MessageType.video
		mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
		mime = Mimetype.mp4Audio
		}
		Dhani.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
		fs.unlinkSync(filename)
		});
		}   
		if (budy.includes("https://chat.whatsapp.com/")) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(` *「 GROUP LINK DETECTOR 」*\nYou sent the group chat link, sorry you were kicked from the group`)
		setTimeout(() => {
		c.groupRemove(from, [kic]).catch((e) => { reply(`BOTS MUST BE ADMIN`) })
		}, 0)
		}
		if (budy.length > 3500) {
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return
		reply('Mark read\n'.repeat(300))
		reply(`*「 VIRTEX DETECTOR 」*\n\nYou sent a virtex, sorry you were kicked from the group`)
		console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
		Dhani.groupRemove(from, [sender]) 
		}
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//━━━━[ All Feature ]━━━━//

case 'menu':
case 'help':
timestampe = speed();
latensie = speed() - timestampe
menu =`Eyy Hola! ${pushname} ${sayingtime}


╭─⬣ 「FECHA 」 ⬣
│🔖 ${date}
│🔖 ${waktu}
│🔖 ${sayingtime}
└⬣

╭─⬣ 「 INFO BOT 」 ⬣
│🔖 Nombre del bot: ${botname}
│🔖 Nombre del owner: ${ownername}
│🔖 número del owner: @${owner2.split("@")[0]}
│🔖 Runtime : ${runtime(process.uptime())}
│🔖 Speed : ${latensie.toFixed(4)} second
└⬣

╭─⬣ 「 INFO USER 」 ⬣
│🔖 Nombre de usuario: ${pushname}
│🔖 Número de usuario: @${senderr.split("@")[0]}
└⬣`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${ownername} || 2022_*`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '𝘼𝙇𝙇𝙈𝙀𝙉𝙐' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝙊𝙒𝙉𝙀𝙍' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner2]}}}, 'buttonsMessage')
break
case 'allmenu':
menu =`Eyy Hola! ${pushname} @${senderr.split("@")[0]} ${sayingtime}


╭─❒ *⌜ INFO MENU ⌟* ❒
° 式 ⃟ ${prefix}runtime
° 式 ⃟${prefix}speed
° 式 ⃟ ${prefix}rules
° 式 ⃟ ${prefix}ssweb *Url*
° 式 ⃟ ${prefix}delete *Reply to bot messages*
└❏

𝐒𝐢𝐠𝐮𝐞𝐧𝐨𝐬 𝐄𝐧 𝐧𝐮𝐞𝐬𝐭𝐫𝐚𝐬 𝐑𝐞𝐝𝐞𝐬 𝐬𝐨𝐜𝐢𝐚𝐥𝐞𝐬
• • • • • • • • •「◆」• • • • • • • • • 
🍒 _*<INSTAGRAM DEL GRUPO+ />*_
 •> _instagram.com/____etheral_

💌 _*<INSTAGRAM DE JACK+ />*_
 •> _instagram.com/jack_paymon/?hl=es_

💌 _*<INSTAGRAM DE KUIN+ />*_
 •> _instagram.com/w6y.x9v/?hl=es_
• • • • • • • • •「◆」• • • • • • • • •


╭─❒ *⌜ GROUP MENU ⌟* ❒
° 式 ⃟ ${prefix}antilink *on / off*
° 式 ⃟ ${prefix}welcome *on / off*
° 式 ⃟ ${prefix}antivirtex *on / off*
° 式 ⃟ ${prefix}promote *@tag*
° 式 ⃟ ${prefix}demote *@tag*
° 式 ⃟ ${prefix}add *628xxxx*
° 式 ⃟ ${prefix}kick *@tag / Reply*
° 式 ⃟ ${prefix}setppgroup *Reply Image*
° 式 ⃟ ${prefix}setdesc *Text*
° 式 ⃟ ${prefix}setname *Text*
° 式 ⃟ ${prefix}hidetag *Text*
° 式 ⃟ ${prefix}linkgroup
° 式 ⃟ ${prefix}listonline
° 式 ⃟ ${prefix}resetlinkgroup
° 式 ⃟ ${prefix}tagall
° 式 ⃟ ${prefix}infogroup
° 式 ⃟ ${prefix}open  notif
° 式 ⃟ ${prefix}close
° 式 ⃟ ${prefix}notif
° 式 ⃟ ${prefix}tagme
° 式 ⃟ ${prefix}leave
° 式 ⃟ ${prefix}totag
° 式 ⃟ ${prefix}wa.me
└❏
╭─❒ *⌜ JUEGOS MENU ⌟* ❒
° 式 ⃟ ${prefix}top5 
° 式 ⃟ ${prefix}shipping
° 式 ⃟ ${prefix}ppt 
° 式 ⃟ ${prefix}random
° 式 ⃟ ${prefix}pregunta
° 式 ⃟ ${prefix}rangay
└❏

╭─❒ *⌜ DOWNLOADER MENU ⌟* ❒
° 式 ⃟ ${prefix}ytmp3 *Link*
° 式 ⃟ ${prefix}ytmp4 *Link*
° 式 ⃟ ${prefix}tiktoknowm *Link*
° 式 ⃟ ${prefix}tiktokwm *Link*
└❏

╭─❒ *⌜ STICKER MENU ⌟* ❒
° 式 ⃟${prefix}sticker *Reply Image*
° 式 ⃟${prefix}toimg *Reply Sticker*
° 式 ⃟${prefix}attp
└❏

╭─❒ *⌜ MARKER MENU ⌟* ❒
° 式 ⃟${prefix}magma/Name*
° 式 ⃟${prefix}hallowen/Name*
° 式 ⃟${prefix}neonlight/Name*
° 式 ⃟${prefix}broken/Name*
° 式 ⃟${prefix}artpaper/Name*
└❏

╭─❒ ⌜ OWNER MENU ⌟ ❒
° 式 ⃟ ${prefix}bc *Text*
° 式 ⃟ ${prefix}bc2 *Text*
° 式 ⃟ ${prefix}bctext *Text*
° 式 ⃟ ${prefix}bcgc *Text*
° 式 ⃟ ${prefix}setnamebot *Text*
° 式 ⃟ ${prefix}setbiobot *Text*
° 式 ⃟ ${prefix}setppbot *text*
° 式 ⃟ ${prefix}demoteall
° 式 ⃟ ${prefix}promoteall
° 式 ⃟ ${prefix}fullkick
└❏`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${ownername} || 2022_*`, buttons: [{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break

//━━━━[ Feature Group ]━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Type :\n${prefix}welcome on to enable\n${prefix}welcome off to disable`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('```welcome is enable !!```')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully enable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('```welcome has been off before !!```')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully disable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antilink on to enable\n${prefix}antilink off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply('```Antilink is enable !!```')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully enable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antivirtex on to enable\n${prefix}antivirtex off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply('```Antivirtex is enable !!```')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully enable the antivirtex feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'groupopen':
case 'open':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successful opening group\`\`\` *${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'groupclose':
case 'close':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successfully closing the group\`\`\` *${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgroup':
case 'link':
case 'enlace':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Dhani.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Dhani.sendMessage(from, yeh, text, { quoted: mek })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you become admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
} else {
mentions(`Order received, @${mentioned[0].split('@')[0]} You become admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to not be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you are not an admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Order received, Lower : @${mentioned[0].split('@')[0]} Become a member`, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Who wants to add ??')
if (args[0].startsWith('08')) return reply('Use country code bro')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Dhani.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Failed to add target, maybe because in private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag the target you want to kick !");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Dhani.groupRemove(from, [anu]);
reply(mess.success);
} else {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Success in Changing the Group Name to\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Successfully Changed Group Description\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setppgroup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Dhani.downloadMediaMessage(encmedia)
Dhani.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Send or tag an image with the caption ${prefix}setpp`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogroup':
case 'groupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Dhani.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${from}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Group :* @${groupMetadata.owner.split('@')[0]}\n*Number of admins :* ${groupAdmins.length}\n*Number of participants :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Enable' : 'Disable'}\n*AntiLink :* ${isAntiLink ? 'Enable' : 'Disable'}\n*Desc :* \n\n${groupMetadata.desc}`
Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgroup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Dhani.query({json, expect200: true})
reply('Successfully reset group link')
break
case 'enline':
case 'online':
case 'listonine':
case 'listaenlinea':
case 'enlinea':                
                  if (!isGroup) return reply(`Solo para grupos`)
                  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                  let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
                  Dhani.sendMessage(from, '*Lista de usuarios en linea*:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, MessageType.text, {
                  quoted: mek,
                  contextInfo: { mentionedJid: online }
                  })
                  break
case 'tagme':
if (!isGroup) return reply(mess.only.group)
mentions(`Tag : @${sender.split("@")[0]}`, [sender], true)
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
setTimeout( () => {
Dhani.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Byee... , the bot will leave the group')
}, 0)
break

//━━━━[ Feature TextMaker ]━━━━//
case 'magma':
     if (args.length < 1) return reply('text?')
     mag = body.slice(6)
     magbuf = await getBuffer(`https://api.reysekha.xyz/api/textpro/magma?text=${mag}&apikey=apirey`)
     Dhani.sendMessage(from, magbuf, image, )
     break
case 'hallowen':
     if (args.length < 1) return reply('text?')
     ha = body.slice(9)
     habuf = await getBuffer(`https://api.reysekha.xyz/api/textpro/hallowen-text?text=${ha}&apikey=apirey`)
     Dhani.sendMessage(from, habuf, image, )
     break
case 'neonlight':
     if (args.length < 1) return reply('text?')
     ne = body.slice(10)
     hane = await getBuffer(`https://api.reysekha.xyz/api/textpro/neon-light?text=${ne}&apikey=apirey`)
     Dhani.sendMessage(from, hane, image, )
     break
case 'broken':
     if (args.length < 1) return reply('text?')
     bro = body.slice(7)
     brobef = await getBuffer(`https://api.reysekha.xyz/api/textpro/broken-glass?text=${bro}&apikey=apirey`)
     Dhani.sendMessage(from, brobef, image, )
     break
case 'artpaper':
     if (args.length < 1) return reply('text?')
     art = body.slice(9)
     brobef = await getBuffer(`https://api.reysekha.xyz/api/textpro/art-papper?text=${art}&apikey=apirey`)
     Dhani.sendMessage(from, brobef, image, )
     break


//━━━━[ Feature Downloader ]━━━━//

case 'ytmp3':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_audio is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=NisaaCantik`)
ytmp3 = await getBuffer(anu.result.url)
Dhani.sendMessage(from, ytmp4, audio, )
break
case 'ytmp4':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_video is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=NisaaCantik`)
ytmp4 = await getBuffer(anu.result.url)
Dhani.sendMessage(from, ytmp4, video, {caption:`Done`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'tiktoknowm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktoknowm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.result.nowatermark)
Dhani.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokwm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktokwm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.video_URL.vid_wm)
Dhani.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break


//━━━━[ case by jacksito]━━━━//

//--- Tag Random
case 'random':
	if (!isGroup) return reply(mess.only.group)	
			jds = []
			 jdii = groupMembers
			 diaa = jdii[Math.floor(Math.random() * jdii.length)]
			teks = `✅ El usuario elegido al azar es @${diaa.jid.split('@')[0]}`
			jds.push(diaa.jid)
			mentions(teks, jds, true)
			break
//--- ATTP

case 'attp':
	if (!isGroup) return reply(mess.only.group)	
if (args.length < 1) return reply('▢ Ejemplo de uso : /attp Hola')
reply ('▢ Espera un momento.')
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
Dhani.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'ttp':
if (args.length < 1) return reply('Y el texto?')
var teks = encodeURIComponent(args.join(' '))
const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
Dhani.sendMessage(from, ttp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break


//--- SHIP

case 'shipping':
    if (!isGroup) return reply(mess.only.group)
			ds = []
			jdii = groupMembers
			koss = groupMembers
			akuu = jdii[Math.floor(Math.random() * jdii.length)]
			 diaa = koss[Math.floor(Math.random() * koss.length)]
			teks = `*La pareja del dia* 
					
●❯────────────────❮●
@${akuu.jid.split('@')[0]}
❤️
@${diaa.jid.split('@')[0]}
●❯────────────────❮●`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
//--- TOP 5

case 'top5':

	          if (!isGroup) return reply(mess.only.group)
          if (!isGroup) return reply('Top5 en un chat? Te gusta la pija cierto. Este comando es solo para grupos.')
          member = []
          top5 = args.join(' ')
          const p1 = groupMembers
          const p2 = groupMembers
          const p3 = groupMembers
          const p4 = groupMembers
          const p5 = groupMembers
          const o1 = p1[Math.floor(Math.random() * p1.length)]
          const o2 = p2[Math.floor(Math.random() * p2.length)]
          const o3 = p3[Math.floor(Math.random() * p3.length)]
          const o4 = p4[Math.floor(Math.random() * p4.length)]
          const o5 = p5[Math.floor(Math.random() * p5.length)]
          teks = `
*Atencion estos son los 5*\n\n *Primer puesto para* @${o1.jid.split('@')[0]}\n\n*Segundo puesto para*@${o2.jid.split('@')[0]}\n\n*Tercer puesto para*@${o3.jid.split('@')[0]}\n\n*Cuarto puesto para* @${o4.jid.split('@')[0]}\n\n*Quinto puesto para* @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break

//--- Piedra Papel O Tijera 

case 'suit':
case 'ppt':
	if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply(`✳️ Seleccione piedra/papel/tijera\n\nEjemplo : *${prefix + command}* papel`)
			  if (args[0] === 'tijera' ) {
				gunting = [
				"┌──────────────\n├╼Tu *Tijera*\n├╼JackBot *Papel*\n├╼Ganaste🎊\n└──────────────",
				"┌──────────────\n├╼Tu *Tijera*\n├╼JackBot *Piedra*\n├╼Perdiste F 🙂\n└──────────────",
				"┌──────────────\n├╼Tu *Tijera*\n├╼JackBot *Tijera*\n├╼Empate 😏\n└──────────────"
				]
				gun = gunting[Math.floor(Math.random() * gunting.length)]
				reply(gun)
				} else if (args[0] === 'papel') {
				ker = [
				"┌──────────────\n├╼Tu *Papel*\n├╼JackBot *Piedra*\n├╼Ganaste🎉\n└──────────────",
				"┌──────────────\n├╼Tu *Papel*\n├╼JackBot *Tijera*\n├╼Perdiste 😎\n└──────────────",
				"┌──────────────\n├╼Tu *Papel*\n├╼JackBot *Papel*\n├╼Empate 😏\n└──────────────"
				]
				kertas = ker[Math.floor(Math.random() * ker.length)]
				reply(kertas)
				} else if (args[0] === 'piedra') {
				bat = [
				"┌──────────────\n├╼Tu *Piedra*\n├╼JackBot *Tijera*\n├╼Ganaste🎊\n└──────────────",
				"┌──────────────\n├╼Tu *Piedra*\n├╼JackBot *Papel*\n├╼Te gane jsjs 😎\n└──────────────",
				"┌──────────────\n├╼Tu *Piedra*\n├╼JackBot *Piedra*\n├╼Empate 😏\n└──────────────"
				]
				batu = bat[Math.floor(Math.random() * bat.length)]
				reply(batu)
				} else {
				reply('✳️ Seleccione piedra/papel/tijera')
				}
break


//Respuesta Falsa
case 'fake':
if (!isGroup) return reply(mess.only.group)	
if (args.length < 1) return reply(`✳️ *Uso del comamdo* :\n${prefix}fake @tag=msj=msjbot\n\n📌 *Ejemplo* : \n${prefix}fake @tagmember=hola=hola que hace`)
var gh = body.slice(7)

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("=")[0];
var target = gh.split("=")[1];
var bot = gh.split("=")[2];
Dhani.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
  
break

//--- chiste

case 'chiste':
	     if (!isGroup) return reply(mess.only.group)
            respuesta = [`¿Cuál es el colmo de un ciego?\n Enamorarse a primera vista.`, `*¿Qué le dijo un zapato a otro?* \n - Qué vida más arrastrada llevas. \n ¡MIRA LOS ZAPATOS QUE EXISTEN PARA ANDAR POR EL TECHO!`, `¿Qué le dijo un cable a otro cable? \n Somos los intocables.`, `*¿Qué le dijo batman al papel higiénico?* \n Tu eres el único que conoce mi baticueva.`, `¿Por qué llora un libro de matemáticas? \n ¡Porque tiene muchos problemas!`, `¿Qué está al final de todo? ¡La letra o!`, `¿Por qué el profe de música tiene una escalera? \n ¡Para poder llegar a las notas más altas!`, `¿Qué le dice una iguana a su hermana gemela? \n Somos iguanitas`, `*¿Cuál es el colmo del electricista?* \n ¡Que su mujer se llame Luz!`, `¿Cómo se dice pañuelo en japonés? \n Sacamoko`, `¿Cuál es el pez que huele mucho? \n ¡Peztoso!`, `¿Sabes cómo se queda un mago después de comer? \n Magordito` ]
            answer = respuesta[Math.floor(Math.random() * respuesta.length)]
            reply(answer)
            break


//--- Totag

case 'totag':
case 'tag':
	if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`Responde a una image/documento/gif/sticker/audio/video con ${prefix + comando}`)
}
break

//--- pregunta

case 'pregunta':
if (!isGroup) return reply(mess.only.group) 
respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ai una probabilidad del 99.99999999991.01%', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco','Nunca',]
answer = respuesta[Math.floor(Math.random() * respuesta.length)]
if (!q) return reply('Y la pregunta?')
reply(answer)
addFilter(from)
break

//━━━━[ fullkick ]━━━━//

case 'Fullkick':
           
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)            
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Dhani.groupRemove(from, members_id) 
break

//━━━━[ promoteall]━━━━//

case 'promoteall':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)  
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Dhani.groupMakeAdmin(from, members_id)
break

//━━━━[ demoteall ]━━━━//

case 'demoteall':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)  
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Dhani.groupDemoteAdmin(from, members_id)
break

//━━━━[ rankgay ]━━━━//

case 'rankgay':
	if (!isGroup) return reply(mess.only.group)
  
  if (args.length < 1) return Dhani.sendMessage(from, 'Escribe el nombre', text, {
quoted: mek
  })
  teks = body.slice(13)
  Dhani.updatePresence(from, Presence.composing)
  data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)
  hasil = `*Gay Detectado*\n‣ Nombre : *${args[0]}*\n‣ Porcentaje : *${data.persen}%*\n*${data.desc}*`
  reply(hasil)
  
  break

//━━━━[ notificacion ]━━━━//
case 'notif':

	if (!isGroupAdmins) return reply(mess.only.admin)
	Dhani.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${body.slice(7)}*`
	group = await Dhani.groupMetadata(from);
	member = group['participants']
	jids = [];
	member.map(async adm => {
	  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
	})
	options = {
	  text: teks,
	  contextInfo: {
	mentionedJid: jids
	  },
	  quoted: mek
	}
	await Dhani.sendMessage(from, options, text)
	break
	


//━━━━[ tovideo ]━━━━//

case 'tomp4':
	case 'tovid':
		case 'tovideo':
			if (!isGroup) return reply(mess.only.group)	
				if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
				ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				owgi = await Dhani.downloadAndSaveMediaMessage(ger)
				webp2mp4File(owgi).then(res=>{
				sendMediaURL(from,res.result,'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵??𝑇 🍡')
				})
				}else {
				reply('Responde a un stiker')
				}
				fs.unlinkSync(owgi)
				addFilter(from)
				break

//━━━━[ Link wa.me ]━━━━//
case 'wa.me':
case 'wame':
Dhani.updatePresence(from, Presence.composing)
options = {
text: `Link WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
  mentionedJid: [sender]
}
  }
  Dhani.sendMessage(from, options, text, {
quoted: mek
  })
  break


//━━━━[ chatprank ]━━━━//

	case 'chatprank':
		Dhani.updatePresence(from, Presence.composing)
		if (!isGroup) return reply(mess.only.group)		
		if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}chatprank p/unten`)
		tels = body.slice(11)
		var teks1 = tels.split("/")[0];
		var teks2 = tels.split("/")[1];
		hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
		Dhani.sendMessage(from, hasil, text, {
		  quoted: mek
		})
	  	break

//━━━━[ Bot ]━━━━//

		case 'bot':
			if (args.length < 1) return reply(`Bot ${pushname}`)
			teks = body.slice(5)
			try { 
			anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
			if (anu.error) return reply('No lo se')
			reply(anu.jawaban)
			} catch {
			  reply(mess.ferr)
			}
			break

//━━━━[ sider ]━━━━//

case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await Dhani.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `✅ Este Mensaje ah sido visto por:\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `📲 Hora: ` + moment(`${i.t}` * 1000).tz('Asia_Kolkata').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

//━━━━[ say ]━━━━//

case 'say':
    if(!value) return m.reply(msg.notext)
    Dhani.sendMessage(from, value, text)
    break


//𝐎𝐰𝐧𝐞𝐫 - 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭
case 'apagar':
case 'off':
            if (!isOwner) return reply(mess.only.ownerB)
            reply('Deja me apago al toque mi king')
            setTimeout( () => {
            Dhani.close() }, 3000)
            break

		case 'emoji':
		if (!q) return fakegroup('emojinya?')
		es = args.join(' ')
		emoji.get(`${qes}`).then(emoji => {
		teks = `${emoji.images[4].url}`
		sendStickerFromUrl(from,`${teks}`)	
		console.log(teks)
		       })
		.catch((err) => {
		reply('solo un emoji hermano xixixi'); 
		       })
		break

		case 'agif':
			ger = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
			var imgbb = require('imgbb-uploader')
			reply('*Espera un momento...*')
			owgi = await Dhani.downloadAndSaveMediaMessage(ger)
			data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
			anu = await getJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${api}&img=${data.display_url}`)
			result = await getBuffer(anu.result)
			Dhani.sendMessage(from, result, video, {quoted: ftoko, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒', mimetype: 'video/gif'})

		case 'takestick':
				if (!isQuotedSticker) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
				const stsam = body.slice(11)
				if (!stsam.includes('|')) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
				const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await Dhani.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = stsam.split('|')[0]
				const author = stsam.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				if (error) return reply('error')
				wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), floc)
				fs.unlinkSync(media)
				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break

		case 'robar':
			        if (!isGroup) return reply(mess.only.group)
					if (!isQuotedSticker) return reply(`*Tururuu.... y el stiker kbron?*`)
					const encmediia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const meidia = await Dhani.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
					exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('error')
					wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
					fs.unlinkSync(meidia)
					})
					break

					case 'lucky':
						a = '🍇'
						b = '🍎'
						c = '🍓'
						e = '🍑'
						f = '💰'
						g = '🥝'
						pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck = pw[Math.floor(Math.random() * pw.length)]
						pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck1 = pw1[Math.floor(Math.random() * pw1.length)]
						pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck2 = pw2[Math.floor(Math.random() * pw2.length)]
						pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck3 = pw3[Math.floor(Math.random() * pw3.length)]
						pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck4 = pw4[Math.floor(Math.random() * pw4.length)]
						pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck5 = pw5[Math.floor(Math.random() * pw5.length)]
						pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck6 = pw6[Math.floor(Math.random() * pw6.length)]
						pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck7 = pw7[Math.floor(Math.random() * pw7.length)]
						pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
						luck7 = pw7[Math.floor(Math.random() * pw7.length)]
						s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
						a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
						m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
						u = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
						╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
						╽ ┌──────────┐ ┃
						${s}
						┃ ├──────────┤ ┃
						${a}
						┃ ├──────────┤ ┃
						${m}
						╿ └──────────┘ ╿
						╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯`
						reply(`${u}`)
						break

						case 'soyyo':
							if (!isGroup) return reply(mess.only.group)
							try {
							ppimg = await Dhani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
							} catch {
							ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							nombredelwe = wa.getUserName(sender)
							teks = `‣ *Nombre* : ${nombredelwe}
							‣ *Número* : ${sender.split("@")[0]}
							‣ *Link* : wa.me/${sender.split("@")[0]}`
							its = await getBuffer (ppimg)
							Dhani.sendMessage(from, its, image, {
							quoted: fliveLoc, caption: teks, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
							})
                         break
 
						 case 'play':
							if (!isGroup) return reply(mess.only.group)
							if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
							reply('*Espere un momento...*')
							query = args.join(' ')
							assistant = fs.readFileSync('./src/img.jpg')
							try {
							get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay?apikey=ec35353a991a258b05876861&query=${query}`)
							get_result = get_result.result
							get_info = get_result.info
							ini_txt = ` *Titulo* : ${get_info.title}\n`
							ini_txt += `•Publicador : ${get_info.uploader}\n`
							ini_txt += `•Duracion : ${get_info.duration}\n`
							ini_txt += `°Vistas : ${get_info.view}\n`
							ini_txt += `°Like : ${get_info.like}\n`
							ini_txt += `°Dislike : ${get_info.dislike}\n`
							ini_txt += `°Descripcion :\n ${get_info.description}\n\n`
							ini_txt += `Si el audio no llega, puede descargar por aqui: :\n ${get_result.audio[3].link}\n\n`
							ini_txt += `Puede descargar tambien el video aqui: :\n ${get_result.video[0].link}\n`
							ini_buffer = await getBuffer(get_info.thumbnail)
							await Dhani.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
							get_audio = await getBuffer(get_result.audio[4].link)
							await Dhani.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${get_info.title}.mp3`, quoted: faud })
							get_audio = await getBuffer(get_result.audio[4].link)
							await Dhani.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, ptt: true, filename: `${get_info.title}.mp3`, quoted: faud })
							
							} catch {
							
							reply('Ocurrio un problema con el servidor *1*, Porfavor espera mientras pruebo en el servidor *2*')
							teks = args.join(' ')
							if (!teks.endsWith("-doc")){
							res = await yts(q).catch(e => {
							reply('_[ ! ] Lo siento, su busqueda no pudo ser completada_')
							})
							let thumbInfo = ` [ *${res.all[0].title}* ]
							*°Subido hace* ${res.all[0].ago}
							*°Vistas :* ${res.all[0].views}
							*°Duracion :* ${res.all[0].timestamp}
							*°Canal :* ${res.all[0].author.name}
							*°Link del Canal :* ${res.all[0].author.url}
							
							*_El archivo se esta enviando....._*
							`
							sendFileFromUrl(res.all[0].image, image, {quoted: sam, caption: thumbInfo})
							res = await y2mateA(res.all[0].url).catch(e => {
							reply('_[ ! ] Error del servidor_')
							})
							sendFileFromUrl(res[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', duration: 99999999999999, filename: res[0].output})
							sendFileFromUrl(res[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: 99999999999999, filename: res[0].output})
							}}
							break

//======== _-By Jacksito98_ ========\\
case 'inspeccionar':
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('*Este no es un link de WhatsApp...*')
if (!q) return reply('*🙄Y el link??...*')
sp = args[0]
jids = []
var net = sp.split('https://chat.whatsapp.com/')[1]
if (!net) return reply('Porfavor aegurate que el link sea de un grupo de whatsapp: *https://whatsapp.com/....*')
var { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Dhani.query({ 
json: ["query", "invite", net],
expect200:true })
let insSm = `_*Inspección By Jacksito98*_

🪀 *Id* : _${id}_

👤 *Creador del grupo:* ${owner ? `Owner : @${owner.split('@')[0]}` : 'Owner : -'}

*° Nombre del Grupo:* _${subject}_

*° Fecha de creacion:* ${Date(creation * 1000)}

*° Total de Miembros:* ${size}

${desc ? `*Descripcion:* ${desc}` : 'Desc : Sin descripcion'}

*° Id de la Descripcion:* ${descId}

${descOwner ? `° Descripcion cambiada por @${descOwner.split('@')[0]}` : 'Descripcion cambiada por : -'}\n\n*Fecha* : ${descTime ? `${Date(descTime * 1000)}` : '-'}\n\n*° Contactos agendados*\n`
for ( let y of participants) {
insSm += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Si' : 'No'}\n`
jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
}
jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
Dhani.sendMessage(from, insSm, MessageType.text, {quoted: fliveLoc})
break
		


//━━━━[ Feature Sticker ]━━━━//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`𝙀𝙣𝙫𝙞𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧\n𝘿𝙪𝙧𝙖𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙙𝙚 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 1 𝙖 9 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 🧃`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply sticker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Failed, when converting sticker to image')
buffer = fs.readFileSync(ran)
Dhani.sendMessage(from, buffer, image, {quoted: mek, caption: 'here'})
fs.unlinkSync(ran)
})
break

//━━━━[ Feature Owner ]━━━━//

case 'bc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('The text?')
anu = await Dhani.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝙈𝙀𝙉𝙐'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: '𝙊𝙒𝙉𝙀𝙍'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '𝘉 𝘳 𝘰 𝘢 𝘥 𝘤 𝘢 𝘴 𝘵',
buttons: buttonss,
headerType: 1
}
await Dhani.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fgi})
}
reply(`Broadcast Success`)
break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('text?')
anu100 = await Dhani.chats.all()
if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc100 = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu100) {
Dhani.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
}
reply('Broadcast Success')
} else {
for (let _ of anu100) {
Dhani.sendMessage(_.jid, 
{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
"footerText": `*_© ${ownername} || 2022_*\n*_${waktu}_*`,
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "𝙈𝙀𝙉𝙐"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Broadcast Success')
}
break
case 'bctext':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await Dhani.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, bc, image, { caption: `[ BROADCAST IMAGE ]\n\n${body.slice(4)}` })
}
reply('Broadcast Success')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}\n\n*_BROADCAST_*`)
}
reply('Broadcast Success')
}
break
case 'bcgc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await Dhani.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
Dhani.sendMessage(_.jid, bcgc, image, { caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Success broadcast group')
}
break
case 'clearall':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await Dhani.chats.all()
Dhani.setMaxListeners(25)
for (let _ of anu) {
Dhani.deleteChat(_.jid)
}
reply('Successfully delete all chat')
break
case 'setnamebot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Text?')
namebot = body.slice(11)
Dhani.updateProfileName(namebot)
reply(`Success in changing the name to *${body.slice(11)}*`)
break
case 'setbiobot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('text?')
bio = body.slice(10)
Dhani.setStatus(`${bio}`)
reply(`Success changing bio to *${body.slice(10)}*`)
break
case 'setppbot':
if (!isQuotedImage) return reply('Reply imagenya!')
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await Dhani.downloadAndSaveMediaMessage(enmediau)
await Dhani.updateProfilePicture(botNumber, mediau)
reply('_Successfully changing bot profile photo')
break

//━━━━[ Feature Other ]━━━━//

case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case 'ping':
case 'speed':
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *𝙎𝙋𝙀𝙀𝘿* 」\nresponder en${latensie.toFixed(4)} Segundos 💬`)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Ownernya ${botname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('*_Ese es mi dueño No molestar _*')
break
case 'ssweb':
case 'ss':
if (args.length < 1) return reply(`Where's the url bro?`)
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Dhani.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break
case 'd':
case 'del':
case 'delete':
Dhani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'rules':
menu = `*_RULES BOT_*

1.No envíe spam a los bots.
Sanciones: *Block*

2.No llames a los bots.
Sanciones: *Block*

3.No explote el bot.
Sanciones: *Block permanente*

Si entiende las reglas, por favor escriba *${prefix}menu* Para empezar!

──「 *${botname}* 」──`
fakeitem(menu)
break

//━━━━[ End of Features ]━━━━//

default:
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
