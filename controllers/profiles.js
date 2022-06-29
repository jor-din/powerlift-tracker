import { Profile } from "../models/profile.js";


function show(req, res){
    Profile.findById(req.params.id)
    .then(profile => {
        const isSelf = profile._id.equals(req.user.profile._id)
        res.render("profiles/show", {
            profile,
            title: 'Profile',
            isSelf
        })
       
    })
}


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
    Profile.findById(req.user.profile)
    .then(profile => {
        let currSession = profile.sessions.id(req.params.sessionId)
        currSession.sets.push(req.body)
        profile.save()
        .then(() => {
            res.redirect(`/profile/${req.user.profile._id}/session/new`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profile/${req.user.profile._id}/session/new`)
    })
}

function deleteSet(req, res){
    Profile.findById(req.user.profile)
    .then(profile => {
        let currSession = profile.sessions.id(req.params.sessionId)
        currSession.sets.remove({_id:req.params.setId})
        profile.save()
        .then(() => {
            res.redirect(`/profile/${req.user.profile._id}/session/new`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profile/${req.user.profile._id}/session/new`)
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
