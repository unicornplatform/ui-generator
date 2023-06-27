import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        {" "}
        <div className="banner__content">
          {" "}
          <div className="banner__text">
            {" "}
            <b>
              <img
                className="banner__img"
                src="https://user-uploads-unicorn.s3.amazonaws.com/product_hunt_kitty.png"
              />{" "}
              AI is here! 🪄
            </b>{" "}
            We're live on Product Hunt launching our GPT4 integration.{" "}
            <a
              target="_blank"
              className="banner__link"
              href="https://www.producthunt.com/posts/unicorn-platform-ai"
            >
              SUPPORT US
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
