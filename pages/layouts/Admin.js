import React from "react";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import Link from "next/link";
import HeaderAddOrder from "../components/Headers/HeaderAddOrder.js";
export default function Admin({ children }) {
	return (
		<>
			<Sidebar />
			<div className="relative md:ml-64 bg-blueGray-100">
				<AdminNavbar />
				{/* Header */}
				{/* <HeaderStats /> */}
				<HeaderAddOrder />
				<div className="mx-auto w-full -m-24">
					{children}
					<FooterAdmin />
				</div>
			</div>
		</>
	);
}
