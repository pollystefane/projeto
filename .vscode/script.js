function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  html.classList.toggle('light') //esse comando .toggle faz sozinho todo o comando que está acima comentado

  //pegar a tag imag

  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains('light')) {
     //se tiver light mode adicionar imagem light
     img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se tiver semlight mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')

  }
 


}
