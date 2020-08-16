const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/posts')

router.get('/', postsCtrl.index)
router.get('/:id', postsCtrl.show)

router.use(require('../../config/auth'))

router.post('/', checkAuth, postsCtrl.create)
router.put('/:id', checkAuth, postsCtrl.update)
// router.delete('/:id', checkAuth, postsCtrl.delete)
// router.post('/:id/comment', checkAuth, postsCtrl.addComment)
// router.delete('/delete/:id', checkAuth, postsCtrl.deleteComment)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router