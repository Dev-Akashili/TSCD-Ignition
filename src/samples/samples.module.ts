import { Module } from '@nestjs/common';
import { SamplesService } from './samples.service';
import { SamplesController } from './samples.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './entity/sample.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  providers: [SamplesService],
  controllers: [SamplesController],
})
export class SamplesModule {}
