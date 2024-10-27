import { AudioPlayerWidgetConfig } from './types';

// eslint-disable-next-line import/prefer-default-export
export class AudioPlayerWidget {
  private config: AudioPlayerWidgetConfig;

  private onPlay = this.hidePlayIcon.bind(this);

  private onPause = this.showPlayIcon.bind(this);

  private onTimeUpdate = this.timeUpdateHandler.bind(this);

  private onProgress = this.updateBufferedAmount.bind(this);

  private onLoadedMetaData = this.loadedMetaDataHandler.bind(this);

  constructor(config: AudioPlayerWidgetConfig) {
    this.config = config;
  }

  // to remove audio event listeners and remove skeleton from dom
  destroy() {
    this.removeAudioEventListeners();
    this.element?.remove();
  }

  // to hide pause icon and show play icon
  showPlayIcon() {
    const controlsContainer = this.element.querySelector(
      '.controls-container'
    )!;
    controlsContainer.classList.remove('controls-container--playing');
  }

  // to hide play icon and show pause icon
  hidePlayIcon() {
    const controlsContainer = this.element.querySelector(
      '.controls-container'
    )!;
    controlsContainer.classList.add('controls-container--playing');
  }

  // to update audio total duration info
  updateDuration() {
    const totalDuration = this.element.querySelector('.total-duration')!;
    totalDuration.innerHTML = this.config.audioPlayer.getDurationString();
  }

  // to update audio current time(total played time) info
  updateCurrentTime() {
    const currentTime = this.element.querySelector('.current-time')!;
    currentTime.innerHTML = this.config.audioPlayer.getCurrentTimeString();
  }

  /**
   *
   * Update '--buffered-width' css property which is use to show buffered time
   * seek input range track background: linear-gradient(
   *       to right,
   *      rgba(128, 128, 128, 0.6) var(--buffered-width),
   *      rgba(128, 128, 128, 0.2) var(--buffered-width)
   *      );
   *
   */
  updateBufferedAmount() {
    const bufferedAmountPercentage =
      this.config.audioPlayer.getBufferedAmountPercentage();

    this.element.style.setProperty(
      '--buffered-width',
      `${bufferedAmountPercentage}%`
    );
  }

  // to update seek input range element max attribute value
  updateSeekSliderMax() {
    const seekSlider = this.element.querySelector(
      'input.seek-slider'
    ) as HTMLInputElement;
    seekSlider.max = `${this.config.audioPlayer.getDuration()}`;
  }

  /**
   *
   * to update seek input range element value and
   * update '--seek-before-width' css property
   * which is use to indicate played time
   *
   */
  updateSeekSlider() {
    const currentTime = this.config.audioPlayer.getCurrentTime();

    const seekSlider = this.element.querySelector(
      'input.seek-slider'
    ) as HTMLInputElement;

    // update slider range value
    seekSlider.value = currentTime.toString();

    // update slider before width
    this.element.style.setProperty(
      '--seek-before-width',
      `${this.config.audioPlayer.getSeekPosition()}%`
    );
  }

  // on audio metadata load
  loadedMetaDataHandler() {
    this.updateDuration();
    this.updateSeekSliderMax();
    this.updateBufferedAmount();
  }

  // on audio playback time update
  timeUpdateHandler() {
    this.updateCurrentTime();
    this.updateSeekSlider();
  }

  skeleton(): HTMLElement {
    const container = document.createElement('div');
    container.id = this.id;
    container.className = 'audio-player-widget';
    container.appendChild(this.progressContainer);
    container.appendChild(this.controlsContainer);
    return container;
  }

  addAudioEventListeners() {
    // More often than not, the browser loads the audio faster than usual.
    // When this happens, the loadedmetadata event is fired before its listener
    // can be added to the <audio> element. Therefore, the audio duration is not
    // displayed on the browser. Nevertheless, there’s a hack. The HTMLMediaElement
    // has a property called readyState.
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
    if (this.config.audioPlayer.element.readyState > 0) {
      this.loadedMetaDataHandler();
    } else {
      this.config.audioPlayer.element.addEventListener(
        'loadedmetadata',
        this.onLoadedMetaData
      );
    }

    // add play event listener to update state once
    // audio is played (from system notification or our ui)
    this.config.audioPlayer.element.addEventListener('play', this.onPlay);

    // add pause event listener to update state once
    // audio is paused (from system notification or our ui)
    this.config.audioPlayer.element.addEventListener('pause', this.onPause);

    // add timeupdate event listener to update current time (played time) info
    this.config.audioPlayer.element.addEventListener(
      'timeupdate',
      this.onTimeUpdate
    );

    // add progress event listener to update buffer time info
    this.config.audioPlayer.element.addEventListener(
      'progress',
      this.onProgress
    );
  }

  removeAudioEventListeners() {
    // remove metadata load event listener
    this.config.audioPlayer.element.removeEventListener(
      'loadedmetadata',
      this.onLoadedMetaData
    );

    // remove play event listener to update state once
    // audio is played (from system notification or our ui)
    this.config.audioPlayer.element.removeEventListener('play', this.onPlay);

    // remove pause event listener to update state once
    // audio is paused (from system notification or our ui)
    this.config.audioPlayer.element.removeEventListener('pause', this.onPause);

    // remove timeupdate event listener to update current time (played time) info
    this.config.audioPlayer.element.removeEventListener(
      'timeupdate',
      this.onTimeUpdate
    );

    // remove progress event listener to update buffer time info
    this.config.audioPlayer.element.removeEventListener(
      'progress',
      this.onProgress
    );
  }

  /**
   *
   * Progress Container contains
   * 1) progress seek input range element
   * 2) time container (played and total duration)
   *
   */
  get progressContainer() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.appendChild(this.seekSlider);
    progressContainer.appendChild(this.timeContainer);
    return progressContainer;
  }

  /**
   *
   * Input range Html Element to showcase
   * audio playback progress and seek audio
   *
   */
  // eslint-disable-next-line class-methods-use-this
  get seekSlider() {
    const seekSlider = document.createElement('input');
    seekSlider.className = 'seek-slider';
    seekSlider.setAttribute('type', 'range');
    seekSlider.setAttribute('min', '0');
    seekSlider.setAttribute('max', '100');
    seekSlider.setAttribute('value', '0');

    // add input event listener
    seekSlider.addEventListener('input', () => {
      const seekSliderValue = seekSlider.value;
      this.config.audioPlayer.seekTo(parseInt(seekSliderValue, 10));
    });

    return seekSlider;
  }

  /**
   *
   * Time container contains
   * 1) total played time
   * 2) total audio duration
   *
   */
  // eslint-disable-next-line class-methods-use-this
  get timeContainer() {
    const timeContainer = document.createElement('div');
    timeContainer.className = 'time-container';
    timeContainer.appendChild(this.currentTimeSpan);
    timeContainer.appendChild(this.totalDurationSpan);
    return timeContainer;
  }

  // eslint-disable-next-line class-methods-use-this
  get currentTimeSpan() {
    const span = document.createElement('span');
    span.className = 'current-time';
    span.innerText = '00:00';
    return span;
  }

  // eslint-disable-next-line class-methods-use-this
  get totalDurationSpan() {
    const span = document.createElement('span');
    span.className = 'total-duration';
    span.innerText = '00:00';
    return span;
  }

  /**
   *
   * Controller container contains
   * 1) Backward Icon
   * 2) Play Icon
   * 3) Pause Icon
   * 4) Forward Icon
   *
   */
  get controlsContainer() {
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'controls-container';
    controlsContainer.appendChild(this.backwardIcon);
    controlsContainer.appendChild(this.playIcon);
    controlsContainer.appendChild(this.pauseIcon);
    controlsContainer.appendChild(this.forwardIcon);
    return controlsContainer;
  }

  // eslint-disable-next-line class-methods-use-this
  getImageElement(
    src: string,
    alt: string,
    classNames: string[],
    title: string,
    onClick: () => void
  ) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add(...classNames);
    img.setAttribute('title', title);

    // add click event listener
    img.addEventListener('click', (e: any) => {
      e.stopPropagation();
      onClick();
    });

    return img;
  }

  // play icon
  get playIcon() {
    return this.getImageElement(
      this.config.playIconUrl,
      'play',
      ['control-icon', 'play'],
      'play',
      () => this.config.audioPlayer.play()
    );
  }

  // pause icon
  get pauseIcon() {
    return this.getImageElement(
      this.config.pauseIconUrl,
      'pause',
      ['control-icon', 'pause'],
      'pause',
      () => this.config.audioPlayer.pause()
    );
  }

  // forward icon
  get forwardIcon() {
    return this.getImageElement(
      this.config.forwardIconUrl,
      'forward',
      ['control-icon', 'forward'],
      'forward',
      () => this.config.audioPlayer.forward(this.config.seekSec)
    );
  }

  // backward icon
  get backwardIcon() {
    return this.getImageElement(
      this.config.backwardIconUrl,
      'backward',
      ['control-icon', 'backward'],
      'backward',
      () => this.config.audioPlayer.backward(this.config.seekSec)
    );
  }

  get id() {
    return `${this.config.namespace}-audio-player-widget`;
  }

  get element(): HTMLElement {
    return document.getElementById(this.id)! as HTMLElement;
  }

  build(parentElement: HTMLElement): void {
    parentElement.appendChild(this.skeleton());

    // add event linters
    this.addAudioEventListeners();
  }
}
