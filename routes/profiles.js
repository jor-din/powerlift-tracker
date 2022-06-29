import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/session/new', isLoggedIn, profilesCtrl.new)
router.post('/session', isLoggedIn, profilesCtrl.create)
router.delete('/session/:id', isLoggedIn, profilesCtrl.delete)
router.post('/session/:id/sets', isLoggedIn, profilesCtrl.createSet)
router.delete('/:id/session/:sessionId/sets/:setId', isLoggedIn, profilesCtrl.deleteSet)




export {
    router
}