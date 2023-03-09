import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { upperDirectiveTransformer } from "./common/directives/upper-case.directive";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
      transformSchema: (schema) => upperDirectiveTransformer(schema, "upper"),
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), "src/graphql.ts"),
      },
    }),
  ],
})
export class AppModule {}
