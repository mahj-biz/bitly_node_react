import Link from "../../model/link";
import { parseMessage } from "../../utils/helper";

const redirect = async (req, res) => {
  try {
    const { shortUrl } = req.params;   
    if (!shortUrl) {
      return res.status(400).json({ error: "Invalid URL" });
    }
    const link = await Link.findOne({  where: { shortened_link: shortUrl }  });
    if (!link) {
      return res.status(404).json({ error: "URL not found" });
    } 
    const updatedVisitCount = link.visit_count + 1;
    await link.update({ visit_count: updatedVisitCount });
    await link.save();
    console.log(link);
    res.redirect(link.original_link);
  } catch (error) {
    res.status(500).json(parseMessage("Server error", error));
  }
};

export default redirect;
