import { resolve } from 'node:path';

const root = process.cwd();
export const pathResolve = (pathname: string) => resolve(root, '.', pathname);
