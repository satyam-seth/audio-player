import { AudioPlayer } from './components/player';
import { AudioPlayerWidget } from './components/widget';

window.onload = () => {
  const exampleSection =
    document.querySelector<HTMLElement>('section.example')!;
  const audioPlayer = new AudioPlayer();
  audioPlayer.build(exampleSection);
  audioPlayer.setSource(
    'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
  );
  const audioPlayerWidget = new AudioPlayerWidget({
    namespace: 'example',
    audioPlayer,
    seekSec: 15,
    playIconUrl: './assets/play.svg',
    pauseIconUrl: './assets/pause.svg',
    forwardIconUrl: './assets/forward.svg',
    backwardIconUrl: './assets/backward.svg',
  });
  audioPlayerWidget.build(exampleSection);
};
