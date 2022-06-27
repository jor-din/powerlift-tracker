import { Profile } from "../models/profile.js";
import {Routine} from "../models/routine.js";

function newWorkout(req, res) {
    res.render("profile/new", {
        title: "Add Workout"
    })
}


function index (req, res) {
    res.render('profiles/index', {
        profiles, // same as profiles: profiles
        name: req.query.name,
        user: req.user
})}

function show(req, res){
    Profile.findById(req.params.id)
    .then(profile => {
        res.render("profiles/show")
    })
}

export{
    index,
    newWorkout as new,
    show
}