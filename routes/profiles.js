import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get ('/sessions/:sessionId', isLoggedIn, profilesCtrl.showSession)
router.post('/sessions', isLoggedIn, profilesCtrl.createSession)
router.post('/sessions/:sessionId/exercises', isLoggedIn, profilesCtrl.createExercise)
router.post('/sessions/:sessionId/exercises/:exerciseId/sets', isLoggedIn, profilesCtrl.createSet)
router.delete('/sessions/:sessionId/exercises/:exerciseId', isLoggedIn, profilesCtrl.delete)
router.delete('/sessions/:sessionId/exercises/:exerciseId/sets/:setId', isLoggedIn, profilesCtrl.deleteSet)
router.patch('/sessions/:sessionId', isLoggedIn, profilesCtrl.finished)



export {
    router
}