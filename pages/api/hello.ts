import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const result = await request.json();
  console.log(result);

  res.status(200).json({ name: "John Doe" });
}
