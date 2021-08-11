import { ParkingLotRepositoryMySQL } from "./src/infra/repository/ParkingLotRepositoryMySQL";

const parkingLotRepositoryMySQL = new ParkingLotRepositoryMySQL();
(async () => {
  const response = await parkingLotRepositoryMySQL.getParkingLot("shopping");
  console.log(response);
})();
console.log("main");
