import stream from 'stream';

interface CofounderFs {
    cp(pathstr: string, dest: string): Promise<void>;
    cpP(str: string, dest: string): Promise<void>;
    glob(str: string, options?: Object): Promise<any>;
    lstat(pathstr: string): Promise<any>;
    mkdir(pathstr: string, mode?: string): Promise<void>;
    mkdirP(pathstr: string, mode?: string): Promise<void>;
    mv(pathstr: string, dest: string): Promise<void>;
    mvP(str: string, dest: string): Promise<void>;
    readdir(pathstr: string, options?: Object): Promise<any>;
    readFile(pathstr: string, options?: Object): Promise<any>;
    rm(pathstr: string): Promise<void>;
    rmdir(pathstr: string): Promise<void>;
    rmdirP(pathstr: string): Promise<void>;
    rmP(str: string, recursiveForDirectories: boolean): Promise<void>;
    writeFile(pathstr: string, content: string, options?: Object): Promise<void>;
    writeFileP(pathstr: string, content: string, options?: Object): Promise<void>;
}

interface CofounderJson {
    loadFile(pathstr: string): Promise<any>;
    saveFile(pathstr: string, objectContent: any): Promise<void>;
}

// taken from @types/cross-spawn npm package
// thanks to Alorel for definitions (https://github.com/Alorel)
type StdioOptions = 'pipe' | 'ignore' | 'inherit' | Array<('pipe' | 'ipc' | 'ignore' | 'inherit' | stream.Stream | number | null | undefined)>;

interface SpawnOptions {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    argv0?: string;
    stdio?: StdioOptions;
    detached?: boolean;
    uid?: number;
    gid?: number;
    shell?: boolean | string;
    windowsVerbatimArguments?: boolean;
    windowsHide?: boolean;
}

interface CofounderOs {
    shell(command: string, args: Array<any>, options: SpawnOptions): Promise<any>;
}

interface Cofounder {
    fs: CofounderFs;
    json: CofounderJson;
    os: CofounderOs;
}

export {
    Cofounder as default,
    CofounderFs,
    CofounderJson,
    CofounderOs,
    StdioOptions,
    SpawnOptions,
};
