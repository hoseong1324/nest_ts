import { DateEntity } from 'src/common/entities/date.entity';
import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';
@Entity("board")
export class Board extends DateEntity{

    @PrimaryGeneratedColumn()
    boardId: number;

    @Column()
    title: string;

    @Column()
    contents: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'usersId' })
    users: Users;


}