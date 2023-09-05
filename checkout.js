import { apagarDoLocalStorage, desenharProdutoNoCarrinhoSimples, lerLocalStorage, salvarEmLocalStorage } from './src/utilidades';

function desenharProdutoCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    for(const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinhoSimples(idProduto, 'container-produto-checkout', idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    };

    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

    salvarEmLocalStorage('historico', historicoDePedidosAtualizados);
    apagarDoLocalStorage('carrinho');

    window.location.href = window.location.origin + '/pages/pedidos.html';
}

desenharProdutoCheckout();

document.addEventListener('submit', (e) => finalizarCompra(e));