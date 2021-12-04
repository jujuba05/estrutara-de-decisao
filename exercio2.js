var salario = prompt('digite o salario do funcionario');

se (salario % 4 == 0) {
    alerta(salario * 0,08 - salario);
} mais {
    alerta(salario * 0,09- salario);
}
