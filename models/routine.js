import mongoose from "mongoose";

const routineSchema = new Schema ({
    name: String, 
    reps:{
        type: Number,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    rpe: {
        type: Number,
        min: 0,
        max: 10
    },
}, {
    timestamps: true
})

const Routine = mongoose.model('Routine', routineSchema)

export {
    Routine
}