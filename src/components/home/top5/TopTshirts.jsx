import React from "react";
import {
  ShopTitle,
  ShopProducts,
} from "../../../pages/shop/tshirts/TshirtsStyles";
import { TSHIRTS } from "../../../data/tshirts";
import { ItemShop } from "../../item/ItemShop/ItemShop";
import { SeoTextContainer } from "./SeoTextStyles";

export const TopTshirts = () => {
  const shuffledTshirts = TSHIRTS.sort(() => Math.random() - 0.5);
  const randomFiveTshirts = shuffledTshirts.slice(0, 5);

  return (
    <div className="wrapper">
      <ShopTitle>
        <h1>Top 5 T-shirts</h1>
      </ShopTitle>
      <ShopProducts>
        {randomFiveTshirts.map((item) => (
          <ItemShop key={item.id} {...item} />
        ))}
      </ShopProducts>
      <SeoTextContainer>
        <p>
          🎉👕 Step up your style game with our vibrant collection of t-shirts!
          🛍️
        </p>
        <p>
          Looking to revamp your wardrobe? Look no further! Dive into our
          exclusive e-commerce store and discover a world of trendy t-shirts
          that speak volumes about your personality. From quirky prints to
          timeless classics, we've got something for everyone!
        </p>
        <ol>
          <li>
            <strong>🔥 Trendy Designs:</strong> Stay ahead of the fashion curve
            with our curated selection of designs that are guaranteed to turn
            heads. Whether you're into bold statements or subtle elegance, we've
            got the perfect tee for you.
          </li>
          <li>
            <strong>🎨 Premium Quality:</strong> Made with the finest materials
            and crafted to perfection, our t-shirts are not only stylish but
            also incredibly comfortable. Experience unmatched quality that you
            can feel with every wear.
          </li>
          <li>
            <strong>💰 Unbeatable Deals:</strong> Who said style has to break
            the bank? Enjoy amazing discounts and irresistible offers on your
            favorite t-shirts. Shop smart and save big with our e-commerce
            platform.
          </li>
          <li>
            <strong>🚚 Fast Shipping:</strong> We know you can't wait to rock
            your new look! That's why we offer lightning-fast shipping to ensure
            your t-shirts are delivered straight to your doorstep in no time.
          </li>
          <li>
            <strong>🌟 Shop with Confidence:</strong> Your satisfaction is our
            top priority. With secure payment options and hassle-free returns,
            shopping for t-shirts online has never been easier or more
            enjoyable.
          </li>
        </ol>

        <p>
          Don't miss out on the chance to elevate your style effortlessly.
          Explore our e-commerce store today and unleash your fashionista side
          with our stunning collection of t-shirts! 💫
        </p>
      </SeoTextContainer>
    </div>
  );
};
