var bio = {
	"name" : "Jennie Buechner",
	"role" : "Web Developer",
	"welcomeMessage" : "I am an aspiring web developer. My career up to this point has been teaching, which has been extremely rewarding. I have been drawn to teaching students and teachers about technology and have finally come to the realization that I want to get deeper into learning to code, and not just scratch the surface.",
	"contacts" : {
		"mobile" : "+34 633 78 37 29",
		"email" : "janina.buechner@gmail.com",
		"github" : "jbuechs",
		"twitter" : "@jbuechs",
		"location" : "Madrid"
	},
	"picture" : "images/jennie.jpg",
	"skills" : ["teaching",
				"learning",
				"programming",
				"rugby"]
};

var work = {
	"jobs" : [
		{
			"employer" : "The American School of Madrid",
			"title" : "Teacher and Technology Integration Specialist",
			"location" : "Madrid, Spain",
			"dates" : "2010-2015",
			"description" : "Teacher: Taught IB Standard Level Information Technology in a Global Society (ITGS). Taught Middle School Game Design, Digital Storytelling, and Introduction to Programming Android Apps. Developed curriculum and created original courses to improve the school’s technology course offerings. Technology Integration Specialist: Trained teachers and evaluated technology options to meet individual and school-wide technology goals, including Moodle and Smartboard training. Contributed to increased technology integration, including implementation of Google Apps for Education and over 130 Wordpress blogs",
			"url" : "http://www.asmadrid.org/"
		},
		{
			"employer" : "The International School of Phnom Penh",
			"title" : "Technology Coordinator & MYP Teacher",
			"location" : "Phnom Penh, Cambodia",
			"dates" : "2006-2009",
			"description" : "Technology Coordinator: Oversaw yearly technology budget and purchases through chairing the Technology Committee and participation in school-wide Leadership Team. Assisted in staff training and implementation of Blackbaud Administrative software. Presented workshops on a variety of topics to teachers on technology integration. MYP Technology Teacher: Created and taught MYP units to grades 6-10 students on digital audio, images/photography, publications, movies, websites, animation, and game making",
			"url" : "http://www.ispp.edu.kh/"
		},
		{
			"employer" : "Henley Middle School",
			"title" : "Math Teacher",
			"location" : "Ablemarle County, VA",
			"dates" : "2004-2006",
			"description" : "Taught 7th grade math classes - regular and accelerated. Achieved National Board Certification in Mathematics, Early Adolescence.",
			"url" : "http://www2.k12albemarle.org/school/hms/Pages/default.aspx"
		},
		{
			"employer" : "Agnor-Hurt Elementary School",
			"title" : "Fifth Grade Teacher",
			"location" : "Ablemarle County, VA",
			"dates" : "2002-2004",
			"description" : "Taught grade 5 - language arts, math, and social studies. Wrote grant for school to receive 30 iBooks and $15,000 in funds for technology, professional development, and support. Led team of teachers in planning and implementing an inquiry-based instructional model",
			"url" : "http://www2.k12albemarle.org/school/ahes/Pages/default.aspx"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Resume Project",
			"dates" : "May 2015",
			"description" : "An interactive resume built with javascript",
			"images" : ["images/resume1.png"]
		},
		{
			"title" : "Portfolio Project",
			"dates" : "May 2015",
			"description" : "A responsive portfolio built with HTML and CSS",
			"images" : ["images/portfolio1.png", "images/portfolio2.png"]
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "Drexel University",
			"location" : "Philadelphia, PA",
			"degree" : "MS in Learning Technologies",
			"majors" : ["Learning in Game-Based Environments"],
			"gradYear" : 2013,
			"url" : "http://www.drexel.com/online-degrees/education-degrees/ms-learningtech/index.aspx"
		},
		{
			"name" : "University of Virginia",
			"location" : "Charlottesville, VA",
			"degree" : "Masters in Teaching",
			"majors" : ["Elementary Education (k-8)"],
			"gradYear" : 2002,
			"url" : "http://curry.virginia.edu/academics/degrees/master-of-teaching/master-of-teaching-elementary-education"
		},
		{
			"name" : "University of Virginia",
			"location" : "Charlottesville, VA",
			"degree" : "BA",
			"majors" : ["Psychology"],
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

//Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);


//Skills

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = "";
	for (skill in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

//Employment

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var fullJob = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(fullJob);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

//Projects

projects.display = function() {
	for (item in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$(".project-entry:last").append(formattedProjTitle);
		$(".project-entry:last").append(formattedProjDates);
		$(".project-entry:last").append(formattedProjDescription);
		if (projects.projects[item].images.length > 0) {
			for (image in projects.projects[item].images)
			{
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[image]);
				$(".project-entry:last").append(formattedProjImage);
			}
		}
	}
}
projects.display();

//Education

education.displaySchools = function() {
	if (education.schools.length > 0) {
		for (entry in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[entry].name);
			formattedName = formattedName.replace("#", education.schools[entry].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[entry].degree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[entry].gradYear);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[entry].location);
			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedLocation);
			if (education.schools[entry].majors.length > 0) {
				for (major in education.schools[entry].majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[entry].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}
		}
	}
}

education.displaySchools();

education.displayOnline = function() {
	$("#education").append(HTMLonlineClasses);
	if (education.onlineCourses.length > 0) {
		for (entry in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[entry].title);
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[entry].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[entry].school);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[entry].dates);
			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(formattedSchool);
			$(".education-entry:last").append(formattedDate);
		}
	}
}

education.displayOnline();

//Map

$("#mapDiv").append(googleMap);