import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { Sample } from './entity/sample.entity';
import { SamplesService } from './samples.service';

@Controller('samples')
export class SamplesController {
  constructor(private samplesService: SamplesService) {}

  @Get()
  getAllSamples(): Promise<Sample[]> {
    return this.samplesService.getAllSamples();
  }

  @Get('/:id')
  getSampleById(@Param('id') id: number): Promise<Sample> {
    return this.samplesService.getSampleById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSample(@Body() createSampleDto: CreateSampleDto): Promise<Sample> {
    return this.samplesService.createSample(createSampleDto);
  }

  @Delete('/:id')
  deleteSample(@Param('id') id: number): Promise<void> {
    return this.samplesService.deleteSample(id);
  }
}