/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { log } from 'console';

@Injectable()
export class PrismaService extends PrismaClient {
constructor(config:ConfigService){
    super({
        datasources:{
            db:{
                // url:"mysql://root:1234@localhost:3306/nest",
                url:config.get('DATABASE_URL'),
            }
        }
    })
    // console.log(config.get('DATABASE_URL'));
    
}    
}
