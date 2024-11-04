function openTab(evt, tabName) {
    // Esconde todas as abas
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove a classe ativa de todas as abas
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona a classe ativa ao botão que abriu a aba
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
