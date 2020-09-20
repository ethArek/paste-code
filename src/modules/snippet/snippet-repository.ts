import { Snippet } from "src/types";
import { DbService } from "../database/db-service";
import { keysToSnake } from "src/lib/cases-handler";

export class SnippetRepository {
  constructor(
    private dbService: DbService
  ) {}

  async create(data: Omit<Snippet, "id">) {
    return this.dbService.connection('snippets')
      .insert(
        keysToSnake(data)
      )
      .returning('*');
  }

  async update(id: string, data: Snippet) {
    return this.dbService.connection('snippets')
      .update(
        keysToSnake(data)
      )
      .where('id', id);
  }

  async get(id: string) {
    return this.dbService.connection
      .select([
        's.id',
        'l.name as language',
        's.code',
        's.created_at'
      ])
      .from('snippets as s')
      .leftJoin('languages as l', 's.language', 'l.id')
      .where('s.id', id)
      .then(this.dbService.getFirstRow);
  }

  async getList(query: any) {
    return this.dbService.connection
      .select('*')
      .from('snippets');
  }
}
