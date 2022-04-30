import express from 'express'
import routes from './routes'

// Declaring constants
const app = express()
const PORT = 3000

// Assing routes
app.use('/api', routes)

// Handle not found requests
app.use((req: express.Request, res: express.Response): void => {
  res.status(404).header('Content-Type: application/json').json({
    code: 404,
    message: 'route not found',
  })
})

// Set server listener
app.listen(PORT, () => console.log(`Server listening on post: ${PORT}`))

export default app
