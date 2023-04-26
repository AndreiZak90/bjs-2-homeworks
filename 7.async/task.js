class AlarmClock {
  constructor(alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (time === null) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    for (let item of this.alarmCollection) {
      if (item.time === time) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }
    const object = {
      time: time,
      callback: callback,
      canCall: true,
    };
    this.alarmCollection.push(object);
  }

  removeClock(time) {
    let rem = this.alarmCollection.filter((object) => object.time !== time);
    this.alarmCollection = rem;
  }

  getCurrentFormattedTime() {
    let time = new Date();
    return time.toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId) {
      return;
    }
    const inter = setInterval(
      () =>
        this.alarmCollection.forEach((clock) => {
          if (
            clock.time === this.getCurrentFormattedTime() &&
            clock.canCall === true
          ) {
            clock.canCall = false;
            clock.callback();
          }
        }),
      1000
    );
    this.intervalId = inter;
  }

  stop() {
    clearInterval(this.alarmCollection);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => (item.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
