export const NFT_COLLECTION_ADDRESS =
  "0x5f69B1bD96cD7D8926D46ac2D5Ad4432a7B18BdE";

export const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:3001";

export const SYNDICATE_API_KEY = process.env.SYNDICATE_API_KEY;

export const RPC_URL = "https://rpc-frame.syndicate.io";

export const COVER_IMAGE_URL = `${BASE_URL}/cover.png`;
export const ERROR_IMAGE_URL = `${BASE_URL}/error.png`;
export const SUCCESS_IMAGE_URL = `${BASE_URL}/success.png`;
export const SOLD_OUT_IMAGE_URL = `${BASE_URL}/sold-out.png`;
export const SIGN_UP_BF_IMAGE_URL = `${BASE_URL}/sign-up-bf.png`;
export const CAPTCHA_IMAGE_URL = `${BASE_URL}/captcha.png`;
export const INVALID_CAPTCHA_IMAGE_URL = `${BASE_URL}/invalid-captcha.png`;
export const LETS_GO_IMAGE_URL = `${BASE_URL}/lets-go.png`;

export const EXPLORER_TX_LINK = (txHash: string) =>
  `https://explorer-frame.syndicate.io/tx/${txHash}`;

export const EXPLORER_ADDRESS_LINK = (address: string) =>
  `https://explorer-frame.syndicate.io/address/${address}?tab=tokens_erc721`;

export const BUILDERFI_APP_URL = "https://app.builder.fi";

export const SUPPLY_LIMIT = 5555;
