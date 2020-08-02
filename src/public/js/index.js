//Javascript autocomplete function
$(function () {
    $("#names").autocomplete({
        source: function (request, response) {
           $.ajax({
              url: "/search_name",
              type: "GET",
              data: request,  
              success: function (data) {
                  console.log(data);
                  console.log(typeof(data));
                  response(JSON.parse(data))
                }
            });
        },
        //minlength sets the minimum character to start the search
        minLength: 1,
        focus: function (event, ui) {
            this.value = ui.item.label;
            event.preventDefault();
        },
        select: function (event, ui) {
            this.value = ui.item.label;
            $(this).next("input").val(ui.item.value);
            event.preventDefault();
        }
    });
});
