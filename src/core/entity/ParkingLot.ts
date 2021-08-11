export class ParkingLot {
  public code: string;
  public capacity: number;
  public openHour: number;
  public closeHour: number;
  public occupiedSpaces: number;

  constructor(code: string, capacity: number, openHour: number, closeHour: number, occupiedSpaces: number) {
    this.code = code;
    this.capacity = capacity;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.occupiedSpaces = occupiedSpaces;
  }

  isOpen(date: Date) {
    const hour = date.getHours();
    return hour >= this.openHour && hour <= this.closeHour;
  }

  isFull() {
    return this.capacity === this.occupiedSpaces;
  }
}
