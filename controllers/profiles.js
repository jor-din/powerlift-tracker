import { Profile } from "../models/profile.js";


function show(req, res){
    Profile.findById(req.params.id)
    .then(profile => {
        res.render("profiles/show", {
            profile,
            title: 'Profile'
        })
       
    })
}

// function sessionIndex(req, res){
//     Profile.find({})
//     .then(routines => {
//         res.render('routines/index', {
//             title: 'All Workouts',
//             routines
//         })
//     })
// }
//Create new workout
function newSession(req, res){
    Profile.findById(req.user.profile)
    .then( profile => {
        res.render('profiles/sessions/new', {
            title: 'Add',
            sessions: profile.sessions
        })
    })
}

function createSession(req, res){
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    Profile.findById(req.user.profile)
    .then(profile => {
        console.log(profile)
        profile.sessions.push(req.body)
        profile.save()
        res.redirect(`/profile/${req.user.profile._id}/session/new`)
    })
    .catch(err => {
        console.log(err)
    })
}

function deleteSession(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        profile.sessions.remove({_id:req.params.sessionId})
        profile.save()
        .then(() => {
            res.redirect(`/profile/${req.user.profile._id}/session/new`)
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profile/${req.user.profile._id}/session/new`)
    })
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
    show,
    // sessionIndex,
    newSession as new,
    createSession,
    deleteSession as delete,
    createSet,
    deleteSet
}
