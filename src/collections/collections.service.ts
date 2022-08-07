import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { Collection } from './entity/collection.entity';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(Collection)
    private collectionRepository: Repository<Collection>,
  ) {}

  async getAllCollections(): Promise<Collection[]> {
    const query = this.collectionRepository.createQueryBuilder('collection');
    const collections = await query.getMany();
    return collections;
  }

  async getCollectionById(id: number): Promise<Collection> {
    const found = await this.collectionRepository.findOne({
      where: { id },
    });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async createCollection(
    createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    const { diseaseTerm, title, id } = createCollectionDto;
    const collection = this.collectionRepository.create({
      diseaseTerm,
      title,
      id,
    });
    await this.collectionRepository.save(collection);
    return collection;
  }

  async deleteCollecton(id: number): Promise<void> {
    const result = await this.collectionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
