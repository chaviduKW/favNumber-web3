const { expect } = require('chai');

describe("Favourite number contract",()=>{

    let favouriteNumberContract;

    beforeEach(async ()=>{
       const FavouriteNumber =  await ethers.getContractFactory("FavouriteNumber");
       favouriteNumberContract = await FavouriteNumber.deploy(7);
       await favouriteNumberContract.deployed();
    })

    it("should return 7 as my fav number", async ()=>{
        expect(await favouriteNumberContract.myFavouriteNumber()).to.equal(7);
    })

    it("should return 10 as my fav number", async ()=>{
        const changeNumberTx = await favouriteNumberContract.setMyFavouriteNumber(10)
        await changeNumberTx.wait()
        expect(await favouriteNumberContract.myFavouriteNumber()).to.equal(10)
    })
})