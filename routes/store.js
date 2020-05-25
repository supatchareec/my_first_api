import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'store api'});
})

export default router;