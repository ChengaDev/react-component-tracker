import React from "react";
import withPropsTracking from "../../components/TrackedComponent";
import DevelopmentModeEnum from "../../enums/DevelopmentMode";
import TestComponentProps from "../sampleInterfaces/TestComponentProps";

const UnTrackedComponentProductionMode = (props: TestComponentProps) => {
    return (
        <div>
            <div>{props.prop1}</div>
            <div>{props.prop2}</div>
        </div>
    );
};

export default withPropsTracking(UnTrackedComponentProductionMode)({
    mode: DevelopmentModeEnum.Production,
    ignoredProps: [""],
    trackedProps: [""]
});
