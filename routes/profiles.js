import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:id/session/new', isLoggedIn, profilesCtrl.new)
router.post('/session', isLoggedIn, profilesCtrl.createSession)
router.delete('/session/:sessionId', isLoggedIn, profilesCtrl.delete)
router.post('/session/:sessionId/sets', isLoggedIn, profilesCtrl.createSet)
router.delete('/session/:sessionId/sets/:setId', isLoggedIn, profilesCtrl.deleteSet)




export {
    router
}