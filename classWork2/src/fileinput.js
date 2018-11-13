(function IIFE(){
    'use strict';

    class FileInput{
        constructor($input){
            const me = this;
            this.$input = $input;
            this.skelleton = this.getInitialStructure();


            this.$cstInput = $(this.skelleton);
            this.$cstInput.insertBefore($input);
            this.$btnChoose = this.$cstInput.find('.btn-choose-file');
            this.$inputPreview = this.$cstInput.find('.cst-input-preview');
            this.$btnRemove = this.$cstInput.find('.btn-remove');
            this.$btnChoose.append($input);

            this.$btnRemove.on('click', function(event){
                me.$inputPreview[0].innerHTML = "";
            });
            
            this.$input.on('change', function(event){
                let input = this;
                if (input.files && input.files[0]){
                    const reader = new FileReader();
                    reader.onload = function(e){
                        let $img = $('<img>', {
                            src: e.target.result
                        });
                        $($img).addClass('cst-input-preview');
                        me.$inputPreview.append($img);
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            });
        }

        getInitialStructure(){
           return `<div class = "cst-input">
            <div class = "cst-input-preview">

            </div>
            <br />
            <div class = "button-toolbar">
                <button class = "btn btn-primary btn-choose-file">
                    Choose File<input type="file">
                </button>
                <button class="btn btn-danger btn-remove">Remove</button>
            </div>
            </div>`;
        }
    }

    $.fn.cstFileInput = function(){
        new FileInput(this);
    }
})();
