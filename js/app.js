(function() {

    let router = new Navigo(null, false);


    router
        .on({

            '/home': () => templates.get("home").then((tmpl) => $('#main').html(tmpl)),
            '/post': () => templates.get("post").then((tmpl) => $('#main').html(tmpl)),
            '/sign': () => templates.get("login").then((tmpl) => $('#main').html(tmpl)),
            '/register': () => templates.get("register").then((tmpl) => $('#main').html(tmpl))



        })
        .resolve();


    $(document).ready(function() {
        $("body").on('click', '#btn-register', () => {

            var email = $("#email-register").val();
            var password = $('#password-register').val();

            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(email, password);

            promise.then(user => console.log(user))
                .catch(e => console.log(e.message));
            router.navigate('/sign');
        });

        $("body").on('click', '#login-submit', () => {

            var email = $("#login-email").val();
            var password = $('#login-password').val();

            const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(email, password);

            promise.catch(e => console.log(e.message));

            router.navigate('/home');
            $('.register').html('Hello, ' + firebase.auth().currentUser.email);
        });
    })



}());