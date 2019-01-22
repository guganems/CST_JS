$(function () {
    var url = "";
    const $form = $('#newPostForm');
    const $fileInput = $form.find("[name=image]");
    $fileInput.change(function ($ev) {
        console.log(this.files);

        const reader = new FileReader();
        reader.onload = function(){
            console.log(reader.result);
            url = reader.result;
            $('#imagePreview').attr('src', reader.result);
        }
        reader.readAsDataURL(this.files[0]);
    });
    $form.on('submit', function (ev) {
        ev.preventDefault();
        console.log($form.serializeArray());
        addCard($form.serializeArray()[0], $form.serializeArray()[1], url);
    });


    var openFile = function (input) {
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            const $img = $('#imagePreview');
            $img.attr('src', dataURL);
        };
        reader.readAsDataURL(input.files[0]);
    };
    // const $fileInput = $form.find("image");
    // const $fileInput = $form.find("image");    
});

function addCard(title, description, imageUrl){
    let posts = document.getElementById('posts');
    posts.innerHTML += (`
            <div class="card">
            <div class="card-body">
                <div class="media">
                    <img class="mr-3 rounded-circle avatar-img" src="https://scontent.fgyd4-2.fna.fbcdn.net/v/t1.0-9/16649236_1330583860349857_205386560467274228_n.jpg?_nc_cat=101&_nc_ht=scontent.fgyd4-2.fna&oh=8b82cc4f4b8c15b447164dc36eb61348&oe=5CBCC144" alt="Generic placeholder image">
                    <div class="media-body">
                        <h6 class="mt-0 mb-0"><a href="#">Guga</a> uploaded image</h6>
                        <small>6hr ago</small>
                    </div>
                </div>
            </div>
            <img class="card-img-top" src="${imageUrl}"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${title.value}</h5>
                <p class="card-text">${description.value}</p>
                <div class="row row-statistics">
                    <div class="col">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 10k
                    </div>
                    <div class="col">
                        <i class="fa fa-comment-o" aria-hidden="true"></i> 1.7k
                    </div>
                    <div class="col">
                        <i class="fa fa-share-alt" aria-hidden="true"></i> 200
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-outline-primary btn-block"><i class="fa fa-thumbs-o-up"
                                aria-hidden="true"></i> Like</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-outline-primary btn-block"><i class="fa fa-comment-o"
                                aria-hidden="true"></i> Comment</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}