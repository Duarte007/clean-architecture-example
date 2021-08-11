import { ParkedCar } from "../entity/ParkedCar";
import { ParkingLot } from "../entity/ParkingLot";

export interface ParkingLotRepository {
  getParkingLot(code: string): Promise<ParkingLot>;
  saveParkedCar(code: string, plate: string, date: Date): void;
}
