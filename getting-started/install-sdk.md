---
icon: camera-polaroid
---

# Install SDK

Once you have set up your project's codebase, you can easily integrate the ExaDrive SDK into your application. The SDK is available as an npm package, providing a seamless installation process.

#### Install using npm

To install the ExaDrive SDK using npm, run the following command in your project directory:

```
// Install using npm

npm install exadrive-sdk
```

OR

#### Install using Yarn

If you prefer using Yarn as your package manager, you can install the ExaDrive SDK with this command:

```
// Install using yarn

yarn install exadrive-sdk
```



### Setting Up the SDK

After installing the package, you need to initialize the ExaDrive SDK in your application. This involves creating an instance of the ExaDrive object using your unique APP\_ID and API\_KEY.

#### Importing the SDK

First, import the ExaDrive class from the installed package:

```
import { ExaDrive } from 'exadrive-sdk';
```



#### Initializing the SDK

Create an instance of the ExaDrive object by providing your APP\_ID and API\_KEY:

```
const exaDrive = new ExaDrive(
      '<Your APP_ID>',
      '<Your API_KEY',
    );
```

Replace `'<Your APP_ID>'` and `'<Your API_KEY>'` with the actual credentials provided to you by ExaDrive.

Once initialized, you can use the `exaDrive` object to access various SDK functionalities throughout your application.
