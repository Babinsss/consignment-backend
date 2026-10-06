import { Injectable } from '@nestjs/common';
import { CreateConsignorDto } from './dto/create-consignor.dto';
import { UpdateConsignorDto } from './dto/update-consignor.dto';

@Injectable()
export class ConsignorService {
  create(createConsignorDto: CreateConsignorDto) {
    return 'This action adds a new consignor';
  }

  findAll() {
    return `This action returns all consignor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consignor`;
  }

  update(id: number, updateConsignorDto: UpdateConsignorDto) {
    return `This action updates a #${id} consignor`;
  }

  remove(id: number) {
    return `This action removes a #${id} consignor`;
  }
}
