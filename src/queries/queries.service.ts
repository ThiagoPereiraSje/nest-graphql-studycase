import { Injectable } from "@nestjs/common";

const clients = [
  {
    id: 1,
    name: "Aperam",
  },
  {
    id: 2,
    name: "Arcelor",
  },
];

@Injectable()
export class QueriesService {
  findClients() {
    return clients;
  }
}
