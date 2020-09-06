import { DbService } from "./modules/database/db-service";
import { SnippetService } from "./modules/snippet/snippet-service";
import { SnippetRepository } from "./modules/snippet/snippet-repository";

export interface AppDependencies {
  snippetService: SnippetService
}

export function initAppDependencies (): AppDependencies {
  const dbService = new DbService();

  const snippetRepository = new SnippetRepository(dbService);
  const snippetService = new SnippetService(snippetRepository);

  return {
    snippetService
  }
}