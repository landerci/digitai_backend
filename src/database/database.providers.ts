import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'digitaidb-landerci-826f.e.aivencloud.com',
        port: 12218,
        username: 'avnadmin',
        password: 'AVNS_wJwTx8RR2gfRjWddQKs',
        database: 'defaultdb',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        //synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];