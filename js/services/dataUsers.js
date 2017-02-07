app.factory('dataUsers', function ($location) {
    return {
        checkUser: function (user) {
            for (key in users) {
                if (users[key].log == user.log && users[key].pass == user.pass) {
                    $location.url("/home");
                    localStorage.setItem('name', users[key].name);
                    localStorage.setItem('log', users[key].log);
                    break;
                } else {
                    document.getElementsByClassName('wrong')[0].innerHTML="Wrong login or pasport";
                    setTimeout(function () {
                        document.getElementsByClassName('wrong')[0].innerHTML="";
                    }, 3000)
                }
            }
        },
        exitUser: function () {
            $location.url("/logIn");
            localStorage.clear();
        },
        regShow: function () {
            $location.url("/reg");
        },
        regUser: function (user) {
            users.push(user);
            $location.url("/logIn");
        },
        back: function () {
            $location.url("/logIn");
        },
        addPost: function (a, b, c, d) {
            if (a != "") {
                posts.unshift({
                    text: a,
                    name: b,
                    log: c,
                    time: d.slice(0,21)
                });
            }
        },
        deletePost: function (post) {
            if (post.log == localStorage.getItem('log')) {
                posts.splice(posts.indexOf(post), 1);
            } else {
                document.getElementsByClassName('wrong2')[posts.indexOf(post)].innerHTML = "IT'S NOT YOUR POST";
                setTimeout(function () {
                    document.getElementsByClassName('wrong2')[posts.indexOf(post)].innerHTML = "";
                }, 3000)

            }

        }
    }
});