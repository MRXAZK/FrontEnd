<template>
    <div class="page-title-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-6">
                    <div class="page-title">
                        <h3>{{mainTitle}}</h3>
                    </div>
                </div>

                <div class="col-lg-6 col-sm-6">
                    <ul class="page-title-list">
                        <li>Pages</li>
                        <li>{{pageTitle}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['mainTitle', 'pageTitle']
}
</script>

<style lang="scss">
.page-title-area {
	padding-top: 6px;
    padding-bottom: 38px;
	.page-title {
		h3 {
			font-size: 24px;
			margin-bottom: 0;
			font-weight: 600;
		}
	}
	.page-title-list {
		padding: 0;
		margin: 0;
		list-style-type: none;
		text-align: right;
		line-height: 1;
		li {
			display: inline-block;
			position: relative;
			padding-right: 10px;
			margin-right: 10px;
			font-size: 12px;
			letter-spacing: -0.24px;
			color: #292D32;
			&:last-child {
				margin-right: 0;
				padding-right: 0;
				&::before {
					display: none;
				}
			}
			&::before {
				content: "";
				position: absolute;
				top: 0;
				right: -4px;
				width: 1px;
				height: 100%;
				background-color: var(--heading-color);
				transform: rotate(20deg);
			}
		}
	}
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .page-title-area {
        .col-sm-6 {
            flex: 0 0 auto;
            width: 50%;
        }
        .page-title {
            h3 {
                font-size: 20px;
            }
        }
    }
}

/* Min width 375px to Max width 767px */
@media only screen and (min-width: 375px) and (max-width: 575px) {
    .page-title-area {
        .col-sm-6 {
            flex: 0 0 auto;
            width: 50%;
        }
        .page-title-list {
            text-align: right;
        }
        .page-title {
            h3 {
                margin-bottom: 0;
            }
        }
    }
}
</style>