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

`mode` - Current development mode, logging occurs only in DEVELOPMENT mode.

`logType` - The method of logging out the props, table or each prop in a new line.

`trackedProps` - List of props to track. only those props would be tracked.

`ignoredProps` - List of props to ignore in the log. not relevant if `trackedProps` sent as well.

## Logs output

**PropPerLine** -

![basiclog](https://user-images.githubusercontent.com/44297242/123508695-9a1e5c80-d679-11eb-880c-5958df1efba9.PNG)

**Table** -

![table](https://user-images.githubusercontent.com/44297242/123508748-e6699c80-d679-11eb-90cd-7d0ca4853f15.PNG)

## Production mode

If `mode` is set to `Production`, no logs would be shown.
You don't have to remove the calls for `withPropsTracking` before you deploy to production, since `react-component-tracker` not adding any DOM elements or doing any login in production mode.

## License

[MIT](https://choosealicense.com/licenses/mit/)
