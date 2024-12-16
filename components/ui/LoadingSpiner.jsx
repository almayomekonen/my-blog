import { RingLoader } from "react-spinners";
import styles from "./LoadingSpiner.module.css";

export default function LoadingSpiner(props) {
  return (
    <RingLoader
      size={100}
      color="#E0FFFF"
      loading={props.loading}
      className={styles.loadingSpinner}
    />
  );
}
