import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as routinesCtrl from "../controllers/routines.js"

const router = Router()


router.get('/new', isLoggedIn, routinesCtrl.new)
router.post('/', isLoggedIn, routinesCtrl.create)
router.delete('/:id', isLoggedIn, routinesCtrl.delete)
router.post('/:id/sets', isLoggedIn, routinesCtrl.createSet)
router.delete('/:routineId/sets/:setId', isLoggedIn, routinesCtrl.deleteSet)

export {
    router
}