
import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';
export class DateEntity{

    @CreateDateColumn({ name : 'create_at', comment : '생성 시간'})
    createAt : Date;

    @UpdateDateColumn({ name : 'update_at', comment : '수정 시간'})
    updateAt : Date;

    @DeleteDateColumn({ name : 'delete_at', comment : '삭제 시간'})
    deleteAt : Date;
    
}