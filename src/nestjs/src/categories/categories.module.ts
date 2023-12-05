import {
  CreateCategoryUseCase,
  ListCategoriesUseCase,
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
      provide: ListCategoriesUseCase.UseCase,
      useFactory: (CategoryRepo: CategoryRepository.Repository) => {
        return new ListCategoriesUseCase.UseCase(CategoryRepo);
      },
      inject: ['CategoryInMemoryRepository'],
    },
  ],
})
export class CategoriesModule {}
