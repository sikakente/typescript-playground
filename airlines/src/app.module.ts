import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirportsModule } from './airports/airports.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DuffelModule } from './duffel/duffel.module';
import { FlightsModule } from './flights/flights.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
