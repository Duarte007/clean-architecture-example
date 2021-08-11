"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotRepositoryMemory = void 0;
const ParkingLotAdapter_1 = require("../../adapter/ParkingLotAdapter");
class ParkingLotRepositoryMemory {
    constructor() {
        this.parkingLots = [{ code: "shopping", capacity: 5, openHour: 8, closeHour: 22, occupiedSpaces: 0 }];
        this.parkedCars = [];
    }
    getParkingLot(code) {
        const parkingLotData = this.parkingLots.find((parkingLot) => parkingLot.code === code);
        const occupiedSpaces = this.parkedCars.length;
        const parkingLot = ParkingLotAdapter_1.ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.openHour, parkingLotData.closeHour, occupiedSpaces);
        return Promise.resolve(parkingLot);
    }
    saveParkedCar(code, plate, date) {
        this.parkedCars.push({ code, plate, date });
    }
}
exports.ParkingLotRepositoryMemory = ParkingLotRepositoryMemory;
