import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "../src/components/Content";
import Header from "../src/components/Header";
import LeftNavbar from "../src/components/LeftNavbar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create dashboard</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<div className={styles.container}>
				<LeftNavbar />
				<Header />
				<Content />
			</div>
		</div>
	);
}
