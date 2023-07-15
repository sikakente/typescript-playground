import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SkyscannerService } from './skyscanner.service';

@Module({
  providers: [SkyscannerService],
  exports: [SkyscannerService],
  imports: [HttpModule],
})
export class SkyscannerModule {}
