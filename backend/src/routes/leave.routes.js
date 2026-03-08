import express from "express"
import authMiddleware from "../middleware/auth.middleware.js"

import {
  applyLeave,
  getMyLeaves,
  getAllLeaves,
  updateLeaveStatus
} from "../controller/leave.controller.js"

const router = express.Router()

router.post("/", authMiddleware, applyLeave)

router.get("/my", authMiddleware, getMyLeaves)

router.get("/", authMiddleware, getAllLeaves)

router.patch("/:id", authMiddleware, updateLeaveStatus)

export default router