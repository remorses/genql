import { readFile, writeFile } from 'fs'
import mkdirp from 'mkdirp'
import { resolve } from 'path'
import rimraf from 'rimraf'
import { promisify } from 'util'

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

export const ensurePath = async (path: string[], clear: boolean = false) => {
  if (clear)
    await new Promise((rs, rj) => {
      rimraf(resolve(...path), err => {
        if (err) rj(err)
        else rs()
      })
    })

  await new Promise((rs, rj) => {
    mkdirp(resolve(...path), err => {
      if (err) rj(err)
      else rs()
    })
  })
}

export const requireModuleFromPath = (path: string[]) => require(resolve(...path))

export const readFileFromPath = (path: string[]) => readFileAsync(resolve(...path)).then(b => b.toString())

export const writeFileToPath = (path: string[], content: string) => writeFileAsync(resolve(...path), content)

export const readFilesAndConcat = (files: string[]) =>
  Promise.all(files.map(file => readFileFromPath([file]))).then(contents => contents.join('\n'))
