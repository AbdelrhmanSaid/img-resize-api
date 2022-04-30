import Sharp from 'sharp'
import path from 'path'

interface ReiszeOptions {
  width: number
  height: number
}

/**
 * Resize image
 *
 * @param inputFile string
 * @param options ResizeOptions
 * @returns Promise<Buffer>
 */
const resize = (inputFile: string, options: ReiszeOptions): Promise<Buffer> => {
  return Sharp(inputFile).resize(options).png().toBuffer()
}

/**
 * Get image absolute path
 *
 * @param fileName string
 * @returns string
 */
const getPath = (fileName: string): string => {
  return path.resolve(`./assets/${fileName}`)
}

export { resize, getPath }
