## Deno-Polkadot.js Starter Template

### Getting Started

Deno template for Polkadot JS API

1. [Install Deno](https://docs.deno.com/runtime/manual/getting_started/installation)

2. Run the examples

- Deno polkadot.js standalone template

```
 deno run -A examples/listen-new-blocks.ts 
```

-  template with deno.json configuration
```
deno task start
```

Read more about [Deno Configuration File](#deno-configuration)

This starter template leverages Deno's cutting-edge features for a seamless and secure development experience with the Polkadot.js API.

### Key Benefits

- **Enhanced Security**: With Deno's secure default settings, develop your Polkadot.js applications in a sandboxed environment, ensuring a higher level of security out-of-the-box.

- **TypeScript Ready**: Enjoy the benefits of TypeScript in your blockchain applications. Deno's native TypeScript support aligns perfectly with Polkadot.js, allowing for type-safe, robust development without additional setup.

- **Simplified Dependency Management**: Import your dependencies directly via URLs, keeping your Polkadot.js application up-to-date and reducing the complexity of dependency management.

- **Reliable Standard Library**: Take advantage of Deno's comprehensive standard library for additional functionality without the need for external packages.

### Navigating the Deno Polkadot.js Package Documentation

The [Deno Polkadot.js package documentation](https://deno.land/x/polkadot@0.2.45/mod.ts) provides comprehensive information on how to utilize the package effectively. Here's how you can navigate through the documentation to find what you need:

#### Accessing the Documentation:

Main Documentation Page: Visit the [Deno Polkadot.js Package page](https://deno.land/x/polkadot@0.2.45). This is your starting point and contains general information about the package version, import URLs, and basic usage.

#### Exploring Modules:

- Modules Overview: The package is structured into various modules, each serving a specific purpose. To explore these modules, look for the 'Modules' section in the documentation. Here, you will find links to different modules like api, util, types, etc.

- Specific Module Documentation: Click on a module to dive into detailed documentation. For example, selecting the api module will take you to a page with information about classes, interfaces, and functions available in that module.

#### Understanding Types and Interfaces:

- Types Documentation: For in-depth details on the types and interfaces used, look for the 'Types' section in the module documentation. This section provides information on the data structures and interfaces, which is crucial for understanding how to interact with the API.

#### Staying Updated:

- Versioning: The package version is specified in the URL (e.g., 0.2.45). To view documentation for a different version, adjust the version number in the URL accordingly.

### Migrate from Node.js compatible Polkadot JS API to Deno

```
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function fetchValidatorInfo(validatorAddress) {
    // Connect to the Polkadot node
    const api = await ApiPromise.create({
        provider: new WsProvider('wss://polkadot-rpc.dwellir.com')
    });
```

#### Remove Node.js-style require Statements:

In Deno, you will use ES6 import statements instead of the require function used in Node.js.

#### Import the Polkadot.js API from the Deno Third-Party Modules:

In Deno, modules are imported directly via URLs. You need to import the ApiPromise and WsProvider from the Deno Polkadot.js package URL.

```
// Import ApiPromise and WsProvider from the Deno Polkadot.js API
import { ApiPromise, WsProvider } from 'https://deno.land/x/polkadot@0.2.45/api/mod.ts';

async function main(validatorAddress) {
    // Connect to the Polkadot node
    const api = await ApiPromise.create({
        provider: new WsProvider('wss://polkadot-rpc.dwellir.com')
    });

    // Additional logic goes here
    // ...
}
```

Deno Polkadot.js URLs can be found in the [Deno Polkadot.js package documentation](https://deno.land/x/polkadot@0.2.45/mod.ts)



### Deno configuration

#### deno.json
[Deno Configuration File](https://docs.deno.com/runtime/manual/getting_started/configuration_file) supports npm style package.json files. The deno.json file is used to specify the entry point of the application and the permissions required by the application.

