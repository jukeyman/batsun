import Link from "next/link";
import Image from "next/image";
import styles from "./LogoHeader.module.css";

const LogoHeader = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <div className={styles.logoContainer}>
          {/* Dark version of logo for light backgrounds */}
          <Image
            src="/images/logo/rj-logo-dark.png"
            alt="RJ Business Solutions"
            width={200}
            height={200}
            className={styles.mainLogo}
            priority
          />
          {/* Light version of logo for dark backgrounds */}
          <Image
            src="/images/logo/rj-logo-light.png"
            alt="RJ Business Solutions"
            width={200}
            height={200}
            className={styles.lightLogo}
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default LogoHeader;
