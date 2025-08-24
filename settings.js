
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0IxOVdYQzZzb0ZweDQ2RUJYaFlaNWNRS3NFa0piR1FmcFlncjROblUxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHBGNkU1MTlOam91MHhBdzZSNFdrNzRUNmVoNzM5R3piWnBRVElaWjlocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRTMrQjdMYTRvNExtVE9tbFZCTWdTNHR1T3ZRMjIySlBzOExIdUUyUm5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTkg4L1kyQ2s4cnIzRkpFczVTbEVZd2dPVVNIVGtCaHcrUTJQSm01Y3hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdETzhvczhUMFR4QjBMdllUQUdrb0IwRkFOQWZyR25VaVpXNzNXZjF6bEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCUG9UbklxakJzV3MzVW9nZEVlSWtGNWYzc3A2WjEvMXlWTzJnSkMxZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0luN291UFN6TC9uTHMvY3cySXQ4cEthRDhRS1M2YVJ4TEIwbisybVQxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dvaExsak9hNlZPb21RdUN4eU1xbzJ3MWJCT1h5dkVZbWRja1hXZUhqQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp3dTJjSGpaZUdia1BqVWxlcEl4cDE1SUNDNEJGaWYyTFJheXUzU2ZlQWZQWWtPMVZiUHQ4anFTSXQ5MVJab0lrTWdsYXpxeHFBSDNuSGdNZCtxZ2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJEZ1lDRk1Bd1JFb28xbjdiS3hDUnJQTXNqMWxlYm1HVjREaXdMK3VYUFlVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc2MTUxNTc1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QTZFQTM5RUM3OTJBOTY0ODcxQ0I4ODM5QzI3RDcyNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDc0MTA4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzN0NYZndkRFQ3cWRuU0FMdUE1TEhBIiwicGhvbmVJZCI6IjQ1MWM2OGUzLTNjMmItNGI5ZS1iZmEzLTI4MGQwNTcwZTE5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SmlCLy9kRlNXQXpFMUliK3dON1FQZ1VrSzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazJBVzY5REkwZG5XRUpBT0JMRTFEYTNKeXpVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyNTY3NjE1MTU3NTI6OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzMjk4OTUyNzE1ODc5ODo4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1RucFpnSEVPbWdyc1VHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOWNOdTdKdERpQ1NibWs3N0E2QmZObFBmdGowMmpZQzRGSmR4ZlBRQUN5bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUCtIVUFBWlNYdGtjczFzbzJlbjUyejN4aUhFRkRwdVRRckU0ckVXU1htNHVBdklSNzZZeWN0QkZOR3ZGWXloZStXN2k1R3RrZlErT2UyRVlXVUxTQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjE4UEVIZ2lNMGtuL0wxRFNKSE9MeUg3cTJrMUFoeXNBMFQ1ckIxRTJZLy8xY2ZPRkI1STY3eW9GZExKQkN0TDJyeWRvYklNZS9GWXZkcTRXTCtxdGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzYxNTE1NzUyOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlhEYnV5YlE0Z2ttNXBPK3dPZ1h6WlQzN1k5Tm8yQXVCU1hjWHowQUFzcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDc0MTAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBsRCJ9",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,🤗,💗,😎,❤️,🧡,😬,💚,🤸,💜,🤎,🖤,🤭",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "256761515752",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "osbert123",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 

     DEV: process.env.DEV || "256761515752",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
