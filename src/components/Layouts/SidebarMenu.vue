<template>
	<nav class="sidebar-menu">
		<ul class="list-group flex-column d-inline-block first-menu scroll-bar">
			<li class="list-group-item main-grid">
				<router-link to="/" class="icon">
					<img src="../../assets/images/icon/element.svg" alt="element">
				</router-link>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/calendar" class="icon">
					<img src="../../assets/images/icon/calendar.svg" alt="calendar">
				</router-link>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/chat" class="icon">
					<img src="../../assets/images/icon/messages.svg" alt="messages">
				</router-link>
			</li>
			<li class="list-group-item main-grid">
				<router-link to="/all-files" class="icon">
					<img src="../../assets/images/icon/document-copy.svg" alt="document-copy">
				</router-link>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/contact-us" class="icon">
					<img src="../../assets/images/icon/profile-2user.svg" alt="profile-2user">
				</router-link>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/inbox" class="icon">
					<img src="../../assets/images/icon/email.svg" alt="email">
				</router-link>

				<ul class="list-group flex-column d-inline-block submenu scroll-bar">
					<li class="list-group-item">
						<router-link to="/inbox">Inbox</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/starred">Starred</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/drafts">Drafts</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/importants">Important</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/trash">Trash</router-link>
					</li>
				</ul>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/login" class="icon">
					<img src="../../assets/images/icon/user-octagon.svg" alt="user-octagon">
				</router-link>

				<ul class="list-group flex-column d-inline-block submenu scroll-bar">
					<li class="list-group-item">
						<router-link to="/login">Login</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/register">Register</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/profile">Profile</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/edit-profile">Edit profile</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/forget-password">Forget Password</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/screen-lock">Screen Lock</router-link>
					</li>
				</ul>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/box-icon" class="icon">
					<img src="../../assets/images/icon/book.svg" alt="book">
				</router-link>

				<ul class="list-group flex-column d-inline-block submenu scroll-bar">
					<li class="list-group-item">
						<router-link to="/box-icon">Box Icon</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/remix-icon">Remix Icon</router-link>
					</li>
				</ul>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/alerts" class="icon">
					<img src="../../assets/images/icon/shapes.svg" alt="shapes">
				</router-link>

				<ul class="list-group flex-column d-inline-block submenu scroll-bar">
					<li class="list-group-item">
						<router-link to="/alerts">Alerts</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/buttons">Buttons</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/colors">Colors</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/avatar-square">Avatar Square</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/avatar-rounded">Avatar Rounded</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/avatar-radius">Avatar Radius</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/drop-downs">Drop downs</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/list">List</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/tags">Tags</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/pagination">Pagination</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/navigation">Navigation</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/typography">Typography</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/breadcrumbs">Breadcrumbs</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/badges">Badges</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/panels">Panels</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/thumbnails">Thumbnails</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/media-object">Media Object</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/accordion">Accordion</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/tabs">Tabs</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/modal">Modal</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/progress">Progress</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/carousel">Carousel</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/default-table">Default Table</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/data-table">Data Table</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/dark-table">Dark Table</router-link>
					</li>
				</ul>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/gallery" class="icon">
					<img src="../../assets/images/icon/layer.svg" alt="layer">
				</router-link>

				<ul class="list-group flex-column d-inline-block submenu scroll-bar">
					<li class="list-group-item">
						<router-link to="/gallery">Gallery</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/about-company">About Company</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/services">Services</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/faq">FAQ,s</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/terms">Terms</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/invoice">Invoice</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/pricing-table">Pricing Table</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/empty">Empty</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/coming-soon">Coming Soon</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/blog">Blog</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/blog-details">Blog Details</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/map">Map</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/widgets">Widgets</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/cards-design">Cards Design</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/notifications">Notifications</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/content-scroll-bar">Content Scroll bar</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/loaders">Loaders</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/counters">Counters</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/rating">Rating</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/timeline">Timeline</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/treeview">Treeview</router-link>
					</li>
				</ul>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/form-layouts" class="icon">
					<img src="../../assets/images/icon/fatrows.svg" alt="fatrows">
				</router-link>

				<ul class="list-group flex-column d-inline-block submenu scroll-bar">
					<li class="list-group-item">
						<router-link to="/form-layouts">Form Layouts</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/input-group">Input Group</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/form-editor">Form Editor</router-link>
					</li>
				</ul>
			</li>

			<li class="list-group-item main-grid">
				<router-link to="/apexcharts" class="icon">
					<img src="../../assets/images/icon/diagram.svg" alt="diagram">
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'SidebarMenu',
}
</script>

<style lang="scss">
/*
Sidebar Menu Style
=====================================================*/
.sidebar-menu {
	.first-menu {
		position: fixed;
		background-color: transparent;
		height: 100%;
		width: 110px;
		top: 148px;
		overflow: auto;
		transition: width .5s;
		padding-bottom: 180px;
		left: 12px;
		z-index: 2;

		.list-group-item {
			border-radius: 0;
			font-size: 15px;

			&.main-grid {
				padding: 0 30px;
				margin-bottom: 30px;

				&:last-child {
					margin-bottom: 0;
				}
			}

			.icon {
				color: var(--white-color);
				box-shadow: var(--box-shadow);
				background-color: var(--white-color);
				width: 50px;
				height: 50px;
				line-height: 50px;
				border-radius: 20px;
				display: block;
				text-align: center;
				position: relative;
				z-index: 1;

				&::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 50px;
					height: 50px;
					background-image: linear-gradient(to bottom, #1765fd, #4fcb8d);
					z-index: -1;
					border-radius: 20px;
					transition: var(--transition);
					opacity: 0;
				}
			}

			&:hover {
				.icon {
					img {
						filter: brightness(100);
					}

					&::before {
						opacity: 1;
					}
				}
			}

			a {
				&.active {
					&.icon {
						img {
							filter: brightness(100);
						}

						&::before {
							opacity: 1;
						}
					}
				}
			}

			&.active {
				.icon {
					img {
						filter: brightness(100);
					}

					&::before {
						opacity: 1;
					}
				}

				.list-group-item {
					&.active {
						a {
							color: var(--main-color);
						}
					}
				}
			}
		}

		&:hover {
			width: 110px;
		}

		li {
			&:hover .submenu {
				visibility: visible;
				opacity: 1;
			}
		}
	}

	.submenu {
		position: fixed;
		left: 125px;
		width: 195px;
		top: 120px;
		background-color: var(--white-color);
		box-shadow: var(--box-shadow);
		height: 100%;
		opacity: 0;
		visibility: hidden;
		transition: var(--transition);
		overflow: auto;
		padding-top: 30px;
		padding-bottom: 160px;
		border-radius: 0;

		.list-group-item {
			margin-top: 8px;
			padding: 3px 20px;

			a {
				color: var(--heading-color);

				&.active {
					color: var(--main-color);
				}
			}
		}

		li {
			&:hover {
				.sub-submenu {
					visibility: visible;
					opacity: 1;
				}
			}
		}
	}

	.list-group-item {
		background-color: transparent;
		border: none;
		border-radius: 0;
	}

	.sub-submenu {
		position: fixed;
		background-color: #f9f9f9;
		left: 320px;
		top: 160px;
		height: 100%;
		width: 195px;
		opacity: 0;
		visibility: hidden;
		transition: var(--transition);
		overflow: auto;

		.list-group-item {
			a {
				color: var(--heading-color);

				&.active {
					color: var(--main-color);
				}
			}

			&:hover {
				background-color: transparent;
			}
		}
	}

	.arrow {
		position: fixed;
		left: 295px;
		width: 0;
		height: 0;
		border-top: 27px solid transparent;
		border-bottom: 27px solid transparent;
		border-right: 27px solid #f9f9f9;
		top: 160px !important;

		&:nth-child(3) {
			top: 160px;
		}
	}
}

/*
Sidebar Menu Style Two Area
=====================================================*/
.side-menu-area {
	position: fixed;
	left: 0;
	top: 162px;
	height: 100%;
	width: 300px;
	z-index: 2;
	transition: var(--transition);

	.sidebar-nav {
		background-color: #F8FAFF;
		padding: 0;
		border-radius: var(--border-radius);
		overflow: auto;
		height: 100%;

		#sidebar-menu {
			padding-bottom: 185px;
		}

		.metismenu {
			list-style-type: none;
			padding: 0;
			margin: 0;

			.nav-item-title {
				color: #b2b5b9;
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 5px;
			}

			a {
				display: block;
				padding: 13px 15px;
			}

			ul {
				padding: 0;
				padding-top: 10px;
				padding-bottom: 10px;

				a {
					padding: 5px 30px;
				}
			}

			li {
				display: block;
				margin-bottom: 5px;
				margin-left: 20px;

				.box-style {
					padding: 15px 10px;
					border-radius: 50px 0 0 50px;
					display: block;

					.icon {
						color: var(--white-color);
						box-shadow: var(--box-shadow);
						background-color: var(--white-color);
						width: 50px;
						height: 50px;
						line-height: 50px;
						border-radius: 20px;
						display: inline-block;
						text-align: center;
						position: relative;
						z-index: 1;
						margin-right: 20px;

						&::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 50px;
							height: 50px;
							background-image: linear-gradient(to bottom, #1765fd, #4fcb8d);
							z-index: -1;
							border-radius: 20px;
							transition: var(--transition);
							opacity: 0;
						}
					}

					&:hover {
						color: var(--heading-color);
						background-color: var(--white-color);

						&::before {
							opacity: 1;
						}
					}
				}

				&:hover {
					.box-style {
						color: var(--heading-color);
						background-color: var(--white-color);
						padding: 15px 10px;

						.icon {
							color: var(--white-color);

							img {
								filter: brightness(100);
							}

							&::before {
								opacity: 1;
							}
						}
					}

					&:hover {
						color: var(--heading-color);
					}
				}

				&.mm-active {
					.box-style {
						color: var(--heading-color);
						background-color: var(--white-color);
						padding: 15px 10px;
						font-weight: 600;

						.icon {
							color: var(--white-color);

							img {
								filter: brightness(100);
							}

							&::before {
								opacity: 1;
							}
						}
					}

					.active {
						color: var(--main-color);
						position: relative;

						a {
							span {
								color: var(--main-color);
							}
						}
					}
				}

				.mm-collapse {
					li {
						a {
							display: block;

							&:hover {
								color: var(--main-color);
							}
						}
					}
				}

				.has-arrow {
					font-size: 15px;
				}

				a {
					font-size: 14px;

					i {
						font-size: 20px;
						box-shadow: var(--box-shadow);
						background-color: var(--white-color);
						display: inline-block;
						width: 35px;
						height: 35px;
						line-height: 35px;
						text-align: center;
						position: relative;
						top: 4px;
						margin-right: 5px;
						border-radius: 5px;
						color: var(--heading-color);
					}
				}
			}

			.has-arrow {
				display: block;

				&::after {
					transform: rotate(-135deg) translate(0, -50%);
					right: 35px;
				}

				&[aria-expanded=true] {
					&::after {
						transform: rotate(46deg) translate(0, -50%) !important;
					}
				}
			}
		}
	}

	&.style-two {
		.sidebar-nav {
			border-radius: 0;

			.metismenu {
				li {
					&.mm-active {
						.box-style {
							position: relative;

							&::before {
								content: "";
								position: absolute;
								top: 0;
								right: 0;
								width: 5px;
								height: 100%;
								background-image: linear-gradient(to bottom, #1765FD, #4FCB8D);
								border-radius: 8px;
							}
						}
					}
				}
			}
		}
	}
}

/* Max width 1199px */
@media only screen and (max-width:1199px) {

	/* Sidebar Menu */
	.sidebar-menu {
		z-index: 9999;
		left: -100%;

		.first-menu {
			background-color: var(--white-color);
			padding-top: 20px;
			padding-bottom: 20px;
			box-shadow: var(--box-shadow);
			opacity: 0;
			visibility: hidden;
			transition: var(--transition);
			top: 88px !important;
			border-radius: 10px !important;
			position: fixed;
			left: -100%;
			z-index: 999;
		}

		&.active_sidemenu_area {
			.first-menu {
				left: 12px;
				z-index: 999;
				transition: var(--transition);
				opacity: 1;
				visibility: visible;
			}
		}

		.submenu {
			top: 88px;
			padding-top: 0;
			border-radius: 10px;
			width: 183px;
		}
	}

	.side-menu-area {
		top: 88px;
		left: -100%;
		box-shadow: var(--box-shadow);

		.sidebar-nav {
			background-color: var(--white-color);

			.metismenu li .box-style {
				padding: 8px 10px;
			}
		}

		&.active_sidemenu_area {
			left: 0;
		}
	}
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
	.side-menu-area {
		top: 110px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.side-menu-area {
		top: 110px;
	}
}

/* Min width 768px to Max width 1199px */
@media only screen and (min-width: 768px) and (max-width: 1199px) {

	.header-content-wrapper {
		padding: 20px 20px;
	}

	.sidebar-menu {
		.first-menu {
			top: 105px !important;
			border-radius: 20px !important;
		}
	}

	.sidebar-menu {
		.submenu {
			top: 105px;
			padding-top: 0;
			border-radius: 20px;
		}
	}

}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.side-menu-area {
		width: 250px;
		top: 148px;

		.sidebar-nav {
			.metismenu {
				li {
					.has-arrow {
						font-size: 13px;
					}

					.box-style .icon {
						margin-right: 10px;
					}
				}

				.has-arrow {
					&::after {
						right: 20px;
					}
				}
			}
		}
	}
}
</style>