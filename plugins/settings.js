const { updateEnv, readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command'),
  EnvVar = require('../lib/mongodbenv')
cmd(
  {
    pattern: 'settings',
    alias: ['setting', 's'],
    desc: 'Check bot online or not.',
    category: 'main',
    filename: __filename,
  },
  async (
    _0x5b99fa,
    _0x2bb1ff,
    _0x583842,
    {
      from: _0x2abc1b,
      quoted: _0xf46d9e,
      body: _0x36f35e,
      isCmd: _0x3b1c69,
      command: _0x3a6b08,
      args: _0x41b957,
      q: _0x14472b,
      isGroup: _0x133628,
      sender: _0xc1872f,
      senderNumber: _0x1813d8,
      botNumber2: _0x193519,
      botNumber: _0x389509,
      pushname: _0x3fcb89,
      isMe: _0x25dcf5,
      isOwner: _0x2410a5,
      groupMetadata: _0xb3e574,
      groupName: _0x5f0e96,
      participants: _0x434224,
      groupAdmins: _0x3eaa56,
      isBotAdmins: _0x85a374,
      isAdmins: _0x586671,
      reply: _0x12c509,
    }
  ) => {
    try {
      if (!_0x2410a5) {
        return
      }
      const _0x3146ff = await readEnv()
      let _0x214dff
      switch (_0x3146ff.MODE) {
        case 'public':
          _0x214dff =
            '\uD835\uDE7F\uD835\uDE84\uD835\uDE71\uD835\uDE7B\uD835\uDE78\uD835\uDE72\uD83C\uDF0E'
          break
        case 'private':
          _0x214dff =
            '\uD835\uDE7F\uD835\uDE81\uD835\uDE78\uD835\uDE85\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD83D\uDC64'
          break
        case 'groups':
          _0x214dff =
            '\uD835\uDE76\uD835\uDE81\uD835\uDE7E\uD835\uDE84\uD835\uDE7F \uD835\uDE7E\uD835\uDE7D\uD835\uDE7B\uD835\uDE88\uD83D\uDC65'
          break
        case 'inbox':
          _0x214dff =
            '\uD835\uDE78\uD835\uDE7D\uD835\uDE71\uD835\uDE7E\uD835\uDE87 \uD835\uDE7E\uD835\uDE7D\uD835\uDE7B\uD835\uDE88\uD83E\uDEC2'
          break
        default:
          _0x214dff =
            '\uD835\uDE84\uD835\uDE7D\uD835\uDE7A\uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD83D\uDED1'
      }
      let _0xeb128b =
          _0x3146ff.AUTO_READ_STATUS === 'true'
            ? '\u267B️ \uD835\uDE7E\uD835\uDE7D'
            : '\uD83D\uDEAB \uD835\uDE7E\uD835\uDE75\uD835\uDE75',
        _0x498095 =
          _0x3146ff.AUTO_REACT === 'true'
            ? '\u267B️ \uD835\uDE7E\uD835\uDE7D'
            : '\uD83D\uDEAB \uD835\uDE7E\uD835\uDE75\uD835\uDE75'
      const _0xcf4e2d = await _0x5b99fa.sendMessage(
        _0x2abc1b,
        {
          image: {
            url: 'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Settings.jpg?raw=true',
          },
          caption:
            'Queen Spriky MD Settings\n\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503\u256D\u2508\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2501\u2501\u2501\u2501\u2500\u2500\u2500\u256E\n\u2523\u2523Work Mode : *' +
            _0x214dff +
            '*\n\u2523\u2523Auto Status : *' +
            _0xeb128b +
            '*\n\u2523\u2523Auto React : *' +
            _0x498095 +
            '*\n\u2503\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251B\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251B\n> \uD83D\uDD17\uD835\uDE3E\uD835\uDE50\uD835\uDE4E\uD835\uDE4F\uD835\uDE4A\uD835\uDE48\uD835\uDE44\uD835\uDE55\uD835\uDE40  \uD835\uDE4E\uD835\uDE40\uD835\uDE4F\uD835\uDE4F\uD835\uDE44\uD835\uDE49\uD835\uDE42\uD835\uDDE6\uD83D\uDD17\u2935️\n\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503\u256D\u2508\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2501\u2501\u2501\u2501\u2500\u2500\u2500\u256E\n\n*_WORK TYPE_\u2935️*\n\u2523\u25231.1 PUBLIC WORK\n\u2523\u25231.2 PRIVATE WORK\n\u2523\u25231.3 GROUP ONLY\n\u2523\u25231.4 INBOX ONLY\n\n*_AUTO STATUS SEEN_\u2935️*\n\u2523\u25232.1 AUTO READ STATUS ON\n\u2523\u25232.2 AUTO READ STATUS OFF\n\n*_24/7 News Service_\u2935️*\n\u2523\u25233 Activate News Service\n\u2503\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251B\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251B',
        },
        { quoted: _0x2bb1ff }
      )
      _0x5b99fa.ev.on('messages.upsert', async (_0x4456ea) => {
        const _0x5940c4 = _0x4456ea.messages[0]
        if (!_0x5940c4.message || !_0x5940c4.message.extendedTextMessage) {
          return
        }
        const _0x4d4f20 = _0x5940c4.message.extendedTextMessage.text.trim()
        if (
          _0x5940c4.message.extendedTextMessage.contextInfo &&
          _0x5940c4.message.extendedTextMessage.contextInfo.stanzaId ===
            _0xcf4e2d.key.id
        ) {
          switch (_0x4d4f20) {
            case '1.1':
              if (!_0x2410a5) {
                return
              }
              _0x12c509('.update MODE:public'), _0x12c509('.restart')
              break
            case '1.2':
              if (!_0x2410a5) {
                return
              }
              _0x12c509('.update MODE:private'), _0x12c509('.restart')
              break
            case '1.3':
              if (!_0x2410a5) {
                return
              }
              _0x12c509('.update MODE:groups'), _0x12c509('.restart')
              break
            case '1.4':
              if (!_0x2410a5) {
                return
              }
              _0x12c509('.update MODE:inbox'), _0x12c509('.restart')
              break
            case '2.1':
              if (!_0x2410a5) {
                return
              }
              _0x12c509('.update AUTO_READ_STATUS:true')
              break
            case '2.2':
              if (!_0x2410a5) {
                return
              }
              _0x12c509('.update AUTO_READ_STATUS:false')
              break
            case '3':
              if (!_0x2410a5) {
                return
              }
              _0x12c509('.sprikynews')
              break
              sprikynes
            default:
              _0x12c509(
                'Invalid option. Please select a valid option\uD83D\uDD34'
              )
          }
        }
      })
    } catch (_0x5ccac4) {
      console.log(_0x5ccac4)
      _0x12c509('' + _0x5ccac4)
    }
  }
)
