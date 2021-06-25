import React from "react";
import withPropsTracking from "../../components/TrackedComponent";
import DevelopmentModeEnum from "../../enums/DevelopmentMode";
import TestComponentProps from "../sampleInterfaces/TestComponentProps";

const SinglePropIgnoredComponent = (props: TestComponentProps) => {
    return (
        <div>
            <div>{props.prop1}</div>
            <div>{props.prop2}</div>
        </div>
    );
};

export default withPropsTracking(SinglePropIgnoredComponent)({
    mode: DevelopmentModeEnum.Development,
    ignoredProps: ["prop1"],
    trackedProps: null
});
