/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
   	'name': 'Han Solo',
   	'role': 'Rebellion General',
    'welcomeMessage': 'never tell me the odds',
    'bioPic': 'images/han-solo.jpg',
   	'contacts' : {
      'mobile': '1-800-Han-Solo',
   		'email': 'hansolo@gmail.com',
   		'github': 'HanSolo',
   		'twitter': '@RealHanSolo',
   		'location': 'Miami'
   	},
   	'skills': [
   		'Smuggling ', ' Piloting ', ' Improvising ', ' Saving the Galaxy '
   	]
  };

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$('#header').append(formattedMobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
$('#header').append(formattedEmail);
var formattedTwitter= HTMLtwitter.replace('%data%', bio.contacts.twitter);
$('#header').append(formattedTwitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
$('#header').append(formattedGithub);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
$('#header').append(formattedLocation);
var formattedBiopic = HTMLbioPic.replace('%data%', bio.bioPic);
$('#header').append(formattedBiopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').append(formattedWelcomeMsg);
if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace('%data%', bio.skills);
  $('#skills').append(formattedSkills);
}
// var work = {};
// work.position = 'General';
// work.employer = 'Rebel Alliance'
// work.years = '39'
// work.location = 'Washington D.C.'
// var education = {};
// education['name'] = 'Galaxy Smuggling';
// education['years'] = '1963'
// education['location'] = 'New York'
// $('#main').append(work.position)
// $('#main').append(education['name'])

var education = {
	'schools': [{
    "name": 'Galaxy Smuggling',
    "degree": 'Masters',
    "dates": '1963',
    'location': 'New York',
    "major": ['Smuggling']
  }, {
    'name': 'Galaxy Piloting',
    "degree": 'BA',
    "dates": '1960-1962',
    "location": 'Chicago',
    "major": ['Aviation']
	}],
	"onlineCourses": [{
		'title': 'Front End Web Developer Nanodegree',
		'school': 'Udacity',
		'dates': '2016-2017',
		'url': "http://udacity.com"
	}]
};
education.display = function() {
  for (school in education.schools) {
    $('#education').append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $('.education-entry:last').append(formattedNameDegree);

    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    $('.education-entry:last').append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
    $('.education-entry:last').append(formattedLocation);

    if (education.schools[school].major.length > 0) {
      for (major in education.schools[school].major) {
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
        $('.education-entry:last').append(formattedMajor);
      }
    }
  }
}
education.display();

var work = {
	'jobs': [{
		'employer': 'Galaxy Dangerous Pilots',
		'title': 'Rookie Pilot',
		'location': 'Buenos Aires, Argentina',
		'dates': '1964 - 1966',
		'description': 'Learned the tools of my trade. Refined my craft and skills.Learned what the galaxy has to offer.'
	}, {
		'employer': 'Freelance Smuggler',
		'title': 'Captain',
		'location': 'Miami, Florida',
		'dates': '1966 - 1976',
		'description': 'A freelance smuggler for myself and my co-pilot Chewbacca. Made the kessel run in less than 12 parsecs with my ship the Millenium Falcon. Successfully avoided detection and consistently outran Imperial Troops.'
	}, {
		'employer': 'Rebel Alliance',
		'title': 'General',
		'location': 'Tikal, Guatemala',
		'dates': '1976 - Present',
		'description': 'General in the rebellion against the Empire. Participated in destroying both Death Stars. Saved the galaxy, got the girl, and restored peace to the galaxy thanks to myself, Chewy, Leia and Luke.'
	}]
};
function displayWork() {
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
    $('.work-entry:last').append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
    $('.work-entry:last').append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
    $('.work-entry:last').append(formattedDescription);
  }
}
displayWork();

var projects = {
	'projects': [{
		'title': 'Kessel Run',
		'dates': '1968',
		'description': 'Piloting the Millenium Falcon I made the Kessel Run in less than 12 parsecs.',
    'images': ['images/falcon.jpg']
	}, {
		'title': 'Death Star',
		'dates': '1976-1983',
		'description': 'Assisted in destroying the Death Star TWICE. Saved the Galaxy. Restored Peace.',
		'images': ['images/death-star.jpg']
	}]
};
projects.display = function() {
  for (project in projects.projects) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
    $('.project-entry:last').append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
     for (image in projects.projects[project].images) {
       var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
       $('.project-entry:last').append(formattedImage);
     }
    }
  }
}
projects.display();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" " + name[1];
}
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
