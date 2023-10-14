function aplicarDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * (desconto / 100));

}

function aplicarJuros(precoEtiqueta, juros) {
    return precoEtiqueta + (precoEtiqueta * (juros / 100));

}
function verificarPagamento(precoEtiqueta, pagamento) {
    if (pagamento === 'debito') {
        return aplicarDesconto(precoEtiqueta, 10);

    } else if (pagamento === 'dinheiro' || pagamento == 'pix') {
        return aplicarDesconto(precoEtiqueta, 15);

    } else if (pagamento === '2x') {
        return precoEtiqueta;

    } else {
        return aplicarJuros(precoEtiqueta, 10);

    }
}

(function main() {
    console.log(verificarPagamento(100, 'debito'));
    
})();