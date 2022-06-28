import mongoose from "mongoose";

const Schema = mongoose.Schema

const routineSchema = new Schema ({
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
    },
    ROM: {
        type: Number,
        min: 0,
        max: 10
    }
}, {
    timestamps: true
})

const Routine = mongoose.model('Routine', routineSchema)

export {
    Routine
}