import Annotations from "../models/AnnotationData.js"

const create = async (req, res) => {
    const { title, notes, priority } = req.body

    console.log(title)
    console.log(notes)
    console.log(priority)
}

const read = async (req, res) => {
    const annotationList =  await Annotations.find()

    return res.json(annotationList)
}
 
export default { create, read }