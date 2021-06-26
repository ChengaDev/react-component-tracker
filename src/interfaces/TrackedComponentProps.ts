import DevelopmentMode from "../enums/DevelopmentMode";
import LogType from "../enums/LogType";

interface TrackedComponentProps {
    mode?: DevelopmentMode;
    trackedProps?: Array<string> | null;
    ignoredProps?: Array<string> | null;
    logType?: LogType;
}

export default TrackedComponentProps;
