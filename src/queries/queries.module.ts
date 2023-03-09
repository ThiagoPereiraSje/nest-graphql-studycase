import { Module } from '@nestjs/common';
import { QueriesResolver } from './queries.resolver';
import { QueriesService } from './queries.service';

@Module({
  providers: [QueriesResolver, QueriesService]
})
export class QueriesModule {}
