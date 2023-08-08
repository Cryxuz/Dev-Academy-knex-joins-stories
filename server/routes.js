import express from 'express'
import * as db from './db/db.js'
const router = express.Router()

router.get('/', async (req, res) => {
  const wombles = await db.getWombles()
  console.log(wombles)
  res.render('allWombles', { wombles })
})

router.get('/wombles/:id', async (req, res) => {
  const id = req.params.id
  const womble = await db.getWombleWithTrait(id)
  console.log(womble)
  res.render('womble', womble[0])
})

router.get('/assignments', async (req, res) => {
  const wombles = await db.getWombleWithRubbish()
  console.log(wombles)
  res.render('assignments', { wombles })
})

export default router
