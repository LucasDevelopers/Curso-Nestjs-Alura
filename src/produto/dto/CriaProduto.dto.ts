import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, ValidateNested, IsInt, IsString, IsNumber, MaxLength, IsPositive, Min, ArrayMinSize, IsUUID } from "class-validator";
import { CaracteristicaProdutoDTO } from "./caracProduto.dto";
import { ImagemProdutoDTO } from "./imagemProduto.dto";

export class CriaProdutoDTO {

    @IsNotEmpty()
    nome: string;

    @IsPositive()
    @IsNumber()
    valor: number;

    @IsInt()
    @Min(0)
    quantidade: number;

    @IsString()
    @MaxLength(1000)
    descricao: string;

    @ValidateNested()
    @IsArray() 
    @Type(() => CaracteristicaProdutoDTO)
    @ArrayMinSize(3)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray() 
    @Type(() => ImagemProdutoDTO)
    @ArrayMinSize(1)
    imagens: ImagemProdutoDTO[];

    @IsNotEmpty()
    categoria: string;
    
  }