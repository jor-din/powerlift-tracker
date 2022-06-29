import mongoose from "mongoose";

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

const routineSchema = new Schema ({
    name:{
        type: String,
    },
    sets: [setSchema]
}, {
    timestamps: true
})

const Routine = mongoose.model('Routine', routineSchema)

export {
    Routine
}