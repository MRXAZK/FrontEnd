<template>
    <div class="my-devices-area mt-20">
        <div class="container-fluid">
            <div class="sidebar-left">
                <div class="sidebar">
                    <div class="drive-wrap">
                        <h4>My Drive</h4>
                        <ul class="drive-list-wrap">
                            <li>
                                <router-link to="/all-files">
                                    <img src="../../assets/images/icon/folder-2.svg" alt="folder-2">
                                    All Files
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/my-devices">
                                    <img src="../../assets/images/icon/monitor.svg" alt="monitor">
                                    My Devices
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/recent">
                                    <img src="../../assets/images/icon/clock.svg" alt="clock">
                                    Recent
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/important">
                                    <img src="../../assets/images/icon/star.svg" alt="star">
                                    Important
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/deleted-files">
                                    <img src="../../assets/images/icon/trash.svg" alt="trash">
                                    Deleted Files
                                </router-link>
                            </li>
                        </ul>

                        <h4>File Library</h4>

                        <ul class="drive-list-wrap">
                            <li>
                                <router-link to="/documents">
                                    <img src="../../assets/images/icon/save-2.svg" alt="save-2">
                                    Documents
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/images">
                                    <img src="../../assets/images/icon/gallery-2.svg" alt="gallery">
                                    Images
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/videos">
                                    <img src="../../assets/images/icon/video-2.svg" alt="video-2">
                                    Videos
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/audio">
                                    <img src="../../assets/images/icon/microphone.svg" alt="star">
                                    Audios
                                </router-link>
                            </li>
                        </ul>

                        <h4>Storage Status</h4>
                        <div class="storage-status">
                            <p><span>17.5 GB</span> used of 50 GB</p>
                            <img src="../../assets/images/icon/cloud-add.svg" alt="cloud-add">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Example with label"
                                    style="width: 65.35%;" aria-valuenow="65.35" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <a href="#">Upgrade Storage</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-right">
                <div class="my-file-area">
                    <div class="form-file-upload d-flex justify-content-between align-items-center">
                        <form @submit.prevent class="search-form">
                            <input type="text" class="form-control" placeholder="Search Files">
                            <img src="../../assets/images/icon/search-normal.svg" alt="search-normal">
                        </form>

                        <ul class="create-upload d-flex">
                            <li>
                                <a href="#" class="upload-btn">
                                    Create
                                    <img src="../../assets/images/icon/add-circle.svg" alt="add-circle">
                                </a>
                            </li>
                            <li>
                                <a href="#" class="upload-btn upload">
                                    Upload
                                    <img src="../../assets/images/icon/export.svg" alt="export">
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="quick-access">

                        <h3>Browse Files</h3>

                        <div class="row">
                            <div class="col-xxl-3 col-sm-6" v-for="file in fileList" :key="file">
                                <div class="single-folder">
                                    <div class="dropdown text-end">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <img src="../../assets/images/icon/dots.svg" alt="dots">
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item d-flex align-items-center" onclick="sendData(file)">
                                                <i class='bx bx-download'></i> Download File
                                            </a>
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <i class='bx bx-trash'></i> Delete File
                                            </a>
                                        </div>
                                    </div>
                                    <div class="text-center file">
                                        <img v-if="file.name.endsWith('.docx')" src="../../assets/images/file/doc.svg"
                                            alt="file">
                                        <img v-if="file.name.endsWith('.pdf')" src="../../assets/images/file/pdf.svg"
                                            alt="file">
                                        <img v-if="file.name.endsWith('.xsls')" src="../../assets/images/file/excel.svg"
                                            alt="file">
                                    </div>
                                    <h6>{{ file.name }}</h6>
                                    <span class="mb"> {{ file.size }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AllFiles',
    data() {
        return {
            fileList: []
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            // Replace with your API endpoint
            const apiEndpoint = 'api/ocr/list_files'
            axios.get(apiEndpoint)
                .then(response => {
                    this.fileList = response.data.file_list
                })
                .catch(error => {
                    console.log(error)
                })
        },
        onClick() {

        }
    },
    sendData(data) {
        axios({
            url: 'https://api.farhanaulianda.tech/api/ocr/download_file/' + data,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'file.pdf');
            document.body.appendChild(fileLink);

            fileLink.click();
        });
    }

}
</script>

<style lang="scss">
.my-devices-area {
    .sidebar-left {
        float: left;

        .sidebar {
            background-color: var(--white-color);
            box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
            padding: 30px;
            width: 400px;
            border-radius: 30px;
            margin-bottom: 24px;

            .sidebar-content {
                height: calc(100vh - 321px);
            }

            .drive-wrap {
                h4 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 30px;
                }
            }

            .drive-list-wrap {
                padding-left: 0;
                margin-bottom: 0;
                list-style-type: none;
                border-bottom: 1px solid #EBF1FF;
                margin-bottom: 30px;

                li {
                    margin-bottom: 30px;

                    a {
                        font-weight: 500;
                        font-size: 16px;
                        color: #67748E;

                        img {
                            margin-right: 5px;
                            position: relative;
                            top: -2px;
                        }

                        &.active {
                            background-color: #5C31D6;
                            color: var(--white-color);
                            display: block;
                            width: 100%;
                            padding: 10px 20px;
                            border-radius: 10px;

                            img {
                                filter: brightness(100);
                            }
                        }
                    }
                }
            }

            .storage-status {
                position: relative;
                padding-left: 40px;

                img {
                    position: absolute;
                    top: 17px;
                    left: 0;
                }

                .progress {
                    background-color: transparent;
                    position: relative;
                    z-index: 1;
                    border-radius: 30px;
                    --bs-progress-height: 10px;

                    &::before {
                        content: "";
                        position: absolute;
                        top: 3px;
                        left: 0;
                        width: 100%;
                        height: 5px;
                        background-color: #E2EAFB;
                        z-index: -1;
                        border-radius: 30px;
                    }

                    .progress-bar {
                        border-radius: 30px;
                    }
                }

                p {
                    margin-bottom: 5px;
                    font-size: 14px;
                    color: #292D32;

                    span {
                        color: #5C31D6;
                    }
                }

                a {
                    color: #1765FD;
                    font-size: 14px;
                    margin-top: 5px;
                    display: inline-block;
                }
            }
        }
    }

    .content-right {
        float: right;
        width: calc(100% - 424px);
        margin-bottom: 24px;

        .my-file-area {
            background-color: var(--white-color);
            box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
            padding: 30px;
            padding-bottom: 0;
            border-radius: 30px;

            .form-file-upload {
                border-bottom: 1px solid #EBF1FF;
                padding-bottom: 30px;
                margin-bottom: 30px;

                .search-form {
                    position: relative;

                    .form-control {
                        border-radius: 50px;
                        padding-left: 55px;
                        height: 50px;
                    }

                    img {
                        position: absolute;
                        top: 15px;
                        left: 20px;
                    }
                }

                .create-upload {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 0;

                    li {
                        margin-right: 30px;

                        &:last-child {
                            margin-right: 0;
                        }

                        .upload-btn {
                            background-color: var(--main-color);
                            color: var(--white-color);
                            padding: 10px 20px;
                            border-radius: 10px;

                            img {
                                margin-left: 5px;
                            }

                            &.upload {
                                background-color: #5C31D6;
                            }
                        }
                    }
                }
            }

            .quick-access {
                h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 30px;
                }
            }

            .single-folder {
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 5px 25px #CAD6F266;
                border: 1px solid #DFE9FF;
                border-radius: 20px;
                padding: 30px;
                position: relative;
                margin-bottom: 30px;

                .file {
                    img {
                        height: 97px;
                    }
                }

                .dropdown {
                    margin-bottom: 20px;

                    .dropdown-toggle {
                        background-color: transparent;
                        position: relative;

                        &::after {
                            display: none;
                        }
                    }

                    .dropdown-menu {
                        background: #FFFFFF 0% 0% no-repeat padding-box;
                        box-shadow: 0px 5px 25px #CAD6F266;
                        border: 1px solid #DFE9FF;
                        border-radius: 10PX;
                        margin-top: 35px;
                        display: block;
                        opacity: 0;
                        visibility: hidden;
                        transition: .3s;
                        transform: unset !important;
                        left: auto !important;
                        right: 0 !important;

                        &.show {
                            margin-top: 28px !important;
                            opacity: 1;
                            visibility: visible;
                        }

                        .dropdown-item {
                            color: var(--heading-color);
                            padding: 5px 15px 5px 36px;
                            position: relative;

                            font: {
                                size: 12px;
                            }

                            ;

                            i {
                                color: #686868;
                                transition: var(--transition);
                                position: absolute;
                                left: 15px;
                                top: 6px;

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

                            &:hover {
                                background-color: transparent;
                                color: var(--main-color);

                                i {
                                    color: var(--main-color);
                                }
                            }
                        }
                    }
                }

                h6 {
                    font-size: 16px;
                    margin-bottom: 5px;
                    margin-top: 20px;
                }

                span {
                    font-size: 12px;
                    font-weight: 500;
                }
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .my-devices-area {
        .sidebar-left {
            float: unset;

            .sidebar {
                width: 100%;
                padding: 20px;

                .drive-list-wrap {
                    li {
                        a {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        .content-right {
            width: unset;

            .my-file-area {
                padding: 20px;
                padding-bottom: 0;

                .form-file-upload {
                    display: block !important;

                    .create-upload li .upload-btn {
                        padding: 10px 15px;
                        border-radius: 10px;
                        display: inline-block;
                        margin-top: 10px;
                    }
                }

                .form-file-upload {
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }

                .single-folde {
                    padding: 20px;
                }
            }
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .my-devices-area {
        .sidebar-left {
            float: unset;

            .sidebar {
                width: 100%;
                padding: 20px;

                .drive-list-wrap {
                    li {
                        a {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        .content-right {
            width: unset;

            .my-file-area {
                padding: 20px;
                padding-bottom: 0;

                .form-file-upload {
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }

                .single-folde {
                    padding: 20px;
                }
            }
        }
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .my-devices-area {
        .sidebar-left {
            .sidebar {
                width: 280px;
            }
        }

        .content-right {
            width: calc(100% - 300px);
        }
    }
}
</style>