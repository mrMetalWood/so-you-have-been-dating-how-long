import moment from 'moment';

class App {
  constructor() {
    this.startDate = moment('2015-09-05 20:00');

    this.$sinceContainer = document.querySelector('.value--since');
    this.$forContainer = document.querySelector('.value--for');

    this.$sinceContainer.textContent = this.startDate.format('MMMM Do YYYY');

    setInterval(() => {
      let diffMilliseconds = this.getDiffMilliseconds(this.startDate, moment()),
        durations = this.getDurations(diffMilliseconds),
        output = this.buildOutput(durations);

      this.updateView(output);
    }, 1000);
  }

  getDiffMilliseconds(dateStart, dateNow) {
    return dateNow.diff(dateStart);
  }

  getDurations(milliseconds) {
    let duration = moment.duration(milliseconds);

    return [
      duration.years() > 0 ? `${duration.years()} Years` : null,
      duration.months() > 0 ? `${duration.months()} Months` : null,
      duration.days() > 0 ? `${duration.days()} Days` : null,
      duration.hours() > 0 ? `${duration.hours()} Hours` : null,
      duration.minutes() > 0 ? `${duration.minutes()} Minutes` : null,
      `${duration.seconds()} Seconds`
    ];
  }

  buildOutput(durations) {
    let output = '';
    durations.forEach(duration => {
      if (duration) {
        output += `${duration} `;
      }
    });

    return output;
  }

  updateView(output) {
    this.$forContainer.textContent = output;
  }
}

let app = new App(); // eslint-disable-line
