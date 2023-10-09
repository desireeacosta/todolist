import SadFace from "./icons/SadFace";
import styles from "./styles/EmptyTableStyle";

const EmptyTable = () => {
    return (
        <div style={styles.centerContent}>
            <SadFace />
            <p style={styles.text}>You do not have any tasks!</p>
        </div>
    );
};

export default EmptyTable;