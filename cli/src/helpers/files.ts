import { promises as fs } from 'fs'
import mkdirp from 'mkdirp'
import { resolve } from 'path'
import rimraf from 'rimraf'

export const ensurePath = async (path: string[], clear: boolean = false) => {
    if (clear)
        await new Promise((rs, rj) => {
            rimraf(resolve(...path), (err) => {
                if (err) rj(err)
                else rs(undefined)
            })
        })

    await new Promise((rs, rj) => {
        mkdirp(resolve(...path), (err) => {
            if (err) rj(err)
            else rs(undefined)
        })
    })
}

export const requireModuleFromPath = (path: string[]) =>
    require(resolve(...path))

export const readFileFromPath = (path: string[]) =>
    fs.readFile(resolve(...path)).then((b) => b.toString())

export const writeFileToPath = (path: string[], content: string) =>
    fs.writeFile(resolve(...path), content)

export const readFilesAndConcat = (files: string[]) =>
    Promise.all(
        files.map((file) => readFileFromPath([file])),
    ).then((contents) => contents.join('\n'))
