const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },
    style: {
        sass: {
            loaderOptions: {
                sassOptions: {
                    includePaths: ['src/styles'],
                }
            }
        }
    }
}; 