const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Anshab*
*owner number wa.me/919061245363*
*instagram  : https://www.instagram.com/anshab_d_e_m_o_n?r=nametag*
*bot setting video : https://youtu.be/_D4ZYuUHXjs
*githublink       https://github.com/teddybot121/teddybot121*
*audio commads    https://github.com/teddybot121/teddybot121/tree/master/uploads*
*sticker commads  https://github.com/teddybot121/teddybot121/tree/master/uploads*
`}) 

}));
