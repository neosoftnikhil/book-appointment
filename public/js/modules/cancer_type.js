/**
 * Created by Nikhil Jain on 18-01-2017.
 */

app.cancer_type = {

    events: {
        switch: function () {
            $(document).on('click', ".change_status", function () {
                var status = '1';
                if ($(this).closest("div.switch-button").children("input:checked").length > '0') {
                    status = '0';
                }

                var id = $(this).closest("div.switch-button").children("input").attr('rel');
                var spath = $(this).closest("div.switch-button").children("input").attr('formaction');
                var url = app.config.SITE_PATH + spath +'/change_status';
                app.changeStatus(id, url, status);
            });
        },

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
            app.cancer_type.events.switch();
            app.cancer_type.events.delete();
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
        app.cancer_type.events.init();
        app.dataTable.custom({"url":'cancer_type/datatable'});
        app.dataTable.eventFire();
    }
}