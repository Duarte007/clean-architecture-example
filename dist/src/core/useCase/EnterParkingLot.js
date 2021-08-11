"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterParkingLot = void 0;
const ParkedCar_1 = require("../entity/ParkedCar");
class EnterParkingLot {
    constructor(parkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }
    async execute(code, plate, date) {
        const parkingLot = await this.parkingLotRepository.getParkingLot(code);
        const parkedCar = new ParkedCar_1.ParkedCar(code, plate, date);
        if (!parkingLot.isOpen(parkedCar.date))
            throw new Error("The parking lot is closed");
        if (parkingLot.isFull())
            throw new Error("The parking lot is full");
        await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);
        return parkingLot;
    }
}
exports.EnterParkingLot = EnterParkingLot;
