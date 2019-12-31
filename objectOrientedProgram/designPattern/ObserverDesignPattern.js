class Subject {
    constructor(state) {
      this.state = state;
      this.observers = [];
    }
  
    getState() {
      return this.state;
    }
  
    setState(state) {
      this.state = state;
  
      this.notifyObservers(this.state);
    }
  
    registerObserver(observer) {
      this.observers.push(observer);
    }
  
    unregisterObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers(data) {
      this.observers.forEach(observer => observer.notify(data));
    }
  }

  class Observer {
    constructor(subject) {
      subject.registerObserver(this);
  
      this.subscribers = [];
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    notify(data) {
      this.subscribers.forEach(subscriber => subscriber(data));
    }
  }

  const observable = new Subject(10);
const observerA = new Observer(observable);
const observerB = new Observer(observable);

observerA.subscribe(data => {
  console.log("observerA", data);
});

observerB.subscribe(data => {
  console.log("observerB", data);
});

observable.setState(20);
observable.setState(30);
observable.setState(20);