<template>
    <div id="header" >
        <img src="images/03.gif" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
        
    },
};
</script>

<style lang='scss' scpoed>
    #header{
        width: 100%;
        height: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        z-index: 11;
        img{
            height: 90%;
            
        }
    }
</style>
