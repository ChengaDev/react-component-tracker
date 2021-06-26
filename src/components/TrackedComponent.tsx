import React from "react";
import TrackedComponentProps from "../interfaces/TrackedComponentProps";
import DevelopmentModeEnum from "../enums/DevelopmentMode";
import LogTypeEnum from "../enums/LogTypeEnum";

const withPropsTracking =
    (WrappedComponent: React.ComponentType<any>) =>
    (wrapperProps: TrackedComponentProps) => {
        const { mode } = wrapperProps;
        const renderWrapperComponent = (props: any) => (
            <WrappedComponent {...props} />
        );

        return (props: any) => {
            // if this is production context - return
            if (
                !mode ||
                mode === DevelopmentModeEnum.Production ||
                process.env["NODE_ENV"] === "production"
            ) {
                return renderWrapperComponent(props);
            }

            // log component name
            console.group(`${WrappedComponent.name} component props:`);

            let propsToLog: any = {};
            if (
                wrapperProps.trackedProps &&
                wrapperProps.trackedProps.length > 0
            ) {
                // logs only tracked props
                wrapperProps.trackedProps.forEach((prop) => {
                    propsToLog[prop] = props[prop];
                });
            } else if (
                wrapperProps.ignoredProps &&
                wrapperProps.ignoredProps.length > 0
            ) {
                // ignore props in ignoredProps
                Object.keys(props).forEach((prop) => {
                    if (!wrapperProps.ignoredProps?.includes(prop)) {
                        propsToLog[prop] = props[prop];
                    }
                });
            } else {
                // if there is not tracked or ignoreed props - log all the props
                propsToLog = { ...props };
            }

            logProps(propsToLog, wrapperProps.logType);
            console.groupEnd();

            return renderWrapperComponent(props);
        };
    };

export default withPropsTracking;

const logProps = (props: any, logType?: LogTypeEnum) => {
    if (logType === LogTypeEnum.Table) {
        console.table(props);
    } else {
        Object.keys(props).forEach((propKey) =>
            console.log(`${propKey}: ${props[propKey]}`)
        );
    }
};
