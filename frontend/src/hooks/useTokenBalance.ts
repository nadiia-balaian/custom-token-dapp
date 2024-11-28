import { useReadContract, useBalance } from "wagmi";
import { ERC20_ABI } from "@/constants/abi";

export const useTokenBalance = (tokenAddress: `0x${string}`, userAddress?: `0x${string}`) => {
  const { data: balance } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: [userAddress],
  });

  const { data: nativeBalance } = useBalance({ address: userAddress });

  return { balance, nativeBalance };
};
