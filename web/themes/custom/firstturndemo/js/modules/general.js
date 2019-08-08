class General {

  constructor() {
    this.addFeatureDivLink = document.querySelectorAll(".featured-content-card");
    this.expandSpeaker = document.querySelectorAll(".speaker");
    this.events();
  }

  events() {
    for (const feature of this.addFeatureDivLink) {
      feature.addEventListener('click', this.goToPage)
    }
    for (const speaker of this.expandSpeaker) {
      speaker.addEventListener('click', this.expandSpeakerSelected)
    }
  }

  goToPage(e) {
    window.location.href = e.currentTarget.getAttribute('data-link');
  }

  expandSpeakerSelected(e) {
    let style = getComputedStyle(e.currentTarget.querySelector('.speaker-info'));
    console.log(style.display);
    if (style.display == 'block') {
      e.currentTarget.querySelector('.speaker-info').style.display = 'none';

    } else {
      e.currentTarget.querySelector('.speaker-info').style.display = 'block';

    }
  }

}

export default General;
