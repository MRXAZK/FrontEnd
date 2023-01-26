<template>
    <div class="all-section-area">
        <MainHeader />
        <main class="main-content-wrap">
            <PageTitle mainTitle="All Files" pageTitle="All Files" />
            <AllFiles />
            <div class="flex-grow-1"></div>
            <FooterArea />
        </main>
    </div>
</template>

<script>
import MainHeader from '../Layouts/MainHeader'
import PageTitle from '../Common/PageTitle'
import AllFiles from '../AllFiles/AllFiles'
import FooterArea from '../Layouts/FooterArea'

export default {
    name: 'AllFilesPage',
    components: {
        MainHeader,
        PageTitle,
        AllFiles,
        FooterArea,
    },
    mounted() {
        document.body.classList.add('body-bg-f8faff')
    },
}
</script>