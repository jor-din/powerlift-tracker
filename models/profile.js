import mongoose from 'mongoose'
import { Routine } from '../models/routine.js'

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
  records: recordSchema,
  routine: [{type: Schema.Types.ObjectId, ref: 'Routine'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
