
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model book_tran
 * 
 */
export type book_tran = $Result.DefaultSelection<Prisma.$book_tranPayload>
/**
 * Model book_tran_history
 * 
 */
export type book_tran_history = $Result.DefaultSelection<Prisma.$book_tran_historyPayload>
/**
 * Model books
 * 
 */
export type books = $Result.DefaultSelection<Prisma.$booksPayload>
/**
 * Model fines
 * 
 */
export type fines = $Result.DefaultSelection<Prisma.$finesPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model user_wishlist
 * 
 */
export type user_wishlist = $Result.DefaultSelection<Prisma.$user_wishlistPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model contact_us
 * 
 */
export type contact_us = $Result.DefaultSelection<Prisma.$contact_usPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const record_status: {
  active: 'active',
  inactive: 'inactive'
};

export type record_status = (typeof record_status)[keyof typeof record_status]


export const notifications_type: {
  issue: 'issue',
  return: 'return'
};

export type notifications_type = (typeof notifications_type)[keyof typeof notifications_type]


export const book_tran_status: {
  available: 'available',
  not_available: 'not_available'
};

export type book_tran_status = (typeof book_tran_status)[keyof typeof book_tran_status]


export const book_tran_history_status: {
  issued: 'issued',
  returned: 'returned',
  pending: 'pending',
  rejected: 'rejected'
};

export type book_tran_history_status = (typeof book_tran_history_status)[keyof typeof book_tran_history_status]


export const users_role: {
  patron: 'patron',
  librarian: 'librarian',
  admin: 'admin'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const fines_status: {
  unpaid: 'unpaid',
  paid: 'paid'
};

export type fines_status = (typeof fines_status)[keyof typeof fines_status]


export const users_status: {
  active: 'active',
  banned: 'banned'
};

export type users_status = (typeof users_status)[keyof typeof users_status]


export const notifications_status: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type notifications_status = (typeof notifications_status)[keyof typeof notifications_status]


export const gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type gender = (typeof gender)[keyof typeof gender]

}

export type record_status = $Enums.record_status

export const record_status: typeof $Enums.record_status

export type notifications_type = $Enums.notifications_type

export const notifications_type: typeof $Enums.notifications_type

export type book_tran_status = $Enums.book_tran_status

export const book_tran_status: typeof $Enums.book_tran_status

export type book_tran_history_status = $Enums.book_tran_history_status

export const book_tran_history_status: typeof $Enums.book_tran_history_status

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

export type fines_status = $Enums.fines_status

export const fines_status: typeof $Enums.fines_status

export type users_status = $Enums.users_status

export const users_status: typeof $Enums.users_status

export type notifications_status = $Enums.notifications_status

export const notifications_status: typeof $Enums.notifications_status

export type gender = $Enums.gender

export const gender: typeof $Enums.gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Book_trans
 * const book_trans = await prisma.book_tran.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Book_trans
   * const book_trans = await prisma.book_tran.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.book_tran`: Exposes CRUD operations for the **book_tran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_trans
    * const book_trans = await prisma.book_tran.findMany()
    * ```
    */
  get book_tran(): Prisma.book_tranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book_tran_history`: Exposes CRUD operations for the **book_tran_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_tran_histories
    * const book_tran_histories = await prisma.book_tran_history.findMany()
    * ```
    */
  get book_tran_history(): Prisma.book_tran_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.booksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fines`: Exposes CRUD operations for the **fines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fines
    * const fines = await prisma.fines.findMany()
    * ```
    */
  get fines(): Prisma.finesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_wishlist`: Exposes CRUD operations for the **user_wishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_wishlists
    * const user_wishlists = await prisma.user_wishlist.findMany()
    * ```
    */
  get user_wishlist(): Prisma.user_wishlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact_us`: Exposes CRUD operations for the **contact_us** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contact_uses
    * const contact_uses = await prisma.contact_us.findMany()
    * ```
    */
  get contact_us(): Prisma.contact_usDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    book_tran: 'book_tran',
    book_tran_history: 'book_tran_history',
    books: 'books',
    fines: 'fines',
    logs: 'logs',
    notifications: 'notifications',
    user_wishlist: 'user_wishlist',
    users: 'users',
    contact_us: 'contact_us'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "book_tran" | "book_tran_history" | "books" | "fines" | "logs" | "notifications" | "user_wishlist" | "users" | "contact_us"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      book_tran: {
        payload: Prisma.$book_tranPayload<ExtArgs>
        fields: Prisma.book_tranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.book_tranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.book_tranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload>
          }
          findFirst: {
            args: Prisma.book_tranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.book_tranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload>
          }
          findMany: {
            args: Prisma.book_tranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload>[]
          }
          create: {
            args: Prisma.book_tranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload>
          }
          createMany: {
            args: Prisma.book_tranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.book_tranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload>
          }
          update: {
            args: Prisma.book_tranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload>
          }
          deleteMany: {
            args: Prisma.book_tranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.book_tranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.book_tranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tranPayload>
          }
          aggregate: {
            args: Prisma.Book_tranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_tran>
          }
          groupBy: {
            args: Prisma.book_tranGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_tranGroupByOutputType>[]
          }
          count: {
            args: Prisma.book_tranCountArgs<ExtArgs>
            result: $Utils.Optional<Book_tranCountAggregateOutputType> | number
          }
        }
      }
      book_tran_history: {
        payload: Prisma.$book_tran_historyPayload<ExtArgs>
        fields: Prisma.book_tran_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.book_tran_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.book_tran_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload>
          }
          findFirst: {
            args: Prisma.book_tran_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.book_tran_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload>
          }
          findMany: {
            args: Prisma.book_tran_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload>[]
          }
          create: {
            args: Prisma.book_tran_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload>
          }
          createMany: {
            args: Prisma.book_tran_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.book_tran_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload>
          }
          update: {
            args: Prisma.book_tran_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload>
          }
          deleteMany: {
            args: Prisma.book_tran_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.book_tran_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.book_tran_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tran_historyPayload>
          }
          aggregate: {
            args: Prisma.Book_tran_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_tran_history>
          }
          groupBy: {
            args: Prisma.book_tran_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_tran_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.book_tran_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Book_tran_historyCountAggregateOutputType> | number
          }
        }
      }
      books: {
        payload: Prisma.$booksPayload<ExtArgs>
        fields: Prisma.booksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findFirst: {
            args: Prisma.booksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findMany: {
            args: Prisma.booksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          create: {
            args: Prisma.booksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          createMany: {
            args: Prisma.booksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.booksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          update: {
            args: Prisma.booksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          deleteMany: {
            args: Prisma.booksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.booksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.booksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.booksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.booksCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      fines: {
        payload: Prisma.$finesPayload<ExtArgs>
        fields: Prisma.finesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.finesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.finesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload>
          }
          findFirst: {
            args: Prisma.finesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.finesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload>
          }
          findMany: {
            args: Prisma.finesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload>[]
          }
          create: {
            args: Prisma.finesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload>
          }
          createMany: {
            args: Prisma.finesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.finesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload>
          }
          update: {
            args: Prisma.finesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload>
          }
          deleteMany: {
            args: Prisma.finesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.finesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.finesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finesPayload>
          }
          aggregate: {
            args: Prisma.FinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFines>
          }
          groupBy: {
            args: Prisma.finesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.finesCountArgs<ExtArgs>
            result: $Utils.Optional<FinesCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      user_wishlist: {
        payload: Prisma.$user_wishlistPayload<ExtArgs>
        fields: Prisma.user_wishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_wishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_wishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload>
          }
          findFirst: {
            args: Prisma.user_wishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_wishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload>
          }
          findMany: {
            args: Prisma.user_wishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload>[]
          }
          create: {
            args: Prisma.user_wishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload>
          }
          createMany: {
            args: Prisma.user_wishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_wishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload>
          }
          update: {
            args: Prisma.user_wishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload>
          }
          deleteMany: {
            args: Prisma.user_wishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_wishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_wishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_wishlistPayload>
          }
          aggregate: {
            args: Prisma.User_wishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_wishlist>
          }
          groupBy: {
            args: Prisma.user_wishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_wishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_wishlistCountArgs<ExtArgs>
            result: $Utils.Optional<User_wishlistCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      contact_us: {
        payload: Prisma.$contact_usPayload<ExtArgs>
        fields: Prisma.contact_usFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contact_usFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contact_usFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload>
          }
          findFirst: {
            args: Prisma.contact_usFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contact_usFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload>
          }
          findMany: {
            args: Prisma.contact_usFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload>[]
          }
          create: {
            args: Prisma.contact_usCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload>
          }
          createMany: {
            args: Prisma.contact_usCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contact_usDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload>
          }
          update: {
            args: Prisma.contact_usUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload>
          }
          deleteMany: {
            args: Prisma.contact_usDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contact_usUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contact_usUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_usPayload>
          }
          aggregate: {
            args: Prisma.Contact_usAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact_us>
          }
          groupBy: {
            args: Prisma.contact_usGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contact_usGroupByOutputType>[]
          }
          count: {
            args: Prisma.contact_usCountArgs<ExtArgs>
            result: $Utils.Optional<Contact_usCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    book_tran?: book_tranOmit
    book_tran_history?: book_tran_historyOmit
    books?: booksOmit
    fines?: finesOmit
    logs?: logsOmit
    notifications?: notificationsOmit
    user_wishlist?: user_wishlistOmit
    users?: usersOmit
    contact_us?: contact_usOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Book_tranCountOutputType
   */

  export type Book_tranCountOutputType = {
    book_tran_history: number
    notifications: number
  }

  export type Book_tranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_tran_history?: boolean | Book_tranCountOutputTypeCountBook_tran_historyArgs
    notifications?: boolean | Book_tranCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * Book_tranCountOutputType without action
   */
  export type Book_tranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_tranCountOutputType
     */
    select?: Book_tranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Book_tranCountOutputType without action
   */
  export type Book_tranCountOutputTypeCountBook_tran_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tran_historyWhereInput
  }

  /**
   * Book_tranCountOutputType without action
   */
  export type Book_tranCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Count Type Book_tran_historyCountOutputType
   */

  export type Book_tran_historyCountOutputType = {
    fines: number
  }

  export type Book_tran_historyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fines?: boolean | Book_tran_historyCountOutputTypeCountFinesArgs
  }

  // Custom InputTypes
  /**
   * Book_tran_historyCountOutputType without action
   */
  export type Book_tran_historyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_tran_historyCountOutputType
     */
    select?: Book_tran_historyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Book_tran_historyCountOutputType without action
   */
  export type Book_tran_historyCountOutputTypeCountFinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: finesWhereInput
  }


  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    book_tran: number
    book_tran_history: number
    notifications: number
    user_wishlist: number
  }

  export type BooksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_tran?: boolean | BooksCountOutputTypeCountBook_tranArgs
    book_tran_history?: boolean | BooksCountOutputTypeCountBook_tran_historyArgs
    notifications?: boolean | BooksCountOutputTypeCountNotificationsArgs
    user_wishlist?: boolean | BooksCountOutputTypeCountUser_wishlistArgs
  }

  // Custom InputTypes
  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountBook_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tranWhereInput
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountBook_tran_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tran_historyWhereInput
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountUser_wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_wishlistWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    book_tran: number
    book_tran_history_book_tran_history_requested_byTousers: number
    book_tran_history_book_tran_history_approved_byTousers: number
    fines: number
    logs: number
    notifications_notifications_from_user_idTousers: number
    notifications_notifications_to_user_idTousers: number
    user_wishlist: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_tran?: boolean | UsersCountOutputTypeCountBook_tranArgs
    book_tran_history_book_tran_history_requested_byTousers?: boolean | UsersCountOutputTypeCountBook_tran_history_book_tran_history_requested_byTousersArgs
    book_tran_history_book_tran_history_approved_byTousers?: boolean | UsersCountOutputTypeCountBook_tran_history_book_tran_history_approved_byTousersArgs
    fines?: boolean | UsersCountOutputTypeCountFinesArgs
    logs?: boolean | UsersCountOutputTypeCountLogsArgs
    notifications_notifications_from_user_idTousers?: boolean | UsersCountOutputTypeCountNotifications_notifications_from_user_idTousersArgs
    notifications_notifications_to_user_idTousers?: boolean | UsersCountOutputTypeCountNotifications_notifications_to_user_idTousersArgs
    user_wishlist?: boolean | UsersCountOutputTypeCountUser_wishlistArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBook_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tranWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBook_tran_history_book_tran_history_requested_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tran_historyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBook_tran_history_book_tran_history_approved_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tran_historyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: finesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotifications_notifications_from_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotifications_notifications_to_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_wishlistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model book_tran
   */

  export type AggregateBook_tran = {
    _count: Book_tranCountAggregateOutputType | null
    _avg: Book_tranAvgAggregateOutputType | null
    _sum: Book_tranSumAggregateOutputType | null
    _min: Book_tranMinAggregateOutputType | null
    _max: Book_tranMaxAggregateOutputType | null
  }

  export type Book_tranAvgAggregateOutputType = {
    tran_id: number | null
    book_id: number | null
    user_id: number | null
  }

  export type Book_tranSumAggregateOutputType = {
    tran_id: number | null
    book_id: number | null
    user_id: number | null
  }

  export type Book_tranMinAggregateOutputType = {
    tran_id: number | null
    book_id: number | null
    status: $Enums.book_tran_status | null
    user_id: number | null
    record_status: $Enums.record_status | null
  }

  export type Book_tranMaxAggregateOutputType = {
    tran_id: number | null
    book_id: number | null
    status: $Enums.book_tran_status | null
    user_id: number | null
    record_status: $Enums.record_status | null
  }

  export type Book_tranCountAggregateOutputType = {
    tran_id: number
    book_id: number
    status: number
    user_id: number
    record_status: number
    _all: number
  }


  export type Book_tranAvgAggregateInputType = {
    tran_id?: true
    book_id?: true
    user_id?: true
  }

  export type Book_tranSumAggregateInputType = {
    tran_id?: true
    book_id?: true
    user_id?: true
  }

  export type Book_tranMinAggregateInputType = {
    tran_id?: true
    book_id?: true
    status?: true
    user_id?: true
    record_status?: true
  }

  export type Book_tranMaxAggregateInputType = {
    tran_id?: true
    book_id?: true
    status?: true
    user_id?: true
    record_status?: true
  }

  export type Book_tranCountAggregateInputType = {
    tran_id?: true
    book_id?: true
    status?: true
    user_id?: true
    record_status?: true
    _all?: true
  }

  export type Book_tranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_tran to aggregate.
     */
    where?: book_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_trans to fetch.
     */
    orderBy?: book_tranOrderByWithRelationInput | book_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: book_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_trans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned book_trans
    **/
    _count?: true | Book_tranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Book_tranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Book_tranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_tranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_tranMaxAggregateInputType
  }

  export type GetBook_tranAggregateType<T extends Book_tranAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_tran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_tran[P]>
      : GetScalarType<T[P], AggregateBook_tran[P]>
  }




  export type book_tranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tranWhereInput
    orderBy?: book_tranOrderByWithAggregationInput | book_tranOrderByWithAggregationInput[]
    by: Book_tranScalarFieldEnum[] | Book_tranScalarFieldEnum
    having?: book_tranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_tranCountAggregateInputType | true
    _avg?: Book_tranAvgAggregateInputType
    _sum?: Book_tranSumAggregateInputType
    _min?: Book_tranMinAggregateInputType
    _max?: Book_tranMaxAggregateInputType
  }

  export type Book_tranGroupByOutputType = {
    tran_id: number
    book_id: number | null
    status: $Enums.book_tran_status | null
    user_id: number | null
    record_status: $Enums.record_status | null
    _count: Book_tranCountAggregateOutputType | null
    _avg: Book_tranAvgAggregateOutputType | null
    _sum: Book_tranSumAggregateOutputType | null
    _min: Book_tranMinAggregateOutputType | null
    _max: Book_tranMaxAggregateOutputType | null
  }

  type GetBook_tranGroupByPayload<T extends book_tranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_tranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_tranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_tranGroupByOutputType[P]>
            : GetScalarType<T[P], Book_tranGroupByOutputType[P]>
        }
      >
    >


  export type book_tranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tran_id?: boolean
    book_id?: boolean
    status?: boolean
    user_id?: boolean
    record_status?: boolean
    books?: boolean | book_tran$booksArgs<ExtArgs>
    users?: boolean | book_tran$usersArgs<ExtArgs>
    book_tran_history?: boolean | book_tran$book_tran_historyArgs<ExtArgs>
    notifications?: boolean | book_tran$notificationsArgs<ExtArgs>
    _count?: boolean | Book_tranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_tran"]>



  export type book_tranSelectScalar = {
    tran_id?: boolean
    book_id?: boolean
    status?: boolean
    user_id?: boolean
    record_status?: boolean
  }

  export type book_tranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tran_id" | "book_id" | "status" | "user_id" | "record_status", ExtArgs["result"]["book_tran"]>
  export type book_tranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | book_tran$booksArgs<ExtArgs>
    users?: boolean | book_tran$usersArgs<ExtArgs>
    book_tran_history?: boolean | book_tran$book_tran_historyArgs<ExtArgs>
    notifications?: boolean | book_tran$notificationsArgs<ExtArgs>
    _count?: boolean | Book_tranCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $book_tranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book_tran"
    objects: {
      books: Prisma.$booksPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      book_tran_history: Prisma.$book_tran_historyPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tran_id: number
      book_id: number | null
      status: $Enums.book_tran_status | null
      user_id: number | null
      record_status: $Enums.record_status | null
    }, ExtArgs["result"]["book_tran"]>
    composites: {}
  }

  type book_tranGetPayload<S extends boolean | null | undefined | book_tranDefaultArgs> = $Result.GetResult<Prisma.$book_tranPayload, S>

  type book_tranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<book_tranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Book_tranCountAggregateInputType | true
    }

  export interface book_tranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book_tran'], meta: { name: 'book_tran' } }
    /**
     * Find zero or one Book_tran that matches the filter.
     * @param {book_tranFindUniqueArgs} args - Arguments to find a Book_tran
     * @example
     * // Get one Book_tran
     * const book_tran = await prisma.book_tran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends book_tranFindUniqueArgs>(args: SelectSubset<T, book_tranFindUniqueArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book_tran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {book_tranFindUniqueOrThrowArgs} args - Arguments to find a Book_tran
     * @example
     * // Get one Book_tran
     * const book_tran = await prisma.book_tran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends book_tranFindUniqueOrThrowArgs>(args: SelectSubset<T, book_tranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_tran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tranFindFirstArgs} args - Arguments to find a Book_tran
     * @example
     * // Get one Book_tran
     * const book_tran = await prisma.book_tran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends book_tranFindFirstArgs>(args?: SelectSubset<T, book_tranFindFirstArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_tran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tranFindFirstOrThrowArgs} args - Arguments to find a Book_tran
     * @example
     * // Get one Book_tran
     * const book_tran = await prisma.book_tran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends book_tranFindFirstOrThrowArgs>(args?: SelectSubset<T, book_tranFindFirstOrThrowArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_trans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_trans
     * const book_trans = await prisma.book_tran.findMany()
     * 
     * // Get first 10 Book_trans
     * const book_trans = await prisma.book_tran.findMany({ take: 10 })
     * 
     * // Only select the `tran_id`
     * const book_tranWithTran_idOnly = await prisma.book_tran.findMany({ select: { tran_id: true } })
     * 
     */
    findMany<T extends book_tranFindManyArgs>(args?: SelectSubset<T, book_tranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book_tran.
     * @param {book_tranCreateArgs} args - Arguments to create a Book_tran.
     * @example
     * // Create one Book_tran
     * const Book_tran = await prisma.book_tran.create({
     *   data: {
     *     // ... data to create a Book_tran
     *   }
     * })
     * 
     */
    create<T extends book_tranCreateArgs>(args: SelectSubset<T, book_tranCreateArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Book_trans.
     * @param {book_tranCreateManyArgs} args - Arguments to create many Book_trans.
     * @example
     * // Create many Book_trans
     * const book_tran = await prisma.book_tran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends book_tranCreateManyArgs>(args?: SelectSubset<T, book_tranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book_tran.
     * @param {book_tranDeleteArgs} args - Arguments to delete one Book_tran.
     * @example
     * // Delete one Book_tran
     * const Book_tran = await prisma.book_tran.delete({
     *   where: {
     *     // ... filter to delete one Book_tran
     *   }
     * })
     * 
     */
    delete<T extends book_tranDeleteArgs>(args: SelectSubset<T, book_tranDeleteArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book_tran.
     * @param {book_tranUpdateArgs} args - Arguments to update one Book_tran.
     * @example
     * // Update one Book_tran
     * const book_tran = await prisma.book_tran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends book_tranUpdateArgs>(args: SelectSubset<T, book_tranUpdateArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Book_trans.
     * @param {book_tranDeleteManyArgs} args - Arguments to filter Book_trans to delete.
     * @example
     * // Delete a few Book_trans
     * const { count } = await prisma.book_tran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends book_tranDeleteManyArgs>(args?: SelectSubset<T, book_tranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_trans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_trans
     * const book_tran = await prisma.book_tran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends book_tranUpdateManyArgs>(args: SelectSubset<T, book_tranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book_tran.
     * @param {book_tranUpsertArgs} args - Arguments to update or create a Book_tran.
     * @example
     * // Update or create a Book_tran
     * const book_tran = await prisma.book_tran.upsert({
     *   create: {
     *     // ... data to create a Book_tran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_tran we want to update
     *   }
     * })
     */
    upsert<T extends book_tranUpsertArgs>(args: SelectSubset<T, book_tranUpsertArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Book_trans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tranCountArgs} args - Arguments to filter Book_trans to count.
     * @example
     * // Count the number of Book_trans
     * const count = await prisma.book_tran.count({
     *   where: {
     *     // ... the filter for the Book_trans we want to count
     *   }
     * })
    **/
    count<T extends book_tranCountArgs>(
      args?: Subset<T, book_tranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_tranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_tran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_tranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Book_tranAggregateArgs>(args: Subset<T, Book_tranAggregateArgs>): Prisma.PrismaPromise<GetBook_tranAggregateType<T>>

    /**
     * Group by Book_tran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends book_tranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: book_tranGroupByArgs['orderBy'] }
        : { orderBy?: book_tranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, book_tranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_tranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book_tran model
   */
  readonly fields: book_tranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book_tran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__book_tranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends book_tran$booksArgs<ExtArgs> = {}>(args?: Subset<T, book_tran$booksArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends book_tran$usersArgs<ExtArgs> = {}>(args?: Subset<T, book_tran$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    book_tran_history<T extends book_tran$book_tran_historyArgs<ExtArgs> = {}>(args?: Subset<T, book_tran$book_tran_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends book_tran$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, book_tran$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book_tran model
   */
  interface book_tranFieldRefs {
    readonly tran_id: FieldRef<"book_tran", 'Int'>
    readonly book_id: FieldRef<"book_tran", 'Int'>
    readonly status: FieldRef<"book_tran", 'book_tran_status'>
    readonly user_id: FieldRef<"book_tran", 'Int'>
    readonly record_status: FieldRef<"book_tran", 'record_status'>
  }
    

  // Custom InputTypes
  /**
   * book_tran findUnique
   */
  export type book_tranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * Filter, which book_tran to fetch.
     */
    where: book_tranWhereUniqueInput
  }

  /**
   * book_tran findUniqueOrThrow
   */
  export type book_tranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * Filter, which book_tran to fetch.
     */
    where: book_tranWhereUniqueInput
  }

  /**
   * book_tran findFirst
   */
  export type book_tranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * Filter, which book_tran to fetch.
     */
    where?: book_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_trans to fetch.
     */
    orderBy?: book_tranOrderByWithRelationInput | book_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_trans.
     */
    cursor?: book_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_trans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_trans.
     */
    distinct?: Book_tranScalarFieldEnum | Book_tranScalarFieldEnum[]
  }

  /**
   * book_tran findFirstOrThrow
   */
  export type book_tranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * Filter, which book_tran to fetch.
     */
    where?: book_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_trans to fetch.
     */
    orderBy?: book_tranOrderByWithRelationInput | book_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_trans.
     */
    cursor?: book_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_trans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_trans.
     */
    distinct?: Book_tranScalarFieldEnum | Book_tranScalarFieldEnum[]
  }

  /**
   * book_tran findMany
   */
  export type book_tranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * Filter, which book_trans to fetch.
     */
    where?: book_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_trans to fetch.
     */
    orderBy?: book_tranOrderByWithRelationInput | book_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing book_trans.
     */
    cursor?: book_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_trans.
     */
    skip?: number
    distinct?: Book_tranScalarFieldEnum | Book_tranScalarFieldEnum[]
  }

  /**
   * book_tran create
   */
  export type book_tranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * The data needed to create a book_tran.
     */
    data?: XOR<book_tranCreateInput, book_tranUncheckedCreateInput>
  }

  /**
   * book_tran createMany
   */
  export type book_tranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many book_trans.
     */
    data: book_tranCreateManyInput | book_tranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book_tran update
   */
  export type book_tranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * The data needed to update a book_tran.
     */
    data: XOR<book_tranUpdateInput, book_tranUncheckedUpdateInput>
    /**
     * Choose, which book_tran to update.
     */
    where: book_tranWhereUniqueInput
  }

  /**
   * book_tran updateMany
   */
  export type book_tranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update book_trans.
     */
    data: XOR<book_tranUpdateManyMutationInput, book_tranUncheckedUpdateManyInput>
    /**
     * Filter which book_trans to update
     */
    where?: book_tranWhereInput
    /**
     * Limit how many book_trans to update.
     */
    limit?: number
  }

  /**
   * book_tran upsert
   */
  export type book_tranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * The filter to search for the book_tran to update in case it exists.
     */
    where: book_tranWhereUniqueInput
    /**
     * In case the book_tran found by the `where` argument doesn't exist, create a new book_tran with this data.
     */
    create: XOR<book_tranCreateInput, book_tranUncheckedCreateInput>
    /**
     * In case the book_tran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<book_tranUpdateInput, book_tranUncheckedUpdateInput>
  }

  /**
   * book_tran delete
   */
  export type book_tranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    /**
     * Filter which book_tran to delete.
     */
    where: book_tranWhereUniqueInput
  }

  /**
   * book_tran deleteMany
   */
  export type book_tranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_trans to delete
     */
    where?: book_tranWhereInput
    /**
     * Limit how many book_trans to delete.
     */
    limit?: number
  }

  /**
   * book_tran.books
   */
  export type book_tran$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    where?: booksWhereInput
  }

  /**
   * book_tran.users
   */
  export type book_tran$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * book_tran.book_tran_history
   */
  export type book_tran$book_tran_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    where?: book_tran_historyWhereInput
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    cursor?: book_tran_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_tran_historyScalarFieldEnum | Book_tran_historyScalarFieldEnum[]
  }

  /**
   * book_tran.notifications
   */
  export type book_tran$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * book_tran without action
   */
  export type book_tranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
  }


  /**
   * Model book_tran_history
   */

  export type AggregateBook_tran_history = {
    _count: Book_tran_historyCountAggregateOutputType | null
    _avg: Book_tran_historyAvgAggregateOutputType | null
    _sum: Book_tran_historySumAggregateOutputType | null
    _min: Book_tran_historyMinAggregateOutputType | null
    _max: Book_tran_historyMaxAggregateOutputType | null
  }

  export type Book_tran_historyAvgAggregateOutputType = {
    id: number | null
    book_id: number | null
    tran_id: number | null
    requested_by: number | null
    approved_by: number | null
  }

  export type Book_tran_historySumAggregateOutputType = {
    id: number | null
    book_id: number | null
    tran_id: number | null
    requested_by: number | null
    approved_by: number | null
  }

  export type Book_tran_historyMinAggregateOutputType = {
    id: number | null
    book_id: number | null
    tran_id: number | null
    status: $Enums.book_tran_history_status | null
    requested_by: number | null
    approved_by: number | null
    requested_at: Date | null
    approved_at: Date | null
    date_issued: Date | null
    date_due: Date | null
    date_returned: Date | null
    remarks: string | null
  }

  export type Book_tran_historyMaxAggregateOutputType = {
    id: number | null
    book_id: number | null
    tran_id: number | null
    status: $Enums.book_tran_history_status | null
    requested_by: number | null
    approved_by: number | null
    requested_at: Date | null
    approved_at: Date | null
    date_issued: Date | null
    date_due: Date | null
    date_returned: Date | null
    remarks: string | null
  }

  export type Book_tran_historyCountAggregateOutputType = {
    id: number
    book_id: number
    tran_id: number
    status: number
    requested_by: number
    approved_by: number
    requested_at: number
    approved_at: number
    date_issued: number
    date_due: number
    date_returned: number
    remarks: number
    _all: number
  }


  export type Book_tran_historyAvgAggregateInputType = {
    id?: true
    book_id?: true
    tran_id?: true
    requested_by?: true
    approved_by?: true
  }

  export type Book_tran_historySumAggregateInputType = {
    id?: true
    book_id?: true
    tran_id?: true
    requested_by?: true
    approved_by?: true
  }

  export type Book_tran_historyMinAggregateInputType = {
    id?: true
    book_id?: true
    tran_id?: true
    status?: true
    requested_by?: true
    approved_by?: true
    requested_at?: true
    approved_at?: true
    date_issued?: true
    date_due?: true
    date_returned?: true
    remarks?: true
  }

  export type Book_tran_historyMaxAggregateInputType = {
    id?: true
    book_id?: true
    tran_id?: true
    status?: true
    requested_by?: true
    approved_by?: true
    requested_at?: true
    approved_at?: true
    date_issued?: true
    date_due?: true
    date_returned?: true
    remarks?: true
  }

  export type Book_tran_historyCountAggregateInputType = {
    id?: true
    book_id?: true
    tran_id?: true
    status?: true
    requested_by?: true
    approved_by?: true
    requested_at?: true
    approved_at?: true
    date_issued?: true
    date_due?: true
    date_returned?: true
    remarks?: true
    _all?: true
  }

  export type Book_tran_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_tran_history to aggregate.
     */
    where?: book_tran_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tran_histories to fetch.
     */
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: book_tran_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tran_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tran_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned book_tran_histories
    **/
    _count?: true | Book_tran_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Book_tran_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Book_tran_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_tran_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_tran_historyMaxAggregateInputType
  }

  export type GetBook_tran_historyAggregateType<T extends Book_tran_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_tran_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_tran_history[P]>
      : GetScalarType<T[P], AggregateBook_tran_history[P]>
  }




  export type book_tran_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tran_historyWhereInput
    orderBy?: book_tran_historyOrderByWithAggregationInput | book_tran_historyOrderByWithAggregationInput[]
    by: Book_tran_historyScalarFieldEnum[] | Book_tran_historyScalarFieldEnum
    having?: book_tran_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_tran_historyCountAggregateInputType | true
    _avg?: Book_tran_historyAvgAggregateInputType
    _sum?: Book_tran_historySumAggregateInputType
    _min?: Book_tran_historyMinAggregateInputType
    _max?: Book_tran_historyMaxAggregateInputType
  }

  export type Book_tran_historyGroupByOutputType = {
    id: number
    book_id: number | null
    tran_id: number | null
    status: $Enums.book_tran_history_status
    requested_by: number | null
    approved_by: number | null
    requested_at: Date | null
    approved_at: Date | null
    date_issued: Date | null
    date_due: Date | null
    date_returned: Date | null
    remarks: string | null
    _count: Book_tran_historyCountAggregateOutputType | null
    _avg: Book_tran_historyAvgAggregateOutputType | null
    _sum: Book_tran_historySumAggregateOutputType | null
    _min: Book_tran_historyMinAggregateOutputType | null
    _max: Book_tran_historyMaxAggregateOutputType | null
  }

  type GetBook_tran_historyGroupByPayload<T extends book_tran_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_tran_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_tran_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_tran_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Book_tran_historyGroupByOutputType[P]>
        }
      >
    >


  export type book_tran_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    tran_id?: boolean
    status?: boolean
    requested_by?: boolean
    approved_by?: boolean
    requested_at?: boolean
    approved_at?: boolean
    date_issued?: boolean
    date_due?: boolean
    date_returned?: boolean
    remarks?: boolean
    books?: boolean | book_tran_history$booksArgs<ExtArgs>
    book_tran?: boolean | book_tran_history$book_tranArgs<ExtArgs>
    users_book_tran_history_requested_byTousers?: boolean | book_tran_history$users_book_tran_history_requested_byTousersArgs<ExtArgs>
    users_book_tran_history_approved_byTousers?: boolean | book_tran_history$users_book_tran_history_approved_byTousersArgs<ExtArgs>
    fines?: boolean | book_tran_history$finesArgs<ExtArgs>
    _count?: boolean | Book_tran_historyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_tran_history"]>



  export type book_tran_historySelectScalar = {
    id?: boolean
    book_id?: boolean
    tran_id?: boolean
    status?: boolean
    requested_by?: boolean
    approved_by?: boolean
    requested_at?: boolean
    approved_at?: boolean
    date_issued?: boolean
    date_due?: boolean
    date_returned?: boolean
    remarks?: boolean
  }

  export type book_tran_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "tran_id" | "status" | "requested_by" | "approved_by" | "requested_at" | "approved_at" | "date_issued" | "date_due" | "date_returned" | "remarks", ExtArgs["result"]["book_tran_history"]>
  export type book_tran_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | book_tran_history$booksArgs<ExtArgs>
    book_tran?: boolean | book_tran_history$book_tranArgs<ExtArgs>
    users_book_tran_history_requested_byTousers?: boolean | book_tran_history$users_book_tran_history_requested_byTousersArgs<ExtArgs>
    users_book_tran_history_approved_byTousers?: boolean | book_tran_history$users_book_tran_history_approved_byTousersArgs<ExtArgs>
    fines?: boolean | book_tran_history$finesArgs<ExtArgs>
    _count?: boolean | Book_tran_historyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $book_tran_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book_tran_history"
    objects: {
      books: Prisma.$booksPayload<ExtArgs> | null
      book_tran: Prisma.$book_tranPayload<ExtArgs> | null
      users_book_tran_history_requested_byTousers: Prisma.$usersPayload<ExtArgs> | null
      users_book_tran_history_approved_byTousers: Prisma.$usersPayload<ExtArgs> | null
      fines: Prisma.$finesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book_id: number | null
      tran_id: number | null
      status: $Enums.book_tran_history_status
      requested_by: number | null
      approved_by: number | null
      requested_at: Date | null
      approved_at: Date | null
      date_issued: Date | null
      date_due: Date | null
      date_returned: Date | null
      remarks: string | null
    }, ExtArgs["result"]["book_tran_history"]>
    composites: {}
  }

  type book_tran_historyGetPayload<S extends boolean | null | undefined | book_tran_historyDefaultArgs> = $Result.GetResult<Prisma.$book_tran_historyPayload, S>

  type book_tran_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<book_tran_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Book_tran_historyCountAggregateInputType | true
    }

  export interface book_tran_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book_tran_history'], meta: { name: 'book_tran_history' } }
    /**
     * Find zero or one Book_tran_history that matches the filter.
     * @param {book_tran_historyFindUniqueArgs} args - Arguments to find a Book_tran_history
     * @example
     * // Get one Book_tran_history
     * const book_tran_history = await prisma.book_tran_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends book_tran_historyFindUniqueArgs>(args: SelectSubset<T, book_tran_historyFindUniqueArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book_tran_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {book_tran_historyFindUniqueOrThrowArgs} args - Arguments to find a Book_tran_history
     * @example
     * // Get one Book_tran_history
     * const book_tran_history = await prisma.book_tran_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends book_tran_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, book_tran_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_tran_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tran_historyFindFirstArgs} args - Arguments to find a Book_tran_history
     * @example
     * // Get one Book_tran_history
     * const book_tran_history = await prisma.book_tran_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends book_tran_historyFindFirstArgs>(args?: SelectSubset<T, book_tran_historyFindFirstArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_tran_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tran_historyFindFirstOrThrowArgs} args - Arguments to find a Book_tran_history
     * @example
     * // Get one Book_tran_history
     * const book_tran_history = await prisma.book_tran_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends book_tran_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, book_tran_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_tran_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tran_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_tran_histories
     * const book_tran_histories = await prisma.book_tran_history.findMany()
     * 
     * // Get first 10 Book_tran_histories
     * const book_tran_histories = await prisma.book_tran_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const book_tran_historyWithIdOnly = await prisma.book_tran_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends book_tran_historyFindManyArgs>(args?: SelectSubset<T, book_tran_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book_tran_history.
     * @param {book_tran_historyCreateArgs} args - Arguments to create a Book_tran_history.
     * @example
     * // Create one Book_tran_history
     * const Book_tran_history = await prisma.book_tran_history.create({
     *   data: {
     *     // ... data to create a Book_tran_history
     *   }
     * })
     * 
     */
    create<T extends book_tran_historyCreateArgs>(args: SelectSubset<T, book_tran_historyCreateArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Book_tran_histories.
     * @param {book_tran_historyCreateManyArgs} args - Arguments to create many Book_tran_histories.
     * @example
     * // Create many Book_tran_histories
     * const book_tran_history = await prisma.book_tran_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends book_tran_historyCreateManyArgs>(args?: SelectSubset<T, book_tran_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book_tran_history.
     * @param {book_tran_historyDeleteArgs} args - Arguments to delete one Book_tran_history.
     * @example
     * // Delete one Book_tran_history
     * const Book_tran_history = await prisma.book_tran_history.delete({
     *   where: {
     *     // ... filter to delete one Book_tran_history
     *   }
     * })
     * 
     */
    delete<T extends book_tran_historyDeleteArgs>(args: SelectSubset<T, book_tran_historyDeleteArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book_tran_history.
     * @param {book_tran_historyUpdateArgs} args - Arguments to update one Book_tran_history.
     * @example
     * // Update one Book_tran_history
     * const book_tran_history = await prisma.book_tran_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends book_tran_historyUpdateArgs>(args: SelectSubset<T, book_tran_historyUpdateArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Book_tran_histories.
     * @param {book_tran_historyDeleteManyArgs} args - Arguments to filter Book_tran_histories to delete.
     * @example
     * // Delete a few Book_tran_histories
     * const { count } = await prisma.book_tran_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends book_tran_historyDeleteManyArgs>(args?: SelectSubset<T, book_tran_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_tran_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tran_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_tran_histories
     * const book_tran_history = await prisma.book_tran_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends book_tran_historyUpdateManyArgs>(args: SelectSubset<T, book_tran_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book_tran_history.
     * @param {book_tran_historyUpsertArgs} args - Arguments to update or create a Book_tran_history.
     * @example
     * // Update or create a Book_tran_history
     * const book_tran_history = await prisma.book_tran_history.upsert({
     *   create: {
     *     // ... data to create a Book_tran_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_tran_history we want to update
     *   }
     * })
     */
    upsert<T extends book_tran_historyUpsertArgs>(args: SelectSubset<T, book_tran_historyUpsertArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Book_tran_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tran_historyCountArgs} args - Arguments to filter Book_tran_histories to count.
     * @example
     * // Count the number of Book_tran_histories
     * const count = await prisma.book_tran_history.count({
     *   where: {
     *     // ... the filter for the Book_tran_histories we want to count
     *   }
     * })
    **/
    count<T extends book_tran_historyCountArgs>(
      args?: Subset<T, book_tran_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_tran_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_tran_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_tran_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Book_tran_historyAggregateArgs>(args: Subset<T, Book_tran_historyAggregateArgs>): Prisma.PrismaPromise<GetBook_tran_historyAggregateType<T>>

    /**
     * Group by Book_tran_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tran_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends book_tran_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: book_tran_historyGroupByArgs['orderBy'] }
        : { orderBy?: book_tran_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, book_tran_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_tran_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book_tran_history model
   */
  readonly fields: book_tran_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book_tran_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__book_tran_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends book_tran_history$booksArgs<ExtArgs> = {}>(args?: Subset<T, book_tran_history$booksArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    book_tran<T extends book_tran_history$book_tranArgs<ExtArgs> = {}>(args?: Subset<T, book_tran_history$book_tranArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_book_tran_history_requested_byTousers<T extends book_tran_history$users_book_tran_history_requested_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, book_tran_history$users_book_tran_history_requested_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_book_tran_history_approved_byTousers<T extends book_tran_history$users_book_tran_history_approved_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, book_tran_history$users_book_tran_history_approved_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fines<T extends book_tran_history$finesArgs<ExtArgs> = {}>(args?: Subset<T, book_tran_history$finesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book_tran_history model
   */
  interface book_tran_historyFieldRefs {
    readonly id: FieldRef<"book_tran_history", 'Int'>
    readonly book_id: FieldRef<"book_tran_history", 'Int'>
    readonly tran_id: FieldRef<"book_tran_history", 'Int'>
    readonly status: FieldRef<"book_tran_history", 'book_tran_history_status'>
    readonly requested_by: FieldRef<"book_tran_history", 'Int'>
    readonly approved_by: FieldRef<"book_tran_history", 'Int'>
    readonly requested_at: FieldRef<"book_tran_history", 'DateTime'>
    readonly approved_at: FieldRef<"book_tran_history", 'DateTime'>
    readonly date_issued: FieldRef<"book_tran_history", 'DateTime'>
    readonly date_due: FieldRef<"book_tran_history", 'DateTime'>
    readonly date_returned: FieldRef<"book_tran_history", 'DateTime'>
    readonly remarks: FieldRef<"book_tran_history", 'String'>
  }
    

  // Custom InputTypes
  /**
   * book_tran_history findUnique
   */
  export type book_tran_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * Filter, which book_tran_history to fetch.
     */
    where: book_tran_historyWhereUniqueInput
  }

  /**
   * book_tran_history findUniqueOrThrow
   */
  export type book_tran_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * Filter, which book_tran_history to fetch.
     */
    where: book_tran_historyWhereUniqueInput
  }

  /**
   * book_tran_history findFirst
   */
  export type book_tran_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * Filter, which book_tran_history to fetch.
     */
    where?: book_tran_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tran_histories to fetch.
     */
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_tran_histories.
     */
    cursor?: book_tran_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tran_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tran_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_tran_histories.
     */
    distinct?: Book_tran_historyScalarFieldEnum | Book_tran_historyScalarFieldEnum[]
  }

  /**
   * book_tran_history findFirstOrThrow
   */
  export type book_tran_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * Filter, which book_tran_history to fetch.
     */
    where?: book_tran_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tran_histories to fetch.
     */
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_tran_histories.
     */
    cursor?: book_tran_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tran_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tran_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_tran_histories.
     */
    distinct?: Book_tran_historyScalarFieldEnum | Book_tran_historyScalarFieldEnum[]
  }

  /**
   * book_tran_history findMany
   */
  export type book_tran_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * Filter, which book_tran_histories to fetch.
     */
    where?: book_tran_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tran_histories to fetch.
     */
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing book_tran_histories.
     */
    cursor?: book_tran_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tran_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tran_histories.
     */
    skip?: number
    distinct?: Book_tran_historyScalarFieldEnum | Book_tran_historyScalarFieldEnum[]
  }

  /**
   * book_tran_history create
   */
  export type book_tran_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a book_tran_history.
     */
    data?: XOR<book_tran_historyCreateInput, book_tran_historyUncheckedCreateInput>
  }

  /**
   * book_tran_history createMany
   */
  export type book_tran_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many book_tran_histories.
     */
    data: book_tran_historyCreateManyInput | book_tran_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book_tran_history update
   */
  export type book_tran_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a book_tran_history.
     */
    data: XOR<book_tran_historyUpdateInput, book_tran_historyUncheckedUpdateInput>
    /**
     * Choose, which book_tran_history to update.
     */
    where: book_tran_historyWhereUniqueInput
  }

  /**
   * book_tran_history updateMany
   */
  export type book_tran_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update book_tran_histories.
     */
    data: XOR<book_tran_historyUpdateManyMutationInput, book_tran_historyUncheckedUpdateManyInput>
    /**
     * Filter which book_tran_histories to update
     */
    where?: book_tran_historyWhereInput
    /**
     * Limit how many book_tran_histories to update.
     */
    limit?: number
  }

  /**
   * book_tran_history upsert
   */
  export type book_tran_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the book_tran_history to update in case it exists.
     */
    where: book_tran_historyWhereUniqueInput
    /**
     * In case the book_tran_history found by the `where` argument doesn't exist, create a new book_tran_history with this data.
     */
    create: XOR<book_tran_historyCreateInput, book_tran_historyUncheckedCreateInput>
    /**
     * In case the book_tran_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<book_tran_historyUpdateInput, book_tran_historyUncheckedUpdateInput>
  }

  /**
   * book_tran_history delete
   */
  export type book_tran_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    /**
     * Filter which book_tran_history to delete.
     */
    where: book_tran_historyWhereUniqueInput
  }

  /**
   * book_tran_history deleteMany
   */
  export type book_tran_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_tran_histories to delete
     */
    where?: book_tran_historyWhereInput
    /**
     * Limit how many book_tran_histories to delete.
     */
    limit?: number
  }

  /**
   * book_tran_history.books
   */
  export type book_tran_history$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    where?: booksWhereInput
  }

  /**
   * book_tran_history.book_tran
   */
  export type book_tran_history$book_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    where?: book_tranWhereInput
  }

  /**
   * book_tran_history.users_book_tran_history_requested_byTousers
   */
  export type book_tran_history$users_book_tran_history_requested_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * book_tran_history.users_book_tran_history_approved_byTousers
   */
  export type book_tran_history$users_book_tran_history_approved_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * book_tran_history.fines
   */
  export type book_tran_history$finesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    where?: finesWhereInput
    orderBy?: finesOrderByWithRelationInput | finesOrderByWithRelationInput[]
    cursor?: finesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinesScalarFieldEnum | FinesScalarFieldEnum[]
  }

  /**
   * book_tran_history without action
   */
  export type book_tran_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
  }


  /**
   * Model books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    book_id: number | null
    year: number | null
    librarian_id: number | null
  }

  export type BooksSumAggregateOutputType = {
    book_id: number | null
    year: number | null
    librarian_id: number | null
  }

  export type BooksMinAggregateOutputType = {
    book_id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    year: number | null
    genre: string | null
    image_url: string | null
    description: string | null
    librarian_id: number | null
    created_at: Date | null
    updated_at: Date | null
    record_status: $Enums.record_status | null
  }

  export type BooksMaxAggregateOutputType = {
    book_id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    year: number | null
    genre: string | null
    image_url: string | null
    description: string | null
    librarian_id: number | null
    created_at: Date | null
    updated_at: Date | null
    record_status: $Enums.record_status | null
  }

  export type BooksCountAggregateOutputType = {
    book_id: number
    title: number
    author: number
    isbn: number
    year: number
    genre: number
    image_url: number
    description: number
    librarian_id: number
    created_at: number
    updated_at: number
    record_status: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    book_id?: true
    year?: true
    librarian_id?: true
  }

  export type BooksSumAggregateInputType = {
    book_id?: true
    year?: true
    librarian_id?: true
  }

  export type BooksMinAggregateInputType = {
    book_id?: true
    title?: true
    author?: true
    isbn?: true
    year?: true
    genre?: true
    image_url?: true
    description?: true
    librarian_id?: true
    created_at?: true
    updated_at?: true
    record_status?: true
  }

  export type BooksMaxAggregateInputType = {
    book_id?: true
    title?: true
    author?: true
    isbn?: true
    year?: true
    genre?: true
    image_url?: true
    description?: true
    librarian_id?: true
    created_at?: true
    updated_at?: true
    record_status?: true
  }

  export type BooksCountAggregateInputType = {
    book_id?: true
    title?: true
    author?: true
    isbn?: true
    year?: true
    genre?: true
    image_url?: true
    description?: true
    librarian_id?: true
    created_at?: true
    updated_at?: true
    record_status?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to aggregate.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type booksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
    orderBy?: booksOrderByWithAggregationInput | booksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: booksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    book_id: number
    title: string | null
    author: string
    isbn: string | null
    year: number | null
    genre: string | null
    image_url: string | null
    description: string | null
    librarian_id: number | null
    created_at: Date | null
    updated_at: Date | null
    record_status: $Enums.record_status | null
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends booksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type booksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    year?: boolean
    genre?: boolean
    image_url?: boolean
    description?: boolean
    librarian_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    record_status?: boolean
    book_tran?: boolean | books$book_tranArgs<ExtArgs>
    book_tran_history?: boolean | books$book_tran_historyArgs<ExtArgs>
    notifications?: boolean | books$notificationsArgs<ExtArgs>
    user_wishlist?: boolean | books$user_wishlistArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>



  export type booksSelectScalar = {
    book_id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    year?: boolean
    genre?: boolean
    image_url?: boolean
    description?: boolean
    librarian_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    record_status?: boolean
  }

  export type booksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"book_id" | "title" | "author" | "isbn" | "year" | "genre" | "image_url" | "description" | "librarian_id" | "created_at" | "updated_at" | "record_status", ExtArgs["result"]["books"]>
  export type booksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_tran?: boolean | books$book_tranArgs<ExtArgs>
    book_tran_history?: boolean | books$book_tran_historyArgs<ExtArgs>
    notifications?: boolean | books$notificationsArgs<ExtArgs>
    user_wishlist?: boolean | books$user_wishlistArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $booksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "books"
    objects: {
      book_tran: Prisma.$book_tranPayload<ExtArgs>[]
      book_tran_history: Prisma.$book_tran_historyPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      user_wishlist: Prisma.$user_wishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: number
      title: string | null
      author: string
      isbn: string | null
      year: number | null
      genre: string | null
      image_url: string | null
      description: string | null
      librarian_id: number | null
      created_at: Date | null
      updated_at: Date | null
      record_status: $Enums.record_status | null
    }, ExtArgs["result"]["books"]>
    composites: {}
  }

  type booksGetPayload<S extends boolean | null | undefined | booksDefaultArgs> = $Result.GetResult<Prisma.$booksPayload, S>

  type booksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<booksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface booksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['books'], meta: { name: 'books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {booksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends booksFindUniqueArgs>(args: SelectSubset<T, booksFindUniqueArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {booksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends booksFindUniqueOrThrowArgs>(args: SelectSubset<T, booksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends booksFindFirstArgs>(args?: SelectSubset<T, booksFindFirstArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends booksFindFirstOrThrowArgs>(args?: SelectSubset<T, booksFindFirstOrThrowArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const booksWithBook_idOnly = await prisma.books.findMany({ select: { book_id: true } })
     * 
     */
    findMany<T extends booksFindManyArgs>(args?: SelectSubset<T, booksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books.
     * @param {booksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
     */
    create<T extends booksCreateArgs>(args: SelectSubset<T, booksCreateArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {booksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends booksCreateManyArgs>(args?: SelectSubset<T, booksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Books.
     * @param {booksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
     */
    delete<T extends booksDeleteArgs>(args: SelectSubset<T, booksDeleteArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books.
     * @param {booksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends booksUpdateArgs>(args: SelectSubset<T, booksUpdateArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {booksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends booksDeleteManyArgs>(args?: SelectSubset<T, booksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends booksUpdateManyArgs>(args: SelectSubset<T, booksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Books.
     * @param {booksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends booksUpsertArgs>(args: SelectSubset<T, booksUpsertArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends booksCountArgs>(
      args?: Subset<T, booksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends booksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booksGroupByArgs['orderBy'] }
        : { orderBy?: booksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, booksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the books model
   */
  readonly fields: booksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book_tran<T extends books$book_tranArgs<ExtArgs> = {}>(args?: Subset<T, books$book_tranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    book_tran_history<T extends books$book_tran_historyArgs<ExtArgs> = {}>(args?: Subset<T, books$book_tran_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends books$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, books$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_wishlist<T extends books$user_wishlistArgs<ExtArgs> = {}>(args?: Subset<T, books$user_wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the books model
   */
  interface booksFieldRefs {
    readonly book_id: FieldRef<"books", 'Int'>
    readonly title: FieldRef<"books", 'String'>
    readonly author: FieldRef<"books", 'String'>
    readonly isbn: FieldRef<"books", 'String'>
    readonly year: FieldRef<"books", 'Int'>
    readonly genre: FieldRef<"books", 'String'>
    readonly image_url: FieldRef<"books", 'String'>
    readonly description: FieldRef<"books", 'String'>
    readonly librarian_id: FieldRef<"books", 'Int'>
    readonly created_at: FieldRef<"books", 'DateTime'>
    readonly updated_at: FieldRef<"books", 'DateTime'>
    readonly record_status: FieldRef<"books", 'record_status'>
  }
    

  // Custom InputTypes
  /**
   * books findUnique
   */
  export type booksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findUniqueOrThrow
   */
  export type booksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findFirst
   */
  export type booksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findFirstOrThrow
   */
  export type booksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findMany
   */
  export type booksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books create
   */
  export type booksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The data needed to create a books.
     */
    data: XOR<booksCreateInput, booksUncheckedCreateInput>
  }

  /**
   * books createMany
   */
  export type booksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: booksCreateManyInput | booksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * books update
   */
  export type booksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The data needed to update a books.
     */
    data: XOR<booksUpdateInput, booksUncheckedUpdateInput>
    /**
     * Choose, which books to update.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books updateMany
   */
  export type booksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: booksWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * books upsert
   */
  export type booksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The filter to search for the books to update in case it exists.
     */
    where: booksWhereUniqueInput
    /**
     * In case the books found by the `where` argument doesn't exist, create a new books with this data.
     */
    create: XOR<booksCreateInput, booksUncheckedCreateInput>
    /**
     * In case the books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booksUpdateInput, booksUncheckedUpdateInput>
  }

  /**
   * books delete
   */
  export type booksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter which books to delete.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books deleteMany
   */
  export type booksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: booksWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * books.book_tran
   */
  export type books$book_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    where?: book_tranWhereInput
    orderBy?: book_tranOrderByWithRelationInput | book_tranOrderByWithRelationInput[]
    cursor?: book_tranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_tranScalarFieldEnum | Book_tranScalarFieldEnum[]
  }

  /**
   * books.book_tran_history
   */
  export type books$book_tran_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    where?: book_tran_historyWhereInput
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    cursor?: book_tran_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_tran_historyScalarFieldEnum | Book_tran_historyScalarFieldEnum[]
  }

  /**
   * books.notifications
   */
  export type books$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * books.user_wishlist
   */
  export type books$user_wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    where?: user_wishlistWhereInput
    orderBy?: user_wishlistOrderByWithRelationInput | user_wishlistOrderByWithRelationInput[]
    cursor?: user_wishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_wishlistScalarFieldEnum | User_wishlistScalarFieldEnum[]
  }

  /**
   * books without action
   */
  export type booksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
  }


  /**
   * Model fines
   */

  export type AggregateFines = {
    _count: FinesCountAggregateOutputType | null
    _avg: FinesAvgAggregateOutputType | null
    _sum: FinesSumAggregateOutputType | null
    _min: FinesMinAggregateOutputType | null
    _max: FinesMaxAggregateOutputType | null
  }

  export type FinesAvgAggregateOutputType = {
    fine_id: number | null
    user_id: number | null
    book_tran_history_id: number | null
    amount: Decimal | null
  }

  export type FinesSumAggregateOutputType = {
    fine_id: number | null
    user_id: number | null
    book_tran_history_id: number | null
    amount: Decimal | null
  }

  export type FinesMinAggregateOutputType = {
    fine_id: number | null
    user_id: number | null
    book_tran_history_id: number | null
    amount: Decimal | null
    reason: string | null
    status: $Enums.fines_status | null
    created_at: Date | null
    paid_at: Date | null
  }

  export type FinesMaxAggregateOutputType = {
    fine_id: number | null
    user_id: number | null
    book_tran_history_id: number | null
    amount: Decimal | null
    reason: string | null
    status: $Enums.fines_status | null
    created_at: Date | null
    paid_at: Date | null
  }

  export type FinesCountAggregateOutputType = {
    fine_id: number
    user_id: number
    book_tran_history_id: number
    amount: number
    reason: number
    status: number
    created_at: number
    paid_at: number
    _all: number
  }


  export type FinesAvgAggregateInputType = {
    fine_id?: true
    user_id?: true
    book_tran_history_id?: true
    amount?: true
  }

  export type FinesSumAggregateInputType = {
    fine_id?: true
    user_id?: true
    book_tran_history_id?: true
    amount?: true
  }

  export type FinesMinAggregateInputType = {
    fine_id?: true
    user_id?: true
    book_tran_history_id?: true
    amount?: true
    reason?: true
    status?: true
    created_at?: true
    paid_at?: true
  }

  export type FinesMaxAggregateInputType = {
    fine_id?: true
    user_id?: true
    book_tran_history_id?: true
    amount?: true
    reason?: true
    status?: true
    created_at?: true
    paid_at?: true
  }

  export type FinesCountAggregateInputType = {
    fine_id?: true
    user_id?: true
    book_tran_history_id?: true
    amount?: true
    reason?: true
    status?: true
    created_at?: true
    paid_at?: true
    _all?: true
  }

  export type FinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fines to aggregate.
     */
    where?: finesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: finesOrderByWithRelationInput | finesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: finesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fines
    **/
    _count?: true | FinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinesMaxAggregateInputType
  }

  export type GetFinesAggregateType<T extends FinesAggregateArgs> = {
        [P in keyof T & keyof AggregateFines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFines[P]>
      : GetScalarType<T[P], AggregateFines[P]>
  }




  export type finesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: finesWhereInput
    orderBy?: finesOrderByWithAggregationInput | finesOrderByWithAggregationInput[]
    by: FinesScalarFieldEnum[] | FinesScalarFieldEnum
    having?: finesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinesCountAggregateInputType | true
    _avg?: FinesAvgAggregateInputType
    _sum?: FinesSumAggregateInputType
    _min?: FinesMinAggregateInputType
    _max?: FinesMaxAggregateInputType
  }

  export type FinesGroupByOutputType = {
    fine_id: number
    user_id: number | null
    book_tran_history_id: number | null
    amount: Decimal | null
    reason: string | null
    status: $Enums.fines_status | null
    created_at: Date | null
    paid_at: Date | null
    _count: FinesCountAggregateOutputType | null
    _avg: FinesAvgAggregateOutputType | null
    _sum: FinesSumAggregateOutputType | null
    _min: FinesMinAggregateOutputType | null
    _max: FinesMaxAggregateOutputType | null
  }

  type GetFinesGroupByPayload<T extends finesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinesGroupByOutputType[P]>
            : GetScalarType<T[P], FinesGroupByOutputType[P]>
        }
      >
    >


  export type finesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fine_id?: boolean
    user_id?: boolean
    book_tran_history_id?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
    paid_at?: boolean
    users?: boolean | fines$usersArgs<ExtArgs>
    book_tran_history?: boolean | fines$book_tran_historyArgs<ExtArgs>
  }, ExtArgs["result"]["fines"]>



  export type finesSelectScalar = {
    fine_id?: boolean
    user_id?: boolean
    book_tran_history_id?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
    paid_at?: boolean
  }

  export type finesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fine_id" | "user_id" | "book_tran_history_id" | "amount" | "reason" | "status" | "created_at" | "paid_at", ExtArgs["result"]["fines"]>
  export type finesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | fines$usersArgs<ExtArgs>
    book_tran_history?: boolean | fines$book_tran_historyArgs<ExtArgs>
  }

  export type $finesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fines"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      book_tran_history: Prisma.$book_tran_historyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      fine_id: number
      user_id: number | null
      book_tran_history_id: number | null
      amount: Prisma.Decimal | null
      reason: string | null
      status: $Enums.fines_status | null
      created_at: Date | null
      paid_at: Date | null
    }, ExtArgs["result"]["fines"]>
    composites: {}
  }

  type finesGetPayload<S extends boolean | null | undefined | finesDefaultArgs> = $Result.GetResult<Prisma.$finesPayload, S>

  type finesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<finesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinesCountAggregateInputType | true
    }

  export interface finesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fines'], meta: { name: 'fines' } }
    /**
     * Find zero or one Fines that matches the filter.
     * @param {finesFindUniqueArgs} args - Arguments to find a Fines
     * @example
     * // Get one Fines
     * const fines = await prisma.fines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends finesFindUniqueArgs>(args: SelectSubset<T, finesFindUniqueArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {finesFindUniqueOrThrowArgs} args - Arguments to find a Fines
     * @example
     * // Get one Fines
     * const fines = await prisma.fines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends finesFindUniqueOrThrowArgs>(args: SelectSubset<T, finesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finesFindFirstArgs} args - Arguments to find a Fines
     * @example
     * // Get one Fines
     * const fines = await prisma.fines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends finesFindFirstArgs>(args?: SelectSubset<T, finesFindFirstArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finesFindFirstOrThrowArgs} args - Arguments to find a Fines
     * @example
     * // Get one Fines
     * const fines = await prisma.fines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends finesFindFirstOrThrowArgs>(args?: SelectSubset<T, finesFindFirstOrThrowArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fines
     * const fines = await prisma.fines.findMany()
     * 
     * // Get first 10 Fines
     * const fines = await prisma.fines.findMany({ take: 10 })
     * 
     * // Only select the `fine_id`
     * const finesWithFine_idOnly = await prisma.fines.findMany({ select: { fine_id: true } })
     * 
     */
    findMany<T extends finesFindManyArgs>(args?: SelectSubset<T, finesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fines.
     * @param {finesCreateArgs} args - Arguments to create a Fines.
     * @example
     * // Create one Fines
     * const Fines = await prisma.fines.create({
     *   data: {
     *     // ... data to create a Fines
     *   }
     * })
     * 
     */
    create<T extends finesCreateArgs>(args: SelectSubset<T, finesCreateArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fines.
     * @param {finesCreateManyArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fines = await prisma.fines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends finesCreateManyArgs>(args?: SelectSubset<T, finesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fines.
     * @param {finesDeleteArgs} args - Arguments to delete one Fines.
     * @example
     * // Delete one Fines
     * const Fines = await prisma.fines.delete({
     *   where: {
     *     // ... filter to delete one Fines
     *   }
     * })
     * 
     */
    delete<T extends finesDeleteArgs>(args: SelectSubset<T, finesDeleteArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fines.
     * @param {finesUpdateArgs} args - Arguments to update one Fines.
     * @example
     * // Update one Fines
     * const fines = await prisma.fines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends finesUpdateArgs>(args: SelectSubset<T, finesUpdateArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fines.
     * @param {finesDeleteManyArgs} args - Arguments to filter Fines to delete.
     * @example
     * // Delete a few Fines
     * const { count } = await prisma.fines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends finesDeleteManyArgs>(args?: SelectSubset<T, finesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fines
     * const fines = await prisma.fines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends finesUpdateManyArgs>(args: SelectSubset<T, finesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fines.
     * @param {finesUpsertArgs} args - Arguments to update or create a Fines.
     * @example
     * // Update or create a Fines
     * const fines = await prisma.fines.upsert({
     *   create: {
     *     // ... data to create a Fines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fines we want to update
     *   }
     * })
     */
    upsert<T extends finesUpsertArgs>(args: SelectSubset<T, finesUpsertArgs<ExtArgs>>): Prisma__finesClient<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finesCountArgs} args - Arguments to filter Fines to count.
     * @example
     * // Count the number of Fines
     * const count = await prisma.fines.count({
     *   where: {
     *     // ... the filter for the Fines we want to count
     *   }
     * })
    **/
    count<T extends finesCountArgs>(
      args?: Subset<T, finesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinesAggregateArgs>(args: Subset<T, FinesAggregateArgs>): Prisma.PrismaPromise<GetFinesAggregateType<T>>

    /**
     * Group by Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends finesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: finesGroupByArgs['orderBy'] }
        : { orderBy?: finesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, finesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fines model
   */
  readonly fields: finesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__finesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends fines$usersArgs<ExtArgs> = {}>(args?: Subset<T, fines$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    book_tran_history<T extends fines$book_tran_historyArgs<ExtArgs> = {}>(args?: Subset<T, fines$book_tran_historyArgs<ExtArgs>>): Prisma__book_tran_historyClient<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fines model
   */
  interface finesFieldRefs {
    readonly fine_id: FieldRef<"fines", 'Int'>
    readonly user_id: FieldRef<"fines", 'Int'>
    readonly book_tran_history_id: FieldRef<"fines", 'Int'>
    readonly amount: FieldRef<"fines", 'Decimal'>
    readonly reason: FieldRef<"fines", 'String'>
    readonly status: FieldRef<"fines", 'fines_status'>
    readonly created_at: FieldRef<"fines", 'DateTime'>
    readonly paid_at: FieldRef<"fines", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fines findUnique
   */
  export type finesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * Filter, which fines to fetch.
     */
    where: finesWhereUniqueInput
  }

  /**
   * fines findUniqueOrThrow
   */
  export type finesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * Filter, which fines to fetch.
     */
    where: finesWhereUniqueInput
  }

  /**
   * fines findFirst
   */
  export type finesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * Filter, which fines to fetch.
     */
    where?: finesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: finesOrderByWithRelationInput | finesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fines.
     */
    cursor?: finesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fines.
     */
    distinct?: FinesScalarFieldEnum | FinesScalarFieldEnum[]
  }

  /**
   * fines findFirstOrThrow
   */
  export type finesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * Filter, which fines to fetch.
     */
    where?: finesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: finesOrderByWithRelationInput | finesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fines.
     */
    cursor?: finesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fines.
     */
    distinct?: FinesScalarFieldEnum | FinesScalarFieldEnum[]
  }

  /**
   * fines findMany
   */
  export type finesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * Filter, which fines to fetch.
     */
    where?: finesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: finesOrderByWithRelationInput | finesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fines.
     */
    cursor?: finesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    distinct?: FinesScalarFieldEnum | FinesScalarFieldEnum[]
  }

  /**
   * fines create
   */
  export type finesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * The data needed to create a fines.
     */
    data?: XOR<finesCreateInput, finesUncheckedCreateInput>
  }

  /**
   * fines createMany
   */
  export type finesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fines.
     */
    data: finesCreateManyInput | finesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fines update
   */
  export type finesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * The data needed to update a fines.
     */
    data: XOR<finesUpdateInput, finesUncheckedUpdateInput>
    /**
     * Choose, which fines to update.
     */
    where: finesWhereUniqueInput
  }

  /**
   * fines updateMany
   */
  export type finesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fines.
     */
    data: XOR<finesUpdateManyMutationInput, finesUncheckedUpdateManyInput>
    /**
     * Filter which fines to update
     */
    where?: finesWhereInput
    /**
     * Limit how many fines to update.
     */
    limit?: number
  }

  /**
   * fines upsert
   */
  export type finesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * The filter to search for the fines to update in case it exists.
     */
    where: finesWhereUniqueInput
    /**
     * In case the fines found by the `where` argument doesn't exist, create a new fines with this data.
     */
    create: XOR<finesCreateInput, finesUncheckedCreateInput>
    /**
     * In case the fines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<finesUpdateInput, finesUncheckedUpdateInput>
  }

  /**
   * fines delete
   */
  export type finesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    /**
     * Filter which fines to delete.
     */
    where: finesWhereUniqueInput
  }

  /**
   * fines deleteMany
   */
  export type finesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fines to delete
     */
    where?: finesWhereInput
    /**
     * Limit how many fines to delete.
     */
    limit?: number
  }

  /**
   * fines.users
   */
  export type fines$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * fines.book_tran_history
   */
  export type fines$book_tran_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    where?: book_tran_historyWhereInput
  }

  /**
   * fines without action
   */
  export type finesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    log_id: number | null
    user_id: number | null
  }

  export type LogsSumAggregateOutputType = {
    log_id: number | null
    user_id: number | null
  }

  export type LogsMinAggregateOutputType = {
    log_id: number | null
    description: string | null
    user_id: number | null
    created_at: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    log_id: number | null
    description: string | null
    user_id: number | null
    created_at: Date | null
  }

  export type LogsCountAggregateOutputType = {
    log_id: number
    description: number
    user_id: number
    created_at: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    log_id?: true
    user_id?: true
  }

  export type LogsSumAggregateInputType = {
    log_id?: true
    user_id?: true
  }

  export type LogsMinAggregateInputType = {
    log_id?: true
    description?: true
    user_id?: true
    created_at?: true
  }

  export type LogsMaxAggregateInputType = {
    log_id?: true
    description?: true
    user_id?: true
    created_at?: true
  }

  export type LogsCountAggregateInputType = {
    log_id?: true
    description?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    log_id: number
    description: string
    user_id: number
    created_at: Date | null
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    description?: boolean
    user_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>



  export type logsSelectScalar = {
    log_id?: boolean
    description?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "description" | "user_id" | "created_at", ExtArgs["result"]["logs"]>
  export type logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      description: string
      user_id: number
      created_at: Date | null
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const logsWithLog_idOnly = await prisma.logs.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly log_id: FieldRef<"logs", 'Int'>
    readonly description: FieldRef<"logs", 'String'>
    readonly user_id: FieldRef<"logs", 'Int'>
    readonly created_at: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    notification_id: number | null
    book_id: number | null
    from_user_id: number | null
    to_user_id: number | null
    tran_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    notification_id: number | null
    book_id: number | null
    from_user_id: number | null
    to_user_id: number | null
    tran_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    notification_id: number | null
    type: $Enums.notifications_type | null
    book_id: number | null
    from_user_id: number | null
    to_user_id: number | null
    tran_id: number | null
    status: $Enums.notifications_status | null
    message: string | null
    created_at: Date | null
    resolved_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    notification_id: number | null
    type: $Enums.notifications_type | null
    book_id: number | null
    from_user_id: number | null
    to_user_id: number | null
    tran_id: number | null
    status: $Enums.notifications_status | null
    message: string | null
    created_at: Date | null
    resolved_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    notification_id: number
    type: number
    book_id: number
    from_user_id: number
    to_user_id: number
    tran_id: number
    status: number
    message: number
    created_at: number
    resolved_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    notification_id?: true
    book_id?: true
    from_user_id?: true
    to_user_id?: true
    tran_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    notification_id?: true
    book_id?: true
    from_user_id?: true
    to_user_id?: true
    tran_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    notification_id?: true
    type?: true
    book_id?: true
    from_user_id?: true
    to_user_id?: true
    tran_id?: true
    status?: true
    message?: true
    created_at?: true
    resolved_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    notification_id?: true
    type?: true
    book_id?: true
    from_user_id?: true
    to_user_id?: true
    tran_id?: true
    status?: true
    message?: true
    created_at?: true
    resolved_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    notification_id?: true
    type?: true
    book_id?: true
    from_user_id?: true
    to_user_id?: true
    tran_id?: true
    status?: true
    message?: true
    created_at?: true
    resolved_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    notification_id: number
    type: $Enums.notifications_type | null
    book_id: number | null
    from_user_id: number | null
    to_user_id: number | null
    tran_id: number | null
    status: $Enums.notifications_status | null
    message: string | null
    created_at: Date | null
    resolved_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    type?: boolean
    book_id?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    tran_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    resolved_at?: boolean
    books?: boolean | notifications$booksArgs<ExtArgs>
    users_notifications_from_user_idTousers?: boolean | notifications$users_notifications_from_user_idTousersArgs<ExtArgs>
    users_notifications_to_user_idTousers?: boolean | notifications$users_notifications_to_user_idTousersArgs<ExtArgs>
    book_tran?: boolean | notifications$book_tranArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>



  export type notificationsSelectScalar = {
    notification_id?: boolean
    type?: boolean
    book_id?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    tran_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    resolved_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "type" | "book_id" | "from_user_id" | "to_user_id" | "tran_id" | "status" | "message" | "created_at" | "resolved_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | notifications$booksArgs<ExtArgs>
    users_notifications_from_user_idTousers?: boolean | notifications$users_notifications_from_user_idTousersArgs<ExtArgs>
    users_notifications_to_user_idTousers?: boolean | notifications$users_notifications_to_user_idTousersArgs<ExtArgs>
    book_tran?: boolean | notifications$book_tranArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      books: Prisma.$booksPayload<ExtArgs> | null
      users_notifications_from_user_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_notifications_to_user_idTousers: Prisma.$usersPayload<ExtArgs> | null
      book_tran: Prisma.$book_tranPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: number
      type: $Enums.notifications_type | null
      book_id: number | null
      from_user_id: number | null
      to_user_id: number | null
      tran_id: number | null
      status: $Enums.notifications_status | null
      message: string | null
      created_at: Date | null
      resolved_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const notificationsWithNotification_idOnly = await prisma.notifications.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends notifications$booksArgs<ExtArgs> = {}>(args?: Subset<T, notifications$booksArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_notifications_from_user_idTousers<T extends notifications$users_notifications_from_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, notifications$users_notifications_from_user_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_notifications_to_user_idTousers<T extends notifications$users_notifications_to_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, notifications$users_notifications_to_user_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    book_tran<T extends notifications$book_tranArgs<ExtArgs> = {}>(args?: Subset<T, notifications$book_tranArgs<ExtArgs>>): Prisma__book_tranClient<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly notification_id: FieldRef<"notifications", 'Int'>
    readonly type: FieldRef<"notifications", 'notifications_type'>
    readonly book_id: FieldRef<"notifications", 'Int'>
    readonly from_user_id: FieldRef<"notifications", 'Int'>
    readonly to_user_id: FieldRef<"notifications", 'Int'>
    readonly tran_id: FieldRef<"notifications", 'Int'>
    readonly status: FieldRef<"notifications", 'notifications_status'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
    readonly resolved_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data?: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications.books
   */
  export type notifications$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    where?: booksWhereInput
  }

  /**
   * notifications.users_notifications_from_user_idTousers
   */
  export type notifications$users_notifications_from_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * notifications.users_notifications_to_user_idTousers
   */
  export type notifications$users_notifications_to_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * notifications.book_tran
   */
  export type notifications$book_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    where?: book_tranWhereInput
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model user_wishlist
   */

  export type AggregateUser_wishlist = {
    _count: User_wishlistCountAggregateOutputType | null
    _avg: User_wishlistAvgAggregateOutputType | null
    _sum: User_wishlistSumAggregateOutputType | null
    _min: User_wishlistMinAggregateOutputType | null
    _max: User_wishlistMaxAggregateOutputType | null
  }

  export type User_wishlistAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    book_id: number | null
  }

  export type User_wishlistSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    book_id: number | null
  }

  export type User_wishlistMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    book_id: number | null
    created_at: Date | null
  }

  export type User_wishlistMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    book_id: number | null
    created_at: Date | null
  }

  export type User_wishlistCountAggregateOutputType = {
    id: number
    user_id: number
    book_id: number
    created_at: number
    _all: number
  }


  export type User_wishlistAvgAggregateInputType = {
    id?: true
    user_id?: true
    book_id?: true
  }

  export type User_wishlistSumAggregateInputType = {
    id?: true
    user_id?: true
    book_id?: true
  }

  export type User_wishlistMinAggregateInputType = {
    id?: true
    user_id?: true
    book_id?: true
    created_at?: true
  }

  export type User_wishlistMaxAggregateInputType = {
    id?: true
    user_id?: true
    book_id?: true
    created_at?: true
  }

  export type User_wishlistCountAggregateInputType = {
    id?: true
    user_id?: true
    book_id?: true
    created_at?: true
    _all?: true
  }

  export type User_wishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_wishlist to aggregate.
     */
    where?: user_wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_wishlists to fetch.
     */
    orderBy?: user_wishlistOrderByWithRelationInput | user_wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_wishlists
    **/
    _count?: true | User_wishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_wishlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_wishlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_wishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_wishlistMaxAggregateInputType
  }

  export type GetUser_wishlistAggregateType<T extends User_wishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_wishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_wishlist[P]>
      : GetScalarType<T[P], AggregateUser_wishlist[P]>
  }




  export type user_wishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_wishlistWhereInput
    orderBy?: user_wishlistOrderByWithAggregationInput | user_wishlistOrderByWithAggregationInput[]
    by: User_wishlistScalarFieldEnum[] | User_wishlistScalarFieldEnum
    having?: user_wishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_wishlistCountAggregateInputType | true
    _avg?: User_wishlistAvgAggregateInputType
    _sum?: User_wishlistSumAggregateInputType
    _min?: User_wishlistMinAggregateInputType
    _max?: User_wishlistMaxAggregateInputType
  }

  export type User_wishlistGroupByOutputType = {
    id: number
    user_id: number | null
    book_id: number | null
    created_at: Date | null
    _count: User_wishlistCountAggregateOutputType | null
    _avg: User_wishlistAvgAggregateOutputType | null
    _sum: User_wishlistSumAggregateOutputType | null
    _min: User_wishlistMinAggregateOutputType | null
    _max: User_wishlistMaxAggregateOutputType | null
  }

  type GetUser_wishlistGroupByPayload<T extends user_wishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_wishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_wishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_wishlistGroupByOutputType[P]>
            : GetScalarType<T[P], User_wishlistGroupByOutputType[P]>
        }
      >
    >


  export type user_wishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    book_id?: boolean
    created_at?: boolean
    users?: boolean | user_wishlist$usersArgs<ExtArgs>
    books?: boolean | user_wishlist$booksArgs<ExtArgs>
  }, ExtArgs["result"]["user_wishlist"]>



  export type user_wishlistSelectScalar = {
    id?: boolean
    user_id?: boolean
    book_id?: boolean
    created_at?: boolean
  }

  export type user_wishlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "book_id" | "created_at", ExtArgs["result"]["user_wishlist"]>
  export type user_wishlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_wishlist$usersArgs<ExtArgs>
    books?: boolean | user_wishlist$booksArgs<ExtArgs>
  }

  export type $user_wishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_wishlist"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      books: Prisma.$booksPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      book_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["user_wishlist"]>
    composites: {}
  }

  type user_wishlistGetPayload<S extends boolean | null | undefined | user_wishlistDefaultArgs> = $Result.GetResult<Prisma.$user_wishlistPayload, S>

  type user_wishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_wishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_wishlistCountAggregateInputType | true
    }

  export interface user_wishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_wishlist'], meta: { name: 'user_wishlist' } }
    /**
     * Find zero or one User_wishlist that matches the filter.
     * @param {user_wishlistFindUniqueArgs} args - Arguments to find a User_wishlist
     * @example
     * // Get one User_wishlist
     * const user_wishlist = await prisma.user_wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_wishlistFindUniqueArgs>(args: SelectSubset<T, user_wishlistFindUniqueArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_wishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_wishlistFindUniqueOrThrowArgs} args - Arguments to find a User_wishlist
     * @example
     * // Get one User_wishlist
     * const user_wishlist = await prisma.user_wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_wishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, user_wishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_wishlistFindFirstArgs} args - Arguments to find a User_wishlist
     * @example
     * // Get one User_wishlist
     * const user_wishlist = await prisma.user_wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_wishlistFindFirstArgs>(args?: SelectSubset<T, user_wishlistFindFirstArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_wishlistFindFirstOrThrowArgs} args - Arguments to find a User_wishlist
     * @example
     * // Get one User_wishlist
     * const user_wishlist = await prisma.user_wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_wishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, user_wishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_wishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_wishlists
     * const user_wishlists = await prisma.user_wishlist.findMany()
     * 
     * // Get first 10 User_wishlists
     * const user_wishlists = await prisma.user_wishlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_wishlistWithIdOnly = await prisma.user_wishlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_wishlistFindManyArgs>(args?: SelectSubset<T, user_wishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_wishlist.
     * @param {user_wishlistCreateArgs} args - Arguments to create a User_wishlist.
     * @example
     * // Create one User_wishlist
     * const User_wishlist = await prisma.user_wishlist.create({
     *   data: {
     *     // ... data to create a User_wishlist
     *   }
     * })
     * 
     */
    create<T extends user_wishlistCreateArgs>(args: SelectSubset<T, user_wishlistCreateArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_wishlists.
     * @param {user_wishlistCreateManyArgs} args - Arguments to create many User_wishlists.
     * @example
     * // Create many User_wishlists
     * const user_wishlist = await prisma.user_wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_wishlistCreateManyArgs>(args?: SelectSubset<T, user_wishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_wishlist.
     * @param {user_wishlistDeleteArgs} args - Arguments to delete one User_wishlist.
     * @example
     * // Delete one User_wishlist
     * const User_wishlist = await prisma.user_wishlist.delete({
     *   where: {
     *     // ... filter to delete one User_wishlist
     *   }
     * })
     * 
     */
    delete<T extends user_wishlistDeleteArgs>(args: SelectSubset<T, user_wishlistDeleteArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_wishlist.
     * @param {user_wishlistUpdateArgs} args - Arguments to update one User_wishlist.
     * @example
     * // Update one User_wishlist
     * const user_wishlist = await prisma.user_wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_wishlistUpdateArgs>(args: SelectSubset<T, user_wishlistUpdateArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_wishlists.
     * @param {user_wishlistDeleteManyArgs} args - Arguments to filter User_wishlists to delete.
     * @example
     * // Delete a few User_wishlists
     * const { count } = await prisma.user_wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_wishlistDeleteManyArgs>(args?: SelectSubset<T, user_wishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_wishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_wishlists
     * const user_wishlist = await prisma.user_wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_wishlistUpdateManyArgs>(args: SelectSubset<T, user_wishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_wishlist.
     * @param {user_wishlistUpsertArgs} args - Arguments to update or create a User_wishlist.
     * @example
     * // Update or create a User_wishlist
     * const user_wishlist = await prisma.user_wishlist.upsert({
     *   create: {
     *     // ... data to create a User_wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_wishlist we want to update
     *   }
     * })
     */
    upsert<T extends user_wishlistUpsertArgs>(args: SelectSubset<T, user_wishlistUpsertArgs<ExtArgs>>): Prisma__user_wishlistClient<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_wishlistCountArgs} args - Arguments to filter User_wishlists to count.
     * @example
     * // Count the number of User_wishlists
     * const count = await prisma.user_wishlist.count({
     *   where: {
     *     // ... the filter for the User_wishlists we want to count
     *   }
     * })
    **/
    count<T extends user_wishlistCountArgs>(
      args?: Subset<T, user_wishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_wishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_wishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_wishlistAggregateArgs>(args: Subset<T, User_wishlistAggregateArgs>): Prisma.PrismaPromise<GetUser_wishlistAggregateType<T>>

    /**
     * Group by User_wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_wishlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_wishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_wishlistGroupByArgs['orderBy'] }
        : { orderBy?: user_wishlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_wishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_wishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_wishlist model
   */
  readonly fields: user_wishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_wishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_wishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends user_wishlist$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_wishlist$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    books<T extends user_wishlist$booksArgs<ExtArgs> = {}>(args?: Subset<T, user_wishlist$booksArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_wishlist model
   */
  interface user_wishlistFieldRefs {
    readonly id: FieldRef<"user_wishlist", 'Int'>
    readonly user_id: FieldRef<"user_wishlist", 'Int'>
    readonly book_id: FieldRef<"user_wishlist", 'Int'>
    readonly created_at: FieldRef<"user_wishlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_wishlist findUnique
   */
  export type user_wishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * Filter, which user_wishlist to fetch.
     */
    where: user_wishlistWhereUniqueInput
  }

  /**
   * user_wishlist findUniqueOrThrow
   */
  export type user_wishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * Filter, which user_wishlist to fetch.
     */
    where: user_wishlistWhereUniqueInput
  }

  /**
   * user_wishlist findFirst
   */
  export type user_wishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * Filter, which user_wishlist to fetch.
     */
    where?: user_wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_wishlists to fetch.
     */
    orderBy?: user_wishlistOrderByWithRelationInput | user_wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_wishlists.
     */
    cursor?: user_wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_wishlists.
     */
    distinct?: User_wishlistScalarFieldEnum | User_wishlistScalarFieldEnum[]
  }

  /**
   * user_wishlist findFirstOrThrow
   */
  export type user_wishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * Filter, which user_wishlist to fetch.
     */
    where?: user_wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_wishlists to fetch.
     */
    orderBy?: user_wishlistOrderByWithRelationInput | user_wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_wishlists.
     */
    cursor?: user_wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_wishlists.
     */
    distinct?: User_wishlistScalarFieldEnum | User_wishlistScalarFieldEnum[]
  }

  /**
   * user_wishlist findMany
   */
  export type user_wishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * Filter, which user_wishlists to fetch.
     */
    where?: user_wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_wishlists to fetch.
     */
    orderBy?: user_wishlistOrderByWithRelationInput | user_wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_wishlists.
     */
    cursor?: user_wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_wishlists.
     */
    skip?: number
    distinct?: User_wishlistScalarFieldEnum | User_wishlistScalarFieldEnum[]
  }

  /**
   * user_wishlist create
   */
  export type user_wishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * The data needed to create a user_wishlist.
     */
    data?: XOR<user_wishlistCreateInput, user_wishlistUncheckedCreateInput>
  }

  /**
   * user_wishlist createMany
   */
  export type user_wishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_wishlists.
     */
    data: user_wishlistCreateManyInput | user_wishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_wishlist update
   */
  export type user_wishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * The data needed to update a user_wishlist.
     */
    data: XOR<user_wishlistUpdateInput, user_wishlistUncheckedUpdateInput>
    /**
     * Choose, which user_wishlist to update.
     */
    where: user_wishlistWhereUniqueInput
  }

  /**
   * user_wishlist updateMany
   */
  export type user_wishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_wishlists.
     */
    data: XOR<user_wishlistUpdateManyMutationInput, user_wishlistUncheckedUpdateManyInput>
    /**
     * Filter which user_wishlists to update
     */
    where?: user_wishlistWhereInput
    /**
     * Limit how many user_wishlists to update.
     */
    limit?: number
  }

  /**
   * user_wishlist upsert
   */
  export type user_wishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * The filter to search for the user_wishlist to update in case it exists.
     */
    where: user_wishlistWhereUniqueInput
    /**
     * In case the user_wishlist found by the `where` argument doesn't exist, create a new user_wishlist with this data.
     */
    create: XOR<user_wishlistCreateInput, user_wishlistUncheckedCreateInput>
    /**
     * In case the user_wishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_wishlistUpdateInput, user_wishlistUncheckedUpdateInput>
  }

  /**
   * user_wishlist delete
   */
  export type user_wishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    /**
     * Filter which user_wishlist to delete.
     */
    where: user_wishlistWhereUniqueInput
  }

  /**
   * user_wishlist deleteMany
   */
  export type user_wishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_wishlists to delete
     */
    where?: user_wishlistWhereInput
    /**
     * Limit how many user_wishlists to delete.
     */
    limit?: number
  }

  /**
   * user_wishlist.users
   */
  export type user_wishlist$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_wishlist.books
   */
  export type user_wishlist$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    where?: booksWhereInput
  }

  /**
   * user_wishlist without action
   */
  export type user_wishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.users_role | null
    status: $Enums.users_status | null
    created_at: Date | null
    updated_at: Date | null
    gender: $Enums.gender | null
    phone_number: string | null
    birth_date: Date | null
    address: string | null
    profile_image_url: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.users_role | null
    status: $Enums.users_status | null
    created_at: Date | null
    updated_at: Date | null
    gender: $Enums.gender | null
    phone_number: string | null
    birth_date: Date | null
    address: string | null
    profile_image_url: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password_hash: number
    role: number
    status: number
    created_at: number
    updated_at: number
    gender: number
    phone_number: number
    birth_date: number
    address: number
    profile_image_url: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
    gender?: true
    phone_number?: true
    birth_date?: true
    address?: true
    profile_image_url?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
    gender?: true
    phone_number?: true
    birth_date?: true
    address?: true
    profile_image_url?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
    gender?: true
    phone_number?: true
    birth_date?: true
    address?: true
    profile_image_url?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.users_role | null
    status: $Enums.users_status | null
    created_at: Date | null
    updated_at: Date | null
    gender: $Enums.gender | null
    phone_number: string | null
    birth_date: Date | null
    address: string | null
    profile_image_url: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    gender?: boolean
    phone_number?: boolean
    birth_date?: boolean
    address?: boolean
    profile_image_url?: boolean
    book_tran?: boolean | users$book_tranArgs<ExtArgs>
    book_tran_history_book_tran_history_requested_byTousers?: boolean | users$book_tran_history_book_tran_history_requested_byTousersArgs<ExtArgs>
    book_tran_history_book_tran_history_approved_byTousers?: boolean | users$book_tran_history_book_tran_history_approved_byTousersArgs<ExtArgs>
    fines?: boolean | users$finesArgs<ExtArgs>
    logs?: boolean | users$logsArgs<ExtArgs>
    notifications_notifications_from_user_idTousers?: boolean | users$notifications_notifications_from_user_idTousersArgs<ExtArgs>
    notifications_notifications_to_user_idTousers?: boolean | users$notifications_notifications_to_user_idTousersArgs<ExtArgs>
    user_wishlist?: boolean | users$user_wishlistArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    gender?: boolean
    phone_number?: boolean
    birth_date?: boolean
    address?: boolean
    profile_image_url?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password_hash" | "role" | "status" | "created_at" | "updated_at" | "gender" | "phone_number" | "birth_date" | "address" | "profile_image_url", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_tran?: boolean | users$book_tranArgs<ExtArgs>
    book_tran_history_book_tran_history_requested_byTousers?: boolean | users$book_tran_history_book_tran_history_requested_byTousersArgs<ExtArgs>
    book_tran_history_book_tran_history_approved_byTousers?: boolean | users$book_tran_history_book_tran_history_approved_byTousersArgs<ExtArgs>
    fines?: boolean | users$finesArgs<ExtArgs>
    logs?: boolean | users$logsArgs<ExtArgs>
    notifications_notifications_from_user_idTousers?: boolean | users$notifications_notifications_from_user_idTousersArgs<ExtArgs>
    notifications_notifications_to_user_idTousers?: boolean | users$notifications_notifications_to_user_idTousersArgs<ExtArgs>
    user_wishlist?: boolean | users$user_wishlistArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      book_tran: Prisma.$book_tranPayload<ExtArgs>[]
      book_tran_history_book_tran_history_requested_byTousers: Prisma.$book_tran_historyPayload<ExtArgs>[]
      book_tran_history_book_tran_history_approved_byTousers: Prisma.$book_tran_historyPayload<ExtArgs>[]
      fines: Prisma.$finesPayload<ExtArgs>[]
      logs: Prisma.$logsPayload<ExtArgs>[]
      notifications_notifications_from_user_idTousers: Prisma.$notificationsPayload<ExtArgs>[]
      notifications_notifications_to_user_idTousers: Prisma.$notificationsPayload<ExtArgs>[]
      user_wishlist: Prisma.$user_wishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string | null
      email: string | null
      password_hash: string | null
      role: $Enums.users_role | null
      status: $Enums.users_status | null
      created_at: Date | null
      updated_at: Date | null
      gender: $Enums.gender | null
      phone_number: string | null
      birth_date: Date | null
      address: string | null
      profile_image_url: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book_tran<T extends users$book_tranArgs<ExtArgs> = {}>(args?: Subset<T, users$book_tranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    book_tran_history_book_tran_history_requested_byTousers<T extends users$book_tran_history_book_tran_history_requested_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$book_tran_history_book_tran_history_requested_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    book_tran_history_book_tran_history_approved_byTousers<T extends users$book_tran_history_book_tran_history_approved_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$book_tran_history_book_tran_history_approved_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tran_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fines<T extends users$finesArgs<ExtArgs> = {}>(args?: Subset<T, users$finesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends users$logsArgs<ExtArgs> = {}>(args?: Subset<T, users$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_notifications_from_user_idTousers<T extends users$notifications_notifications_from_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$notifications_notifications_from_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_notifications_to_user_idTousers<T extends users$notifications_notifications_to_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$notifications_notifications_to_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_wishlist<T extends users$user_wishlistArgs<ExtArgs> = {}>(args?: Subset<T, users$user_wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly status: FieldRef<"users", 'users_status'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly gender: FieldRef<"users", 'gender'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly birth_date: FieldRef<"users", 'DateTime'>
    readonly address: FieldRef<"users", 'String'>
    readonly profile_image_url: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.book_tran
   */
  export type users$book_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran
     */
    select?: book_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran
     */
    omit?: book_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tranInclude<ExtArgs> | null
    where?: book_tranWhereInput
    orderBy?: book_tranOrderByWithRelationInput | book_tranOrderByWithRelationInput[]
    cursor?: book_tranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_tranScalarFieldEnum | Book_tranScalarFieldEnum[]
  }

  /**
   * users.book_tran_history_book_tran_history_requested_byTousers
   */
  export type users$book_tran_history_book_tran_history_requested_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    where?: book_tran_historyWhereInput
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    cursor?: book_tran_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_tran_historyScalarFieldEnum | Book_tran_historyScalarFieldEnum[]
  }

  /**
   * users.book_tran_history_book_tran_history_approved_byTousers
   */
  export type users$book_tran_history_book_tran_history_approved_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tran_history
     */
    select?: book_tran_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tran_history
     */
    omit?: book_tran_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tran_historyInclude<ExtArgs> | null
    where?: book_tran_historyWhereInput
    orderBy?: book_tran_historyOrderByWithRelationInput | book_tran_historyOrderByWithRelationInput[]
    cursor?: book_tran_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_tran_historyScalarFieldEnum | Book_tran_historyScalarFieldEnum[]
  }

  /**
   * users.fines
   */
  export type users$finesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fines
     */
    select?: finesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fines
     */
    omit?: finesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: finesInclude<ExtArgs> | null
    where?: finesWhereInput
    orderBy?: finesOrderByWithRelationInput | finesOrderByWithRelationInput[]
    cursor?: finesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinesScalarFieldEnum | FinesScalarFieldEnum[]
  }

  /**
   * users.logs
   */
  export type users$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    where?: logsWhereInput
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    cursor?: logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * users.notifications_notifications_from_user_idTousers
   */
  export type users$notifications_notifications_from_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.notifications_notifications_to_user_idTousers
   */
  export type users$notifications_notifications_to_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.user_wishlist
   */
  export type users$user_wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_wishlist
     */
    select?: user_wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_wishlist
     */
    omit?: user_wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_wishlistInclude<ExtArgs> | null
    where?: user_wishlistWhereInput
    orderBy?: user_wishlistOrderByWithRelationInput | user_wishlistOrderByWithRelationInput[]
    cursor?: user_wishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_wishlistScalarFieldEnum | User_wishlistScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model contact_us
   */

  export type AggregateContact_us = {
    _count: Contact_usCountAggregateOutputType | null
    _avg: Contact_usAvgAggregateOutputType | null
    _sum: Contact_usSumAggregateOutputType | null
    _min: Contact_usMinAggregateOutputType | null
    _max: Contact_usMaxAggregateOutputType | null
  }

  export type Contact_usAvgAggregateOutputType = {
    id: number | null
  }

  export type Contact_usSumAggregateOutputType = {
    id: number | null
  }

  export type Contact_usMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    created_at: Date | null
  }

  export type Contact_usMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    created_at: Date | null
  }

  export type Contact_usCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    created_at: number
    _all: number
  }


  export type Contact_usAvgAggregateInputType = {
    id?: true
  }

  export type Contact_usSumAggregateInputType = {
    id?: true
  }

  export type Contact_usMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    created_at?: true
  }

  export type Contact_usMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    created_at?: true
  }

  export type Contact_usCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    created_at?: true
    _all?: true
  }

  export type Contact_usAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_us to aggregate.
     */
    where?: contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_uses to fetch.
     */
    orderBy?: contact_usOrderByWithRelationInput | contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contact_uses
    **/
    _count?: true | Contact_usCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contact_usAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contact_usSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contact_usMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contact_usMaxAggregateInputType
  }

  export type GetContact_usAggregateType<T extends Contact_usAggregateArgs> = {
        [P in keyof T & keyof AggregateContact_us]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact_us[P]>
      : GetScalarType<T[P], AggregateContact_us[P]>
  }




  export type contact_usGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contact_usWhereInput
    orderBy?: contact_usOrderByWithAggregationInput | contact_usOrderByWithAggregationInput[]
    by: Contact_usScalarFieldEnum[] | Contact_usScalarFieldEnum
    having?: contact_usScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contact_usCountAggregateInputType | true
    _avg?: Contact_usAvgAggregateInputType
    _sum?: Contact_usSumAggregateInputType
    _min?: Contact_usMinAggregateInputType
    _max?: Contact_usMaxAggregateInputType
  }

  export type Contact_usGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    created_at: Date | null
    _count: Contact_usCountAggregateOutputType | null
    _avg: Contact_usAvgAggregateOutputType | null
    _sum: Contact_usSumAggregateOutputType | null
    _min: Contact_usMinAggregateOutputType | null
    _max: Contact_usMaxAggregateOutputType | null
  }

  type GetContact_usGroupByPayload<T extends contact_usGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contact_usGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contact_usGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contact_usGroupByOutputType[P]>
            : GetScalarType<T[P], Contact_usGroupByOutputType[P]>
        }
      >
    >


  export type contact_usSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contact_us"]>



  export type contact_usSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    created_at?: boolean
  }

  export type contact_usOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "created_at", ExtArgs["result"]["contact_us"]>

  export type $contact_usPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact_us"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      subject: string | null
      message: string | null
      created_at: Date | null
    }, ExtArgs["result"]["contact_us"]>
    composites: {}
  }

  type contact_usGetPayload<S extends boolean | null | undefined | contact_usDefaultArgs> = $Result.GetResult<Prisma.$contact_usPayload, S>

  type contact_usCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contact_usFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contact_usCountAggregateInputType | true
    }

  export interface contact_usDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact_us'], meta: { name: 'contact_us' } }
    /**
     * Find zero or one Contact_us that matches the filter.
     * @param {contact_usFindUniqueArgs} args - Arguments to find a Contact_us
     * @example
     * // Get one Contact_us
     * const contact_us = await prisma.contact_us.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contact_usFindUniqueArgs>(args: SelectSubset<T, contact_usFindUniqueArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact_us that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contact_usFindUniqueOrThrowArgs} args - Arguments to find a Contact_us
     * @example
     * // Get one Contact_us
     * const contact_us = await prisma.contact_us.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contact_usFindUniqueOrThrowArgs>(args: SelectSubset<T, contact_usFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact_us that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_usFindFirstArgs} args - Arguments to find a Contact_us
     * @example
     * // Get one Contact_us
     * const contact_us = await prisma.contact_us.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contact_usFindFirstArgs>(args?: SelectSubset<T, contact_usFindFirstArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact_us that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_usFindFirstOrThrowArgs} args - Arguments to find a Contact_us
     * @example
     * // Get one Contact_us
     * const contact_us = await prisma.contact_us.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contact_usFindFirstOrThrowArgs>(args?: SelectSubset<T, contact_usFindFirstOrThrowArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contact_uses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_usFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contact_uses
     * const contact_uses = await prisma.contact_us.findMany()
     * 
     * // Get first 10 Contact_uses
     * const contact_uses = await prisma.contact_us.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contact_usWithIdOnly = await prisma.contact_us.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contact_usFindManyArgs>(args?: SelectSubset<T, contact_usFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact_us.
     * @param {contact_usCreateArgs} args - Arguments to create a Contact_us.
     * @example
     * // Create one Contact_us
     * const Contact_us = await prisma.contact_us.create({
     *   data: {
     *     // ... data to create a Contact_us
     *   }
     * })
     * 
     */
    create<T extends contact_usCreateArgs>(args: SelectSubset<T, contact_usCreateArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contact_uses.
     * @param {contact_usCreateManyArgs} args - Arguments to create many Contact_uses.
     * @example
     * // Create many Contact_uses
     * const contact_us = await prisma.contact_us.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contact_usCreateManyArgs>(args?: SelectSubset<T, contact_usCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact_us.
     * @param {contact_usDeleteArgs} args - Arguments to delete one Contact_us.
     * @example
     * // Delete one Contact_us
     * const Contact_us = await prisma.contact_us.delete({
     *   where: {
     *     // ... filter to delete one Contact_us
     *   }
     * })
     * 
     */
    delete<T extends contact_usDeleteArgs>(args: SelectSubset<T, contact_usDeleteArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact_us.
     * @param {contact_usUpdateArgs} args - Arguments to update one Contact_us.
     * @example
     * // Update one Contact_us
     * const contact_us = await prisma.contact_us.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contact_usUpdateArgs>(args: SelectSubset<T, contact_usUpdateArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contact_uses.
     * @param {contact_usDeleteManyArgs} args - Arguments to filter Contact_uses to delete.
     * @example
     * // Delete a few Contact_uses
     * const { count } = await prisma.contact_us.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contact_usDeleteManyArgs>(args?: SelectSubset<T, contact_usDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contact_uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_usUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contact_uses
     * const contact_us = await prisma.contact_us.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contact_usUpdateManyArgs>(args: SelectSubset<T, contact_usUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact_us.
     * @param {contact_usUpsertArgs} args - Arguments to update or create a Contact_us.
     * @example
     * // Update or create a Contact_us
     * const contact_us = await prisma.contact_us.upsert({
     *   create: {
     *     // ... data to create a Contact_us
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact_us we want to update
     *   }
     * })
     */
    upsert<T extends contact_usUpsertArgs>(args: SelectSubset<T, contact_usUpsertArgs<ExtArgs>>): Prisma__contact_usClient<$Result.GetResult<Prisma.$contact_usPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contact_uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_usCountArgs} args - Arguments to filter Contact_uses to count.
     * @example
     * // Count the number of Contact_uses
     * const count = await prisma.contact_us.count({
     *   where: {
     *     // ... the filter for the Contact_uses we want to count
     *   }
     * })
    **/
    count<T extends contact_usCountArgs>(
      args?: Subset<T, contact_usCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contact_usCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact_us.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contact_usAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contact_usAggregateArgs>(args: Subset<T, Contact_usAggregateArgs>): Prisma.PrismaPromise<GetContact_usAggregateType<T>>

    /**
     * Group by Contact_us.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_usGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contact_usGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contact_usGroupByArgs['orderBy'] }
        : { orderBy?: contact_usGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contact_usGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContact_usGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact_us model
   */
  readonly fields: contact_usFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact_us.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contact_usClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contact_us model
   */
  interface contact_usFieldRefs {
    readonly id: FieldRef<"contact_us", 'Int'>
    readonly name: FieldRef<"contact_us", 'String'>
    readonly email: FieldRef<"contact_us", 'String'>
    readonly subject: FieldRef<"contact_us", 'String'>
    readonly message: FieldRef<"contact_us", 'String'>
    readonly created_at: FieldRef<"contact_us", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contact_us findUnique
   */
  export type contact_usFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * Filter, which contact_us to fetch.
     */
    where: contact_usWhereUniqueInput
  }

  /**
   * contact_us findUniqueOrThrow
   */
  export type contact_usFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * Filter, which contact_us to fetch.
     */
    where: contact_usWhereUniqueInput
  }

  /**
   * contact_us findFirst
   */
  export type contact_usFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * Filter, which contact_us to fetch.
     */
    where?: contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_uses to fetch.
     */
    orderBy?: contact_usOrderByWithRelationInput | contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_uses.
     */
    cursor?: contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_uses.
     */
    distinct?: Contact_usScalarFieldEnum | Contact_usScalarFieldEnum[]
  }

  /**
   * contact_us findFirstOrThrow
   */
  export type contact_usFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * Filter, which contact_us to fetch.
     */
    where?: contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_uses to fetch.
     */
    orderBy?: contact_usOrderByWithRelationInput | contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_uses.
     */
    cursor?: contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_uses.
     */
    distinct?: Contact_usScalarFieldEnum | Contact_usScalarFieldEnum[]
  }

  /**
   * contact_us findMany
   */
  export type contact_usFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * Filter, which contact_uses to fetch.
     */
    where?: contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_uses to fetch.
     */
    orderBy?: contact_usOrderByWithRelationInput | contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contact_uses.
     */
    cursor?: contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_uses.
     */
    skip?: number
    distinct?: Contact_usScalarFieldEnum | Contact_usScalarFieldEnum[]
  }

  /**
   * contact_us create
   */
  export type contact_usCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * The data needed to create a contact_us.
     */
    data?: XOR<contact_usCreateInput, contact_usUncheckedCreateInput>
  }

  /**
   * contact_us createMany
   */
  export type contact_usCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contact_uses.
     */
    data: contact_usCreateManyInput | contact_usCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact_us update
   */
  export type contact_usUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * The data needed to update a contact_us.
     */
    data: XOR<contact_usUpdateInput, contact_usUncheckedUpdateInput>
    /**
     * Choose, which contact_us to update.
     */
    where: contact_usWhereUniqueInput
  }

  /**
   * contact_us updateMany
   */
  export type contact_usUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contact_uses.
     */
    data: XOR<contact_usUpdateManyMutationInput, contact_usUncheckedUpdateManyInput>
    /**
     * Filter which contact_uses to update
     */
    where?: contact_usWhereInput
    /**
     * Limit how many contact_uses to update.
     */
    limit?: number
  }

  /**
   * contact_us upsert
   */
  export type contact_usUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * The filter to search for the contact_us to update in case it exists.
     */
    where: contact_usWhereUniqueInput
    /**
     * In case the contact_us found by the `where` argument doesn't exist, create a new contact_us with this data.
     */
    create: XOR<contact_usCreateInput, contact_usUncheckedCreateInput>
    /**
     * In case the contact_us was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contact_usUpdateInput, contact_usUncheckedUpdateInput>
  }

  /**
   * contact_us delete
   */
  export type contact_usDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
    /**
     * Filter which contact_us to delete.
     */
    where: contact_usWhereUniqueInput
  }

  /**
   * contact_us deleteMany
   */
  export type contact_usDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_uses to delete
     */
    where?: contact_usWhereInput
    /**
     * Limit how many contact_uses to delete.
     */
    limit?: number
  }

  /**
   * contact_us without action
   */
  export type contact_usDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_us
     */
    select?: contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_us
     */
    omit?: contact_usOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Book_tranScalarFieldEnum: {
    tran_id: 'tran_id',
    book_id: 'book_id',
    status: 'status',
    user_id: 'user_id',
    record_status: 'record_status'
  };

  export type Book_tranScalarFieldEnum = (typeof Book_tranScalarFieldEnum)[keyof typeof Book_tranScalarFieldEnum]


  export const Book_tran_historyScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    tran_id: 'tran_id',
    status: 'status',
    requested_by: 'requested_by',
    approved_by: 'approved_by',
    requested_at: 'requested_at',
    approved_at: 'approved_at',
    date_issued: 'date_issued',
    date_due: 'date_due',
    date_returned: 'date_returned',
    remarks: 'remarks'
  };

  export type Book_tran_historyScalarFieldEnum = (typeof Book_tran_historyScalarFieldEnum)[keyof typeof Book_tran_historyScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    book_id: 'book_id',
    title: 'title',
    author: 'author',
    isbn: 'isbn',
    year: 'year',
    genre: 'genre',
    image_url: 'image_url',
    description: 'description',
    librarian_id: 'librarian_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    record_status: 'record_status'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const FinesScalarFieldEnum: {
    fine_id: 'fine_id',
    user_id: 'user_id',
    book_tran_history_id: 'book_tran_history_id',
    amount: 'amount',
    reason: 'reason',
    status: 'status',
    created_at: 'created_at',
    paid_at: 'paid_at'
  };

  export type FinesScalarFieldEnum = (typeof FinesScalarFieldEnum)[keyof typeof FinesScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    log_id: 'log_id',
    description: 'description',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    notification_id: 'notification_id',
    type: 'type',
    book_id: 'book_id',
    from_user_id: 'from_user_id',
    to_user_id: 'to_user_id',
    tran_id: 'tran_id',
    status: 'status',
    message: 'message',
    created_at: 'created_at',
    resolved_at: 'resolved_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const User_wishlistScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    book_id: 'book_id',
    created_at: 'created_at'
  };

  export type User_wishlistScalarFieldEnum = (typeof User_wishlistScalarFieldEnum)[keyof typeof User_wishlistScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    gender: 'gender',
    phone_number: 'phone_number',
    birth_date: 'birth_date',
    address: 'address',
    profile_image_url: 'profile_image_url'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Contact_usScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    created_at: 'created_at'
  };

  export type Contact_usScalarFieldEnum = (typeof Contact_usScalarFieldEnum)[keyof typeof Contact_usScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const book_tran_historyOrderByRelevanceFieldEnum: {
    remarks: 'remarks'
  };

  export type book_tran_historyOrderByRelevanceFieldEnum = (typeof book_tran_historyOrderByRelevanceFieldEnum)[keyof typeof book_tran_historyOrderByRelevanceFieldEnum]


  export const booksOrderByRelevanceFieldEnum: {
    title: 'title',
    author: 'author',
    isbn: 'isbn',
    genre: 'genre',
    image_url: 'image_url',
    description: 'description'
  };

  export type booksOrderByRelevanceFieldEnum = (typeof booksOrderByRelevanceFieldEnum)[keyof typeof booksOrderByRelevanceFieldEnum]


  export const finesOrderByRelevanceFieldEnum: {
    reason: 'reason'
  };

  export type finesOrderByRelevanceFieldEnum = (typeof finesOrderByRelevanceFieldEnum)[keyof typeof finesOrderByRelevanceFieldEnum]


  export const logsOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type logsOrderByRelevanceFieldEnum = (typeof logsOrderByRelevanceFieldEnum)[keyof typeof logsOrderByRelevanceFieldEnum]


  export const notificationsOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type notificationsOrderByRelevanceFieldEnum = (typeof notificationsOrderByRelevanceFieldEnum)[keyof typeof notificationsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    phone_number: 'phone_number',
    address: 'address',
    profile_image_url: 'profile_image_url'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const contact_usOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message'
  };

  export type contact_usOrderByRelevanceFieldEnum = (typeof contact_usOrderByRelevanceFieldEnum)[keyof typeof contact_usOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'book_tran_status'
   */
  export type Enumbook_tran_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'book_tran_status'>
    


  /**
   * Reference to a field of type 'record_status'
   */
  export type Enumrecord_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'record_status'>
    


  /**
   * Reference to a field of type 'book_tran_history_status'
   */
  export type Enumbook_tran_history_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'book_tran_history_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'fines_status'
   */
  export type Enumfines_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fines_status'>
    


  /**
   * Reference to a field of type 'notifications_type'
   */
  export type Enumnotifications_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notifications_type'>
    


  /**
   * Reference to a field of type 'notifications_status'
   */
  export type Enumnotifications_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notifications_status'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'users_status'
   */
  export type Enumusers_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_status'>
    


  /**
   * Reference to a field of type 'gender'
   */
  export type EnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type book_tranWhereInput = {
    AND?: book_tranWhereInput | book_tranWhereInput[]
    OR?: book_tranWhereInput[]
    NOT?: book_tranWhereInput | book_tranWhereInput[]
    tran_id?: IntFilter<"book_tran"> | number
    book_id?: IntNullableFilter<"book_tran"> | number | null
    status?: Enumbook_tran_statusNullableFilter<"book_tran"> | $Enums.book_tran_status | null
    user_id?: IntNullableFilter<"book_tran"> | number | null
    record_status?: Enumrecord_statusNullableFilter<"book_tran"> | $Enums.record_status | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    book_tran_history?: Book_tran_historyListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type book_tranOrderByWithRelationInput = {
    tran_id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    record_status?: SortOrderInput | SortOrder
    books?: booksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    book_tran_history?: book_tran_historyOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
  }

  export type book_tranWhereUniqueInput = Prisma.AtLeast<{
    tran_id?: number
    AND?: book_tranWhereInput | book_tranWhereInput[]
    OR?: book_tranWhereInput[]
    NOT?: book_tranWhereInput | book_tranWhereInput[]
    book_id?: IntNullableFilter<"book_tran"> | number | null
    status?: Enumbook_tran_statusNullableFilter<"book_tran"> | $Enums.book_tran_status | null
    user_id?: IntNullableFilter<"book_tran"> | number | null
    record_status?: Enumrecord_statusNullableFilter<"book_tran"> | $Enums.record_status | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    book_tran_history?: Book_tran_historyListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "tran_id">

  export type book_tranOrderByWithAggregationInput = {
    tran_id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    record_status?: SortOrderInput | SortOrder
    _count?: book_tranCountOrderByAggregateInput
    _avg?: book_tranAvgOrderByAggregateInput
    _max?: book_tranMaxOrderByAggregateInput
    _min?: book_tranMinOrderByAggregateInput
    _sum?: book_tranSumOrderByAggregateInput
  }

  export type book_tranScalarWhereWithAggregatesInput = {
    AND?: book_tranScalarWhereWithAggregatesInput | book_tranScalarWhereWithAggregatesInput[]
    OR?: book_tranScalarWhereWithAggregatesInput[]
    NOT?: book_tranScalarWhereWithAggregatesInput | book_tranScalarWhereWithAggregatesInput[]
    tran_id?: IntWithAggregatesFilter<"book_tran"> | number
    book_id?: IntNullableWithAggregatesFilter<"book_tran"> | number | null
    status?: Enumbook_tran_statusNullableWithAggregatesFilter<"book_tran"> | $Enums.book_tran_status | null
    user_id?: IntNullableWithAggregatesFilter<"book_tran"> | number | null
    record_status?: Enumrecord_statusNullableWithAggregatesFilter<"book_tran"> | $Enums.record_status | null
  }

  export type book_tran_historyWhereInput = {
    AND?: book_tran_historyWhereInput | book_tran_historyWhereInput[]
    OR?: book_tran_historyWhereInput[]
    NOT?: book_tran_historyWhereInput | book_tran_historyWhereInput[]
    id?: IntFilter<"book_tran_history"> | number
    book_id?: IntNullableFilter<"book_tran_history"> | number | null
    tran_id?: IntNullableFilter<"book_tran_history"> | number | null
    status?: Enumbook_tran_history_statusFilter<"book_tran_history"> | $Enums.book_tran_history_status
    requested_by?: IntNullableFilter<"book_tran_history"> | number | null
    approved_by?: IntNullableFilter<"book_tran_history"> | number | null
    requested_at?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    approved_at?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_issued?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_due?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_returned?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    remarks?: StringNullableFilter<"book_tran_history"> | string | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
    book_tran?: XOR<Book_tranNullableScalarRelationFilter, book_tranWhereInput> | null
    users_book_tran_history_requested_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_book_tran_history_approved_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    fines?: FinesListRelationFilter
  }

  export type book_tran_historyOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    tran_id?: SortOrderInput | SortOrder
    status?: SortOrder
    requested_by?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    requested_at?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    date_issued?: SortOrderInput | SortOrder
    date_due?: SortOrderInput | SortOrder
    date_returned?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    books?: booksOrderByWithRelationInput
    book_tran?: book_tranOrderByWithRelationInput
    users_book_tran_history_requested_byTousers?: usersOrderByWithRelationInput
    users_book_tran_history_approved_byTousers?: usersOrderByWithRelationInput
    fines?: finesOrderByRelationAggregateInput
    _relevance?: book_tran_historyOrderByRelevanceInput
  }

  export type book_tran_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: book_tran_historyWhereInput | book_tran_historyWhereInput[]
    OR?: book_tran_historyWhereInput[]
    NOT?: book_tran_historyWhereInput | book_tran_historyWhereInput[]
    book_id?: IntNullableFilter<"book_tran_history"> | number | null
    tran_id?: IntNullableFilter<"book_tran_history"> | number | null
    status?: Enumbook_tran_history_statusFilter<"book_tran_history"> | $Enums.book_tran_history_status
    requested_by?: IntNullableFilter<"book_tran_history"> | number | null
    approved_by?: IntNullableFilter<"book_tran_history"> | number | null
    requested_at?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    approved_at?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_issued?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_due?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_returned?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    remarks?: StringNullableFilter<"book_tran_history"> | string | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
    book_tran?: XOR<Book_tranNullableScalarRelationFilter, book_tranWhereInput> | null
    users_book_tran_history_requested_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_book_tran_history_approved_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    fines?: FinesListRelationFilter
  }, "id">

  export type book_tran_historyOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    tran_id?: SortOrderInput | SortOrder
    status?: SortOrder
    requested_by?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    requested_at?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    date_issued?: SortOrderInput | SortOrder
    date_due?: SortOrderInput | SortOrder
    date_returned?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: book_tran_historyCountOrderByAggregateInput
    _avg?: book_tran_historyAvgOrderByAggregateInput
    _max?: book_tran_historyMaxOrderByAggregateInput
    _min?: book_tran_historyMinOrderByAggregateInput
    _sum?: book_tran_historySumOrderByAggregateInput
  }

  export type book_tran_historyScalarWhereWithAggregatesInput = {
    AND?: book_tran_historyScalarWhereWithAggregatesInput | book_tran_historyScalarWhereWithAggregatesInput[]
    OR?: book_tran_historyScalarWhereWithAggregatesInput[]
    NOT?: book_tran_historyScalarWhereWithAggregatesInput | book_tran_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"book_tran_history"> | number
    book_id?: IntNullableWithAggregatesFilter<"book_tran_history"> | number | null
    tran_id?: IntNullableWithAggregatesFilter<"book_tran_history"> | number | null
    status?: Enumbook_tran_history_statusWithAggregatesFilter<"book_tran_history"> | $Enums.book_tran_history_status
    requested_by?: IntNullableWithAggregatesFilter<"book_tran_history"> | number | null
    approved_by?: IntNullableWithAggregatesFilter<"book_tran_history"> | number | null
    requested_at?: DateTimeNullableWithAggregatesFilter<"book_tran_history"> | Date | string | null
    approved_at?: DateTimeNullableWithAggregatesFilter<"book_tran_history"> | Date | string | null
    date_issued?: DateTimeNullableWithAggregatesFilter<"book_tran_history"> | Date | string | null
    date_due?: DateTimeNullableWithAggregatesFilter<"book_tran_history"> | Date | string | null
    date_returned?: DateTimeNullableWithAggregatesFilter<"book_tran_history"> | Date | string | null
    remarks?: StringNullableWithAggregatesFilter<"book_tran_history"> | string | null
  }

  export type booksWhereInput = {
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    book_id?: IntFilter<"books"> | number
    title?: StringNullableFilter<"books"> | string | null
    author?: StringFilter<"books"> | string
    isbn?: StringNullableFilter<"books"> | string | null
    year?: IntNullableFilter<"books"> | number | null
    genre?: StringNullableFilter<"books"> | string | null
    image_url?: StringNullableFilter<"books"> | string | null
    description?: StringNullableFilter<"books"> | string | null
    librarian_id?: IntNullableFilter<"books"> | number | null
    created_at?: DateTimeNullableFilter<"books"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"books"> | Date | string | null
    record_status?: Enumrecord_statusNullableFilter<"books"> | $Enums.record_status | null
    book_tran?: Book_tranListRelationFilter
    book_tran_history?: Book_tran_historyListRelationFilter
    notifications?: NotificationsListRelationFilter
    user_wishlist?: User_wishlistListRelationFilter
  }

  export type booksOrderByWithRelationInput = {
    book_id?: SortOrder
    title?: SortOrderInput | SortOrder
    author?: SortOrder
    isbn?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    librarian_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    record_status?: SortOrderInput | SortOrder
    book_tran?: book_tranOrderByRelationAggregateInput
    book_tran_history?: book_tran_historyOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    user_wishlist?: user_wishlistOrderByRelationAggregateInput
    _relevance?: booksOrderByRelevanceInput
  }

  export type booksWhereUniqueInput = Prisma.AtLeast<{
    book_id?: number
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    title?: StringNullableFilter<"books"> | string | null
    author?: StringFilter<"books"> | string
    isbn?: StringNullableFilter<"books"> | string | null
    year?: IntNullableFilter<"books"> | number | null
    genre?: StringNullableFilter<"books"> | string | null
    image_url?: StringNullableFilter<"books"> | string | null
    description?: StringNullableFilter<"books"> | string | null
    librarian_id?: IntNullableFilter<"books"> | number | null
    created_at?: DateTimeNullableFilter<"books"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"books"> | Date | string | null
    record_status?: Enumrecord_statusNullableFilter<"books"> | $Enums.record_status | null
    book_tran?: Book_tranListRelationFilter
    book_tran_history?: Book_tran_historyListRelationFilter
    notifications?: NotificationsListRelationFilter
    user_wishlist?: User_wishlistListRelationFilter
  }, "book_id">

  export type booksOrderByWithAggregationInput = {
    book_id?: SortOrder
    title?: SortOrderInput | SortOrder
    author?: SortOrder
    isbn?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    librarian_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    record_status?: SortOrderInput | SortOrder
    _count?: booksCountOrderByAggregateInput
    _avg?: booksAvgOrderByAggregateInput
    _max?: booksMaxOrderByAggregateInput
    _min?: booksMinOrderByAggregateInput
    _sum?: booksSumOrderByAggregateInput
  }

  export type booksScalarWhereWithAggregatesInput = {
    AND?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    OR?: booksScalarWhereWithAggregatesInput[]
    NOT?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    book_id?: IntWithAggregatesFilter<"books"> | number
    title?: StringNullableWithAggregatesFilter<"books"> | string | null
    author?: StringWithAggregatesFilter<"books"> | string
    isbn?: StringNullableWithAggregatesFilter<"books"> | string | null
    year?: IntNullableWithAggregatesFilter<"books"> | number | null
    genre?: StringNullableWithAggregatesFilter<"books"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"books"> | string | null
    description?: StringNullableWithAggregatesFilter<"books"> | string | null
    librarian_id?: IntNullableWithAggregatesFilter<"books"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"books"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"books"> | Date | string | null
    record_status?: Enumrecord_statusNullableWithAggregatesFilter<"books"> | $Enums.record_status | null
  }

  export type finesWhereInput = {
    AND?: finesWhereInput | finesWhereInput[]
    OR?: finesWhereInput[]
    NOT?: finesWhereInput | finesWhereInput[]
    fine_id?: IntFilter<"fines"> | number
    user_id?: IntNullableFilter<"fines"> | number | null
    book_tran_history_id?: IntNullableFilter<"fines"> | number | null
    amount?: DecimalNullableFilter<"fines"> | Decimal | DecimalJsLike | number | string | null
    reason?: StringNullableFilter<"fines"> | string | null
    status?: Enumfines_statusNullableFilter<"fines"> | $Enums.fines_status | null
    created_at?: DateTimeNullableFilter<"fines"> | Date | string | null
    paid_at?: DateTimeNullableFilter<"fines"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    book_tran_history?: XOR<Book_tran_historyNullableScalarRelationFilter, book_tran_historyWhereInput> | null
  }

  export type finesOrderByWithRelationInput = {
    fine_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    book_tran_history_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    book_tran_history?: book_tran_historyOrderByWithRelationInput
    _relevance?: finesOrderByRelevanceInput
  }

  export type finesWhereUniqueInput = Prisma.AtLeast<{
    fine_id?: number
    AND?: finesWhereInput | finesWhereInput[]
    OR?: finesWhereInput[]
    NOT?: finesWhereInput | finesWhereInput[]
    user_id?: IntNullableFilter<"fines"> | number | null
    book_tran_history_id?: IntNullableFilter<"fines"> | number | null
    amount?: DecimalNullableFilter<"fines"> | Decimal | DecimalJsLike | number | string | null
    reason?: StringNullableFilter<"fines"> | string | null
    status?: Enumfines_statusNullableFilter<"fines"> | $Enums.fines_status | null
    created_at?: DateTimeNullableFilter<"fines"> | Date | string | null
    paid_at?: DateTimeNullableFilter<"fines"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    book_tran_history?: XOR<Book_tran_historyNullableScalarRelationFilter, book_tran_historyWhereInput> | null
  }, "fine_id">

  export type finesOrderByWithAggregationInput = {
    fine_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    book_tran_history_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    _count?: finesCountOrderByAggregateInput
    _avg?: finesAvgOrderByAggregateInput
    _max?: finesMaxOrderByAggregateInput
    _min?: finesMinOrderByAggregateInput
    _sum?: finesSumOrderByAggregateInput
  }

  export type finesScalarWhereWithAggregatesInput = {
    AND?: finesScalarWhereWithAggregatesInput | finesScalarWhereWithAggregatesInput[]
    OR?: finesScalarWhereWithAggregatesInput[]
    NOT?: finesScalarWhereWithAggregatesInput | finesScalarWhereWithAggregatesInput[]
    fine_id?: IntWithAggregatesFilter<"fines"> | number
    user_id?: IntNullableWithAggregatesFilter<"fines"> | number | null
    book_tran_history_id?: IntNullableWithAggregatesFilter<"fines"> | number | null
    amount?: DecimalNullableWithAggregatesFilter<"fines"> | Decimal | DecimalJsLike | number | string | null
    reason?: StringNullableWithAggregatesFilter<"fines"> | string | null
    status?: Enumfines_statusNullableWithAggregatesFilter<"fines"> | $Enums.fines_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"fines"> | Date | string | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"fines"> | Date | string | null
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    log_id?: IntFilter<"logs"> | number
    description?: StringFilter<"logs"> | string
    user_id?: IntFilter<"logs"> | number
    created_at?: DateTimeNullableFilter<"logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type logsOrderByWithRelationInput = {
    log_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: logsOrderByRelevanceInput
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    description?: StringFilter<"logs"> | string
    user_id?: IntFilter<"logs"> | number
    created_at?: DateTimeNullableFilter<"logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "log_id">

  export type logsOrderByWithAggregationInput = {
    log_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"logs"> | number
    description?: StringWithAggregatesFilter<"logs"> | string
    user_id?: IntWithAggregatesFilter<"logs"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    notification_id?: IntFilter<"notifications"> | number
    type?: Enumnotifications_typeNullableFilter<"notifications"> | $Enums.notifications_type | null
    book_id?: IntNullableFilter<"notifications"> | number | null
    from_user_id?: IntNullableFilter<"notifications"> | number | null
    to_user_id?: IntNullableFilter<"notifications"> | number | null
    tran_id?: IntNullableFilter<"notifications"> | number | null
    status?: Enumnotifications_statusNullableFilter<"notifications"> | $Enums.notifications_status | null
    message?: StringNullableFilter<"notifications"> | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    resolved_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
    users_notifications_from_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_notifications_to_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    book_tran?: XOR<Book_tranNullableScalarRelationFilter, book_tranWhereInput> | null
  }

  export type notificationsOrderByWithRelationInput = {
    notification_id?: SortOrder
    type?: SortOrderInput | SortOrder
    book_id?: SortOrderInput | SortOrder
    from_user_id?: SortOrderInput | SortOrder
    to_user_id?: SortOrderInput | SortOrder
    tran_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    resolved_at?: SortOrderInput | SortOrder
    books?: booksOrderByWithRelationInput
    users_notifications_from_user_idTousers?: usersOrderByWithRelationInput
    users_notifications_to_user_idTousers?: usersOrderByWithRelationInput
    book_tran?: book_tranOrderByWithRelationInput
    _relevance?: notificationsOrderByRelevanceInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    type?: Enumnotifications_typeNullableFilter<"notifications"> | $Enums.notifications_type | null
    book_id?: IntNullableFilter<"notifications"> | number | null
    from_user_id?: IntNullableFilter<"notifications"> | number | null
    to_user_id?: IntNullableFilter<"notifications"> | number | null
    tran_id?: IntNullableFilter<"notifications"> | number | null
    status?: Enumnotifications_statusNullableFilter<"notifications"> | $Enums.notifications_status | null
    message?: StringNullableFilter<"notifications"> | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    resolved_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
    users_notifications_from_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_notifications_to_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    book_tran?: XOR<Book_tranNullableScalarRelationFilter, book_tranWhereInput> | null
  }, "notification_id">

  export type notificationsOrderByWithAggregationInput = {
    notification_id?: SortOrder
    type?: SortOrderInput | SortOrder
    book_id?: SortOrderInput | SortOrder
    from_user_id?: SortOrderInput | SortOrder
    to_user_id?: SortOrderInput | SortOrder
    tran_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    resolved_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    notification_id?: IntWithAggregatesFilter<"notifications"> | number
    type?: Enumnotifications_typeNullableWithAggregatesFilter<"notifications"> | $Enums.notifications_type | null
    book_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    from_user_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    to_user_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    tran_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    status?: Enumnotifications_statusNullableWithAggregatesFilter<"notifications"> | $Enums.notifications_status | null
    message?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    resolved_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type user_wishlistWhereInput = {
    AND?: user_wishlistWhereInput | user_wishlistWhereInput[]
    OR?: user_wishlistWhereInput[]
    NOT?: user_wishlistWhereInput | user_wishlistWhereInput[]
    id?: IntFilter<"user_wishlist"> | number
    user_id?: IntNullableFilter<"user_wishlist"> | number | null
    book_id?: IntNullableFilter<"user_wishlist"> | number | null
    created_at?: DateTimeNullableFilter<"user_wishlist"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
  }

  export type user_wishlistOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    book_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    books?: booksOrderByWithRelationInput
  }

  export type user_wishlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_wishlistWhereInput | user_wishlistWhereInput[]
    OR?: user_wishlistWhereInput[]
    NOT?: user_wishlistWhereInput | user_wishlistWhereInput[]
    user_id?: IntNullableFilter<"user_wishlist"> | number | null
    book_id?: IntNullableFilter<"user_wishlist"> | number | null
    created_at?: DateTimeNullableFilter<"user_wishlist"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    books?: XOR<BooksNullableScalarRelationFilter, booksWhereInput> | null
  }, "id">

  export type user_wishlistOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    book_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: user_wishlistCountOrderByAggregateInput
    _avg?: user_wishlistAvgOrderByAggregateInput
    _max?: user_wishlistMaxOrderByAggregateInput
    _min?: user_wishlistMinOrderByAggregateInput
    _sum?: user_wishlistSumOrderByAggregateInput
  }

  export type user_wishlistScalarWhereWithAggregatesInput = {
    AND?: user_wishlistScalarWhereWithAggregatesInput | user_wishlistScalarWhereWithAggregatesInput[]
    OR?: user_wishlistScalarWhereWithAggregatesInput[]
    NOT?: user_wishlistScalarWhereWithAggregatesInput | user_wishlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_wishlist"> | number
    user_id?: IntNullableWithAggregatesFilter<"user_wishlist"> | number | null
    book_id?: IntNullableWithAggregatesFilter<"user_wishlist"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_wishlist"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password_hash?: StringNullableFilter<"users"> | string | null
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    status?: Enumusers_statusNullableFilter<"users"> | $Enums.users_status | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    gender?: EnumgenderNullableFilter<"users"> | $Enums.gender | null
    phone_number?: StringNullableFilter<"users"> | string | null
    birth_date?: DateTimeNullableFilter<"users"> | Date | string | null
    address?: StringNullableFilter<"users"> | string | null
    profile_image_url?: StringNullableFilter<"users"> | string | null
    book_tran?: Book_tranListRelationFilter
    book_tran_history_book_tran_history_requested_byTousers?: Book_tran_historyListRelationFilter
    book_tran_history_book_tran_history_approved_byTousers?: Book_tran_historyListRelationFilter
    fines?: FinesListRelationFilter
    logs?: LogsListRelationFilter
    notifications_notifications_from_user_idTousers?: NotificationsListRelationFilter
    notifications_notifications_to_user_idTousers?: NotificationsListRelationFilter
    user_wishlist?: User_wishlistListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    book_tran?: book_tranOrderByRelationAggregateInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyOrderByRelationAggregateInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyOrderByRelationAggregateInput
    fines?: finesOrderByRelationAggregateInput
    logs?: logsOrderByRelationAggregateInput
    notifications_notifications_from_user_idTousers?: notificationsOrderByRelationAggregateInput
    notifications_notifications_to_user_idTousers?: notificationsOrderByRelationAggregateInput
    user_wishlist?: user_wishlistOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password_hash?: StringNullableFilter<"users"> | string | null
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    status?: Enumusers_statusNullableFilter<"users"> | $Enums.users_status | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    gender?: EnumgenderNullableFilter<"users"> | $Enums.gender | null
    phone_number?: StringNullableFilter<"users"> | string | null
    birth_date?: DateTimeNullableFilter<"users"> | Date | string | null
    address?: StringNullableFilter<"users"> | string | null
    profile_image_url?: StringNullableFilter<"users"> | string | null
    book_tran?: Book_tranListRelationFilter
    book_tran_history_book_tran_history_requested_byTousers?: Book_tran_historyListRelationFilter
    book_tran_history_book_tran_history_approved_byTousers?: Book_tran_historyListRelationFilter
    fines?: FinesListRelationFilter
    logs?: LogsListRelationFilter
    notifications_notifications_from_user_idTousers?: NotificationsListRelationFilter
    notifications_notifications_to_user_idTousers?: NotificationsListRelationFilter
    user_wishlist?: User_wishlistListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: Enumusers_roleNullableWithAggregatesFilter<"users"> | $Enums.users_role | null
    status?: Enumusers_statusNullableWithAggregatesFilter<"users"> | $Enums.users_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    gender?: EnumgenderNullableWithAggregatesFilter<"users"> | $Enums.gender | null
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    birth_date?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    profile_image_url?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type contact_usWhereInput = {
    AND?: contact_usWhereInput | contact_usWhereInput[]
    OR?: contact_usWhereInput[]
    NOT?: contact_usWhereInput | contact_usWhereInput[]
    id?: IntFilter<"contact_us"> | number
    name?: StringNullableFilter<"contact_us"> | string | null
    email?: StringNullableFilter<"contact_us"> | string | null
    subject?: StringNullableFilter<"contact_us"> | string | null
    message?: StringNullableFilter<"contact_us"> | string | null
    created_at?: DateTimeNullableFilter<"contact_us"> | Date | string | null
  }

  export type contact_usOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: contact_usOrderByRelevanceInput
  }

  export type contact_usWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contact_usWhereInput | contact_usWhereInput[]
    OR?: contact_usWhereInput[]
    NOT?: contact_usWhereInput | contact_usWhereInput[]
    name?: StringNullableFilter<"contact_us"> | string | null
    email?: StringNullableFilter<"contact_us"> | string | null
    subject?: StringNullableFilter<"contact_us"> | string | null
    message?: StringNullableFilter<"contact_us"> | string | null
    created_at?: DateTimeNullableFilter<"contact_us"> | Date | string | null
  }, "id">

  export type contact_usOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: contact_usCountOrderByAggregateInput
    _avg?: contact_usAvgOrderByAggregateInput
    _max?: contact_usMaxOrderByAggregateInput
    _min?: contact_usMinOrderByAggregateInput
    _sum?: contact_usSumOrderByAggregateInput
  }

  export type contact_usScalarWhereWithAggregatesInput = {
    AND?: contact_usScalarWhereWithAggregatesInput | contact_usScalarWhereWithAggregatesInput[]
    OR?: contact_usScalarWhereWithAggregatesInput[]
    NOT?: contact_usScalarWhereWithAggregatesInput | contact_usScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contact_us"> | number
    name?: StringNullableWithAggregatesFilter<"contact_us"> | string | null
    email?: StringNullableWithAggregatesFilter<"contact_us"> | string | null
    subject?: StringNullableWithAggregatesFilter<"contact_us"> | string | null
    message?: StringNullableWithAggregatesFilter<"contact_us"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"contact_us"> | Date | string | null
  }

  export type book_tranCreateInput = {
    status?: $Enums.book_tran_status | null
    record_status?: $Enums.record_status | null
    books?: booksCreateNestedOneWithoutBook_tranInput
    users?: usersCreateNestedOneWithoutBook_tranInput
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBook_tranInput
    notifications?: notificationsCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranUncheckedCreateInput = {
    tran_id?: number
    book_id?: number | null
    status?: $Enums.book_tran_status | null
    user_id?: number | null
    record_status?: $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBook_tranInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranUpdateInput = {
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    books?: booksUpdateOneWithoutBook_tranNestedInput
    users?: usersUpdateOneWithoutBook_tranNestedInput
    book_tran_history?: book_tran_historyUpdateManyWithoutBook_tranNestedInput
    notifications?: notificationsUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranUncheckedUpdateInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBook_tranNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranCreateManyInput = {
    tran_id?: number
    book_id?: number | null
    status?: $Enums.book_tran_status | null
    user_id?: number | null
    record_status?: $Enums.record_status | null
  }

  export type book_tranUpdateManyMutationInput = {
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
  }

  export type book_tranUncheckedUpdateManyInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
  }

  export type book_tran_historyCreateInput = {
    status?: $Enums.book_tran_history_status
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    books?: booksCreateNestedOneWithoutBook_tran_historyInput
    book_tran?: book_tranCreateNestedOneWithoutBook_tran_historyInput
    users_book_tran_history_requested_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    users_book_tran_history_approved_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyUncheckedCreateInput = {
    id?: number
    book_id?: number | null
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    fines?: finesUncheckedCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyUpdateInput = {
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    books?: booksUpdateOneWithoutBook_tran_historyNestedInput
    book_tran?: book_tranUpdateOneWithoutBook_tran_historyNestedInput
    users_book_tran_history_requested_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_requested_byTousersNestedInput
    users_book_tran_history_approved_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    fines?: finesUncheckedUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyCreateManyInput = {
    id?: number
    book_id?: number | null
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
  }

  export type book_tran_historyUpdateManyMutationInput = {
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type book_tran_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type booksCreateInput = {
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranCreateNestedManyWithoutBooksInput
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBooksInput
    notifications?: notificationsCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateInput = {
    book_id?: number
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutBooksInput
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBooksInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUpdateManyWithoutBooksNestedInput
    book_tran_history?: book_tran_historyUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUncheckedUpdateManyWithoutBooksNestedInput
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type booksCreateManyInput = {
    book_id?: number
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
  }

  export type booksUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
  }

  export type booksUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
  }

  export type finesCreateInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
    users?: usersCreateNestedOneWithoutFinesInput
    book_tran_history?: book_tran_historyCreateNestedOneWithoutFinesInput
  }

  export type finesUncheckedCreateInput = {
    fine_id?: number
    user_id?: number | null
    book_tran_history_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
  }

  export type finesUpdateInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutFinesNestedInput
    book_tran_history?: book_tran_historyUpdateOneWithoutFinesNestedInput
  }

  export type finesUncheckedUpdateInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_tran_history_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type finesCreateManyInput = {
    fine_id?: number
    user_id?: number | null
    book_tran_history_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
  }

  export type finesUpdateManyMutationInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type finesUncheckedUpdateManyInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_tran_history_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateInput = {
    description: string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutLogsInput
  }

  export type logsUncheckedCreateInput = {
    log_id?: number
    description: string
    user_id: number
    created_at?: Date | string | null
  }

  export type logsUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutLogsNestedInput
  }

  export type logsUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateManyInput = {
    log_id?: number
    description: string
    user_id: number
    created_at?: Date | string | null
  }

  export type logsUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    type?: $Enums.notifications_type | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
    books?: booksCreateNestedOneWithoutNotificationsInput
    users_notifications_from_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_from_user_idTousersInput
    users_notifications_to_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_to_user_idTousersInput
    book_tran?: book_tranCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    from_user_id?: number | null
    to_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: booksUpdateOneWithoutNotificationsNestedInput
    users_notifications_from_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_from_user_idTousersNestedInput
    users_notifications_to_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_to_user_idTousersNestedInput
    book_tran?: book_tranUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    from_user_id?: number | null
    to_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_wishlistCreateInput = {
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutUser_wishlistInput
    books?: booksCreateNestedOneWithoutUser_wishlistInput
  }

  export type user_wishlistUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    book_id?: number | null
    created_at?: Date | string | null
  }

  export type user_wishlistUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutUser_wishlistNestedInput
    books?: booksUpdateOneWithoutUser_wishlistNestedInput
  }

  export type user_wishlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_wishlistCreateManyInput = {
    id?: number
    user_id?: number | null
    book_id?: number | null
    created_at?: Date | string | null
  }

  export type user_wishlistUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_wishlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contact_usCreateInput = {
    name?: string | null
    email?: string | null
    subject?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type contact_usUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    subject?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type contact_usUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contact_usUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contact_usCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    subject?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type contact_usUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contact_usUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumbook_tran_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_status | Enumbook_tran_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.book_tran_status[] | null
    notIn?: $Enums.book_tran_status[] | null
    not?: NestedEnumbook_tran_statusNullableFilter<$PrismaModel> | $Enums.book_tran_status | null
  }

  export type Enumrecord_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.record_status | Enumrecord_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.record_status[] | null
    notIn?: $Enums.record_status[] | null
    not?: NestedEnumrecord_statusNullableFilter<$PrismaModel> | $Enums.record_status | null
  }

  export type BooksNullableScalarRelationFilter = {
    is?: booksWhereInput | null
    isNot?: booksWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type Book_tran_historyListRelationFilter = {
    every?: book_tran_historyWhereInput
    some?: book_tran_historyWhereInput
    none?: book_tran_historyWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type book_tran_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type book_tranCountOrderByAggregateInput = {
    tran_id?: SortOrder
    book_id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    record_status?: SortOrder
  }

  export type book_tranAvgOrderByAggregateInput = {
    tran_id?: SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
  }

  export type book_tranMaxOrderByAggregateInput = {
    tran_id?: SortOrder
    book_id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    record_status?: SortOrder
  }

  export type book_tranMinOrderByAggregateInput = {
    tran_id?: SortOrder
    book_id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    record_status?: SortOrder
  }

  export type book_tranSumOrderByAggregateInput = {
    tran_id?: SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumbook_tran_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_status | Enumbook_tran_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.book_tran_status[] | null
    notIn?: $Enums.book_tran_status[] | null
    not?: NestedEnumbook_tran_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.book_tran_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumbook_tran_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumbook_tran_statusNullableFilter<$PrismaModel>
  }

  export type Enumrecord_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.record_status | Enumrecord_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.record_status[] | null
    notIn?: $Enums.record_status[] | null
    not?: NestedEnumrecord_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.record_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrecord_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumrecord_statusNullableFilter<$PrismaModel>
  }

  export type Enumbook_tran_history_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_history_status | Enumbook_tran_history_statusFieldRefInput<$PrismaModel>
    in?: $Enums.book_tran_history_status[]
    notIn?: $Enums.book_tran_history_status[]
    not?: NestedEnumbook_tran_history_statusFilter<$PrismaModel> | $Enums.book_tran_history_status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Book_tranNullableScalarRelationFilter = {
    is?: book_tranWhereInput | null
    isNot?: book_tranWhereInput | null
  }

  export type FinesListRelationFilter = {
    every?: finesWhereInput
    some?: finesWhereInput
    none?: finesWhereInput
  }

  export type finesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type book_tran_historyOrderByRelevanceInput = {
    fields: book_tran_historyOrderByRelevanceFieldEnum | book_tran_historyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type book_tran_historyCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    tran_id?: SortOrder
    status?: SortOrder
    requested_by?: SortOrder
    approved_by?: SortOrder
    requested_at?: SortOrder
    approved_at?: SortOrder
    date_issued?: SortOrder
    date_due?: SortOrder
    date_returned?: SortOrder
    remarks?: SortOrder
  }

  export type book_tran_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    tran_id?: SortOrder
    requested_by?: SortOrder
    approved_by?: SortOrder
  }

  export type book_tran_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    tran_id?: SortOrder
    status?: SortOrder
    requested_by?: SortOrder
    approved_by?: SortOrder
    requested_at?: SortOrder
    approved_at?: SortOrder
    date_issued?: SortOrder
    date_due?: SortOrder
    date_returned?: SortOrder
    remarks?: SortOrder
  }

  export type book_tran_historyMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    tran_id?: SortOrder
    status?: SortOrder
    requested_by?: SortOrder
    approved_by?: SortOrder
    requested_at?: SortOrder
    approved_at?: SortOrder
    date_issued?: SortOrder
    date_due?: SortOrder
    date_returned?: SortOrder
    remarks?: SortOrder
  }

  export type book_tran_historySumOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    tran_id?: SortOrder
    requested_by?: SortOrder
    approved_by?: SortOrder
  }

  export type Enumbook_tran_history_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_history_status | Enumbook_tran_history_statusFieldRefInput<$PrismaModel>
    in?: $Enums.book_tran_history_status[]
    notIn?: $Enums.book_tran_history_status[]
    not?: NestedEnumbook_tran_history_statusWithAggregatesFilter<$PrismaModel> | $Enums.book_tran_history_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbook_tran_history_statusFilter<$PrismaModel>
    _max?: NestedEnumbook_tran_history_statusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Book_tranListRelationFilter = {
    every?: book_tranWhereInput
    some?: book_tranWhereInput
    none?: book_tranWhereInput
  }

  export type User_wishlistListRelationFilter = {
    every?: user_wishlistWhereInput
    some?: user_wishlistWhereInput
    none?: user_wishlistWhereInput
  }

  export type book_tranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_wishlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type booksOrderByRelevanceInput = {
    fields: booksOrderByRelevanceFieldEnum | booksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type booksCountOrderByAggregateInput = {
    book_id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    year?: SortOrder
    genre?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    librarian_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    record_status?: SortOrder
  }

  export type booksAvgOrderByAggregateInput = {
    book_id?: SortOrder
    year?: SortOrder
    librarian_id?: SortOrder
  }

  export type booksMaxOrderByAggregateInput = {
    book_id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    year?: SortOrder
    genre?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    librarian_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    record_status?: SortOrder
  }

  export type booksMinOrderByAggregateInput = {
    book_id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    year?: SortOrder
    genre?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    librarian_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    record_status?: SortOrder
  }

  export type booksSumOrderByAggregateInput = {
    book_id?: SortOrder
    year?: SortOrder
    librarian_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Enumfines_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.fines_status | Enumfines_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.fines_status[] | null
    notIn?: $Enums.fines_status[] | null
    not?: NestedEnumfines_statusNullableFilter<$PrismaModel> | $Enums.fines_status | null
  }

  export type Book_tran_historyNullableScalarRelationFilter = {
    is?: book_tran_historyWhereInput | null
    isNot?: book_tran_historyWhereInput | null
  }

  export type finesOrderByRelevanceInput = {
    fields: finesOrderByRelevanceFieldEnum | finesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type finesCountOrderByAggregateInput = {
    fine_id?: SortOrder
    user_id?: SortOrder
    book_tran_history_id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    paid_at?: SortOrder
  }

  export type finesAvgOrderByAggregateInput = {
    fine_id?: SortOrder
    user_id?: SortOrder
    book_tran_history_id?: SortOrder
    amount?: SortOrder
  }

  export type finesMaxOrderByAggregateInput = {
    fine_id?: SortOrder
    user_id?: SortOrder
    book_tran_history_id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    paid_at?: SortOrder
  }

  export type finesMinOrderByAggregateInput = {
    fine_id?: SortOrder
    user_id?: SortOrder
    book_tran_history_id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    paid_at?: SortOrder
  }

  export type finesSumOrderByAggregateInput = {
    fine_id?: SortOrder
    user_id?: SortOrder
    book_tran_history_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumfines_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fines_status | Enumfines_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.fines_status[] | null
    notIn?: $Enums.fines_status[] | null
    not?: NestedEnumfines_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.fines_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfines_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumfines_statusNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type logsOrderByRelevanceInput = {
    fields: logsOrderByRelevanceFieldEnum | logsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type logsCountOrderByAggregateInput = {
    log_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    log_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    log_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
  }

  export type Enumnotifications_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_type[] | null
    notIn?: $Enums.notifications_type[] | null
    not?: NestedEnumnotifications_typeNullableFilter<$PrismaModel> | $Enums.notifications_type | null
  }

  export type Enumnotifications_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_status | Enumnotifications_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_status[] | null
    notIn?: $Enums.notifications_status[] | null
    not?: NestedEnumnotifications_statusNullableFilter<$PrismaModel> | $Enums.notifications_status | null
  }

  export type notificationsOrderByRelevanceInput = {
    fields: notificationsOrderByRelevanceFieldEnum | notificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationsCountOrderByAggregateInput = {
    notification_id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    tran_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    notification_id?: SortOrder
    book_id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    tran_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    tran_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    notification_id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    tran_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    notification_id?: SortOrder
    book_id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    tran_id?: SortOrder
  }

  export type Enumnotifications_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_type[] | null
    notIn?: $Enums.notifications_type[] | null
    not?: NestedEnumnotifications_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.notifications_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumnotifications_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumnotifications_typeNullableFilter<$PrismaModel>
  }

  export type Enumnotifications_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_status | Enumnotifications_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_status[] | null
    notIn?: $Enums.notifications_status[] | null
    not?: NestedEnumnotifications_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.notifications_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumnotifications_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumnotifications_statusNullableFilter<$PrismaModel>
  }

  export type user_wishlistCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_wishlistAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
  }

  export type user_wishlistMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_wishlistMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_wishlistSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
  }

  export type Enumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type Enumusers_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableFilter<$PrismaModel> | $Enums.users_status | null
  }

  export type EnumgenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableFilter<$PrismaModel> | $Enums.gender | null
  }

  export type LogsListRelationFilter = {
    every?: logsWhereInput
    some?: logsWhereInput
    none?: logsWhereInput
  }

  export type logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    address?: SortOrder
    profile_image_url?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    address?: SortOrder
    profile_image_url?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    address?: SortOrder
    profile_image_url?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type Enumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type Enumusers_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_statusNullableFilter<$PrismaModel>
  }

  export type EnumgenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderNullableFilter<$PrismaModel>
  }

  export type contact_usOrderByRelevanceInput = {
    fields: contact_usOrderByRelevanceFieldEnum | contact_usOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contact_usCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type contact_usAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contact_usMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type contact_usMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type contact_usSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type booksCreateNestedOneWithoutBook_tranInput = {
    create?: XOR<booksCreateWithoutBook_tranInput, booksUncheckedCreateWithoutBook_tranInput>
    connectOrCreate?: booksCreateOrConnectWithoutBook_tranInput
    connect?: booksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBook_tranInput = {
    create?: XOR<usersCreateWithoutBook_tranInput, usersUncheckedCreateWithoutBook_tranInput>
    connectOrCreate?: usersCreateOrConnectWithoutBook_tranInput
    connect?: usersWhereUniqueInput
  }

  export type book_tran_historyCreateNestedManyWithoutBook_tranInput = {
    create?: XOR<book_tran_historyCreateWithoutBook_tranInput, book_tran_historyUncheckedCreateWithoutBook_tranInput> | book_tran_historyCreateWithoutBook_tranInput[] | book_tran_historyUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBook_tranInput | book_tran_historyCreateOrConnectWithoutBook_tranInput[]
    createMany?: book_tran_historyCreateManyBook_tranInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutBook_tranInput = {
    create?: XOR<notificationsCreateWithoutBook_tranInput, notificationsUncheckedCreateWithoutBook_tranInput> | notificationsCreateWithoutBook_tranInput[] | notificationsUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBook_tranInput | notificationsCreateOrConnectWithoutBook_tranInput[]
    createMany?: notificationsCreateManyBook_tranInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type book_tran_historyUncheckedCreateNestedManyWithoutBook_tranInput = {
    create?: XOR<book_tran_historyCreateWithoutBook_tranInput, book_tran_historyUncheckedCreateWithoutBook_tranInput> | book_tran_historyCreateWithoutBook_tranInput[] | book_tran_historyUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBook_tranInput | book_tran_historyCreateOrConnectWithoutBook_tranInput[]
    createMany?: book_tran_historyCreateManyBook_tranInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutBook_tranInput = {
    create?: XOR<notificationsCreateWithoutBook_tranInput, notificationsUncheckedCreateWithoutBook_tranInput> | notificationsCreateWithoutBook_tranInput[] | notificationsUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBook_tranInput | notificationsCreateOrConnectWithoutBook_tranInput[]
    createMany?: notificationsCreateManyBook_tranInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type NullableEnumbook_tran_statusFieldUpdateOperationsInput = {
    set?: $Enums.book_tran_status | null
  }

  export type NullableEnumrecord_statusFieldUpdateOperationsInput = {
    set?: $Enums.record_status | null
  }

  export type booksUpdateOneWithoutBook_tranNestedInput = {
    create?: XOR<booksCreateWithoutBook_tranInput, booksUncheckedCreateWithoutBook_tranInput>
    connectOrCreate?: booksCreateOrConnectWithoutBook_tranInput
    upsert?: booksUpsertWithoutBook_tranInput
    disconnect?: booksWhereInput | boolean
    delete?: booksWhereInput | boolean
    connect?: booksWhereUniqueInput
    update?: XOR<XOR<booksUpdateToOneWithWhereWithoutBook_tranInput, booksUpdateWithoutBook_tranInput>, booksUncheckedUpdateWithoutBook_tranInput>
  }

  export type usersUpdateOneWithoutBook_tranNestedInput = {
    create?: XOR<usersCreateWithoutBook_tranInput, usersUncheckedCreateWithoutBook_tranInput>
    connectOrCreate?: usersCreateOrConnectWithoutBook_tranInput
    upsert?: usersUpsertWithoutBook_tranInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBook_tranInput, usersUpdateWithoutBook_tranInput>, usersUncheckedUpdateWithoutBook_tranInput>
  }

  export type book_tran_historyUpdateManyWithoutBook_tranNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutBook_tranInput, book_tran_historyUncheckedCreateWithoutBook_tranInput> | book_tran_historyCreateWithoutBook_tranInput[] | book_tran_historyUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBook_tranInput | book_tran_historyCreateOrConnectWithoutBook_tranInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutBook_tranInput | book_tran_historyUpsertWithWhereUniqueWithoutBook_tranInput[]
    createMany?: book_tran_historyCreateManyBook_tranInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutBook_tranInput | book_tran_historyUpdateWithWhereUniqueWithoutBook_tranInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutBook_tranInput | book_tran_historyUpdateManyWithWhereWithoutBook_tranInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutBook_tranNestedInput = {
    create?: XOR<notificationsCreateWithoutBook_tranInput, notificationsUncheckedCreateWithoutBook_tranInput> | notificationsCreateWithoutBook_tranInput[] | notificationsUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBook_tranInput | notificationsCreateOrConnectWithoutBook_tranInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutBook_tranInput | notificationsUpsertWithWhereUniqueWithoutBook_tranInput[]
    createMany?: notificationsCreateManyBook_tranInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutBook_tranInput | notificationsUpdateWithWhereUniqueWithoutBook_tranInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutBook_tranInput | notificationsUpdateManyWithWhereWithoutBook_tranInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type book_tran_historyUncheckedUpdateManyWithoutBook_tranNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutBook_tranInput, book_tran_historyUncheckedCreateWithoutBook_tranInput> | book_tran_historyCreateWithoutBook_tranInput[] | book_tran_historyUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBook_tranInput | book_tran_historyCreateOrConnectWithoutBook_tranInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutBook_tranInput | book_tran_historyUpsertWithWhereUniqueWithoutBook_tranInput[]
    createMany?: book_tran_historyCreateManyBook_tranInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutBook_tranInput | book_tran_historyUpdateWithWhereUniqueWithoutBook_tranInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutBook_tranInput | book_tran_historyUpdateManyWithWhereWithoutBook_tranInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutBook_tranNestedInput = {
    create?: XOR<notificationsCreateWithoutBook_tranInput, notificationsUncheckedCreateWithoutBook_tranInput> | notificationsCreateWithoutBook_tranInput[] | notificationsUncheckedCreateWithoutBook_tranInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBook_tranInput | notificationsCreateOrConnectWithoutBook_tranInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutBook_tranInput | notificationsUpsertWithWhereUniqueWithoutBook_tranInput[]
    createMany?: notificationsCreateManyBook_tranInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutBook_tranInput | notificationsUpdateWithWhereUniqueWithoutBook_tranInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutBook_tranInput | notificationsUpdateManyWithWhereWithoutBook_tranInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type booksCreateNestedOneWithoutBook_tran_historyInput = {
    create?: XOR<booksCreateWithoutBook_tran_historyInput, booksUncheckedCreateWithoutBook_tran_historyInput>
    connectOrCreate?: booksCreateOrConnectWithoutBook_tran_historyInput
    connect?: booksWhereUniqueInput
  }

  export type book_tranCreateNestedOneWithoutBook_tran_historyInput = {
    create?: XOR<book_tranCreateWithoutBook_tran_historyInput, book_tranUncheckedCreateWithoutBook_tran_historyInput>
    connectOrCreate?: book_tranCreateOrConnectWithoutBook_tran_historyInput
    connect?: book_tranWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    create?: XOR<usersCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    create?: XOR<usersCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBook_tran_history_book_tran_history_approved_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type finesCreateNestedManyWithoutBook_tran_historyInput = {
    create?: XOR<finesCreateWithoutBook_tran_historyInput, finesUncheckedCreateWithoutBook_tran_historyInput> | finesCreateWithoutBook_tran_historyInput[] | finesUncheckedCreateWithoutBook_tran_historyInput[]
    connectOrCreate?: finesCreateOrConnectWithoutBook_tran_historyInput | finesCreateOrConnectWithoutBook_tran_historyInput[]
    createMany?: finesCreateManyBook_tran_historyInputEnvelope
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
  }

  export type finesUncheckedCreateNestedManyWithoutBook_tran_historyInput = {
    create?: XOR<finesCreateWithoutBook_tran_historyInput, finesUncheckedCreateWithoutBook_tran_historyInput> | finesCreateWithoutBook_tran_historyInput[] | finesUncheckedCreateWithoutBook_tran_historyInput[]
    connectOrCreate?: finesCreateOrConnectWithoutBook_tran_historyInput | finesCreateOrConnectWithoutBook_tran_historyInput[]
    createMany?: finesCreateManyBook_tran_historyInputEnvelope
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
  }

  export type Enumbook_tran_history_statusFieldUpdateOperationsInput = {
    set?: $Enums.book_tran_history_status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type booksUpdateOneWithoutBook_tran_historyNestedInput = {
    create?: XOR<booksCreateWithoutBook_tran_historyInput, booksUncheckedCreateWithoutBook_tran_historyInput>
    connectOrCreate?: booksCreateOrConnectWithoutBook_tran_historyInput
    upsert?: booksUpsertWithoutBook_tran_historyInput
    disconnect?: booksWhereInput | boolean
    delete?: booksWhereInput | boolean
    connect?: booksWhereUniqueInput
    update?: XOR<XOR<booksUpdateToOneWithWhereWithoutBook_tran_historyInput, booksUpdateWithoutBook_tran_historyInput>, booksUncheckedUpdateWithoutBook_tran_historyInput>
  }

  export type book_tranUpdateOneWithoutBook_tran_historyNestedInput = {
    create?: XOR<book_tranCreateWithoutBook_tran_historyInput, book_tranUncheckedCreateWithoutBook_tran_historyInput>
    connectOrCreate?: book_tranCreateOrConnectWithoutBook_tran_historyInput
    upsert?: book_tranUpsertWithoutBook_tran_historyInput
    disconnect?: book_tranWhereInput | boolean
    delete?: book_tranWhereInput | boolean
    connect?: book_tranWhereUniqueInput
    update?: XOR<XOR<book_tranUpdateToOneWithWhereWithoutBook_tran_historyInput, book_tranUpdateWithoutBook_tran_historyInput>, book_tranUncheckedUpdateWithoutBook_tran_historyInput>
  }

  export type usersUpdateOneWithoutBook_tran_history_book_tran_history_requested_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    upsert?: usersUpsertWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBook_tran_history_book_tran_history_requested_byTousersInput, usersUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>, usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>
  }

  export type usersUpdateOneWithoutBook_tran_history_book_tran_history_approved_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBook_tran_history_book_tran_history_approved_byTousersInput
    upsert?: usersUpsertWithoutBook_tran_history_book_tran_history_approved_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBook_tran_history_book_tran_history_approved_byTousersInput, usersUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>, usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>
  }

  export type finesUpdateManyWithoutBook_tran_historyNestedInput = {
    create?: XOR<finesCreateWithoutBook_tran_historyInput, finesUncheckedCreateWithoutBook_tran_historyInput> | finesCreateWithoutBook_tran_historyInput[] | finesUncheckedCreateWithoutBook_tran_historyInput[]
    connectOrCreate?: finesCreateOrConnectWithoutBook_tran_historyInput | finesCreateOrConnectWithoutBook_tran_historyInput[]
    upsert?: finesUpsertWithWhereUniqueWithoutBook_tran_historyInput | finesUpsertWithWhereUniqueWithoutBook_tran_historyInput[]
    createMany?: finesCreateManyBook_tran_historyInputEnvelope
    set?: finesWhereUniqueInput | finesWhereUniqueInput[]
    disconnect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    delete?: finesWhereUniqueInput | finesWhereUniqueInput[]
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    update?: finesUpdateWithWhereUniqueWithoutBook_tran_historyInput | finesUpdateWithWhereUniqueWithoutBook_tran_historyInput[]
    updateMany?: finesUpdateManyWithWhereWithoutBook_tran_historyInput | finesUpdateManyWithWhereWithoutBook_tran_historyInput[]
    deleteMany?: finesScalarWhereInput | finesScalarWhereInput[]
  }

  export type finesUncheckedUpdateManyWithoutBook_tran_historyNestedInput = {
    create?: XOR<finesCreateWithoutBook_tran_historyInput, finesUncheckedCreateWithoutBook_tran_historyInput> | finesCreateWithoutBook_tran_historyInput[] | finesUncheckedCreateWithoutBook_tran_historyInput[]
    connectOrCreate?: finesCreateOrConnectWithoutBook_tran_historyInput | finesCreateOrConnectWithoutBook_tran_historyInput[]
    upsert?: finesUpsertWithWhereUniqueWithoutBook_tran_historyInput | finesUpsertWithWhereUniqueWithoutBook_tran_historyInput[]
    createMany?: finesCreateManyBook_tran_historyInputEnvelope
    set?: finesWhereUniqueInput | finesWhereUniqueInput[]
    disconnect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    delete?: finesWhereUniqueInput | finesWhereUniqueInput[]
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    update?: finesUpdateWithWhereUniqueWithoutBook_tran_historyInput | finesUpdateWithWhereUniqueWithoutBook_tran_historyInput[]
    updateMany?: finesUpdateManyWithWhereWithoutBook_tran_historyInput | finesUpdateManyWithWhereWithoutBook_tran_historyInput[]
    deleteMany?: finesScalarWhereInput | finesScalarWhereInput[]
  }

  export type book_tranCreateNestedManyWithoutBooksInput = {
    create?: XOR<book_tranCreateWithoutBooksInput, book_tranUncheckedCreateWithoutBooksInput> | book_tranCreateWithoutBooksInput[] | book_tranUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutBooksInput | book_tranCreateOrConnectWithoutBooksInput[]
    createMany?: book_tranCreateManyBooksInputEnvelope
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
  }

  export type book_tran_historyCreateNestedManyWithoutBooksInput = {
    create?: XOR<book_tran_historyCreateWithoutBooksInput, book_tran_historyUncheckedCreateWithoutBooksInput> | book_tran_historyCreateWithoutBooksInput[] | book_tran_historyUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBooksInput | book_tran_historyCreateOrConnectWithoutBooksInput[]
    createMany?: book_tran_historyCreateManyBooksInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutBooksInput = {
    create?: XOR<notificationsCreateWithoutBooksInput, notificationsUncheckedCreateWithoutBooksInput> | notificationsCreateWithoutBooksInput[] | notificationsUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBooksInput | notificationsCreateOrConnectWithoutBooksInput[]
    createMany?: notificationsCreateManyBooksInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type user_wishlistCreateNestedManyWithoutBooksInput = {
    create?: XOR<user_wishlistCreateWithoutBooksInput, user_wishlistUncheckedCreateWithoutBooksInput> | user_wishlistCreateWithoutBooksInput[] | user_wishlistUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutBooksInput | user_wishlistCreateOrConnectWithoutBooksInput[]
    createMany?: user_wishlistCreateManyBooksInputEnvelope
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
  }

  export type book_tranUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<book_tranCreateWithoutBooksInput, book_tranUncheckedCreateWithoutBooksInput> | book_tranCreateWithoutBooksInput[] | book_tranUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutBooksInput | book_tranCreateOrConnectWithoutBooksInput[]
    createMany?: book_tranCreateManyBooksInputEnvelope
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
  }

  export type book_tran_historyUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<book_tran_historyCreateWithoutBooksInput, book_tran_historyUncheckedCreateWithoutBooksInput> | book_tran_historyCreateWithoutBooksInput[] | book_tran_historyUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBooksInput | book_tran_historyCreateOrConnectWithoutBooksInput[]
    createMany?: book_tran_historyCreateManyBooksInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<notificationsCreateWithoutBooksInput, notificationsUncheckedCreateWithoutBooksInput> | notificationsCreateWithoutBooksInput[] | notificationsUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBooksInput | notificationsCreateOrConnectWithoutBooksInput[]
    createMany?: notificationsCreateManyBooksInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type user_wishlistUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<user_wishlistCreateWithoutBooksInput, user_wishlistUncheckedCreateWithoutBooksInput> | user_wishlistCreateWithoutBooksInput[] | user_wishlistUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutBooksInput | user_wishlistCreateOrConnectWithoutBooksInput[]
    createMany?: user_wishlistCreateManyBooksInputEnvelope
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type book_tranUpdateManyWithoutBooksNestedInput = {
    create?: XOR<book_tranCreateWithoutBooksInput, book_tranUncheckedCreateWithoutBooksInput> | book_tranCreateWithoutBooksInput[] | book_tranUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutBooksInput | book_tranCreateOrConnectWithoutBooksInput[]
    upsert?: book_tranUpsertWithWhereUniqueWithoutBooksInput | book_tranUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: book_tranCreateManyBooksInputEnvelope
    set?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    disconnect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    delete?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    update?: book_tranUpdateWithWhereUniqueWithoutBooksInput | book_tranUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: book_tranUpdateManyWithWhereWithoutBooksInput | book_tranUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: book_tranScalarWhereInput | book_tranScalarWhereInput[]
  }

  export type book_tran_historyUpdateManyWithoutBooksNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutBooksInput, book_tran_historyUncheckedCreateWithoutBooksInput> | book_tran_historyCreateWithoutBooksInput[] | book_tran_historyUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBooksInput | book_tran_historyCreateOrConnectWithoutBooksInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutBooksInput | book_tran_historyUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: book_tran_historyCreateManyBooksInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutBooksInput | book_tran_historyUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutBooksInput | book_tran_historyUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutBooksNestedInput = {
    create?: XOR<notificationsCreateWithoutBooksInput, notificationsUncheckedCreateWithoutBooksInput> | notificationsCreateWithoutBooksInput[] | notificationsUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBooksInput | notificationsCreateOrConnectWithoutBooksInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutBooksInput | notificationsUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: notificationsCreateManyBooksInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutBooksInput | notificationsUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutBooksInput | notificationsUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type user_wishlistUpdateManyWithoutBooksNestedInput = {
    create?: XOR<user_wishlistCreateWithoutBooksInput, user_wishlistUncheckedCreateWithoutBooksInput> | user_wishlistCreateWithoutBooksInput[] | user_wishlistUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutBooksInput | user_wishlistCreateOrConnectWithoutBooksInput[]
    upsert?: user_wishlistUpsertWithWhereUniqueWithoutBooksInput | user_wishlistUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: user_wishlistCreateManyBooksInputEnvelope
    set?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    disconnect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    delete?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    update?: user_wishlistUpdateWithWhereUniqueWithoutBooksInput | user_wishlistUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: user_wishlistUpdateManyWithWhereWithoutBooksInput | user_wishlistUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: user_wishlistScalarWhereInput | user_wishlistScalarWhereInput[]
  }

  export type book_tranUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: XOR<book_tranCreateWithoutBooksInput, book_tranUncheckedCreateWithoutBooksInput> | book_tranCreateWithoutBooksInput[] | book_tranUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutBooksInput | book_tranCreateOrConnectWithoutBooksInput[]
    upsert?: book_tranUpsertWithWhereUniqueWithoutBooksInput | book_tranUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: book_tranCreateManyBooksInputEnvelope
    set?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    disconnect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    delete?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    update?: book_tranUpdateWithWhereUniqueWithoutBooksInput | book_tranUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: book_tranUpdateManyWithWhereWithoutBooksInput | book_tranUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: book_tranScalarWhereInput | book_tranScalarWhereInput[]
  }

  export type book_tran_historyUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutBooksInput, book_tran_historyUncheckedCreateWithoutBooksInput> | book_tran_historyCreateWithoutBooksInput[] | book_tran_historyUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutBooksInput | book_tran_historyCreateOrConnectWithoutBooksInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutBooksInput | book_tran_historyUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: book_tran_historyCreateManyBooksInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutBooksInput | book_tran_historyUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutBooksInput | book_tran_historyUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: XOR<notificationsCreateWithoutBooksInput, notificationsUncheckedCreateWithoutBooksInput> | notificationsCreateWithoutBooksInput[] | notificationsUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutBooksInput | notificationsCreateOrConnectWithoutBooksInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutBooksInput | notificationsUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: notificationsCreateManyBooksInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutBooksInput | notificationsUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutBooksInput | notificationsUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type user_wishlistUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: XOR<user_wishlistCreateWithoutBooksInput, user_wishlistUncheckedCreateWithoutBooksInput> | user_wishlistCreateWithoutBooksInput[] | user_wishlistUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutBooksInput | user_wishlistCreateOrConnectWithoutBooksInput[]
    upsert?: user_wishlistUpsertWithWhereUniqueWithoutBooksInput | user_wishlistUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: user_wishlistCreateManyBooksInputEnvelope
    set?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    disconnect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    delete?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    update?: user_wishlistUpdateWithWhereUniqueWithoutBooksInput | user_wishlistUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: user_wishlistUpdateManyWithWhereWithoutBooksInput | user_wishlistUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: user_wishlistScalarWhereInput | user_wishlistScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutFinesInput = {
    create?: XOR<usersCreateWithoutFinesInput, usersUncheckedCreateWithoutFinesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFinesInput
    connect?: usersWhereUniqueInput
  }

  export type book_tran_historyCreateNestedOneWithoutFinesInput = {
    create?: XOR<book_tran_historyCreateWithoutFinesInput, book_tran_historyUncheckedCreateWithoutFinesInput>
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutFinesInput
    connect?: book_tran_historyWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumfines_statusFieldUpdateOperationsInput = {
    set?: $Enums.fines_status | null
  }

  export type usersUpdateOneWithoutFinesNestedInput = {
    create?: XOR<usersCreateWithoutFinesInput, usersUncheckedCreateWithoutFinesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFinesInput
    upsert?: usersUpsertWithoutFinesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFinesInput, usersUpdateWithoutFinesInput>, usersUncheckedUpdateWithoutFinesInput>
  }

  export type book_tran_historyUpdateOneWithoutFinesNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutFinesInput, book_tran_historyUncheckedCreateWithoutFinesInput>
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutFinesInput
    upsert?: book_tran_historyUpsertWithoutFinesInput
    disconnect?: book_tran_historyWhereInput | boolean
    delete?: book_tran_historyWhereInput | boolean
    connect?: book_tran_historyWhereUniqueInput
    update?: XOR<XOR<book_tran_historyUpdateToOneWithWhereWithoutFinesInput, book_tran_historyUpdateWithoutFinesInput>, book_tran_historyUncheckedUpdateWithoutFinesInput>
  }

  export type usersCreateNestedOneWithoutLogsInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    upsert?: usersUpsertWithoutLogsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLogsInput, usersUpdateWithoutLogsInput>, usersUncheckedUpdateWithoutLogsInput>
  }

  export type booksCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<booksCreateWithoutNotificationsInput, booksUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: booksCreateOrConnectWithoutNotificationsInput
    connect?: booksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutNotifications_notifications_from_user_idTousersInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_from_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_from_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutNotifications_notifications_to_user_idTousersInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_to_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_to_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type book_tranCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<book_tranCreateWithoutNotificationsInput, book_tranUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: book_tranCreateOrConnectWithoutNotificationsInput
    connect?: book_tranWhereUniqueInput
  }

  export type NullableEnumnotifications_typeFieldUpdateOperationsInput = {
    set?: $Enums.notifications_type | null
  }

  export type NullableEnumnotifications_statusFieldUpdateOperationsInput = {
    set?: $Enums.notifications_status | null
  }

  export type booksUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<booksCreateWithoutNotificationsInput, booksUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: booksCreateOrConnectWithoutNotificationsInput
    upsert?: booksUpsertWithoutNotificationsInput
    disconnect?: booksWhereInput | boolean
    delete?: booksWhereInput | boolean
    connect?: booksWhereUniqueInput
    update?: XOR<XOR<booksUpdateToOneWithWhereWithoutNotificationsInput, booksUpdateWithoutNotificationsInput>, booksUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersUpdateOneWithoutNotifications_notifications_from_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_from_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_from_user_idTousersInput
    upsert?: usersUpsertWithoutNotifications_notifications_from_user_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotifications_notifications_from_user_idTousersInput, usersUpdateWithoutNotifications_notifications_from_user_idTousersInput>, usersUncheckedUpdateWithoutNotifications_notifications_from_user_idTousersInput>
  }

  export type usersUpdateOneWithoutNotifications_notifications_to_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_to_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_to_user_idTousersInput
    upsert?: usersUpsertWithoutNotifications_notifications_to_user_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotifications_notifications_to_user_idTousersInput, usersUpdateWithoutNotifications_notifications_to_user_idTousersInput>, usersUncheckedUpdateWithoutNotifications_notifications_to_user_idTousersInput>
  }

  export type book_tranUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<book_tranCreateWithoutNotificationsInput, book_tranUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: book_tranCreateOrConnectWithoutNotificationsInput
    upsert?: book_tranUpsertWithoutNotificationsInput
    disconnect?: book_tranWhereInput | boolean
    delete?: book_tranWhereInput | boolean
    connect?: book_tranWhereUniqueInput
    update?: XOR<XOR<book_tranUpdateToOneWithWhereWithoutNotificationsInput, book_tranUpdateWithoutNotificationsInput>, book_tranUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersCreateNestedOneWithoutUser_wishlistInput = {
    create?: XOR<usersCreateWithoutUser_wishlistInput, usersUncheckedCreateWithoutUser_wishlistInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_wishlistInput
    connect?: usersWhereUniqueInput
  }

  export type booksCreateNestedOneWithoutUser_wishlistInput = {
    create?: XOR<booksCreateWithoutUser_wishlistInput, booksUncheckedCreateWithoutUser_wishlistInput>
    connectOrCreate?: booksCreateOrConnectWithoutUser_wishlistInput
    connect?: booksWhereUniqueInput
  }

  export type usersUpdateOneWithoutUser_wishlistNestedInput = {
    create?: XOR<usersCreateWithoutUser_wishlistInput, usersUncheckedCreateWithoutUser_wishlistInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_wishlistInput
    upsert?: usersUpsertWithoutUser_wishlistInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_wishlistInput, usersUpdateWithoutUser_wishlistInput>, usersUncheckedUpdateWithoutUser_wishlistInput>
  }

  export type booksUpdateOneWithoutUser_wishlistNestedInput = {
    create?: XOR<booksCreateWithoutUser_wishlistInput, booksUncheckedCreateWithoutUser_wishlistInput>
    connectOrCreate?: booksCreateOrConnectWithoutUser_wishlistInput
    upsert?: booksUpsertWithoutUser_wishlistInput
    disconnect?: booksWhereInput | boolean
    delete?: booksWhereInput | boolean
    connect?: booksWhereUniqueInput
    update?: XOR<XOR<booksUpdateToOneWithWhereWithoutUser_wishlistInput, booksUpdateWithoutUser_wishlistInput>, booksUncheckedUpdateWithoutUser_wishlistInput>
  }

  export type book_tranCreateNestedManyWithoutUsersInput = {
    create?: XOR<book_tranCreateWithoutUsersInput, book_tranUncheckedCreateWithoutUsersInput> | book_tranCreateWithoutUsersInput[] | book_tranUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutUsersInput | book_tranCreateOrConnectWithoutUsersInput[]
    createMany?: book_tranCreateManyUsersInputEnvelope
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
  }

  export type book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type finesCreateNestedManyWithoutUsersInput = {
    create?: XOR<finesCreateWithoutUsersInput, finesUncheckedCreateWithoutUsersInput> | finesCreateWithoutUsersInput[] | finesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: finesCreateOrConnectWithoutUsersInput | finesCreateOrConnectWithoutUsersInput[]
    createMany?: finesCreateManyUsersInputEnvelope
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
  }

  export type logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_from_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_to_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type user_wishlistCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_wishlistCreateWithoutUsersInput, user_wishlistUncheckedCreateWithoutUsersInput> | user_wishlistCreateWithoutUsersInput[] | user_wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutUsersInput | user_wishlistCreateOrConnectWithoutUsersInput[]
    createMany?: user_wishlistCreateManyUsersInputEnvelope
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
  }

  export type book_tranUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<book_tranCreateWithoutUsersInput, book_tranUncheckedCreateWithoutUsersInput> | book_tranCreateWithoutUsersInput[] | book_tranUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutUsersInput | book_tranCreateOrConnectWithoutUsersInput[]
    createMany?: book_tranCreateManyUsersInputEnvelope
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
  }

  export type book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInputEnvelope
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
  }

  export type finesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<finesCreateWithoutUsersInput, finesUncheckedCreateWithoutUsersInput> | finesCreateWithoutUsersInput[] | finesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: finesCreateOrConnectWithoutUsersInput | finesCreateOrConnectWithoutUsersInput[]
    createMany?: finesCreateManyUsersInputEnvelope
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
  }

  export type logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_from_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_to_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type user_wishlistUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_wishlistCreateWithoutUsersInput, user_wishlistUncheckedCreateWithoutUsersInput> | user_wishlistCreateWithoutUsersInput[] | user_wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutUsersInput | user_wishlistCreateOrConnectWithoutUsersInput[]
    createMany?: user_wishlistCreateManyUsersInputEnvelope
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
  }

  export type NullableEnumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role | null
  }

  export type NullableEnumusers_statusFieldUpdateOperationsInput = {
    set?: $Enums.users_status | null
  }

  export type NullableEnumgenderFieldUpdateOperationsInput = {
    set?: $Enums.gender | null
  }

  export type book_tranUpdateManyWithoutUsersNestedInput = {
    create?: XOR<book_tranCreateWithoutUsersInput, book_tranUncheckedCreateWithoutUsersInput> | book_tranCreateWithoutUsersInput[] | book_tranUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutUsersInput | book_tranCreateOrConnectWithoutUsersInput[]
    upsert?: book_tranUpsertWithWhereUniqueWithoutUsersInput | book_tranUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: book_tranCreateManyUsersInputEnvelope
    set?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    disconnect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    delete?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    update?: book_tranUpdateWithWhereUniqueWithoutUsersInput | book_tranUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: book_tranUpdateManyWithWhereWithoutUsersInput | book_tranUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: book_tranScalarWhereInput | book_tranScalarWhereInput[]
  }

  export type book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_requested_byTousersInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_approved_byTousersInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type finesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<finesCreateWithoutUsersInput, finesUncheckedCreateWithoutUsersInput> | finesCreateWithoutUsersInput[] | finesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: finesCreateOrConnectWithoutUsersInput | finesCreateOrConnectWithoutUsersInput[]
    upsert?: finesUpsertWithWhereUniqueWithoutUsersInput | finesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: finesCreateManyUsersInputEnvelope
    set?: finesWhereUniqueInput | finesWhereUniqueInput[]
    disconnect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    delete?: finesWhereUniqueInput | finesWhereUniqueInput[]
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    update?: finesUpdateWithWhereUniqueWithoutUsersInput | finesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: finesUpdateManyWithWhereWithoutUsersInput | finesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: finesScalarWhereInput | finesScalarWhereInput[]
  }

  export type logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUsersInput | logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUsersInput | logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUsersInput | logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_from_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_from_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_from_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_to_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_to_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_to_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type user_wishlistUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_wishlistCreateWithoutUsersInput, user_wishlistUncheckedCreateWithoutUsersInput> | user_wishlistCreateWithoutUsersInput[] | user_wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutUsersInput | user_wishlistCreateOrConnectWithoutUsersInput[]
    upsert?: user_wishlistUpsertWithWhereUniqueWithoutUsersInput | user_wishlistUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_wishlistCreateManyUsersInputEnvelope
    set?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    disconnect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    delete?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    update?: user_wishlistUpdateWithWhereUniqueWithoutUsersInput | user_wishlistUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_wishlistUpdateManyWithWhereWithoutUsersInput | user_wishlistUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_wishlistScalarWhereInput | user_wishlistScalarWhereInput[]
  }

  export type book_tranUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<book_tranCreateWithoutUsersInput, book_tranUncheckedCreateWithoutUsersInput> | book_tranCreateWithoutUsersInput[] | book_tranUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: book_tranCreateOrConnectWithoutUsersInput | book_tranCreateOrConnectWithoutUsersInput[]
    upsert?: book_tranUpsertWithWhereUniqueWithoutUsersInput | book_tranUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: book_tranCreateManyUsersInputEnvelope
    set?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    disconnect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    delete?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    connect?: book_tranWhereUniqueInput | book_tranWhereUniqueInput[]
    update?: book_tranUpdateWithWhereUniqueWithoutUsersInput | book_tranUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: book_tranUpdateManyWithWhereWithoutUsersInput | book_tranUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: book_tranScalarWhereInput | book_tranScalarWhereInput[]
  }

  export type book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_requested_byTousersInput | book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_requested_byTousersInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput = {
    create?: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput> | book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput[] | book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput[]
    connectOrCreate?: book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput[]
    upsert?: book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput[]
    createMany?: book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInputEnvelope
    set?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    disconnect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    delete?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    connect?: book_tran_historyWhereUniqueInput | book_tran_historyWhereUniqueInput[]
    update?: book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput[]
    updateMany?: book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_approved_byTousersInput | book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_approved_byTousersInput[]
    deleteMany?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
  }

  export type finesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<finesCreateWithoutUsersInput, finesUncheckedCreateWithoutUsersInput> | finesCreateWithoutUsersInput[] | finesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: finesCreateOrConnectWithoutUsersInput | finesCreateOrConnectWithoutUsersInput[]
    upsert?: finesUpsertWithWhereUniqueWithoutUsersInput | finesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: finesCreateManyUsersInputEnvelope
    set?: finesWhereUniqueInput | finesWhereUniqueInput[]
    disconnect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    delete?: finesWhereUniqueInput | finesWhereUniqueInput[]
    connect?: finesWhereUniqueInput | finesWhereUniqueInput[]
    update?: finesUpdateWithWhereUniqueWithoutUsersInput | finesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: finesUpdateManyWithWhereWithoutUsersInput | finesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: finesScalarWhereInput | finesScalarWhereInput[]
  }

  export type logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUsersInput | logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUsersInput | logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUsersInput | logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_from_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_from_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_from_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_to_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_to_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_to_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type user_wishlistUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_wishlistCreateWithoutUsersInput, user_wishlistUncheckedCreateWithoutUsersInput> | user_wishlistCreateWithoutUsersInput[] | user_wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_wishlistCreateOrConnectWithoutUsersInput | user_wishlistCreateOrConnectWithoutUsersInput[]
    upsert?: user_wishlistUpsertWithWhereUniqueWithoutUsersInput | user_wishlistUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_wishlistCreateManyUsersInputEnvelope
    set?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    disconnect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    delete?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    connect?: user_wishlistWhereUniqueInput | user_wishlistWhereUniqueInput[]
    update?: user_wishlistUpdateWithWhereUniqueWithoutUsersInput | user_wishlistUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_wishlistUpdateManyWithWhereWithoutUsersInput | user_wishlistUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_wishlistScalarWhereInput | user_wishlistScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumbook_tran_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_status | Enumbook_tran_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.book_tran_status[] | null
    notIn?: $Enums.book_tran_status[] | null
    not?: NestedEnumbook_tran_statusNullableFilter<$PrismaModel> | $Enums.book_tran_status | null
  }

  export type NestedEnumrecord_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.record_status | Enumrecord_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.record_status[] | null
    notIn?: $Enums.record_status[] | null
    not?: NestedEnumrecord_statusNullableFilter<$PrismaModel> | $Enums.record_status | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumbook_tran_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_status | Enumbook_tran_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.book_tran_status[] | null
    notIn?: $Enums.book_tran_status[] | null
    not?: NestedEnumbook_tran_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.book_tran_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumbook_tran_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumbook_tran_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumrecord_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.record_status | Enumrecord_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.record_status[] | null
    notIn?: $Enums.record_status[] | null
    not?: NestedEnumrecord_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.record_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrecord_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumrecord_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumbook_tran_history_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_history_status | Enumbook_tran_history_statusFieldRefInput<$PrismaModel>
    in?: $Enums.book_tran_history_status[]
    notIn?: $Enums.book_tran_history_status[]
    not?: NestedEnumbook_tran_history_statusFilter<$PrismaModel> | $Enums.book_tran_history_status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumbook_tran_history_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.book_tran_history_status | Enumbook_tran_history_statusFieldRefInput<$PrismaModel>
    in?: $Enums.book_tran_history_status[]
    notIn?: $Enums.book_tran_history_status[]
    not?: NestedEnumbook_tran_history_statusWithAggregatesFilter<$PrismaModel> | $Enums.book_tran_history_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbook_tran_history_statusFilter<$PrismaModel>
    _max?: NestedEnumbook_tran_history_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumfines_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.fines_status | Enumfines_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.fines_status[] | null
    notIn?: $Enums.fines_status[] | null
    not?: NestedEnumfines_statusNullableFilter<$PrismaModel> | $Enums.fines_status | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumfines_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fines_status | Enumfines_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.fines_status[] | null
    notIn?: $Enums.fines_status[] | null
    not?: NestedEnumfines_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.fines_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfines_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumfines_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumnotifications_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_type[] | null
    notIn?: $Enums.notifications_type[] | null
    not?: NestedEnumnotifications_typeNullableFilter<$PrismaModel> | $Enums.notifications_type | null
  }

  export type NestedEnumnotifications_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_status | Enumnotifications_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_status[] | null
    notIn?: $Enums.notifications_status[] | null
    not?: NestedEnumnotifications_statusNullableFilter<$PrismaModel> | $Enums.notifications_status | null
  }

  export type NestedEnumnotifications_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_type[] | null
    notIn?: $Enums.notifications_type[] | null
    not?: NestedEnumnotifications_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.notifications_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumnotifications_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumnotifications_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumnotifications_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_status | Enumnotifications_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.notifications_status[] | null
    notIn?: $Enums.notifications_status[] | null
    not?: NestedEnumnotifications_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.notifications_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumnotifications_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumnotifications_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type NestedEnumusers_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableFilter<$PrismaModel> | $Enums.users_status | null
  }

  export type NestedEnumgenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableFilter<$PrismaModel> | $Enums.gender | null
  }

  export type NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderNullableFilter<$PrismaModel>
  }

  export type booksCreateWithoutBook_tranInput = {
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBooksInput
    notifications?: notificationsCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutBook_tranInput = {
    book_id?: number
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBooksInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutBook_tranInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutBook_tranInput, booksUncheckedCreateWithoutBook_tranInput>
  }

  export type usersCreateWithoutBook_tranInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBook_tranInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBook_tranInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBook_tranInput, usersUncheckedCreateWithoutBook_tranInput>
  }

  export type book_tran_historyCreateWithoutBook_tranInput = {
    status?: $Enums.book_tran_history_status
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    books?: booksCreateNestedOneWithoutBook_tran_historyInput
    users_book_tran_history_requested_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    users_book_tran_history_approved_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyUncheckedCreateWithoutBook_tranInput = {
    id?: number
    book_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    fines?: finesUncheckedCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyCreateOrConnectWithoutBook_tranInput = {
    where: book_tran_historyWhereUniqueInput
    create: XOR<book_tran_historyCreateWithoutBook_tranInput, book_tran_historyUncheckedCreateWithoutBook_tranInput>
  }

  export type book_tran_historyCreateManyBook_tranInputEnvelope = {
    data: book_tran_historyCreateManyBook_tranInput | book_tran_historyCreateManyBook_tranInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutBook_tranInput = {
    type?: $Enums.notifications_type | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
    books?: booksCreateNestedOneWithoutNotificationsInput
    users_notifications_from_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_from_user_idTousersInput
    users_notifications_to_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_to_user_idTousersInput
  }

  export type notificationsUncheckedCreateWithoutBook_tranInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    from_user_id?: number | null
    to_user_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutBook_tranInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutBook_tranInput, notificationsUncheckedCreateWithoutBook_tranInput>
  }

  export type notificationsCreateManyBook_tranInputEnvelope = {
    data: notificationsCreateManyBook_tranInput | notificationsCreateManyBook_tranInput[]
    skipDuplicates?: boolean
  }

  export type booksUpsertWithoutBook_tranInput = {
    update: XOR<booksUpdateWithoutBook_tranInput, booksUncheckedUpdateWithoutBook_tranInput>
    create: XOR<booksCreateWithoutBook_tranInput, booksUncheckedCreateWithoutBook_tranInput>
    where?: booksWhereInput
  }

  export type booksUpdateToOneWithWhereWithoutBook_tranInput = {
    where?: booksWhereInput
    data: XOR<booksUpdateWithoutBook_tranInput, booksUncheckedUpdateWithoutBook_tranInput>
  }

  export type booksUpdateWithoutBook_tranInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran_history?: book_tran_historyUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateWithoutBook_tranInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type usersUpsertWithoutBook_tranInput = {
    update: XOR<usersUpdateWithoutBook_tranInput, usersUncheckedUpdateWithoutBook_tranInput>
    create: XOR<usersCreateWithoutBook_tranInput, usersUncheckedCreateWithoutBook_tranInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBook_tranInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBook_tranInput, usersUncheckedUpdateWithoutBook_tranInput>
  }

  export type usersUpdateWithoutBook_tranInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBook_tranInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type book_tran_historyUpsertWithWhereUniqueWithoutBook_tranInput = {
    where: book_tran_historyWhereUniqueInput
    update: XOR<book_tran_historyUpdateWithoutBook_tranInput, book_tran_historyUncheckedUpdateWithoutBook_tranInput>
    create: XOR<book_tran_historyCreateWithoutBook_tranInput, book_tran_historyUncheckedCreateWithoutBook_tranInput>
  }

  export type book_tran_historyUpdateWithWhereUniqueWithoutBook_tranInput = {
    where: book_tran_historyWhereUniqueInput
    data: XOR<book_tran_historyUpdateWithoutBook_tranInput, book_tran_historyUncheckedUpdateWithoutBook_tranInput>
  }

  export type book_tran_historyUpdateManyWithWhereWithoutBook_tranInput = {
    where: book_tran_historyScalarWhereInput
    data: XOR<book_tran_historyUpdateManyMutationInput, book_tran_historyUncheckedUpdateManyWithoutBook_tranInput>
  }

  export type book_tran_historyScalarWhereInput = {
    AND?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
    OR?: book_tran_historyScalarWhereInput[]
    NOT?: book_tran_historyScalarWhereInput | book_tran_historyScalarWhereInput[]
    id?: IntFilter<"book_tran_history"> | number
    book_id?: IntNullableFilter<"book_tran_history"> | number | null
    tran_id?: IntNullableFilter<"book_tran_history"> | number | null
    status?: Enumbook_tran_history_statusFilter<"book_tran_history"> | $Enums.book_tran_history_status
    requested_by?: IntNullableFilter<"book_tran_history"> | number | null
    approved_by?: IntNullableFilter<"book_tran_history"> | number | null
    requested_at?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    approved_at?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_issued?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_due?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    date_returned?: DateTimeNullableFilter<"book_tran_history"> | Date | string | null
    remarks?: StringNullableFilter<"book_tran_history"> | string | null
  }

  export type notificationsUpsertWithWhereUniqueWithoutBook_tranInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutBook_tranInput, notificationsUncheckedUpdateWithoutBook_tranInput>
    create: XOR<notificationsCreateWithoutBook_tranInput, notificationsUncheckedCreateWithoutBook_tranInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutBook_tranInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutBook_tranInput, notificationsUncheckedUpdateWithoutBook_tranInput>
  }

  export type notificationsUpdateManyWithWhereWithoutBook_tranInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutBook_tranInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    notification_id?: IntFilter<"notifications"> | number
    type?: Enumnotifications_typeNullableFilter<"notifications"> | $Enums.notifications_type | null
    book_id?: IntNullableFilter<"notifications"> | number | null
    from_user_id?: IntNullableFilter<"notifications"> | number | null
    to_user_id?: IntNullableFilter<"notifications"> | number | null
    tran_id?: IntNullableFilter<"notifications"> | number | null
    status?: Enumnotifications_statusNullableFilter<"notifications"> | $Enums.notifications_status | null
    message?: StringNullableFilter<"notifications"> | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    resolved_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type booksCreateWithoutBook_tran_historyInput = {
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranCreateNestedManyWithoutBooksInput
    notifications?: notificationsCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutBook_tran_historyInput = {
    book_id?: number
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutBooksInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutBook_tran_historyInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutBook_tran_historyInput, booksUncheckedCreateWithoutBook_tran_historyInput>
  }

  export type book_tranCreateWithoutBook_tran_historyInput = {
    status?: $Enums.book_tran_status | null
    record_status?: $Enums.record_status | null
    books?: booksCreateNestedOneWithoutBook_tranInput
    users?: usersCreateNestedOneWithoutBook_tranInput
    notifications?: notificationsCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranUncheckedCreateWithoutBook_tran_historyInput = {
    tran_id?: number
    book_id?: number | null
    status?: $Enums.book_tran_status | null
    user_id?: number | null
    record_status?: $Enums.record_status | null
    notifications?: notificationsUncheckedCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranCreateOrConnectWithoutBook_tran_historyInput = {
    where: book_tranWhereUniqueInput
    create: XOR<book_tranCreateWithoutBook_tran_historyInput, book_tranUncheckedCreateWithoutBook_tran_historyInput>
  }

  export type usersCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>
  }

  export type usersCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>
  }

  export type finesCreateWithoutBook_tran_historyInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
    users?: usersCreateNestedOneWithoutFinesInput
  }

  export type finesUncheckedCreateWithoutBook_tran_historyInput = {
    fine_id?: number
    user_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
  }

  export type finesCreateOrConnectWithoutBook_tran_historyInput = {
    where: finesWhereUniqueInput
    create: XOR<finesCreateWithoutBook_tran_historyInput, finesUncheckedCreateWithoutBook_tran_historyInput>
  }

  export type finesCreateManyBook_tran_historyInputEnvelope = {
    data: finesCreateManyBook_tran_historyInput | finesCreateManyBook_tran_historyInput[]
    skipDuplicates?: boolean
  }

  export type booksUpsertWithoutBook_tran_historyInput = {
    update: XOR<booksUpdateWithoutBook_tran_historyInput, booksUncheckedUpdateWithoutBook_tran_historyInput>
    create: XOR<booksCreateWithoutBook_tran_historyInput, booksUncheckedCreateWithoutBook_tran_historyInput>
    where?: booksWhereInput
  }

  export type booksUpdateToOneWithWhereWithoutBook_tran_historyInput = {
    where?: booksWhereInput
    data: XOR<booksUpdateWithoutBook_tran_historyInput, booksUncheckedUpdateWithoutBook_tran_historyInput>
  }

  export type booksUpdateWithoutBook_tran_historyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateWithoutBook_tran_historyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUncheckedUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type book_tranUpsertWithoutBook_tran_historyInput = {
    update: XOR<book_tranUpdateWithoutBook_tran_historyInput, book_tranUncheckedUpdateWithoutBook_tran_historyInput>
    create: XOR<book_tranCreateWithoutBook_tran_historyInput, book_tranUncheckedCreateWithoutBook_tran_historyInput>
    where?: book_tranWhereInput
  }

  export type book_tranUpdateToOneWithWhereWithoutBook_tran_historyInput = {
    where?: book_tranWhereInput
    data: XOR<book_tranUpdateWithoutBook_tran_historyInput, book_tranUncheckedUpdateWithoutBook_tran_historyInput>
  }

  export type book_tranUpdateWithoutBook_tran_historyInput = {
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    books?: booksUpdateOneWithoutBook_tranNestedInput
    users?: usersUpdateOneWithoutBook_tranNestedInput
    notifications?: notificationsUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranUncheckedUpdateWithoutBook_tran_historyInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    notifications?: notificationsUncheckedUpdateManyWithoutBook_tranNestedInput
  }

  export type usersUpsertWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    update: XOR<usersUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput, usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>
    create: XOR<usersCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput, usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput>
  }

  export type usersUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_requested_byTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    update: XOR<usersUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput, usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>
    create: XOR<usersCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput, usersUncheckedCreateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput, usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput>
  }

  export type usersUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBook_tran_history_book_tran_history_approved_byTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type finesUpsertWithWhereUniqueWithoutBook_tran_historyInput = {
    where: finesWhereUniqueInput
    update: XOR<finesUpdateWithoutBook_tran_historyInput, finesUncheckedUpdateWithoutBook_tran_historyInput>
    create: XOR<finesCreateWithoutBook_tran_historyInput, finesUncheckedCreateWithoutBook_tran_historyInput>
  }

  export type finesUpdateWithWhereUniqueWithoutBook_tran_historyInput = {
    where: finesWhereUniqueInput
    data: XOR<finesUpdateWithoutBook_tran_historyInput, finesUncheckedUpdateWithoutBook_tran_historyInput>
  }

  export type finesUpdateManyWithWhereWithoutBook_tran_historyInput = {
    where: finesScalarWhereInput
    data: XOR<finesUpdateManyMutationInput, finesUncheckedUpdateManyWithoutBook_tran_historyInput>
  }

  export type finesScalarWhereInput = {
    AND?: finesScalarWhereInput | finesScalarWhereInput[]
    OR?: finesScalarWhereInput[]
    NOT?: finesScalarWhereInput | finesScalarWhereInput[]
    fine_id?: IntFilter<"fines"> | number
    user_id?: IntNullableFilter<"fines"> | number | null
    book_tran_history_id?: IntNullableFilter<"fines"> | number | null
    amount?: DecimalNullableFilter<"fines"> | Decimal | DecimalJsLike | number | string | null
    reason?: StringNullableFilter<"fines"> | string | null
    status?: Enumfines_statusNullableFilter<"fines"> | $Enums.fines_status | null
    created_at?: DateTimeNullableFilter<"fines"> | Date | string | null
    paid_at?: DateTimeNullableFilter<"fines"> | Date | string | null
  }

  export type book_tranCreateWithoutBooksInput = {
    status?: $Enums.book_tran_status | null
    record_status?: $Enums.record_status | null
    users?: usersCreateNestedOneWithoutBook_tranInput
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBook_tranInput
    notifications?: notificationsCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranUncheckedCreateWithoutBooksInput = {
    tran_id?: number
    status?: $Enums.book_tran_status | null
    user_id?: number | null
    record_status?: $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBook_tranInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranCreateOrConnectWithoutBooksInput = {
    where: book_tranWhereUniqueInput
    create: XOR<book_tranCreateWithoutBooksInput, book_tranUncheckedCreateWithoutBooksInput>
  }

  export type book_tranCreateManyBooksInputEnvelope = {
    data: book_tranCreateManyBooksInput | book_tranCreateManyBooksInput[]
    skipDuplicates?: boolean
  }

  export type book_tran_historyCreateWithoutBooksInput = {
    status?: $Enums.book_tran_history_status
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    book_tran?: book_tranCreateNestedOneWithoutBook_tran_historyInput
    users_book_tran_history_requested_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    users_book_tran_history_approved_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyUncheckedCreateWithoutBooksInput = {
    id?: number
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    fines?: finesUncheckedCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyCreateOrConnectWithoutBooksInput = {
    where: book_tran_historyWhereUniqueInput
    create: XOR<book_tran_historyCreateWithoutBooksInput, book_tran_historyUncheckedCreateWithoutBooksInput>
  }

  export type book_tran_historyCreateManyBooksInputEnvelope = {
    data: book_tran_historyCreateManyBooksInput | book_tran_historyCreateManyBooksInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutBooksInput = {
    type?: $Enums.notifications_type | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
    users_notifications_from_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_from_user_idTousersInput
    users_notifications_to_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_to_user_idTousersInput
    book_tran?: book_tranCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutBooksInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    from_user_id?: number | null
    to_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutBooksInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutBooksInput, notificationsUncheckedCreateWithoutBooksInput>
  }

  export type notificationsCreateManyBooksInputEnvelope = {
    data: notificationsCreateManyBooksInput | notificationsCreateManyBooksInput[]
    skipDuplicates?: boolean
  }

  export type user_wishlistCreateWithoutBooksInput = {
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutUser_wishlistInput
  }

  export type user_wishlistUncheckedCreateWithoutBooksInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
  }

  export type user_wishlistCreateOrConnectWithoutBooksInput = {
    where: user_wishlistWhereUniqueInput
    create: XOR<user_wishlistCreateWithoutBooksInput, user_wishlistUncheckedCreateWithoutBooksInput>
  }

  export type user_wishlistCreateManyBooksInputEnvelope = {
    data: user_wishlistCreateManyBooksInput | user_wishlistCreateManyBooksInput[]
    skipDuplicates?: boolean
  }

  export type book_tranUpsertWithWhereUniqueWithoutBooksInput = {
    where: book_tranWhereUniqueInput
    update: XOR<book_tranUpdateWithoutBooksInput, book_tranUncheckedUpdateWithoutBooksInput>
    create: XOR<book_tranCreateWithoutBooksInput, book_tranUncheckedCreateWithoutBooksInput>
  }

  export type book_tranUpdateWithWhereUniqueWithoutBooksInput = {
    where: book_tranWhereUniqueInput
    data: XOR<book_tranUpdateWithoutBooksInput, book_tranUncheckedUpdateWithoutBooksInput>
  }

  export type book_tranUpdateManyWithWhereWithoutBooksInput = {
    where: book_tranScalarWhereInput
    data: XOR<book_tranUpdateManyMutationInput, book_tranUncheckedUpdateManyWithoutBooksInput>
  }

  export type book_tranScalarWhereInput = {
    AND?: book_tranScalarWhereInput | book_tranScalarWhereInput[]
    OR?: book_tranScalarWhereInput[]
    NOT?: book_tranScalarWhereInput | book_tranScalarWhereInput[]
    tran_id?: IntFilter<"book_tran"> | number
    book_id?: IntNullableFilter<"book_tran"> | number | null
    status?: Enumbook_tran_statusNullableFilter<"book_tran"> | $Enums.book_tran_status | null
    user_id?: IntNullableFilter<"book_tran"> | number | null
    record_status?: Enumrecord_statusNullableFilter<"book_tran"> | $Enums.record_status | null
  }

  export type book_tran_historyUpsertWithWhereUniqueWithoutBooksInput = {
    where: book_tran_historyWhereUniqueInput
    update: XOR<book_tran_historyUpdateWithoutBooksInput, book_tran_historyUncheckedUpdateWithoutBooksInput>
    create: XOR<book_tran_historyCreateWithoutBooksInput, book_tran_historyUncheckedCreateWithoutBooksInput>
  }

  export type book_tran_historyUpdateWithWhereUniqueWithoutBooksInput = {
    where: book_tran_historyWhereUniqueInput
    data: XOR<book_tran_historyUpdateWithoutBooksInput, book_tran_historyUncheckedUpdateWithoutBooksInput>
  }

  export type book_tran_historyUpdateManyWithWhereWithoutBooksInput = {
    where: book_tran_historyScalarWhereInput
    data: XOR<book_tran_historyUpdateManyMutationInput, book_tran_historyUncheckedUpdateManyWithoutBooksInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutBooksInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutBooksInput, notificationsUncheckedUpdateWithoutBooksInput>
    create: XOR<notificationsCreateWithoutBooksInput, notificationsUncheckedCreateWithoutBooksInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutBooksInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutBooksInput, notificationsUncheckedUpdateWithoutBooksInput>
  }

  export type notificationsUpdateManyWithWhereWithoutBooksInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutBooksInput>
  }

  export type user_wishlistUpsertWithWhereUniqueWithoutBooksInput = {
    where: user_wishlistWhereUniqueInput
    update: XOR<user_wishlistUpdateWithoutBooksInput, user_wishlistUncheckedUpdateWithoutBooksInput>
    create: XOR<user_wishlistCreateWithoutBooksInput, user_wishlistUncheckedCreateWithoutBooksInput>
  }

  export type user_wishlistUpdateWithWhereUniqueWithoutBooksInput = {
    where: user_wishlistWhereUniqueInput
    data: XOR<user_wishlistUpdateWithoutBooksInput, user_wishlistUncheckedUpdateWithoutBooksInput>
  }

  export type user_wishlistUpdateManyWithWhereWithoutBooksInput = {
    where: user_wishlistScalarWhereInput
    data: XOR<user_wishlistUpdateManyMutationInput, user_wishlistUncheckedUpdateManyWithoutBooksInput>
  }

  export type user_wishlistScalarWhereInput = {
    AND?: user_wishlistScalarWhereInput | user_wishlistScalarWhereInput[]
    OR?: user_wishlistScalarWhereInput[]
    NOT?: user_wishlistScalarWhereInput | user_wishlistScalarWhereInput[]
    id?: IntFilter<"user_wishlist"> | number
    user_id?: IntNullableFilter<"user_wishlist"> | number | null
    book_id?: IntNullableFilter<"user_wishlist"> | number | null
    created_at?: DateTimeNullableFilter<"user_wishlist"> | Date | string | null
  }

  export type usersCreateWithoutFinesInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFinesInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFinesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFinesInput, usersUncheckedCreateWithoutFinesInput>
  }

  export type book_tran_historyCreateWithoutFinesInput = {
    status?: $Enums.book_tran_history_status
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    books?: booksCreateNestedOneWithoutBook_tran_historyInput
    book_tran?: book_tranCreateNestedOneWithoutBook_tran_historyInput
    users_book_tran_history_requested_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    users_book_tran_history_approved_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_approved_byTousersInput
  }

  export type book_tran_historyUncheckedCreateWithoutFinesInput = {
    id?: number
    book_id?: number | null
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
  }

  export type book_tran_historyCreateOrConnectWithoutFinesInput = {
    where: book_tran_historyWhereUniqueInput
    create: XOR<book_tran_historyCreateWithoutFinesInput, book_tran_historyUncheckedCreateWithoutFinesInput>
  }

  export type usersUpsertWithoutFinesInput = {
    update: XOR<usersUpdateWithoutFinesInput, usersUncheckedUpdateWithoutFinesInput>
    create: XOR<usersCreateWithoutFinesInput, usersUncheckedCreateWithoutFinesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFinesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFinesInput, usersUncheckedUpdateWithoutFinesInput>
  }

  export type usersUpdateWithoutFinesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFinesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type book_tran_historyUpsertWithoutFinesInput = {
    update: XOR<book_tran_historyUpdateWithoutFinesInput, book_tran_historyUncheckedUpdateWithoutFinesInput>
    create: XOR<book_tran_historyCreateWithoutFinesInput, book_tran_historyUncheckedCreateWithoutFinesInput>
    where?: book_tran_historyWhereInput
  }

  export type book_tran_historyUpdateToOneWithWhereWithoutFinesInput = {
    where?: book_tran_historyWhereInput
    data: XOR<book_tran_historyUpdateWithoutFinesInput, book_tran_historyUncheckedUpdateWithoutFinesInput>
  }

  export type book_tran_historyUpdateWithoutFinesInput = {
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    books?: booksUpdateOneWithoutBook_tran_historyNestedInput
    book_tran?: book_tranUpdateOneWithoutBook_tran_historyNestedInput
    users_book_tran_history_requested_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_requested_byTousersNestedInput
    users_book_tran_history_approved_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_approved_byTousersNestedInput
  }

  export type book_tran_historyUncheckedUpdateWithoutFinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateWithoutLogsInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLogsInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLogsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
  }

  export type usersUpsertWithoutLogsInput = {
    update: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLogsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
  }

  export type usersUpdateWithoutLogsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLogsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type booksCreateWithoutNotificationsInput = {
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranCreateNestedManyWithoutBooksInput
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutNotificationsInput = {
    book_id?: number
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutBooksInput
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBooksInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutNotificationsInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutNotificationsInput, booksUncheckedCreateWithoutNotificationsInput>
  }

  export type usersCreateWithoutNotifications_notifications_from_user_idTousersInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotifications_notifications_from_user_idTousersInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotifications_notifications_from_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotifications_notifications_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_from_user_idTousersInput>
  }

  export type usersCreateWithoutNotifications_notifications_to_user_idTousersInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    user_wishlist?: user_wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotifications_notifications_to_user_idTousersInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    user_wishlist?: user_wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotifications_notifications_to_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotifications_notifications_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_to_user_idTousersInput>
  }

  export type book_tranCreateWithoutNotificationsInput = {
    status?: $Enums.book_tran_status | null
    record_status?: $Enums.record_status | null
    books?: booksCreateNestedOneWithoutBook_tranInput
    users?: usersCreateNestedOneWithoutBook_tranInput
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranUncheckedCreateWithoutNotificationsInput = {
    tran_id?: number
    book_id?: number | null
    status?: $Enums.book_tran_status | null
    user_id?: number | null
    record_status?: $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranCreateOrConnectWithoutNotificationsInput = {
    where: book_tranWhereUniqueInput
    create: XOR<book_tranCreateWithoutNotificationsInput, book_tranUncheckedCreateWithoutNotificationsInput>
  }

  export type booksUpsertWithoutNotificationsInput = {
    update: XOR<booksUpdateWithoutNotificationsInput, booksUncheckedUpdateWithoutNotificationsInput>
    create: XOR<booksCreateWithoutNotificationsInput, booksUncheckedCreateWithoutNotificationsInput>
    where?: booksWhereInput
  }

  export type booksUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: booksWhereInput
    data: XOR<booksUpdateWithoutNotificationsInput, booksUncheckedUpdateWithoutNotificationsInput>
  }

  export type booksUpdateWithoutNotificationsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUpdateManyWithoutBooksNestedInput
    book_tran_history?: book_tran_historyUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateWithoutNotificationsInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUncheckedUpdateManyWithoutBooksNestedInput
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBooksNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type usersUpsertWithoutNotifications_notifications_from_user_idTousersInput = {
    update: XOR<usersUpdateWithoutNotifications_notifications_from_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_from_user_idTousersInput>
    create: XOR<usersCreateWithoutNotifications_notifications_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_from_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotifications_notifications_from_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotifications_notifications_from_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_from_user_idTousersInput>
  }

  export type usersUpdateWithoutNotifications_notifications_from_user_idTousersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotifications_notifications_from_user_idTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutNotifications_notifications_to_user_idTousersInput = {
    update: XOR<usersUpdateWithoutNotifications_notifications_to_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_to_user_idTousersInput>
    create: XOR<usersCreateWithoutNotifications_notifications_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_to_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotifications_notifications_to_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotifications_notifications_to_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_to_user_idTousersInput>
  }

  export type usersUpdateWithoutNotifications_notifications_to_user_idTousersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    user_wishlist?: user_wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotifications_notifications_to_user_idTousersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    user_wishlist?: user_wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type book_tranUpsertWithoutNotificationsInput = {
    update: XOR<book_tranUpdateWithoutNotificationsInput, book_tranUncheckedUpdateWithoutNotificationsInput>
    create: XOR<book_tranCreateWithoutNotificationsInput, book_tranUncheckedCreateWithoutNotificationsInput>
    where?: book_tranWhereInput
  }

  export type book_tranUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: book_tranWhereInput
    data: XOR<book_tranUpdateWithoutNotificationsInput, book_tranUncheckedUpdateWithoutNotificationsInput>
  }

  export type book_tranUpdateWithoutNotificationsInput = {
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    books?: booksUpdateOneWithoutBook_tranNestedInput
    users?: usersUpdateOneWithoutBook_tranNestedInput
    book_tran_history?: book_tran_historyUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranUncheckedUpdateWithoutNotificationsInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBook_tranNestedInput
  }

  export type usersCreateWithoutUser_wishlistInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutUser_wishlistInput = {
    user_id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gender?: $Enums.gender | null
    phone_number?: string | null
    birth_date?: Date | string | null
    address?: string | null
    profile_image_url?: string | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutUsersInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_requested_byTousersInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedCreateNestedManyWithoutUsers_book_tran_history_approved_byTousersInput
    fines?: finesUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_from_user_idTousersInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_to_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutUser_wishlistInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_wishlistInput, usersUncheckedCreateWithoutUser_wishlistInput>
  }

  export type booksCreateWithoutUser_wishlistInput = {
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranCreateNestedManyWithoutBooksInput
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBooksInput
    notifications?: notificationsCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutUser_wishlistInput = {
    book_id?: number
    title?: string | null
    author: string
    isbn?: string | null
    year?: number | null
    genre?: string | null
    image_url?: string | null
    description?: string | null
    librarian_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    record_status?: $Enums.record_status | null
    book_tran?: book_tranUncheckedCreateNestedManyWithoutBooksInput
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBooksInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutUser_wishlistInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutUser_wishlistInput, booksUncheckedCreateWithoutUser_wishlistInput>
  }

  export type usersUpsertWithoutUser_wishlistInput = {
    update: XOR<usersUpdateWithoutUser_wishlistInput, usersUncheckedUpdateWithoutUser_wishlistInput>
    create: XOR<usersCreateWithoutUser_wishlistInput, usersUncheckedCreateWithoutUser_wishlistInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_wishlistInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_wishlistInput, usersUncheckedUpdateWithoutUser_wishlistInput>
  }

  export type usersUpdateWithoutUser_wishlistInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_wishlistInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUncheckedUpdateManyWithoutUsersNestedInput
    book_tran_history_book_tran_history_requested_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersNestedInput
    book_tran_history_book_tran_history_approved_byTousers?: book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersNestedInput
    fines?: finesUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersNestedInput
    notifications_notifications_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersNestedInput
  }

  export type booksUpsertWithoutUser_wishlistInput = {
    update: XOR<booksUpdateWithoutUser_wishlistInput, booksUncheckedUpdateWithoutUser_wishlistInput>
    create: XOR<booksCreateWithoutUser_wishlistInput, booksUncheckedCreateWithoutUser_wishlistInput>
    where?: booksWhereInput
  }

  export type booksUpdateToOneWithWhereWithoutUser_wishlistInput = {
    where?: booksWhereInput
    data: XOR<booksUpdateWithoutUser_wishlistInput, booksUncheckedUpdateWithoutUser_wishlistInput>
  }

  export type booksUpdateWithoutUser_wishlistInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUpdateManyWithoutBooksNestedInput
    book_tran_history?: book_tran_historyUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateWithoutUser_wishlistInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    librarian_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran?: book_tranUncheckedUpdateManyWithoutBooksNestedInput
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBooksNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type book_tranCreateWithoutUsersInput = {
    status?: $Enums.book_tran_status | null
    record_status?: $Enums.record_status | null
    books?: booksCreateNestedOneWithoutBook_tranInput
    book_tran_history?: book_tran_historyCreateNestedManyWithoutBook_tranInput
    notifications?: notificationsCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranUncheckedCreateWithoutUsersInput = {
    tran_id?: number
    book_id?: number | null
    status?: $Enums.book_tran_status | null
    record_status?: $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedCreateNestedManyWithoutBook_tranInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutBook_tranInput
  }

  export type book_tranCreateOrConnectWithoutUsersInput = {
    where: book_tranWhereUniqueInput
    create: XOR<book_tranCreateWithoutUsersInput, book_tranUncheckedCreateWithoutUsersInput>
  }

  export type book_tranCreateManyUsersInputEnvelope = {
    data: book_tranCreateManyUsersInput | book_tranCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput = {
    status?: $Enums.book_tran_history_status
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    books?: booksCreateNestedOneWithoutBook_tran_historyInput
    book_tran?: book_tranCreateNestedOneWithoutBook_tran_historyInput
    users_book_tran_history_approved_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_approved_byTousersInput
    fines?: finesCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput = {
    id?: number
    book_id?: number | null
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    fines?: finesUncheckedCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_requested_byTousersInput = {
    where: book_tran_historyWhereUniqueInput
    create: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput>
  }

  export type book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInputEnvelope = {
    data: book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInput | book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput = {
    status?: $Enums.book_tran_history_status
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    books?: booksCreateNestedOneWithoutBook_tran_historyInput
    book_tran?: book_tranCreateNestedOneWithoutBook_tran_historyInput
    users_book_tran_history_requested_byTousers?: usersCreateNestedOneWithoutBook_tran_history_book_tran_history_requested_byTousersInput
    fines?: finesCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput = {
    id?: number
    book_id?: number | null
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
    fines?: finesUncheckedCreateNestedManyWithoutBook_tran_historyInput
  }

  export type book_tran_historyCreateOrConnectWithoutUsers_book_tran_history_approved_byTousersInput = {
    where: book_tran_historyWhereUniqueInput
    create: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput>
  }

  export type book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInputEnvelope = {
    data: book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInput | book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type finesCreateWithoutUsersInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
    book_tran_history?: book_tran_historyCreateNestedOneWithoutFinesInput
  }

  export type finesUncheckedCreateWithoutUsersInput = {
    fine_id?: number
    book_tran_history_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
  }

  export type finesCreateOrConnectWithoutUsersInput = {
    where: finesWhereUniqueInput
    create: XOR<finesCreateWithoutUsersInput, finesUncheckedCreateWithoutUsersInput>
  }

  export type finesCreateManyUsersInputEnvelope = {
    data: finesCreateManyUsersInput | finesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type logsCreateWithoutUsersInput = {
    description: string
    created_at?: Date | string | null
  }

  export type logsUncheckedCreateWithoutUsersInput = {
    log_id?: number
    description: string
    created_at?: Date | string | null
  }

  export type logsCreateOrConnectWithoutUsersInput = {
    where: logsWhereUniqueInput
    create: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput>
  }

  export type logsCreateManyUsersInputEnvelope = {
    data: logsCreateManyUsersInput | logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsers_notifications_from_user_idTousersInput = {
    type?: $Enums.notifications_type | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
    books?: booksCreateNestedOneWithoutNotificationsInput
    users_notifications_to_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_to_user_idTousersInput
    book_tran?: book_tranCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    to_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsers_notifications_from_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput>
  }

  export type notificationsCreateManyUsers_notifications_from_user_idTousersInputEnvelope = {
    data: notificationsCreateManyUsers_notifications_from_user_idTousersInput | notificationsCreateManyUsers_notifications_from_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsers_notifications_to_user_idTousersInput = {
    type?: $Enums.notifications_type | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
    books?: booksCreateNestedOneWithoutNotificationsInput
    users_notifications_from_user_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_from_user_idTousersInput
    book_tran?: book_tranCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    from_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsers_notifications_to_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput>
  }

  export type notificationsCreateManyUsers_notifications_to_user_idTousersInputEnvelope = {
    data: notificationsCreateManyUsers_notifications_to_user_idTousersInput | notificationsCreateManyUsers_notifications_to_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type user_wishlistCreateWithoutUsersInput = {
    created_at?: Date | string | null
    books?: booksCreateNestedOneWithoutUser_wishlistInput
  }

  export type user_wishlistUncheckedCreateWithoutUsersInput = {
    id?: number
    book_id?: number | null
    created_at?: Date | string | null
  }

  export type user_wishlistCreateOrConnectWithoutUsersInput = {
    where: user_wishlistWhereUniqueInput
    create: XOR<user_wishlistCreateWithoutUsersInput, user_wishlistUncheckedCreateWithoutUsersInput>
  }

  export type user_wishlistCreateManyUsersInputEnvelope = {
    data: user_wishlistCreateManyUsersInput | user_wishlistCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type book_tranUpsertWithWhereUniqueWithoutUsersInput = {
    where: book_tranWhereUniqueInput
    update: XOR<book_tranUpdateWithoutUsersInput, book_tranUncheckedUpdateWithoutUsersInput>
    create: XOR<book_tranCreateWithoutUsersInput, book_tranUncheckedCreateWithoutUsersInput>
  }

  export type book_tranUpdateWithWhereUniqueWithoutUsersInput = {
    where: book_tranWhereUniqueInput
    data: XOR<book_tranUpdateWithoutUsersInput, book_tranUncheckedUpdateWithoutUsersInput>
  }

  export type book_tranUpdateManyWithWhereWithoutUsersInput = {
    where: book_tranScalarWhereInput
    data: XOR<book_tranUpdateManyMutationInput, book_tranUncheckedUpdateManyWithoutUsersInput>
  }

  export type book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput = {
    where: book_tran_historyWhereUniqueInput
    update: XOR<book_tran_historyUpdateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedUpdateWithoutUsers_book_tran_history_requested_byTousersInput>
    create: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_requested_byTousersInput>
  }

  export type book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_requested_byTousersInput = {
    where: book_tran_historyWhereUniqueInput
    data: XOR<book_tran_historyUpdateWithoutUsers_book_tran_history_requested_byTousersInput, book_tran_historyUncheckedUpdateWithoutUsers_book_tran_history_requested_byTousersInput>
  }

  export type book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_requested_byTousersInput = {
    where: book_tran_historyScalarWhereInput
    data: XOR<book_tran_historyUpdateManyMutationInput, book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersInput>
  }

  export type book_tran_historyUpsertWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput = {
    where: book_tran_historyWhereUniqueInput
    update: XOR<book_tran_historyUpdateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedUpdateWithoutUsers_book_tran_history_approved_byTousersInput>
    create: XOR<book_tran_historyCreateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedCreateWithoutUsers_book_tran_history_approved_byTousersInput>
  }

  export type book_tran_historyUpdateWithWhereUniqueWithoutUsers_book_tran_history_approved_byTousersInput = {
    where: book_tran_historyWhereUniqueInput
    data: XOR<book_tran_historyUpdateWithoutUsers_book_tran_history_approved_byTousersInput, book_tran_historyUncheckedUpdateWithoutUsers_book_tran_history_approved_byTousersInput>
  }

  export type book_tran_historyUpdateManyWithWhereWithoutUsers_book_tran_history_approved_byTousersInput = {
    where: book_tran_historyScalarWhereInput
    data: XOR<book_tran_historyUpdateManyMutationInput, book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersInput>
  }

  export type finesUpsertWithWhereUniqueWithoutUsersInput = {
    where: finesWhereUniqueInput
    update: XOR<finesUpdateWithoutUsersInput, finesUncheckedUpdateWithoutUsersInput>
    create: XOR<finesCreateWithoutUsersInput, finesUncheckedCreateWithoutUsersInput>
  }

  export type finesUpdateWithWhereUniqueWithoutUsersInput = {
    where: finesWhereUniqueInput
    data: XOR<finesUpdateWithoutUsersInput, finesUncheckedUpdateWithoutUsersInput>
  }

  export type finesUpdateManyWithWhereWithoutUsersInput = {
    where: finesScalarWhereInput
    data: XOR<finesUpdateManyMutationInput, finesUncheckedUpdateManyWithoutUsersInput>
  }

  export type logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: logsWhereUniqueInput
    update: XOR<logsUpdateWithoutUsersInput, logsUncheckedUpdateWithoutUsersInput>
    create: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput>
  }

  export type logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: logsWhereUniqueInput
    data: XOR<logsUpdateWithoutUsersInput, logsUncheckedUpdateWithoutUsersInput>
  }

  export type logsUpdateManyWithWhereWithoutUsersInput = {
    where: logsScalarWhereInput
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type logsScalarWhereInput = {
    AND?: logsScalarWhereInput | logsScalarWhereInput[]
    OR?: logsScalarWhereInput[]
    NOT?: logsScalarWhereInput | logsScalarWhereInput[]
    log_id?: IntFilter<"logs"> | number
    description?: StringFilter<"logs"> | string
    user_id?: IntFilter<"logs"> | number
    created_at?: DateTimeNullableFilter<"logs"> | Date | string | null
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_from_user_idTousersInput>
    create: XOR<notificationsCreateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_from_user_idTousersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsers_notifications_from_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsers_notifications_from_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_from_user_idTousersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsers_notifications_from_user_idTousersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_to_user_idTousersInput>
    create: XOR<notificationsCreateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_to_user_idTousersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsers_notifications_to_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsers_notifications_to_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_to_user_idTousersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsers_notifications_to_user_idTousersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersInput>
  }

  export type user_wishlistUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_wishlistWhereUniqueInput
    update: XOR<user_wishlistUpdateWithoutUsersInput, user_wishlistUncheckedUpdateWithoutUsersInput>
    create: XOR<user_wishlistCreateWithoutUsersInput, user_wishlistUncheckedCreateWithoutUsersInput>
  }

  export type user_wishlistUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_wishlistWhereUniqueInput
    data: XOR<user_wishlistUpdateWithoutUsersInput, user_wishlistUncheckedUpdateWithoutUsersInput>
  }

  export type user_wishlistUpdateManyWithWhereWithoutUsersInput = {
    where: user_wishlistScalarWhereInput
    data: XOR<user_wishlistUpdateManyMutationInput, user_wishlistUncheckedUpdateManyWithoutUsersInput>
  }

  export type book_tran_historyCreateManyBook_tranInput = {
    id?: number
    book_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
  }

  export type notificationsCreateManyBook_tranInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    from_user_id?: number | null
    to_user_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type book_tran_historyUpdateWithoutBook_tranInput = {
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    books?: booksUpdateOneWithoutBook_tran_historyNestedInput
    users_book_tran_history_requested_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_requested_byTousersNestedInput
    users_book_tran_history_approved_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateWithoutBook_tranInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    fines?: finesUncheckedUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateManyWithoutBook_tranInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationsUpdateWithoutBook_tranInput = {
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: booksUpdateOneWithoutNotificationsNestedInput
    users_notifications_from_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_from_user_idTousersNestedInput
    users_notifications_to_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_to_user_idTousersNestedInput
  }

  export type notificationsUncheckedUpdateWithoutBook_tranInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutBook_tranInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type finesCreateManyBook_tran_historyInput = {
    fine_id?: number
    user_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
  }

  export type finesUpdateWithoutBook_tran_historyInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutFinesNestedInput
  }

  export type finesUncheckedUpdateWithoutBook_tran_historyInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type finesUncheckedUpdateManyWithoutBook_tran_historyInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type book_tranCreateManyBooksInput = {
    tran_id?: number
    status?: $Enums.book_tran_status | null
    user_id?: number | null
    record_status?: $Enums.record_status | null
  }

  export type book_tran_historyCreateManyBooksInput = {
    id?: number
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
  }

  export type notificationsCreateManyBooksInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    from_user_id?: number | null
    to_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type user_wishlistCreateManyBooksInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
  }

  export type book_tranUpdateWithoutBooksInput = {
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    users?: usersUpdateOneWithoutBook_tranNestedInput
    book_tran_history?: book_tran_historyUpdateManyWithoutBook_tranNestedInput
    notifications?: notificationsUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranUncheckedUpdateWithoutBooksInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBook_tranNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranUncheckedUpdateManyWithoutBooksInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
  }

  export type book_tran_historyUpdateWithoutBooksInput = {
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    book_tran?: book_tranUpdateOneWithoutBook_tran_historyNestedInput
    users_book_tran_history_requested_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_requested_byTousersNestedInput
    users_book_tran_history_approved_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    fines?: finesUncheckedUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateManyWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationsUpdateWithoutBooksInput = {
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_notifications_from_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_from_user_idTousersNestedInput
    users_notifications_to_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_to_user_idTousersNestedInput
    book_tran?: book_tranUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutBooksInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutBooksInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_wishlistUpdateWithoutBooksInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutUser_wishlistNestedInput
  }

  export type user_wishlistUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_wishlistUncheckedUpdateManyWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type book_tranCreateManyUsersInput = {
    tran_id?: number
    book_id?: number | null
    status?: $Enums.book_tran_status | null
    record_status?: $Enums.record_status | null
  }

  export type book_tran_historyCreateManyUsers_book_tran_history_requested_byTousersInput = {
    id?: number
    book_id?: number | null
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    approved_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
  }

  export type book_tran_historyCreateManyUsers_book_tran_history_approved_byTousersInput = {
    id?: number
    book_id?: number | null
    tran_id?: number | null
    status?: $Enums.book_tran_history_status
    requested_by?: number | null
    requested_at?: Date | string | null
    approved_at?: Date | string | null
    date_issued?: Date | string | null
    date_due?: Date | string | null
    date_returned?: Date | string | null
    remarks?: string | null
  }

  export type finesCreateManyUsersInput = {
    fine_id?: number
    book_tran_history_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reason?: string | null
    status?: $Enums.fines_status | null
    created_at?: Date | string | null
    paid_at?: Date | string | null
  }

  export type logsCreateManyUsersInput = {
    log_id?: number
    description: string
    created_at?: Date | string | null
  }

  export type notificationsCreateManyUsers_notifications_from_user_idTousersInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    to_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type notificationsCreateManyUsers_notifications_to_user_idTousersInput = {
    notification_id?: number
    type?: $Enums.notifications_type | null
    book_id?: number | null
    from_user_id?: number | null
    tran_id?: number | null
    status?: $Enums.notifications_status | null
    message?: string | null
    created_at?: Date | string | null
    resolved_at?: Date | string | null
  }

  export type user_wishlistCreateManyUsersInput = {
    id?: number
    book_id?: number | null
    created_at?: Date | string | null
  }

  export type book_tranUpdateWithoutUsersInput = {
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    books?: booksUpdateOneWithoutBook_tranNestedInput
    book_tran_history?: book_tran_historyUpdateManyWithoutBook_tranNestedInput
    notifications?: notificationsUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranUncheckedUpdateWithoutUsersInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
    book_tran_history?: book_tran_historyUncheckedUpdateManyWithoutBook_tranNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutBook_tranNestedInput
  }

  export type book_tranUncheckedUpdateManyWithoutUsersInput = {
    tran_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumbook_tran_statusFieldUpdateOperationsInput | $Enums.book_tran_status | null
    record_status?: NullableEnumrecord_statusFieldUpdateOperationsInput | $Enums.record_status | null
  }

  export type book_tran_historyUpdateWithoutUsers_book_tran_history_requested_byTousersInput = {
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    books?: booksUpdateOneWithoutBook_tran_historyNestedInput
    book_tran?: book_tranUpdateOneWithoutBook_tran_historyNestedInput
    users_book_tran_history_approved_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_approved_byTousersNestedInput
    fines?: finesUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateWithoutUsers_book_tran_history_requested_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    fines?: finesUncheckedUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_requested_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type book_tran_historyUpdateWithoutUsers_book_tran_history_approved_byTousersInput = {
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    books?: booksUpdateOneWithoutBook_tran_historyNestedInput
    book_tran?: book_tranUpdateOneWithoutBook_tran_historyNestedInput
    users_book_tran_history_requested_byTousers?: usersUpdateOneWithoutBook_tran_history_book_tran_history_requested_byTousersNestedInput
    fines?: finesUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateWithoutUsers_book_tran_history_approved_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    fines?: finesUncheckedUpdateManyWithoutBook_tran_historyNestedInput
  }

  export type book_tran_historyUncheckedUpdateManyWithoutUsers_book_tran_history_approved_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumbook_tran_history_statusFieldUpdateOperationsInput | $Enums.book_tran_history_status
    requested_by?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_returned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type finesUpdateWithoutUsersInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_tran_history?: book_tran_historyUpdateOneWithoutFinesNestedInput
  }

  export type finesUncheckedUpdateWithoutUsersInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    book_tran_history_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type finesUncheckedUpdateManyWithoutUsersInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    book_tran_history_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumfines_statusFieldUpdateOperationsInput | $Enums.fines_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUpdateWithoutUsersInput = {
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateWithoutUsersInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateManyWithoutUsersInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutUsers_notifications_from_user_idTousersInput = {
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: booksUpdateOneWithoutNotificationsNestedInput
    users_notifications_to_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_to_user_idTousersNestedInput
    book_tran?: book_tranUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutUsers_notifications_from_user_idTousersInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_from_user_idTousersInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutUsers_notifications_to_user_idTousersInput = {
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: booksUpdateOneWithoutNotificationsNestedInput
    users_notifications_from_user_idTousers?: usersUpdateOneWithoutNotifications_notifications_from_user_idTousersNestedInput
    book_tran?: book_tranUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutUsers_notifications_to_user_idTousersInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_to_user_idTousersInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    from_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    tran_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumnotifications_statusFieldUpdateOperationsInput | $Enums.notifications_status | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_wishlistUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: booksUpdateOneWithoutUser_wishlistNestedInput
  }

  export type user_wishlistUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_wishlistUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}