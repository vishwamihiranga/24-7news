const { updateEnv, readEnv } = require('../lib/database'),
  EnvVar = require('../lib/mongodbenv'),
  { cmd } = require('../command')
cmd(
  {
    pattern: 'update',
    alias: ['updateenv'],
    desc: 'Check and update environment variables',
    react: '\uD83D\uDD27',
    category: 'owner',
    filename: __filename,
  },
  async (
    _0x90c5c1,
    _0x25ad5e,
    _0x29629e,
    { from: _0x350176, q: _0x30d0fa, reply: _0x5bbb9e, isOwner: _0x5a4c30 }
  ) => {
    if (!_0x5a4c30) {
      return
    }
    if (!_0x30d0fa) {
      return _0x5bbb9e(
        '\uD83D\uDE47‍\u2642️ *Please provide the environment variable and its new value.*'
      )
    }
    const _0x4a1e54 = _0x30d0fa.indexOf(':'),
      _0x5bd16e = _0x30d0fa.indexOf(','),
      _0x443e2d = _0x4a1e54 !== -1 ? _0x4a1e54 : _0x5bd16e
    if (_0x443e2d === -1) {
      return _0x5bbb9e(
        '\uD83E\uDEE0 *Invalid format. Please use the format:* `.update KEY:VALUE`'
      )
    }
    const _0x5c37d5 = _0x30d0fa.substring(0, _0x443e2d).trim(),
      _0xc214ef = _0x30d0fa.substring(_0x443e2d + 1).trim(),
      _0x2bbbb1 = _0xc214ef
        .split(/\s+/)
        .filter((_0x163471) => _0x163471.trim()),
      _0x489503 = _0xc214ef,
      _0x58b75e =
        _0x2bbbb1.length > 1 ? _0x2bbbb1.slice(1).join(' ').trim() : '',
      _0x3d8fa4 = ['public', 'private', 'groups', 'inbox'],
      _0x48ce24 = _0x3d8fa4.includes(_0x58b75e) ? _0x58b75e : ''
    if (!_0x5c37d5 || !_0x489503) {
      return _0x5bbb9e(
        '\uD83E\uDEE0 *Invalid format. Please use the format:* `.update KEY:VALUE`'
      )
    }
    if (_0x5c37d5 === 'MODE' && !_0x3d8fa4.includes(_0x489503)) {
      return _0x5bbb9e(
        '\uD83D\uDE12 *Invalid mode. Valid modes are: ' +
          _0x3d8fa4.join(', ') +
          '*'
      )
    }
    if (
      _0x5c37d5 === 'AUTO_READ_STATUS' &&
      !['true', 'false'].includes(_0x489503)
    ) {
      return _0x5bbb9e(
        '\uD83D\uDE13 *Invalid value for AUTO_READ_STATUS. Please use `true` or `false`.*'
      )
    }
    try {
      const _0x19cc8d = await EnvVar.findOne({ key: _0x5c37d5 })
      if (!_0x19cc8d) {
        const _0x41ad8b = await EnvVar.find({}),
          _0x437df7 = _0x41ad8b
            .map((_0x1dbddb) => _0x1dbddb.key + ': ' + _0x1dbddb.value)
            .join('\n')
        return _0x5bbb9e(
          '\u274C *The environment variable ' +
            _0x5c37d5 +
            ' does not exist.*\n\n*Here are the existing environment variables:*\n\n' +
            _0x437df7
        )
      }
      await updateEnv(_0x5c37d5, _0x489503, _0x48ce24)
      _0x5bbb9e(
        '\u2705 *Environment variable updated.*\n\n\uD83D\uDDC3️ *' +
          _0x5c37d5 +
          '* \u27A0 ' +
          _0x489503 +
          ' ' +
          (_0x48ce24 ? '\n*Mode:* ' + _0x48ce24 : '')
      )
    } catch (_0x5506fa) {
      console.error('Error updating environment variable:' + _0x5506fa.message)
      _0x5bbb9e(
        '\uD83D\uDE47‍\u2642️ *Failed to update the environment variable. Please try again.*' +
          _0x5506fa
      )
    }
  }
)
