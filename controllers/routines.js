import { Routine } from "../models/routine.js";

function newRoutine(req, res){
    Routine.find({})
    .then(routines => {
        res.render('routines/new', {
            title: 'Add Workout',
            routines
        })
    })
}

function create(req, res){
    Routine.create(req.body)
    .then(routine => {
        res.redirect('/routines/new')
    })
}

export{
    newRoutine as new,
    create
}