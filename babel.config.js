module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['module:react-native-dotenv', { envName: 'APP_ENV', moduleName: '@env' }],
            'nativewind/babel'
        ],
        env: {
            production: {
                plugins: ['react-native-paper/babel']
            }
        }
    };
};
