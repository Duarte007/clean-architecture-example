import { GetParkingLot } from "../core/useCase/GetParkingLot";
import { ParkingLotRepositoryMySQL } from "../infra/repository/ParkingLotRepositoryMySQL";

export class ParkingLotController {
  static async getParkingLots(params, body) {
    const parkingLotRepository = new ParkingLotRepositoryMySQL();
    const getParkingLot = new GetParkingLot(parkingLotRepository);
    const parkingLot = await getParkingLot.execute(params.code);
    return parkingLot;
  }
}
