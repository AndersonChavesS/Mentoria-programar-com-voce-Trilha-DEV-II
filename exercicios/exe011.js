function validateForm() {
    let i;
    for (i = 1; i <= 50; i++) {
        if((i % 6 === 0) & (i % 8 === 0)) {
            alert(`Números divisíveis por 6 e 8\n${i}`);
        }
    }
}