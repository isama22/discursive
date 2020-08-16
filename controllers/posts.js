const Post = require('../models/post')

module.exports = {
    index,
    show, 
    create,
    update,
    delete: deleteOne,
    // addComment,
    // deleteComment
}

async function index(req, res) {
    const posts = await Post.find({})
    .sort({createdAt: -1})
    res.status(200).json(posts)
}

async function show(req, res) {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const post = await Post.create(req.body)
    res.status(201).json(post)
}

async function update(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedPost = await Post.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedPost)
}

// async function addComment (req, res) {
//     try {
//         await Service.findById(req.params.id, function (err, service){
//             service.serviceComments.push({text: req.body.serviceComment, user: req.user._id, creator: req.user.name})
//             service.save()
//             index(req,res)
//         }) 
//     } catch (err){
//             res.json({err})
//     }
// }

// async function deleteComment(req,res){
//     try {
//       await Service.findByIdAndUpdate(req.body.service_id, {
//             $pull: {
//               serviceComments: {_id: req.params.id}
//             }})
//         index(req, res)
//     } catch (err) {
//         res.json({err})
//     }
// }