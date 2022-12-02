import React from "react";
import { useNavigate } from "react-router-dom";

import cayImg from "@/assets/img/theme_short_cay.png";
import colsImg from "@/assets/img/theme_short_cols.png";
import hackImg from "@/assets/img/theme_short_hack.png";
import leapImg from "@/assets/img/theme_short_leap.png";
import architectImg from "@/assets/img/theme_short_architect.png";
import tieImg from "@/assets/img/theme_short_tie.png";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <body className="bgi_wood">
      <div className="glasses"></div>
      <h1 className="text-center white">主题</h1>
      <ul className="themeItems">
        <li>
          <img src={cayImg} />
          <a className="url" onClick={() => navigate("/temp/cay")}>
            查看
          </a>
        </li>
        <li>
          <img src={colsImg} />
          <a className="url" onClick={() => navigate("/temp/cay")}>
            查看
          </a>
        </li>
        <li>
          <img src={hackImg} />
          <a className="url" onClick={() => navigate("/temp/cay")}>
            查看
          </a>
        </li>
        <li>
          <img src={leapImg} />
          <a className="url" onClick={() => navigate("/temp/cay")}>
            查看
          </a>
        </li>
        <li>
          <img src={architectImg} />
          <a className="url" onClick={() => navigate("/temp/cay")}>
            查看
          </a>
        </li>
        <li>
          <img src={tieImg} />
          <a className="url" onClick={() => navigate("/temp/cay")}>
            查看
          </a>
        </li>
      </ul>
    </body>
  )
}