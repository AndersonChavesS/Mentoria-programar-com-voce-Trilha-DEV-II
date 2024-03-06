function validateForm() {
    let candidato = 0;
    let t13 = 0;
    let t43 = 0;
    let t45 = 0;
    let t50 = 0;
    let tnulo = 0;
    let opcaoNulo = "";
    let opcaoConfirmacao = "";
    let continuarVotando = "";

    do {
        opcaoNulo = "";
        opcaoConfirmacao = "";
        candidato = parseInt(prompt("Digite o numero do candidato (13, 43, 45, 50): "));
        switch (candidato) {
            case 13: alert("13 - Dilma - PT");
                opcaoConfirmacao = String(prompt("Deseja confirmar seu voto? Sim(s/S)/Não(n/N) "));
                if ((opcaoConfirmacao == 'S') || (opcaoConfirmacao == 's')) {
                    alert("Voto computado com sucesso.");
                    t13++;
                } else {
                    alert("Voto cancelado.");
                }
                break;
            case 43:
                alert("43 - Eduardo Campos - PSB");
                opcaoConfirmacao = String(prompt("Deseja confirmar seu voto? Sim(s/S)/Não(n/N) "));
                if ((opcaoConfirmacao == 'S') || (opcaoConfirmacao == 's')) {
                    alert("Voto computado com sucesso.");
                    t43++;
                } else {
                    alert("Voto cancelado.");
                }
                break;
            case 45:
                alert("45 - Aecio Neves - PSDB");
                opcaoConfirmacao = String(prompt("Deseja confirmar seu voto? Sim(s/S)/Não(n/N) "));
                if ((opcaoConfirmacao == 'S') || (opcaoConfirmacao == 's')) {
                    alert("Voto computado com sucesso.");
                    t45++;
                } else {
                    alert("Voto cancelado.");
                }
                break;
            case 50:
                alert("50 - Fernando Gabeira - PV");
                opcaoConfirmacao = String(prompt("Deseja confirmar seu voto? Sim(s/S)/Não(n/N) "));
                if ((opcaoConfirmacao == 'S') || (opcaoConfirmacao == 's')) {
                    alert("Voto computado com sucesso.");
                    t50++;
                } else {
                    alert("Voto cancelado.");
                }
                break;
            default: printf("\nDeseja votar nulo? : Sim(s)/Não(n)");
                opcaoNulo = String(prompt("Deseja confirmar seu voto? Sim(s/S)/Não(n/N) "));
                if ((opcaoNulo == 'S') || (opcaoNulo == 's')) {
                    alert("Voto computado com sucesso.");
                    tnulo++;
                } else {
                    alert("Voto cancelado.");
                }
        }
        continuarVotando = prompt("Continuar votando? Sim(s/S)/Não(n/N) ");
    } while ((continuarVotando == 'S') || (continuarVotando == 's'));
    alert(`Candidato 13: ${t13}\nCandidato 43: ${t43}\nCandidato 45: ${t45}\nCandidato 50: ${t50}\nNulo: ${tnulo}`);
}