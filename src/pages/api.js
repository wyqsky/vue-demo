import fecth from '../utils/fecth';

export default {
    articleList(data){
        return fecth.get('/articleList', data);
    },
    tagList(data){
        return fecth.get('/tagList', data);
    },
    postTest(data){
        return fecth.post('/postTest', data);
    },
    userInfo(data){
        return fecth.get('/userInfo', data);
    }
}
