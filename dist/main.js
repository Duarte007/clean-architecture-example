"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingLotRepositoryMySQL_1 = require("./src/infra/repository/ParkingLotRepositoryMySQL");
const parkingLotRepositoryMySQL = new ParkingLotRepositoryMySQL_1.ParkingLotRepositoryMySQL();
(async () => {
    const response = await parkingLotRepositoryMySQL.getParkingLot("shopping");
    console.log(response);
})();
console.log("main");
