import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'digitaidb-landerci-826f.h.aivencloud.com',
        port: 12218,
        username: 'avnadmin',
        password: 'AVNS_BKyNrtxU9qtMKD7mBv0',
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