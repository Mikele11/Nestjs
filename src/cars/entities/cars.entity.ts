  
import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Default,
  HasOne,
} from 'sequelize-typescript';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from '../../owners/entities/owner.entity';
import { Manufacturer } from '../../manufacturers/entities/manufacturers.entity';

@Table({
  tableName: 'cars',
})
export class Car extends Model<Car> {

  // @PrimaryGeneratedColumn()
  // public id: string;

  // @PrimaryKey
  // @AutoIncrement
  // @Column(DataType.INTEGER)
  // public id: string;

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
})
id: string;

  @Column
  price: number;

  @Column
  firstRegistrationDate: Date;

  @HasMany(() => Owner)
  owners: Owner[];

  @HasOne(() => Manufacturer)
  manufacturer: Manufacturer;

}