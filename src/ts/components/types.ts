import { AudioPlayer } from './player';

export interface AudioPlayerWidgetConfig {
  namespace: string;

  audioPlayer: AudioPlayer;

  seekSec: number;

  playIconUrl: string;

  pauseIconUrl: string;

  forwardIconUrl: string;

  backwardIconUrl: string;
}
