import React from "react";
import TrackedComponentProps from "../interfaces/TrackedComponentProps";
declare const withPropsTracking: (WrappedComponent: React.ComponentType<any>) => (wrapperProps: TrackedComponentProps) => (props: any) => JSX.Element;
export default withPropsTracking;
