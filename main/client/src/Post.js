import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post() {

  return (
    <>
    <div className="post">
      <div className="image">
        <img src="https://media.istockphoto.com/id/174233986/photo/sambar-idli.jpg?s=612x612&w=0&k=20&c=aY5J4NGoHPNcCNScii7RWooRSIzTjwssyVWoqHZ8-R4=" alt="" />
      </div>
      <div className="texts">
        <h2>Idlis - The South Indian staple</h2>
        <div className="preview">Soft, light, fluffy steamed round cakes made with a ground, fermented rice and lentil batter. There is no food more representative of Tamil Nadu than idlis. Here I share my foolproof recipe that's been tried and tested for generations.</div>
      </div>
    </div>
    <div className="post">
    <div className="image">
      <img src="https://www.abhibus.com/blog/wp-content/uploads/2023/04/10-Best-Street-Foods-in-Mumbai-That-You-Must-Try-at-Least-Once.jpg" alt="" />
    </div>
    <div className="texts">
      <h2>Top 10 street food spots in Mumbai</h2>
      <div className="preview">Mumbai, the city of dreams, is also the city of street food. The streets of Mumbai are lined with countless food stalls serving a variety of delicious dishes that are not only affordable but also rich in flavour. From vada pav to pav bhaji, Mumbai's street foods are a must-try for any food lover. In this blog, I have curated a list of the 10 best street foods in Mumbai that you simply must try at least once.</div>
    </div>
  </div>
  </>
  );
}