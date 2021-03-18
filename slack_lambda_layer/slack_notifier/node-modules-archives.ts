import archiver from 'archiver';
import fs from 'fs';

export class NodeModulesArchives {
    public static archive(): void {
        const modules = './dist';
        const output = fs.createWriteStream('./lambda_layer.zip');
        const archive = archiver('zip', {zlib: {level: 9}});
        archive.pipe(output);
        archive.directory(modules, 'nodejs');
        archive.finalize();
    }
}
NodeModulesArchives.archive();
