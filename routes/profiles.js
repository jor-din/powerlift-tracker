import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/sessions', isLoggedIn, profilesCtrl.createSession)
router.post('/sessions/:sessionId/exercises', isLoggedIn, profilesCtrl.createExercise)
router.post('/sessions/:sessionId/exercises/:exerciseId/sets', isLoggedIn, profilesCtrl.createSet)
router.delete('/sessions/:sessionId/exerciseId', isLoggedIn, profilesCtrl.delete)
router.delete('/sessions/:sessionId/exercises/:exerciseId/sets/:setId', isLoggedIn, profilesCtrl.deleteSet)



export {
    router
}