import knex from 'knex';
import { dbConfig } from '../../config';

export class DbService {
  private conn: knex<any, unknown[]>;

  constructor() {
    this.conn = knex({
      client: 'pg',
      connection: process.env.PG_CONNECTION_STRING || dbConfig.connectionString,
      searchPath: ['knex', 'public'],
    });
  }

  getFirstRow (data: Array<any>) {
    if (data.length) {
      return data[0];
    }
    
    throw new Error('TODO: 404')
  }

  get connection () {
    return this.conn;
  } 
}
