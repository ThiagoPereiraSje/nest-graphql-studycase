import { Query, Resolver } from "@nestjs/graphql";
import { QueriesService } from "./queries.service";

@Resolver()
export class QueriesResolver {
  constructor(private quriesService: QueriesService) {}

  @Query()
  clients() {
    return this.quriesService.findClients();
  }
}
