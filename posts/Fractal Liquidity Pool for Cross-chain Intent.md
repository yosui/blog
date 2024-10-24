# Fractal Liquidity Pool

## Abstract

Fractal Liquidity Pool is more generalized liquidiy pool for cross-chain intent with Transferable Account(link). Fractal Liquidity Pool is defined by Liquidity Provider. Liquidity Provider define 3 definitions and 1 condition to design pool  and its pool works as one-side liquidity pool or AMM type pool for cross-chain. Solver can access its pool for solving cross-chain intent with following pool definitions and condition. Liquidity Providers can receive LP fee from pool, Solver can solve more intents without stock and Swapper can swap or bridge more comfirtably with Fractal Liquidity Pool.

## Motivation and Background

I described an idea for cross-chain intent which is Binary Option Pool(link) to avoid monopolization in intent market by huge market maker who has a lot of stock. However, Binary Option Pool is too complex to design even exerienced DeFi user. Our goal in this article is to design more generalized liquidity pool for cross-chain intent without a lot of knowledge about financial engineering to distribute more Solvers and Liquidity Providers.

## Overview

Fractal Liquidity Pool is consists of 2 sets, Token set and Token pair set. Liquidity provider can design liquidity pool with TA using this definition. The most simple case is one Token pair set that is able to express linear curve liqudity. This pool type works for One-side liquidity which is suitable for swapping wrapped token or stablecoin. 

![single=pool.png](/home/yosui262/Downloads/single=pool.png)

Fractal Liquidity Pool can design any type of curves with modifying just 3 definitions and 2 conditions. If Liquidity Provider define two token pair set Pool, it works as cross-chain AMM type pool. Likewise, in case of Liquidity Provider create more large pool, this pool will be able to define 3 or more tokens pool with one same approach.

![double-pool.png](/home/yosui262/Downloads/double-pool.png)

## Pool Definition and Condition
Fractal Liquidity Pool is defined by Token set, Token Pair set and relation between them. 

Token set has 3 informations
1. Token(ex. a, b, c)
2. Amount(ex. 0.05a token, 10b token)
3. Contract(ex. 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2, EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c)
4. Chain(ex. Bitcoin, Ethereum)

Token Pair set has 2 informations
1. Price curve(ex. k=a+b, k=ab)
2. Distribution curve(ex. y=logax)

Price curve: 
    x: amount of a token
    y: amount of b token
Distibution curve:
    x: amount of token
    y: amount of transferable account

Liquidity Provider define 3 definition and  2 condition per pool. 

## Relationship to Transferable Account
Liquidity in Fractal liquidity pool is set of Transferable Account. Amount of Transferable Account and token amount in each of Transferable Account are defined by Price curve and Distribution curve because enable them to enhance Solvers and Liquidity Providers opportuinity.

## Usability
Fractal liquidity pool provide more opportunity for solver and liquidity provider. Solver can access assets in Fractal Liquidity Pool to solve swapper's intent without stock. 

If demand of bridging between token a on chain x and token a on chain y increase immidiatly, solver notice it and create pool to collect liquidity. And Liquidity Provider found the pool which is high APY due to temporaly high demand and provide liquidity for it. Solver can access more opportunity of solving cross-chain intent with assets in Fractal Liquidity Pool and Liquidity Providers can get more active strategy as maker in decentralized ecosystem. Swapper swap their assets with the usual way.

## Example





## Consideration

- First Liquidity Provider can design more complicated pool with 3 or more tokens like pools in Curve
