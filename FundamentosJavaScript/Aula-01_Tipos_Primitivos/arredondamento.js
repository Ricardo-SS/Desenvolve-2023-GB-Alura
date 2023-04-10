// programa para erredondar um numero e formatar para o tipo de moeda

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
}

ganho = ganhoPorHora(3000, 176);

console.log(ganho);