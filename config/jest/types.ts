import type { Config as JestConfig } from "jest";

export namespace JestTypes {
  export type Reporters = JestConfig["reporters"];
  export type Extensions = JestConfig["moduleFileExtensions"];
  export type Transform = JestConfig["transform"];
  export type ModuleNameMapper = RequiredValue<JestConfig["moduleNameMapper"]>;
}

type RequiredValue<T> = NonNullable<T>;
