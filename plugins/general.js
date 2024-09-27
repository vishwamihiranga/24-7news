const config = require('../config'),
  { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command'),
  { sleep } = require('../lib/functions'),
  os = require('os'),
  { runtime } = require('../lib/functions')
cmd(
  {
    pattern: 'alive',
    desc: 'Check bot online or no.',
    category: 'general',
    react: '\u2764️',
    filename: __filename,
  },
  async (
    _0x541f72,
    _0x146324,
    _0x1ae360,
    {
      from: _0x1d26d0,
      quoted: _0xf9145a,
      body: _0xd9f4e6,
      isCmd: _0x41a61a,
      command: _0x2ca637,
      args: _0x282962,
      q: _0x290a4e,
      isGroup: _0x1bf20a,
      sender: _0x4af285,
      senderNumber: _0x4215e7,
      botNumber2: _0x491a0a,
      botNumber: _0x168e82,
      pushname: _0x1715e1,
      isMe: _0x5b3728,
      isOwner: _0x2d0ffd,
      groupMetadata: _0x13feb2,
      groupName: _0x52d86d,
      participants: _0x2bf8d7,
      groupAdmins: _0x1d0dd4,
      isBotAdmins: _0x733c61,
      isAdmins: _0x2abe32,
      reply: _0x11c2ad,
    }
  ) => {
    try {
      return await _0x541f72.sendMessage(
        _0x1d26d0,
        {
          image: {
            url: 'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Bot.jpg?raw=true',
          },
          caption:
            'Hey!\n*Queen Spriky WhatsApp Bot Is Alive*\nType *.menu* To See All Commands.\n\nJoin Our WhatsApp Group\n\nhttps://chat.whatsapp.com/Jx2dvOAzNaO3vm5bwVglyC',
        },
        { quoted: _0x146324 }
      )
    } catch (_0x3d30e7) {
      console.log(_0x3d30e7)
      _0x11c2ad('' + _0x3d30e7)
    }
  }
)
cmd(
  {
    pattern: 'restart',
    desc: 'restart the bot',
    react: '\uD83D\uDD04',
    category: 'general',
    filename: __filename,
  },
  async (
    _0x2d20e5,
    _0x315f45,
    _0x1da993,
    {
      from: _0x394425,
      quoted: _0x16c418,
      body: _0x392425,
      isCmd: _0x463323,
      command: _0x5ee445,
      args: _0x2c1a80,
      q: _0x14e3ff,
      isGroup: _0x259704,
      sender: _0x3c31ff,
      senderNumber: _0x2861af,
      botNumber2: _0x54c09e,
      botNumber: _0x3f1a1c,
      pushname: _0x2c33af,
      isMe: _0x404f8f,
      isOwner: _0x107da8,
      groupMetadata: _0x4c05ce,
      groupName: _0x565f82,
      participants: _0x98842e,
      groupAdmins: _0x189fff,
      isBotAdmins: _0x594725,
      isAdmins: _0x290144,
      reply: _0x3b5241,
    }
  ) => {
    try {
      if (!_0x107da8) {
        return
      }
      const { exec: _0x538d57 } = require('child_process')
      _0x3b5241('Bot Restarting...')
      await sleep(1500)
      _0x538d57('pm2 restart all')
    } catch (_0x31f2cd) {
      console.log(_0x31f2cd)
      _0x3b5241('' + _0x31f2cd)
      await _0x2d20e5.sendMessage(_0x394425, {
        react: {
          text: '\u274C',
          key: _0x315f45.key,
        },
      })
    }
  }
)
cmd(
  {
    pattern: 'menu',
    desc: 'Show list of available commands.',
    category: 'general',
    react: '\uD83E\uDDF8',
    filename: __filename,
  },
  async (
    _0x5b8203,
    _0x4dd1de,
    _0x576ad1,
    {
      from: _0x11200e,
      quoted: _0xd5faec,
      body: _0x25edcd,
      isCmd: _0x3c5cec,
      command: _0xb08a75,
      args: _0x233a75,
      q: _0x4b846c,
      isGroup: _0xc8461,
      sender: _0x56a942,
      senderNumber: _0x523c4a,
      botNumber2: _0x53cb5a,
      botNumber: _0x46a68a,
      pushname: _0x51f39d,
      isMe: _0x5d7189,
      isOwner: _0x30869a,
      groupMetadata: _0x2c2501,
      groupName: _0x19aed6,
      participants: _0x288a56,
      groupAdmins: _0x49ea07,
      isBotAdmins: _0x491743,
      isAdmins: _0x3e749e,
      reply: _0x2fbc3b,
    }
  ) => {
    try {
      const _0x436223 = await readEnv()
      for (let _0x146757 = 0; _0x146757 < commands.length; _0x146757++) {
        commands[_0x146757].pattern &&
          !commands[_0x146757].dontAddCommandList &&
          (_0x2afb0d[commands[_0x146757].category] +=
            '*Command:* ' +
            _0x436223.PREFIX +
            commands[_0x146757].pattern +
            '\n*Description:* ' +
            (commands[_0x146757].desc || 'No description available') +
            '\n*Use:* ' +
            (commands[_0x146757].use || 'Just type the command') +
            '\n\n')
      }
      let _0x1323df =
        '\uD83C\uDF1F *Hello ' +
        _0x51f39d +
        ', Welcome to Queen Spriky Bot!* \uD83D\uDC4B\n\n\uD83E\uDD16 *Bot Name:* Queen Spriky Bot  \n\uD83D\uDC64 *Owner Name:* Udavin Wijesundara  \n\uD83D\uDD16 *Prefix:* ' +
        _0x436223.PREFIX +
        '  \n\u23F1️ *Uptime:* ' +
        runtime(process.uptime()) +
        '  \n\uD83D\uDCBE *RAM Usage:* ' +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        'MB / ' +
        (os.totalmem() / 1024 / 1024).toFixed(2) +
        'MB  \n\uD83D\uDDA5️ *Host Name:* ' +
        os.hostname() +
        '\n\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n\n\uD83C\uDF10 *GENERAL COMMANDS* \uD83C\uDF10\n\n' +
        _0x2afb0d.general +
        '\n\n\uD83D\uDC51 *OWNER COMMANDS* \uD83D\uDC51\n\n' +
        _0x2afb0d.owner +
        '\n\n\uD83D\uDCF0 *News COMMANDS* \uD83D\uDCF0\n\n' +
        _0x2afb0d.news +
        '\n\n\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n\n\uD83C\uDF39 *Thank you for using Queen Spriky WhatsApp Bot!*\uD83C\uDF39\n\n> \uD83D\uDC68‍\uD83D\uDCBB *Developer:* Udavin Wijesundara\n'
      await _0x5b8203.sendMessage(
        _0x11200e,
        {
          image: {
            url: 'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Menu.jpg?raw=true',
          },
          caption: _0x1323df,
        },
        { quoted: _0x4dd1de }
      )
    } catch (_0x259063) {
      console.log(_0x259063)
      await _0x5b8203.sendMessage(_0x11200e, {
        react: {
          text: '\u274C',
          key: _0x4dd1de.key,
        },
      })
      _0x2fbc3b('' + _0x259063)
    }
  }
)
cmd(
  {
    pattern: 'system',
    alias: ['status', 'botinfo', 'host'],
    desc: 'Check uptime, memory, cpu, platform and more.',
    category: 'general',
    react: '\uD83D\uDCBB',
    filename: __filename,
  },
  async (
    _0x27d748,
    _0x33a2d6,
    _0x3a838d,
    {
      from: _0x4a8e31,
      quoted: _0x44126d,
      body: _0x14b9f8,
      isCmd: _0x383f19,
      command: _0x419bbd,
      args: _0x524460,
      q: _0x327499,
      isGroup: _0x134cde,
      sender: _0x5e99fd,
      senderNumber: _0x30c5ba,
      botNumber2: _0x41aef3,
      botNumber: _0x11d6cc,
      pushname: _0x3acb0d,
      isMe: _0x41a257,
      isOwner: _0x4bc775,
      groupMetadata: _0x7ff242,
      groupName: _0xa04197,
      participants: _0x126e1b,
      groupAdmins: _0x2e4a4d,
      isBotAdmins: _0x71c705,
      isAdmins: _0x5947bf,
      reply: _0xbdded6,
    }
  ) => {
    try {
      let _0x542398 =
        '*Uptime:* ' +
        runtime(process.uptime()) +
        '\n*Ram usage:* ' +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        'MB / ' +
        (os.totalmem() / 1024 / 1024).toFixed(2) +
        'MB\n*HostName:* ' +
        os.hostname() +
        '\n*Developer:* Udavin Wijesundara\n'
      return _0xbdded6(_0x542398)
    } catch (_0x5e5f49) {
      console.error(_0x5e5f49)
      await _0x27d748.sendMessage(_0x4a8e31, {
        react: {
          text: '\u274C',
          key: _0x33a2d6.key,
        },
      })
      await _0xbdded6('\u274C An error occurred: ' + _0x5e5f49.message)
    }
  }
)
cmd(
  {
    pattern: 'del',
    desc: 'delete message',
    react: '\uD83D\uDDD1️',
    category: 'main',
    use: '.del',
    filename: __filename,
  },
  async (
    _0x4ebe5a,
    _0x5ebb45,
    _0x212506,
    {
      from: _0x210152,
      l: _0xf1c5e4,
      quoted: _0x2cba40,
      body: _0x1e7f32,
      isCmd: _0x1a1278,
      command: _0x1da36a,
      args: _0x308cee,
      q: _0x29136f,
      isGroup: _0x43cf16,
      sender: _0x13ee3f,
      senderNumber: _0x15551c,
      botNumber2: _0xc81c24,
      botNumber: _0x3797ed,
      pushname: _0x30cb50,
      isSachintha: _0x2691fc,
      isSavi: _0x1dfc70,
      isSadas: _0x4d261e,
      isMani: _0x45129c,
      isMe: _0x482650,
      isOwner: _0x3389a7,
      groupMetadata: _0x12de32,
      groupName: _0xd4e8ef,
      participants: _0x52be5e,
      groupAdmins: _0x1345d2,
      isBotAdmins: _0x28d630,
      isAdmins: _0x47e125,
      reply: _0x5dba4c,
    }
  ) => {
    try {
      const _0x2381c9 = {
        remoteJid: _0x212506.chat,
        fromMe: false,
        id: _0x212506.quoted.id,
        participant: _0x212506.quoted.sender,
      }
      await _0x4ebe5a.sendMessage(_0x212506.chat, { delete: _0x2381c9 })
      await _0x4ebe5a.sendMessage(_0x210152, {
        react: {
          text: '\u2705',
          key: _0x5ebb45.key,
        },
      })
    } catch (_0x4741ac) {
      await _0x4ebe5a.sendMessage(_0x210152, {
        react: {
          text: '\u274C',
          key: _0x5ebb45.key,
        },
      })
      _0x5dba4c('Error !!')
      _0xf1c5e4(_0x4741ac)
    }
  }
)
cmd(
  {
    pattern: 'jid',
    desc: 'Get the JID of the current chat',
    react: '\uD83C\uDD94',
    category: 'main',
    use: '.jid',
    filename: __filename,
  },
  async (
    _0x56efb9,
    _0x21857b,
    _0x3217c9,
    {
      from: _0x322cb6,
      l: _0x48e192,
      quoted: _0x35e9c3,
      body: _0x404a4f,
      isCmd: _0x4210e2,
      command: _0x18fad9,
      args: _0x22837c,
      q: _0x42d151,
      isGroup: _0x558dc2,
      sender: _0x87d522,
      senderNumber: _0x827065,
      botNumber2: _0x57f16a,
      botNumber: _0x383e2c,
      pushname: _0x1a8167,
      isSachintha: _0x25fe27,
      isSavi: _0x1e53dd,
      isSadas: _0x87a96,
      isMani: _0x46560d,
      isMe: _0x5661ba,
      isOwner: _0x2a449f,
      groupMetadata: _0x49277b,
      groupName: _0x3e82cb,
      participants: _0x3e3cbc,
      groupAdmins: _0x39a931,
      isBotAdmins: _0x2bef5d,
      isAdmins: _0x39ae4c,
      reply: _0x1d77f3,
    }
  ) => {
    try {
      const _0x27d902 = _0x322cb6
      _0x1d77f3('' + _0x27d902)
      await _0x56efb9.sendMessage(_0x322cb6, {
        react: {
          text: '\u2705',
          key: _0x21857b.key,
        },
      })
    } catch (_0x8f90c2) {
      await _0x56efb9.sendMessage(_0x322cb6, {
        react: {
          text: '\u274C',
          key: _0x21857b.key,
        },
      })
      _0x1d77f3('Error while retrieving the JID!')
      _0x48e192(_0x8f90c2)
    }
  }
)
cmd(
  {
    pattern: 'about',
    desc: 'To get the bot informations.',
    react: '\uD83D\uDE38',
    category: 'general',
    filename: __filename,
  },
  async (
    _0x4c1210,
    _0x434fb9,
    _0x5d0187,
    {
      from: _0x42ec74,
      quoted: _0x12aaae,
      body: _0x460902,
      isCmd: _0x56dc4a,
      command: _0x4462f8,
      args: _0x4701f4,
      q: _0x43bfe6,
      isGroup: _0x167bcf,
      sender: _0x2d27c6,
      senderNumber: _0x94355f,
      botNumber2: _0x10f3ea,
      botNumber: _0x13bf0d,
      pushname: _0xb4b024,
      isMe: _0x5ec1e9,
      isOwner: _0x4c3b09,
      groupMetadata: _0x59987d,
      groupName: _0x3d5f77,
      participants: _0x4dfc4c,
      groupAdmins: _0x5d039c,
      isBotAdmins: _0xe21949,
      isAdmins: _0x59d522,
      reply: _0x5b2e21,
    }
  ) => {
    try {
      let _0x5f3a2e =
        ' *\uD83D\uDC4B\uD83D\uDC3C Hello ' +
        _0xb4b024 +
        '*\n                    \nI am Queen Spriky MD WhatsApp Bot\nDeveloped By Udavin'
      return await _0x4c1210.sendMessage(
        _0x42ec74,
        {
          image: {
            url: 'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Owner.jpg?raw=true',
          },
          caption: _0x5f3a2e,
        },
        { quoted: _0x434fb9 }
      )
    } catch (_0x530e24) {
      console.log(_0x530e24)
      _0x5b2e21('' + _0x530e24)
    }
  }
)
cmd(
  {
    pattern: 'owner',
    desc: 'owner the bot',
    category: 'main',
    react: '\uD83D\uDC81‍\u2642️',
    filename: __filename,
  },
  async (
    _0x54abd7,
    _0x407e65,
    _0x21754c,
    {
      from: _0x5d1bdc,
      quoted: _0x1d30ba,
      body: _0x2df4b2,
      isCmd: _0x44c4ba,
      command: _0x5c5c2a,
      args: _0x3b61ed,
      q: _0x39c840,
      isGroup: _0x1234b0,
      sender: _0x41b9ec,
      senderNumber: _0x10f076,
      botNumber2: _0x197c7e,
      botNumber: _0x381fef,
      pushname: _0x2d3e8f,
      isMe: _0x43393a,
      isOwner: _0x2a32da,
      groupMetadata: _0x176083,
      groupName: _0x543380,
      participants: _0xbec320,
      groupAdmins: _0xa87f3a,
      isBotAdmins: _0x30073a,
      isAdmins: _0x2275a6,
      reply: _0x57b2e0,
    }
  ) => {
    try {
      let _0x92e60 =
        '*\uD83D\uDC4B Hello ' +
        _0x2d3e8f +
        '*\n\n> *MY OWNER INFO* \n\n*\u26A1ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: UDAVIN*\n*\u26A1ɴᴜᴍʙᴇʀ* -: 94758900210*\n'
      await _0x54abd7.sendMessage(
        _0x5d1bdc,
        {
          image: {
            url: 'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Owner.jpg?raw=true',
          },
          caption: _0x92e60,
        },
        { quoted: _0x407e65 }
      )
    } catch (_0x2a4e07) {
      console.log(_0x2a4e07)
      _0x57b2e0('' + _0x2a4e07)
    }
  }
)
cmd(
  {
    pattern: 'ping',
    desc: "Check bot's response time.",
    category: 'main',
    react: '\u2705',
    filename: __filename,
  },
  async (
    _0x5f506f,
    _0x3a4c1b,
    _0x709a93,
    {
      from: _0x4a5c91,
      quoted: _0x4e580d,
      body: _0x163c3c,
      isCmd: _0x2c2005,
      command: _0x43901e,
      args: _0x4be8ce,
      q: _0x232cdb,
      isGroup: _0x2a9084,
      sender: _0x17e127,
      senderNumber: _0x50aee2,
      botNumber2: _0x4b5db0,
      botNumber: _0x5c5c04,
      pushname: _0x304834,
      isMe: _0x2c19e1,
      isOwner: _0x10cd96,
      groupMetadata: _0x23dfa2,
      groupName: _0x439e4c,
      participants: _0x52d11e,
      groupAdmins: _0x2f9f58,
      isBotAdmins: _0x37548e,
      isAdmins: _0x37bba3,
      reply: _0xecbe4d,
    }
  ) => {
    try {
      const _0x31c4e1 = Date.now(),
        _0xc81f13 = await _0x5f506f.sendMessage(_0x4a5c91, {
          text: '*Pinging...*',
        }),
        _0x3bf69b = Date.now(),
        _0x31d2c8 = _0x3bf69b - _0x31c4e1
      await _0x5f506f.sendMessage(
        _0x4a5c91,
        { text: '*\uD83D\uDCCD Ping : ' + _0x31d2c8 + 'ms*' },
        { quoted: _0xc81f13 }
      )
    } catch (_0x2cdf2f) {
      console.log(_0x2cdf2f)
      _0xecbe4d('' + _0x2cdf2f)
    }
  }
)
cmd(
  {
    pattern: 'repo',
    desc: 'repo the bot',
    category: 'main',
    react: '\uD83D\uDCE1',
    filename: __filename,
  },
  async (
    _0xc9b2a0,
    _0x5c30cc,
    _0xe948dd,
    {
      from: _0x16f62d,
      quoted: _0x3acca7,
      body: _0x237678,
      isCmd: _0xb4a3d2,
      command: _0x50b9a9,
      args: _0x2f97f4,
      q: _0x30984b,
      isGroup: _0x19d32f,
      sender: _0x56a2af,
      senderNumber: _0x95790b,
      botNumber2: _0x551949,
      botNumber: _0x3e8690,
      pushname: _0x247531,
      isMe: _0x5de053,
      isOwner: _0x53d654,
      groupMetadata: _0x4c3ded,
      groupName: _0x3aafaa,
      participants: _0x5a95ae,
      groupAdmins: _0x3fee84,
      isBotAdmins: _0xefbfbf,
      isAdmins: _0x4af42a,
      reply: _0x22302e,
    }
  ) => {
    try {
      let _0x44be5b =
        '*\uD83D\uDC4B Hello ' +
        _0x247531 +
        '*\n\n\uD83D\uDD17 \uD83D\uDCCDREPO LINK \u2764️‍\uD83D\uDD25\uD83D\uDC47\n\nhttps://github.com/uwtechshow-official/Queen-Spriky-MD\n\n\uD83D\uDCFA Please Subscribe to My YouTube Channel:\n\nhttps://www.youtube.com/@uwtechshow\n\n\uD83D\uDCE1 Follow My Official WhatsApp Channel:\n\nhttps://whatsapp.com/channel/0029VajvrA2ATRSkEnZwMQ0p\n\n\u2728 *Queen Spriky MD by Udavin*\n'
      await _0xc9b2a0.sendMessage(
        _0x16f62d,
        {
          image: {
            url: 'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Script.jpg?raw=true',
          },
          caption: _0x44be5b,
        },
        { quoted: _0x5c30cc }
      )
    } catch (_0x361e99) {
      console.log(_0x361e99)
      _0x22302e('' + _0x361e99)
    }
  }
)
