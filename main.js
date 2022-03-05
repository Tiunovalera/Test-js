  const scrollBtn = document.querySelector('.showBtn');
  window.onscroll = () => {
    if (window.scrollY > 700) {
      scrollBtn.classList.remove('showBtn__hide');
    } else if (window.scrollY < 700){
      scrollBtn.classList.add('showBtn__hide');
    }
  }

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };

