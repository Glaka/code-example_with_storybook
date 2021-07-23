import defaultTheme from "../config/theme";
import icons from "../shared/icons";

export enum ASYNC_OPERATION_STATUS {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    FAILED = "FAILED",
    DONE = "DONE",
}


export enum ASYNC_OPERATION_TYPE {
    IMPORT = "IMPORT",
    EXPORT = "EXPORT",
    DOWNLOAD = "DOWNLOAD",
    UPLOAD = "UPLOAD",
    RETAKE = "RETAKE",
}


export type AsyncOperationResult = {
    error?: string;
    failedRows?: number[];
    succeededRows?: number[];
};


export type AdditionalOperationInfo = {
    requirementId?: number;
};


export type DefinedColors = keyof typeof defaultTheme.colors;

export type DefinedIcons = keyof typeof icons;

export type AsyncOperation = {
    requestId: string;
    fileName: string;
    status: ASYNC_OPERATION_STATUS;
    type: ASYNC_OPERATION_TYPE;
    result?: AsyncOperationResult;
    postAction?(): Promise<void> | void;
    file?: File;
    additionalInfo?: AdditionalOperationInfo;
};
