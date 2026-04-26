import { Module } from '@nestjs/common';
import { TravelsModule } from './modules/travels.module';


@Module({
  imports: [TravelsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
