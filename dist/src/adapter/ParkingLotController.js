"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotController = void 0;
const GetParkingLot_1 = require("../core/useCase/GetParkingLot");
const ParkingLotRepositoryMySQL_1 = require("../infra/repository/ParkingLotRepositoryMySQL");
class ParkingLotController {
    static async getParkingLots(params, body) {
        const parkingLotRepository = new ParkingLotRepositoryMySQL_1.ParkingLotRepositoryMySQL();
        const getParkingLot = new GetParkingLot_1.GetParkingLot(parkingLotRepository);
        const parkingLot = await getParkingLot.execute(params.code);
        return parkingLot;
    }
}
exports.ParkingLotController = ParkingLotController;
