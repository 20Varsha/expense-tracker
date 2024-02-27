const mongoose = require("mongoose");

const VirtualMeetingNote = new mongoose.Schema({
  project_name: {
    type: String,
  },
  name: {
    type: String
  },
  title: {
    type: String,
  },
  meeting_note: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  is_active: {
    type: Boolean,
    default: true
  },
});

module.exports = mongoose.model("VirtualMeeting", VirtualMeetingNote);
