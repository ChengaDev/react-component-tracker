/// <reference types="react" />
import LogType from "./enums/LogType";
import DevelopmentMode from "./enums/DevelopmentMode";
declare const _default: {
    withPropsTracking: (WrappedComponent: import("react").ComponentType<any>) => (wrapperProps: import("./interfaces/TrackedComponentProps").default) => (props: any) => JSX.Element;
    LogType: typeof LogType;
    DevelopmentMode: typeof DevelopmentMode;
};
export default _default;
