/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './sewqueen.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'rs-sew-queen 2.0.0 - Full Control',
    CHANNEL: 'https://github.com/JithulaBhasitha',
    SESSION: process.env._SEW_QUEEN_SESSION === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JaMEkwM3QraGk5MG1OMHVYU3F1eTB5aHdLSUFaNUZYbk9BOEhrZUNWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlJoeHFWaG9lc3IyNTZIQnl6VFZMMDVvdlZvVEp4cmNibGJBNVNxZ3BXOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT05jZE85WUJyQ0FVU3VHbjlwT1hUMmJVVFozV3NZcjJMMlc2MGlKS0U4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMWVzb3hDQWZwUUpqcWZVdUd4Z1N5ZFB1L2F2T0laK05ycDFGN0dGRlU0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KLzJ5aTNLMmZqR0lkd1NDYWF5RDRqeW9zNE5GT25uWVRWYmlPSkZMR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSdk0zQWttK0xieGJVRVF6OFhxZ0IwNElXUk1aSEtVc01YSiszRk94Q1k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKY0FTY3NDQ3hkM0RBSloyUU5wVm1IKzZWSjlsSG1TcHZRSzFXZzNSdzRKUmFkK3p4dCtubVltMzc2TWMyL01WbVkwcU95ZVQxY3RudEdvVlZPcnZEdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3NCwiYWR2U2VjcmV0S2V5IjoiZkFQQWRCalZhaUpTL3VnNmYwRjc4MW5Bbi9PVnFWempzblNDQ1B4TS9Nbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSGVDVVBWWnhUM0tXVGlDaGY2T0FZdyIsInBob25lSWQiOiJhNjNjMDYwZi1kZTc5LTRiNzUtOTU4Mi00NTI0NzFlNzNkYTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFFhMTBTNlRkVmIxMllkWXk1L1ZLSmVZRDljPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZU1YanFidWppYVl5cEVybEFVUDhVNmx4U009In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNajdvWm9DRVB1cnM2b0dHQWs9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRIVXJodEJaYURpWHBnaHBoTU0reVNxYzZNa2VidFZ1anoxcnJINmk4bVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkUvZVQyM0UyRXJjVWJEdHdOUWs5b3AwbzZQQW54NVBDeEZKSkFvSEZwRW5OTHUraWRPVEowNFVEdnZtVWw2THJhanBnaDAzQlhPQkdZVENXWUx1VEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwZ2Z6ekI5N3dJbU5OYlIzdVBuZnNnVk1vVlhlRzhRQlZ4blgwL1JJRVVjMkpweTVLajlrVngxcXNwNEdFSjkrdHcvdExiRlk4THpoZVllNXJsamtEUT09In0sIm1lIjp7ImlkIjoiOTQ3NzA0NjMxNDE6MjJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzA0NjMxNDE6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUIxSzRiUVdXZzRsNllJYVlURFBza3FuT2pKSG03VmJvODlhNngrb3ZKbSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5OTUzNDMzNn0=' : process.env._SEW_QUEEN_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    Bad_Word: process.env.BAD_KICK === undefined ? 'true' : process.env.BAD_KICK,
    PSW: process.env.BOT_MODE === undefined ? 'false' : process.env.BOT_MODE,
    PROXY: process.env.PROXY === undefined ? 'false' : process.env.PROXY,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    DEEPAI: process.env.DEEP_AI === undefined ? '09010100-625c-46c4-b226-8f9a5e6e548f' : process.env.DEEP_AI,
    ABT: process.env.AUTO_BİO_ABOUT === undefined ? 'Coded By Little Hacker' : process.env.AUTO_BİO_ABOUT,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.ibb.co/mCs8p89/cover.png' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    TEXT: process.env.TEXTTEXTTEXT === undefined ? 'SEWS' : process.env.TEXTTEXTTEXT.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'මම තාම මැරිලා නෑ යකෝ\nCoded By Little Hacker \n\n The X Bot \nhttps://github.com/LittleHacker999\n\n' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    VOICEFILTER: process.env.VOICE_REPLY === undefined ? false : convertToBool(process.env.VOICE_REPLY),
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AUTOSTICKER: process.env.AUTO_STICKER === undefined ? false : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './sewqueen.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    RRRRA: "393475528094-1415817281",
    RRRRB: "96176912958-1458298055",
    RRRRC: "393472769604-1446476993",
    RRASEW: "94785435462-1621751150",
    RRBSEW: "94785435462-1625490851",
    RRCSEW: "94785435462-1618586156",
    RRDSEW: "94776785357-1626432386",
    RRESEW: "94776785357-1626521320",
    RRFSEW: "94785435462-1618915104",
    SUPPORT: "94785435462-1627812354",
    SUPPORT2: "94785435462-1628835469",
    SUPPORT3: "94785435462-1628835633"
};
