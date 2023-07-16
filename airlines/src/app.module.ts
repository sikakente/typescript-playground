import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirportsModule } from './airports/airports.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DuffelModule } from './duffel/duffel.module';
import { FlightsModule } from './flights/flights.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.development.local',
        '.env.development',
        '.env.local',
        '.env',
      ],
      isGlobal: true,
    }),
    FlightsModule,
    AirportsModule,
    DuffelModule,
    PrismaModule,
    PostModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
