var bio = {
	"name" : "Jennie Buechner",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+34 633 78 37 29",
		"email" : "janina.buechner@gmail.com",
		"github" : "jbuechs",
		"twitter" : "@jbuechs",
		"location" : "Madrid"
	},
	"picture" : "images/jennie.jpg",
	"welcome" : "I hope you enjoy this resume",
	"skills" : ["teaching",
				"learning",
				"programming",
				"rugby"]
}

// Resume title and subtitle
/*
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

// Contacts
/*
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
*/

// Picture and Welcome
/*
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);
*/

// Skills
/*
var skill1 = HTMLskills.replace("%data%", bio.skills[0]);
var skill2 = HTMLskills.replace("%data%", bio.skills[1]);
var skill3 = HTMLskills.replace("%data%", bio.skills[2]);
var skill4 = HTMLskills.replace("%data%", bio.skills[3]);

$("#header").append(HTMLskillsStart);
$("#skills").append(skill1);
$("#skills").append(skill2);
$("#skills").append(skill3);
$("#skills").append(skill4);
*/

// Work
var work = {
	"jobs" : [
		{
			"employer" : "The American School of Madrid",
			"title" : "Teacher",
			"location" : "Madrid, Spain",
			"dates" : "2010-2015",
			"description" : "Taught IB ITGS and Middle School Game Design & Intro CS courses"
		},
		{
			"employer" : "The International School of Phnom Penh",
			"title" : "Technology Coordinator & Teacher",
			"location" : "Phnom Penh, Cambodia",
			"dates" : "2006-2009",
			"description" : "Coordinated technology professional development and budgeting, taught grades 6-10 MYP Computer Technology"
		},
		{
			"employer" : "Henley Middle School",
			"title" : "Math Teacher",
			"location" : "Ablemarle County, VA",
			"dates" : "2004-2006",
			"description" : "Taught 7th grade math classes - regular and accelerated"
		},
		{
			"employer" : "Agnor-Hurt Elementary School",
			"title" : "Fifth Grade Teacher",
			"location" : "Ablemarle County, VA",
			"dates" : "2002-2004",
			"description" : ""
		}
	]
}

var projects = {

}


{};
work.position = "Middle/High School Teacher";
work.employer = "The American School of Madrid";
work.years = "2010-2015";
work.city = "Madrid";

/*
var formattedPosition = HTMLworkTitle.replace("%data%", work.position);

$("#workExperience").append(HTMLworkStart);
*/

// Education
var education = {
	"schools" : [
		{
			"name" : "Drexel University",
			"city" : "Philadelphia, PA",
			"major" : "MS in Learning Technologies",
			"minor" : "Concentration: Learning in Game-Based Environments",
			"gradYear" : 2013,
			"url" : "http://www.drexel.com/online-degrees/education-degrees/ms-learningtech/index.aspx"
		},
		{
			"name" : "University of Virginia",
			"city" : "Charlottesville, VA",
			"major" : "Masters in Teaching",
			"minor" : "Elementary Education (k-8)",
			"gradYear" : 2002,
			"url" : "http://curry.virginia.edu/academics/degrees/master-of-teaching/master-of-teaching-elementary-education"
		},
		{
			"name" : "University of Virginia",
			"city" : "Charlottesville, VA",
			"major" : "BA",
			"minor" : "Psychology",
			"gradYear" : 2002,
			"url" : "http://college.artsandsciences.virginia.edu/degreeprograms"
		}
		],
	"onlineCourses" : [
		{
			"title" : "Introduction to Java Programming",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/intro-to-java-programming--cs046"
		},
		{
			"title" : "Introduction to HTML and CSS",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
				{
			"title" : "An Introduction to Interactive Programming in Python",
			"school" : "Coursera",
			"dates" : 2015,
			"url" : "https://www.coursera.org/course/interactivepython1"
		}
	]
};

/*
$("#education").append(HTMLschoolStart);
*/
