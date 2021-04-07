import CarController from "./Controllers/CarController.js";

class App {
  carController = new CarController();
}

window["app"] = new App();
