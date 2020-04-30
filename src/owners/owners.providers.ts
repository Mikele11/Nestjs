import { Owner } from './entities/owner.entity';

export const ownersProviders = [
  {
    provide: 'OWNERS_REPOSITORY',
    useValue: Owner,
  },
];