import React from "react";
import withPropsTracking from "../../components/TrackedComponent";
import TestComponentProps from "../sampleInterfaces/TestComponentProps";

const UnTrackedComponentNoMode = (props: TestComponentProps) => {
    return (
        <div>
            <div>{props.prop1}</div>
            <div>{props.prop2}</div>
        </div>
    );
};

export default withPropsTracking(UnTrackedComponentNoMode)({
    mode: undefined,
    ignoredProps: [""],
    trackedProps: [""]
});
