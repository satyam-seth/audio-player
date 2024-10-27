// eslint-disable-next-line import/prefer-default-export
export class AudioPlayer {
  private namespace: string;

  constructor(namespace: string = 'default') {
    this.namespace = namespace;
  }

  configure(audioSource: string, loop: boolean = true) {
    this.setSource(audioSource);
    this.setLoopStatus(loop);
  }

  skeleton(): HTMLElement {
    const audio = document.createElement('audio');
    audio.id = this.id;
    audio.setAttribute('preload', 'metadata');
    return audio;
  }

  isPaused() {
    return this.element.paused;
  }

  // will play audio
  async play() {
    if (this.isPaused() === false) {
      // eslint-disable-next-line no-console
      console.log('The audio is already playing.');
      return;
    }
    try {
      await this.element.play();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  // will pause audio
  pause() {
    if (this.isPaused() === true) {
      // eslint-disable-next-line no-console
      console.log('The audio is already paused.');
      return;
    }
    try {
      this.element.pause();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  // set audio src and load
  setSource(src: string) {
    this.element.src = src;
    this.element.load();
  }

  // set audio loop status
  setLoopStatus(status: boolean) {
    this.element.loop = status;
  }

  // toggle audio loop status
  toggleLoopStatus() {
    const { loop } = this.element;
    this.setLoopStatus(!loop);
  }

  // forward audio by sec
  forward(sec: number = 5) {
    this.element.currentTime += sec;
  }

  // backward audio by sec
  backward(sec: number = 5) {
    this.element.currentTime -= sec;
  }

  // seek audio at specific time
  seekTo(time: number) {
    this.element.currentTime = time;
  }

  // to get current time in sec
  getCurrentTime() {
    const { currentTime } = this.element;
    return Math.floor(currentTime);
  }

  // to get current time in sec
  getDuration() {
    const { duration } = this.element;
    return Math.floor(duration);
  }

  // to get current seek position (played / total duration * 100)
  getSeekPosition() {
    const duration = this.getDuration();
    const currentTime = this.getCurrentTime();

    return Math.floor((currentTime / duration) * 100);
  }

  // to get time in mm:ss format
  // eslint-disable-next-line class-methods-use-this
  getTimeString(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    // Add a zero to the single digit time values
    const secondsValue = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${secondsValue}`;
  }

  // to get current time in mm:ss format
  getCurrentTimeString() {
    return this.getTimeString(this.getCurrentTime());
  }

  // to get total duration in mm:ss format
  getDurationString() {
    return this.getTimeString(this.getDuration());
  }

  // to get audio buffered time in percentage
  getBufferedAmountPercentage() {
    let bufferedAmount = 0;
    const { duration } = this.element;
    const bufferedLength = this.element.buffered.length;

    if (bufferedLength > 0) {
      bufferedAmount = this.element.buffered.end(bufferedLength - 1);
    }

    return Math.floor(bufferedAmount / duration) * 100;
  }

  // eslint-disable-next-line class-methods-use-this
  private get id() {
    return `${this.namespace}-audio-player`;
  }

  get element(): HTMLAudioElement {
    return document.getElementById(this.id)! as HTMLAudioElement;
  }

  build(parentElement: HTMLElement): void {
    parentElement.appendChild(this.skeleton());
  }
}
