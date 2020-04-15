# react-simplified-ui

## 必須

- sass

## 使い方

`App.tsx`

```tsx
import React from "react";
import "./App.scss";
import { Button } from "react-simplified-ui";

function App() {
  return (
    <div className="App">
      <Button>Test Button</Button>
    </div>
  );
}

export default App;
```

`App.scss`

```tsx
@import "~react-simplified-ui/build/all";
```

## カスタマイズ

`_variables.scss`

```scss
// base-color
$base-color: #ffffff;
$main-color-dark: #00796b;
$main-color: #009688;
$main-color-light: #b2dfdb;
$accent-color: #ff4081;
```

`App.scss`

```scss
@import "./variables";
@import "~react-simplified-ui/build/all";
```
