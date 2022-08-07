import { IsNotEmpty } from 'class-validator';

export class CreateSampleDto {
  @IsNotEmpty()
  collectionId: number;

  @IsNotEmpty()
  donorCount: string;

  @IsNotEmpty()
  materialType: string;

  lastUpdated: string;
}
