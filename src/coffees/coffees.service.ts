import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Roti',
      brand: 'JCO',
      flavors: ['coklat', 'keju', 'cappucino'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    let currentId = this.coffees[this.coffees.length - 1]
      ? this.coffees[this.coffees.length - 1].id
      : 0;
    const newCoffee = {
      id: ++currentId,
      ...createCoffeeDto,
    };
    this.coffees.push(newCoffee);
    return this.coffees;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    let existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
      return this.coffees;
    } else {
      throw new NotFoundException(`Coffee ${id} not found`);
    }
  }
}
