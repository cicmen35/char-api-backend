
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
 * Model character
 * 
 */
export type character = $Result.DefaultSelection<Prisma.$characterPayload>
/**
 * Model nemesis
 * 
 */
export type nemesis = $Result.DefaultSelection<Prisma.$nemesisPayload>
/**
 * Model secret
 * 
 */
export type secret = $Result.DefaultSelection<Prisma.$secretPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const enum_character_gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type enum_character_gender = (typeof enum_character_gender)[keyof typeof enum_character_gender]


export const enum_characters_gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type enum_characters_gender = (typeof enum_characters_gender)[keyof typeof enum_characters_gender]

}

export type enum_character_gender = $Enums.enum_character_gender

export const enum_character_gender: typeof $Enums.enum_character_gender

export type enum_characters_gender = $Enums.enum_characters_gender

export const enum_characters_gender: typeof $Enums.enum_characters_gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Characters
 * const characters = await prisma.character.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Characters
   * const characters = await prisma.character.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.character`: Exposes CRUD operations for the **character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.characterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nemesis`: Exposes CRUD operations for the **nemesis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nemeses
    * const nemeses = await prisma.nemesis.findMany()
    * ```
    */
  get nemesis(): Prisma.nemesisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secret`: Exposes CRUD operations for the **secret** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secrets
    * const secrets = await prisma.secret.findMany()
    * ```
    */
  get secret(): Prisma.secretDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    character: 'character',
    nemesis: 'nemesis',
    secret: 'secret'
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
      modelProps: "character" | "nemesis" | "secret"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      character: {
        payload: Prisma.$characterPayload<ExtArgs>
        fields: Prisma.characterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.characterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.characterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>
          }
          findFirst: {
            args: Prisma.characterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.characterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>
          }
          findMany: {
            args: Prisma.characterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>[]
          }
          create: {
            args: Prisma.characterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>
          }
          createMany: {
            args: Prisma.characterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.characterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>[]
          }
          delete: {
            args: Prisma.characterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>
          }
          update: {
            args: Prisma.characterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>
          }
          deleteMany: {
            args: Prisma.characterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.characterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.characterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>[]
          }
          upsert: {
            args: Prisma.characterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$characterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.characterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.characterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      nemesis: {
        payload: Prisma.$nemesisPayload<ExtArgs>
        fields: Prisma.nemesisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nemesisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nemesisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>
          }
          findFirst: {
            args: Prisma.nemesisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nemesisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>
          }
          findMany: {
            args: Prisma.nemesisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>[]
          }
          create: {
            args: Prisma.nemesisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>
          }
          createMany: {
            args: Prisma.nemesisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nemesisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>[]
          }
          delete: {
            args: Prisma.nemesisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>
          }
          update: {
            args: Prisma.nemesisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>
          }
          deleteMany: {
            args: Prisma.nemesisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nemesisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nemesisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>[]
          }
          upsert: {
            args: Prisma.nemesisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nemesisPayload>
          }
          aggregate: {
            args: Prisma.NemesisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNemesis>
          }
          groupBy: {
            args: Prisma.nemesisGroupByArgs<ExtArgs>
            result: $Utils.Optional<NemesisGroupByOutputType>[]
          }
          count: {
            args: Prisma.nemesisCountArgs<ExtArgs>
            result: $Utils.Optional<NemesisCountAggregateOutputType> | number
          }
        }
      }
      secret: {
        payload: Prisma.$secretPayload<ExtArgs>
        fields: Prisma.secretFieldRefs
        operations: {
          findUnique: {
            args: Prisma.secretFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.secretFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>
          }
          findFirst: {
            args: Prisma.secretFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.secretFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>
          }
          findMany: {
            args: Prisma.secretFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>[]
          }
          create: {
            args: Prisma.secretCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>
          }
          createMany: {
            args: Prisma.secretCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.secretCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>[]
          }
          delete: {
            args: Prisma.secretDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>
          }
          update: {
            args: Prisma.secretUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>
          }
          deleteMany: {
            args: Prisma.secretDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.secretUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.secretUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>[]
          }
          upsert: {
            args: Prisma.secretUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretPayload>
          }
          aggregate: {
            args: Prisma.SecretAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecret>
          }
          groupBy: {
            args: Prisma.secretGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretGroupByOutputType>[]
          }
          count: {
            args: Prisma.secretCountArgs<ExtArgs>
            result: $Utils.Optional<SecretCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    character?: characterOmit
    nemesis?: nemesisOmit
    secret?: secretOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    nemesis: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nemesis?: boolean | CharacterCountOutputTypeCountNemesisArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountNemesisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nemesisWhereInput
  }


  /**
   * Count Type NemesisCountOutputType
   */

  export type NemesisCountOutputType = {
    secret: number
  }

  export type NemesisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secret?: boolean | NemesisCountOutputTypeCountSecretArgs
  }

  // Custom InputTypes
  /**
   * NemesisCountOutputType without action
   */
  export type NemesisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NemesisCountOutputType
     */
    select?: NemesisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NemesisCountOutputType without action
   */
  export type NemesisCountOutputTypeCountSecretArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: secretWhereInput
  }


  /**
   * Models
   */

  /**
   * Model character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    id: number | null
    minimal_distance: Decimal | null
    weight: Decimal | null
    beer_consumption: number | null
  }

  export type CharacterSumAggregateOutputType = {
    id: number | null
    minimal_distance: Decimal | null
    weight: Decimal | null
    beer_consumption: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: number | null
    name: string | null
    gender: string | null
    ability: string | null
    minimal_distance: Decimal | null
    weight: Decimal | null
    born: Date | null
    in_space_since: Date | null
    beer_consumption: number | null
    knows_the_answer: boolean | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gender: string | null
    ability: string | null
    minimal_distance: Decimal | null
    weight: Decimal | null
    born: Date | null
    in_space_since: Date | null
    beer_consumption: number | null
    knows_the_answer: boolean | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    ability: number
    minimal_distance: number
    weight: number
    born: number
    in_space_since: number
    beer_consumption: number
    knows_the_answer: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    id?: true
    minimal_distance?: true
    weight?: true
    beer_consumption?: true
  }

  export type CharacterSumAggregateInputType = {
    id?: true
    minimal_distance?: true
    weight?: true
    beer_consumption?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    ability?: true
    minimal_distance?: true
    weight?: true
    born?: true
    in_space_since?: true
    beer_consumption?: true
    knows_the_answer?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    ability?: true
    minimal_distance?: true
    weight?: true
    born?: true
    in_space_since?: true
    beer_consumption?: true
    knows_the_answer?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    ability?: true
    minimal_distance?: true
    weight?: true
    born?: true
    in_space_since?: true
    beer_consumption?: true
    knows_the_answer?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which character to aggregate.
     */
    where?: characterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: characterOrderByWithRelationInput | characterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: characterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type characterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: characterWhereInput
    orderBy?: characterOrderByWithAggregationInput | characterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: characterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: number
    name: string
    gender: string | null
    ability: string
    minimal_distance: Decimal
    weight: Decimal | null
    born: Date
    in_space_since: Date | null
    beer_consumption: number
    knows_the_answer: boolean
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends characterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type characterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    ability?: boolean
    minimal_distance?: boolean
    weight?: boolean
    born?: boolean
    in_space_since?: boolean
    beer_consumption?: boolean
    knows_the_answer?: boolean
    nemesis?: boolean | character$nemesisArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type characterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    ability?: boolean
    minimal_distance?: boolean
    weight?: boolean
    born?: boolean
    in_space_since?: boolean
    beer_consumption?: boolean
    knows_the_answer?: boolean
  }, ExtArgs["result"]["character"]>

  export type characterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    ability?: boolean
    minimal_distance?: boolean
    weight?: boolean
    born?: boolean
    in_space_since?: boolean
    beer_consumption?: boolean
    knows_the_answer?: boolean
  }, ExtArgs["result"]["character"]>

  export type characterSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    ability?: boolean
    minimal_distance?: boolean
    weight?: boolean
    born?: boolean
    in_space_since?: boolean
    beer_consumption?: boolean
    knows_the_answer?: boolean
  }

  export type characterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "ability" | "minimal_distance" | "weight" | "born" | "in_space_since" | "beer_consumption" | "knows_the_answer", ExtArgs["result"]["character"]>
  export type characterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nemesis?: boolean | character$nemesisArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type characterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type characterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $characterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "character"
    objects: {
      nemesis: Prisma.$nemesisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gender: string | null
      ability: string
      minimal_distance: Prisma.Decimal
      weight: Prisma.Decimal | null
      born: Date
      in_space_since: Date | null
      beer_consumption: number
      knows_the_answer: boolean
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type characterGetPayload<S extends boolean | null | undefined | characterDefaultArgs> = $Result.GetResult<Prisma.$characterPayload, S>

  type characterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<characterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface characterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['character'], meta: { name: 'character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {characterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends characterFindUniqueArgs>(args: SelectSubset<T, characterFindUniqueArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {characterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends characterFindUniqueOrThrowArgs>(args: SelectSubset<T, characterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {characterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends characterFindFirstArgs>(args?: SelectSubset<T, characterFindFirstArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {characterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends characterFindFirstOrThrowArgs>(args?: SelectSubset<T, characterFindFirstOrThrowArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {characterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends characterFindManyArgs>(args?: SelectSubset<T, characterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {characterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends characterCreateArgs>(args: SelectSubset<T, characterCreateArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {characterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends characterCreateManyArgs>(args?: SelectSubset<T, characterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {characterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends characterCreateManyAndReturnArgs>(args?: SelectSubset<T, characterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {characterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends characterDeleteArgs>(args: SelectSubset<T, characterDeleteArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {characterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends characterUpdateArgs>(args: SelectSubset<T, characterUpdateArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {characterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends characterDeleteManyArgs>(args?: SelectSubset<T, characterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {characterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends characterUpdateManyArgs>(args: SelectSubset<T, characterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {characterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends characterUpdateManyAndReturnArgs>(args: SelectSubset<T, characterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {characterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends characterUpsertArgs>(args: SelectSubset<T, characterUpsertArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {characterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends characterCountArgs>(
      args?: Subset<T, characterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {characterGroupByArgs} args - Group by arguments.
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
      T extends characterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: characterGroupByArgs['orderBy'] }
        : { orderBy?: characterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, characterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the character model
   */
  readonly fields: characterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__characterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nemesis<T extends character$nemesisArgs<ExtArgs> = {}>(args?: Subset<T, character$nemesisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the character model
   */
  interface characterFieldRefs {
    readonly id: FieldRef<"character", 'Int'>
    readonly name: FieldRef<"character", 'String'>
    readonly gender: FieldRef<"character", 'String'>
    readonly ability: FieldRef<"character", 'String'>
    readonly minimal_distance: FieldRef<"character", 'Decimal'>
    readonly weight: FieldRef<"character", 'Decimal'>
    readonly born: FieldRef<"character", 'DateTime'>
    readonly in_space_since: FieldRef<"character", 'DateTime'>
    readonly beer_consumption: FieldRef<"character", 'Int'>
    readonly knows_the_answer: FieldRef<"character", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * character findUnique
   */
  export type characterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * Filter, which character to fetch.
     */
    where: characterWhereUniqueInput
  }

  /**
   * character findUniqueOrThrow
   */
  export type characterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * Filter, which character to fetch.
     */
    where: characterWhereUniqueInput
  }

  /**
   * character findFirst
   */
  export type characterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * Filter, which character to fetch.
     */
    where?: characterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: characterOrderByWithRelationInput | characterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for characters.
     */
    cursor?: characterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * character findFirstOrThrow
   */
  export type characterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * Filter, which character to fetch.
     */
    where?: characterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: characterOrderByWithRelationInput | characterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for characters.
     */
    cursor?: characterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * character findMany
   */
  export type characterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * Filter, which characters to fetch.
     */
    where?: characterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: characterOrderByWithRelationInput | characterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing characters.
     */
    cursor?: characterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * character create
   */
  export type characterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * The data needed to create a character.
     */
    data: XOR<characterCreateInput, characterUncheckedCreateInput>
  }

  /**
   * character createMany
   */
  export type characterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many characters.
     */
    data: characterCreateManyInput | characterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * character createManyAndReturn
   */
  export type characterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * The data used to create many characters.
     */
    data: characterCreateManyInput | characterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * character update
   */
  export type characterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * The data needed to update a character.
     */
    data: XOR<characterUpdateInput, characterUncheckedUpdateInput>
    /**
     * Choose, which character to update.
     */
    where: characterWhereUniqueInput
  }

  /**
   * character updateMany
   */
  export type characterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update characters.
     */
    data: XOR<characterUpdateManyMutationInput, characterUncheckedUpdateManyInput>
    /**
     * Filter which characters to update
     */
    where?: characterWhereInput
    /**
     * Limit how many characters to update.
     */
    limit?: number
  }

  /**
   * character updateManyAndReturn
   */
  export type characterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * The data used to update characters.
     */
    data: XOR<characterUpdateManyMutationInput, characterUncheckedUpdateManyInput>
    /**
     * Filter which characters to update
     */
    where?: characterWhereInput
    /**
     * Limit how many characters to update.
     */
    limit?: number
  }

  /**
   * character upsert
   */
  export type characterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * The filter to search for the character to update in case it exists.
     */
    where: characterWhereUniqueInput
    /**
     * In case the character found by the `where` argument doesn't exist, create a new character with this data.
     */
    create: XOR<characterCreateInput, characterUncheckedCreateInput>
    /**
     * In case the character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<characterUpdateInput, characterUncheckedUpdateInput>
  }

  /**
   * character delete
   */
  export type characterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    /**
     * Filter which character to delete.
     */
    where: characterWhereUniqueInput
  }

  /**
   * character deleteMany
   */
  export type characterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which characters to delete
     */
    where?: characterWhereInput
    /**
     * Limit how many characters to delete.
     */
    limit?: number
  }

  /**
   * character.nemesis
   */
  export type character$nemesisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    where?: nemesisWhereInput
    orderBy?: nemesisOrderByWithRelationInput | nemesisOrderByWithRelationInput[]
    cursor?: nemesisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NemesisScalarFieldEnum | NemesisScalarFieldEnum[]
  }

  /**
   * character without action
   */
  export type characterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
  }


  /**
   * Model nemesis
   */

  export type AggregateNemesis = {
    _count: NemesisCountAggregateOutputType | null
    _avg: NemesisAvgAggregateOutputType | null
    _sum: NemesisSumAggregateOutputType | null
    _min: NemesisMinAggregateOutputType | null
    _max: NemesisMaxAggregateOutputType | null
  }

  export type NemesisAvgAggregateOutputType = {
    years: number | null
    id: number | null
    character_id: number | null
  }

  export type NemesisSumAggregateOutputType = {
    years: number | null
    id: number | null
    character_id: number | null
  }

  export type NemesisMinAggregateOutputType = {
    is_alive: boolean | null
    years: number | null
    id: number | null
    character_id: number | null
  }

  export type NemesisMaxAggregateOutputType = {
    is_alive: boolean | null
    years: number | null
    id: number | null
    character_id: number | null
  }

  export type NemesisCountAggregateOutputType = {
    is_alive: number
    years: number
    id: number
    character_id: number
    _all: number
  }


  export type NemesisAvgAggregateInputType = {
    years?: true
    id?: true
    character_id?: true
  }

  export type NemesisSumAggregateInputType = {
    years?: true
    id?: true
    character_id?: true
  }

  export type NemesisMinAggregateInputType = {
    is_alive?: true
    years?: true
    id?: true
    character_id?: true
  }

  export type NemesisMaxAggregateInputType = {
    is_alive?: true
    years?: true
    id?: true
    character_id?: true
  }

  export type NemesisCountAggregateInputType = {
    is_alive?: true
    years?: true
    id?: true
    character_id?: true
    _all?: true
  }

  export type NemesisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nemesis to aggregate.
     */
    where?: nemesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nemeses to fetch.
     */
    orderBy?: nemesisOrderByWithRelationInput | nemesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nemesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nemeses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nemeses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nemeses
    **/
    _count?: true | NemesisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NemesisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NemesisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NemesisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NemesisMaxAggregateInputType
  }

  export type GetNemesisAggregateType<T extends NemesisAggregateArgs> = {
        [P in keyof T & keyof AggregateNemesis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNemesis[P]>
      : GetScalarType<T[P], AggregateNemesis[P]>
  }




  export type nemesisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nemesisWhereInput
    orderBy?: nemesisOrderByWithAggregationInput | nemesisOrderByWithAggregationInput[]
    by: NemesisScalarFieldEnum[] | NemesisScalarFieldEnum
    having?: nemesisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NemesisCountAggregateInputType | true
    _avg?: NemesisAvgAggregateInputType
    _sum?: NemesisSumAggregateInputType
    _min?: NemesisMinAggregateInputType
    _max?: NemesisMaxAggregateInputType
  }

  export type NemesisGroupByOutputType = {
    is_alive: boolean
    years: number | null
    id: number
    character_id: number | null
    _count: NemesisCountAggregateOutputType | null
    _avg: NemesisAvgAggregateOutputType | null
    _sum: NemesisSumAggregateOutputType | null
    _min: NemesisMinAggregateOutputType | null
    _max: NemesisMaxAggregateOutputType | null
  }

  type GetNemesisGroupByPayload<T extends nemesisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NemesisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NemesisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NemesisGroupByOutputType[P]>
            : GetScalarType<T[P], NemesisGroupByOutputType[P]>
        }
      >
    >


  export type nemesisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    is_alive?: boolean
    years?: boolean
    id?: boolean
    character_id?: boolean
    character?: boolean | nemesis$characterArgs<ExtArgs>
    secret?: boolean | nemesis$secretArgs<ExtArgs>
    _count?: boolean | NemesisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nemesis"]>

  export type nemesisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    is_alive?: boolean
    years?: boolean
    id?: boolean
    character_id?: boolean
    character?: boolean | nemesis$characterArgs<ExtArgs>
  }, ExtArgs["result"]["nemesis"]>

  export type nemesisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    is_alive?: boolean
    years?: boolean
    id?: boolean
    character_id?: boolean
    character?: boolean | nemesis$characterArgs<ExtArgs>
  }, ExtArgs["result"]["nemesis"]>

  export type nemesisSelectScalar = {
    is_alive?: boolean
    years?: boolean
    id?: boolean
    character_id?: boolean
  }

  export type nemesisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"is_alive" | "years" | "id" | "character_id", ExtArgs["result"]["nemesis"]>
  export type nemesisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | nemesis$characterArgs<ExtArgs>
    secret?: boolean | nemesis$secretArgs<ExtArgs>
    _count?: boolean | NemesisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type nemesisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | nemesis$characterArgs<ExtArgs>
  }
  export type nemesisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | nemesis$characterArgs<ExtArgs>
  }

  export type $nemesisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nemesis"
    objects: {
      character: Prisma.$characterPayload<ExtArgs> | null
      secret: Prisma.$secretPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      is_alive: boolean
      years: number | null
      id: number
      character_id: number | null
    }, ExtArgs["result"]["nemesis"]>
    composites: {}
  }

  type nemesisGetPayload<S extends boolean | null | undefined | nemesisDefaultArgs> = $Result.GetResult<Prisma.$nemesisPayload, S>

  type nemesisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nemesisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NemesisCountAggregateInputType | true
    }

  export interface nemesisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nemesis'], meta: { name: 'nemesis' } }
    /**
     * Find zero or one Nemesis that matches the filter.
     * @param {nemesisFindUniqueArgs} args - Arguments to find a Nemesis
     * @example
     * // Get one Nemesis
     * const nemesis = await prisma.nemesis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nemesisFindUniqueArgs>(args: SelectSubset<T, nemesisFindUniqueArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nemesis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nemesisFindUniqueOrThrowArgs} args - Arguments to find a Nemesis
     * @example
     * // Get one Nemesis
     * const nemesis = await prisma.nemesis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nemesisFindUniqueOrThrowArgs>(args: SelectSubset<T, nemesisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nemesis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nemesisFindFirstArgs} args - Arguments to find a Nemesis
     * @example
     * // Get one Nemesis
     * const nemesis = await prisma.nemesis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nemesisFindFirstArgs>(args?: SelectSubset<T, nemesisFindFirstArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nemesis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nemesisFindFirstOrThrowArgs} args - Arguments to find a Nemesis
     * @example
     * // Get one Nemesis
     * const nemesis = await prisma.nemesis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nemesisFindFirstOrThrowArgs>(args?: SelectSubset<T, nemesisFindFirstOrThrowArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nemeses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nemesisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nemeses
     * const nemeses = await prisma.nemesis.findMany()
     * 
     * // Get first 10 Nemeses
     * const nemeses = await prisma.nemesis.findMany({ take: 10 })
     * 
     * // Only select the `is_alive`
     * const nemesisWithIs_aliveOnly = await prisma.nemesis.findMany({ select: { is_alive: true } })
     * 
     */
    findMany<T extends nemesisFindManyArgs>(args?: SelectSubset<T, nemesisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nemesis.
     * @param {nemesisCreateArgs} args - Arguments to create a Nemesis.
     * @example
     * // Create one Nemesis
     * const Nemesis = await prisma.nemesis.create({
     *   data: {
     *     // ... data to create a Nemesis
     *   }
     * })
     * 
     */
    create<T extends nemesisCreateArgs>(args: SelectSubset<T, nemesisCreateArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nemeses.
     * @param {nemesisCreateManyArgs} args - Arguments to create many Nemeses.
     * @example
     * // Create many Nemeses
     * const nemesis = await prisma.nemesis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nemesisCreateManyArgs>(args?: SelectSubset<T, nemesisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nemeses and returns the data saved in the database.
     * @param {nemesisCreateManyAndReturnArgs} args - Arguments to create many Nemeses.
     * @example
     * // Create many Nemeses
     * const nemesis = await prisma.nemesis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nemeses and only return the `is_alive`
     * const nemesisWithIs_aliveOnly = await prisma.nemesis.createManyAndReturn({
     *   select: { is_alive: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nemesisCreateManyAndReturnArgs>(args?: SelectSubset<T, nemesisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nemesis.
     * @param {nemesisDeleteArgs} args - Arguments to delete one Nemesis.
     * @example
     * // Delete one Nemesis
     * const Nemesis = await prisma.nemesis.delete({
     *   where: {
     *     // ... filter to delete one Nemesis
     *   }
     * })
     * 
     */
    delete<T extends nemesisDeleteArgs>(args: SelectSubset<T, nemesisDeleteArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nemesis.
     * @param {nemesisUpdateArgs} args - Arguments to update one Nemesis.
     * @example
     * // Update one Nemesis
     * const nemesis = await prisma.nemesis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nemesisUpdateArgs>(args: SelectSubset<T, nemesisUpdateArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nemeses.
     * @param {nemesisDeleteManyArgs} args - Arguments to filter Nemeses to delete.
     * @example
     * // Delete a few Nemeses
     * const { count } = await prisma.nemesis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nemesisDeleteManyArgs>(args?: SelectSubset<T, nemesisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nemeses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nemesisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nemeses
     * const nemesis = await prisma.nemesis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nemesisUpdateManyArgs>(args: SelectSubset<T, nemesisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nemeses and returns the data updated in the database.
     * @param {nemesisUpdateManyAndReturnArgs} args - Arguments to update many Nemeses.
     * @example
     * // Update many Nemeses
     * const nemesis = await prisma.nemesis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nemeses and only return the `is_alive`
     * const nemesisWithIs_aliveOnly = await prisma.nemesis.updateManyAndReturn({
     *   select: { is_alive: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends nemesisUpdateManyAndReturnArgs>(args: SelectSubset<T, nemesisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nemesis.
     * @param {nemesisUpsertArgs} args - Arguments to update or create a Nemesis.
     * @example
     * // Update or create a Nemesis
     * const nemesis = await prisma.nemesis.upsert({
     *   create: {
     *     // ... data to create a Nemesis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nemesis we want to update
     *   }
     * })
     */
    upsert<T extends nemesisUpsertArgs>(args: SelectSubset<T, nemesisUpsertArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nemeses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nemesisCountArgs} args - Arguments to filter Nemeses to count.
     * @example
     * // Count the number of Nemeses
     * const count = await prisma.nemesis.count({
     *   where: {
     *     // ... the filter for the Nemeses we want to count
     *   }
     * })
    **/
    count<T extends nemesisCountArgs>(
      args?: Subset<T, nemesisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NemesisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nemesis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NemesisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NemesisAggregateArgs>(args: Subset<T, NemesisAggregateArgs>): Prisma.PrismaPromise<GetNemesisAggregateType<T>>

    /**
     * Group by Nemesis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nemesisGroupByArgs} args - Group by arguments.
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
      T extends nemesisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nemesisGroupByArgs['orderBy'] }
        : { orderBy?: nemesisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nemesisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNemesisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nemesis model
   */
  readonly fields: nemesisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nemesis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nemesisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends nemesis$characterArgs<ExtArgs> = {}>(args?: Subset<T, nemesis$characterArgs<ExtArgs>>): Prisma__characterClient<$Result.GetResult<Prisma.$characterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    secret<T extends nemesis$secretArgs<ExtArgs> = {}>(args?: Subset<T, nemesis$secretArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the nemesis model
   */
  interface nemesisFieldRefs {
    readonly is_alive: FieldRef<"nemesis", 'Boolean'>
    readonly years: FieldRef<"nemesis", 'Int'>
    readonly id: FieldRef<"nemesis", 'Int'>
    readonly character_id: FieldRef<"nemesis", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * nemesis findUnique
   */
  export type nemesisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * Filter, which nemesis to fetch.
     */
    where: nemesisWhereUniqueInput
  }

  /**
   * nemesis findUniqueOrThrow
   */
  export type nemesisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * Filter, which nemesis to fetch.
     */
    where: nemesisWhereUniqueInput
  }

  /**
   * nemesis findFirst
   */
  export type nemesisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * Filter, which nemesis to fetch.
     */
    where?: nemesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nemeses to fetch.
     */
    orderBy?: nemesisOrderByWithRelationInput | nemesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nemeses.
     */
    cursor?: nemesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nemeses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nemeses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nemeses.
     */
    distinct?: NemesisScalarFieldEnum | NemesisScalarFieldEnum[]
  }

  /**
   * nemesis findFirstOrThrow
   */
  export type nemesisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * Filter, which nemesis to fetch.
     */
    where?: nemesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nemeses to fetch.
     */
    orderBy?: nemesisOrderByWithRelationInput | nemesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nemeses.
     */
    cursor?: nemesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nemeses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nemeses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nemeses.
     */
    distinct?: NemesisScalarFieldEnum | NemesisScalarFieldEnum[]
  }

  /**
   * nemesis findMany
   */
  export type nemesisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * Filter, which nemeses to fetch.
     */
    where?: nemesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nemeses to fetch.
     */
    orderBy?: nemesisOrderByWithRelationInput | nemesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nemeses.
     */
    cursor?: nemesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nemeses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nemeses.
     */
    skip?: number
    distinct?: NemesisScalarFieldEnum | NemesisScalarFieldEnum[]
  }

  /**
   * nemesis create
   */
  export type nemesisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * The data needed to create a nemesis.
     */
    data: XOR<nemesisCreateInput, nemesisUncheckedCreateInput>
  }

  /**
   * nemesis createMany
   */
  export type nemesisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nemeses.
     */
    data: nemesisCreateManyInput | nemesisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nemesis createManyAndReturn
   */
  export type nemesisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * The data used to create many nemeses.
     */
    data: nemesisCreateManyInput | nemesisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * nemesis update
   */
  export type nemesisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * The data needed to update a nemesis.
     */
    data: XOR<nemesisUpdateInput, nemesisUncheckedUpdateInput>
    /**
     * Choose, which nemesis to update.
     */
    where: nemesisWhereUniqueInput
  }

  /**
   * nemesis updateMany
   */
  export type nemesisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nemeses.
     */
    data: XOR<nemesisUpdateManyMutationInput, nemesisUncheckedUpdateManyInput>
    /**
     * Filter which nemeses to update
     */
    where?: nemesisWhereInput
    /**
     * Limit how many nemeses to update.
     */
    limit?: number
  }

  /**
   * nemesis updateManyAndReturn
   */
  export type nemesisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * The data used to update nemeses.
     */
    data: XOR<nemesisUpdateManyMutationInput, nemesisUncheckedUpdateManyInput>
    /**
     * Filter which nemeses to update
     */
    where?: nemesisWhereInput
    /**
     * Limit how many nemeses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * nemesis upsert
   */
  export type nemesisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * The filter to search for the nemesis to update in case it exists.
     */
    where: nemesisWhereUniqueInput
    /**
     * In case the nemesis found by the `where` argument doesn't exist, create a new nemesis with this data.
     */
    create: XOR<nemesisCreateInput, nemesisUncheckedCreateInput>
    /**
     * In case the nemesis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nemesisUpdateInput, nemesisUncheckedUpdateInput>
  }

  /**
   * nemesis delete
   */
  export type nemesisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
    /**
     * Filter which nemesis to delete.
     */
    where: nemesisWhereUniqueInput
  }

  /**
   * nemesis deleteMany
   */
  export type nemesisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nemeses to delete
     */
    where?: nemesisWhereInput
    /**
     * Limit how many nemeses to delete.
     */
    limit?: number
  }

  /**
   * nemesis.character
   */
  export type nemesis$characterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character
     */
    select?: characterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the character
     */
    omit?: characterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: characterInclude<ExtArgs> | null
    where?: characterWhereInput
  }

  /**
   * nemesis.secret
   */
  export type nemesis$secretArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    where?: secretWhereInput
    orderBy?: secretOrderByWithRelationInput | secretOrderByWithRelationInput[]
    cursor?: secretWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecretScalarFieldEnum | SecretScalarFieldEnum[]
  }

  /**
   * nemesis without action
   */
  export type nemesisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nemesis
     */
    select?: nemesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nemesis
     */
    omit?: nemesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nemesisInclude<ExtArgs> | null
  }


  /**
   * Model secret
   */

  export type AggregateSecret = {
    _count: SecretCountAggregateOutputType | null
    _avg: SecretAvgAggregateOutputType | null
    _sum: SecretSumAggregateOutputType | null
    _min: SecretMinAggregateOutputType | null
    _max: SecretMaxAggregateOutputType | null
  }

  export type SecretAvgAggregateOutputType = {
    id: number | null
    secret_code: number | null
    nemesis_id: number | null
  }

  export type SecretSumAggregateOutputType = {
    id: number | null
    secret_code: bigint | null
    nemesis_id: number | null
  }

  export type SecretMinAggregateOutputType = {
    id: number | null
    secret_code: bigint | null
    nemesis_id: number | null
  }

  export type SecretMaxAggregateOutputType = {
    id: number | null
    secret_code: bigint | null
    nemesis_id: number | null
  }

  export type SecretCountAggregateOutputType = {
    id: number
    secret_code: number
    nemesis_id: number
    _all: number
  }


  export type SecretAvgAggregateInputType = {
    id?: true
    secret_code?: true
    nemesis_id?: true
  }

  export type SecretSumAggregateInputType = {
    id?: true
    secret_code?: true
    nemesis_id?: true
  }

  export type SecretMinAggregateInputType = {
    id?: true
    secret_code?: true
    nemesis_id?: true
  }

  export type SecretMaxAggregateInputType = {
    id?: true
    secret_code?: true
    nemesis_id?: true
  }

  export type SecretCountAggregateInputType = {
    id?: true
    secret_code?: true
    nemesis_id?: true
    _all?: true
  }

  export type SecretAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which secret to aggregate.
     */
    where?: secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secrets to fetch.
     */
    orderBy?: secretOrderByWithRelationInput | secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned secrets
    **/
    _count?: true | SecretCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecretAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecretSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretMaxAggregateInputType
  }

  export type GetSecretAggregateType<T extends SecretAggregateArgs> = {
        [P in keyof T & keyof AggregateSecret]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecret[P]>
      : GetScalarType<T[P], AggregateSecret[P]>
  }




  export type secretGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: secretWhereInput
    orderBy?: secretOrderByWithAggregationInput | secretOrderByWithAggregationInput[]
    by: SecretScalarFieldEnum[] | SecretScalarFieldEnum
    having?: secretScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretCountAggregateInputType | true
    _avg?: SecretAvgAggregateInputType
    _sum?: SecretSumAggregateInputType
    _min?: SecretMinAggregateInputType
    _max?: SecretMaxAggregateInputType
  }

  export type SecretGroupByOutputType = {
    id: number
    secret_code: bigint
    nemesis_id: number
    _count: SecretCountAggregateOutputType | null
    _avg: SecretAvgAggregateOutputType | null
    _sum: SecretSumAggregateOutputType | null
    _min: SecretMinAggregateOutputType | null
    _max: SecretMaxAggregateOutputType | null
  }

  type GetSecretGroupByPayload<T extends secretGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretGroupByOutputType[P]>
            : GetScalarType<T[P], SecretGroupByOutputType[P]>
        }
      >
    >


  export type secretSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret_code?: boolean
    nemesis_id?: boolean
    nemesis?: boolean | nemesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secret"]>

  export type secretSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret_code?: boolean
    nemesis_id?: boolean
    nemesis?: boolean | nemesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secret"]>

  export type secretSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret_code?: boolean
    nemesis_id?: boolean
    nemesis?: boolean | nemesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secret"]>

  export type secretSelectScalar = {
    id?: boolean
    secret_code?: boolean
    nemesis_id?: boolean
  }

  export type secretOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "secret_code" | "nemesis_id", ExtArgs["result"]["secret"]>
  export type secretInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nemesis?: boolean | nemesisDefaultArgs<ExtArgs>
  }
  export type secretIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nemesis?: boolean | nemesisDefaultArgs<ExtArgs>
  }
  export type secretIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nemesis?: boolean | nemesisDefaultArgs<ExtArgs>
  }

  export type $secretPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "secret"
    objects: {
      nemesis: Prisma.$nemesisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      secret_code: bigint
      nemesis_id: number
    }, ExtArgs["result"]["secret"]>
    composites: {}
  }

  type secretGetPayload<S extends boolean | null | undefined | secretDefaultArgs> = $Result.GetResult<Prisma.$secretPayload, S>

  type secretCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<secretFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretCountAggregateInputType | true
    }

  export interface secretDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['secret'], meta: { name: 'secret' } }
    /**
     * Find zero or one Secret that matches the filter.
     * @param {secretFindUniqueArgs} args - Arguments to find a Secret
     * @example
     * // Get one Secret
     * const secret = await prisma.secret.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends secretFindUniqueArgs>(args: SelectSubset<T, secretFindUniqueArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secret that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {secretFindUniqueOrThrowArgs} args - Arguments to find a Secret
     * @example
     * // Get one Secret
     * const secret = await prisma.secret.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends secretFindUniqueOrThrowArgs>(args: SelectSubset<T, secretFindUniqueOrThrowArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secret that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretFindFirstArgs} args - Arguments to find a Secret
     * @example
     * // Get one Secret
     * const secret = await prisma.secret.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends secretFindFirstArgs>(args?: SelectSubset<T, secretFindFirstArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secret that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretFindFirstOrThrowArgs} args - Arguments to find a Secret
     * @example
     * // Get one Secret
     * const secret = await prisma.secret.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends secretFindFirstOrThrowArgs>(args?: SelectSubset<T, secretFindFirstOrThrowArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secrets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secrets
     * const secrets = await prisma.secret.findMany()
     * 
     * // Get first 10 Secrets
     * const secrets = await prisma.secret.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretWithIdOnly = await prisma.secret.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends secretFindManyArgs>(args?: SelectSubset<T, secretFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secret.
     * @param {secretCreateArgs} args - Arguments to create a Secret.
     * @example
     * // Create one Secret
     * const Secret = await prisma.secret.create({
     *   data: {
     *     // ... data to create a Secret
     *   }
     * })
     * 
     */
    create<T extends secretCreateArgs>(args: SelectSubset<T, secretCreateArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secrets.
     * @param {secretCreateManyArgs} args - Arguments to create many Secrets.
     * @example
     * // Create many Secrets
     * const secret = await prisma.secret.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends secretCreateManyArgs>(args?: SelectSubset<T, secretCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secrets and returns the data saved in the database.
     * @param {secretCreateManyAndReturnArgs} args - Arguments to create many Secrets.
     * @example
     * // Create many Secrets
     * const secret = await prisma.secret.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secrets and only return the `id`
     * const secretWithIdOnly = await prisma.secret.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends secretCreateManyAndReturnArgs>(args?: SelectSubset<T, secretCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Secret.
     * @param {secretDeleteArgs} args - Arguments to delete one Secret.
     * @example
     * // Delete one Secret
     * const Secret = await prisma.secret.delete({
     *   where: {
     *     // ... filter to delete one Secret
     *   }
     * })
     * 
     */
    delete<T extends secretDeleteArgs>(args: SelectSubset<T, secretDeleteArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secret.
     * @param {secretUpdateArgs} args - Arguments to update one Secret.
     * @example
     * // Update one Secret
     * const secret = await prisma.secret.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends secretUpdateArgs>(args: SelectSubset<T, secretUpdateArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secrets.
     * @param {secretDeleteManyArgs} args - Arguments to filter Secrets to delete.
     * @example
     * // Delete a few Secrets
     * const { count } = await prisma.secret.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends secretDeleteManyArgs>(args?: SelectSubset<T, secretDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secrets
     * const secret = await prisma.secret.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends secretUpdateManyArgs>(args: SelectSubset<T, secretUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secrets and returns the data updated in the database.
     * @param {secretUpdateManyAndReturnArgs} args - Arguments to update many Secrets.
     * @example
     * // Update many Secrets
     * const secret = await prisma.secret.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Secrets and only return the `id`
     * const secretWithIdOnly = await prisma.secret.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends secretUpdateManyAndReturnArgs>(args: SelectSubset<T, secretUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Secret.
     * @param {secretUpsertArgs} args - Arguments to update or create a Secret.
     * @example
     * // Update or create a Secret
     * const secret = await prisma.secret.upsert({
     *   create: {
     *     // ... data to create a Secret
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secret we want to update
     *   }
     * })
     */
    upsert<T extends secretUpsertArgs>(args: SelectSubset<T, secretUpsertArgs<ExtArgs>>): Prisma__secretClient<$Result.GetResult<Prisma.$secretPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Secrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretCountArgs} args - Arguments to filter Secrets to count.
     * @example
     * // Count the number of Secrets
     * const count = await prisma.secret.count({
     *   where: {
     *     // ... the filter for the Secrets we want to count
     *   }
     * })
    **/
    count<T extends secretCountArgs>(
      args?: Subset<T, secretCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretAggregateArgs>(args: Subset<T, SecretAggregateArgs>): Prisma.PrismaPromise<GetSecretAggregateType<T>>

    /**
     * Group by Secret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretGroupByArgs} args - Group by arguments.
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
      T extends secretGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: secretGroupByArgs['orderBy'] }
        : { orderBy?: secretGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, secretGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the secret model
   */
  readonly fields: secretFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for secret.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__secretClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nemesis<T extends nemesisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, nemesisDefaultArgs<ExtArgs>>): Prisma__nemesisClient<$Result.GetResult<Prisma.$nemesisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the secret model
   */
  interface secretFieldRefs {
    readonly id: FieldRef<"secret", 'Int'>
    readonly secret_code: FieldRef<"secret", 'BigInt'>
    readonly nemesis_id: FieldRef<"secret", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * secret findUnique
   */
  export type secretFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * Filter, which secret to fetch.
     */
    where: secretWhereUniqueInput
  }

  /**
   * secret findUniqueOrThrow
   */
  export type secretFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * Filter, which secret to fetch.
     */
    where: secretWhereUniqueInput
  }

  /**
   * secret findFirst
   */
  export type secretFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * Filter, which secret to fetch.
     */
    where?: secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secrets to fetch.
     */
    orderBy?: secretOrderByWithRelationInput | secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for secrets.
     */
    cursor?: secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of secrets.
     */
    distinct?: SecretScalarFieldEnum | SecretScalarFieldEnum[]
  }

  /**
   * secret findFirstOrThrow
   */
  export type secretFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * Filter, which secret to fetch.
     */
    where?: secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secrets to fetch.
     */
    orderBy?: secretOrderByWithRelationInput | secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for secrets.
     */
    cursor?: secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of secrets.
     */
    distinct?: SecretScalarFieldEnum | SecretScalarFieldEnum[]
  }

  /**
   * secret findMany
   */
  export type secretFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * Filter, which secrets to fetch.
     */
    where?: secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secrets to fetch.
     */
    orderBy?: secretOrderByWithRelationInput | secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing secrets.
     */
    cursor?: secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secrets.
     */
    skip?: number
    distinct?: SecretScalarFieldEnum | SecretScalarFieldEnum[]
  }

  /**
   * secret create
   */
  export type secretCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * The data needed to create a secret.
     */
    data: XOR<secretCreateInput, secretUncheckedCreateInput>
  }

  /**
   * secret createMany
   */
  export type secretCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many secrets.
     */
    data: secretCreateManyInput | secretCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * secret createManyAndReturn
   */
  export type secretCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * The data used to create many secrets.
     */
    data: secretCreateManyInput | secretCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * secret update
   */
  export type secretUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * The data needed to update a secret.
     */
    data: XOR<secretUpdateInput, secretUncheckedUpdateInput>
    /**
     * Choose, which secret to update.
     */
    where: secretWhereUniqueInput
  }

  /**
   * secret updateMany
   */
  export type secretUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update secrets.
     */
    data: XOR<secretUpdateManyMutationInput, secretUncheckedUpdateManyInput>
    /**
     * Filter which secrets to update
     */
    where?: secretWhereInput
    /**
     * Limit how many secrets to update.
     */
    limit?: number
  }

  /**
   * secret updateManyAndReturn
   */
  export type secretUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * The data used to update secrets.
     */
    data: XOR<secretUpdateManyMutationInput, secretUncheckedUpdateManyInput>
    /**
     * Filter which secrets to update
     */
    where?: secretWhereInput
    /**
     * Limit how many secrets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * secret upsert
   */
  export type secretUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * The filter to search for the secret to update in case it exists.
     */
    where: secretWhereUniqueInput
    /**
     * In case the secret found by the `where` argument doesn't exist, create a new secret with this data.
     */
    create: XOR<secretCreateInput, secretUncheckedCreateInput>
    /**
     * In case the secret was found with the provided `where` argument, update it with this data.
     */
    update: XOR<secretUpdateInput, secretUncheckedUpdateInput>
  }

  /**
   * secret delete
   */
  export type secretDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
    /**
     * Filter which secret to delete.
     */
    where: secretWhereUniqueInput
  }

  /**
   * secret deleteMany
   */
  export type secretDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which secrets to delete
     */
    where?: secretWhereInput
    /**
     * Limit how many secrets to delete.
     */
    limit?: number
  }

  /**
   * secret without action
   */
  export type secretDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secret
     */
    select?: secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secret
     */
    omit?: secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretInclude<ExtArgs> | null
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


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    ability: 'ability',
    minimal_distance: 'minimal_distance',
    weight: 'weight',
    born: 'born',
    in_space_since: 'in_space_since',
    beer_consumption: 'beer_consumption',
    knows_the_answer: 'knows_the_answer'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const NemesisScalarFieldEnum: {
    is_alive: 'is_alive',
    years: 'years',
    id: 'id',
    character_id: 'character_id'
  };

  export type NemesisScalarFieldEnum = (typeof NemesisScalarFieldEnum)[keyof typeof NemesisScalarFieldEnum]


  export const SecretScalarFieldEnum: {
    id: 'id',
    secret_code: 'secret_code',
    nemesis_id: 'nemesis_id'
  };

  export type SecretScalarFieldEnum = (typeof SecretScalarFieldEnum)[keyof typeof SecretScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type characterWhereInput = {
    AND?: characterWhereInput | characterWhereInput[]
    OR?: characterWhereInput[]
    NOT?: characterWhereInput | characterWhereInput[]
    id?: IntFilter<"character"> | number
    name?: StringFilter<"character"> | string
    gender?: StringNullableFilter<"character"> | string | null
    ability?: StringFilter<"character"> | string
    minimal_distance?: DecimalFilter<"character"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalNullableFilter<"character"> | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFilter<"character"> | Date | string
    in_space_since?: DateTimeNullableFilter<"character"> | Date | string | null
    beer_consumption?: IntFilter<"character"> | number
    knows_the_answer?: BoolFilter<"character"> | boolean
    nemesis?: NemesisListRelationFilter
  }

  export type characterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    ability?: SortOrder
    minimal_distance?: SortOrder
    weight?: SortOrderInput | SortOrder
    born?: SortOrder
    in_space_since?: SortOrderInput | SortOrder
    beer_consumption?: SortOrder
    knows_the_answer?: SortOrder
    nemesis?: nemesisOrderByRelationAggregateInput
  }

  export type characterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: characterWhereInput | characterWhereInput[]
    OR?: characterWhereInput[]
    NOT?: characterWhereInput | characterWhereInput[]
    name?: StringFilter<"character"> | string
    gender?: StringNullableFilter<"character"> | string | null
    ability?: StringFilter<"character"> | string
    minimal_distance?: DecimalFilter<"character"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalNullableFilter<"character"> | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFilter<"character"> | Date | string
    in_space_since?: DateTimeNullableFilter<"character"> | Date | string | null
    beer_consumption?: IntFilter<"character"> | number
    knows_the_answer?: BoolFilter<"character"> | boolean
    nemesis?: NemesisListRelationFilter
  }, "id">

  export type characterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    ability?: SortOrder
    minimal_distance?: SortOrder
    weight?: SortOrderInput | SortOrder
    born?: SortOrder
    in_space_since?: SortOrderInput | SortOrder
    beer_consumption?: SortOrder
    knows_the_answer?: SortOrder
    _count?: characterCountOrderByAggregateInput
    _avg?: characterAvgOrderByAggregateInput
    _max?: characterMaxOrderByAggregateInput
    _min?: characterMinOrderByAggregateInput
    _sum?: characterSumOrderByAggregateInput
  }

  export type characterScalarWhereWithAggregatesInput = {
    AND?: characterScalarWhereWithAggregatesInput | characterScalarWhereWithAggregatesInput[]
    OR?: characterScalarWhereWithAggregatesInput[]
    NOT?: characterScalarWhereWithAggregatesInput | characterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"character"> | number
    name?: StringWithAggregatesFilter<"character"> | string
    gender?: StringNullableWithAggregatesFilter<"character"> | string | null
    ability?: StringWithAggregatesFilter<"character"> | string
    minimal_distance?: DecimalWithAggregatesFilter<"character"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalNullableWithAggregatesFilter<"character"> | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeWithAggregatesFilter<"character"> | Date | string
    in_space_since?: DateTimeNullableWithAggregatesFilter<"character"> | Date | string | null
    beer_consumption?: IntWithAggregatesFilter<"character"> | number
    knows_the_answer?: BoolWithAggregatesFilter<"character"> | boolean
  }

  export type nemesisWhereInput = {
    AND?: nemesisWhereInput | nemesisWhereInput[]
    OR?: nemesisWhereInput[]
    NOT?: nemesisWhereInput | nemesisWhereInput[]
    is_alive?: BoolFilter<"nemesis"> | boolean
    years?: IntNullableFilter<"nemesis"> | number | null
    id?: IntFilter<"nemesis"> | number
    character_id?: IntNullableFilter<"nemesis"> | number | null
    character?: XOR<CharacterNullableScalarRelationFilter, characterWhereInput> | null
    secret?: SecretListRelationFilter
  }

  export type nemesisOrderByWithRelationInput = {
    is_alive?: SortOrder
    years?: SortOrderInput | SortOrder
    id?: SortOrder
    character_id?: SortOrderInput | SortOrder
    character?: characterOrderByWithRelationInput
    secret?: secretOrderByRelationAggregateInput
  }

  export type nemesisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: nemesisWhereInput | nemesisWhereInput[]
    OR?: nemesisWhereInput[]
    NOT?: nemesisWhereInput | nemesisWhereInput[]
    is_alive?: BoolFilter<"nemesis"> | boolean
    years?: IntNullableFilter<"nemesis"> | number | null
    character_id?: IntNullableFilter<"nemesis"> | number | null
    character?: XOR<CharacterNullableScalarRelationFilter, characterWhereInput> | null
    secret?: SecretListRelationFilter
  }, "id">

  export type nemesisOrderByWithAggregationInput = {
    is_alive?: SortOrder
    years?: SortOrderInput | SortOrder
    id?: SortOrder
    character_id?: SortOrderInput | SortOrder
    _count?: nemesisCountOrderByAggregateInput
    _avg?: nemesisAvgOrderByAggregateInput
    _max?: nemesisMaxOrderByAggregateInput
    _min?: nemesisMinOrderByAggregateInput
    _sum?: nemesisSumOrderByAggregateInput
  }

  export type nemesisScalarWhereWithAggregatesInput = {
    AND?: nemesisScalarWhereWithAggregatesInput | nemesisScalarWhereWithAggregatesInput[]
    OR?: nemesisScalarWhereWithAggregatesInput[]
    NOT?: nemesisScalarWhereWithAggregatesInput | nemesisScalarWhereWithAggregatesInput[]
    is_alive?: BoolWithAggregatesFilter<"nemesis"> | boolean
    years?: IntNullableWithAggregatesFilter<"nemesis"> | number | null
    id?: IntWithAggregatesFilter<"nemesis"> | number
    character_id?: IntNullableWithAggregatesFilter<"nemesis"> | number | null
  }

  export type secretWhereInput = {
    AND?: secretWhereInput | secretWhereInput[]
    OR?: secretWhereInput[]
    NOT?: secretWhereInput | secretWhereInput[]
    id?: IntFilter<"secret"> | number
    secret_code?: BigIntFilter<"secret"> | bigint | number
    nemesis_id?: IntFilter<"secret"> | number
    nemesis?: XOR<NemesisScalarRelationFilter, nemesisWhereInput>
  }

  export type secretOrderByWithRelationInput = {
    id?: SortOrder
    secret_code?: SortOrder
    nemesis_id?: SortOrder
    nemesis?: nemesisOrderByWithRelationInput
  }

  export type secretWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: secretWhereInput | secretWhereInput[]
    OR?: secretWhereInput[]
    NOT?: secretWhereInput | secretWhereInput[]
    secret_code?: BigIntFilter<"secret"> | bigint | number
    nemesis_id?: IntFilter<"secret"> | number
    nemesis?: XOR<NemesisScalarRelationFilter, nemesisWhereInput>
  }, "id">

  export type secretOrderByWithAggregationInput = {
    id?: SortOrder
    secret_code?: SortOrder
    nemesis_id?: SortOrder
    _count?: secretCountOrderByAggregateInput
    _avg?: secretAvgOrderByAggregateInput
    _max?: secretMaxOrderByAggregateInput
    _min?: secretMinOrderByAggregateInput
    _sum?: secretSumOrderByAggregateInput
  }

  export type secretScalarWhereWithAggregatesInput = {
    AND?: secretScalarWhereWithAggregatesInput | secretScalarWhereWithAggregatesInput[]
    OR?: secretScalarWhereWithAggregatesInput[]
    NOT?: secretScalarWhereWithAggregatesInput | secretScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"secret"> | number
    secret_code?: BigIntWithAggregatesFilter<"secret"> | bigint | number
    nemesis_id?: IntWithAggregatesFilter<"secret"> | number
  }

  export type characterCreateInput = {
    name: string
    gender?: string | null
    ability: string
    minimal_distance: Decimal | DecimalJsLike | number | string
    weight?: Decimal | DecimalJsLike | number | string | null
    born: Date | string
    in_space_since?: Date | string | null
    beer_consumption: number
    knows_the_answer: boolean
    nemesis?: nemesisCreateNestedManyWithoutCharacterInput
  }

  export type characterUncheckedCreateInput = {
    id?: number
    name: string
    gender?: string | null
    ability: string
    minimal_distance: Decimal | DecimalJsLike | number | string
    weight?: Decimal | DecimalJsLike | number | string | null
    born: Date | string
    in_space_since?: Date | string | null
    beer_consumption: number
    knows_the_answer: boolean
    nemesis?: nemesisUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type characterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ability?: StringFieldUpdateOperationsInput | string
    minimal_distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFieldUpdateOperationsInput | Date | string
    in_space_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beer_consumption?: IntFieldUpdateOperationsInput | number
    knows_the_answer?: BoolFieldUpdateOperationsInput | boolean
    nemesis?: nemesisUpdateManyWithoutCharacterNestedInput
  }

  export type characterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ability?: StringFieldUpdateOperationsInput | string
    minimal_distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFieldUpdateOperationsInput | Date | string
    in_space_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beer_consumption?: IntFieldUpdateOperationsInput | number
    knows_the_answer?: BoolFieldUpdateOperationsInput | boolean
    nemesis?: nemesisUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type characterCreateManyInput = {
    id?: number
    name: string
    gender?: string | null
    ability: string
    minimal_distance: Decimal | DecimalJsLike | number | string
    weight?: Decimal | DecimalJsLike | number | string | null
    born: Date | string
    in_space_since?: Date | string | null
    beer_consumption: number
    knows_the_answer: boolean
  }

  export type characterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ability?: StringFieldUpdateOperationsInput | string
    minimal_distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFieldUpdateOperationsInput | Date | string
    in_space_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beer_consumption?: IntFieldUpdateOperationsInput | number
    knows_the_answer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type characterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ability?: StringFieldUpdateOperationsInput | string
    minimal_distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFieldUpdateOperationsInput | Date | string
    in_space_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beer_consumption?: IntFieldUpdateOperationsInput | number
    knows_the_answer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type nemesisCreateInput = {
    is_alive: boolean
    years?: number | null
    character?: characterCreateNestedOneWithoutNemesisInput
    secret?: secretCreateNestedManyWithoutNemesisInput
  }

  export type nemesisUncheckedCreateInput = {
    is_alive: boolean
    years?: number | null
    id?: number
    character_id?: number | null
    secret?: secretUncheckedCreateNestedManyWithoutNemesisInput
  }

  export type nemesisUpdateInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    character?: characterUpdateOneWithoutNemesisNestedInput
    secret?: secretUpdateManyWithoutNemesisNestedInput
  }

  export type nemesisUncheckedUpdateInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
    character_id?: NullableIntFieldUpdateOperationsInput | number | null
    secret?: secretUncheckedUpdateManyWithoutNemesisNestedInput
  }

  export type nemesisCreateManyInput = {
    is_alive: boolean
    years?: number | null
    id?: number
    character_id?: number | null
  }

  export type nemesisUpdateManyMutationInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type nemesisUncheckedUpdateManyInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
    character_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type secretCreateInput = {
    secret_code: bigint | number
    nemesis: nemesisCreateNestedOneWithoutSecretInput
  }

  export type secretUncheckedCreateInput = {
    id?: number
    secret_code: bigint | number
    nemesis_id: number
  }

  export type secretUpdateInput = {
    secret_code?: BigIntFieldUpdateOperationsInput | bigint | number
    nemesis?: nemesisUpdateOneRequiredWithoutSecretNestedInput
  }

  export type secretUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: BigIntFieldUpdateOperationsInput | bigint | number
    nemesis_id?: IntFieldUpdateOperationsInput | number
  }

  export type secretCreateManyInput = {
    id?: number
    secret_code: bigint | number
    nemesis_id: number
  }

  export type secretUpdateManyMutationInput = {
    secret_code?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type secretUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: BigIntFieldUpdateOperationsInput | bigint | number
    nemesis_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NemesisListRelationFilter = {
    every?: nemesisWhereInput
    some?: nemesisWhereInput
    none?: nemesisWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type nemesisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type characterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    ability?: SortOrder
    minimal_distance?: SortOrder
    weight?: SortOrder
    born?: SortOrder
    in_space_since?: SortOrder
    beer_consumption?: SortOrder
    knows_the_answer?: SortOrder
  }

  export type characterAvgOrderByAggregateInput = {
    id?: SortOrder
    minimal_distance?: SortOrder
    weight?: SortOrder
    beer_consumption?: SortOrder
  }

  export type characterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    ability?: SortOrder
    minimal_distance?: SortOrder
    weight?: SortOrder
    born?: SortOrder
    in_space_since?: SortOrder
    beer_consumption?: SortOrder
    knows_the_answer?: SortOrder
  }

  export type characterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    ability?: SortOrder
    minimal_distance?: SortOrder
    weight?: SortOrder
    born?: SortOrder
    in_space_since?: SortOrder
    beer_consumption?: SortOrder
    knows_the_answer?: SortOrder
  }

  export type characterSumOrderByAggregateInput = {
    id?: SortOrder
    minimal_distance?: SortOrder
    weight?: SortOrder
    beer_consumption?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CharacterNullableScalarRelationFilter = {
    is?: characterWhereInput | null
    isNot?: characterWhereInput | null
  }

  export type SecretListRelationFilter = {
    every?: secretWhereInput
    some?: secretWhereInput
    none?: secretWhereInput
  }

  export type secretOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nemesisCountOrderByAggregateInput = {
    is_alive?: SortOrder
    years?: SortOrder
    id?: SortOrder
    character_id?: SortOrder
  }

  export type nemesisAvgOrderByAggregateInput = {
    years?: SortOrder
    id?: SortOrder
    character_id?: SortOrder
  }

  export type nemesisMaxOrderByAggregateInput = {
    is_alive?: SortOrder
    years?: SortOrder
    id?: SortOrder
    character_id?: SortOrder
  }

  export type nemesisMinOrderByAggregateInput = {
    is_alive?: SortOrder
    years?: SortOrder
    id?: SortOrder
    character_id?: SortOrder
  }

  export type nemesisSumOrderByAggregateInput = {
    years?: SortOrder
    id?: SortOrder
    character_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NemesisScalarRelationFilter = {
    is?: nemesisWhereInput
    isNot?: nemesisWhereInput
  }

  export type secretCountOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    nemesis_id?: SortOrder
  }

  export type secretAvgOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    nemesis_id?: SortOrder
  }

  export type secretMaxOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    nemesis_id?: SortOrder
  }

  export type secretMinOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    nemesis_id?: SortOrder
  }

  export type secretSumOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    nemesis_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type nemesisCreateNestedManyWithoutCharacterInput = {
    create?: XOR<nemesisCreateWithoutCharacterInput, nemesisUncheckedCreateWithoutCharacterInput> | nemesisCreateWithoutCharacterInput[] | nemesisUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: nemesisCreateOrConnectWithoutCharacterInput | nemesisCreateOrConnectWithoutCharacterInput[]
    createMany?: nemesisCreateManyCharacterInputEnvelope
    connect?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
  }

  export type nemesisUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<nemesisCreateWithoutCharacterInput, nemesisUncheckedCreateWithoutCharacterInput> | nemesisCreateWithoutCharacterInput[] | nemesisUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: nemesisCreateOrConnectWithoutCharacterInput | nemesisCreateOrConnectWithoutCharacterInput[]
    createMany?: nemesisCreateManyCharacterInputEnvelope
    connect?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type nemesisUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<nemesisCreateWithoutCharacterInput, nemesisUncheckedCreateWithoutCharacterInput> | nemesisCreateWithoutCharacterInput[] | nemesisUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: nemesisCreateOrConnectWithoutCharacterInput | nemesisCreateOrConnectWithoutCharacterInput[]
    upsert?: nemesisUpsertWithWhereUniqueWithoutCharacterInput | nemesisUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: nemesisCreateManyCharacterInputEnvelope
    set?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    disconnect?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    delete?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    connect?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    update?: nemesisUpdateWithWhereUniqueWithoutCharacterInput | nemesisUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: nemesisUpdateManyWithWhereWithoutCharacterInput | nemesisUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: nemesisScalarWhereInput | nemesisScalarWhereInput[]
  }

  export type nemesisUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<nemesisCreateWithoutCharacterInput, nemesisUncheckedCreateWithoutCharacterInput> | nemesisCreateWithoutCharacterInput[] | nemesisUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: nemesisCreateOrConnectWithoutCharacterInput | nemesisCreateOrConnectWithoutCharacterInput[]
    upsert?: nemesisUpsertWithWhereUniqueWithoutCharacterInput | nemesisUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: nemesisCreateManyCharacterInputEnvelope
    set?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    disconnect?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    delete?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    connect?: nemesisWhereUniqueInput | nemesisWhereUniqueInput[]
    update?: nemesisUpdateWithWhereUniqueWithoutCharacterInput | nemesisUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: nemesisUpdateManyWithWhereWithoutCharacterInput | nemesisUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: nemesisScalarWhereInput | nemesisScalarWhereInput[]
  }

  export type characterCreateNestedOneWithoutNemesisInput = {
    create?: XOR<characterCreateWithoutNemesisInput, characterUncheckedCreateWithoutNemesisInput>
    connectOrCreate?: characterCreateOrConnectWithoutNemesisInput
    connect?: characterWhereUniqueInput
  }

  export type secretCreateNestedManyWithoutNemesisInput = {
    create?: XOR<secretCreateWithoutNemesisInput, secretUncheckedCreateWithoutNemesisInput> | secretCreateWithoutNemesisInput[] | secretUncheckedCreateWithoutNemesisInput[]
    connectOrCreate?: secretCreateOrConnectWithoutNemesisInput | secretCreateOrConnectWithoutNemesisInput[]
    createMany?: secretCreateManyNemesisInputEnvelope
    connect?: secretWhereUniqueInput | secretWhereUniqueInput[]
  }

  export type secretUncheckedCreateNestedManyWithoutNemesisInput = {
    create?: XOR<secretCreateWithoutNemesisInput, secretUncheckedCreateWithoutNemesisInput> | secretCreateWithoutNemesisInput[] | secretUncheckedCreateWithoutNemesisInput[]
    connectOrCreate?: secretCreateOrConnectWithoutNemesisInput | secretCreateOrConnectWithoutNemesisInput[]
    createMany?: secretCreateManyNemesisInputEnvelope
    connect?: secretWhereUniqueInput | secretWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type characterUpdateOneWithoutNemesisNestedInput = {
    create?: XOR<characterCreateWithoutNemesisInput, characterUncheckedCreateWithoutNemesisInput>
    connectOrCreate?: characterCreateOrConnectWithoutNemesisInput
    upsert?: characterUpsertWithoutNemesisInput
    disconnect?: characterWhereInput | boolean
    delete?: characterWhereInput | boolean
    connect?: characterWhereUniqueInput
    update?: XOR<XOR<characterUpdateToOneWithWhereWithoutNemesisInput, characterUpdateWithoutNemesisInput>, characterUncheckedUpdateWithoutNemesisInput>
  }

  export type secretUpdateManyWithoutNemesisNestedInput = {
    create?: XOR<secretCreateWithoutNemesisInput, secretUncheckedCreateWithoutNemesisInput> | secretCreateWithoutNemesisInput[] | secretUncheckedCreateWithoutNemesisInput[]
    connectOrCreate?: secretCreateOrConnectWithoutNemesisInput | secretCreateOrConnectWithoutNemesisInput[]
    upsert?: secretUpsertWithWhereUniqueWithoutNemesisInput | secretUpsertWithWhereUniqueWithoutNemesisInput[]
    createMany?: secretCreateManyNemesisInputEnvelope
    set?: secretWhereUniqueInput | secretWhereUniqueInput[]
    disconnect?: secretWhereUniqueInput | secretWhereUniqueInput[]
    delete?: secretWhereUniqueInput | secretWhereUniqueInput[]
    connect?: secretWhereUniqueInput | secretWhereUniqueInput[]
    update?: secretUpdateWithWhereUniqueWithoutNemesisInput | secretUpdateWithWhereUniqueWithoutNemesisInput[]
    updateMany?: secretUpdateManyWithWhereWithoutNemesisInput | secretUpdateManyWithWhereWithoutNemesisInput[]
    deleteMany?: secretScalarWhereInput | secretScalarWhereInput[]
  }

  export type secretUncheckedUpdateManyWithoutNemesisNestedInput = {
    create?: XOR<secretCreateWithoutNemesisInput, secretUncheckedCreateWithoutNemesisInput> | secretCreateWithoutNemesisInput[] | secretUncheckedCreateWithoutNemesisInput[]
    connectOrCreate?: secretCreateOrConnectWithoutNemesisInput | secretCreateOrConnectWithoutNemesisInput[]
    upsert?: secretUpsertWithWhereUniqueWithoutNemesisInput | secretUpsertWithWhereUniqueWithoutNemesisInput[]
    createMany?: secretCreateManyNemesisInputEnvelope
    set?: secretWhereUniqueInput | secretWhereUniqueInput[]
    disconnect?: secretWhereUniqueInput | secretWhereUniqueInput[]
    delete?: secretWhereUniqueInput | secretWhereUniqueInput[]
    connect?: secretWhereUniqueInput | secretWhereUniqueInput[]
    update?: secretUpdateWithWhereUniqueWithoutNemesisInput | secretUpdateWithWhereUniqueWithoutNemesisInput[]
    updateMany?: secretUpdateManyWithWhereWithoutNemesisInput | secretUpdateManyWithWhereWithoutNemesisInput[]
    deleteMany?: secretScalarWhereInput | secretScalarWhereInput[]
  }

  export type nemesisCreateNestedOneWithoutSecretInput = {
    create?: XOR<nemesisCreateWithoutSecretInput, nemesisUncheckedCreateWithoutSecretInput>
    connectOrCreate?: nemesisCreateOrConnectWithoutSecretInput
    connect?: nemesisWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type nemesisUpdateOneRequiredWithoutSecretNestedInput = {
    create?: XOR<nemesisCreateWithoutSecretInput, nemesisUncheckedCreateWithoutSecretInput>
    connectOrCreate?: nemesisCreateOrConnectWithoutSecretInput
    upsert?: nemesisUpsertWithoutSecretInput
    connect?: nemesisWhereUniqueInput
    update?: XOR<XOR<nemesisUpdateToOneWithWhereWithoutSecretInput, nemesisUpdateWithoutSecretInput>, nemesisUncheckedUpdateWithoutSecretInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type nemesisCreateWithoutCharacterInput = {
    is_alive: boolean
    years?: number | null
    secret?: secretCreateNestedManyWithoutNemesisInput
  }

  export type nemesisUncheckedCreateWithoutCharacterInput = {
    is_alive: boolean
    years?: number | null
    id?: number
    secret?: secretUncheckedCreateNestedManyWithoutNemesisInput
  }

  export type nemesisCreateOrConnectWithoutCharacterInput = {
    where: nemesisWhereUniqueInput
    create: XOR<nemesisCreateWithoutCharacterInput, nemesisUncheckedCreateWithoutCharacterInput>
  }

  export type nemesisCreateManyCharacterInputEnvelope = {
    data: nemesisCreateManyCharacterInput | nemesisCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type nemesisUpsertWithWhereUniqueWithoutCharacterInput = {
    where: nemesisWhereUniqueInput
    update: XOR<nemesisUpdateWithoutCharacterInput, nemesisUncheckedUpdateWithoutCharacterInput>
    create: XOR<nemesisCreateWithoutCharacterInput, nemesisUncheckedCreateWithoutCharacterInput>
  }

  export type nemesisUpdateWithWhereUniqueWithoutCharacterInput = {
    where: nemesisWhereUniqueInput
    data: XOR<nemesisUpdateWithoutCharacterInput, nemesisUncheckedUpdateWithoutCharacterInput>
  }

  export type nemesisUpdateManyWithWhereWithoutCharacterInput = {
    where: nemesisScalarWhereInput
    data: XOR<nemesisUpdateManyMutationInput, nemesisUncheckedUpdateManyWithoutCharacterInput>
  }

  export type nemesisScalarWhereInput = {
    AND?: nemesisScalarWhereInput | nemesisScalarWhereInput[]
    OR?: nemesisScalarWhereInput[]
    NOT?: nemesisScalarWhereInput | nemesisScalarWhereInput[]
    is_alive?: BoolFilter<"nemesis"> | boolean
    years?: IntNullableFilter<"nemesis"> | number | null
    id?: IntFilter<"nemesis"> | number
    character_id?: IntNullableFilter<"nemesis"> | number | null
  }

  export type characterCreateWithoutNemesisInput = {
    name: string
    gender?: string | null
    ability: string
    minimal_distance: Decimal | DecimalJsLike | number | string
    weight?: Decimal | DecimalJsLike | number | string | null
    born: Date | string
    in_space_since?: Date | string | null
    beer_consumption: number
    knows_the_answer: boolean
  }

  export type characterUncheckedCreateWithoutNemesisInput = {
    id?: number
    name: string
    gender?: string | null
    ability: string
    minimal_distance: Decimal | DecimalJsLike | number | string
    weight?: Decimal | DecimalJsLike | number | string | null
    born: Date | string
    in_space_since?: Date | string | null
    beer_consumption: number
    knows_the_answer: boolean
  }

  export type characterCreateOrConnectWithoutNemesisInput = {
    where: characterWhereUniqueInput
    create: XOR<characterCreateWithoutNemesisInput, characterUncheckedCreateWithoutNemesisInput>
  }

  export type secretCreateWithoutNemesisInput = {
    secret_code: bigint | number
  }

  export type secretUncheckedCreateWithoutNemesisInput = {
    id?: number
    secret_code: bigint | number
  }

  export type secretCreateOrConnectWithoutNemesisInput = {
    where: secretWhereUniqueInput
    create: XOR<secretCreateWithoutNemesisInput, secretUncheckedCreateWithoutNemesisInput>
  }

  export type secretCreateManyNemesisInputEnvelope = {
    data: secretCreateManyNemesisInput | secretCreateManyNemesisInput[]
    skipDuplicates?: boolean
  }

  export type characterUpsertWithoutNemesisInput = {
    update: XOR<characterUpdateWithoutNemesisInput, characterUncheckedUpdateWithoutNemesisInput>
    create: XOR<characterCreateWithoutNemesisInput, characterUncheckedCreateWithoutNemesisInput>
    where?: characterWhereInput
  }

  export type characterUpdateToOneWithWhereWithoutNemesisInput = {
    where?: characterWhereInput
    data: XOR<characterUpdateWithoutNemesisInput, characterUncheckedUpdateWithoutNemesisInput>
  }

  export type characterUpdateWithoutNemesisInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ability?: StringFieldUpdateOperationsInput | string
    minimal_distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFieldUpdateOperationsInput | Date | string
    in_space_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beer_consumption?: IntFieldUpdateOperationsInput | number
    knows_the_answer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type characterUncheckedUpdateWithoutNemesisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ability?: StringFieldUpdateOperationsInput | string
    minimal_distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    born?: DateTimeFieldUpdateOperationsInput | Date | string
    in_space_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beer_consumption?: IntFieldUpdateOperationsInput | number
    knows_the_answer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type secretUpsertWithWhereUniqueWithoutNemesisInput = {
    where: secretWhereUniqueInput
    update: XOR<secretUpdateWithoutNemesisInput, secretUncheckedUpdateWithoutNemesisInput>
    create: XOR<secretCreateWithoutNemesisInput, secretUncheckedCreateWithoutNemesisInput>
  }

  export type secretUpdateWithWhereUniqueWithoutNemesisInput = {
    where: secretWhereUniqueInput
    data: XOR<secretUpdateWithoutNemesisInput, secretUncheckedUpdateWithoutNemesisInput>
  }

  export type secretUpdateManyWithWhereWithoutNemesisInput = {
    where: secretScalarWhereInput
    data: XOR<secretUpdateManyMutationInput, secretUncheckedUpdateManyWithoutNemesisInput>
  }

  export type secretScalarWhereInput = {
    AND?: secretScalarWhereInput | secretScalarWhereInput[]
    OR?: secretScalarWhereInput[]
    NOT?: secretScalarWhereInput | secretScalarWhereInput[]
    id?: IntFilter<"secret"> | number
    secret_code?: BigIntFilter<"secret"> | bigint | number
    nemesis_id?: IntFilter<"secret"> | number
  }

  export type nemesisCreateWithoutSecretInput = {
    is_alive: boolean
    years?: number | null
    character?: characterCreateNestedOneWithoutNemesisInput
  }

  export type nemesisUncheckedCreateWithoutSecretInput = {
    is_alive: boolean
    years?: number | null
    id?: number
    character_id?: number | null
  }

  export type nemesisCreateOrConnectWithoutSecretInput = {
    where: nemesisWhereUniqueInput
    create: XOR<nemesisCreateWithoutSecretInput, nemesisUncheckedCreateWithoutSecretInput>
  }

  export type nemesisUpsertWithoutSecretInput = {
    update: XOR<nemesisUpdateWithoutSecretInput, nemesisUncheckedUpdateWithoutSecretInput>
    create: XOR<nemesisCreateWithoutSecretInput, nemesisUncheckedCreateWithoutSecretInput>
    where?: nemesisWhereInput
  }

  export type nemesisUpdateToOneWithWhereWithoutSecretInput = {
    where?: nemesisWhereInput
    data: XOR<nemesisUpdateWithoutSecretInput, nemesisUncheckedUpdateWithoutSecretInput>
  }

  export type nemesisUpdateWithoutSecretInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    character?: characterUpdateOneWithoutNemesisNestedInput
  }

  export type nemesisUncheckedUpdateWithoutSecretInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
    character_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type nemesisCreateManyCharacterInput = {
    is_alive: boolean
    years?: number | null
    id?: number
  }

  export type nemesisUpdateWithoutCharacterInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    secret?: secretUpdateManyWithoutNemesisNestedInput
  }

  export type nemesisUncheckedUpdateWithoutCharacterInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
    secret?: secretUncheckedUpdateManyWithoutNemesisNestedInput
  }

  export type nemesisUncheckedUpdateManyWithoutCharacterInput = {
    is_alive?: BoolFieldUpdateOperationsInput | boolean
    years?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type secretCreateManyNemesisInput = {
    id?: number
    secret_code: bigint | number
  }

  export type secretUpdateWithoutNemesisInput = {
    secret_code?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type secretUncheckedUpdateWithoutNemesisInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type secretUncheckedUpdateManyWithoutNemesisInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: BigIntFieldUpdateOperationsInput | bigint | number
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