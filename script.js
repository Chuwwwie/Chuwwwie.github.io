function createStar() {

    const star = document.createElement('div');

    star.className = 'star';

    star.style.left = `${Math.random() * window.innerWidth}px`;

    star.style.top = `${Math.random() * window.innerHeight}px`;

    star.style.animationDelay = `${Math.random() * 2}s`;

    star.style.animationDuration = `${1 + Math.random() * 2}s`;

    document.body.appendChild(star);

  }

  for(let i = 0; i < 100; i++) {

    createStar();

  }