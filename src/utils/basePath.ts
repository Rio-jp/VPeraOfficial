export const basePath = process.env.NODE_ENV === 'production' ? '/VPeraOfficial' : '';

export const getAssetPath = (path: string) => {
    return `${basePath}${path.startsWith('/') ? path : '/' + path}`;
};
