import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)

router.post('/sessions/', isLoggedIn, profilesCtrl.createSession)

router.get('/sessions/:sessionId', isLoggedIn, profilesCtrl.showSession)

router.delete('/sessions/:sessionId', isLoggedIn, profilesCtrl.delete)

router.delete('/sessions/:sessionId/exercises/:exerciseId', isLoggedIn, profilesCtrl.delete)

router.post('/sessions/:sessionId/exercises', isLoggedIn, profilesCtrl.createExercise)

router.post('/sessions/:sessionId/exercises/:exerciseId/sets', isLoggedIn, profilesCtrl.createSet)

router.delete('/sessions/:sessionId/exercises/:exerciseId/sets/:setId', isLoggedIn, profilesCtrl.deleteSet)

router.patch('/sessions/:sessionId', isLoggedIn, profilesCtrl.finished)



export {
    router
}