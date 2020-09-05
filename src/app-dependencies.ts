import { DbService } from "./modules/database/db-service";

export interface AppDependencies {
}

export function initAppDependencies (): AppDependencies {
  const dbService = new DbService();

  return {
  }
}