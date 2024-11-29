import { useEffect, useState } from "react";
import { encodeFunctionData } from "viem";
import { ERC20_ABI } from "@/constants/abi";
import { ethers, parseUnits } from "ethers";
import { account, publicClient } from "@/wagmi";
import { DEFAULT_DECIMALS, INFURA_ID } from "@/constants/default";

interface UseGasEstimationProps {
  recipient: `0x${string}`;
  amount: string;
  tokenAddress: `0x${string}`;
}

// EIP-1559
// https://eips.ethereum.org/EIPS/eip-1559
// Total Fee = estimatedGas * (baseFee + priorityFee)

export const useGasEstimation = ({ recipient, amount, tokenAddress }: UseGasEstimationProps) => {
  const [formattedGasData, setFormattedGasData] = useState<string>("0");

  useEffect(() => {
    if (recipient && amount && tokenAddress) {
      const getEstimation = async () => {
        try {
          const encodedData = encodeFunctionData({
            abi: ERC20_ABI,
            functionName: "transfer",
            args: [recipient, parseUnits(amount, DEFAULT_DECIMALS)],
          });

          const provider = new ethers.JsonRpcProvider(
            `https://eth-sepolia.g.alchemy.com/v2/${INFURA_ID}`
          );

          const feeData = await provider.getFeeData();
          const baseFeePerGas = feeData.maxFeePerGas || feeData.gasPrice;
          const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;

          if (!baseFeePerGas || !maxPriorityFeePerGas) {
            console.warn("Fee data is missing; cannot calculate total fees.");
            setFormattedGasData("0");
            return;
          }

          const estimatedGas = await publicClient.estimateGas({
            account,
            data: encodedData,
            to: tokenAddress,
            value: 0n, // No ETH being transferred
          });

          // Calculate the total fee
          const totalFee = BigInt(estimatedGas) * (baseFeePerGas + maxPriorityFeePerGas);

          const formattedFee = ethers.formatEther(totalFee);
          console.log(`Total Fee: ${formattedFee} ETH`);
          
          setFormattedGasData(formattedFee);
        } catch (error) {
          console.error("Error estimating gas:", error);
          setFormattedGasData("0");
        }
      };

      getEstimation();
    } else {
      setFormattedGasData("0");
    }
  }, [recipient, amount, tokenAddress]);

  return { formattedGasData };
};