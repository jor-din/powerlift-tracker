import mongoose from 'mongoose'

const Schema = mongoose.Schema

const setSchema = new Schema ({
  reps:{
    type: Number,
    min: 0
  },
  weight: {
    type: Number,
    min: 0
  }
})

const exerciseSchema = new Schema ({
  name:{
    type: String,
  },
  sets: [setSchema]
})

const sessionSchema = new Schema ({
  name:{
      type: String,
  },
  exercises: [exerciseSchema],
  isFinished: {type: Boolean, default: false}
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  sessions: [sessionSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
