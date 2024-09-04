# Fractal Liquidity Pool

## Abstract

Fractal Liquidity Pool is more generalized liquidiy pool for cross-chain intent with Transferable Account(link). Fractal Liquidity Pool is defined by Liquidity Provider. Liquidity Provider define 3 definitions and 1 condition to design pool  and its pool works as one-side liquidity pool or AMM type pool for cross-chain. Solver can access its pool for solving cross-chain intent with following pool definitions and condition. Liquidity Providers can receive LP fee from pool, Solver can solve more intents without stock and Swapper can swap or bridge more comfirtably with Fractal Liquidity Pool.

## Motivation and Background

I described an idea for cross-chain intent which is Binary Option Pool(link) to avoid monopolization in intent market by huge market maker who has a lot of stock. However, Binary Option Pool is too complex to design even exerienced DeFi user. Our goal in this article is to design more generalized liquidity pool for cross-chain intent without a lot of knowledge about financial engineering to distribute more Solvers and Liquidity Providers.

## Overview

Fractal Liquidity Pool is consists of some categories. The most simple case is Single Pool that is able to express linear curve liqudity. Single pool is defined by Token category and Transferable Accounts. This pool type works for One-side liquidity which is suitable for swapping wrapped token or stablecoin. 

![single=pool.png](/home/yosui262/Downloads/single=pool.png)

Fractal Liquidity Pool can express any type of curves with modifying just 3 definitions and 1 condition. If Liquidity Provider define Double Pool which has two Single Pool, it works as cross-chain AMM type pool. Likewise, in case of Liquidity Provider create more large pool, this pool will be able to define 3 or more tokens pool with one same approach.

![double-pool.png](/home/yosui262/Downloads/double-pool.png)

## Pool Definition and Condition

Liquidity Provider define 3 definition and  1 condition per pool. 

### Definition

Token

Pool Type

Fee

### Condition

Distribution Curve

## Example

## Consideration

- First Liquidity Provider can design more complicated pool with 3 or more tokens like pools in Curve
