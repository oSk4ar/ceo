
  function actualizarTamañoViewport() { 
  const ancho = window.innerWidth;
  const altura = window.innerHeight;
  document.getElementById('viewportWidth').textContent = 'Ancho del Viewport: ' + ancho + 'px';
  document.getElementById('viewportHeight').textContent = 'Altura del Viewport: ' + altura + 'px';
  }
  // Actualiza el tamaño del viewport al cargar la página ;
  actualizarTamañoViewport();
  // Actualiza el tamaño del viewport cada vez que se redimensiona la ventana ;
  window.addEventListener('resize', actualizarTamañoViewport);
