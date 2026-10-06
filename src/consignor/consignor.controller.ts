import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsignorService } from './consignor.service';
import { CreateConsignorDto } from './dto/create-consignor.dto';
import { UpdateConsignorDto } from './dto/update-consignor.dto';

@Controller('consignor')
export class ConsignorController {
  constructor(private readonly consignorService: ConsignorService) {}

  @Post()
  create(@Body() createConsignorDto: CreateConsignorDto) {
    return this.consignorService.create(createConsignorDto);
  }

  @Get()
  findAll() {
    return this.consignorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consignorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsignorDto: UpdateConsignorDto) {
    return this.consignorService.update(+id, updateConsignorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consignorService.remove(+id);
  }
}
