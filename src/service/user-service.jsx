import Mutil from 'util/mm.jsx'

// 因为mm.jsx在一个类里面，需要new 出来
const _mm = new Mutil()

class User{
    login(loginInfo){
        return _mm.request({
            type: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username)
        let password = $.trim(loginInfo.password)

        if(typeof username !== 'string' || username.length === 0){
            return {
                status: false,
                msg: '用户名不能为空'
            }
        }
        if(typeof password !== 'string' || password.length === 0){
            return {
                status: false,
                msg: '密码不能为空'
            }
        }
        return {
            status: true,
            msg: '验证通过'
        }
    }
    logout(){
        return _mm.request({
            type: 'POST',
            url: '/user/logout.do'
        })
    }
}

export default User