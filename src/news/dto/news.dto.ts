import { IsNotEmpty } from 'class-validator';

export class NewsDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly subtitle: string;

  @IsNotEmpty()
  readonly icon: string;

  @IsNotEmpty()
  readonly description: string;
}
