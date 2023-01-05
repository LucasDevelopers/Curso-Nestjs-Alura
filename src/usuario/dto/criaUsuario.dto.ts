import { IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    @IsEmail(undefined, { message: 'Por favor digite um e-mail valido' })
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    senha: string;
}