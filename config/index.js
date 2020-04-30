const path = require("path")
module.exports = {
      development: false,
    prefix: process.env.PREFIX || '!',
    botName: process.env.BOT_NAME || 'Sumi-Chan',
    developer: {
        uid: 100029036684038,
        email: 'phuy75221@gmail.com',
        github: 'huybopbi'
    },
    database: {
        postgres: {
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
        },
        sqlite: {
            storage: path.resolve(__dirname, "./data.sqlite"),
        },
    },
    appStateFile: path.resolve(__dirname, '../appstate.json'),
    swear: {
        limit: 2
    },
    admins: (process.env.ADMINS || '100008366839123').split('_').map(e => parseInt(e))
}
