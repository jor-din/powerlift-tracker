import { Profile } from "../models/profile.js";


function show(req, res){
    console.log(req.user.profile)
    Profile.findById(req.user.profile._id)
    .then(profile => {
        console.log(profile)
        const isSelf = profile._id.equals(req.user.profile._id)
        res.render("profiles/show", {
            profile,
            title: "Today's Workout",
            isSelf,
            currentSession: profile.sessions[profile.sessions.length-1]
        })
    })
}

function showSession(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        const session = profile.sessions.id(req.params.sessionId)
        const exercise = session.exercises.id(req.params.exerciseId)
        res.render("profiles/sessions/show", {
            profile,
            session,
            exercise,
            title: "Session"
        })

    })
}

function finished(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        const session = profile.sessions.id(req.params.sessionId)
        session.isFinished = true
        profile.save()
        .then(() => {
            res.redirect(`/profile/${req.user.profile._id}`)
        })

    })
}


function createExercise(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        const session = profile.sessions.id(req.params.sessionId)
        session.exercises.push(req.body)
        profile.save()
        .then(() => {
            res.redirect(`/profile/${req.user.profile._id}`)
        })
    })
}


function createSession(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        console.log(profile)
        profile.sessions.push(req.body)
        profile.save()
        res.redirect(`/profile/${req.user.profile._id}`)
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
            res.redirect(`/profile/${req.user.profile._id}`)
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profile/${req.user.profile._id}`)
    })
})
}

function createSet(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        const session = profile.sessions.id(req.params.sessionId)
        const exercise = session.exercises.id(req.params.exerciseId)
        exercise.sets.push(req.body)
        profile.save()
        .then(() => {
            res.redirect(`/profile/${req.user.profile._id}`)
        })
    })
}
    

function deleteSet(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        const session = profile.sessions.id(req.params.sessionId)
        const exercise = session.exercises.id(req.params.exerciseId)
        exercise.sets.remove(req.params.setId)
        profile.save()
        .then(() => {
            res.redirect(`/profile/${req.user.profile._id}`)
        })
    })
}


export{
    show,
    showSession,
    createSession,
    createExercise,
    deleteSession as delete,
    finished,
    createSet,
    deleteSet,
}
