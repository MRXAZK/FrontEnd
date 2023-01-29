<template>
    <div class="all-section-area">
        <MainHeader />
        <main class="main-content-wrap">
            <PageTitle mainTitle="Profile" pageTitle="Profile" />
            <ProfileContent />
            <div class="flex-grow-1"></div>
            <FooterArea />
        </main>
    </div>
</template>

<script>
import MainHeader from '../Layouts/MainHeader'
import PageTitle from '../Pages/PageTitle'
import ProfileContent from '../Pages/ProfileContent'
import FooterArea from '../Layouts/FooterArea'

const ProfilePage = () => {
    return (
        <div class="all-section-area">
            <MainHeader />
            <main class="main-content-wrap">
                <PageTitle mainTitle="Profile" pageTitle="Profile" />
                <ProfileContent />
                <div class="flex-grow-1"></div>
                <FooterArea />
            </main>
        </div>
    )
}

export default ProfilePage

</script>