<template >
    <div class="profile-area" v-if="profile">
        <div class="container-fluid">
            <div class="card-box-style">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="profile-info d-flex align-items-center">
                            <img class="w-25 rounded-4" src="../../assets/images/profile-img.jpg" alt="profile-img">
                            <div class="profile-name ms-4">
                                <h4>John Smilga</h4>
                                <span>Member Since: September 2022</span>
                                <div class="follow-email">
                                    <button class="btn btn-primary">
                                        Follow
                                    </button>
                                    <a href="mailto:johnsmilga@gmail.com" class="btn btn-secondary">
                                        E-mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-sm-6">
                                <div class="profile-activity">
                                    <i class='bx bx-repost'></i>
                                    <h3>Posts</h3>
                                    <h2>15,2015</h2>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="profile-activity">
                                    <i class='bx bx-user'></i>
                                    <h3>Followers</h3>
                                    <h2>40,5487</h2>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="profile-activity">
                                    <i class='bx bx-wifi'></i>
                                    <h3>Followers</h3>
                                    <h2>50,1248</h2>
                                </div>
                            </div>
                        </div>

                        <div class="text-end edit-massage">
                            <router-link to="/edit-profile" class="btn btn-primary">
                                Edit Profile
                            </router-link>
                            <button class="btn btn-secondary">
                                Massage
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile-details card-box-style">
                <ul class="list-inline profile-menu">
                    <li>
                        <router-link to="/profile" class="active">Profile</router-link>
                    </li>
                    <li>
                        <router-link to="/friends">Friends</router-link>
                    </li>
                    <li>
                        <router-link to="/followers">Followers</router-link>
                    </li>
                </ul>

                <div class="row">
                    <div class="col-lg-12">
                        <h3>Personal Information</h3>
                    </div>

                    <div class="col-lg-6">
                        <div class="personal-info">
                            <ul class="list-inline">
                                <li>
                                    <span>Username</span>
                                    {{ profile.username }}
                                </li>
                                <li>
                                    <span>Full Name</span>
                                    {{ profile.full_name }}
                                </li>
                                <li>
                                    <span>Email</span>
                                    {{ profile.email }}
                                </li>
                                <li>
                                    <span>Photo</span>
                                    {{ profile.photo }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- <div class="col-lg-6">
                        <div class="personal-info">
                            <ul class="list-inline">
                                <li>
                                    <span>Website :</span>
                                    <a href="#" target="_blank">envytheme.com</a>
                                </li>
                                <li>
                                    <span>Email :</span>
                                    <a href="mailto:johnsmilga@hello.com">johnsmilga@hello.com</a>
                                </li>
                                <li>
                                    <span>Phone :</span>
                                    <a href="tel:+44-077-585-00-77">: +44 077 585 00 77</a>
                                </li>
                                <li>
                                    <span>Others Link :</span>
                                    <a href="#">Twitter, Facebook, Linkedin Etc</a>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </div>

                <div class="biography">
                    <h3>Biography</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, fugiat harum ab recusandae eligendi
                        cumque ipsa, ullam reiciendis natus nemo aspernatur provident officiis repudiandae aliquam quae
                        quos modi eos temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                        vero numquam inventore. Fugit, animi quaerat! Vero cupiditate, libero itaque atque voluptatibus
                        quos magnam, veritatis, suscipit aut obcaecati est quibusdam voluptas!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit impedit a ducimus.
                        Temporibus cumque modi nulla dolor est fugiat sequi exercitationem corrupti deleniti,
                        consectetur saepe? Reiciendis ullam a totam iste!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ProfileContent',
    data: () => ({
        profile: null,
    }),
    async created() {
        const response = await axios.get('api/users/me');
        console.log(response);
        this.profile = response.data;
    },
}
</script>

<style lang="scss">
.profile-info {
    .w-25 {
        width: 120px !important;
    }

    h4 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    span {
        font-size: 14px;
        display: block;
        margin-bottom: 20px;
    }

    .follow-email {
        .btn {
            &:last-child {
                margin-right: 0;
            }

            &.btn-primary {
                background-color: var(--main-color);
                margin-right: 20px;
            }

            &.btn-secondary {
                background-color: #5C31D6;
            }
        }

    }
}

.profile-activity {
    background-color: var(--white-color);
    box-shadow: var(--box-shadow);
    padding: 20px;
    text-align: center;
    border-radius: var(--border-radius);
    margin-bottom: 24px;

    i {
        font-size: 20px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        display: inline-block;
        background-color: #5C31D6;
        text-align: center;
        color: var(--white-color);
        border-radius: 50px;
        margin-bottom: 20px;
    }

    h3 {
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 20px;
        font-weight: 700;
    }
}

.edit-massage {
    .btn {
        &:last-child {
            margin-right: 0;
        }

        &.btn-primary {
            background-color: var(--main-color);
            margin-right: 20px;
        }

        &.btn-secondary {
            background-color: #5C31D6;
        }
    }

}

.profile-details {
    padding: 100px !important;

    .profile-menu {
        margin-bottom: 0;
        border-bottom: 1px solid #eeeeee;
        padding-bottom: 20px;
        margin-bottom: 30px;

        li {
            display: inline-block;
            margin-right: 30px;

            &:last-child {
                margin-right: 0;
            }

            a {
                &:hover {
                    color: var(--main-color);
                }

                &.active {
                    color: var(--main-color);
                }
            }
        }
    }

    h3 {
        font-size: 18px;
        margin-bottom: 20px;
    }

    .personal-info {
        margin-bottom: 30px;

        ul {
            li {
                margin-bottom: 15px;

                span {
                    font-weight: 600;
                    font-size: 14px;
                    color: var(--heading-color);
                }
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .profile-details {
        .profile-menu {
            margin-bottom: 20px;
        }
    }

    .edit-massage {
        .btn.btn-primary {
            margin-right: 0;
        }
    }

    .profile-info {
        display: block !important;
        text-align: center;

        img {
            margin-bottom: 10px;
        }

        .ms-4 {
            margin-left: 0 !important;
        }

        .follow-email {
            margin-bottom: 20px;
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .profile-details {
        padding: 30px;

        .profile-menu {
            margin-bottom: 20px;
        }
    }

    .edit-massage {
        text-align: center !important;

        .btn.btn-primary {
            margin-right: 0;
        }
    }

    .profile-info {
        display: block !important;
        text-align: center;

        img {
            margin-bottom: 10px;
        }

        .ms-4 {
            margin-left: 0 !important;
        }

        .follow-email {
            margin-bottom: 20px;
        }
    }
}
</style>