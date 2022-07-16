import React from "react";
import styles from "../../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import User from "./User";


function Content() {
	return (
		<div className={styles.contentcontainer}>
			<User />
			
		</div>
	);
}

export default Content;
