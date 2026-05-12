import { Travel } from 'src/modules/travels/domain/schemas/Travel';
import { TravelStatus } from 'src/modules/travels/domain/types/travel-status.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('travels')
export class TravelEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  origin!: string;

  @Column()
  destination!: string;

  @Column({ type: 'timestamp with time zone' })
  departureDate!: Date;

  @Column({ type: 'timestamp with time zone' })
  arrivalDate!: Date;

  @Column('int')
  passengerCount!: number;

  @Column({ nullable: true })
  vehicleId?: string;

  @Column({ type: 'enum', enum: TravelStatus, default: TravelStatus.scheduled })
  status!: TravelStatus;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  static fromDomain(travel: Travel): TravelEntity {
    const entity = new TravelEntity();
    entity.id = travel.id;
    entity.origin = travel.origin;
    entity.destination = travel.destination;
    entity.departureDate = travel.departureDate;
    entity.arrivalDate = travel.arrivalDate;
    entity.passengerCount = travel.passengerCount;
    entity.vehicleId = travel.vehicleId;
    entity.status = travel.status;
    entity.createdAt = travel.createdAt;
    entity.updatedAt = travel.updatedAt;
    entity.notes = travel.notes;
    return entity;
  }

  toDomain(): Travel {
    return Travel.create({
      id: this.id,
      origin: this.origin,
      destination: this.destination,
      departureDate: this.departureDate,
      arrivalDate: this.arrivalDate,
      passengerCount: this.passengerCount,
      vehicleId: this.vehicleId,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      notes: this.notes,
    });
  }
}
