<template>
	<div class="template-sidebar-area">
		<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
			<div class="offcanvas-header">
				<router-link to="/">
					<img src="../../assets/images/main-logo.svg" alt="main-logo">
				</router-link>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<ul>
					<li>
						<a class="default-btn btn danger" target="_blank" href="#">
							Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SidebarModal'
}
</script>

<style lang="scss">
.template-sidebar-area {
	.offcanvas {
		&.offcanvas-end {
			width: 300px;
		}
	}

	.offcanvas-header {
		border-bottom: 1px solid #dddd;

		.btn-close {
			&:focus {
				box-shadow: none;
			}
		}
	}

	ul {
		padding-left: 0;
		margin-bottom: 0;
		list-style-type: none;

		li {
			margin-bottom: 10px;

			&:last-child {
				margin-bottom: 0;
			}

			.default-btn {
				display: block;
				width: 100%;
				color: var(--white-color);
				color: var(--white-color);

				&:hover {
					background-color: var(--main-color);
					color: var(--white-color);
				}

				&.active {
					background-color: var(--main-color);
				}
			}
		}
	}
}
</style>