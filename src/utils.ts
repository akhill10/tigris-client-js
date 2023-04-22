/* eslint-disable @typescript-eslint/no-explicit-any */
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  for (const baseCtor of baseCtors) {
    for (const name of Object.getOwnPropertyNames(baseCtor.prototype)) {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) as any
      );
    }
  }
}
