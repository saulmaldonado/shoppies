import { NextApiRequest, NextApiResponse } from 'next';
import imdbApi from '../../../../utils/api/imdbClient';

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { phrase, page },
  } = req;

  const response = await imdbApi.get('/', {
    params: {
      s: phrase,
      type: 'movie',
      r: 'json',
      page,
    },
  });

  const { data } = response;

  res.json({ data });
}
