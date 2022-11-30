# FigSwap SDK Monorepo

This Repository was forked from the SushiSwap SDK, available at https://github.com/sushiswap/sushiswap-sdk.
We forked it in order to develop an interface for FigSwap, which was forked from the SushiSwap interface https://github.com/sushiswap/sushiswap-interface.
However, since our backend is a TraderJoes Fork, we don't require alot of the functionality originally implemented here.
As such it has been (very) scaled down:
- to reduce complexity
- reflect the state of FigSwap as a Demo Product.
Please see the original repo / competitors for inspiration on implementing new products :)

## Prerequisites

- Yarn v3 (If unfamilair consult https://yarnpkg.com/getting-started/install to get started and familiarise yourself)
- Node v14 and above

## Versioning (Canary)

yarn lerna version --no-changelog --no-git-tag-version --preid canary --yes

## Publishing (Canary)

yarn run lerna publish from-package --dist-tag canary --no-git-reset --no-verify-access --preid canary --yes

## Core SDK

### Purpose

Definition of constants and functionality for Chains on which Figswap core products are implemented.

### Status

This is needed for FigSwap Minimal Product. Some Research needed into what needs to be maintained or discarded.

### Testing

```sh 
yarn workspace @figswap/core-sdk test
```

### Build

```sh 
yarn workspace @figswap/core-sdk build
```

## Limit Order SDK

### Purpose

Definition of constants for Chains on which Figswap Limit Ordering is implemented (currently none)

### Status

This is needed for FigSwap Limit order product. No research has been done on this repo or how to implement Limit orders on FEVM.
Good luck :)

### Testing

```sh 
yarn workspace @figswap/limit-order-sdk test
```

### Build

```sh 
yarn workspace @figswap/limit-order-sdk build
```
