import { Car } from '../entities/cars.entity'

export class CarDto {
    id: string;

    readonly price: number;

    readonly firstRegistrationDate: Date;

    constructor(car: Car) {
        this.id = car.id;
        this.price = car.price;
        this.firstRegistrationDate = car.firstRegistrationDate;

    }
}