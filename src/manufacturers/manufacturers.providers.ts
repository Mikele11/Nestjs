import { Manufacturer } from './entities/manufacturers.entity';

export const manufacturersProviders = [
  {
    provide: 'MANUFACTURERS_REPOSITORY',
    useValue: Manufacturer,
  },
];