
import Mutil from 'util/mm.jsx'

// 因为mm.jsx在一个类里面，需要new 出来
const _mm = new Mutil()

class Statistic {
    getHomeCount(){
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        })
    }
}

export default Statistic