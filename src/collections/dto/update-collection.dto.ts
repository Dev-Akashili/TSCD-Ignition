import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCollectionDto {
  @IsOptional()
  @Exclude()
  _id?: string;

  @IsNotEmpty()
  diseaseTerm: any;

  @IsNotEmpty()
  title: any;
}
