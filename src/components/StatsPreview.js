import React from "react";
import styles from "./StatsPreview.module.css";
import DesktopImage from "../images/image-header-desktop.jpg";
import MobileImage from "../images/image-header-mobile.jpg";

function StatsPreview(props) {
	return (
		<div className={styles.container}>
			<div className={styles.detailsContainer}>
				<h1>
					Get <span className={styles.violetHeading}>insights</span> that help
					your business grow.
				</h1>
				<p>
					Discover the benefits of data analytics and make better decisions
					regarding revenue, customer experience, and overall efficiency.
				</p>
				<div className={styles.statsContainer}>
					<div className={styles.statContainerIndividual}>
						<h2>10k+</h2>
						<p>COMPANIES</p>
					</div>
					<div className={styles.statContainerIndividual}>
						<h2>314</h2>
						<p>TEMPLATES</p>
					</div>
					<div className={styles.statContainerIndividual}>
						<h2>12M+</h2>
						<p>QUERIES</p>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					className={styles.desktopImage}
					src={DesktopImage}
					alt="image-header"
				/>
				<img
					className={styles.mobileImage}
					src={MobileImage}
					alt="image-header"
				/>
			</div>
		</div>
	);
}

export default StatsPreview;
