// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, H256, Perbill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchDispatchInfo, FrameSupportDispatchPostDispatchInfo, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, KusamaRuntimeProxyType, PalletConvictionVotingTally, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhasePhase, PalletImOnlineSr25519AppSr25519Public, PalletMultisigTimepoint, PalletNominationPoolsCommissionChangeRate, PalletNominationPoolsPoolState, PalletRankedCollectiveTally, PalletRankedCollectiveVoteRecord, PalletStakingExposure, PalletStakingForcing, PalletStakingValidatorPrefs, PolkadotParachainPrimitivesHrmpChannelId, PolkadotPrimitivesV4CandidateReceipt, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, SpConsensusGrandpaAppPublic, SpNposElectionsElectionScore, SpRuntimeDispatchError, SpRuntimeDispatchErrorWithPostInfo, SpWeightsWeightV2Weight, XcmV3MultiLocation, XcmV3MultiassetMultiAssets, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    auctions: {
      /**
       * An auction ended. All funds become unreserved.
       **/
      AuctionClosed: AugmentedEvent<ApiType, [auctionIndex: u32], { auctionIndex: u32 }>;
      /**
       * An auction started. Provides its index and the block number where it will begin to
       * close and the first lease period of the quadruplet that is auctioned.
       **/
      AuctionStarted: AugmentedEvent<ApiType, [auctionIndex: u32, leasePeriod: u32, ending: u32], { auctionIndex: u32, leasePeriod: u32, ending: u32 }>;
      /**
       * A new bid has been accepted as the current winner.
       **/
      BidAccepted: AugmentedEvent<ApiType, [bidder: AccountId32, paraId: u32, amount: u128, firstSlot: u32, lastSlot: u32], { bidder: AccountId32, paraId: u32, amount: u128, firstSlot: u32, lastSlot: u32 }>;
      /**
       * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
       * but no parachain slot has been leased.
       **/
      ReserveConfiscated: AugmentedEvent<ApiType, [paraId: u32, leaser: AccountId32, amount: u128], { paraId: u32, leaser: AccountId32, amount: u128 }>;
      /**
       * Funds were reserved for a winning bid. First balance is the extra amount reserved.
       * Second is the total.
       **/
      Reserved: AugmentedEvent<ApiType, [bidder: AccountId32, extraReserved: u128, totalAmount: u128], { bidder: AccountId32, extraReserved: u128, totalAmount: u128 }>;
      /**
       * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
       **/
      Unreserved: AugmentedEvent<ApiType, [bidder: AccountId32, amount: u128], { bidder: AccountId32, amount: u128 }>;
      /**
       * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
       **/
      WinningOffset: AugmentedEvent<ApiType, [auctionIndex: u32, blockNumber: u32], { auctionIndex: u32, blockNumber: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    childBounties: {
      /**
       * A child-bounty is added.
       **/
      Added: AugmentedEvent<ApiType, [index: u32, childIndex: u32], { index: u32, childIndex: u32 }>;
      /**
       * A child-bounty is awarded to a beneficiary.
       **/
      Awarded: AugmentedEvent<ApiType, [index: u32, childIndex: u32, beneficiary: AccountId32], { index: u32, childIndex: u32, beneficiary: AccountId32 }>;
      /**
       * A child-bounty is cancelled.
       **/
      Canceled: AugmentedEvent<ApiType, [index: u32, childIndex: u32], { index: u32, childIndex: u32 }>;
      /**
       * A child-bounty is claimed by beneficiary.
       **/
      Claimed: AugmentedEvent<ApiType, [index: u32, childIndex: u32, payout: u128, beneficiary: AccountId32], { index: u32, childIndex: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    claims: {
      /**
       * Someone claimed some DOTs.
       **/
      Claimed: AugmentedEvent<ApiType, [who: AccountId32, ethereumAddress: EthereumAddress, amount: u128], { who: AccountId32, ethereumAddress: EthereumAddress, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    convictionVoting: {
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crowdloan: {
      /**
       * A parachain has been moved to `NewRaise`
       **/
      AddedToNewRaise: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
      /**
       * All loans in a fund have been refunded.
       **/
      AllRefunded: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
      /**
       * Contributed to a crowd sale.
       **/
      Contributed: AugmentedEvent<ApiType, [who: AccountId32, fundIndex: u32, amount: u128], { who: AccountId32, fundIndex: u32, amount: u128 }>;
      /**
       * Create a new crowdloaning campaign.
       **/
      Created: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
      /**
       * Fund is dissolved.
       **/
      Dissolved: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
      /**
       * The configuration to a crowdloan has been edited.
       **/
      Edited: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
      /**
       * The result of trying to submit a new bid to the Slots pallet.
       **/
      HandleBidResult: AugmentedEvent<ApiType, [paraId: u32, result: Result<Null, SpRuntimeDispatchError>], { paraId: u32, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A memo has been updated.
       **/
      MemoUpdated: AugmentedEvent<ApiType, [who: AccountId32, paraId: u32, memo: Bytes], { who: AccountId32, paraId: u32, memo: Bytes }>;
      /**
       * The loans in a fund have been partially dissolved, i.e. there are some left
       * over child keys that still need to be killed.
       **/
      PartiallyRefunded: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
      /**
       * Withdrew full balance of a contributor.
       **/
      Withdrew: AugmentedEvent<ApiType, [who: AccountId32, fundIndex: u32, amount: u128], { who: AccountId32, fundIndex: u32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * An election failed.
       * 
       * Not much can be said about which computes failed in the process.
       **/
      ElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * The election has been finalized, with the given computation and score.
       **/
      ElectionFinalized: AugmentedEvent<ApiType, [compute: PalletElectionProviderMultiPhaseElectionCompute, score: SpNposElectionsElectionScore], { compute: PalletElectionProviderMultiPhaseElectionCompute, score: SpNposElectionsElectionScore }>;
      /**
       * There was a phase transition in a given round.
       **/
      PhaseTransitioned: AugmentedEvent<ApiType, [from: PalletElectionProviderMultiPhasePhase, to: PalletElectionProviderMultiPhasePhase, round: u32], { from: PalletElectionProviderMultiPhasePhase, to: PalletElectionProviderMultiPhasePhase, round: u32 }>;
      /**
       * An account has been rewarded for their signed submission being finalized.
       **/
      Rewarded: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * An account has been slashed for submitting an invalid signed submission.
       **/
      Slashed: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * A solution was stored with the given compute.
       * 
       * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
       * the stored solution was submited in the signed phase by a miner with the `AccountId`.
       * Otherwise, the solution was stored either during the unsigned phase or by
       * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
       * room for this one.
       **/
      SolutionStored: AugmentedEvent<ApiType, [compute: PalletElectionProviderMultiPhaseElectionCompute, origin: Option<AccountId32>, prevEjected: bool], { compute: PalletElectionProviderMultiPhaseElectionCompute, origin: Option<AccountId32>, prevEjected: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    fastUnstake: {
      /**
       * A batch was partially checked for the given eras, but the process did not finish.
       **/
      BatchChecked: AugmentedEvent<ApiType, [eras: Vec<u32>], { eras: Vec<u32> }>;
      /**
       * A batch of a given size was terminated.
       * 
       * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
       * of the batch. A new batch will be created upon next block.
       **/
      BatchFinished: AugmentedEvent<ApiType, [size_: u32], { size_: u32 }>;
      /**
       * An internal error happened. Operations will be paused now.
       **/
      InternalError: AugmentedEvent<ApiType, []>;
      /**
       * A staker was slashed for requesting fast-unstake whilst being exposed.
       **/
      Slashed: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A staker was unstaked.
       **/
      Unstaked: AugmentedEvent<ApiType, [stash: AccountId32, result: Result<Null, SpRuntimeDispatchError>], { stash: AccountId32, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    fellowshipCollective: {
      /**
       * A member `who` has been added.
       **/
      MemberAdded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * The member `who` of given `rank` has been removed from the collective.
       **/
      MemberRemoved: AugmentedEvent<ApiType, [who: AccountId32, rank: u16], { who: AccountId32, rank: u16 }>;
      /**
       * The member `who`se rank has been changed to the given `rank`.
       **/
      RankChanged: AugmentedEvent<ApiType, [who: AccountId32, rank: u16], { who: AccountId32, rank: u16 }>;
      /**
       * The member `who` has voted for the `poll` with the given `vote` leading to an updated
       * `tally`.
       **/
      Voted: AugmentedEvent<ApiType, [who: AccountId32, poll: u32, vote: PalletRankedCollectiveVoteRecord, tally: PalletRankedCollectiveTally], { who: AccountId32, poll: u32, vote: PalletRankedCollectiveVoteRecord, tally: PalletRankedCollectiveTally }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    fellowshipReferenda: {
      /**
       * A referendum has been approved and its proposal has been scheduled.
       **/
      Approved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      ConfirmAborted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has ended its confirmation phase and is ready for approval.
       **/
      Confirmed: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      ConfirmStarted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The decision deposit has been placed.
       **/
      DecisionDepositPlaced: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * The decision deposit has been refunded.
       **/
      DecisionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has moved into the deciding phase.
       **/
      DecisionStarted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletRankedCollectiveTally], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletRankedCollectiveTally }>;
      /**
       * A deposit has been slashaed.
       **/
      DepositSlashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been killed.
       **/
      Killed: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      /**
       * Metadata for a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * Metadata for a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      Rejected: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      /**
       * The submission deposit has been refunded.
       **/
      SubmissionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been submitted.
       **/
      Submitted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded }>;
      /**
       * A referendum has been timed out without being decided.
       **/
      TimedOut: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    hrmp: {
      /**
       * HRMP channel closed. `[by_parachain, channel_id]`
       **/
      ChannelClosed: AugmentedEvent<ApiType, [u32, PolkadotParachainPrimitivesHrmpChannelId]>;
      /**
       * An HRMP channel was opened via Root origin.
       * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
       **/
      HrmpChannelForceOpened: AugmentedEvent<ApiType, [u32, u32, u32, u32]>;
      /**
       * Open HRMP channel accepted. `[sender, recipient]`
       **/
      OpenChannelAccepted: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * An HRMP channel request sent by the receiver was canceled by either party.
       * `[by_parachain, channel_id]`
       **/
      OpenChannelCanceled: AugmentedEvent<ApiType, [u32, PolkadotParachainPrimitivesHrmpChannelId]>;
      /**
       * Open HRMP channel requested.
       * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
       **/
      OpenChannelRequested: AugmentedEvent<ApiType, [u32, u32, u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [authorityId: PalletImOnlineSr25519AppSr25519Public], { authorityId: PalletImOnlineSr25519AppSr25519Public }>;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<ApiType, [offline: Vec<ITuple<[AccountId32, PalletStakingExposure]>>], { offline: Vec<ITuple<[AccountId32, PalletStakingExposure]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u32], { who: AccountId32, index: u32 }>;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<ApiType, [index: u32, who: AccountId32], { index: u32, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nis: {
      /**
       * A bid was dropped from a queue because of another, more substantial, bid was present.
       **/
      BidDropped: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, duration: u32], { who: AccountId32, amount: u128, duration: u32 }>;
      /**
       * A bid was successfully placed.
       **/
      BidPlaced: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, duration: u32], { who: AccountId32, amount: u128, duration: u32 }>;
      /**
       * A bid was successfully removed (before being accepted).
       **/
      BidRetracted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, duration: u32], { who: AccountId32, amount: u128, duration: u32 }>;
      /**
       * An automatic funding of the deficit was made.
       **/
      Funded: AugmentedEvent<ApiType, [deficit: u128], { deficit: u128 }>;
      /**
       * A bid was accepted. The balance may not be released until expiry.
       **/
      Issued: AugmentedEvent<ApiType, [index: u32, expiry: u32, who: AccountId32, proportion: Perquintill, amount: u128], { index: u32, expiry: u32, who: AccountId32, proportion: Perquintill, amount: u128 }>;
      /**
       * An receipt has been (at least partially) thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [index: u32, who: AccountId32, proportion: Perquintill, amount: u128, dropped: bool], { index: u32, who: AccountId32, proportion: Perquintill, amount: u128, dropped: bool }>;
      /**
       * A receipt was transfered.
       **/
      Transferred: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, index: u32], { from: AccountId32, to: AccountId32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nisCounterpartBalances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nominationPools: {
      /**
       * A member has became bonded in a pool.
       **/
      Bonded: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, bonded: u128, joined: bool], { member: AccountId32, poolId: u32, bonded: u128, joined: bool }>;
      /**
       * A pool has been created.
       **/
      Created: AugmentedEvent<ApiType, [depositor: AccountId32, poolId: u32], { depositor: AccountId32, poolId: u32 }>;
      /**
       * A pool has been destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [poolId: u32], { poolId: u32 }>;
      /**
       * A member has been removed from a pool.
       * 
       * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
       **/
      MemberRemoved: AugmentedEvent<ApiType, [poolId: u32, member: AccountId32], { poolId: u32, member: AccountId32 }>;
      /**
       * A payout has been made to a member.
       **/
      PaidOut: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, payout: u128], { member: AccountId32, poolId: u32, payout: u128 }>;
      /**
       * A pool's commission `change_rate` has been changed.
       **/
      PoolCommissionChangeRateUpdated: AugmentedEvent<ApiType, [poolId: u32, changeRate: PalletNominationPoolsCommissionChangeRate], { poolId: u32, changeRate: PalletNominationPoolsCommissionChangeRate }>;
      /**
       * Pool commission has been claimed.
       **/
      PoolCommissionClaimed: AugmentedEvent<ApiType, [poolId: u32, commission: u128], { poolId: u32, commission: u128 }>;
      /**
       * A pool's commission setting has been changed.
       **/
      PoolCommissionUpdated: AugmentedEvent<ApiType, [poolId: u32, current: Option<ITuple<[Perbill, AccountId32]>>], { poolId: u32, current: Option<ITuple<[Perbill, AccountId32]>> }>;
      /**
       * A pool's maximum commission setting has been changed.
       **/
      PoolMaxCommissionUpdated: AugmentedEvent<ApiType, [poolId: u32, maxCommission: Perbill], { poolId: u32, maxCommission: Perbill }>;
      /**
       * The active balance of pool `pool_id` has been slashed to `balance`.
       **/
      PoolSlashed: AugmentedEvent<ApiType, [poolId: u32, balance: u128], { poolId: u32, balance: u128 }>;
      /**
       * The roles of a pool have been updated to the given new roles. Note that the depositor
       * can never change.
       **/
      RolesUpdated: AugmentedEvent<ApiType, [root: Option<AccountId32>, bouncer: Option<AccountId32>, nominator: Option<AccountId32>], { root: Option<AccountId32>, bouncer: Option<AccountId32>, nominator: Option<AccountId32> }>;
      /**
       * The state of a pool has changed
       **/
      StateChanged: AugmentedEvent<ApiType, [poolId: u32, newState: PalletNominationPoolsPoolState], { poolId: u32, newState: PalletNominationPoolsPoolState }>;
      /**
       * A member has unbonded from their pool.
       * 
       * - `balance` is the corresponding balance of the number of points that has been
       * requested to be unbonded (the argument of the `unbond` transaction) from the bonded
       * pool.
       * - `points` is the number of points that are issued as a result of `balance` being
       * dissolved into the corresponding unbonding pool.
       * - `era` is the era in which the balance will be unbonded.
       * In the absence of slashing, these values will match. In the presence of slashing, the
       * number of points that are issued in the unbonding pool will be less than the amount
       * requested to be unbonded.
       **/
      Unbonded: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, balance: u128, points: u128, era: u32], { member: AccountId32, poolId: u32, balance: u128, points: u128, era: u32 }>;
      /**
       * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
       **/
      UnbondingPoolSlashed: AugmentedEvent<ApiType, [poolId: u32, era: u32, balance: u128], { poolId: u32, era: u32, balance: u128 }>;
      /**
       * A member has withdrawn from their pool.
       * 
       * The given number of `points` have been dissolved in return of `balance`.
       * 
       * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
       * will be 1.
       **/
      Withdrawn: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, balance: u128, points: u128], { member: AccountId32, poolId: u32, balance: u128, points: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [kind: U8aFixed, timeslot: Bytes], { kind: U8aFixed, timeslot: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    paraInclusion: {
      /**
       * A candidate was backed. `[candidate, head_data]`
       **/
      CandidateBacked: AugmentedEvent<ApiType, [PolkadotPrimitivesV4CandidateReceipt, Bytes, u32, u32]>;
      /**
       * A candidate was included. `[candidate, head_data]`
       **/
      CandidateIncluded: AugmentedEvent<ApiType, [PolkadotPrimitivesV4CandidateReceipt, Bytes, u32, u32]>;
      /**
       * A candidate timed out. `[candidate, head_data]`
       **/
      CandidateTimedOut: AugmentedEvent<ApiType, [PolkadotPrimitivesV4CandidateReceipt, Bytes, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    paras: {
      /**
       * A para has been queued to execute pending actions. `para_id`
       **/
      ActionQueued: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * A code upgrade has been scheduled for a Para. `para_id`
       **/
      CodeUpgradeScheduled: AugmentedEvent<ApiType, [u32]>;
      /**
       * Current code has been updated for a Para. `para_id`
       **/
      CurrentCodeUpdated: AugmentedEvent<ApiType, [u32]>;
      /**
       * Current head has been updated for a Para. `para_id`
       **/
      CurrentHeadUpdated: AugmentedEvent<ApiType, [u32]>;
      /**
       * A new head has been noted for a Para. `para_id`
       **/
      NewHeadNoted: AugmentedEvent<ApiType, [u32]>;
      /**
       * The given validation code was accepted by the PVF pre-checking vote.
       * `code_hash` `para_id`
       **/
      PvfCheckAccepted: AugmentedEvent<ApiType, [H256, u32]>;
      /**
       * The given validation code was rejected by the PVF pre-checking vote.
       * `code_hash` `para_id`
       **/
      PvfCheckRejected: AugmentedEvent<ApiType, [H256, u32]>;
      /**
       * The given para either initiated or subscribed to a PVF check for the given validation
       * code. `code_hash` `para_id`
       **/
      PvfCheckStarted: AugmentedEvent<ApiType, [H256, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parasDisputes: {
      /**
       * A dispute has concluded for or against a candidate.
       * `\[para id, candidate hash, dispute result\]`
       **/
      DisputeConcluded: AugmentedEvent<ApiType, [H256, PolkadotRuntimeParachainsDisputesDisputeResult]>;
      /**
       * A dispute has been initiated. \[candidate hash, dispute location\]
       **/
      DisputeInitiated: AugmentedEvent<ApiType, [H256, PolkadotRuntimeParachainsDisputesDisputeLocation]>;
      /**
       * A dispute has concluded with supermajority against a candidate.
       * Block authors should no longer build on top of this head and should
       * instead revert the block at the given height. This should be the
       * number of the child of the last known valid block in the chain.
       **/
      Revert: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: KusamaRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: KusamaRuntimeProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: KusamaRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: KusamaRuntimeProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: KusamaRuntimeProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: KusamaRuntimeProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    recovery: {
      /**
       * Lost account has been successfully recovered by rescuer account.
       **/
      AccountRecovered: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       **/
      RecoveryClosed: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process has been set up for an account.
       **/
      RecoveryCreated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       **/
      RecoveryInitiated: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process has been removed for an account.
       **/
      RecoveryRemoved: AugmentedEvent<ApiType, [lostAccount: AccountId32], { lostAccount: AccountId32 }>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       **/
      RecoveryVouched: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32, sender: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32, sender: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    referenda: {
      /**
       * A referendum has been approved and its proposal has been scheduled.
       **/
      Approved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      ConfirmAborted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has ended its confirmation phase and is ready for approval.
       **/
      Confirmed: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      ConfirmStarted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The decision deposit has been placed.
       **/
      DecisionDepositPlaced: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * The decision deposit has been refunded.
       **/
      DecisionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has moved into the deciding phase.
       **/
      DecisionStarted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletConvictionVotingTally], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletConvictionVotingTally }>;
      /**
       * A deposit has been slashaed.
       **/
      DepositSlashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been killed.
       **/
      Killed: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * Metadata for a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * Metadata for a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      Rejected: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * The submission deposit has been refunded.
       **/
      SubmissionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been submitted.
       **/
      Submitted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded }>;
      /**
       * A referendum has been timed out without being decided.
       **/
      TimedOut: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    registrar: {
      Deregistered: AugmentedEvent<ApiType, [paraId: u32], { paraId: u32 }>;
      Registered: AugmentedEvent<ApiType, [paraId: u32, manager: AccountId32], { paraId: u32, manager: AccountId32 }>;
      Reserved: AugmentedEvent<ApiType, [paraId: u32, who: AccountId32], { paraId: u32, who: AccountId32 }>;
      Swapped: AugmentedEvent<ApiType, [paraId: u32, otherId: u32], { paraId: u32, otherId: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    slots: {
      /**
       * A para has won the right to a continuous set of lease periods as a parachain.
       * First balance is any extra amount reserved on top of the para's existing deposit.
       * Second balance is the total amount reserved.
       **/
      Leased: AugmentedEvent<ApiType, [paraId: u32, leaser: AccountId32, periodBegin: u32, periodCount: u32, extraReserved: u128, totalAmount: u128], { paraId: u32, leaser: AccountId32, periodBegin: u32, periodCount: u32, extraReserved: u128, totalAmount: u128 }>;
      /**
       * A new `[lease_period]` is beginning.
       **/
      NewLeasePeriod: AugmentedEvent<ApiType, [leasePeriod: u32], { leasePeriod: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    society: {
      /**
       * A candidate was dropped (due to an excess of bids in the system).
       **/
      AutoUnbid: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second.
       **/
      Bid: AugmentedEvent<ApiType, [candidateId: AccountId32, offer: u128], { candidateId: AccountId32, offer: u128 }>;
      /**
       * A candidate has been suspended
       **/
      CandidateSuspended: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A member has been challenged
       **/
      Challenged: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A vote has been placed for a defending member
       **/
      DefenderVote: AugmentedEvent<ApiType, [voter: AccountId32, vote: bool], { voter: AccountId32, vote: bool }>;
      /**
       * Some funds were deposited into the society account.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * The society is founded by the given identity.
       **/
      Founded: AugmentedEvent<ApiType, [founder: AccountId32], { founder: AccountId32 }>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second.
       **/
      Inducted: AugmentedEvent<ApiType, [primary: AccountId32, candidates: Vec<AccountId32>], { primary: AccountId32, candidates: Vec<AccountId32> }>;
      /**
       * A member has been suspended
       **/
      MemberSuspended: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A new \[max\] member count has been set
       **/
      NewMaxMembers: AugmentedEvent<ApiType, [max: u32], { max: u32 }>;
      /**
       * A group of members has been choosen as Skeptics
       **/
      SkepticsChosen: AugmentedEvent<ApiType, [skeptics: Vec<AccountId32>], { skeptics: Vec<AccountId32> }>;
      /**
       * A suspended member has been judged.
       **/
      SuspendedMemberJudgement: AugmentedEvent<ApiType, [who: AccountId32, judged: bool], { who: AccountId32, judged: bool }>;
      /**
       * A candidate was dropped (by their request).
       **/
      Unbid: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Society is unfounded.
       **/
      Unfounded: AugmentedEvent<ApiType, [founder: AccountId32], { founder: AccountId32 }>;
      /**
       * A candidate was dropped (by request of who vouched for them).
       **/
      Unvouch: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A vote has been placed
       **/
      Vote: AugmentedEvent<ApiType, [candidate: AccountId32, voter: AccountId32, vote: bool], { candidate: AccountId32, voter: AccountId32, vote: bool }>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third.
       **/
      Vouch: AugmentedEvent<ApiType, [candidateId: AccountId32, offer: u128, vouching: AccountId32], { candidateId: AccountId32, offer: u128, vouching: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    staking: {
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * An account has stopped participating as either a validator or nominator.
       **/
      Chilled: AugmentedEvent<ApiType, [stash: AccountId32], { stash: AccountId32 }>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       **/
      EraPaid: AugmentedEvent<ApiType, [eraIndex: u32, validatorPayout: u128, remainder: u128], { eraIndex: u32, validatorPayout: u128, remainder: u128 }>;
      /**
       * A new force era mode was set.
       **/
      ForceEra: AugmentedEvent<ApiType, [mode: PalletStakingForcing], { mode: PalletStakingForcing }>;
      /**
       * A nominator has been kicked from a validator.
       **/
      Kicked: AugmentedEvent<ApiType, [nominator: AccountId32, stash: AccountId32], { nominator: AccountId32, stash: AccountId32 }>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed.
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * The stakers' rewards are getting paid.
       **/
      PayoutStarted: AugmentedEvent<ApiType, [eraIndex: u32, validatorStash: AccountId32], { eraIndex: u32, validatorStash: AccountId32 }>;
      /**
       * The nominator has been rewarded by this amount.
       **/
      Rewarded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A staker (validator or nominator) has been slashed by the given amount.
       **/
      Slashed: AugmentedEvent<ApiType, [staker: AccountId32, amount: u128], { staker: AccountId32, amount: u128 }>;
      /**
       * A slash for the given validator, for the given percentage of their stake, at the given
       * era as been reported.
       **/
      SlashReported: AugmentedEvent<ApiType, [validator: AccountId32, fraction: Perbill, slashEra: u32], { validator: AccountId32, fraction: Perbill, slashEra: u32 }>;
      /**
       * A new set of stakers was elected.
       **/
      StakersElected: AugmentedEvent<ApiType, []>;
      /**
       * The election failed. No new era is planned.
       **/
      StakingElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * An account has unbonded this amount.
       **/
      Unbonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A validator has set their preferences.
       **/
      ValidatorPrefsSet: AugmentedEvent<ApiType, [stash: AccountId32, prefs: PalletStakingValidatorPrefs], { stash: AccountId32, prefs: PalletStakingValidatorPrefs }>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue.
       **/
      Withdrawn: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ump: {
      /**
       * Upward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedUpward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>;
      /**
       * Upward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * The weight budget was exceeded for an individual upward message.
       * 
       * This message can be later dispatched manually using `service_overweight` dispatchable
       * using the assigned `overweight_index`.
       * 
       * \[ para, id, overweight_index, required \]
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [u32, U8aFixed, u64, SpWeightsWeightV2Weight]>;
      /**
       * Upward message from the overweight queue was executed with the given actual weight
       * used.
       * 
       * \[ overweight_index, used \]
       **/
      OverweightServiced: AugmentedEvent<ApiType, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Upward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Some upward messages have been received and will be processed.
       * \[ para, count, size \]
       **/
      UpwardMessagesReceived: AugmentedEvent<ApiType, [u32, u32, u32]>;
      /**
       * The weight limit for handling upward messages was reached.
       * \[ id, remaining, required \]
       **/
      WeightExhausted: AugmentedEvent<ApiType, [U8aFixed, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       **/
      VestingUpdated: AugmentedEvent<ApiType, [account: AccountId32, unvested: u128], { account: AccountId32, unvested: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    voterList: {
      /**
       * Moved an account from one bag to another.
       **/
      Rebagged: AugmentedEvent<ApiType, [who: AccountId32, from: u64, to: u64], { who: AccountId32, from: u64, to: u64 }>;
      /**
       * Updated the score of some account to the given amount.
       **/
      ScoreUpdated: AugmentedEvent<ApiType, [who: AccountId32, newScore: u64], { who: AccountId32, newScore: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    whitelist: {
      CallWhitelisted: AugmentedEvent<ApiType, [callHash: H256], { callHash: H256 }>;
      WhitelistedCallDispatched: AugmentedEvent<ApiType, [callHash: H256, result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>], { callHash: H256, result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo> }>;
      WhitelistedCallRemoved: AugmentedEvent<ApiType, [callHash: H256], { callHash: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmPallet: {
      /**
       * Some assets have been claimed from an asset trap
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsClaimed: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Some assets have been placed in an asset trap.
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Execution of an XCM message was attempted.
       * 
       * \[ outcome \]
       **/
      Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       * 
       * \[ paying location, fees \]
       **/
      FeesPaid: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Expected query response has been received but the querier location of the response does
       * not match the expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected querier, maybe actual querier \]
       **/
      InvalidQuerier: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected querier location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected location \]
       **/
      InvalidResponder: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       * 
       * \[ id, pallet index, call index \]
       **/
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered notification could
       * not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       * 
       * \[ id, pallet index, call index, actual weight, max budgeted weight \]
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       * 
       * \[ location, query ID \]
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       * 
       * \[ location, query ID, error \]
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3TraitsError]>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       * 
       * \[ id, response \]
       **/
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>;
      /**
       * Received query response has been read and removed.
       * 
       * \[ id \]
       **/
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       * 
       * \[ origin, destination, message \]
       **/
      Sent: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       * 
       * \[ location, XCM version \]
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32]>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       * 
       * \[ origin location, id \]
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * The cost of sending it (borne by the chain) is included.
       * 
       * \[ destination, result, cost \]
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain sends us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyRequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * A remote has requested XCM version change notification from us and we have honored it.
       * A version information message is sent to them and its cost is included.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyStarted: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain stops sending us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
