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
  if (!req.query.q) return res.status(404).json({ data: false });

  //@ts-ignored
  const datas: any = data.shoes.filter((d) =>
    //@ts-ignored
    d.name.toLowerCase().includes(req.query.q)
  );

  const f = datas.map((s: any) => s);
  //@ts-ignored
  res.status(200).json({ data: f });
}
