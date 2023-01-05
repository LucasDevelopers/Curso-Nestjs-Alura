import { Controller, Post, Body, Get } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) {}


    @Post()
    async criaProdutos(@Body() dadosDoProduto: CriaProdutoDTO) {
        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;

    }

    @Get()
    async listProdutos() {
        return this.produtoRepository.listar();
    }
}