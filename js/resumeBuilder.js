/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
   	'name': 'Han Solo',
   	'role': 'Rebellion General',
    'welcomeMessage': 'Never Tell Me the Odds',
    'bioPic': 'images/han-solo.jpg',
   	'contacts' : {
      'mobile': '1-800-Han-Solo',
   		'email': 'hansolo@gmail.com',
   		'github': 'HanSolo',
   		'twitter': '@RealHanSolo',
   		'location': 'Miami'
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
    'url' : ''
  }, {
    'name': 'Galaxy Piloting',
    "degree": 'BA',
    "dates": '1960-1962',
    "location": 'Chicago',
    "majors": ['Aviation'],
    'url' : ''
	}],
	"onlineCourses": [{
		'title': 'Front End Web Developer Nanodegree',
		'school': 'Udacity',
		'dates': '2016-2017',
		'url': "http://udacity.com"
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
  // TODO: StarKiller Base from SW7: Force Awakens. Include image of the base, or epic photo of Han & chewy in the snow with finn, or image of han dying.
	'projects': [{
		'title': 'Death Star',
		'dates': '1976-1983',
		'description': 'Assisted in destroying the Death Star TWICE. Saved the Galaxy. Restored Peace.',
		'images': ['images/death-star.jpg']
  },{
    'title': 'Kessel Run',
    'dates': '1968',
    'description': 'Piloting the Millenium Falcon I made the Kessel Run in less than 12 parsecs.',
    'images': ['images/falcon.jpg']
	}]
};

bio.display = function () {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedTwitter= HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $("#header").prepend(formattedName,formattedRole);
  $("#header").append(formattedBiopic,formattedWelcomeMsg);
  $("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedBioSkills = HTMLskills.replace('%data%', skill)
      $('#skills').append(formattedBioSkills)
    });
  }

  // contact details for the footer
  //TODO: change into social media icons
  $('#footerContacts').append(formattedEmail,formattedTwitter,formattedGithub)
};
education.display = function () {
  // start education entries.
  $("#education").append(HTMLschoolStart);

  education.schools.forEach(function(school) {
    var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);

    $('.education-entry:last').append(formattedSchoolNameDegree);
    $('.education-entry:last').append(formattedSchoolDates,formattedSchoolLocation);

    if (school.majors.length > 0) {
      $('#education').append(HTMLschoolStart);
      school.majors.forEach(function(major) {
        var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', major)
        $('.education-entry:last').append(formattedSchoolMajors)
      });
    }

    var formattedSchoolUrl = HTMLschoolURL.replace("%data%", school.url);
    $('.education-entry:last').append(formattedSchoolUrl);
  });


  // 1) append 'Onlinecourses<h3>' after school loop
  // 2) repeat HTMLschoolStart, so Online Courses append after main education
  $("#education").append(HTMLonlineClasses,HTMLschoolStart);
  education.onlineCourses.forEach(function(onlineCourse) {

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
    var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);

    $(".education-entry:last").append(formattedOnlineTitleSchool, formattedOnlineCourseDates, formattedOnlineUrl);
  });
}
function displayWork() {
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);

    $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
  }
}
projects.display = function() {
  for (project in projects.projects) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
}



bio.display();
education.display();
displayWork();
projects.display();






// log clicks locations
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

//internationalize names
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" " + name[1];
}
$('#main').append(internationalizeButton);

// google maps
$('#mapDiv').append(googleMap);
