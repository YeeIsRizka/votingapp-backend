/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Voting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Voting__factory>;
    getContractFactory(
      name: "Voting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Voting__factory>;

    getContractAt(
      name: "Voting",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Voting>;
    getContractAt(
      name: "Voting",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Voting>;

    deployContract(
      name: "Voting",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Voting>;
    deployContract(
      name: "Voting",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Voting>;

    deployContract(
      name: "Voting",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Voting>;
    deployContract(
      name: "Voting",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Voting>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
