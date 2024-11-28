import { ethers } from "hardhat";


async function main() {
    const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1 million tokens

    const GTXToken = await ethers.getContractFactory("GTXToken");
    const token = await GTXToken.deploy(initialSupply);

    await token.deployed();
    console.log(`GTXToken deployed to: ${token.address}`);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});