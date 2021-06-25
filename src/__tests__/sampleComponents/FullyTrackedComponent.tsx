import React from "react";
import withPropsTracking from "../../components/TrackedComponent";
import DevelopmentModeEnum from "../../enums/DevelopmentMode";
import TestComponentProps from "../sampleInterfaces/TestComponentProps";

const FullyTrackedComponent = (props: TestComponentProps) => {
    return (
        <div>
            <div>{props.prop1}</div>
            <div>{props.prop2}</div>
        </div>
    );
};

export default withPropsTracking(FullyTrackedComponent)({
    mode: DevelopmentModeEnum.Development,
    ignoredProps: null,
    trackedProps: []
});
