import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar' })
    firstname!: string

    @Column({ type: 'varchar' })
    lastname!: string

    @Column({ type: 'varchar', unique: true })
    username!: string

    @Column({ type: 'varchar', unique: true })
    email!: string

    @Column()
    @Exclude()
    hashedPassword!: string

    @Column({ default: false })
    isActive!: boolean

    @Column({ type: 'text', nullable: true })
    @Exclude()
    activationToken!: string | null

    @Column({ default: false })
    isTwoFactorEnabled!: Boolean

    @Column({ type: 'varchar', nullable: true })
    @Exclude()
    twoFactorSecret!: string | null

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

}
