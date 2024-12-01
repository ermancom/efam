import { ResultCode } from "./resultCode";

export default class Result {
    isError: boolean;
    value: unknown;
    code : string = ResultCode.C000;
    statusCode = 500;
    message: string;
    
    constructor(isError: boolean) {
        this.isError = isError;
    }

    static Success(value: unknown, code?: string, statusCode?: number): Result {
        const result = new Result(false);
        result.value = value;
        result.code = code ?? ResultCode.C001;
        result.statusCode = statusCode ?? 200;
        return result; 
    }

    static Error(value:unknown, message ="", code?:string, statusCode?: number) : Result {
        const result = new Result(true);
        result.value = value;
        result.code = code ?? ResultCode.C000;
        result.statusCode = statusCode ?? 200;
        result.message = message;
        return result; 
    }
}