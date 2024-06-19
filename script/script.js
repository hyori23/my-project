document.addEventListener('DOMContentLoaded', function () {
  const lotties = document.querySelectorAll('.lottie');

  lotties.forEach(function (lottie) {
    let isReversed = false;

    lottie.addEventListener('mouseenter', function () {
      if (!isReversed) {
        lottie.setDirection(1);
        lottie.play();
        isReversed = true;
      }
    });

    lottie.addEventListener('mouseleave', function () {
      lottie.setDirection(-1);
      lottie.stop();
      isReversed = false;
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lottiePlayer = document.getElementById('lottie-1');

  lottiePlayer.addEventListener('click', function () {
    window.location.href = './grade/1-1/index1-1.html'; // 이동할 페이지의 URL을 넣어주세요.
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lottiePlayer = document.getElementById('lottie-2');

  lottiePlayer.addEventListener('click', function () {
    window.location.href = './grade/1-2/index1-2.html'; // 이동할 페이지의 URL을 넣어주세요.
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lottiePlayer = document.getElementById('lottie-3');

  lottiePlayer.addEventListener('click', function () {
    window.location.href = './grade/2-Typo/indexTypo.html'; // 이동할 페이지의 URL을 넣어주세요.
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lottiePlayer = document.getElementById('lottie-4');

  lottiePlayer.addEventListener('click', function () {
    window.location.href = './grade/2-CD/indexCD.html'; // 이동할 페이지의 URL을 넣어주세요.
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lottiePlayer = document.getElementById('lottie-5');

  lottiePlayer.addEventListener('click', function () {
    window.location.href = './grade/Profile/indexp.html';
  });
});
