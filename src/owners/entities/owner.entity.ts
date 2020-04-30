  
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
  Default,
} from 'sequelize-typescript';
import { Car } from '../../cars/entities/cars.entity';

@Table({
  tableName: 'owners',
  timestamps: false
})
export class Owner extends Model<Owner> {
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
      msg: `The length of name title can't be shorter than 3 and longer than 60 `,
  })
  @Column
  name: string;

  @Column
  purchaseDate: Date;

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