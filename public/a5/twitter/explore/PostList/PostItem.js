const PostItem = (posts) => {
    return posts.hasimg ? (`
        <li class="list-group-item wd-counterBackround wd-counterLeft">
            <div class="wd-counter-box">
                <img class="wd-counter-img1 wd-counter2" width="48px" height="48px" src="${posts.profile}">
                <div class="wd-counterAH wd-counter2">
                    <span class="wd-countertext4">${posts.user}</span>
                    <i class="far fa-check-circle"></i>
                    <span style="color: darkgrey">${posts.handle}</span>
                    <span style="color: darkgrey"> - ${posts.time}</span>
                    <br>
                    <span>${posts.topic}</span>
                    <div class="wd-counterBO wd-twitter-rounded wd-counterM">
                        <img class="wd-counter-rounded-Img" src="${posts.image}">
                        <span class="wd-counterLS wd-counterColor1" style="color: white">${posts.title1}</span>
                        <br>
                        <span class="wd-counterLS wd-counteColor2">${posts.title2}</span>
                        <br>
                        <i class="fas fa-link wd-counterLS"></i>
                        <span class="wd-counterLS">${posts.link}</span>
                    </div>
                    
                <div class="wd-counterF">
                    <a href="#">
                        <i class="wd-counterHeart far fa-comment">
                            <span class="wd-counterLS">${posts.comments}</span>
                        </i>
                    </a>
                    <a href="#">
                        <i class="wd-counterHeart fas fa-retweet">
                            <span class="wd-counterLS">${posts.retweets}</span>
                        </i>
                    </a>
                    <a href="#">
                        <i class="wd-counterHeart far fa-heart">
                            <span class="wd-counterLS">${posts.hearts}</span>
                        </i>
                    </a>
                    <a href="#">
                        <i class="wd-counterHeart fas fa-upload"></i>
                    </a>
                </div>
            </div>
        </li>
        `) : (`
        <li class="list-group-item wd-counterBackround wd-counterLeft">
            <div class="wd-counter-box">
                <img class="wd-counter-img1 wd-counter2" width="48px" height="48px" src="${posts.profile}">
                <div class="wd-counterAH wd-counter2">
                    <span class="wd-countertext4">${posts.user}</span>
                    <i class="far fa-check-circle"></i>
                    <span style="color: darkgrey">${posts.handle}</span>
                    <span style="color: darkgrey"> - ${posts.time}</span>
                    <br>
                    <span>${posts.topic}</span>
                    <div class="wd-counterBO wd-twitter-rounded wd-counterM">
                        <img class="wd-counter-rounded-Img" src="${posts.image}">
                    </div>
                    
                <div class="wd-counterF">
                    <a href="#">
                        <i class="wd-counterHeart far fa-comment">
                            <span class="wd-counterLS">${posts.comments}</span>
                        </i>
                    </a>
                    <a href="#">
                        <i class="wd-counterHeart fas fa-retweet">
                            <span class="wd-counterLS">${posts.retweets}</span>
                        </i>
                    </a>
                    <a href="#">
                        <i class="wd-counterHeart far fa-heart">
                            <span class="wd-counterLS">${posts.hearts}</span>
                        </i>
                    </a>
                    <a href="#">
                        <i class="wd-counterHeart fas fa-upload"></i>
                    </a>
                </div>
            </div>
        </li>
        `);
}
export default PostItem;