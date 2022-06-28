import { Router } from "express";
import * as routinesCtrl from "../controllers/routines.js"

const router = Router()

router.get('/new', routinesCtrl.new)
router.post('/', routinesCtrl.create)

export {
    router
}