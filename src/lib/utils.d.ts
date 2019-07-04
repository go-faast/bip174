/// <reference types="node" />
import { KeyValue, PsbtGlobal, PsbtInput, PsbtOutput } from './interfaces';
import { Psbt } from './psbt';
export declare function checkForInput(inputs: PsbtInput[], inputIndex: number): PsbtInput;
export declare function checkForOutput(outputs: PsbtOutput[], outputIndex: number): PsbtOutput;
export declare function checkHasKey(checkKeyVal: KeyValue, keyVals: KeyValue[], enumLength: number): void;
export declare function getEnumLength(myenum: any): number;
export declare function getTransactionFromGlobalMap(globalMap: PsbtGlobal): Buffer;
export declare function inputCheckUncleanFinalized(inputIndex: number, input: PsbtInput): void;
export declare function insertTxInGlobalMap(txBuf: Buffer, globalMap: PsbtGlobal): void;
export declare function addInputAttributes<T extends typeof Psbt>(psbt: InstanceType<T>, data: any): void;
export declare function addOutputAttributes<T extends typeof Psbt>(psbt: InstanceType<T>, data: any): void;