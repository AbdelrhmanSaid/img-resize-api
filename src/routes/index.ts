import express from 'express'
import { promises as fs, existsSync } from 'fs'
import { imgExist, validDimensions } from '../middlewares'
import { resize, getPath } from './../utils'

const router = express.Router()

router.get(
  '/convert/:img/:width/:height',
  [imgExist, validDimensions],
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { img, width, height } = req.params
    const input: string = getPath(img)
    const output: string = getPath(`thumbs/${width}_${height}_${img}`)

    if (existsSync(output)) return res.status(200).sendFile(output)

    resize(input, { width: +width, height: +height }).then(async (data) => {
      await fs.writeFile(output, data)
      return res.status(200).sendFile(output)
    })
  }
)

export default router
