const config = require('../config'),
  { exec } = require('child_process'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'leavegc',
    desc: 'Make the bot leave the group.',
    category: 'owner',
    react: '\uD83D\uDC64',
    filename: __filename,
  },
  async (
    _0x13188d,
    _0x18a882,
    _0xb79b71,
    { from: _0x410f69, reply: _0x122a50 }
  ) => {
    try {
      if (!isOwner) {
        return
      }
      return (
        await _0x13188d.groupLeave(_0x410f69),
        await _0x13188d.sendMessage(
          _0x410f69,
          { text: 'Bot has left the group.' },
          { quoted: _0x18a882 }
        )
      )
    } catch (_0x259c98) {
      return (
        console.log(_0x259c98),
        await _0x13188d.sendMessage(_0x410f69, {
          react: {
            text: '\u274C',
            key: _0x18a882.key,
          },
        }),
        _0x122a50('Error: ' + _0x259c98.message)
      )
    }
  }
)
cmd(
  {
    pattern: 'setbio',
    desc: "Set bot's profile bio.",
    react: '\uD83D\uDC64',
    use: '.setbio <New Bio>',
    category: 'owner',
    filename: __filename,
  },
  async (
    _0x3e80b9,
    _0x4623c3,
    _0x1c1af4,
    { from: _0x41b4ba, args: _0x3e9970, reply: _0x3f1cc0 }
  ) => {
    try {
      if (_0x41b4ba !== config.ownerNumber || !config.BotNumber) {
        return _0x3f1cc0('You are not authorized to use this command.')
      }
      if (_0x3e9970.length === 0) {
        return _0x3f1cc0('Please provide a bio text.')
      }
      const _0x50e5ab = _0x3e9970.join(' ')
      return (
        await _0x3e80b9.updateProfileStatus(_0x50e5ab),
        await _0x3f1cc0('Profile bio updated successfully.')
      )
    } catch (_0x5beecf) {
      return (
        console.log(_0x5beecf),
        await _0x3e80b9.sendMessage(_0x41b4ba, {
          react: {
            text: '\u274C',
            key: _0x4623c3.key,
          },
        }),
        _0x3f1cc0('Error: ' + _0x5beecf.message)
      )
    }
  }
)
cmd(
  {
    pattern: 'join',
    desc: 'joins group by link',
    react: '\uD83D\uDC65',
    category: 'owner',
    use: '<group link.>',
  },
  async (
    _0x1e10ba,
    _0x5e27ad,
    _0x18b7d5,
    {
      from: _0xc719c5,
      l: _0x4f1b79,
      quoted: _0x2303b2,
      body: _0x13ee67,
      isCmd: _0x71243e,
      command: _0x4efdee,
      args: _0x4890a0,
      q: _0x2e9318,
      isGroup: _0x51ad90,
      sender: _0x1497df,
      senderNumber: _0xa9536b,
      botNumber2: _0x252573,
      botNumber: _0x15dfb1,
      pushname: _0x56c196,
      isSachintha: _0x3e32ce,
      isSavi: _0x4ae1bb,
      isSadas: _0x167bac,
      isMani: _0x42a64b,
      isMe: _0x4ab375,
      isOwner: _0x47fb44,
      groupMetadata: _0x1b2268,
      groupName: _0x319bb,
      participants: _0x35e5a2,
      groupAdmins: _0x349423,
      isBotAdmins: _0x27d3f2,
      isAdmins: _0x5d6026,
      reply: _0x59b121,
    }
  ) => {
    if (
      !_0x47fb44 &&
      !_0x3e32ce &&
      !_0x4ae1bb &&
      !_0x167bac &&
      !_0x42a64b &&
      !_0x4ab375
    ) {
      return
    }
    try {
      if (!_0x47fb44) {
        return
      }
      if (!_0x2e9318) {
        return _0x59b121('Please give me Group Link')
      }
      if (
        !_0x2e9318.split(' ')[0] &&
        !_0x2e9318.split(' ')[0].includes('whatsapp.com')
      ) {
        _0x59b121('Link Invalid, Please Send a valid whatsapp Group Link!')
      }
      let _0x1dd573 = _0x2e9318
        .split(' ')[0]
        .split('https://chat.whatsapp.com/')[1]
      await _0x1e10ba
        .groupAcceptInvite(_0x1dd573)
        .then((_0x33a407) => _0x59b121('\uD83D\uDFE9Joined Group'))
        .catch((_0x108e32) => _0x59b121('Error in Joining Group'))
    } catch (_0x26c2ef) {
      await _0x1e10ba.sendMessage(_0xc719c5, {
        react: {
          text: '\u274C',
          key: _0x5e27ad.key,
        },
      })
      _0x59b121('Error !!')
      _0x4f1b79(_0x26c2ef)
    }
  }
)
cmd(
  {
    pattern: 'shutdown',
    desc: 'Shutdown the bot.',
    category: 'owner',
    react: '\uD83D\uDED1',
    filename: __filename,
  },
  async (
    _0x5b4020,
    _0x4e2e54,
    _0x33776c,
    { from: _0x83ab4f, isOwner: _0x37c2a3, reply: _0x48c3e8 }
  ) => {
    if (!_0x37c2a3) {
      return _0x48c3e8('You are not the owner!')
    }
    _0x48c3e8('\uD83D\uDED1 Shutting down...').then(() => process.exit())
  }
)
cmd(
  {
    pattern: 'broadcast',
    desc: 'Broadcast a message to all groups.',
    category: 'owner',
    react: '\uD83D\uDCE2',
    filename: __filename,
  },
  async (
    _0x5dc0af,
    _0x3ab28b,
    _0xf525c6,
    { from: _0x19de1d, isOwner: _0x17ddbc, args: _0x3684e5, reply: _0x4003f9 }
  ) => {
    if (!_0x17ddbc) {
      return _0x4003f9('You are not the owner!')
    }
    if (_0x3684e5.length === 0) {
      return _0x4003f9('\uD83D\uDCE2 Please Provide The Message')
    }
    const _0x211673 = _0x3684e5.join(' '),
      _0x4d3cb9 = Object.keys(await _0x5dc0af.groupFetchAllParticipating())
    for (const _0x52a112 of _0x4d3cb9) {
      await _0x5dc0af.sendMessage(
        _0x52a112,
        { text: _0x211673 },
        { quoted: _0x3ab28b }
      )
    }
    _0x4003f9('\uD83D\uDCE2 Message Sent For All')
  }
)
cmd(
  {
    pattern: 'setpp',
    desc: 'Set bot profile picture.',
    category: 'owner',
    react: '\uD83D\uDDBC️',
    filename: __filename,
  },
  async (
    _0x325b95,
    _0x2ab0f9,
    _0x579ccf,
    { from: _0x141831, isOwner: _0x346fff, quoted: _0x2e7568, reply: _0x26ccb3 }
  ) => {
    if (!_0x346fff) {
      return _0x26ccb3('You are not the owner!')
    }
    if (!_0x2e7568 || !_0x2e7568.message.imageMessage) {
      return _0x26ccb3('Please Reply With An Image')
    }
    try {
      const _0xfd8929 = await _0x325b95.downloadMediaMessage(_0x2e7568)
      await _0x325b95.updateProfilePicture(_0x325b95.user.jid, {
        url: _0xfd8929,
      })
      _0x26ccb3('\uD83D\uDDBC️ Updated Succcessfully')
    } catch (_0x4d1595) {
      _0x26ccb3('\u274C Error ' + _0x4d1595.message)
    }
  }
)
cmd(
  {
    pattern: 'block',
    desc: 'Block a user.',
    category: 'owner',
    react: '\uD83D\uDEAB',
    filename: __filename,
  },
  async (
    _0x3ff2eb,
    _0x2d25de,
    _0x32cc7f,
    { from: _0x267ec1, isOwner: _0x164aa7, quoted: _0x10539b, reply: _0x18ac24 }
  ) => {
    if (!_0x164aa7) {
      return _0x18ac24('You are not the owner!')
    }
    if (!_0x10539b) {
      return _0x18ac24('Please Reply With A User')
    }
    const _0x81b4ab = _0x10539b.sender
    try {
      await _0x3ff2eb.updateBlockStatus(_0x81b4ab, 'block')
      _0x18ac24('\uD83D\uDEAB User ' + _0x81b4ab + ' Blocked Succcessfully.')
    } catch (_0x517339) {
      _0x18ac24('\u274C Error: ' + _0x517339.message)
    }
  }
)
cmd(
  {
    pattern: 'unblock',
    desc: 'Unblock a user.',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (
    _0x4ae9a1,
    _0x55133e,
    _0x17aa7b,
    { from: _0x1e760e, isOwner: _0x4f3d74, quoted: _0x120c55, reply: _0x1ff1ce }
  ) => {
    if (!_0x4f3d74) {
      return _0x1ff1ce('You are not the owner!')
    }
    if (!_0x120c55) {
      return _0x1ff1ce('Please Reply With A User')
    }
    const _0x3c992f = _0x120c55.sender
    try {
      await _0x4ae9a1.updateBlockStatus(_0x3c992f, 'unblock')
      _0x1ff1ce('\u2705 User ' + _0x3c992f + ' Unblocked Succcessfully.')
    } catch (_0x33009c) {
      _0x1ff1ce('\u274C Error ' + _0x33009c.message)
    }
  }
)
cmd(
  {
    pattern: 'clearchats',
    desc: 'Clear all chats from the bot.',
    category: 'owner',
    react: '\uD83E\uDDF9',
    filename: __filename,
  },
  async (
    _0x36a311,
    _0x1cd90b,
    _0xc71b82,
    { from: _0x5ed0e4, isOwner: _0x1aaae4, reply: _0xb10aba }
  ) => {
    if (!_0x1aaae4) {
      return _0xb10aba('You are not the owner!')
    }
    try {
      const _0x285e77 = _0x36a311.chats.all()
      for (const _0x105e1c of _0x285e77) {
        await _0x36a311.modifyChat(_0x105e1c.jid, 'delete')
      }
      _0xb10aba('\uD83E\uDDF9 Cleared All Chats Succcessfully.')
    } catch (_0x47e7c9) {
      _0xb10aba('\u274C Error: ' + _0x47e7c9.message)
    }
  }
)
