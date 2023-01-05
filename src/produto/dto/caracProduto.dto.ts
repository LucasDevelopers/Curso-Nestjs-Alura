import { IsNotEmpty, IsString } from "class-validator";

export class CaracteristicaProdutoDTO {

    @IsNotEmpty()
    nome: string;

    @IsString()
    descricao: string;
    
  }