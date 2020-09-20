import { DbService } from "./modules/database/db-service";
import { SnippetService } from "./modules/snippet/snippet-service";
import { SnippetRepository } from "./modules/snippet/snippet-repository";
import { LanguageRepository } from "./modules/language/language-repository";
import { LanguageService } from "./modules/language/language-service";

export interface AppDependencies {
  snippetService: SnippetService;
  languageService: LanguageService;
}

export function initAppDependencies (): AppDependencies {
  const dbService = new DbService();

  const snippetRepository = new SnippetRepository(dbService);
  const snippetService = new SnippetService(snippetRepository);

  const languageRepository = new LanguageRepository(dbService);
  const languageService = new LanguageService(languageRepository);

  return {
    snippetService,
    languageService
  }
}