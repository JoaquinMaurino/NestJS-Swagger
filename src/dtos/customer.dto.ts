import { IsString, IsNotEmpty, IsPhoneNumber, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsDate()
  @IsNotEmpty()
  birthday: Date
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}