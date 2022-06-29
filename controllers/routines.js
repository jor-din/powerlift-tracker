import { Routine } from "../models/routine.js";

function index(req, res){
    Routine.find({})
    .then(routines => {
        res.render('routines/index', {
            title: 'All Workouts',
            routines
        })
    })
}
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
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    Routine.create(req.body)
    .then(routine => {
        res.redirect('/routines/show')
    })
}

function deleteRoutine(req, res){
    Routine.findByIdAndDelete(req.params.id)
    .then(routine => {
        res.redirect('/routines/new')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/routines/new')
    })
}

function createSet(req, res){
    Routine.findById(req.params.id)
    .then(routine => {
        routine.sets.push(req.body)
        routine.save()
        .then(() => {
            res.redirect('/routines/new')
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/routines/new')
    })
}

function deleteSet(req, res){
    Routine.findById(req.params.routineId)
    .then(routine => {
        routine.sets.remove({_id:req.params.setId})
        routine.save()
        .then(() => {
            res.redirect('/routines/new')
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/routines/new')
    })
}

export{
    index,
    newRoutine as new,
    create,
    deleteRoutine as delete,
    createSet,
    deleteSet
}