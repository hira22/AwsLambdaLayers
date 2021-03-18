import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

export class NodeModulesArchives {
    public static archive(): void {

        const archiveDir = './nodejs'
        const moduleDir = `${archiveDir}/node_modules`;
        const moduleName = path.basename(path.resolve('.'));
        
        const dir = `${moduleDir}/${moduleName}`;
        const indexJs = `${dir}/index.js`;
        const packageJson = `${dir}/package.json`;

        fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync('./dist/index.js', indexJs);
        fs.copyFileSync('./package.json', packageJson);
        const output = fs.createWriteStream(`./${moduleName}.zip`);
        const archive = archiver('zip', {zlib: {level: 9}});
        archive.pipe(output);
        archive.directory(archiveDir, 'nodejs');
        archive.finalize();
    }
}
NodeModulesArchives.archive();
