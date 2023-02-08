function toggleMode() {
    const html = document.documentElement
    /*if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')){
        img.setAttribute('src', './assets/up_re.png')
        img.setAttribute('alt', 'foto de rosto do Eduardo, na formatura usando toga e sentado, com o capelo na cabeça.')
    } else {
        img.setAttribute('src', './assets/sit_re.png')
        img.setAttribute('alt', 'foto de rosto e corpo do Eduardo, na formatura usando toga e de pé, segurando o capelo.')
    }
}