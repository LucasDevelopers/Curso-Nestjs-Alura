import { Controller, Post, Body, Get } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/criaUsuario.dto";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) {}


    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;

    }

    @Get()
    async listUsuarios() {
        return this.usuarioRepository.listar();
    }
}