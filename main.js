$(document).ready(function() {
    var candidateURL = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?per_page=500&created_after=2018-01-01" //starts from 2016-21-12 to 2017-01-11
    var candidateURL1 = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?per_page=500&created_after=2018-01-10"
    var candidateURL2 = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?per_page=500&created_after=2018-02-02" //starts from 2017-01-11 to 2017-01-24
    var candidateURL3 = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?per_page=500&created_after=2018-02-27"
    var candidateURL4 = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?per_page=500&created_after=2018-02-20"
    var candidateURL14 = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?page=43&per_page=500"
    var candidateURL5 = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?page=44&per_page=500"
    var candidateURL5 = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates?page=45&per_page=500"//to march 3

    var applicationsURL = "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/applications?page=40&per_page=500"
    var jobsURL= "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/jobs"
    var jobstagesURL="https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/job_stages"
    var activityURLexample= "https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates/6436341/activity_feed"
    var activityURLexample1="https://cors-anywhere.herokuapp.com/https://harvest.greenhouse.io/v1/candidates/6654574/activity_feed"
    var myUserName= '2c29982586eda1aa3cd947f0f247a37d-1'
    $.ajax({
        url: candidateURL,
        type: 'GET',
        contentType: "application/json",
      headers: {
        "Authorization": "Basic " + window.btoa(myUserName + ":")
      },
        success: function(data) {
            console.log(data);

        },
        error: function(err){
          console.log(err);
    }
    });
    //
    $.ajax({
        url: candidateURL1,
        type: 'GET',
        contentType: "application/json",
      headers: {
        "Authorization": "Basic " + window.btoa(myUserName + ":")
      },
        success: function(data) {
            console.log(data);

        },
        error: function(err){
          console.log(err);
    }
    });

    $.ajax({
        url: candidateURL2,
        type: 'GET',
        contentType: "application/json",
      headers: {
        "Authorization": "Basic " + window.btoa(myUserName + ":")
      },
        success: function(data) {
            console.log(data);

        },
        error: function(err){
          console.log(err);
    }
    });

    $.ajax({
        url: candidateURL3,
        type: 'GET',
        contentType: "application/json",
      headers: {
        "Authorization": "Basic " + window.btoa(myUserName + ":")
      },
        success: function(data) {
            console.log(data);

        },
        error: function(err){
          console.log(err);
    }
    });


        $.ajax({
            url: candidateURL4,
            type: 'GET',
            contentType: "application/json",
          headers: {
            "Authorization": "Basic " + window.btoa(myUserName + ":")
          },
            success: function(data) {
                console.log(data);

            },
            error: function(err){
              console.log(err);
        }
        });

    //     $.ajax({
    //         url: candidateURL5,
    //         type: 'GET',
    //         contentType: "application/json",
    //       headers: {
    //         "Authorization": "Basic " + window.btoa(myUserName + ":")
    //       },
    //         success: function(data) {
    //             console.log(data);
    //
    //         },
    //         error: function(err){
    //           console.log(err);
    //     }
    //     });
    // $.ajax({
    //     url: applicationsURL,
    //     type: 'GET',
    //     contentType: "application/json",
    //   headers: {
    //     "Authorization": "Basic " + window.btoa(myUserName + ":")
    //   },
    //     success: function(data) {
    //         console.log(data);
    //
    //     },
    //     error: function(err){
    //       console.log(err);
    // }
    // });
    //
    // $.ajax({
    //     url: jobsURL,
    //     type: 'GET',
    //     contentType: "application/json",
    //   headers: {
    //     "Authorization": "Basic " + window.btoa(myUserName + ":")
    //   },
    //     success: function(data) {
    //         console.log(data);
    //
    //     },
    //     error: function(err){
    //       console.log(err);
    // }
    // });
    //
    // $.ajax({
    //     url: activityURLexample,
    //     type: 'GET',
    //     contentType: "application/json",
    //   headers: {
    //     "Authorization": "Basic " + window.btoa(myUserName + ":")
    //   },
    //     success: function(data) {
    //         console.log(data);
    //
    //     },
    //     error: function(err){
    //       console.log(err);
    // }
    // });
    //
    // $.ajax({
    //     url: activityURLexample1,
    //     type: 'GET',
    //     contentType: "application/json",
    //   headers: {
    //     "Authorization": "Basic " + window.btoa(myUserName + ":")
    //   },
    //     success: function(data) {
    //         console.log(data);
    //
    //     },
    //     error: function(err){
    //       console.log(err);
    // }
    // });
    //
    // $.ajax({
    //     url: jobstagesURL,
    //     type: 'GET',
    //     contentType: "application/json",
    //   headers: {
    //     "Authorization": "Basic " + window.btoa(myUserName + ":")
    //   },
    //     success: function(data) {
    //         console.log(data);
    //
    //     },
    //     error: function(err){
    //       console.log(err);
    // }
    // });

 });
