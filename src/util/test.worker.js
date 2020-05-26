import * as Comlink from 'comlink';

const Worker = {
  runTask(a, b) {
    return a + b;
  }
}

Comlink.expose(Worker);
