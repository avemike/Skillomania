import { DataSource } from "typeorm";
import {
  cookingCategory,
  instrumentsCategory,
  musicCategory,
  othersCategory,
  readingCategory,
  sportsCategory,
} from "./seeds";
import { Category } from "../entities/category.entity";

export const CategorySeeder = {
  run: async (dataSource: DataSource): Promise<any> => {
    console.log("CategorySeeder is running...");
    const categoryRepository = dataSource.getRepository(Category);

    const cookingCategoryEntity = await categoryRepository.save({
      ...cookingCategory,
    });

    const musicCategoryEntity = await categoryRepository.save({
      ...musicCategory,
    });

    const instrumentsCategoryEntity = await categoryRepository.save({
      ...instrumentsCategory,
      parentCategory: musicCategoryEntity,
    });

    const readingCategoryEntity = await categoryRepository.save({
      ...readingCategory,
    });

    const sportsCategoryEntity = await categoryRepository.save({
      ...sportsCategory,
    });

    const othersCategoryEntity = await categoryRepository.save({
      ...othersCategory,
    });

    Object.assign(cookingCategory, cookingCategoryEntity);
    Object.assign(musicCategory, musicCategoryEntity);
    Object.assign(instrumentsCategory, instrumentsCategoryEntity);
    Object.assign(readingCategory, readingCategoryEntity);
    Object.assign(sportsCategory, sportsCategoryEntity);
    Object.assign(othersCategory, othersCategoryEntity);
  },
};
