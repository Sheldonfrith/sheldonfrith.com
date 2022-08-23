import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import styles from "../../styles/Home.module.css";

interface ShowcaseCardProps {
  title: string;
  image: string;
  link?: string;
}
const ShowcaseCard: React.FunctionComponent<ShowcaseCardProps> = ({
  title,
  image,
  link,
}) => {
  return (
    <div
      className={styles.showcaseCard}
      onClick={() => (link ? window.open(link) : null)}
    >
      <h2 className={styles.showcaseCardTitle}>{title}</h2>
      <img className={styles.showcaseCardImage} src={image} alt={title} />
    </div>
  );
};
export default ShowcaseCard;
