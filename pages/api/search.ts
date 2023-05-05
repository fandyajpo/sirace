// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../dummy/shoes.json";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //@ts-ignored
  //@ts-ignored
  if (!req.query.id) return res.status(404).json({ data: false });

  const datas: any = data.shoes.filter((d) => d.id === req.query.id);
  //@ts-ignored
  res.status(200).json({ data: datas[0] });
}
