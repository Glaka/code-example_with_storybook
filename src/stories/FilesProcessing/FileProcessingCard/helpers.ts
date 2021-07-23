import { ASYNC_OPERATION_STATUS, ASYNC_OPERATION_TYPE, DefinedIcons } from "../../../types/index";

export const FILE_PROCESSING_FILE_NAME_LENGTH = 38;

export const formatFileName = (initialFileName: string, substrLength: number): string => {
  const fileFormat = initialFileName.split(".").pop();
  const replaceValue = fileFormat ? `.${fileFormat}` : "";
  const shortedFileName = initialFileName.replace(replaceValue, "").substr(0, substrLength);
  const separator = shortedFileName.length > 37 ? "..." : ".";

  return `${shortedFileName}${separator}${fileFormat}`;
};

export const getIconByOperationStatus = (status: ASYNC_OPERATION_STATUS): DefinedIcons => {
  switch (status) {
    case ASYNC_OPERATION_STATUS.FAILED:
      return "uploadFailed";
    case ASYNC_OPERATION_STATUS.DONE:
      return "uploaded";
    case ASYNC_OPERATION_STATUS.PENDING:
    case ASYNC_OPERATION_STATUS.IN_PROGRESS:
      return "spinner";
    default:
      return "files";
  }
};

export const getHelpTextByOperationType = ({
  status,
  type,
}: {
  status: ASYNC_OPERATION_STATUS;
  type: ASYNC_OPERATION_TYPE;
}): string => {
  let helpText;

  switch (type) {
    case ASYNC_OPERATION_TYPE.DOWNLOAD:
      helpText = "Download";
      break;
    case ASYNC_OPERATION_TYPE.UPLOAD:
      helpText = "Upload";
      break;
    case ASYNC_OPERATION_TYPE.IMPORT:
      helpText = "Import";
      break;
    case ASYNC_OPERATION_TYPE.EXPORT:
      helpText = "Export";
      break;
    default:
      helpText = "";
      break;
  }

  switch (status) {
    case ASYNC_OPERATION_STATUS.FAILED:
      return "Something went wrong";
    case ASYNC_OPERATION_STATUS.DONE:
      return `${helpText}ed`;
    case ASYNC_OPERATION_STATUS.PENDING:
    case ASYNC_OPERATION_STATUS.IN_PROGRESS:
      return `${helpText}ing...`;
    default:
      return "Something went wrong";
  }
};
