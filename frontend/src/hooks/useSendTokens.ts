import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { ERC20_ABI } from "@/constants/abi";

export const useSendTokens = (tokenAddress: string) => {
  const { data: hash, writeContract, isPending, isError } = useWriteContract();

  const sendTokens = (recipient: string, amount: string, decimals: number) => {
    writeContract({
      address: tokenAddress as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "transfer",
      args: [recipient, parseUnits(amount, decimals)],
    });
  };

  return { hash, sendTokens, isPending, isError };
};
