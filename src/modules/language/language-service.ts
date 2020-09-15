import { LanguageRepository } from "./language-repository";
import { Language } from "../../types/language";

export class LanguageService {
  constructor(
    private languageRepository: LanguageRepository,
  ) {
  }

  create(requestBody: Omit<Language, "id">) {
    return this.languageRepository.create(requestBody);
  }

  update(id: string, requestBody: Language) {
    return this.languageRepository.update(id, requestBody);
  }

  get(id: string) {
    return this.languageRepository.get(id);
  }

  getList() {
    return this.languageRepository.getList({});
  }
}
