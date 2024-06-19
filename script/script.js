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
