/**
 * Esquema de Travel que representa un viaje dentro del sistema.
 *
 * Esta clase contiene las propiedades principales de viaje usadas
 * en la capa de dominio para operaciones relacionadas con viajes.
 */
import { TravelStatus } from '../types/travel-status.enum';

export class Travel {
  /** Identificador único del registro de viaje. */
  id: string;

  /** Ubicación de origen del viaje. */
  origin: string;

  /** Ubicación de destino del viaje. */
  destination: string;

  /** Fecha y hora de salida planificada. */
  departureDate: Date;

  /** Fecha y hora de llegada planificada. */
  arrivalDate: Date;

  /** Cantidad de pasajeros asignados a este viaje. */
  passengerCount: number;

  /** Identificador opcional del vehículo usado para el viaje. */
  vehicleId?: string;

  /** Estado actual del viaje. */
  status: TravelStatus;

  /** Fecha y hora de creación del registro de viaje. */
  createdAt: Date;

  /** Fecha y hora de última actualización del registro de viaje. */
  updatedAt: Date;

  /** Notas o comentarios opcionales sobre el viaje. */
  notes?: string;

  private constructor(data: Partial<Travel> = {}) {
    this.id = data.id ?? '';
    this.origin = data.origin ?? '';
    this.destination = data.destination ?? '';
    this.departureDate = data.departureDate ?? new Date();
    this.arrivalDate = data.arrivalDate ?? new Date();
    this.passengerCount = data.passengerCount ?? 0;
    this.vehicleId = data.vehicleId;
    this.status = data.status ?? TravelStatus.scheduled;
    this.createdAt = data.createdAt ?? new Date();
    this.updatedAt = data.updatedAt ?? new Date();
    this.notes = data.notes;
  }

  /**
   * Crea una nueva instancia de Travel usando valores por defecto
   * cuando no se proporcionan en los datos.
   */
  static create(data: Partial<Travel> = {}): Travel {
    return new Travel(data);
  }

  /**
   * Convierte la instancia de dominio en un objeto primitivo plano.
   */
  toPrimitives(): Record<string, unknown> {
    return {
      id: this.id,
      origin: this.origin,
      destination: this.destination,
      departureDate: this.departureDate.toISOString(),
      arrivalDate: this.arrivalDate.toISOString(),
      passengerCount: this.passengerCount,
      vehicleId: this.vehicleId,
      status: this.status,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      notes: this.notes,
    };
  }
}
