// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: test.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "";

export interface MapBigInt {
  map?: Map<string, string> | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface MapBigInt_MapEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseMapBigInt(): MapBigInt {
  return {};
}

export const MapBigInt: MessageFns<MapBigInt> = {
  encode(message: MapBigInt, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    (message.map || new Map()).forEach((value, key) => {
      MapBigInt_MapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag).raw(value);
        }
      }
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapBigInt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapBigInt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MapBigInt_MapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            if (message.map === undefined) {
              message.map = new Map();
            }
            message.map!.set(entry1.key, entry1.value);
          }
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      const buf = reader.skip(tag & 7);

      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      const list = message._unknownFields[tag];

      if (list === undefined) {
        message._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): MapBigInt {
    return {
      map: isObject(object.map)
        ? Object.entries(object.map).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
    };
  },

  toJSON(message: MapBigInt): unknown {
    const obj: any = {};
    if (message.map?.size) {
      obj.map = {};
      message.map.forEach((v, k) => {
        obj.map[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapBigInt>, I>>(base?: I): MapBigInt {
    return MapBigInt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapBigInt>, I>>(object: I): MapBigInt {
    const message = createBaseMapBigInt();
    message.map = (object.map === undefined || object.map === null) ? undefined : (() => {
      const m = new Map();
      (object.map as Map<string, string> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.String(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseMapBigInt_MapEntry(): MapBigInt_MapEntry {
  return { key: "0", value: "0" };
}

export const MapBigInt_MapEntry: MessageFns<MapBigInt_MapEntry> = {
  encode(message: MapBigInt_MapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "0") {
      writer.uint32(9).fixed64(message.key);
    }
    if (message.value !== "0") {
      writer.uint32(16).int64(message.value);
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag).raw(value);
        }
      }
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapBigInt_MapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapBigInt_MapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 9) {
            break;
          }

          message.key = reader.fixed64().toString();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int64().toString();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      const buf = reader.skip(tag & 7);

      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      const list = message._unknownFields[tag];

      if (list === undefined) {
        message._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): MapBigInt_MapEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "0",
      value: isSet(object.value) ? globalThis.String(object.value) : "0",
    };
  },

  toJSON(message: MapBigInt_MapEntry): unknown {
    const obj: any = {};
    if (message.key !== "0") {
      obj.key = message.key;
    }
    if (message.value !== "0") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapBigInt_MapEntry>, I>>(base?: I): MapBigInt_MapEntry {
    return MapBigInt_MapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapBigInt_MapEntry>, I>>(object: I): MapBigInt_MapEntry {
    const message = createBaseMapBigInt_MapEntry();
    message.key = object.key ?? "0";
    message.value = object.value ?? "0";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
