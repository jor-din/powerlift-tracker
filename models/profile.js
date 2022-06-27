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


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  records: [recordSchema],
  routines: {type: Schema.Types.ObjectId, ref: 'Routine'}
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
