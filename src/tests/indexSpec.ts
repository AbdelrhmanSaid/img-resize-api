import supertest from 'supertest'
import app from './../index'

const request = supertest(app)

describe('GET /api/convert', () => {
  it('Valid Case: GET /api/convert/fjord.jpg/500/500', async () => {
    const response = await request.get('/api/convert/fjord.jpg/500/500')
    expect(response.status).toBe(200)
  })

  it('Invalid Case: GET /api/convert/non-exist-image.jpg/500/500', async () => {
    const response = await request.get(
      '/api/convert/non-exist-image.jpg/500/500'
    )
    expect(response.status).toBe(404)
  })
})
