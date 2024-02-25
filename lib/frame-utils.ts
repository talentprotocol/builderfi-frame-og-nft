import { getFrameHtml } from "frames.js";
import {
  BASE_URL,
  BUILDERFI_APP_URL,
  ERROR_IMAGE_URL,
  INVALID_CAPTCHA_IMAGE_URL,
  LETS_GO_IMAGE_URL,
  NOT_ELIGIBLE_IMAGE_URL,
  COLLECTION_LINK,
  SOLD_OUT_IMAGE_URL,
  SUCCESS_IMAGE_URL,
} from "./constants";

export const START_RESPONSE = (captchaId: string) =>
  getFrameHtml({
    version: "vNext",
    image: `${BASE_URL}/api/captcha/image?id=${captchaId}`,
    inputText: "Enter answer here",
    buttons: [{ label: "Enter", action: "post" }],
    postUrl: `${BASE_URL}/api/captcha/validate?id=${captchaId}`,
  });

export const INVALID_CAPTCHA_RESPONSE = getFrameHtml({
  version: "vNext",
  image: INVALID_CAPTCHA_IMAGE_URL,
  buttons: [{ label: "Try Again", action: "post" }],
  postUrl: `${BASE_URL}/api/captcha`,
});

export const TRY_AGAIN_RESPONSE = getFrameHtml({
  version: "vNext",
  image: ERROR_IMAGE_URL,
  buttons: [{ label: "Try Again", action: "post" }],
  postUrl: `${BASE_URL}/api/captcha`,
});

export const REQUEST_MINT_RESPONSE = (captchaId: string, result: string) =>
  getFrameHtml({
    version: "vNext",
    image: LETS_GO_IMAGE_URL,
    buttons: [{ label: "Request Mint", action: "post" }],
    postUrl: `${BASE_URL}/api/mint?id=${captchaId}&result=${result}`,
  });

export const SUCCESS_RESPONSE = getFrameHtml({
  version: "vNext",
  image: SUCCESS_IMAGE_URL,
  buttons: [{ label: "View your NFT on Framechain", action: "post_redirect" }],
  postUrl: COLLECTION_LINK,
});

export const SOLD_OUT_RESPONSE = getFrameHtml({
  version: "vNext",
  image: SOLD_OUT_IMAGE_URL,
  buttons: [
    {
      label: "View the collection on Framechain",
      action: "post_redirect",
    },
  ],
  postUrl: COLLECTION_LINK,
});

export const NOT_ELIGIBLE_RESPONSE = getFrameHtml({
  version: "vNext",
  image: NOT_ELIGIBLE_IMAGE_URL,
  buttons: [
    {
      label: "Sign up on builder.fi first! 🔷",
      action: "post_redirect",
    },
  ],
  postUrl: BUILDERFI_APP_URL,
});
