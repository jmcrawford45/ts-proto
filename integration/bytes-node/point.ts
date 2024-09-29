// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: point.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BytesValue } from "./google/protobuf/wrappers";

export const protobufPackage = "";

export interface Point {
  data: Buffer;
  dataWrapped: Buffer | undefined;
}

function createBasePoint(): Point {
  return { data: Buffer.alloc(0), dataWrapped: undefined };
}

export const Point: MessageFns<Point> = {
  encode(message: Point, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.dataWrapped !== undefined) {
      BytesValue.encode({ value: message.dataWrapped! }, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Point {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.data = Buffer.from(reader.bytes());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.dataWrapped = BytesValue.decode(reader, reader.uint32()).value;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Point {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      dataWrapped: isSet(object.dataWrapped) ? new Buffer(object.dataWrapped) : undefined,
    };
  },

  toJSON(message: Point): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.dataWrapped !== undefined) {
      obj.dataWrapped = message.dataWrapped;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Point>, I>>(base?: I): Point {
    return Point.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Point>, I>>(object: I): Point {
    const message = createBasePoint();
    message.data = object.data ?? Buffer.alloc(0);
    message.dataWrapped = object.dataWrapped ?? undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
