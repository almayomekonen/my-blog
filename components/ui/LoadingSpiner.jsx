import { RingLoader } from "react-spinners";
import styles from "./LoadingSpiner.module.css";

export default function LoadingSpiner(props) {
  return (
    <RingLoader loading={props.loading} className={styles.loadingSpinner} />
  );
}
