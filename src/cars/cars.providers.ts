import { Car } from './entities/cars.entity';

export const carsProviders = [
  {
    provide: 'CARS_REPOSITORY',
    useValue: Car,
  },
];