const precoEtiqueta = 100;
const pagamento = '4x';
let preco;

if (pagamento === 'debito') {
    preco = precoEtiqueta * 0.90;
} else if (pagamento === 'dinheiro' || pagamento == 'pix') {
    preco = precoEtiqueta*0.85
} else if (pagamento === '2x') {
    preco = precoEtiqueta
} else {
   preco = precoEtiqueta*1.10
}

console.log(preco.toFixed(2))