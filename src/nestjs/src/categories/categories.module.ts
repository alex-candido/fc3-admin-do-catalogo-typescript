import {
  CreateCategoryUseCase,
  DeleteCategoryUseCase,
  GetCategoryUseCase,
  ListCategoriesUseCase,
  UpdateCategoryUseCase
} from '@fc/micro-videos/category/application';

import { CategoryRepository } from '@fc/micro-videos/category/domain';
import { CategoryInMemoryRepository } from '@fc/micro-videos/category/infra';
import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    {
      provide: 'CategoryInMemoryRepository',
      useClass: CategoryInMemoryRepository,
    },
    {
      provide: CreateCategoryUseCase.UseCase,
      useFactory: (CategoryRepo: CategoryRepository.Repository) => {
        return new CreateCategoryUseCase.UseCase(CategoryRepo);
      },
      inject: ['CategoryInMemoryRepository'],
    },
    {
      provide: UpdateCategoryUseCase.UseCase,
      useFactory: (CategoryRepo: CategoryRepository.Repository) => {
        return new UpdateCategoryUseCase.UseCase(CategoryRepo);
      },
      inject: ['CategoryInMemoryRepository'],
    },
     {
      provide: DeleteCategoryUseCase.UseCase,
      useFactory: (CategoryRepo: CategoryRepository.Repository) => {
        return new DeleteCategoryUseCase.UseCase(CategoryRepo);
      },
      inject: ['CategoryInMemoryRepository'],
    },
    {
      provide: GetCategoryUseCase.UseCase,
      useFactory: (CategoryRepo: CategoryRepository.Repository) => {
        return new GetCategoryUseCase.UseCase(CategoryRepo);
      },
      inject: ['CategoryInMemoryRepository'],
    },
    {
      provide: ListCategoriesUseCase.UseCase,
      useFactory: (CategoryRepo: CategoryRepository.Repository) => {
        return new ListCategoriesUseCase.UseCase(CategoryRepo);
      },
      inject: ['CategoryInMemoryRepository'],
    },
  ],
})
export class CategoriesModule {}
