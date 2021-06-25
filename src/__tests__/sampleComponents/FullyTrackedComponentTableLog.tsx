import React from "react";
import withPropsTracking from "../../components/TrackedComponent";
import DevelopmentModeEnum from "../../enums/DevelopmentMode";
import LogTypeEnum from "../../enums/LogTypeEnum";
import TestComponentProps from "../sampleInterfaces/TestComponentProps";

const FullyTrackedComponentTableLog = (props: TestComponentProps) => {
    return (
        <div>
            <div>{props.prop1}</div>
            <div>{props.prop2}</div>
        </div>
    );
};

export default withPropsTracking(FullyTrackedComponentTableLog)({
    mode: DevelopmentModeEnum.Development,
    ignoredProps: null,
    trackedProps: [],
    logType: LogTypeEnum.Table
});
