import { SnippetRepository } from "./snippet-repository";
import { Snippet } from "../../types/snippet";

export class SnippetService {
  constructor(
    private snippetRepository: SnippetRepository,
  ) {
  }

  create(requestBody: Omit<Snippet, "id">) {
    return this.snippetRepository.create(requestBody);
  }

  update(id: string, requestBody: Snippet) {
    return this.snippetRepository.update(id, requestBody);
  }

  get(id: string) {
    return this.snippetRepository.get(id);
  }

  getList() {
    return this.snippetRepository.getList({});
  }
}
