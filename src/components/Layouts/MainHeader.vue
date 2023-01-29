<template>
	<div>
		<div :class="['header-area', { 'is-sticky': isSticky }]">
			<div class="container-fluid">
				<div class="header-content-wrapper">
					<div class="header-content d-flex justify-content-between align-items-center">
						<div class="header-left-content d-flex">
							<div class="responsive-burger-menu d-block d-lg-none" @click="sidemenu = !sidemenu"
								:aria-pressed="sidemenu ? 'true' : 'false'"
								v-bind:class="{ sidemenu: button_sidemenu_state }"
								v-on:click="button_sidemenu_state = !button_sidemenu_state">
								<span class="top-bar"></span>
								<span class="middle-bar"></span>
								<span class="bottom-bar"></span>
							</div>

							<div class="main-logo">
								<router-link to="/">
									<img src="../../assets/images/main-logo.svg" alt="main-logo">
									<img src="../../assets/images/white-logo.svg" alt="main-logo">
								</router-link>
							</div>

							<form @submit.prevent class="search-bar d-flex">
								<img src="../../assets/images/icon/search-normal.svg" alt="search-normal">

								<input class="form-control" type="search" placeholder="Search" aria-label="Search">
							</form>

							<div class="option-item for-mobile-devices d-block d-lg-none">
								<div class="search" @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
									v-bind:class="{ active: button_active_state }"
									v-on:click="button_active_state = !button_active_state">
									<i class="search-btn ri-search-line"></i>
									<i class="close-btn ri-close-line"></i>
								</div>

								<div class="search-overlay search-popup" :class="{ show: active }">
									<div class='search-box'>
										<form @submit.prevent class="search-form">
											<input class="search-input" name="search" placeholder="Search" type="text">

											<button class="search-button" type="submit">
												<i class="ri-search-line"></i>
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>

						<div class="header-right-content d-flex align-items-center">
							<!-- <div class="header-right-option">
								<a href="#" class="dropdown-item fullscreen-btn" id="fullscreen-button">
									<img src="../../assets/images/icon/maximize.svg" alt="maximize">
								</a>
							</div> -->

							<div class="header-right-option dropdown apps-option">
								<button class="dropdown-item dropdown-toggle" type="button" data-bs-toggle="dropdown"
									aria-expanded="false">
									<img src="../../assets/images/icon/app.svg" alt="app">
								</button>

								<div class="dropdown-menu">
									<div
										class="dropdown-header d-flex justify-content-between align-items-center bg-linear">
										<span class="title d-inline-block">Web Apps</span>
										<span class="edit-btn d-inline-block">Edit</span>
									</div>

									<div class="dropdown-wrap scroll-bar">
										<div class="d-flex flex-wrap align-items-center">
											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-account.png" alt="icon-account">
												<span class="d-block mb-0">Account</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-google.png" alt="icon-google">
												<span class="d-block mb-0">Search</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-map.png" alt="icon-map">
												<span class="d-block mb-0">Maps</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-youtube.png" alt="icon-youtube">
												<span class="d-block mb-0">YouTube</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-playstore.png"
													alt="icon-playstore">
												<span class="d-block mb-0">Play</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-gmail.png" alt="icon-gmail">
												<span class="d-block mb-0">Gmail</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-drive.png" alt="icon-drive">
												<span class="d-block mb-0">Drive</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-calendar.png"
													alt="icon-calendar">
												<span class="d-block mb-0">Calendar</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-bitbucket.png"
													alt="icon-bitbucket">
												<span class="d-block mb-0">Bitbucket</span>
											</a>
											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-github.png" alt="icon-github">
												<span class="d-block mb-0">Github</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-dribbble.png"
													alt="icon-dribbble">
												<span class="d-block mb-0">Dribbble</span>
											</a>

											<a href="#" class="dropdown-item">
												<img src="../../assets/images/apps/icon-mail-chimp.png"
													alt="icon-mail-chimp">
												<span class="d-block mb-0">Mailchimp</span>
											</a>
										</div>
									</div>

									<div class="dropdown-footer">
										<a href="#" class="dropdown-item">View All</a>
									</div>
								</div>
							</div>

							<div class="header-right-option notification-option messenger-option dropdown">
								<div class="dropdown-item dropdown-toggle" role="button" data-bs-toggle="dropdown"
									aria-haspopup="true" aria-expanded="false">
									<div class="messages-btn">
										<img src="../../assets/images/icon/message.svg" alt="message">
										<span class="badge">3</span>
									</div>
								</div>

								<div class="dropdown-menu">
									<div
										class="dropdown-header d-flex justify-content-between align-items-center bg-linear">
										<span class="title d-inline-block">5 New Message</span>
										<span class="mark-all-btn d-inline-block">Clear All</span>
									</div>

									<div class="dropdown-wrap scroll-bar">
										<router-link to="/chat" class="dropdown-item d-flex">
											<div class="icon">
												<img src="../../assets/images/user/user-1.png" alt="user-1">
											</div>

											<div class="content">
												<span class="d-block">Alex Dew</span>
												<p class="m-0">Lorem ipsum dolor sit, amet consectetur</p>
												<p class="sub-text mb-0">2 sec ago</p>
											</div>
										</router-link>

										<router-link to="/chat" class="dropdown-item d-flex">
											<div class="icon">
												<img src="../../assets/images/user/user-2.png" alt="user-2">
											</div>

											<div class="content">
												<span class="d-block">Anne Kew</span>
												<p class="m-0">Lorem ipsum dolor sit, amet consectetur</p>
												<p class="sub-text mb-0">5 sec ago</p>
											</div>
										</router-link>

										<router-link to="/chat" class="dropdown-item d-flex">
											<div class="icon">
												<img src="../../assets/images/user/user-3.png" alt="user-3">
											</div>

											<div class="content">
												<span class="d-block">Huhon Smith</span>
												<p class="m-0">Lorem ipsum dolor sit, amet consectetur</p>
												<p class="sub-text mb-0">3 min ago</p>
											</div>
										</router-link>

										<router-link to="/chat" class="dropdown-item d-flex">
											<div class="icon">
												<img src="../../assets/images/user/user-4.png" alt="user-4">
											</div>

											<div class="content">
												<span class="d-block">Yelax Spin</span>
												<p class="m-0">Lorem ipsum dolor sit, amet consectetur</p>
												<p class="sub-text mb-0">7 min ago</p>
											</div>
										</router-link>

										<router-link to="/chat" class="dropdown-item d-flex">
											<div class="icon">
												<img src="../../assets/images/user/user-5.png" alt="user-5">
											</div>

											<div class="content">
												<span class="d-block">Steven</span>
												<p class="m-0">Lorem ipsum dolor sit, amet consectetur</p>
												<p class="sub-text mb-0">1 sec ago</p>
											</div>
										</router-link>
									</div>

									<div class="dropdown-footer">
										<router-link to="/chat" class="dropdown-item">View All</router-link>
									</div>
								</div>
							</div>

							<div class="header-right-option notification-option dropdown">
								<div class="dropdown-item dropdown-toggle" role="button" data-bs-toggle="dropdown"
									aria-haspopup="true" aria-expanded="false">
									<div class="notification-btn">
										<img src="../../assets/images/icon/notification.svg" alt="notification">
										<span class="badge">4</span>
									</div>
								</div>

								<div class="dropdown-menu">
									<div
										class="dropdown-header d-flex justify-content-between align-items-center bg-linear">
										<span class="title d-inline-block">6 New Notifications</span>
										<span class="mark-all-btn d-inline-block">Mark all as read</span>
									</div>

									<div class="dropdown-wrap scroll-bar">
										<router-link to="/inbox" class="dropdown-item d-flex align-items-center">
											<div class="icon">
												<i class='bx bx-message-rounded-dots'></i>
											</div>

											<div class="content">
												<span class="d-block">Just sent a new message!</span>
												<p class="sub-text mb-0">2 sec ago</p>
											</div>
										</router-link>

										<router-link to="/inbox" class="dropdown-item d-flex align-items-center">
											<div class="icon">
												<i class='bx bx-user'></i>
											</div>

											<div class="content">
												<span class="d-block">New customer registered</span>
												<p class="sub-text mb-0">5 sec ago</p>
											</div>
										</router-link>

										<router-link to="/inbox" class="dropdown-item d-flex align-items-center">
											<div class="icon">
												<i class='bx bx-layer'></i>
											</div>

											<div class="content">
												<span class="d-block">Apps are ready for update</span>
												<p class="sub-text mb-0">3 min ago</p>
											</div>
										</router-link>

										<router-link to="/inbox" class="dropdown-item d-flex align-items-center">
											<div class="icon">
												<i class='bx bx-hourglass'></i>
											</div>

											<div class="content">
												<span class="d-block">Your item is shipped</span>
												<p class="sub-text mb-0">7 min ago</p>
											</div>
										</router-link>

										<router-link to="/inbox" class="dropdown-item d-flex align-items-center">
											<div class="icon">
												<i class='bx bx-comment-dots'></i>
											</div>

											<div class="content">
												<span class="d-block">Steven commented on your post</span>
												<p class="sub-text mb-0">1 sec ago</p>
											</div>
										</router-link>
									</div>

									<div class="dropdown-footer">
										<router-link to="/inbox" class="dropdown-item">View All</router-link>
									</div>
								</div>
							</div>

							<div class="header-right-option dropdown profile-nav-item pt-0 pb-0">
								<a class="dropdown-item dropdown-toggle avatar d-flex align-items-center" href="#"
									id="navbarDropdown-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									<img src="../../assets/images/avatar.png" alt="avatar">
									<div class="d-none d-lg-block d-md-block">
										<h3>{{ users.username }}</h3>
										<span>@{{ users.email }}</span>
									</div>
								</a>

								<div class="dropdown-menu">
									<div class="dropdown-header d-flex flex-column align-items-center">
										<div class="figure mb-3">
											<img src="../../assets/images/avatar.png" class="rounded-circle"
												alt="avatar">
										</div>

										<div class="info text-center">
											<span class="name">{{ users.username }}</span>
											<p class="mb-3 email">
												<a href="mailto:johnsmilga@hello.com">@{{ users.email }}</a>
											</p>
										</div>
									</div>

									<div class="dropdown-wrap">
										<ul class="profile-nav p-0 pt-3">
											<li class="nav-item">
												<router-link to="/profile" class="nav-link">
													<i class="ri-user-line"></i>
													<span>Profile</span>
												</router-link>
											</li>

											<li class="nav-item">
												<router-link to="/inbox" class="nav-link">
													<i class="ri-mail-send-line"></i>
													<span>My Inbox</span>
												</router-link>
											</li>

											<li class="nav-item">
												<router-link to="/edit-profile" class="nav-link">
													<i class="ri-edit-box-line"></i>
													<span>Edit Profile</span>
												</router-link>
											</li>

											<li class="nav-item">
												<router-link to="/edit-profile" class="nav-link">
													<i class="ri-settings-5-line"></i>
													<span>Settings</span>
												</router-link>
											</li>
										</ul>
									</div>

									<div class="dropdown-footer">
										<ul class="profile-nav">
											<li class="nav-item">
												<router-link to="/login" @click="authStore.logout()" class="nav-link">
													<i class="ri-login-circle-line"></i>
													<span>Logout</span>
												</router-link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="header-right-option template-option">
								<a class="dropdown-item" href="#" data-bs-toggle="offcanvas"
									data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
									<img src="../../assets/images/icon/setting.svg" alt="setting">
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<SidebarMenu class="style-two" :class="{ active_sidemenu_area: sidemenu }" />
	</div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore, useUsersStore } from '@/stores';

const usersStore = useUsersStore();
const authStore = useAuthStore();

const { users } = storeToRefs(usersStore);



usersStore.getAll();
</script>

<script>
import SidebarMenu from './SidebarMenu'

export default {
	name: 'MainHeader',
	components: {
		SidebarMenu,
	},
	data: () => ({
		profile: [],
		isSticky: false,
		active: false,
		button_active_state: false,
		sidemenu: false,
		button_sidemenu_state: false
	}),
	mounted() {
		const that = this;
		window.addEventListener("scroll", () => {
			let scrollPos = window.scrollY;
			if (scrollPos >= 100) {
				that.isSticky = true;
			} else {
				that.isSticky = false;
			}
		});
	},
}
</script>

<style lang="scss">
/*
Header Content Content Style
=====================================================*/
.header-area {
	position: fixed;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
	z-index: 100;

	&.is-sticky {
		animation: .5s ease-in-out 0s normal none 1 running fadeInDown;
		top: 12px;
		border-radius: 0 0 30px 30px;

		&::before {
			content: "";
			position: absolute;
			top: -15px;
			left: 0;
			width: 100%;
			height: 50%;
			background-color: var(--white-color);
			z-index: -1;
		}

		.header-content-wrapper {
			border-radius: 0 0 30px 30px;
			animation: .5s ease-in-out 0s normal none 1 running fadeInDown;
			margin-bottom: 0;
			margin-top: 0;
		}
	}

	.responsive-burger-menu {
		cursor: pointer;
		transition: var(--transition);
		margin-right: 20px;

		span {
			height: 1px;
			width: 25px;
			background: var(--heading-color);
			display: block;
			margin: 6px 0;
			transition: all .50s ease-in-out;
		}

		&.sidemenu {
			span {
				&.top-bar {
					transform: rotate(45deg);
					transform-origin: 10% 10%;
				}

				&.middle-bar {
					opacity: 0;
				}

				&.bottom-bar {
					transform: rotate(-45deg);
					transform-origin: 10% 90%;
					margin-top: 5px;
				}
			}
		}
	}
}

.header-style-two {
	.header-area {
		background-color: #F8FAFF;

		.header-content-wrapper {
			.header-left-content {
				.main-logo {
					margin-right: 175px;
				}
			}
		}
	}
}

.header-style-three {
	.header-area {
		.header-content-wrapper {
			background: transparent linear-gradient(93deg, #1765FD 0%, #4FCB8D 100%) 0% 0% no-repeat padding-box;
			box-shadow: 0px 2px 15px #00000005;

			.header-left-content {
				.main-logo {
					margin-right: 175px;
				}

				.search-bar {
					.form-control {
						background: rgba(248, 250, 255, 0.16) 0% 0% no-repeat padding-box !important;
						border: 1px solid rgba(248, 250, 255, 0.16);
						color: var(--white-color);

						&::placeholder {
							color: var(--white-color);
						}
					}

					img {
						filter: brightness(100);
					}
				}
			}

			.header-right-content {
				.header-right-option {
					.dropdown-item {
						img {
							filter: brightness(100);
						}

						&.avatar {
							h3 {
								color: var(--white-color);
							}

							span {
								color: #E5FFF2;
							}

							img {
								box-shadow: var(--box-shadow);
								filter: none;
								width: 48px;
								border-radius: 18px;
							}
						}
					}

					&.template-option {
						img {
							filter: brightness(0);
						}
					}
				}
			}
		}

		.header-left-content {
			.main-logo {
				a {
					img {
						&:first-child {
							display: none;
						}

						&:last-child {
							display: block;
						}
					}
				}
			}
		}
	}
}

.header-content-wrapper {
	background-color: var(--white-color) !important;
	box-shadow: var(--box-shadow);
	border-radius: 30px;
	padding: 30px 20px;
	margin-top: 12px;
	margin-bottom: 30px;
}

.header-left-content {
	.main-logo {
		margin-right: 50px;

		a {
			img {
				&:last-child {
					display: none;
				}
			}
		}
	}

	.search-bar {
		position: relative;

		.form-control {
			border-radius: 10px;
			background-color: #f5f5f5;
			width: 460px;
			padding-left: 50px;
			height: 48px;
			background: #F8FAFF 0% 0% no-repeat padding-box;
			border: 1px solid #CAD6F2;
			border-radius: 50px;
			font-size: 14px;

			&::placeholder {
				color: #67748e;
			}

			&:focus {
				border-color: var(--main-color);
			}
		}

		img {
			position: absolute;
			top: 14px;
			left: 20px;

			svg {
				fill: #292D32;
				//stroke: #292D32;
				width: 20px;
				height: 20px;
				line-height: 20px;
			}
		}
	}

	.for-mobile-devices {
		display: none !important;

		&.option-item {
			color: var(--body-color);
			display: inline-block;
			line-height: 1;
			position: relative;
			top: 0;

			span {
				position: relative;
				top: -7px;
				margin-left: 5px;
				font-weight: 600;
			}

			.search-overlay {
				display: none;

				&.show {
					display: block;
				}
			}

			.search-overlay.search-popup {
				position: absolute;
				top: 100%;
				width: 300px;
				right: -227px;
				background: var(--white-color);
				z-index: 2;
				padding: 20px;
				box-shadow: var(--box-shadow);
				margin-top: 18px;

				.search-form {
					position: relative;

					.search-input {
						display: block;
						width: 100%;
						height: 50px;
						line-height: initial;
						border: 1px solid #eeeeee;
						color: var(--heading-color);
						outline: 0;
						transition: var(--transition);
						font-size: 15px;
						padding-top: 4px;
						padding-left: 15px;

						&:focus {
							border-color: var(--main-color);
						}
					}

					.search-button {
						position: absolute;
						right: 0;
						top: 0;
						height: 50px;
						background: var(--main-color);
						border: none;
						width: 50px;
						outline: 0;
						color: var(--white-color);
						transition: var(--transition);
						padding: 0;

						&:hover {
							background-color: var(--heading-color);
						}
					}
				}
			}

			.search {
				.search-btn {
					cursor: pointer;
					transition: var(--transition);
					color: var(--heading-color);
					text-align: center;
					font-size: 21px;
					display: inline-block;

					&:hover {
						color: var(--main-color);
					}
				}

				.close-btn {
					cursor: pointer;
					transition: var(--transition);
					color: var(--heading-color);
					text-align: center;
					display: none;
					font-size: 21px;

					&:hover {
						color: var(--main-color);
					}
				}

				&.active {
					.close-btn {
						display: block;
						color: var(--main-color);
					}

					.search-btn {
						display: none;
					}
				}
			}
		}
	}
}

.header-right-content {
	padding: 0;
	margin-bottom: 0;
	list-style: none;

	.header-right-option {
		margin-left: 30px;

		.dropdown-item {
			position: relative;

			&::after {
				display: none;
			}

			&.fullscreen-btn {
				cursor: pointer;

				i {
					transition: var(--transition);
				}

				&:hover {
					i {
						color: var(--main-color);
					}
				}

				&.active {
					position: relative;

					&::before {
						content: "";
						position: absolute;
						top: -12px;
						left: -16px;
						width: 24px;
						height: 24px;
						background-image: url(../../assets/images/full-screen.png);
						background-position: center center;
						background-repeat: no-repeat;
						background-size: contain;
					}

					img {
						display: none;
					}
				}
			}

			&.avatar {
				h3 {
					font-size: 16px;
					margin-bottom: 0;
					font-weight: 600;
				}

				span {
					font-size: 12px;
				}

				img {
					margin-right: 15px;
					width: 48px;
					border-radius: 18px;
				}
			}

			.badge {
				position: absolute;
				top: -7px;
				right: -5px;
				border-radius: 50%;
				width: 15px;
				height: 15px;
				line-height: 15px;
				font-size: 10px;
				padding: 0;
				text-align: center;
				background-color: var(--main-color);
			}
		}

		&.apps-option {
			.dropdown-menu {
				width: 350px;
				max-width: 350px;
				border-radius: 10px 10px 0 0;
				padding: 0;
				border-radius: 10px;
				background-color: var(--white-color);
				box-shadow: var(--box-shadow);
				top: 70px !important;
				transition: var(--transition) !important;

				&.show {
					top: 40px !important;
				}

				.dropdown-header {
					border-radius: 10px 10px 0 0;
					color: var(--white-color);

					padding: {
						left: 15px;
						right: 15px;
						top: 9px;
						bottom: 7px;
					}

					;

					span {
						font: {
							size: 13px;
							weight: 500;
						}

						;

						&.edit-btn {
							cursor: pointer;
						}
					}
				}

				.dropdown-wrap {
					padding: 10px 5px;
					height: 170px;

					.dropdown-item {
						-ms-flex: 0 0 25%;
						flex: 0 0 25%;
						max-width: 25%;
						text-align: center;
						padding: 8px 10px;
						border-radius: 10px;

						img {
							filter: none;
						}

						span {
							margin-top: 8px;
							font-size: 13px;
							color: var(--heading-color);
							font-weight: 500;
						}
					}
				}

				.dropdown-footer {
					text-align: center;
					padding: 10px 15px;
					border-top: 1px solid #eeeeee;

					.dropdown-item {
						color: #2962ff !important;
						padding: 0;
						position: relative;
						display: inline-block;
						width: auto;
						background-color: transparent !important;

						font: {
							size: 13px;
							weight: 500;
						}

						;
					}
				}
			}
		}

		&.messenger-option {
			.dropdown-menu {
				transition: var(--transition);
				top: 60px !important;

				&.show {
					transition: var(--transition) !important;
					top: 45px !important;
				}

				.dropdown-wrap {
					.dropdown-item {
						.icon {
							background-color: transparent;
						}

						img {
							filter: none;
						}
					}
				}
			}

			.badge {
				background-color: #82D973;
			}
		}

		&.notification-option {
			.notification-btn {
				.badge {
					background-color: red;
				}
			}

			.dropdown-item {
				background-color: transparent;
			}

			.dropdown-menu {
				width: 350px;
				max-width: 350px;
				padding: 0;
				border-radius: 10px;
				background-color: var(--white-color);
				box-shadow: var(--box-shadow);
				transition: var(--transition);
				top: 60px !important;

				&.show {
					transition: var(--transition) !important;
					top: 40px !important;
				}

				.dropdown-header {
					border-radius: 10px 10px 0 0;
					background-color: var(--main-color);
					color: var(--white-color);

					padding: {
						left: 15px;
						right: 15px;
						top: 9px;
						bottom: 7px;
					}

					;

					span {
						font: {
							size: 13px;
							weight: 500;
						}

						;

						&.mark-all-btn {
							cursor: pointer;
						}
					}
				}

				.dropdown-wrap {
					height: 200px;

					padding: {
						top: 10px;
						bottom: 10px;
					}

					;

					.dropdown-item {
						padding: 7px 15px;

						.icon {
							width: 30px;
							height: 30px;
							border-radius: 50%;
							position: relative;
							background: #f7f7f7;
							text-align: center;
							color: var(--main-color);
							transition: var(--transition);

							i {
								position: absolute;
								left: 0;
								right: 0;
								top: 50%;
								transform: translateY(-50%);
							}
						}

						.content {
							padding-left: 15px;

							span {
								color: var(--heading-color);
								margin-bottom: 1px;

								font: {
									size: 13px;
									weight: 500;
								}

								;
							}

							p {
								font-size: 12px;
								color: #686868;
							}
						}

						&:hover {
							.icon {
								background-color: var(--main-color);
								color: var(--white-color);
							}
						}

						&:nth-child(2) {
							.icon {
								background: rgba(114, 124, 245, .1);
								color: #727cf5;
							}

							&:hover {
								.icon {
									background-color: #727cf5;
									color: var(--white-color);
								}
							}
						}

						&:nth-child(3) {
							.icon {
								background: rgba(16, 183, 89, .1);
								color: #10b759;
							}

							&:hover {
								.icon {
									background-color: #10b759;
									color: var(--white-color);
								}
							}
						}

						&:nth-child(4) {
							.icon {
								background: rgba(255, 51, 102, .1);
								color: #f36;
							}

							&:hover {
								.icon {
									background-color: #f36;
									color: var(--white-color);
								}
							}
						}

						&:nth-child(5) {
							.icon {
								background: rgba(251, 188, 6, .1);
								color: #fbbc06;
							}

							&:hover {
								.icon {
									background-color: #fbbc06;
									color: var(--white-color);
								}
							}
						}
					}
				}

				.dropdown-footer {
					text-align: center;
					padding: 10px 15px;
					border-top: 1px solid #eeeeee;

					.dropdown-item {
						color: var(--main-color) !important;
						padding: 0;
						position: relative;
						display: inline-block;
						width: auto;
						background-color: transparent !important;

						font: {
							size: 13px;
							weight: 500;
						}

						;
					}
				}
			}

			&.messenger-option {
				.dropdown-menu {
					.dropdown-wrap {
						.dropdown-item {
							.icon {
								display: contents;

								img {
									border-radius: 8px;
									width: 30px;
									height: 30px;
								}
							}
						}
					}
				}
			}
		}

		&.profile-nav-item {
			margin-left: 20px;

			&.dropdown {
				.dropdown-menu {
					padding: 15px 15px 10px;
					min-width: 230px;
					box-shadow: var(--box-shadow);
					background-color: var(--white-color);
					border-radius: 10px;
					transition: var(--transition);
					top: 60px !important;

					&.show {
						transition: var(--transition) !important;
						top: 29px !important;
					}

					.dropdown-header {
						padding: 0;
						border-bottom: 1px solid #f2f4f9;

						.figure {
							position: relative;

							img {
								width: 48px;
								border-radius: 50px;
							}
						}

						.name {
							display: block;
							color: var(--heading-color);
							margin-bottom: 2px;

							font: {
								size: 16px;
								weight: 600;
							}

							;
						}

						.email {
							color: #686868;
							font-size: 12px;
						}
					}

					.dropdown-wrap {
						.profile-nav {
							padding: 0;
							list-style-type: none;
							margin-bottom: 0;

							.nav-item {
								margin-left: 0;
								margin-bottom: 5px;

								&:last-child {
									margin-bottom: 0;
								}

								.nav-link {
									position: relative;
									padding-left: 40px;

									i {
										color: var(--heading-color);
										transition: var(--transition);
										position: absolute;
										left: 15px;
										top: 1px;
										transition: var(--transition);

										font: {
											size: 16px;
											weight: normal;
										}

										;
									}

									span {
										font-size: 13px !important;
									}

									&:hover {
										color: var(--main-color);

										i {
											color: var(--main-color);
										}
									}
								}

								.dropdown-item {
									color: var(--heading-color);
									padding: 5px 15px 5px 38px;
									position: relative;

									&.active,
									&:active {
										color: var(--heading-color);
										background-color: transparent;
										background-color: #f8f9fa;
									}

									&:hover {
										color: var(--main-color);

										i {
											color: var(--main-color);
										}
									}
								}
							}
						}

					}

					.dropdown-footer {
						margin: 10px -15px 0;
						padding: 10px 15px 0;
						border-top: 1px solid #eeeeee;
						background-color: transparent;

						.profile-nav {
							padding-left: 0;
							list-style-type: none;
							margin-bottom: 0;

							.nav-item {
								margin-left: 0;
							}
						}

						.nav-item {
							.nav-link {
								color: var(--main-color);
								padding: 5px 15px 5px 38px;
								position: relative;

								font: {
									size: 13px;
									weight: 500;
								}

								;

								i {
									color: var(--main-color);
									transition: var(--transition);
									position: absolute;
									left: 15px;
									top: 2.1px;

									font: {
										size: 16px;
									}

									;
								}

								&.active,
								&:active {
									color: var(--heading-color);
									background-color: transparent;
									background-color: #f8f9fa;
								}
							}
						}
					}
				}
			}
		}

		&.template-option {
			a {
				width: 40px;
				height: 40px;
				line-height: 38px;
				text-align: center;
				box-shadow: var(--box-shadow);
				background-color: var(--white-color);
				border-radius: 16px;
			}
		}

		&:first-child {
			margin-left: 0;
		}
	}

	.dropdown-item {
		white-space: unset !important;
	}
}

.simplebar-content-wrapper {
	visibility: unset;
}

.dropdown-item.active,
.dropdown-item:active {
	background-color: transparent;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {

	.header-area {
		.responsive-burger-menu {
			margin-right: 10px;
		}
	}

	.header-content-wrapper {
		padding: 20px 15px;
		border-radius: 10px;
	}

	.header-left-content {
		.for-mobile-devices {
			display: block !important;
			margin-right: 0;

			&.option-item {
				margin-right: 0;
				top: 3px;

				.search-overlay {
					&.search-popup {
						right: -228px;
						border-radius: 30px;

						.search-form {
							.search-input {
								border-radius: 30px;
							}

							.search-button {
								border-radius: 0 30px 30px 0;
							}
						}
					}
				}
			}
		}

		.search-bar {
			display: none !important;
		}

		.main-logo {
			display: none;
		}

		.search-bar {
			.form-control {
				width: 100%;
			}
		}
	}

	.header-right-content {
		margin-left: 10px;

		.header-right-option {
			margin-right: 0;
			margin-left: 10px;

			.dropdown-menu {
				width: 300px !important;
			}

			.dropdown-item {
				img {
					width: 20px;
				}
			}

			&.notification-option {
				.dropdown-menu {
					transform: unset !important;
					left: auto !important;
					right: -97px !important;

					&.show {
						top: 40px !important;
					}
				}
			}

			&.messenger-option {
				.dropdown-menu {
					transform: unset !important;
					left: auto !important;
					right: -127px !important;

					&.show {
						top: 40px !important;
					}
				}
			}

			&.apps-option {
				.dropdown-menu {
					transform: unset !important;
					left: auto !important;
					right: -157px !important;

					&.show {
						top: 40px !important;
					}
				}
			}

			.iconsax {
				svg {
					width: 20px;
					height: 20px;
				}
			}

			.template-option a {
				width: 30px;
				height: 30px;
				line-height: 30px;
			}

			.dropdown-item {
				&.avatar {
					img {
						max-width: 30px;
						margin-right: 0;
					}
				}
			}

			&.template-option {
				a {
					width: 30px;
					height: 30px;
					line-height: 30px;
				}
			}

			&.profile-nav-item {
				&.dropdown {
					.dropdown-menu {
						&.show {
							top: 19px !important;
						}
					}
				}
			}
		}
	}

	.header-right-content .header-right-option.apps-option .dropdown-menu .dropdown-wrap .dropdown-item span {
		font-size: 11px;
	}

	.header-right-content .header-right-option.apps-option .dropdown-menu {
		right: -167px !important;
	}

	.header-right-content .header-right-option.notification-option .dropdown-menu {
		right: -107px !important;
	}

	.header-right-content .header-right-option.messenger-option .dropdown-menu {
		right: -138px !important;
	}

}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {

	.header-content-wrapper {
		padding: 20px;
	}

	.header-right-content {
		.header-right-option {
			.dropdown-item {
				img {
					width: auto;
				}
			}
		}
	}

}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {

	/* Header Left Content */
	.header-left-content {
		align-items: center !important;

		.for-mobile-devices {
			display: block !important;
			margin-right: 0;

			&.option-item {
				margin-right: 0;
				top: 3px;

				.search-overlay {
					&.search-popup {
						border-radius: 30px;

						.search-form {
							.search-input {
								border-radius: 30px;
							}

							.search-button {
								border-radius: 0 30px 30px 0;
							}
						}
					}
				}
			}
		}

		.search-bar {
			display: none !important;
		}

		.main-logo {
			margin-right: 20px;
		}

		.search-bar {
			.form-control {
				width: 100%;
			}
		}
	}

	/* Header Right Content */
	.header-right-content {
		.header-right-option {
			&.notification-option {
				.dropdown-menu {
					&.show {
						top: 30px !important;
					}
				}
			}

			&.messenger-option {
				.dropdown-menu {
					&.show {
						top: 30px !important;
					}
				}
			}

			&.apps-option {
				.dropdown-menu {
					&.show {
						top: 30px !important;
					}
				}
			}

			&.profile-nav-item {
				&.dropdown {
					.dropdown-menu {
						&.show {
							top: 18px !important;
						}
					}
				}
			}
		}
	}
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {

	/* Header Left Content */
	.header-left-content {
		align-items: center !important;

		.for-mobile-devices {
			display: block !important;
			margin-right: 0;

			&.option-item {
				margin-right: 0;
				top: 3px;

				.search-overlay {
					&.search-popup {
						border-radius: 30px;

						.search-form {
							.search-input {
								border-radius: 30px;
							}

							.search-button {
								border-radius: 0 30px 30px 0;
							}
						}
					}
				}
			}
		}

		.search-bar {
			display: none !important;
		}

		.main-logo {
			margin-right: 20px;
		}

		.search-bar {
			.form-control {
				width: 100%;
			}
		}
	}

	/* Header Right Content */
	.header-right-content {
		.header-right-option {
			&.notification-option {
				.dropdown-menu {
					&.show {
						top: 30px !important;
					}
				}
			}

			&.messenger-option {
				.dropdown-menu {
					&.show {
						top: 30px !important;
					}
				}
			}

			&.apps-option {
				.dropdown-menu {
					&.show {
						top: 30px !important;
					}
				}
			}

			&.profile-nav-item {
				&.dropdown {
					.dropdown-menu {
						&.show {
							top: 18px !important;
						}
					}
				}
			}
		}
	}

	.responsive-burger-menu {
		display: block !important;
	}

}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.header-area.header-style-two {
		background-color: transparent;
	}

	.header-area {
		&.header-style-two {
			.header-content-wrapper {
				.header-left-content {
					.main-logo {
						margin-right: 50px;
					}
				}
			}
		}

		&.header-style-three {
			.header-content-wrapper {
				.header-left-content {
					.main-logo {
						margin-right: 50px;
					}
				}
			}
		}
	}
}

/* Min width 1400px to Max width 1700px */
@media only screen and (min-width: 1400px) and (max-width: 1700px) {
	.header-style-two .header-area {
		background-color: transparent;
	}

}

/* Max width 1199px */
@media only screen and (max-width:1199px) {

	.header-area {
		&.is-sticky {
			&::before {
				height: 30px;
			}
		}
	}

	.header-style-three {
		.header-area {
			.responsive-burger-menu {
				span {
					background-color: var(--white-color);
				}
			}

			.header-left-content {
				.for-mobile-devices {
					&.option-item {
						.search-btn {
							color: var(--white-color);

							&.active {
								color: var(--white-color);
							}
						}

						.close-btn {
							color: var(--white-color);

							&.active {
								color: var(--white-color);
							}
						}
					}
				}
			}

			.responsive-burger-menu {
				span {
					background-color: var(--white-color);
				}
			}

			.header-content-wrapper {
				.header-left-content {
					.main-logo {
						margin-right: 30px;
					}
				}
			}
		}
	}

	.header-style-two {
		.header-area {
			background-color: transparent;

			.header-content-wrapper {
				.header-left-content {
					.main-logo {
						margin-right: 30px;
					}
				}
			}
		}
	}
}
</style>