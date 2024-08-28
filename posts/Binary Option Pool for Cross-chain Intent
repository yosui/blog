# Binary Option Pool for Cross-chain Intent

## Abstract

Mycel enables cross-chain transfers through the use of [Transferable Accounts](#####Annotation). A Transferable Account is a 2-of-2 multisig account on the Mycel network secured by TEE. This account can hold positions, such as a long ETH position and a short ETH position. Likewise, individuals skilled in financial product architecture can design financial products, such as exotic options, within the Mycel ecosystem. Solvers can utilize liquidity from these liquidity providers to resolve intents without holding stock. This facilitates the optimization of the decentralized intents market, including solver trading experience, the decentralization of cross-chain liquidity pools for solvers, and the creation of new financial primitives for financial product architecture and liquidity providers.

## Motivation and Background

The intent market is like a dark forest. The current solver ecosystem relies on solver stock or AMM liquidity in specific DEXes. Especially in cross-chain intents, solvers can't function properly because only a few EVM chains have sufficient liquidity. As a result, Private Market Makers with large stockpiles can monopolize the cross-chain intent market, even in decentralized state chains like Ethereum. A decentralized ecosystem requires a Cross-chain Liquidity Pool for [HFT](#####Annotation) and [CLOB](#####Annotation) to prevent the solver layer from becoming centralized.

## Overview

This solution for cross-chain intent consists of a decentralized binary options market and a solver.

First, the Binary Options Market serves as a platform for creating financial products. It provides this platform to Option Designers who build financial products using Transferable Accounts and users who wish to swap or bridge assets.

Second, Solvers use tokens from the Binary Options Pool instantly to fulfill user intents when they don't have the necessary stock. This market enables the solving of user intents even for solvers without stock, allows liquidity providers to receive APY from exotic options, and facilitates easier swaps between different consensus algorithm chains.

## Transferable Account for Liquidity

Before describing the Binary Options Market, it’s essential to understand the features and constraints of a Transferable Account. The Transferable Account is a core concept of Mycel. It is a specialized account structure designed to facilitate secure cross-chain asset management and transfer. It uses a 2-of-2 multi-signature mechanism, ensuring that both the user and validators collectively control the account. This design enhances security and decentralization, as no single party can unilaterally control the account or its assets.

![image](https://hackmd.io/_uploads/HkdUwakj0.png)

A Transferable Account can hold multiple assets by defining multiple account groups. For example, there could be two Transferable Accounts: one on the Optimism chain and another on the Bitcoin chain. These accounts can be paired as a cross-chain liquidity pool using an AMM curve defined by the Option Manager.

$K = X \text{ tokens in BTC account} \times Y \text{ tokens in Optimism account}$

Alternatively, a single Transferable Account can be used to manage multiple EVM chains, such as USDC on Optimism and USDC on Arbitrum.

$K = X \text{ tokens on Optimism} \times Y \text{ tokens on Arbitrum}$

## Binary Options Market

This chapter describes the Binary Options Market and its components. The Binary Options Market is a decentralized options market using Transferable Accounts. A Binary Option consists of one or more Transferable Accounts holding assets like BTC on Bitcoin and USDC on Optimism, designed by an Option Designer. The Liquidity Provider’s role is to provide liquidity with a single token. The Option Designer defines conditions for using the pool, such as “Solvers can use this liquidity pool if a user sends an intent to swap USDC on Optimism for BTC on Bitcoin.”

![image](https://hackmd.io/_uploads/HyZYu6koC.png)

This approach improves the experience for solvers and swappers by enabling the solving of user intents without requiring stock, especially in cross-chain scenarios.

### Binary Options Pool

The Binary Options Pool is a liquidity pool designed by an Option Designer. The Binary Options Pool can consist of one or more Transferable Accounts, depending on the asset type. For example, if an Option Designer creates a pool with USDC on Optimism and USDC on Arbitrum, the pool will have one Transferable Account because a single Ethereum-compatible account can manage multiple rollups like Optimism, Arbitrum, and Base. On the other hand, if the pool includes BTC on Bitcoin and USDC on Optimism, it will require two Transferable Accounts to collect liquidity, as Bitcoin and Ethereum use different address types.

The simplest use case for a Binary Options Pool in DeFi is the AMM type. Liquidity Providers provide liquidity with tokens A and B, which balance according to the AMM curve (K = A * B). Liquidity Providers earn LP fees when a solver fulfills a swapper’s intent.

### Roles

**Option Designer**

Designs pools with Transferable Accounts, leveraging knowledge of financial engineering and DeFi. The Option Designer sets conditions for Solvers and Liquidity Providers to use the assets in the pool.

**Liquidity Provider**

Provides liquidity under each option’s rules and earns fees from the option.

**Solver**

Solvers can use assets in the Binary Options Pool to fulfill intents according to the pool's conditions.

### Example of Solving an Intent with a Binary Options Pool

1. An Option Designer creates a binary option with BTC on Bitcoin and USDC on Optimism, along with specific conditions.

   **Conditions:**

   | Parameters         | Details                                                                 |
   |--------------------|-------------------------------------------------------------------------|
   | Underlying Asset   | BTC / USDC                                                              |
   | Deposit Asset      | BTC on Bitcoin and USDC on Optimism                                        |
   | Settlement Asset   | Same as deposit                                                         |
   | Trigger            | Binary option with multiple triggers                                    |
   | Expiration         | Rolling 24-hour period                                                  |
   | Payout Mechanism   | APY, based on the total profits generated by arbitrage activities        |
   | Liquidity Provider Fee | 0.1%                                                                 |

2. A Liquidity Provider deposits assets into the account with BTC on Bitcoin and USDC on Optimism).

3. A Solver fulfills a user’s intent, such as “Swap USDC on Optimism to BTC on Bitcoin,” using assets in the pool (Swapper send USDC for Transferable Account, Solver send BTC from Binary option pool)

4. The Solver and Liquidity Provider receive fees from the pool according to the conditions.

![example-bop](https://hackmd.io/_uploads/rySIB8oqC.png)

## Fees

Option Designers can create Binary Options Pools with flexible conditions. Here are two examples.

1. **AMM Curve**

   AMM curve-type pools offer similar UX and fees to contemporary DEXes like Uniswap for Liquidity Providers.

   **Conditions:**

   | Parameters         | Details                                                                 |
   |--------------------|-------------------------------------------------------------------------|
   | Underlying Asset   | BTC on Bitcoin / USDC on Optimism                                       |
   | Deposit Asset      | BTC on Bitcoin and USDC on Optimism                                     |
   | Trigger            | Solver can use assets in the pool with the following K = X * Y          |
   | Liquidity Provider Fee | 0.3% for swapping tokens                                              |
   | Payout Period      | 28 days                                                                 |

   Solvers can fulfill intents with BTC or USDC in the pool without holding stock. Liquidity Providers can earn fees per 28-day period.

   ![example-of-amm-type-pool](https://hackmd.io/_uploads/HJy5Rvi5A.png)

2. **One-side Liquidity**

   Another simple use case is one-side liquidity, similar to a maker’s order in a CLOB.

   **Conditions:**

   | Parameters            | Details                                                         |
   |-----------------------|-----------------------------------------------------------------|
   | Underlying Asset      | USDT on Solana / USDT on Optimism                               |
   | Deposit Asset         | USDT on Solana                                                  |
   | Liquidity Providing Fee | 0.02% (USDT on Optimism)                                       |
   | Trigger               | Receive intent for USDT on Optimism                             |
   | Payment Period        | 28 days                                                         |
   | Minimum Fee           | 0.03%                                                           |

   Solvers can use this pool to fulfill intents involving USDT on Optimism and USDT on Solana. Liquidity Providers can offer liquidity with USDT on Solana and earn fees in USDT on Optimism. One-side liquidity is suitable for wrapped tokens, stablecoins, and tokens with the same utility across multiple chains.

   ![example-of-one-side-liquidity](https://hackmd.io/_uploads/SJp5RPicC.png)

## Considerations

- This approach can handle cross-chain liquidity, but in some cases, it may require time to settle on state and destination chains.
- Option Designers can set more flexible conditions for Liquidity Providers and Solvers.
- Solvers and Liquidity Providers can easily understand AMM curve and one-side liquidity-type pools, but if an Option Designer creates a more complex option pool, it may be more difficult to understand and increase the risk of a rug pull by the Option Designer. This is why I’ve described conditions with zero fees for the Option Designer to reduce this risk.


---
##### Annotation
1. Introduction to Transferablle Account - https://medium.com/@mycel/introduction-to-transferable-account-c764ee982fa4
2. HFT - High Frequency Trading
3. CLOB - Central Limit Order Book