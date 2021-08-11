"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotRepositoryMySQL = void 0;
const ParkingLotAdapter_1 = require("../../adapter/ParkingLotAdapter");
const database_1 = require("../database/database");
class ParkingLotRepositoryMySQL {
    async getParkingLot(code) {
        const parkingLotData = await database_1.mysqlDB
            .raw(`select *, (select count(*) from parked_car where parked_car.code = parking_lot.code) as occupiedSpaces from parking_lot where code = "${code}"`)
            .then((result) => result?.[0]?.[0]);
        if (!parkingLotData)
            throw new Error("Parking lot not found");
        return ParkingLotAdapter_1.ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, parkingLotData.occupiedSpaces);
    }
    async saveParkedCar(code, plate, date) {
        await database_1.mysqlDB("parked_car").insert({ code, plate, date });
    }
}
exports.ParkingLotRepositoryMySQL = ParkingLotRepositoryMySQL;
