import { promises as fs } from "fs";
import mkdirp from "mkdirp";
import { resolve } from "path";
import { rimraf } from "rimraf";

export const ensurePath = async (path: string[], clear: boolean = false) => {
    if (clear) await rimraf(resolve(...path));
    await mkdirp(resolve(...path));
};

export const readFileFromPath = (path: string[]) =>
    fs.readFile(resolve(...path)).then((b) => b.toString());

export const writeFileToPath = async (path: string[], content: string) => {
    const folder = resolve(...path, "..");
    await fs.mkdir(folder, { recursive: true });
    await fs.writeFile(resolve(...path), content);
};

export const readFilesAndConcat = (files: string[]) =>
    Promise.all(files.map((file) => readFileFromPath([file]))).then(
        (contents) => contents.join("\n")
    );
