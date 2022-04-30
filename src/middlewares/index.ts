import { Request, Response } from 'express'
import { existsSync } from 'fs'
import { getPath } from '../utils'

const imgExist = (req: Request, res: Response, next: Function): void => {
  const img = req.params.img
  const imgPath: string = getPath(img)

  if (!existsSync(imgPath)) {
    res
      .status(404)
      .header('Content-Type: application/json')
      .json({
        code: 404,
        message: `Image ${img} not found`,
      })
  } else {
    next()
  }
}

const validDimensions = (req: Request, res: Response, next: Function): void => {
  const { height, width } = req.params

  if (!Number(height) || !Number(width) || +width < 0 || +height < 0) {
    res.status(400).header('Content-Type: application/json').json({
      code: 400,
      message:
        'Bad request: Invalid params, (width, height) should be a valid numbers',
    })
  } else {
    next()
  }
}

export { imgExist, validDimensions }
