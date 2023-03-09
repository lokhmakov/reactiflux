export const Mime = {
  bmp: `type/bmp`,
  png: `type/png`,
} as const

const allowedTypes = [Mime.bmp, Mime.png]
