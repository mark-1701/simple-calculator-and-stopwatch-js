const d = document;
d.addEventListener('DOMContentLoaded', e => {
  calculator();
  chronometer();
});

function calculator() {
  let $keys = d.querySelectorAll('.key');
  let $screen = d.querySelector('.screen');
  let $operationsScreen = d.querySelector('.operations-screen');

  d.addEventListener('click', e => {
    let input = e.target.textContent;
    if (input == '+/-') return;
    if (input == 'AC') return ($screen.textContent = '0');
    if (input == '=') {
      $operationsScreen.textContent = $screen.textContent;
      $screen.textContent = math.evaluate($screen.textContent);
      return;
    }
    if (e.target.matches('.key'))
      $screen.textContent == '0'
        ? ($screen.textContent = input)
        : ($screen.textContent += input);
  });
}

function chronometer() {
  let $chronometerScreen = d.querySelector('.chronometer-screen');
  let $secondsScreen = d.querySelector('.seconds');
  let $minutesScreen = d.querySelector('.minutes');
  let minutes = 0,
    seconds = 0;
  let countdown;

  d.addEventListener('click', e => {
    if (e.target.matches('.play-stop')) {
      if (countdown) {
        clearInterval(countdown);
        countdown = null;
        return;
      }
      startCountdown();
    }

    if (e.target.matches('.restart')) {
      clearInterval(countdown);
      countdown = null;
      minutes = 0;
      seconds = 0;
      startCountdown();
    }

    function startCountdown() {
      countdown = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        let formattedSeconds = String(seconds).padStart(2, '0');
        let formattedMinutes = String(minutes).padStart(2, '0');
        $secondsScreen.textContent = formattedSeconds;
        $minutesScreen.textContent = formattedMinutes;
      }, 100);
    }
  });
}
