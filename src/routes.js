import express from "express"

const routes = express.Router()

import AnnotationControllers from "./controllers/AnnotationController.js"

routes.post("/annotation", AnnotationControllers.create)
routes.get("/annotation", AnnotationControllers.read)

export default routes