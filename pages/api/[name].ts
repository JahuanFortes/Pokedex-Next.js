import { NextApiRequest, NextApiResponse } from "next";

let pokemon = {
  1: "bulba",
  2: "char",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pokemon = req.query.name;
  console.log(req.query);
  console.log(pokemon);

  res.status(200).json({ msg: `hello me ${JSON.stringify(name)}` });
}
