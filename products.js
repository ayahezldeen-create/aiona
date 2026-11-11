// aiona: your product list.
// To ADD a product: copy one block { ... }, paste it below, change the words.
// To MARK SOLD: add   sold: true   to the block.
// To REMOVE: delete the whole block.
//
// name         the item's name
// price        a number only, no $ sign
// type         "thrift" for curations, "made" for creations
// description  one short line (size, condition, materials)
// photo        file name of the picture you uploaded to the images folder, e.g. "blazer.jpg"
//              (leave "" to show a colored placeholder)
//
// Keep a comma after every } except you may skip it on the last one.

window.PRODUCTS = [
  { name: "oversized wool blazer", price: 48, type: "thrift", description: "Charcoal herringbone, size M, 1990s.", photo: "", color: "#3f5a58", shape: "jacket" },
  { name: "brass signet ring", price: 22, type: "thrift", description: "Worn smooth, adjustable fit.", photo: "", color: "#c49a3a", shape: "ring", sold: true },
  { name: "hand-thrown bud vase", price: 34, type: "made", description: "Speckled clay, glazed inside.", photo: "", color: "#9a6a45", shape: "vase" },
  { name: "silk slip dress", price: 39, type: "thrift", description: "Soft ivory, size S, bias cut.", photo: "", color: "#9fb3c6", shape: "dress" },
  { name: "original acrylic on canvas", price: 120, type: "made", description: "30 × 40 cm, signed on the back.", photo: "", color: "#3f5a58", shape: "frame" },
  { name: "vintage drop earrings", price: 18, type: "thrift", description: "Glass beads on gold-tone wire.", photo: "", color: "#8B4513", shape: "earring" },
  { name: "soy candle in a thrifted cup", price: 26, type: "made", description: "Poured by hand, cedar and fig.", photo: "", color: "#b9a27a", shape: "candle" },
  { name: "woven scrap-fabric wall hanging", price: 64, type: "made", description: "Made from offcuts, about 40 cm wide.", photo: "", color: "#9fb3c6", shape: "weave" }
];
