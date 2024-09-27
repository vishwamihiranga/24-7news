const mongoose = require('mongoose'),
  config = require('../config'),
  EnvVar = require('./mongodbenv'),
  defaultEnvVariables = [
    {
      key: 'PREFIX',
      value: '.',
    },
    {
      key: 'AUTO_READ_STATUS',
      value: 'true',
    },
    {
      key: 'MODE',
      value: 'public',
    },
    {
      key: 'AUTHOR',
      value: 'Udavin Wijesundara',
    },
    {
      key: 'OWNER_REACT',
      value: 'false',
    },
    {
      key: 'AUTO_REACT',
      value: 'false',
    },
    {
      key: 'autoBioEnabled',
      value: 'true',
    },
  ],
  connectDB = async () => {
    try {
      await mongoose.connect(config.MONGODB)
      console.log('\uD83D\uDEDC MongoDB Connected \u2705')
      for (const _0x39b9a5 of defaultEnvVariables) {
        const _0x3d58ea = await EnvVar.findOne({ key: _0x39b9a5.key })
        !_0x3d58ea &&
          (await EnvVar.create(_0x39b9a5),
          console.log('\u2795 Created default env var: ' + _0x39b9a5.key))
      }
    } catch (_0x2a3dfb) {
      console.error(_0x2a3dfb.message)
      process.exit(1)
    }
  }
module.exports = connectDB
