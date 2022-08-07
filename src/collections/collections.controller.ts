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
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { Collection } from './entity/collection.entity';

@Controller('collections')
export class CollectionsController {
  constructor(private collectionsService: CollectionsService) {}

  @Get()
  getAllCollections(): Promise<Collection[]> {
    return this.collectionsService.getAllCollections();
  }

  @Get('/:id')
  getCollectionById(@Param('id') id: number): Promise<Collection> {
    return this.collectionsService.getCollectionById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCollection(
    @Body() createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    return this.collectionsService.createCollection(createCollectionDto);
  }

  @Delete('/:id')
  deleteCollection(@Param('id') id: number): Promise<void> {
    return this.collectionsService.deleteCollecton(id);
  }
}
