/**
 * Created by Mobio Solutions on 18-01-2017.
 */

app.enquiry = {

    events: {
        switch: function () {},

        delete: function () {
            $(document).on('click', ".deleteRecord", function () {
                var dpath = $(this).attr('formaction');
                var result = confirm("Are you sure you want to delete this "+dpath.toUpperCase()+"?");
                if (result) {
                    var id = $(this).attr('rel');
                    var url = app.config.SITE_PATH + dpath +'/delete';
                    app.deleteRecord(id, url);
                }
            });
        },

        init: function () {
            app.enquiry.events.switch();
            app.enquiry.events.delete();
            app.dataTable.search();
            app.dataTable.reset();

        },

    },

    action: {
        event:{
            common:function () {},

            custome_validations:function () {
                var validations = {
                    rules:{
                        mobile_number:{
                            minlength : '10',
                            maxlength : '10',
                        }
                    },
                    messages:{
                        mobile_number:{
                            minlength : 'Mobile Number should be atleast 10 Digit long',
                            maxlength : 'Mobile Number should not be greater 10 Digit',
                        },
                    },
                    errorPlacement: function (error, element) {
                        element.after(error);
                    }
                };
                return validations;
            }
        }
    },

    init: function () {
        app.enquiry.events.init();
        app.dataTable.custom({"url":'enquiry/datatable'});
        app.dataTable.eventFire();
    }
}