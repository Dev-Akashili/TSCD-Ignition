import { IsNotEmpty } from 'class-validator';

export class CreateCollectionDto {
  id: number;

  @IsNotEmpty()
  diseaseTerm: string;

  @IsNotEmpty()
  title: string;
}
