import { readdir } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const directory = 'public/images'
const files = (await readdir(directory)).filter((file) => /\.(png|jpe?g)$/i.test(file))
for (const file of files) {
  const source = join(directory, file)
  const destination = join(directory, `${parse(file).name}.webp`)
  await sharp(source).rotate().resize({ width: 1600, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76, effort: 5 }).toFile(destination)
  console.log(`${file} -> ${parse(file).name}.webp`)
}
