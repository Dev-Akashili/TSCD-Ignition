import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
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

  @Patch('/:id')
  updateSample(
    @Param('id') id: number,
    @Body('field') field: string,
    @Body('update') update: string,
  ): Promise<Sample> {
    return this.samplesService.updateSample(id, field, update);
  }

  @Delete('/:id')
  deleteSample(@Param('id') id: number): Promise<void> {
    return this.samplesService.deleteSample(id);
  }
}