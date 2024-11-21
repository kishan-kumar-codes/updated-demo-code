import React, { ReactNode } from "react";
import "./styles.css";
import Image from "next/image";
// import logoImage from "/src/assets/images/HubSpark New Logo 5.png";

// Define a type for the DemoSvgContainer props
type DemoSvgContainerProps = {
  children: ReactNode;
};

// Demo SVG Container Component
const DemoSvgContainer: React.FC<DemoSvgContainerProps> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1520"
    height="2208"
    viewBox="0 0 1520 2208"
    fill="none">
    <path d="M1520 0V2208H0V0H296.954H328.621H1520Z" fill="#F4F4F4" />
    <foreignObject width="1520" height="2208">
      {/* Can add className to the div element for styling */}
      <div>{children}</div>
    </foreignObject>
  </svg>
);

const demoImageStyle: React.CSSProperties = {
  position: "absolute",
  top: "7px",
  left: "57.58px",
};

const demoSvgContainerStyle: React.CSSProperties = {
  width: "440px",
  height: "441px",
  position: "absolute",
  top: "38px",
  left: "34px",
  /* https://svgencode.com/ */
  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0NDAnIGhlaWdodD0nNDQxJyB2aWV3Qm94PScwIDAgNDQwIDQ0MScgZmlsbD0nbm9uZSc+PHBhdGggZD0nTTM5Ny4zMjUgNDQxSDQyLjY3NDhDMTkuMTY4MiA0NDEgMCA0MjEuNzE2IDAgMzk4LjI0NFY0Mi43NTY1QzAgMTkuMjA0OCAxOS4yNDcgMCA0Mi42NzQ4IDBIMzk3LjMyNUM0MjAuODMyIDAgNDQwIDE5LjI4MzkgNDQwIDQyLjc1NjVWMzk4LjI0NEM0NDAgNDIxLjc5NSA0MjAuNzUzIDQ0MSAzOTcuMzI1IDQ0MVonIGZpbGw9JyM0MEY0NDAnLz48L3N2Zz4=')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const demoChatBubbleStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 15px 10px 10px",
  backgroundColor: "#C3CBDD", // bubble color
  margin: "5px 24.7px 15.63px", // Top, Horizontal (Left & Right), Bottom
  maxWidth: "80%", // Maximum width of the bubble
  wordWrap: "break-word", // Ensures text wraps in bubble
};

const demoSenderChatBubble: React.CSSProperties = {
  ...demoChatBubbleStyle,
  borderRadius: "10px 10px 0 10px", // top-left, top-right, bottom-right, bottom-left
  alignSelf: "flex-end", // For sender, align to right
  color: "#FFFFFF",
  fontFamily: "Arial, sans-serif",
  fontSize: 12.283,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

const demoRecipientChatBubble: React.CSSProperties = {
  ...demoChatBubbleStyle,
  borderRadius: "10px 10px 10px 0", // top-left, top-right, bottom-right, bottom-left
  alignSelf: "flex-start",
  color: "#606060",
  fontFamily: "Arial, sans-serif",
  fontSize: 12.283,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

interface StarRatingProps {
  rating: number;
  width?: string; // Define the type of the 'rating' prop as number
  isStarChecked?: boolean; // Define the
}

// SVG components for the different types of stars
const FullStar = () => (
  // Filled star SVG
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none">
    <path
      d="M15.7143 3L20.4703 10.1682L28.7573 12.4763L23.4097 19.2147L23.7753 27.8094L15.7143 24.8057L7.65323 27.8094L8.01888 19.2147L2.67122 12.4763L10.9583 10.1682L15.7143 3Z"
      fill="#FFD62F"
      stroke="#EEB20A"
      strokeWidth="2.28571"
      strokeLinecap="square"
    />
  </svg>
);

const HalfStar = () => (
  // Half-filled star SVG
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="30"
    viewBox="0 0 31 30">
    <path
      d="M15.7143 24.8057L7.65323 27.8094L8.01888 19.2147L2.67122 12.4763L10.9583 10.1682L15.7143 3"
      fill="#FFD62F"
      stroke="#EEB20A"
      strokeWidth="2.28571"
      strokeLinecap="square"
    />
    <path
      d="M15.7143 3L20.4703 10.1682L28.7573 12.4763L23.4097 19.2147L23.7753 27.8094L15.7143 24.8057"
      fill="none"
      stroke="#6D6D6D"
      strokeWidth="2.28571"
      strokeLinecap="square"
      transform="scale(0.95) translate(1.85,1.4)"
    />
    <line
      x1="15.7143"
      y1="2.4"
      x2="15.7143"
      y2="26"
      stroke="#EEB20A"
      strokeWidth="2.28571"
    />
  </svg>
);

const EmptyStar = () => (
  // Empty star SVG
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none">
    <path
      d="M15.7143 3L20.4703 10.1682L28.7573 12.4763L23.4097 19.2147L23.7753 27.8094L15.7143 24.8057L7.65323 27.8094L8.01888 19.2147L2.67122 12.4763L10.9583 10.1682L15.7143 3Z"
      fill="none"
      stroke="#6D6D6D"
      strokeWidth="2.28571"
      strokeLinecap="square"
    />
  </svg>
);

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  width = "auto",
  isStarChecked,
}) => {
  const starElements = [];

  // Loop to create star elements based on the rating
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Full stars
      starElements.push(<FullStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // Half star for decimals
      starElements.push(<HalfStar key={i} />);
    } else {
      // Empty stars
      starElements.push(<EmptyStar key={i} />);
    }
  }

  return (
    <div
      className="star-rating"
      style={{ width, opacity: isStarChecked ? 1 : 0.5 }}>
      {starElements}
    </div>
  );
};

const Demo: React.FC = () => {
  return (
    <DemoSvgContainer>
      <Image
        src={""}
        alt="logo"
        width={193}
        height={84}
        style={demoImageStyle}
      />
      <svg
        style={{ position: "absolute", left: "305.4px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="99"
        viewBox="0 0 58 99"
        fill="none">
        <path
          d="M57.8371 98.112H38.9996L0.618164 0H19.4557L57.8371 98.112Z"
          fill="#27272D"
        />
      </svg>
      <svg
        style={{ position: "absolute", left: "332.87px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="99"
        viewBox="0 0 59 99"
        fill="none">
        <path
          d="M58.0933 98.112H39.2558L0.87439 0H19.7119L58.0933 98.112Z"
          fill="#631363"
        />
      </svg>
      <svg
        style={{ position: "absolute", left: "362.7px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="99"
        viewBox="0 0 58 99"
        fill="none">
        <path
          d="M57.9193 98.112H39.0818L0.700439 0H19.5379L57.9193 98.112Z"
          fill="#40F440"
        />
      </svg>
      <div className="demoScrollableContainerStyle">
        <div style={demoSvgContainerStyle}>
          <StarRating rating={5} />
          <div style={demoSenderChatBubble}>hi</div>
          <div style={demoRecipientChatBubble}>bye</div>
          <div className="demoInputSVG">
            <input type="text" className="demoInput" />
            <button className="demoButton"></button>
          </div>
        </div>
      </div>
    </DemoSvgContainer>
  );
};

export default Demo;
