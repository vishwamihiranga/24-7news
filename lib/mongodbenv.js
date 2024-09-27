const mongoose = require('mongoose'),
  envVarSchema = new mongoose.Schema({
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: String,
      required: true,
    },
  }),
  activeGroupSchema = new mongoose.Schema({
    groupId: {
      type: String,
      required: true,
      unique: true,
    },
    lastNewsTitles: {
      type: [String],
      default: [],
    },
  }),
  ActiveGroup = mongoose.model('ActiveGroup', activeGroupSchema),
  EnvVar = mongoose.model('EnvVar', envVarSchema)
module.exports = EnvVar
ActiveGroup
