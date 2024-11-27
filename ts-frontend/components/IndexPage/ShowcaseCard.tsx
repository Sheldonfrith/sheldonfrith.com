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
  subtitle: string;
}
const ShowcaseCard: React.FunctionComponent<ShowcaseCardProps> = ({
  title,
  image,
  link,
  subtitle,
}) => {
  const animationDuration = 700;
  const [className, setClassName] = useState<string>(styles.showcaseCard);
  const [shouldResetClassName, setShouldResetClassName] = useState(false);
  const [animationRunning, setAnimationRunning] = useState(false);
  useEffect(() => {
    if (className === styles.showcaseCardClicked) {
      setAnimationRunning(true);
      setTimeout(() => {
        setAnimationRunning(false);
        setClassName(styles.showcaseCard);
        if (link) {
          //! enable in production
          window.open(link);
        }
      }, animationDuration);
    }
  }, [className, link]);

  return (
    <div
      className={className}
      onClick={() => {
        if (className === styles.showcaseCard) {
          setClassName(styles.showcaseCardClicked);
        }
      }}
    >
      <h2 className={styles.showcaseCardTitle}>{title}</h2>
      <div className={styles.showcaseCardImageAndTitle}>
        <h4 className={styles.showcaseCardSubtitle}>{subtitle}</h4>
        <img className={styles.showcaseCardImage} src={image} alt={title} />
      </div>
    </div>
  );
};
export default ShowcaseCard;
