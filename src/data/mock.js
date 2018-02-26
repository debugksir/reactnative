import Mock from 'mockjs';
const Random = Mock.Random;
export const articles = Mock.mock({
    "status":200,
    "data|6-15":[{
    		"key|+1": 0, 
    		"title": "@ctitle",
            "text": "@cparagraph",
            "author": "@cname",
            "agree|0-10000": 1,
            "comment|0-1000": 20,
            "collection|1-100": 10
        	}]
    	});
const bookTypes = ["玄幻", "悬疑", "文学", "言情", "励志", "学科"];
export const guesses = Mock.mock({
    "status": 200,
    "data|6":[{
        "key|+1": 0,
        "title": "@ctitle",
        "author": "@cname",
        "type|1": bookTypes,
        "image": Random.image('100x200')
    }]
})



