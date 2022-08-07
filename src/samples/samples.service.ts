import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSampleDto } from './dto/create-sample.dto';
import { Sample } from './entity/sample.entity';

@Injectable()
export class SamplesService {
  constructor(
    @InjectRepository(Sample)
    private samplesRepository: Repository<Sample>,
  ) {}

  async getAllSamples(): Promise<Sample[]> {
    const query = this.samplesRepository.createQueryBuilder('sample');
    const samples = await query.getMany();
    return samples;
  }

  async getSampleById(id: number): Promise<Sample> {
    const found = await this.samplesRepository.findOne({
      where: { id },
    });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async createSample(createSampleDto: CreateSampleDto): Promise<Sample> {
    const { donorCount, materialType, collectionId } = createSampleDto;
    const sample = this.samplesRepository.create({
      donorCount,
      materialType,
      collectionId,
      lastUpdated: new Date().toISOString().split('T')[0],
    });
    await this.samplesRepository.save(sample);
    return sample;
  }

  async deleteSample(id: number): Promise<void> {
    const result = await this.samplesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
