import { NextApiRequest, NextApiResponse } from 'next';
import imdbApi from '../../../utils/api/imdbClient';

export default async function getMovieById(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { imdbId },
  } = req;

  const response = await imdbApi.get('/', { params: { i: imdbId } });

  const { data } = response;

  res.json({ data });
}
