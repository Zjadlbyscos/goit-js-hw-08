import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
player
  .setCurrentTime(Number(localStorage.getItem(`videoplayer-current-time`)))
  .then(seconds => console.log(`seconds: ${seconds} = the pause time`));

const storedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(storedTime);
