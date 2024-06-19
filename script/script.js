document.addEventListener('DOMContentLoaded', function () {
  const lotties = document.querySelectorAll('.lottie');

  // 각각의 dotlottie-player에 대해 반복하여 이벤트 리스너 추가
  lotties.forEach(function (lottie) {
    let isReversed = false;

    // 마우스 진입 이벤트 리스너 추가
    lottie.addEventListener('mouseenter', function () {
      // 역재생 설정
      if (!isReversed) {
        lottie.setDirection(1);
        lottie.play();
        isReversed = true;
      }
    });

    // 마우스 빠져나옴 이벤트 리스너 추가
    lottie.addEventListener('mouseleave', function () {
      // 원래 상태로 리셋
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
    window.location.href = './grade/2-video/indexvideo.html'; // 이동할 페이지의 URL을 넣어주세요.
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lottiePlayer = document.getElementById('lottie-4');

  lottiePlayer.addEventListener('click', function () {
    window.location.href = './grade/2-Typo/indexTypo.html'; // 이동할 페이지의 URL을 넣어주세요.
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lottiePlayer = document.getElementById('lottie-5');

  lottiePlayer.addEventListener('click', function () {
    window.location.href = './grade/2-CD/indexCD.html'; // 이동할 페이지의 URL을 넣어주세요.
  });
});
