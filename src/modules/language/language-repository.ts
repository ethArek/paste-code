import { Language } from "src/types/language";
import { DbService } from "../database/db-service";

export class LanguageRepository {
  constructor(
    private dbService: DbService
  ) {}

  async create(data: Omit<Language, "id">) {
    return this.dbService.connection('languages')
      .insert(data)
      .returning('*');
  }

  async update(id: string, data: Language) {
    return this.dbService.connection('languages')
      .update(data)
      .where('id', id);
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
