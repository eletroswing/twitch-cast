import { NextApiRequest, NextApiResponse } from "next";
import { get } from "https";
import { Transform } from "stream";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url: any = req.query.url;
  if (!url) {
    return res.status(404).json({
      message: "missing url param",
    });
  }

  try {
    const remoteResponse: any = await new Promise((resolve, reject) => {
      get(url || "", (result) => {
        resolve(result);
      }).on("error", (e) => {
        reject(e);
      });
    });

    // Set headers from the remote response
    Object.keys(remoteResponse.headers).forEach((headerName: string) => {
      res.setHeader(headerName, remoteResponse.headers[headerName]);
    });

    // Replace "https" with "/api/proxy?url=https" in the response data
    if(url.includes('.m3u8')) {
        const transformStream = new TransformChunk();
        remoteResponse.pipe(transformStream).pipe(res);
    }else {
        remoteResponse.pipe(res);
    }
  } catch (error) {
    return res.status(500).end();
  }
}

// Transform stream to replace "https" with "/api/proxy?url=https" in the response data
class TransformChunk extends Transform {
  _transform(chunk:any, encoding:any, callback:any) {
    let tempChunk = chunk.toString("utf-8");
    tempChunk = tempChunk.replace(/\bhttps\b/g, "/api/proxy?url=https");
    this.push(tempChunk);
    callback();
  }
}
