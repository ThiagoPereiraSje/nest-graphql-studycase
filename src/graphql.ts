
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract clients(): Nullable<Nullable<Client>[]> | Promise<Nullable<Nullable<Client>[]>>;

    abstract client(id: string): Nullable<Client> | Promise<Nullable<Client>>;
}

export class Client {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
