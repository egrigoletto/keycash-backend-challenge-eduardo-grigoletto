import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity ()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: "enum",
    enum: ["casa", "apartamento", "terreno", "sobrado", "prédio", "galpão"],
    default: "casa",
  })
  type: "casa" | "apartamento" | "terreno" | "sobrado" | "prédio" | "galpão";

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  addressNumber: string;

  @Column({
    nullable: true,
    default: null,
  })
  addressComplement: string;

  @Column()
  addressNeighborhood: string;

  @Column()
  cep: string;

  @Column({
    nullable: true,
    default: null,
  })
  rooms: number;

  @Column({
    nullable: true,
    default: null,
  })
  garageVacancys: number;

  @Column()
  propertyMeterage: number;

  @Column()
  venueValue: number;

  @Column()
  rentValue: number;
}