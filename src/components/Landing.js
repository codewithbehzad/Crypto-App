import React, { useEffect, useState } from "react";

// api
import { getCoin } from "../services/api";

// components
import Loader from "./Loader";
import Coin from "./Coin";

// styles
import styles from "./Landing.module.css";

const Landing = () => {
  // state
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  // handlers
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
        className={styles.input}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              rank={coin.market_cap_rank}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
