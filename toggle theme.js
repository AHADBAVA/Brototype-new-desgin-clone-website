function toggleColors() {
  const bodyElement = document.querySelector('body',);
  if (bodyElement.style.backgroundColor === 'rgb(12, 15, 24)') {
    bodyElement.style.backgroundColor = 'white';
    bodyElement.style.color = 'black';
  } else {
    bodyElement.style.backgroundColor = 'rgb(12, 15, 24)';
    bodyElement.style.color = 'white';
  }
}
