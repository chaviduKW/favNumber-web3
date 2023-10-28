async function main() {
    const FavouriteNumber = await ethers.getContractFactory("FavouriteNumber");
    const favouriteNumber = await FavouriteNumber.deploy(7);
    
    await favouriteNumber.deployed();

    console.log("contract was deployed to:", favouriteNumber.address);
}

main()