import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from '../Services/AxiosService.js';

class CarService {
  constructor() {
    this.getCars()
  }
  async getCars() {
let res = await api.get("cars")
console.log(res.data)
ProxyState.cars = res.data.map(rawCarData => new Car(rawCarData))
  }

  async postCar(newCar) {
    let res = await api.post("cars", newCar)
    console.log(res.data)
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }
  async editCar(editedCar) {
    let res = await api.put("cars/" + editedCar._id, editedCar)
    console.log(res.data)
    let indexToRemove = ProxyState.cars.findIndex(c => c._id == editedCar._id)
    console.log(indexToRemove)
    ProxyState.cars.splice(indexToRemove, 1, new Car(editedCar))
    // this.getCars()
     ProxyState.cars = ProxyState.cars
  }

  async deleteCar(carId) {
      let res = await api.delete("cars/" + carId)
      console.log(res.data)
      ProxyState.cars = ProxyState.cars.filter(c => c._id != carId)
      // this.getCars()
  }
}

export const carService = new CarService();

