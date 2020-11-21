
// new webpack.DefinePlugin({
//     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
// }),

export function getHomeURL() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000';
    } else {
        return 'https://sheldonfrith.com';
    }
}