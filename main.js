import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
  inicializarCarrinho,
  adicionarAoCarrinho,
  renderizarProdutosCarrinho,
  atualizarPrecoCarrinho,
} from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
