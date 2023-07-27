import { NextApiRequest, NextApiResponse } from "next";
//@ts-ignore
import twitch from "twitch-m3u8";

export default async function handler(req: NextApiRequest, res:NextApiResponse){
  const username = req.query.username;

  //first search for the user
  var SearchResults: any = await fetch("https://gql.twitch.tv/gql", {
    headers: {
      accept: "*/*",
      "accept-language": "pt-BR",
      authorization: "OAuth 2xjywm421mnnej4ihhouvdeez2vcmp",
      "cache-control": "no-cache",
      "client-id": "kimne78kx3ncx6brgo4mv6wki5h1ko",
      "client-integrity":
        "v4.public.eyJjbGllbnRfaWQiOiJraW1uZTc4a3gzbmN4NmJyZ280bXY2d2tpNWgxa28iLCJjbGllbnRfaXAiOiIxNjguMTIxLjQyLjE0MCIsImRldmljZV9pZCI6ImpmTUVzQ05mcW51NnZXRzZNcFNaOGc2Q1JCQzVFTGtSIiwiZXhwIjoiMjAyMy0wNy0yN1QxMzowODoyNFoiLCJpYXQiOiIyMDIzLTA3LTI3VDAyOjA4OjI0WiIsImlzX2JhZF9ib3QiOiJmYWxzZSIsImlzcyI6IlR3aXRjaCBDbGllbnQgSW50ZWdyaXR5IiwibmJmIjoiMjAyMy0wNy0yN1QwMjowODoyNFoiLCJ1c2VyX2lkIjoiNjc5MjY5Mjg0In2K87ouJA3uLbTpQ-eJSTywX-9J91al16sk-ELDEkNI0zT5656CpMz4Hma-yQUV5eydsCw_houN5G97QYE35SUM",
      "client-session-id": "0e1db0dd04b6e4e9",
      "client-version": "619e254d-ca70-4aec-80a3-5069c7c42415",
      "content-type": "text/plain;charset=UTF-8",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-device-id": "jfMEsCNfqnu6vWG6MpSZ8g6CRBC5ELkR",
      Referer: "https://www.twitch.tv/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `[{"operationName":"SearchTray_SearchSuggestions","variables":{"requestID":"de35b195-c8bf-4eb2-bd3d-d686b80ff205","queryFragment":"${username}","withOfflineChannelContent":false},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"b71566f2c593dd906493b0ab2012e5626c7f277d3e435504d4454de2ff15788a"}}}]`,
    method: "POST",
  });

  SearchResults = await SearchResults.json()
  var firstChannel: any;

  await SearchResults[0].data.searchSuggestions.edges.forEach((node: any) => {
    if( node.node.content && node.node.content.login && !firstChannel && node.node.content.isLive){
        firstChannel = {
            name: node.node.content.login,
            image: node.node.content.profileImageURL,
            verified: node.node.content.isVerified
        }
    }
  })

  try {
    var data: Array<any> = await twitch.getStream(firstChannel.name, false);
    let cdata = data[data.length - 1];
    cdata.url = `api/proxy?url=${cdata.url}`
    return res.json({ data: data[data.length - 1], channel: firstChannel })
  } catch (e) {
    return res.status(404).json({})
  }
};
