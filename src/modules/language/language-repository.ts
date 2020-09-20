import { Language } from "src/types/language";
import { DbService } from "../database/db-service";
import { keysToSnake } from "src/lib/cases-handler";

export class LanguageRepository {
  constructor(
    private dbService: DbService
  ) {}

  async create(data: Omit<Language, "id">) {
    return this.dbService.connection('languages')
      .insert(
        keysToSnake(data)
      )
      .returning('*')
      .then(this.dbService.getFirstRow)
      .then(this.dbService.mapSingleResponse);
  }

  async update(id: string, data: Language) {
    return this.dbService.connection('languages')
      .update(
        keysToSnake(data)
      )
      .where('id', id)
      .returning('*')
      .then(this.dbService.getFirstRow)
      .then(this.dbService.mapSingleResponse);
  }

  async get(id: string) {
    return this.dbService.connection
      .select('*')
      .from('languages')
      .where('id', id)
      .then(this.dbService.getFirstRow);
  }

  async getList(query: any) {
    return this.dbService.connection
      .select('*')
      .from('languages');
  }
}
