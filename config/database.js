module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'texa-api'),
          username: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'EnvyTheme1'),
        },
        options: {
            ssl: false,
        }
      },
    },
  });
   5432
  // module.exports = ({ env }) => ({
  //   defaultConnection: 'default',
  //   connections: {
  //     default: {
  //       connector: 'bookshelf',
  //       settings: {
  //         client: 'postgres',
  //         host: env('DATABASE_HOST', '127.0.0.1'),
  //         port: env.int('DATABASE_PORT', 5432),
  //         database: env('DATABASE_NAME', 'texa-api'),
  //         username: env('DATABASE_USERNAME', 'testing'),
  //         password: env('DATABASE_PASSWORD', 'testing'),
  //         ssl: env.bool('DATABASE_SSL', false),
  //       },
  //       options: {}
  //     },
  //   },
  // });
