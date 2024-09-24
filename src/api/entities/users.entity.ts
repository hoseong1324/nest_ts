import { DateEntity } from 'src/common/entities/date.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("users")
export class Users extends DateEntity{

    @PrimaryGeneratedColumn()
    user_id : string;

    @Column()
    id : string;

    @Column()
    pw : string;

    @Column()
    name : string;
}
