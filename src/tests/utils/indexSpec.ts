import { promises as fs } from 'fs'
import { getPath, resize } from '../../utils'

describe('Testing utils', () => {
  it('Resizing image', async () => {
    const input = getPath('fjord.jpg')
    const output = getPath('thumbs/500_500_fjord.jpg')
    await resize(input, { width: 500, height: 500 }).then(async (data) => {
      fs.writeFile(output, data)
    })

    const file = await fs.readFile(output)
    expect(file).toBeTruthy()
  })
})
