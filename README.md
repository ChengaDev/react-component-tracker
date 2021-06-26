# react-component-tracker

Easily track components props without using breakpoints, `console.log` manually or `debugger`.

## Installation

```bash
npm install react-component-tracker
```

## Basic Usage

Just wrap the component you wish to track with the `withPropsTracking` method, set mode to `Development` and you got the logs.

```javascript
import React from "react";
import ComponentTracker from "react-component-tracker";

const MyComponent = ({ prop1, prop2 }) => {
    return (
        <div>
            <div>{prop1}</div>
            <div>{prop2}</div>
        </div>
    );
};

export default ComponentTracker.withPropsTracking(MyComponent)({
    mode: ComponentTracker.DevelopmentMode.Development
});
```

## API

`mode` (Enum) - Current development mode, logging occurs only in DEVELOPMENT mode.

`logType` (Enum) - The method of logging out the props, table or each prop in a new line.

`trackedProps` (Array of strings) - List of props to track. only those props would be tracked. Good usage for `trackedProps` is when you have a component with large number of props, and you want to track only few of them.

`ignoredProps` (Array of strings) - List of props to ignore in the log. not relevant if `trackedProps` sent as well. Good usage for `ignoredProps` is when you have a prop which you don't care about, and holds long value, removing it from the log would help you focus on the props that's actually you care about.

## Logs types & output (logType options) -

**PropPerLine** -

![basiclog](https://user-images.githubusercontent.com/44297242/123508695-9a1e5c80-d679-11eb-880c-5958df1efba9.PNG)

**Table** -

![table](https://user-images.githubusercontent.com/44297242/123508748-e6699c80-d679-11eb-90cd-7d0ca4853f15.PNG)

## Production & Development modes

Valid options for `mode` are `PRODUCTION` and `DEVLEOPMENT`.

If `mode` is set to `DEVLEOPMENT` - logs would be printed out.

If `mode` is set to `PRODUCTION`, no logs would be shown.
You don't have to remove the calls for `withPropsTracking` before you deploy to production, since `react-component-tracker` not adding any DOM elements or doing any login in production mode.

**NOTE:** react-component-tracker also considers NODE_ENV to figure out the mode in addition to the user mode setting (if it was set). if NODE_ENV value is `production` - the log won't be printed.

## License

[MIT](https://choosealicense.com/licenses/mit/)
