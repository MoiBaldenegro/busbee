import { Module } from '@nestjs/common';
import { PostgresDatabaseModule } from './persistence/postgres/postgres-database.module';
import { ControllersController } from './presentation/http-server/controllers/controllers.controller';

@Module({
  imports: [PostgresDatabaseModule],
  controllers: [ControllersController],
})
export class InfrastructureModule {}
