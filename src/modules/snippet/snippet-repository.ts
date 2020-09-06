import { Snippet } from "src/types/snippet";
import { DbService } from "../database/db-service";

export class SnippetRepository {
  constructor(
    private dbService: DbService
  ) {}

  async create(data: Omit<Snippet, "id">) {
    return this.dbService.connection('snippets')
      .insert(data)
      .returning('*');
  }

  async update(id: string, data: Snippet) {
    return this.dbService.connection('snippets')
      .update(data)
      .where('id', id);
  }

  async get(id: string) {
    return this.dbService.connection
      .select('*')
      .from('snippets')
      .where('id', id)
      .then(this.dbService.getFirstRow);
  }

  async getList(query: any) {
    return this.dbService.connection
      .select('*')
      .from('snippets');
  }
}
