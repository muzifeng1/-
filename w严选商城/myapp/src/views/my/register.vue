<template>
    <div id='register'>
        <div>
            <p>新用户注册</p>
            <p>很高兴您将成为商城的会员（注册只需一步）</p>
            <p><input type="text" placeholder="账号"><i>😀</i></p>
            <p><input type="password"><i>😀</i></p>
            <p><input type="password"><i>😀</i></p>
            <p><input type="text" placeholder="用户名"><i>😀</i></p>
            <p><input type="text"><img src="images/01.jpg" alt=""></p>
            <p><span></span><span></span></p>
            <p><input type="text"><button class="border-left">获取验证码</button></p>
            <p id="btn-register"><span>立即注册</span></p>
            <router-link to="/login">已有账号，立即登陆</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped>
#register{
    width: 90%;
    height: 100%;
    overflow: auto;
    margin: 0.4rem;
    padding-bottom: 0.8rem;
    &::-webkit-scrollbar{
        display: none;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 0.01rem solid #eee;
        p{
        width: 5.4rem;
        height: 5.4rem;
        border: 0.01rem solid rgb(56, 219, 36);
        margin-top: 0.24rem;
        border-radius: 0.1rem;
        display: flex;
        align-items: center;
        height: 1rem;
        position: relative;
        background-color: #eee;
            input{
                border: none;
                outline: none;
                padding-left: 0.2rem;
                left: 0;
                background-color: #eee;
            }
            i{
                position: absolute;
                right: 0;
                padding-right: 0.2rem;
                font-size: 0.26rem;
            }
        }
        p:nth-child(1),p:nth-child(2){
            border: none;
            background-color: #fff;
        }
        p:nth-child(1){
            font-size: 0.44rem;
            color: #666;
            margin-top: 0.72rem;
        }
        p:nth-child(2){
            font-size: 0.3rem;
            color: #333;
            margin: 0.55rem 0 0.32rem;
        }
        p:nth-child(3),p:nth-child(4){
            input{
                width: 3.64rem;
            }
        }

        p:nth-child(7),p:nth-child(8),p:nth-child(9){
            border: none;
        }
        p:nth-child(7){
            input{
                width: 50%;
            }
            img{
                width: 50%;
                height: 100%;
            }
        }
        p:nth-child(9){
            input{
                width: 50%;
            }
            button{
                width: 50%;
                height: 100%;
                border:none;
                outline: none;
                text-align: center;
            }
        }
        #btn-register{
            width: 4.18rem;
            height: 0.9rem;
            background: linear-gradient(90deg, #5ea6f8, #bb87f6);
            font-size: 0.32rem;
            color: #fff;
            text-align: center;
            letter-spacing: 0.1rem;
            border: none;
            border-radius: 0.1rem;
            margin-bottom: 0.2rem;
            span{
                width: 100%;
                line-height: 0.8rem;
                text-align: center;
            }
        }
        a{
            text-align: center;
            text-decoration: none;
            color: blue;
            font-size: 0.26rem;
            margin: 0.2rem 0;
        }
    }
}

</style>
