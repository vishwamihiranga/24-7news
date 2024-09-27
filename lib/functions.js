const axios = require('axios'),
  cheerio = require('cheerio'),
  path = require('path'),
  { tmpdir } = require('os'),
  fs = require('fs'),
  { spawn } = require('child_process'),
  getBuffer = async (_0x18c7ad, _0x2af295) => {
    try {
      _0x2af295 ? _0x2af295 : {}
      var _0x1f529d = await axios({
        method: 'get',
        url: _0x18c7ad,
        headers: {
          DNT: 1,
          'Upgrade-Insecure-Request': 1,
        },
        ..._0x2af295,
        responseType: 'arraybuffer',
      })
      return _0x1f529d.data
    } catch (_0x53c1ac) {
      console.log(_0x53c1ac)
    }
  },
  getGroupAdmins = (_0x4de5e3) => {
    var _0x44717a = []
    for (let _0x5d8b30 of _0x4de5e3) {
      _0x5d8b30.admin !== null ? _0x44717a.push(_0x5d8b30.id) : ''
    }
    return _0x44717a
  },
  getRandom = (_0x48ce3f) => {
    return '' + Math.floor(Math.random() * 10000) + _0x48ce3f
  },
  h2k = (_0x4a8a05) => {
    var _0x50f693 = ['', 'K', 'M', 'B', 'T', 'P', 'E'],
      _0x251c02 = (Math.log10(Math.abs(_0x4a8a05)) / 3) | 0
    if (_0x251c02 == 0) {
      return _0x4a8a05
    }
    var _0xd288b6 = _0x50f693[_0x251c02],
      _0x1bc7ee = Math.pow(10, _0x251c02 * 3),
      _0x32a20f = _0x4a8a05 / _0x1bc7ee,
      _0x10d632 = _0x32a20f.toFixed(1)
    if (/\.0$/.test(_0x10d632)) {
      _0x10d632 = _0x10d632.substr(0, _0x10d632.length - 2)
    }
    return _0x10d632 + _0xd288b6
  },
  isUrl = (_0x345990) => {
    return _0x345990.match(
      new RegExp(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
        'gi'
      )
    )
  },
  Json = (_0x128e67) => {
    return JSON.stringify(_0x128e67, null, 2)
  },
  runtime = (_0x3a03a4) => {
    _0x3a03a4 = Number(_0x3a03a4)
    var _0x228b40 = Math.floor(_0x3a03a4 / 86400),
      _0xc76c37 = Math.floor((_0x3a03a4 % 86400) / 3600),
      _0x2c2025 = Math.floor((_0x3a03a4 % 3600) / 60),
      _0x15058f = Math.floor(_0x3a03a4 % 60),
      _0x4683ab =
        _0x228b40 > 0
          ? _0x228b40 + (_0x228b40 == 1 ? ' day, ' : ' days, ')
          : '',
      _0xff70f4 =
        _0xc76c37 > 0
          ? _0xc76c37 + (_0xc76c37 == 1 ? ' hour, ' : ' hours, ')
          : '',
      _0x2379d7 =
        _0x2c2025 > 0
          ? _0x2c2025 + (_0x2c2025 == 1 ? ' minute, ' : ' minutes, ')
          : '',
      _0x44f09d =
        _0x15058f > 0
          ? _0x15058f + (_0x15058f == 1 ? ' second' : ' seconds')
          : ''
    return _0x4683ab + _0xff70f4 + _0x2379d7 + _0x44f09d
  },
  sleep = async (_0x105322) => {
    return new Promise((_0x37ece7) => setTimeout(_0x37ece7, _0x105322))
  },
  fetchJson = async (_0x519e39, _0x111ebf) => {
    try {
      _0x111ebf ? _0x111ebf : {}
      const _0x353587 = await axios({
        method: 'GET',
        url: _0x519e39,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        },
        ..._0x111ebf,
      })
      return _0x353587.data
    } catch (_0x328caa) {
      return _0x328caa
    }
  }
function toAudio(_0x197fa2, _0x3e21a0) {
  return ffmpeg(
    _0x197fa2,
    ['-vn', '-ac', '2', '-b:a', '128k', '-ar', '44100', '-f', 'mp3'],
    _0x3e21a0,
    'mp3'
  )
}
const webp2mp4 = async (_0x641579) => {
    let _0x12c251 = new FormData(),
      _0x28662d = typeof _0x641579 === 'string' && /https?:\/\//.test(_0x641579)
    _0x12c251.append('new-image-url', _0x28662d ? _0x641579 : '')
    _0x12c251.append('new-image', _0x28662d ? '' : _0x641579, 'image.webp')
    let _0x14e987 = await fetch('https://ezgif.com/webp-to-mp4', {
        method: 'POST',
        body: _0x12c251,
      }),
      _0x18546c = await _0x14e987.text(),
      { document: _0x3cf3c2 } = new JSDOM(_0x18546c).window,
      _0x542c35 = new FormData(),
      _0x3eeee2 = {}
    for (let _0x76ec8e of _0x3cf3c2.querySelectorAll('form input[name]')) {
      _0x3eeee2[_0x76ec8e.name] = _0x76ec8e.value
      _0x542c35.append(_0x76ec8e.name, _0x76ec8e.value)
    }
    let _0x5523ed = await fetch(
        'https://ezgif.com/webp-to-mp4/' + _0x3eeee2.file,
        {
          method: 'POST',
          body: _0x542c35,
        }
      ),
      _0x43a470 = await _0x5523ed.text(),
      { document: _0x18cec5 } = new JSDOM(_0x43a470).window
    return new URL(
      _0x18cec5.querySelector('div#output > p.outfile > video > source').src,
      _0x5523ed.url
    ).toString()
  },
  fancy = async (_0x45ad1f) => {
    try {
      const _0x10b103 = await axios.get('http://qaz.wtf/u/convert.cgi', {
          params: { text: _0x45ad1f },
        }),
        _0x30b984 = cheerio.load(_0x10b103.data),
        _0x1a4753 = []
      return (
        _0x30b984('table > tbody > tr').each(function () {
          _0x1a4753.push({
            name: _0x30b984(this).find('td:nth-child(1) > h6 > a').text(),
            result: _0x30b984(this).find('td:nth-child(2)').text().trim(),
          })
        }),
        _0x1a4753.map((_0x709c5c) => _0x709c5c.result).join('\n')
      )
    } catch (_0x151bf7) {
      console.error('Error fetching data:', _0x151bf7)
      throw _0x151bf7
    }
  }
function ffmpeg(_0x70869d, _0x4eccb7 = [], _0x3e57d0 = '', _0x328036 = '') {
  return new Promise(async (_0x211e77, _0x5b031e) => {
    try {
      let _0x360451 = path.join(tmpdir(), getRandom(_0x3e57d0)),
        _0x5f1ae6 = path.join(tmpdir(), getRandom(_0x328036))
      await fs.promises.writeFile(_0x360451, _0x70869d)
      const _0x5770c0 = spawn('ffmpeg', [
        '-y',
        '-i',
        _0x360451,
        ..._0x4eccb7,
        _0x5f1ae6,
      ])
        .on('error', _0x5b031e)
        .on('close', async (_0x399c61) => {
          try {
            await fs.promises.unlink(_0x360451)
            if (_0x399c61 !== 0) {
              _0x5b031e(
                new Error('FFmpeg process exited with code ' + _0x399c61)
              )
              return
            }
            const _0x325fec = await fs.promises.readFile(_0x5f1ae6)
            await fs.promises.unlink(_0x5f1ae6)
            _0x211e77(_0x325fec)
          } catch (_0x2964f9) {
            _0x5b031e(_0x2964f9)
          }
        })
    } catch (_0x4be527) {
      _0x5b031e(_0x4be527)
    }
  })
}
module.exports = {
  getBuffer: getBuffer,
  getGroupAdmins: getGroupAdmins,
  getRandom: getRandom,
  h2k: h2k,
  isUrl: isUrl,
  Json: Json,
  runtime: runtime,
  sleep: sleep,
  fetchJson: fetchJson,
  toAudio: toAudio,
  fancy: fancy,
  webp2mp4: webp2mp4,
  ffmpeg: ffmpeg,
}
