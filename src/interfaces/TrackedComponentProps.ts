import DevelopmentModeEnum from "../enums/DevelopmentMode";
import LogTypeEnum from "../enums/LogTypeEnum";

interface TrackedComponentProps {
    mode?: DevelopmentModeEnum;
    trackedProps?: Array<string> | null;
    ignoredProps?: Array<string> | null;
    logType?: LogTypeEnum;
}

export default TrackedComponentProps;
