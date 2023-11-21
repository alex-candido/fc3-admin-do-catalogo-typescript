import { SearchableRepositoryInterface } from "../../../@seedwork/domain/repository";
import { Category } from "../entities/category";

export default interface CategoryRepository
  extends SearchableRepositoryInterface<Category> {}

// export type CategoryFilter = string;

// export class SearchParams extends SearchParams<CategoryFilter> {}

// export class SearchResult extends SearchResult<
//   Category,
//   CategoryFilter
// > {}

// export default interface CategoryRepository
//   extends SearchableRepositoryInterface<
//     Category,
//     CategoryFilter,
//     CategorySearchParams,
//     CategorySearchResult
//   > {}

// // Category -> filter, SearchParams, SearchResult, Repository
// // Genre -> filter, SearchParams, SearchResult, Repository
