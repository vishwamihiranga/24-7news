const {
    proto,
    downloadContentFromMessage,
    getContentType,
  } = require('@whiskeysockets/baileys'),
  fs = require('fs'),
  downloadMediaMessage = async (_0x3f66a9, _0x2d2c6c) => {
    _0x3f66a9.type === 'viewOnceMessage' &&
      (_0x3f66a9.type = _0x3f66a9.msg.type)
    if (_0x3f66a9.type === 'imageMessage') {
      var _0x279530 = _0x2d2c6c ? _0x2d2c6c + '.jpg' : 'undefined.jpg'
      const _0x4abc48 = await downloadContentFromMessage(_0x3f66a9.msg, 'image')
      let _0x47e27c = Buffer.from([])
      for await (const _0x53a9af of _0x4abc48) {
        _0x47e27c = Buffer.concat([_0x47e27c, _0x53a9af])
      }
      return fs.writeFileSync(_0x279530, _0x47e27c), fs.readFileSync(_0x279530)
    } else {
      if (_0x3f66a9.type === 'videoMessage') {
        var _0x343920 = _0x2d2c6c ? _0x2d2c6c + '.mp4' : 'undefined.mp4'
        const _0x18843a = await downloadContentFromMessage(
          _0x3f66a9.msg,
          'video'
        )
        let _0x2234ce = Buffer.from([])
        for await (const _0x219860 of _0x18843a) {
          _0x2234ce = Buffer.concat([_0x2234ce, _0x219860])
        }
        return (
          fs.writeFileSync(_0x343920, _0x2234ce), fs.readFileSync(_0x343920)
        )
      } else {
        if (_0x3f66a9.type === 'audioMessage') {
          var _0x1e3476 = _0x2d2c6c ? _0x2d2c6c + '.mp3' : 'undefined.mp3'
          const _0x52149e = await downloadContentFromMessage(
            _0x3f66a9.msg,
            'audio'
          )
          let _0x2363bb = Buffer.from([])
          for await (const _0x177162 of _0x52149e) {
            _0x2363bb = Buffer.concat([_0x2363bb, _0x177162])
          }
          return (
            fs.writeFileSync(_0x1e3476, _0x2363bb), fs.readFileSync(_0x1e3476)
          )
        } else {
          if (_0x3f66a9.type === 'stickerMessage') {
            var _0x109608 = _0x2d2c6c ? _0x2d2c6c + '.webp' : 'undefined.webp'
            const _0x269814 = await downloadContentFromMessage(
              _0x3f66a9.msg,
              'sticker'
            )
            let _0x22454b = Buffer.from([])
            for await (const _0x8a90d2 of _0x269814) {
              _0x22454b = Buffer.concat([_0x22454b, _0x8a90d2])
            }
            return (
              fs.writeFileSync(_0x109608, _0x22454b), fs.readFileSync(_0x109608)
            )
          } else {
            if (_0x3f66a9.type === 'documentMessage') {
              var _0x5b617c = _0x3f66a9.msg.fileName
                  .split('.')[1]
                  .toLowerCase()
                  .replace('jpeg', 'jpg')
                  .replace('png', 'jpg')
                  .replace('m4a', 'mp3'),
                _0x429d3e = _0x2d2c6c
                  ? _0x2d2c6c + '.' + _0x5b617c
                  : 'undefined.' + _0x5b617c
              const _0x1b2c30 = await downloadContentFromMessage(
                _0x3f66a9.msg,
                'document'
              )
              let _0x5adcf0 = Buffer.from([])
              for await (const _0x3d61b7 of _0x1b2c30) {
                _0x5adcf0 = Buffer.concat([_0x5adcf0, _0x3d61b7])
              }
              return (
                fs.writeFileSync(_0x429d3e, _0x5adcf0),
                fs.readFileSync(_0x429d3e)
              )
            }
          }
        }
      }
    }
  },
  sms = (_0x500d33, _0x63ad0) => {
    _0x63ad0.key &&
      ((_0x63ad0.id = _0x63ad0.key.id),
      (_0x63ad0.chat = _0x63ad0.key.remoteJid),
      (_0x63ad0.fromMe = _0x63ad0.key.fromMe),
      (_0x63ad0.isGroup = _0x63ad0.chat.endsWith('@g.us')),
      (_0x63ad0.sender = _0x63ad0.fromMe
        ? _0x500d33.user.id.split(':')[0] + '@s.whatsapp.net'
        : _0x63ad0.isGroup
        ? _0x63ad0.key.participant
        : _0x63ad0.key.remoteJid))
    if (_0x63ad0.message) {
      _0x63ad0.type = getContentType(_0x63ad0.message)
      _0x63ad0.msg =
        _0x63ad0.type === 'viewOnceMessage'
          ? _0x63ad0.message[_0x63ad0.type].message[
              getContentType(_0x63ad0.message[_0x63ad0.type].message)
            ]
          : _0x63ad0.message[_0x63ad0.type]
      if (_0x63ad0.msg) {
        _0x63ad0.type === 'viewOnceMessage' &&
          (_0x63ad0.msg.type = getContentType(
            _0x63ad0.message[_0x63ad0.type].message
          ))
        var _0x1ab4d8 =
            _0x63ad0.msg.contextInfo != null
              ? _0x63ad0.msg.contextInfo.participant
              : '',
          _0x3e8b38 =
            _0x63ad0.msg.contextInfo != null
              ? _0x63ad0.msg.contextInfo.mentionedJid
              : [],
          _0x380d5d = typeof _0x3e8b38 == 'string' ? [_0x3e8b38] : _0x3e8b38
        _0x380d5d != undefined ? _0x380d5d.push(_0x1ab4d8) : []
        _0x63ad0.mentionUser =
          _0x380d5d != undefined
            ? _0x380d5d.filter((_0x1503b2) => _0x1503b2)
            : []
        _0x63ad0.body =
          _0x63ad0.type === 'conversation'
            ? _0x63ad0.msg
            : _0x63ad0.type === 'extendedTextMessage'
            ? _0x63ad0.msg.text
            : _0x63ad0.type == 'imageMessage' && _0x63ad0.msg.caption
            ? _0x63ad0.msg.caption
            : _0x63ad0.type == 'videoMessage' && _0x63ad0.msg.caption
            ? _0x63ad0.msg.caption
            : _0x63ad0.type == 'templateButtonReplyMessage' &&
              _0x63ad0.msg.selectedId
            ? _0x63ad0.msg.selectedId
            : _0x63ad0.type == 'buttonsResponseMessage' &&
              _0x63ad0.msg.selectedButtonId
            ? _0x63ad0.msg.selectedButtonId
            : ''
        _0x63ad0.quoted =
          _0x63ad0.msg.contextInfo != undefined
            ? _0x63ad0.msg.contextInfo.quotedMessage
            : null
        if (_0x63ad0.quoted) {
          _0x63ad0.quoted.type = getContentType(_0x63ad0.quoted)
          _0x63ad0.quoted.id = _0x63ad0.msg.contextInfo.stanzaId
          _0x63ad0.quoted.sender = _0x63ad0.msg.contextInfo.participant
          _0x63ad0.quoted.fromMe = _0x63ad0.quoted.sender
            .split('@')[0]
            .includes(_0x500d33.user.id.split(':')[0])
          _0x63ad0.quoted.msg =
            _0x63ad0.quoted.type === 'viewOnceMessage'
              ? _0x63ad0.quoted[_0x63ad0.quoted.type].message[
                  getContentType(_0x63ad0.quoted[_0x63ad0.quoted.type].message)
                ]
              : _0x63ad0.quoted[_0x63ad0.quoted.type]
          _0x63ad0.quoted.type === 'viewOnceMessage' &&
            (_0x63ad0.quoted.msg.type = getContentType(
              _0x63ad0.quoted[_0x63ad0.quoted.type].message
            ))
          var _0x2bd9f0 =
              _0x63ad0.quoted.msg.contextInfo != null
                ? _0x63ad0.quoted.msg.contextInfo.participant
                : '',
            _0x272741 =
              _0x63ad0.quoted.msg.contextInfo != null
                ? _0x63ad0.quoted.msg.contextInfo.mentionedJid
                : [],
            _0x1ad77d = typeof _0x272741 == 'string' ? [_0x272741] : _0x272741
          _0x1ad77d != undefined ? _0x1ad77d.push(_0x2bd9f0) : []
          _0x63ad0.quoted.mentionUser =
            _0x1ad77d != undefined
              ? _0x1ad77d.filter((_0x48f5c9) => _0x48f5c9)
              : []
          _0x63ad0.quoted.fakeObj = proto.WebMessageInfo.fromObject({
            key: {
              remoteJid: _0x63ad0.chat,
              fromMe: _0x63ad0.quoted.fromMe,
              id: _0x63ad0.quoted.id,
              participant: _0x63ad0.quoted.sender,
            },
            message: _0x63ad0.quoted,
          })
          _0x63ad0.quoted.download = (_0x5d764d) =>
            downloadMediaMessage(_0x63ad0.quoted, _0x5d764d)
          _0x63ad0.quoted.delete = () =>
            _0x500d33.sendMessage(_0x63ad0.chat, {
              delete: _0x63ad0.quoted.fakeObj.key,
            })
          _0x63ad0.quoted.react = (_0x59f367) =>
            _0x500d33.sendMessage(_0x63ad0.chat, {
              react: {
                text: _0x59f367,
                key: _0x63ad0.quoted.fakeObj.key,
              },
            })
        }
      }
      _0x63ad0.download = (_0x56f35c) =>
        downloadMediaMessage(_0x63ad0, _0x56f35c)
    }
    return (
      (_0x63ad0.reply = (
        _0x574edf,
        _0x44234b = _0x63ad0.chat,
        _0x4fd057 = { mentions: [_0x63ad0.sender] }
      ) =>
        _0x500d33.sendMessage(
          _0x44234b,
          {
            text: _0x574edf,
            contextInfo: { mentionedJid: _0x4fd057.mentions },
          },
          { quoted: _0x63ad0 }
        )),
      (_0x63ad0.replyS = (
        _0x210eca,
        _0x132d2e = _0x63ad0.chat,
        _0x125327 = { mentions: [_0x63ad0.sender] }
      ) =>
        _0x500d33.sendMessage(
          _0x132d2e,
          {
            sticker: _0x210eca,
            contextInfo: { mentionedJid: _0x125327.mentions },
          },
          { quoted: _0x63ad0 }
        )),
      (_0x63ad0.replyImg = (
        _0x2fc9ed,
        _0x364816,
        _0x2c7689 = _0x63ad0.chat,
        _0x1f82a4 = { mentions: [_0x63ad0.sender] }
      ) =>
        _0x500d33.sendMessage(
          _0x2c7689,
          {
            image: _0x2fc9ed,
            caption: _0x364816,
            contextInfo: { mentionedJid: _0x1f82a4.mentions },
          },
          { quoted: _0x63ad0 }
        )),
      (_0x63ad0.replyVid = (
        _0x38f1ff,
        _0x24e510,
        _0x2d91d7 = _0x63ad0.chat,
        _0x48ee72 = {
          mentions: [_0x63ad0.sender],
          gif: false,
        }
      ) =>
        _0x500d33.sendMessage(
          _0x2d91d7,
          {
            video: _0x38f1ff,
            caption: _0x24e510,
            gifPlayback: _0x48ee72.gif,
            contextInfo: { mentionedJid: _0x48ee72.mentions },
          },
          { quoted: _0x63ad0 }
        )),
      (_0x63ad0.replyAud = (
        _0x5d672b,
        _0x19b6ce = _0x63ad0.chat,
        _0x4a54d1 = {
          mentions: [_0x63ad0.sender],
          ptt: false,
        }
      ) =>
        _0x500d33.sendMessage(
          _0x19b6ce,
          {
            audio: _0x5d672b,
            ptt: _0x4a54d1.ptt,
            mimetype: 'audio/mpeg',
            contextInfo: { mentionedJid: _0x4a54d1.mentions },
          },
          { quoted: _0x63ad0 }
        )),
      (_0x63ad0.replyDoc = (
        _0x4eb95f,
        _0x56bb2f = _0x63ad0.chat,
        _0x3c6bb3 = {
          mentions: [_0x63ad0.sender],
          filename: 'undefined.pdf',
          mimetype: 'application/pdf',
        }
      ) =>
        _0x500d33.sendMessage(
          _0x56bb2f,
          {
            document: _0x4eb95f,
            mimetype: _0x3c6bb3.mimetype,
            fileName: _0x3c6bb3.filename,
            contextInfo: { mentionedJid: _0x3c6bb3.mentions },
          },
          { quoted: _0x63ad0 }
        )),
      (_0x63ad0.replyContact = (_0x53124a, _0x4e9bde, _0x2b5afd) => {
        var _0x334e83 =
          'BEGIN:VCARD\nVERSION:3.0\nFN:' +
          _0x53124a +
          '\n' +
          'ORG:' +
          _0x4e9bde +
          ';\n' +
          'TEL;type=CELL;type=VOICE;waid=' +
          _0x2b5afd +
          ':+' +
          _0x2b5afd +
          '\n' +
          'END:VCARD'
        _0x500d33.sendMessage(
          _0x63ad0.chat,
          {
            contacts: {
              displayName: _0x53124a,
              contacts: [{ vcard: _0x334e83 }],
            },
          },
          { quoted: _0x63ad0 }
        )
      }),
      (_0x63ad0.react = (_0x2fb505) =>
        _0x500d33.sendMessage(_0x63ad0.chat, {
          react: {
            text: _0x2fb505,
            key: _0x63ad0.key,
          },
        })),
      _0x63ad0
    )
  }
module.exports = {
  sms: sms,
  downloadMediaMessage: downloadMediaMessage,
}
