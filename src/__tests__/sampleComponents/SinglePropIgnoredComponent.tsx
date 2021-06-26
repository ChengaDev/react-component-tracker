import React from "react";
import withPropsTracking from "../../components/TrackedComponent";
import DevelopmentMode from "../../enums/DevelopmentMode";
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
    mode: DevelopmentMode.Development,
    ignoredProps: ["prop1"],
    trackedProps: null
});
