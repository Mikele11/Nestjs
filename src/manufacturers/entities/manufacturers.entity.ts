  
import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Length,
  BelongsTo,
} from 'sequelize-typescript';
import { Car } from '../../cars/entities/cars.entity';

@Table({
  tableName: 'manufacturers',
  timestamps: false
})
export class Manufacturer extends Model<Manufacturer> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: string;

  @ForeignKey(() => Car)
  @Column({
      type: DataType.UUID,
      field: 'car_id',
  })
  public carId: string;

  @Length({
      min: 3,
      max: 60,
      msg: `The length of post title can't be shorter than 3 and longer than 60 `,
  })
  @Column
  name: string;

  @Column
  phone: string;

  @Column
  siret: string;

  // @CreatedAt
  // @Column({ field: 'created_at' })
  // createdAt: Date;

  // @UpdatedAt
  // @Column({ field: 'updated_at' })
  // updatedAt: Date;

  // @DeletedAt
  // @Column({ field: 'deleted_at' })
  // deletedAt: Date;

  @BelongsTo(() => Car)
  public car: Car;
}