import Entity from "../entity/entity";
import UniqueEntityId from "../value-objects/unique-entity-id.vo";

export interface RepositoryInterface<E extends Entity> {
  insert(entity: E): Promise<void>;
  bulkInsert(entities: E[]): Promise<void>;
  findById(id: string | UniqueEntityId): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string | UniqueEntityId): Promise<void>;
}

export type SortDirection = "asc" | "desc";

export type SearchProps<Filter = string> = {
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: SortDirection | null;
  filter?: Filter | null;
};

export class SearchParams<Filter = string> {}

type SearchResultProps<E extends Entity, Filter> = {
  items: E[];
  total: number;
  current_page: number;
  per_page: number;
  sort: string | null;
  sort_dir: string | null;
  filter: Filter | null;
};

export class SearchResult<E extends Entity = Entity, Filter = string> {}

export interface SearchableRepositoryInterface<
  E extends Entity,
  Filter = string,
  SearchInput = SearchParams,
  SearchOutput = SearchResult<E, Filter>
> extends RepositoryInterface<E> {
  sortableFields: string[];
  search(props: SearchInput): Promise<SearchOutput>;
}