import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [CoffeesService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}
