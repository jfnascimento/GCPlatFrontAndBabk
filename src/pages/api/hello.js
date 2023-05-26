// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect';

const handler = nc()

handler.get(async (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
);
export default handler;