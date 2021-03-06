﻿const vue_base = {
    data: function () {
        return {
          //  show_modal: false,
          //  show_spinner: false,
          //  notification_message: null,
         //   bus: new Vue()
        };
    },
    methods: {
        get_request: function (url, parameter) {
            return axios.get(url, { params: parameter });
        },
        post_request: function (url, parameter) {

            const headers = {
                //Add any headers you may have here
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/json; charset=utf-8'
            };

            var self = this;
           // this.show_modal = false;
            //this.show_spinner = true;
            return axios({
                method: 'post',
                headers: headers,
                url: url,
                data: parameter
            }).catch(function (error) {
              //  self.show_notification(error);
               // this.show_spinner = false;
            });
        },
        post_request_file: function (url, parameter) {
            const headers = {
                'Content-Type': 'multipart/form-data'
            };

            return axios({
                method: 'post',
                headers: headers,
                url: url,
                data: parameter
            }).catch(function (error) {
                self.show_notification(error);
            });

        },

        show_error_notification: function (message) {
            $.toast({
                heading: '',
                text: message,
                showHideTransition: 'slide',
                position: 'bottom-right',
                icon: 'error'
            });
        },

        show_success_notification: function (message) {
            $.toast({
                heading: '',
                text: message,
                showHideTransition: 'slide',
                position: 'bottom-right',
                icon: 'success'
            });
        },
    }
};