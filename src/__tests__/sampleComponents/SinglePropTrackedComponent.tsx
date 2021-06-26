import React from "react";
import withPropsTracking from "../../components/TrackedComponent";
import DevelopmentMode from "../../enums/DevelopmentMode";
import LogType from "../../enums/LogType";
import TestComponentProps from "../sampleInterfaces/TestComponentProps";

const SinglePropTrackedComponent = (props: TestComponentProps) => {
    return (
        <div>
            <div>{props.prop1}</div>
            <div>{props.prop2}</div>
        </div>
    );
};

export default withPropsTracking(SinglePropTrackedComponent)({
    mode: DevelopmentMode.Development,
    ignoredProps: null,
    trackedProps: ["prop1"],
    logType: LogType.PropPerLine
});
