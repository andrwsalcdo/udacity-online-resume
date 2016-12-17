/*global $: true, HTMLheaderName: true,
HTMLheaderRole, HTMLmobile: true,
HTMLemail, HTMLtwitter, HTMLgithub, HTMLlocation,	HTMLbioPic,	HTMLwelcomeMsg,HTMLskillsStart
	,HTMLskills,HTMLschoolStart
,HTMLschoolStart,HTMLschoolStart,HTMLschoolName,HTMLschoolDegree,HTMLschoolDates,HTMLschoolLocation,HTMLschoolMajor,HTMLschoolURL,HTMLonlineClasses: true,

HTMLonlineTitle,HTMLonlineSchool,HTMLonlineDates,HTMLonlineURL,HTMLworkStart: true,
HTMLworkEmployer,HTMLworkTitle,HTMLworkDates,HTMLworkLocation,HTMLworkDescription,HTMLprojectStart: true,
HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription,HTMLprojectImage: true,
logClicks,googleMap: true

*/
var bio = {
   'gif': 'images/falcon-gif.gif',
   'name': 'Han Solo',
   'role': 'Rebellion General',
   'welcomeMessage': 'Never Tell Me the Odds!',
   'biopic': 'images/hanchewy1.gif',
   'contacts': {
      'mobile': '1-800-Han-Solo',
      'email': 'hansolo@gmail.com',
      'github': 'HanSolo',
      'twitter': '@RealHanSolo',
      'location': 'Miami',
      "facebook_logo": "<a href='https://www.facebook.com/'><i class='fa fa-facebook-official fa-2x' aria-hidden='true'></i>",
      "github_logo": "<a href='https://www.github.com/'><i class='fa fa-github fa-2x' aria-hidden='true'></i>",
      "linkedin_logo": "<a href='https://www.linkedin.com/'><i class='fa fa-linkedin-square fa-2x' aria-hidden='true'></i>"
   },
   'skills': [
      'Smuggling', ' Piloting', ' Improvising', ' Saving the Galaxy'
   ]
};
var education = {
   'schools': [{
      "name": 'Galaxy Smuggling',
      "degree": 'Masters',
      "dates": '1963',
      'location': 'New York',
      "majors": ['Smuggling'],
      'url': 'http://starwars.wikia.com/wiki/Han_Solo'
   }, {
      'name': 'Galaxy Piloting',
      "degree": 'BA',
      "dates": '1960-1962',
      "location": 'Chicago',
      "majors": ['Aviation'],
      'url': 'http://starwars.wikia.com/wiki/Han_Solo'
   }],
   "onlineCourses": [{
      'title': 'Front End Web Developer Nanodegree',
      'school': 'Udacity',
      'dates': '2016-2017',
      'url': "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1&v=fe1"
   }]
};
var work = {
   'jobs': [{
      'employer': 'Rebel Alliance',
      'title': 'General',
      'location': 'Tikal, Guatemala',
      'dates': '1976 - Present',
      'description': 'General in the rebellion against the Empire. Participated in destroying both Death Stars. Saved the galaxy, got the girl, and restored peace to the galaxy thanks to myself, Chewy, Leia and Luke.'
   }, {
      'employer': 'Freelance Smuggler',
      'title': 'Captain',
      'location': 'Miami, Florida',
      'dates': '1966 - 1976',
      'description': 'A freelance smuggler for myself and my co-pilot Chewbacca. Made the kessel run in less than 12 parsecs with my ship the Millenium Falcon. Successfully avoided detection and consistently outran Imperial Troops.'
   }, {
      'employer': 'Galaxy Dangerous Pilots',
      'title': 'Rookie Pilot',
      'location': 'Buenos Aires, Argentina',
      'dates': '1964 - 1966',
      'description': 'Learned the tools of my trade. Refined my craft and skills.Learned what the galaxy has to offer.'
   }]
};
var projects = {
   'projects': [{
      'title': 'StarKiller Base',
      'dates': '2015',
      'description': "Led a small team to disable the base's shields.And...Spoiler Alert!",
      'images': [
         'images/han-kylo1.gif'
      ]
   }, {
      'title': 'Death Star',
      'dates': '1976-1983',
      'description': 'Assisted in destroying the Death Star TWICE. Saved the Galaxy. Restored Peace. Got the Princess',
      'images': [
         'images/yahoo11.gif'
      ]
   }, {
      'title': 'Kessel Run',
      'dates': '1968',
      'description': 'Piloting the Millenium Falcon made the Kessel Run in less than 12 parsecs.',
      'images': [
         'images/wink11.gif'
      ]
   }]
};

bio.display = function () {
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   var formattedNameRole = formattedName + formattedRole;
   var formattedMobile = HTMLmobile.replace('%data%', bio.contacts
      .mobile);
   var formattedEmail = HTMLemail.replace('%data%', bio.contacts
      .email);
   var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts
      .twitter);
   var formattedGithub = HTMLgithub.replace('%data%', bio.contacts
      .github);
   var formattedLocation = HTMLlocation.replace('%data%', bio.contacts
      .location);
   var formattedbiopic = HTMLbioPic.replace('%data%', bio.biopic);
   var formattedWelcomeMsg = HTMLwelcomeMsg.replace(
      '%data%', bio.welcomeMessage);

   $("#header")
      .prepend(formattedNameRole);
   $("#header")
      .append(formattedbiopic, formattedWelcomeMsg);
   $("#topContacts")
      .append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub,
         formattedLocation);

   if (bio.skills.length > 0) {
      $('#header')
         .append(HTMLskillsStart);
      bio.skills.forEach(function (skill) {
         var formattedBioSkills =
            HTMLskills.replace(
               '%data%', skill
            );
         $('#skills')
            .append(
               formattedBioSkills
            );
      });
   }

   // contact details for the footer
   //TODO: change into social media icons
   // $('#footerContacts').append(formattedEmail,formattedTwitter,formattedGithub)
   $("#footerContacts")
      .append(bio.contacts.linkedin_logo);
   $("#footerContacts")
      .append(bio.contacts.facebook_logo);
   $("#footerContacts")
      .append(bio.contacts.github_logo);
};
education.display = function () {
   // start education entries.
   $("#education")
      .append(HTMLschoolStart);

   education.schools.forEach(function (school) {
      var formattedSchoolName =
         HTMLschoolName.replace(
            '%data%', school.name);
      var formattedSchoolDegree =
         HTMLschoolDegree.replace(
            '%data%', school.degree
         );
      var formattedSchoolNameDegree =
         formattedSchoolName +
         formattedSchoolDegree;
      var formattedSchoolUrl =
        formattedSchoolNameDegree.replace(
         "#", school.url);
      var formattedSchoolDates =
         HTMLschoolDates.replace(
            '%data%', school.dates);
      var formattedSchoolLocation =
         HTMLschoolLocation.replace(
            '%data%', school.location
         );

      $('.education-entry:last')
         .append(
            formattedSchoolUrl, formattedSchoolDates, formattedSchoolLocation
         );

      if (school.majors.length > 0) {
         $('#education')
            .append(
               HTMLschoolStart
            );
         school.majors.forEach(
            function (
               major
            ) {
               var
                  formattedSchoolMajors =
                  HTMLschoolMajor
                  .replace(
                     '%data%', major
                  );
               $
                  (
                     '.education-entry:last'
                  )
                  .append(
                     formattedSchoolMajors
                  );
            });
      }

   });

   // 1) append 'Onlinecourses<h3>' after school loop
   // 2) repeat HTMLschoolStart, so Online Courses append after main education
   $("#education")
      .append(HTMLonlineClasses, HTMLschoolStart);

   education.onlineCourses.forEach(function (onlineCourse) {

      var formattedOnlineTitle =
         HTMLonlineTitle.replace(
            "%data%", onlineCourse.title
         );
      var formattedOnlineSchool =
         HTMLonlineSchool.replace(
            "%data%", onlineCourse.school
         );
      var formattedOnlineTitleSchool =
         formattedOnlineTitle +
         formattedOnlineSchool;
      var formattedOnlineUrl =
       formattedOnlineTitleSchool.replace(
         "#", onlineCourse.url
       );
      var formattedOnlineCourseDates =
         HTMLonlineDates.replace(
            "%data%", onlineCourse.dates
         );

      $(".education-entry:last")
         .append(
            formattedOnlineUrl, formattedOnlineCourseDates
          );
   });
};
work.display = function () {
   if (work.jobs.length > 0) {
      $('#workExperience')
         .append(HTMLworkStart);
      work.jobs.forEach(function (job) {

         var formattedEmployer =
            HTMLworkEmployer
            .replace(
               '%data%', job.employer
            );
         var formattedTitle =
            HTMLworkTitle
            .replace(
               '%data%', job.title
            );
         var
            formattedEmployerTitle =
            formattedEmployer +
            formattedTitle;
         var formattedDates =
            HTMLworkDates
            .replace(
               '%data%', job.dates
            );
         var formattedLocation =
            HTMLworkLocation
            .replace(
               '%data%', job.location
            );
         var
            formattedDescription =
            HTMLworkDescription
            .replace(
               '%data%', job.description
            );

         $('.work-entry:last')
            .append(
               formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription
            );
      });
   }
};
projects.display = function () {
   if (projects.projects.length > 0) {
      $('#projects')
         .append(HTMLprojectStart);
      projects.projects.forEach(function (project) {
         var formattedTitle =
            HTMLprojectTitle
            .replace(
               '%data%', project
               .title
            );
         var formattedDates =
            HTMLprojectDates
            .replace(
               '%data%', project
               .dates
            );
         var
            formattedDescription =
            HTMLprojectDescription
            .replace(
               '%data%', project
               .description
            );

         if (project.images.length >
            0) {
            $('#projects')
               .append(
                  HTMLprojectStart
               );
            project.images
               .forEach(
                  function (
                     image
                  ) {
                     var
                        formattedImage =
                        HTMLprojectImage
                        .replace(
                           '%data%', image
                        );
                     $
                        (
                           '.project-entry:last'
                        )
                        .append(
                           formattedImage
                        );
                  }
               );
         }
         $(
               ".project-entry:last"
            )
            .prepend(
               formattedTitle, formattedDates, formattedDescription
            );

      });
   }
};



bio.display();
education.display();
work.display();
projects.display();




// log clicks locations
$(document)
   .click(function (loc) {
      // your code goes here
      var x = loc.pageX;
      var y = loc.pageY;

      logClicks(x, y);
   });

//internationalize names
// function inName(name) {
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//   return name[0] +" " + name[1];
// }
// $('#main').append(internationalizeButton);

// google maps
$('#mapDiv')
   .append(googleMap);
