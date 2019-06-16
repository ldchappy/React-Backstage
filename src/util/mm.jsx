class Mutil {
    request(params){
        return new Promise( (resolve, reject) => {
            $.ajax({
                type : params.type || 'GET',
                url: params.url || '',
                dataType: params.dataType || 'JSON',
                data: params.data || null,
                success(res){
                    if( 0 === res.status){
                        typeof resolve === 'function' && resolve(res.data, res.msg)
                    }else if (10 === res.status){
                        this.doLogin()
                    }else{
                        typeof reject === 'function' && reject(res.msg || res.data)
                    }
                    
                },
                error(err){
                    typeof reject === 'function' && reject(err.statusText)
                }
            })
        })
    }
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
    // 获取url参数
    getUrlParam(name){
        // ?param=123&param1=456  window.location.search
        // param=123&param1=456  window.location.search.split('?')[1]
        let queryString = window.location.search.split('?')[1] || ''
        let reg = new RegExp("(^|&)" +name + "=([^&]*)(&|$)")
        let result = queryString.match(reg)
        return result ? decodeURIComponent(result[2]) : null
    }
    errorTips(errMsg){
        alert(errMsg || 'this not')
    }
    // 存储
    setStorage(name, data){
        let dataType = typeof data
        if(dataType === 'object'){
            window.localStorage.setItem(name, JSON.stringify(data))
        }else if(['number','string','boolean'].indexOf(dataType) >= 0 ){
            window.localStorage.setItem(name, data)
        }else{
            alert('this is not type')
        }
    }
    // 取存储
    getStorage(name){
        let data = window.localStorage.getItem(name)
        if(data){
            return JSON.parse(data)
        }else{
            return ''
        }
    }
    // 取存储
    removeStorage(name){
        window.localStorage.removeItem(name)
    }
}

export default Mutil