import * as React from "react";
import * as renderer from "react-test-renderer";
import FullyTrackedComponent from "../sampleComponents/FullyTrackedComponent";
import UnTrackedComponentProductionMode from "../sampleComponents/UnTrackedComponentProductionMode";
import UnTrackedComponentNoMode from "../sampleComponents/UnTrackedComponentNoMode";
import SinglePropTrackedComponent from "../sampleComponents/SinglePropTrackedComponent";
import SinglePropIgnoredComponent from "../sampleComponents/SinglePropIgnoredComponent";
import FullyTrackedComponentListLog from "../sampleComponents/FullyTrackedComponentListLog";
import FullyTrackedComponentTableLog from "../sampleComponents/FullyTrackedComponentTableLog";

afterEach(() => {
    jest.clearAllMocks();
});

let consoleLogSpy = jest.spyOn(console, "log");
let consoleGroupSpy = jest.spyOn(console, "group");
let consoleListSpy = jest.spyOn(console, "dir");
let consoleTableSpy = jest.spyOn(console, "table");

describe("TrackedComponent tests", () => {
    describe("Development mode", () => {
        test("Should call console log 2 times", () => {
            // Arrange
            const component = renderer.create(
                <FullyTrackedComponent prop1="chen" prop2="gazit" />
            );

            // Act
            const testInstance = component.root;
            const renderedComponent = testInstance.findByType(
                FullyTrackedComponent
            );

            // Assert
            expect(renderedComponent.props.prop1).toBe("chen");
            expect(renderedComponent.props.prop2).toBe("gazit");

            expect(consoleGroupSpy).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        });

        test("Should log only tracked props", () => {
            // Arrange
            renderer.create(
                <SinglePropTrackedComponent prop1="chen" prop2="gazit" />
            );

            // Assert
            expect(consoleGroupSpy).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        });

        test("Should log only un-ignored props", () => {
            // Arrange
            renderer.create(
                <SinglePropIgnoredComponent prop1="chen" prop2="gazit" />
            );

            // Assert
            expect(consoleGroupSpy).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe("Production mode", () => {
        test("Should not call console log at all", () => {
            // Arrange
            renderer.create(
                <UnTrackedComponentProductionMode prop1="chen" prop2="gazit" />
            );

            // Assert
            expect(consoleGroupSpy).toHaveBeenCalledTimes(0);
            expect(consoleLogSpy).toHaveBeenCalledTimes(0);
        });
    });

    describe("No mode set", () => {
        test("Should not call console log at all", () => {
            // Arrange
            renderer.create(
                <UnTrackedComponentNoMode prop1="chen" prop2="gazit" />
            );

            expect(consoleGroupSpy).toHaveBeenCalledTimes(0);
            expect(consoleLogSpy).toHaveBeenCalledTimes(0);
        });
    });
});
