const EnvVar = require('./mongodbenv'),
  readEnv = async () => {
    try {
      const _0x565e6e = await EnvVar.find({}),
        _0x46bc5d = {}
      return (
        _0x565e6e.forEach((_0x5872c9) => {
          _0x46bc5d[_0x5872c9.key] = _0x5872c9.value
        }),
        _0x46bc5d
      )
    } catch (_0x4ed96a) {
      console.error(
        'Error retrieving environment variables:' + _0x4ed96a.message
      )
      throw _0x4ed96a
    }
  },
  updateEnv = async (_0x2d3815, _0x475e31) => {
    try {
      const _0x1488f4 = await EnvVar.findOneAndUpdate(
        { key: _0x2d3815 },
        { value: _0x475e31 },
        {
          new: true,
          upsert: true,
        }
      )
      _0x1488f4
        ? console.log('Updated ' + _0x2d3815 + ' to ' + _0x475e31)
        : console.log('Environment variable ' + _0x2d3815 + ' not found')
    } catch (_0x165b78) {
      console.error('Error updating environment variable:' + _0x165b78.message)
      throw _0x165b78
    }
  }
module.exports = {
  readEnv: readEnv,
  updateEnv: updateEnv,
}
