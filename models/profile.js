import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recordSchema = new mongoose.Schema({
  name: String,
  date: {
    type: Date,
      default: function () {
        const today = new Date()
        const oneYear = today.getFullYear() + 1
        today.setFullYear(oneYear)
        return today
      }
  }
})

const exerciseSchema = new Schema ({
  name:{
    type: String,
},
  reps:{
      type: Number,
      min: 0
  },
  weight: {
      type: Number,
      min: 0
  }
})

const sessionSchema = new Schema ({
  name:{
      type: String,
  },
  exercises: [exerciseSchema]
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  records: [recordSchema],
  sessions: [sessionSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
