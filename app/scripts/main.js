import moment from 'moment';

class App {
  constructor() {
    this.startDate = moment('2015-09-05 16:00');

    this.$sinceContainer = document.querySelector('.value--since');
    this.$forContainer = document.querySelector('.value--for');

    this.$sinceContainer.textContent = this.startDate.format('MMMM Do YYYY');

    setInterval(() => {
      let diffMilliseconds = this.getDiffMilliseconds(
        this.startDate, moment().add(1, 'days')
      ),
        durations = this.getDurations(diffMilliseconds),
        content = this.buildOutput(durations);

      this.updateView(content);
    }, 1000);
  }

  getDiffMilliseconds(dateStart, dateNow) {
    return dateNow.diff(dateStart);
  }

  getDurations(milliseconds) {
    let duration = moment.duration(milliseconds);

    return [
      duration.years() > 0 ? `${duration.years()}&nbsp;Years` : null,
      duration.months() > 0 ? `${duration.months()}&nbsp;Months` : null,
      duration.days() > 0 ? `${duration.days()}&nbsp;Days` : null,
      duration.hours() > 0 ? `${duration.hours()}&nbsp;Hours` : null,
      duration.minutes() > 0 ? `${duration.minutes()}&nbsp;Minutes` : null,
      `${duration.seconds()}&nbsp;Seconds`
    ];
  }

  buildOutput(durations) {
    let content = '';
    durations.forEach(duration => {
      if (duration) {
        content += `<span class='duration'>${duration}</span> `;
      }
    });

    return content;
  }

  updateView(content) {
    this.$forContainer.innerHTML = content;
  }
}

let app = new App(); // eslint-disable-line
