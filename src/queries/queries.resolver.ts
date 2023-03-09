import { ParseIntPipe } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { QueriesService } from "./queries.service";

@Resolver()
export class QueriesResolver {
  constructor(private quriesService: QueriesService) {}

  @Query("client")
  getClient(@Args("id", ParseIntPipe) id: number) {
    return this.quriesService.getClient(id);
  }
}
